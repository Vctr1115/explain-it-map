import { Connection } from '@/types';

export const sampleConnections: Connection[] = [
  {
    id: 'packet-switching-to-tcp-ip',
    type: 'enables',
    source: 'packet-switching',
    target: 'tcp-ip',
    strength: 0.9,
    description: 'Packet switching provides the fundamental mechanism for TCP/IP networking'
  },
  {
    id: 'tcp-ip-to-http',
    type: 'enables',
    source: 'tcp-ip',
    target: 'http',
    strength: 0.95,
    description: 'HTTP runs on top of TCP/IP for reliable web communication'
  },
  {
    id: 'html-to-http',
    type: 'relatedTo',
    source: 'html',
    target: 'http',
    strength: 0.8,
    description: 'HTML documents are transmitted via HTTP protocol'
  },
  {
    id: 'html-to-javascript',
    type: 'enables',
    source: 'html',
    target: 'javascript',
    strength: 0.85,
    description: 'HTML provides the DOM structure that JavaScript can manipulate'
  },
  {
    id: 'javascript-depends-on-html',
    type: 'dependsOn',
    source: 'javascript',
    target: 'html',
    strength: 0.7,
    description: 'JavaScript requires HTML DOM for web-based functionality'
  }
];