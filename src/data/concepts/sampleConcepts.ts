import { ITConcept } from '@/types';

export const sampleConcepts: ITConcept[] = [
  {
    id: 'tcp-ip',
    name: 'TCP/IP',
    category: 'Networking Protocols',
    layer: 3,
    description: 'Transmission Control Protocol/Internet Protocol - the fundamental communication protocol suite for the Internet.',
    historicalContext: {
      yearCreated: 1974,
      creators: ['Vint Cerf', 'Bob Kahn'],
      emergenceConditions: 'Need for reliable packet-switched networking and ARPANET development',
      evolution: [
        '1974: Initial TCP specification',
        '1978: Split into TCP and IP layers',
        '1983: Adopted as ARPANET standard',
        '1989: Became foundation for World Wide Web'
      ]
    },
    connections: {
      dependsOn: ['packet-switching'],
      enables: ['http', 'ftp', 'smtp'],
      relatedTo: ['osi-model', 'ethernet']
    },
    position: {
      x: 0,
      y: 3,
      z: 0
    }
  },
  {
    id: 'http',
    name: 'HTTP',
    category: 'Application Protocols',
    layer: 7,
    description: 'HyperText Transfer Protocol - the foundation of data communication for the World Wide Web.',
    historicalContext: {
      yearCreated: 1989,
      creators: ['Tim Berners-Lee'],
      emergenceConditions: 'Need for document sharing and hypertext navigation in academic institutions',
      evolution: [
        '1989: HTTP/0.9 - Simple protocol for raw data transfer',
        '1996: HTTP/1.0 - Added headers and methods',
        '1997: HTTP/1.1 - Persistent connections',
        '2015: HTTP/2 - Binary protocol with multiplexing'
      ]
    },
    connections: {
      dependsOn: ['tcp-ip', 'html'],
      enables: ['web-browsers', 'web-servers', 'rest-apis'],
      relatedTo: ['https', 'websockets']
    },
    position: {
      x: 2,
      y: 7,
      z: 1
    }
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Markup Languages',
    layer: 6,
    description: 'HyperText Markup Language - the standard markup language for creating web pages.',
    historicalContext: {
      yearCreated: 1989,
      creators: ['Tim Berners-Lee'],
      emergenceConditions: 'Need for structured document format with hyperlinks for the World Wide Web',
      evolution: [
        '1989: Initial HTML concept',
        '1993: HTML 1.0 - First formal specification',
        '1995: HTML 2.0 - Forms and tables',
        '1997: HTML 4.0 - CSS support and accessibility',
        '2014: HTML5 - Multimedia and semantic elements'
      ]
    },
    connections: {
      dependsOn: ['sgml'],
      enables: ['web-pages', 'css', 'javascript'],
      relatedTo: ['xml', 'css', 'dom']
    },
    position: {
      x: -2,
      y: 6,
      z: -1
    }
  },
  {
    id: 'packet-switching',
    name: 'Packet Switching',
    category: 'Network Architecture',
    layer: 2,
    description: 'A method of grouping data transmitted over a digital network into packets.',
    historicalContext: {
      yearCreated: 1965,
      creators: ['Donald Davies', 'Paul Baran'],
      emergenceConditions: 'Cold War need for resilient communication networks and efficient data transmission',
      evolution: [
        '1962: Paul Baran proposes distributed networks',
        '1965: Donald Davies coins "packet switching"',
        '1969: ARPANET implements packet switching',
        '1974: TCP/IP standardizes packet protocols'
      ]
    },
    connections: {
      dependsOn: ['digital-computers'],
      enables: ['tcp-ip', 'internet', 'ethernet'],
      relatedTo: ['circuit-switching', 'network-topology']
    },
    position: {
      x: -1,
      y: 2,
      z: 2
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming Languages',
    layer: 5,
    description: 'A high-level, interpreted programming language that enabled dynamic web content.',
    historicalContext: {
      yearCreated: 1995,
      creators: ['Brendan Eich'],
      emergenceConditions: 'Need for client-side scripting to make web pages interactive and dynamic',
      evolution: [
        '1995: Created in 10 days at Netscape',
        '1997: ECMAScript standardization',
        '2005: AJAX revolution',
        '2009: Node.js enables server-side JavaScript',
        '2015: ES6/ES2015 major language update'
      ]
    },
    connections: {
      dependsOn: ['html', 'dom'],
      enables: ['ajax', 'node-js', 'react', 'spa'],
      relatedTo: ['css', 'json', 'websockets']
    },
    position: {
      x: 1,
      y: 5,
      z: -2
    }
  }
];