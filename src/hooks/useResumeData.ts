import { useState, useEffect } from 'react';
import type { ResumeData } from '@/types/resume';

export function useResumeData() {
  const [data, setData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchResumeData() {
      try {
        const response = await fetch('/data/resume.json');
        if (!response.ok) {
          throw new Error('Failed to fetch resume data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchResumeData();
  }, []);

  return { data, loading, error };
}
