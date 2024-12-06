import React from 'react';
import { Heart } from 'lucide-react';
import { AnatomySystem, AnatomyPart } from '../types/anatomy';

interface InfoPanelProps {
  selectedPart: AnatomyPart | null;
  system: AnatomySystem;
}

function InfoPanel({ selectedPart, system }: InfoPanelProps) {
  if (!selectedPart) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="text-center text-gray-500">
          <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Selecciona una parte del {system.name} para ver más información</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">{selectedPart.name}</h2>
      <div className="space-y-4">
        <section>
          <h3 className="font-semibold text-gray-700 mb-2">Descripción</h3>
          <p className="text-gray-600">{selectedPart.description}</p>
        </section>
        
        <section>
          <h3 className="font-semibold text-gray-700 mb-2">Recomendaciones</h3>
          <ul className="list-disc list-inside space-y-2">
            {selectedPart.recommendations.map((rec, index) => (
              <li key={index} className="text-gray-600">{rec}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default InfoPanel;