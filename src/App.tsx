import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import AnatomyViewer from './components/AnatomyViewer';
import SystemSelector from './components/SystemSelector';
import InfoPanel from './components/InfoPanel';
import { systems } from './data/anatomyData';
import { AnatomyPart } from './types/anatomy';

function App() {
  const [selectedSystem, setSelectedSystem] = useState(systems[0]);
  const [selectedPart, setSelectedPart] = useState<AnatomyPart | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Heart className="text-red-500" />
            Atlas Anatómico Interactivo
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <SystemSelector 
              systems={systems}
              selectedSystem={selectedSystem}
              onSelectSystem={setSelectedSystem}
              onSelectPart={() => setSelectedPart(null)}
            />
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <AnatomyViewer 
                system={selectedSystem}
                onPartSelect={setSelectedPart}
                selectedPart={selectedPart}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <InfoPanel 
              selectedPart={selectedPart}
              system={selectedSystem}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;