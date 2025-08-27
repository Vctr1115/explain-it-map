'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Grid } from '@react-three/drei';
import { ConceptNode } from './ConceptNode';
import { LayerPlane } from './LayerPlane';
import { ConnectionLine } from './ConnectionLine';
import { useAppStore } from '@/hooks/useAppStore';
import { Suspense } from 'react';

export function Scene3D() {
  const { concepts, layers, connections } = useAppStore();

  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{
          position: [10, 10, 10],
          fov: 60
        }}
        gl={{ antialias: true }}
        className="bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxDistance={50}
            minDistance={5}
          />
          
          {/* Grid for reference */}
          <Grid
            position={[0, 0, 0]}
            args={[20, 20]}
            cellSize={1}
            cellThickness={0.5}
            cellColor="#334155"
            sectionSize={5}
            sectionThickness={1}
            sectionColor="#475569"
            fadeDistance={30}
            fadeStrength={1}
          />
          
          {/* Layer planes */}
          {layers.map((layer) => (
            <LayerPlane key={layer.id} layer={layer} />
          ))}
          
          {/* Concept nodes */}
          {concepts.map((concept) => (
            <ConceptNode key={concept.id} concept={concept} />
          ))}
          
          {/* Connection lines */}
          {connections.map((connection) => (
            <ConnectionLine key={connection.id} connection={connection} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}