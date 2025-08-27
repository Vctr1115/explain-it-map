'use client';

import { useMemo } from 'react';
import { Vector3 } from 'three';
import { Line } from '@react-three/drei';
import { Connection } from '@/types';
import { useAppStore } from '@/hooks/useAppStore';

interface ConnectionLineProps {
  connection: Connection;
}

export function ConnectionLine({ connection }: ConnectionLineProps) {
  const { concepts } = useAppStore();
  
  const { points, color, opacity } = useMemo(() => {
    const sourceConcept = concepts.find(c => c.id === connection.source);
    const targetConcept = concepts.find(c => c.id === connection.target);
    
    if (!sourceConcept || !targetConcept) {
      return { points: [], color: '#64748b', opacity: 0 };
    }
    
    const sourcePos = new Vector3(
      sourceConcept.position.x,
      sourceConcept.position.y,
      sourceConcept.position.z
    );
    
    const targetPos = new Vector3(
      targetConcept.position.x,
      targetConcept.position.y,
      targetConcept.position.z
    );
    
    // Create a curved path between points for better visualization
    const midPoint = new Vector3()
      .lerpVectors(sourcePos, targetPos, 0.5)
      .add(new Vector3(0, 1, 0)); // Lift the midpoint slightly
    
    const points = [sourcePos, midPoint, targetPos];
    
    // Color based on connection type
    const connectionColors = {
      dependsOn: '#ef4444', // red-500
      enables: '#22c55e',   // green-500
      relatedTo: '#3b82f6'  // blue-500
    };
    
    return {
      points,
      color: connectionColors[connection.type],
      opacity: connection.strength * 0.8
    };
  }, [concepts, connection]);
  
  if (points.length === 0) return null;

  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={opacity}
      dashed={connection.type === 'relatedTo'}
      dashSize={0.1}
      gapSize={0.05}
    />
  );
}