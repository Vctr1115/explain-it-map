import { create } from 'zustand';
import { AppState, ITConcept } from '@/types';
import { sampleConcepts } from '@/data/concepts/sampleConcepts';
import { sampleLayers } from '@/data/layers/sampleLayers';
import { sampleConnections } from '@/data/connections/sampleConnections';

interface AppStore extends AppState {
  // Actions
  setSelectedConcept: (concept: ITConcept | null) => void;
  setSelectedLayer: (layer: number | null) => void;
  setSearchQuery: (query: string) => void;
  setLoading: (loading: boolean) => void;
  
  // Data manipulation
  addConcept: (concept: ITConcept) => void;
  updateConcept: (id: string, updates: Partial<ITConcept>) => void;
  removeConcept: (id: string) => void;
  
  // Search and filtering
  searchConcepts: (query: string) => ITConcept[];
  getConceptsByLayer: (layer: number) => ITConcept[];
  getConnectedConcepts: (conceptId: string) => ITConcept[];
}

export const useAppStore = create<AppStore>((set, get) => ({
  // Initial state
  selectedConcept: null,
  selectedLayer: null,
  searchQuery: '',
  isLoading: false,
  concepts: sampleConcepts,
  layers: sampleLayers,
  connections: sampleConnections,

  // Actions
  setSelectedConcept: (concept) => set({ selectedConcept: concept }),
  setSelectedLayer: (layer) => set({ selectedLayer: layer }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setLoading: (loading) => set({ isLoading: loading }),

  // Data manipulation
  addConcept: (concept) => 
    set((state) => ({ 
      concepts: [...state.concepts, concept] 
    })),
  
  updateConcept: (id, updates) =>
    set((state) => ({
      concepts: state.concepts.map((concept) =>
        concept.id === id ? { ...concept, ...updates } : concept
      )
    })),
  
  removeConcept: (id) =>
    set((state) => ({
      concepts: state.concepts.filter((concept) => concept.id !== id)
    })),

  // Search and filtering
  searchConcepts: (query) => {
    const { concepts } = get();
    if (!query.trim()) return concepts;
    
    const lowercaseQuery = query.toLowerCase();
    return concepts.filter((concept) =>
      concept.name.toLowerCase().includes(lowercaseQuery) ||
      concept.description.toLowerCase().includes(lowercaseQuery) ||
      concept.category.toLowerCase().includes(lowercaseQuery)
    );
  },

  getConceptsByLayer: (layer) => {
    const { concepts } = get();
    return concepts.filter((concept) => concept.layer === layer);
  },

  getConnectedConcepts: (conceptId) => {
    const { concepts, connections } = get();
    
    const relatedConnections = connections.filter(
      (conn) => conn.source === conceptId || conn.target === conceptId
    );
    
    const connectedIds = new Set<string>();
    relatedConnections.forEach((conn) => {
      if (conn.source === conceptId) connectedIds.add(conn.target);
      if (conn.target === conceptId) connectedIds.add(conn.source);
    });
    
    return concepts.filter((concept) => connectedIds.has(concept.id));
  }
}));