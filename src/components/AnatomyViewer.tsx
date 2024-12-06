import React from 'react';
import { AnatomySystem, AnatomyPart } from '../types/anatomy';
import ModelViewer from './ModelViewer';

interface AnatomyViewerProps {
  system: AnatomySystem;
  onPartSelect: (part: AnatomyPart) => void;
  selectedPart: AnatomyPart | null;
}

const modelPaths: { [key: string]: string } = {
  skeletal: '/elflaco.gltf',
  cardiovascular: '/corazon.gltf',
  digestive: '/Dig.gltf',
  nervous: '/Brain.gltf'
};

function AnatomyViewer({ system, onPartSelect, selectedPart }: AnatomyViewerProps) {
  return (
    <div className="relative aspect-square">
      {modelPaths[system.id] ? (
        <ModelViewer modelPath={modelPaths[system.id]} />
      ) : (
        <img
          src={system.image}
          alt={system.name}
          className="w-full h-full object-contain"
        />
      )}
      {system.parts.map((part) => (
        <button
          key={part.id}
          onClick={() => onPartSelect(part)}
          className={`absolute ${part.position} w-6 h-6 rounded-full transition-all transform hover:scale-110 ${
            selectedPart?.id === part.id
              ? 'bg-indigo-600 ring-4 ring-indigo-200'
              : 'bg-indigo-400 hover:bg-indigo-500'
          }`}
        >
          <span className="sr-only">{part.name}</span>
        </button>
      ))}
    </div>
  );
}

export default AnatomyViewer;