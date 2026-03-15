'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GenerationResult } from '@/services/LLMProvider';

interface BenchmarkingContextType {
  results: GenerationResult[];
  isLoading: boolean;
  errors: string | null;
  runBenchmark: (prompt: string, selectedModels: string[]) => Promise<void>;
}

const BenchmarkingContext = createContext<BenchmarkingContextType | undefined>(undefined);

export const BenchmarkingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [results, setResults] = useState<GenerationResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | null>(null);

  const runBenchmark = async (prompt: string, selectedModels: string[]) => {
    setIsLoading(true);
    setErrors(null);
    setResults([]);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, models: selectedModels }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch benchmark results');
      }

      const data = await response.json();
      setResults(data.results);
    } catch (error: any) {
      setErrors(error.message || 'An error occurred during benchmarking');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BenchmarkingContext.Provider value={{ results, isLoading, errors, runBenchmark }}>
      {children}
    </BenchmarkingContext.Provider>
  );
};

export const useBenchmarking = () => {
  const context = useContext(BenchmarkingContext);
  if (context === undefined) {
    throw new Error('useBenchmarking must be used within a BenchmarkingProvider');
  }
  return context;
};
