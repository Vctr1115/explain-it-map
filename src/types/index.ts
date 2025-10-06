// Core data types for the IT concept map

export interface ITConcept {
  id: string;
  name: string;
  category: string;
  layer: number;
  description: string;
  historicalContext: {
    yearCreated: number;
    creators: string[];
    emergenceConditions: string;
    evolution: string[];
  };
  connections: {
    dependsOn: string[];
    enables: string[];
    relatedTo: string[];
  };
  position: {
    x: number;
    y: number;
    z: number;
  };
}

export interface Layer {
  id: number;
  name: string;
  description: string;
  color: string;
  concepts: string[]; // Array of concept IDs
  position: {
    y: number; // Vertical position in the layer stack
  };
}

export interface Connection {
  id: string;
  type: 'dependsOn' | 'enables' | 'relatedTo';
  source: string; // Source concept ID
  target: string; // Target concept ID
  strength: number; // Connection strength (0-1)
  description?: string;
}

export interface AppState {
  selectedConcept: ITConcept | null;
  selectedLayer: number | null;
  searchQuery: string;
  isLoading: boolean;
  concepts: ITConcept[];
  layers: Layer[];
  connections: Connection[];
}

// Camera and scene configuration
export interface CameraState {
  position: [number, number, number];
  target: [number, number, number];
  zoom: number;
}

export interface SceneConfig {
  camera: CameraState;
  lighting: {
    ambient: number;
    directional: {
      intensity: number;
      position: [number, number, number];
    };
  };
  controls: {
    enableZoom: boolean;
    enablePan: boolean;
    enableRotate: boolean;
    maxDistance: number;
    minDistance: number;
  };
}