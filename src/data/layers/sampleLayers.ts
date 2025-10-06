import { Layer } from '@/types';

export const sampleLayers: Layer[] = [
  {
    id: 1,
    name: 'Physical Layer',
    description: 'Hardware components and physical transmission media',
    color: '#8B4513',
    concepts: [],
    position: {
      y: 1
    }
  },
  {
    id: 2,
    name: 'Data Link Layer',
    description: 'Node-to-node data transfer and error detection/correction',
    color: '#FF4500',
    concepts: ['packet-switching'],
    position: {
      y: 2
    }
  },
  {
    id: 3,
    name: 'Network Layer',
    description: 'Routing and logical addressing across networks',
    color: '#FF8C00',
    concepts: ['tcp-ip'],
    position: {
      y: 3
    }
  },
  {
    id: 4,
    name: 'Transport Layer',
    description: 'End-to-end communication and data integrity',
    color: '#FFD700',
    concepts: [],
    position: {
      y: 4
    }
  },
  {
    id: 5,
    name: 'Session Layer',
    description: 'Session management and inter-application communication',
    color: '#ADFF2F',
    concepts: ['javascript'],
    position: {
      y: 5
    }
  },
  {
    id: 6,
    name: 'Presentation Layer',
    description: 'Data formatting, encryption, and compression',
    color: '#00FF7F',
    concepts: ['html'],
    position: {
      y: 6
    }
  },
  {
    id: 7,
    name: 'Application Layer',
    description: 'User interfaces and application services',
    color: '#00BFFF',
    concepts: ['http'],
    position: {
      y: 7
    }
  }
];