'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useAppStore } from '@/hooks/useAppStore';
import { ITConcept } from '@/types';

export function SearchBar() {
  const { searchQuery, setSearchQuery, searchConcepts, setSelectedConcept } = useAppStore();
  const [isOpen, setIsOpen] = useState(false);
  
  const results = searchQuery ? searchConcepts(searchQuery) : [];

  const handleSelect = (concept: ITConcept) => {
    setSelectedConcept(concept);
    setSearchQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search IT concepts..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      {/* Search results dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.map((concept) => (
            <div
              key={concept.id}
              onClick={() => handleSelect(concept)}
              className="p-3 hover:bg-slate-700 cursor-pointer border-b border-slate-600 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">{concept.name}</h4>
                  <p className="text-sm text-gray-400 truncate">
                    {concept.category} • Layer {concept.layer} • {concept.historicalContext.yearCreated}
                  </p>
                </div>
                <div className="text-xs text-gray-500">
                  {concept.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}