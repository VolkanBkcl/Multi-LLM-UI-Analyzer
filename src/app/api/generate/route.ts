import { NextResponse } from 'next/server';
import { OpenAIService } from '@/services/OpenAIService';
import { GeminiService } from '@/services/GeminiService';
import { GroqService } from '@/services/GroqService';
import { extractCodeFromMarkdown } from '@/lib/parser';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, models } = body;

    if (!prompt || !models || !Array.isArray(models) || models.length === 0) {
      return NextResponse.json(
        { error: 'Prompt and an array of models are required.' },
        { status: 400 }
      );
    }

    const promises = models.map((model: string) => {
      switch (model.toLowerCase()) {
        case 'openai':
          return new OpenAIService().generateCode(prompt);
        case 'gemini':
          return new GeminiService().generateCode(prompt);
        case 'groq':
          return new GroqService().generateCode(prompt);
        default:
          return Promise.reject(new Error(`Unsupported model: ${model}`));
      }
    });

    // Use Promise.allSettled to simultaneously call selected models
    const results = await Promise.allSettled(promises);

    const formattedResults = results.map((result, index) => {
      if (result.status === 'fulfilled') {
        const val = result.value;
        return {
          ...val,
          model: models[index], // Store'daki (zustand) key ile eşleşmesi için orjinal ismi kullan
          code: extractCodeFromMarkdown(val.code)
        };
      } else {
        return {
          code: '',
          executionTime: 0,
          error: result.reason.message || 'Error occurred during generation',
          model: models[index],
        };
      }
    });

    return NextResponse.json({ results: formattedResults });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}