const STORAGE_KEY = 'elden_ring_progress';

export const getStoredProgress = (): string[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveProgress = (completedIds: string[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedIds));
  } catch (err) {
    console.error('Failed to save progress', err);
  }
};