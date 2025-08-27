'use client';

import { X, Calendar, Users, ArrowRight, CornerDownRight } from 'lucide-react';
import { useAppStore } from '@/hooks/useAppStore';

export function ConceptPanel() {
  const { selectedConcept, setSelectedConcept, getConnectedConcepts } = useAppStore();
  
  if (!selectedConcept) return null;
  
  const connectedConcepts = getConnectedConcepts(selectedConcept.id);

  return (
    <div className="bg-slate-800 border border-slate-600 rounded-lg p-6 max-w-md">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">{selectedConcept.name}</h2>
          <p className="text-sm text-gray-400">{selectedConcept.category}</p>
        </div>
        <button
          onClick={() => setSelectedConcept(null)}
          className="text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      {/* Description */}
      <div className="mb-6">
        <p className="text-gray-300 text-sm leading-relaxed">
          {selectedConcept.description}
        </p>
      </div>
      
      {/* Historical Context */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          Historical Context
        </h3>
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center text-sm">
              <span className="text-gray-400">Year Created:</span>
              <span className="text-white ml-2 font-medium">
                {selectedConcept.historicalContext.yearCreated}
              </span>
            </div>
          </div>
          
          {selectedConcept.historicalContext.creators.length > 0 && (
            <div>
              <div className="flex items-start text-sm">
                <Users className="w-4 h-4 text-gray-400 mr-2 mt-0.5" />
                <div>
                  <span className="text-gray-400">Created by:</span>
                  <div className="text-white ml-2">
                    {selectedConcept.historicalContext.creators.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-1">Emergence Conditions:</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {selectedConcept.historicalContext.emergenceConditions}
            </p>
          </div>
          
          {selectedConcept.historicalContext.evolution.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Evolution:</h4>
              <div className="space-y-1">
                {selectedConcept.historicalContext.evolution.map((event, index) => (
                  <div key={index} className="flex items-start text-xs text-gray-400">
                    <CornerDownRight className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{event}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Connections */}
      {connectedConcepts.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Related Concepts</h3>
          <div className="space-y-2">
            {connectedConcepts.map((concept) => (
              <div
                key={concept.id}
                onClick={() => setSelectedConcept(concept)}
                className="flex items-center justify-between p-2 bg-slate-700 rounded cursor-pointer hover:bg-slate-600 transition-colors"
              >
                <div>
                  <div className="text-sm font-medium text-white">{concept.name}</div>
                  <div className="text-xs text-gray-400">Layer {concept.layer}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}