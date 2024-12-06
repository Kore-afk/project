import React from 'react';
import { Brain, Heart, Bone, Utensils } from 'lucide-react';
import { AnatomySystem } from '../types/anatomy';

interface SystemSelectorProps {
  systems: AnatomySystem[];
  selectedSystem: AnatomySystem;
  onSelectSystem: (system: AnatomySystem) => void;
  onSelectPart: () => void;
}

const icons = {
  nervous: Brain,
  cardiovascular: Heart,
  skeletal: Bone,
  digestive: Utensils,
} as const;

function SystemSelector({ systems, selectedSystem, onSelectSystem, onSelectPart }: SystemSelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Sistemas del Cuerpo</h2>
      <div className="space-y-2">
        {systems.map((system) => {
          const Icon = icons[system.id];
          return (
            <button
              key={system.id}
              onClick={() => {
                onSelectSystem(system);
                onSelectPart();
              }}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                selectedSystem.id === system.id
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{system.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SystemSelector;