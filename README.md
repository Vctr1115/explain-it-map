# Explain IT Map

Interactive 3D map of IT concepts with historical context and layered visualization.

## Project Overview

An interactive 3D visualization platform that maps IT concepts and their relationships in a layered structure similar to the OSI model. Users can navigate between layers, explore historical context, and discover how IT concepts evolved and connect to each other.

## Features

- **Interactive 3D Visualization**: Navigate through IT concepts in 3D space
- **Layered Architecture**: Hierarchical structure organizing concepts by domain
- **Historical Context**: Timeline and evolution of IT concepts
- **Relationship Mapping**: Visual connections between related concepts
- **Search & Navigation**: Quick access to any concept across layers

## Technology Stack

- **Frontend**: React 18 with Next.js 14
- **3D Graphics**: Three.js with React Three Fiber
- **Styling**: Tailwind CSS
- **Data Handling**: D3.js for complex relationships
- **State Management**: Zustand
- **Language**: TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vctr1115/explain-it-map.git
cd explain-it-map
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── public/
│   ├── models/          # 3D models and assets
│   └── data/           # Static data files
├── src/
│   ├── components/
│   │   ├── 3D/         # Three.js components
│   │   ├── UI/         # User interface components
│   │   └── Layout/     # Layout components
│   ├── data/
│   │   ├── concepts/   # IT concepts data
│   │   ├── layers/     # Layer definitions
│   │   └── connections/ # Relationship mappings
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   └── styles/         # Global styles
├── docs/               # Documentation
└── package.json
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

### Code Style

This project uses ESLint and Prettier for code formatting. The configuration enforces consistent code style across the project.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.