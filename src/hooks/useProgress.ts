import { useState, useEffect } from 'react';
import { getStoredProgress, saveProgress } from '../services/storage';

export const useProgress = () => {
  const [completed, setCompleted] = useState<string[]>(getStoredProgress);

  useEffect(() => {
    saveProgress(completed);
  }, [completed]);

  const toggleComplete = (id: string) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isCompleted = (id: string) => completed.includes(id);

  return { completed, toggleComplete, isCompleted };
};