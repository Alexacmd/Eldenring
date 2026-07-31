import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet's missing icon bug in Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet';
import L from 'leaflet';
import { MarkerData } from '../types/marker';
import { Popup } from './Popup';

// Simple default icon fallback using Leaflet CDN assets
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MarkerProps {
  data: MarkerData;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
}

export const Marker: React.FC<MarkerProps> = ({
  data,
  isCompleted,
  onToggleComplete,
}) => {
  return (
    <LeafletMarker
      position={data.coords}
      icon={defaultIcon}
      opacity={isCompleted ? 0.4 : 1.0} // Dims completed markers
    >
      <Popup
        marker={data}
        isCompleted={isCompleted}
        onToggleComplete={onToggleComplete}
      />
    </LeafletMarker>
  );
};