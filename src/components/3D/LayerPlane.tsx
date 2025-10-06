'use client';

import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { Box, Text } from '@react-three/drei';
import { Layer } from '@/types';
import { useAppStore } from '@/hooks/useAppStore';

interface LayerPlaneProps {
  layer: Layer;
}

export function LayerPlane({ layer }: LayerPlaneProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { selectedLayer, setSelectedLayer } = useAppStore();
  
  const isSelected = selectedLayer === layer.id;

  return (
    <group position={[0, layer.position.y, 0]}>
      {/* Layer plane */}
      <Box
        ref={meshRef}
        args={[12, 0.1, 12]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setSelectedLayer(isSelected ? null : layer.id)}
      >
        <meshStandardMaterial
          color={layer.color}
          transparent
          opacity={isSelected ? 0.4 : hovered ? 0.3 : 0.15}
          roughness={0.8}
          metalness={0.1}
        />
      </Box>
      
      {/* Layer label */}
      <Text
        position={[-6, 0.5, 0]}
        fontSize={0.4}
        color={layer.color}
        anchorX="left"
        anchorY="bottom"
        font="/fonts/Inter-Bold.woff"
      >
        Layer {layer.id}: {layer.name}
      </Text>
      
      {/* Layer description */}
      <Text
        position={[-6, 0, 0]}
        fontSize={0.2}
        color="#94a3b8"
        anchorX="left"
        anchorY="top"
        font="/fonts/Inter-Regular.woff"
        maxWidth={5}
        textAlign="left"
      >
        {layer.description}
      </Text>
      
      {/* Selection border */}
      {isSelected && (
        <Box args={[12.2, 0.2, 12.2]} position={[0, 0, 0]}>
          <meshBasicMaterial
            color={layer.color}
            transparent
            opacity={0.6}
            wireframe
          />
        </Box>
      )}
    </group>
  );
}