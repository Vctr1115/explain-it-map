'use client';

import { SearchBar } from '../UI/SearchBar';
import { ConceptPanel } from '../UI/ConceptPanel';
import { LayerControls } from '../UI/LayerControls';
import { useAppStore } from '@/hooks/useAppStore';

export function Layout({ children }: { children: React.ReactNode }) {
  const { selectedConcept, isLoading } = useAppStore();

  return (
    <div className="relative w-full h-screen bg-slate-900 overflow-hidden">
      {/* Main 3D Scene */}
      <div className="absolute inset-0">
        {children}
      </div>
      
      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 pointer-events-auto">
          <div className="max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
        
        {/* Left Panel - Layer Controls */}
        <div className="absolute left-4 top-20 bottom-4 w-72 pointer-events-auto">
          <LayerControls />
        </div>
        
        {/* Right Panel - Concept Details */}
        {selectedConcept && (
          <div className="absolute right-4 top-20 bottom-4 w-80 pointer-events-auto overflow-y-auto">
            <ConceptPanel />
          </div>
        )}
        
        {/* Bottom Info Bar */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-auto">
          <div className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-2">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Mouse: Rotate • Scroll: Zoom • Drag: Pan</span>
              <span>•</span>
              <span>Click nodes to explore</span>
            </div>
          </div>
        </div>
        
        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center pointer-events-auto">
            <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
                <span className="text-white">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}