# Development Guide

## Project Structure

The project follows a modular architecture with clear separation of concerns:

### Components

- **3D Components** (`src/components/3D/`): Three.js-based visualization components
  - `Scene3D.tsx` - Main 3D scene container
  - `ConceptNode.tsx` - Interactive concept spheres
  - `LayerPlane.tsx` - OSI model layer visualization
  - `ConnectionLine.tsx` - Relationship lines between concepts

- **UI Components** (`src/components/UI/`): Interface elements
  - `SearchBar.tsx` - Concept search functionality
  - `ConceptPanel.tsx` - Detailed concept information
  - `LayerControls.tsx` - Layer navigation controls

- **Layout** (`src/components/Layout/`): Page structure
  - `Layout.tsx` - Main application layout with overlays

### Data Management

- **Types** (`src/types/`): TypeScript interfaces
- **Data** (`src/data/`): Sample datasets
- **Hooks** (`src/hooks/`): Zustand store for state management

### Key Features

1. **3D Navigation**: Mouse controls for rotating, zooming, and panning
2. **Layer System**: Hierarchical organization based on network stack
3. **Search**: Real-time concept search across all layers
4. **Historical Context**: Timeline and evolution information
5. **Relationship Mapping**: Visual connections between concepts

## Adding New Concepts

1. Define the concept in `src/data/concepts/sampleConcepts.ts`
2. Add appropriate connections in `src/data/connections/sampleConnections.ts`
3. Update layer associations in `src/data/layers/sampleLayers.ts`

## Customizing the Visualization

- **Colors**: Modify layer colors in `sampleLayers.ts`
- **Positions**: Adjust 3D coordinates in concept definitions
- **Connections**: Add new relationship types in the data structure

## Performance Considerations

- Large datasets: Consider implementing virtualization
- Connection lines: Optimize rendering for many relationships
- 3D models: Use LOD (Level of Detail) for complex scenes