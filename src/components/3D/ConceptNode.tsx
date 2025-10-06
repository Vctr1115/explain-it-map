'use client';

import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere } from '@react-three/drei';
import { ITConcept } from '@/types';
import { useAppStore } from '@/hooks/useAppStore';

interface ConceptNodeProps {
  concept: ITConcept;
}

export function ConceptNode({ concept }: ConceptNodeProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { selectedConcept, setSelectedConcept } = useAppStore();
  
  const isSelected = selectedConcept?.id === concept.id;

  // Gentle floating animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = concept.position.y + Math.sin(state.clock.elapsedTime + concept.position.x) * 0.1;
    }
  });

  // Determine node color based on layer
  const getNodeColor = () => {
    if (isSelected) return '#fbbf24'; // amber-400
    if (hovered) return '#60a5fa'; // blue-400
    
    // Color based on layer (similar to OSI model colors)
    const layerColors = {
      1: '#8B4513', // Physical - Brown
      2: '#FF4500', // Data Link - Orange Red
      3: '#FF8C00', // Network - Dark Orange
      4: '#FFD700', // Transport - Gold
      5: '#ADFF2F', // Session - Green Yellow
      6: '#00FF7F', // Presentation - Spring Green
      7: '#00BFFF', // Application - Deep Sky Blue
    };
    
    return layerColors[concept.layer as keyof typeof layerColors] || '#64748b';
  };

  return (
    <group position={[concept.position.x, concept.position.y, concept.position.z]}>
      {/* Main sphere */}
      <Sphere
        ref={meshRef}
        args={[0.5, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setSelectedConcept(concept)}
      >
        <meshStandardMaterial
          color={getNodeColor()}
          emissive={isSelected ? '#fbbf24' : hovered ? '#60a5fa' : '#000000'}
          emissiveIntensity={isSelected ? 0.3 : hovered ? 0.2 : 0}
          roughness={0.3}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Concept name label */}
      <Text
        position={[0, 1, 0]}
        fontSize={0.3}
        color={isSelected ? '#fbbf24' : '#ffffff'}
        anchorX="center"
        anchorY="bottom"
        maxWidth={3}
        textAlign="center"
      >
        {concept.name}
      </Text>
      
      {/* Year created (smaller text) */}
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.15}
        color="#94a3b8"
        anchorX="center"
        anchorY="top"
      >
        {concept.historicalContext.yearCreated}
      </Text>
      
      {/* Selection indicator */}
      {isSelected && (
        <Sphere args={[0.7, 32, 32]} position={[0, 0, 0]}>
          <meshBasicMaterial
            color="#fbbf24"
            transparent
            opacity={0.2}
            wireframe
          />
        </Sphere>
      )}
    </group>
  );
}