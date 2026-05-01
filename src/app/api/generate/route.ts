import { NextResponse } from 'next/server';
import { OpenRouterService } from '@/services/openrouter';
import { extractCodeFromMarkdown } from '@/lib/parser';

// İstemciye (frontend) döndüreceğimiz standart yapının arayüzü
export interface UnifiedResponse {
  modelName: string;
  generatedCode: string | null;
  latency: number;
  status: 'success' | 'error';
  errorMessage?: string;
}

export async function POST(request: Request) {
  try {
    const { prompt, models } = await request.json();

    if (!prompt || !models || !Array.isArray(models) || models.length === 0) {
      return NextResponse.json(
        { error: 'Prompt ve model listesi (Array) zorunludur.' },
        { status: 400 }
      );
    }

    const openRouterService = new OpenRouterService();

    // Her bir servise atılacak isteği zaman ölçümüyle sarıp Promise döndüren yardımcı fonksiyon.
    const createModelPromise = async (modelId: string, userPrompt: string): Promise<UnifiedResponse> => {
      const startTime = performance.now();
      
      try {
        // İlgili modeli OpenRouter üzerinden çağırıyoruz
        const generatedCode = await openRouterService.generateCode(modelId, userPrompt);
        const endTime = performance.now();
        
        return {
          modelName: modelId,
          generatedCode,
          latency: Number((endTime - startTime).toFixed(2)),
          status: 'success'
        };

      } catch (error: any) {
        // Hata durumunda (timeout vs) gecikme süresini kaydetmeye devam ediyoruz
        const endTime = performance.now();
        
        // allSettled'ın "rejected" bloğuna yakalanması için Promise.reject fırlatıyoruz 
        // Yanında gecikmeyi ve hata parçasını da ekleyerek reject ediyoruz.
        return Promise.reject({
          modelName: modelId,
          latency: Number((endTime - startTime).toFixed(2)),
          errorMessage: error.message || 'API isteği başarısız oldu'
        });
      }
    };

    // Modelleri ücretli ve ücretsiz (:free) olarak ayır.
    // Ücretli modeller paralel çalışır (800ms stagger).
    // Ücretsiz modeller sıralı çalışır — biri tamamlanmadan diğeri başlamaz.
    const STAGGER_MS = 800;
    const paidModels = models.filter((id: string) => !id.endsWith(':free'));
    const freeModels = models.filter((id: string) => id.endsWith(':free'));

    const paidPromises = paidModels.map((modelId: string, index: number) =>
      new Promise<UnifiedResponse>((resolve, reject) => {
        setTimeout(
          () => createModelPromise(modelId, prompt).then(resolve).catch(reject),
          index * STAGGER_MS
        );
      })
    );

    const freeResults: PromiseSettledResult<UnifiedResponse>[] = [];
    for (const modelId of freeModels) {
      const result = await createModelPromise(modelId, prompt)
        .then((val): PromiseSettledResult<UnifiedResponse> => ({ status: 'fulfilled', value: val }))
        .catch((err): PromiseSettledResult<UnifiedResponse> => ({ status: 'rejected', reason: err }));
      freeResults.push(result);
    }

    const paidResults = await Promise.allSettled(paidPromises);
    const results = [...paidResults, ...freeResults];

    // Elde edilen "fulfilled" veya "rejected" sonuçları standart UnifiedResponse objesine çeviriyoruz
    const formattedResults: UnifiedResponse[] = results.map((result) => {
      if (result.status === 'fulfilled') {
        const val = result.value;
        return {
          ...val,
          generatedCode: val.generatedCode ? extractCodeFromMarkdown(val.generatedCode) : null
        };
      } else {
         // Başarısızlık durumunda modelName/latency bilgilerini okuyarak error dönüyoruz.
        return {
          modelName: result.reason.modelName || 'Bilinmeyen Model',
          generatedCode: null,
          latency: result.reason.latency || 0,
          status: 'error',
          errorMessage: result.reason.errorMessage || 'Bilinmeyen bir hata oluştu.'
        };
      }
    });

    return NextResponse.json({ results: formattedResults });

  } catch (error: any) {
    return NextResponse.json(
      { error: 'Sunucu Hatası: Tüm süreç çöktü.', details: error.message },
      { status: 500 }
    );
  }
}