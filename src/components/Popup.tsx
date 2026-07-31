import React from 'react';
import { Popup as LeafletPopup } from 'react-leaflet';
import { MarkerData } from '../types/marker';

interface MarkerPopupProps {
  marker: MarkerData;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
}

export const Popup: React.FC<MarkerPopupProps> = ({
  marker,
  isCompleted,
  onToggleComplete,
}) => {
  return (
    <LeafletPopup>
      <div style={{ minWidth: '150px', fontFamily: 'sans-serif' }}>
        <h3 style={{ margin: '0 0 4px 0', fontSize: '16px' }}>{marker.title}</h3>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#555' }}>
          {marker.category.replace('_', ' ').toUpperCase()}
        </p>
        {marker.description && (
          <p style={{ margin: '0 0 10px 0', fontSize: '13px' }}>{marker.description}</p>
        )}
        <button
          onClick={() => onToggleComplete(marker.id)}
          style={{
            width: '100%',
            padding: '6px',
            backgroundColor: isCompleted ? '#2e7d32' : '#d32f2f',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          {isCompleted ? '✓ Completed' : 'Mark as Complete'}
        </button>
      </div>
    </LeafletPopup>
  );
};