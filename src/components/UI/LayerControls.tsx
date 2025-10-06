'use client';

import { useAppStore } from '@/hooks/useAppStore';

export function LayerControls() {
  const { layers, selectedLayer, setSelectedLayer, getConceptsByLayer } = useAppStore();

  return (
    <div className="bg-slate-800 border border-slate-600 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Layers</h3>
      
      <div className="space-y-2">
        {layers.map((layer) => {
          const conceptCount = getConceptsByLayer(layer.id).length;
          const isSelected = selectedLayer === layer.id;
          
          return (
            <button
              key={layer.id}
              onClick={() => setSelectedLayer(isSelected ? null : layer.id)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                isSelected
                  ? 'bg-slate-600 border border-slate-500'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: layer.color }}
                  />
                  <div>
                    <div className="text-sm font-medium text-white">
                      Layer {layer.id}: {layer.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {conceptCount} concept{conceptCount !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
                
                {isSelected && (
                  <div className="text-xs text-blue-400 font-medium">
                    ACTIVE
                  </div>
                )}
              </div>
              
              {isSelected && (
                <div className="mt-2 pt-2 border-t border-slate-600">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {selectedLayer && (
        <div className="mt-4 pt-4 border-t border-slate-600">
          <button
            onClick={() => setSelectedLayer(null)}
            className="text-sm text-blue-400 hover:text-blue-300 font-medium"
          >
            Clear Selection
          </button>
        </div>
      )}
    </div>
  );
}