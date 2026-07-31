export type Category = 
  | 'site_of_grace'
  | 'boss'
  | 'item'
  | 'dungeon'
  | 'npc'
  | 'golden_seed';

export interface MarkerData {
  id: string;
  title: string;
  category: Category;
  description?: string;
  // Leaflet L.CRS.Simple uses [y, x] pixel coordinates
  coords: [number, number]; 
}

export interface ProgressState {
  completedIds: string[];
}