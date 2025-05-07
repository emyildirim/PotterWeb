# PotterWeb - Harry Potter Web Application

## Overview
PotterWeb is a modern web application built with Next.js that provides comprehensive information about the Harry Potter universe. The application features multiple language support and offers detailed information about books, characters, and spells from the Harry Potter series.
<img width="1456" alt="image" src="https://github.com/user-attachments/assets/74d3180a-c1f9-4de1-89d0-ad96a1904d22" />

## Features
- 📚 Detailed information about Harry Potter books
- 👥 Character profiles and information
- ✨ Spells database
- 🌐 Multi-language support
- 📱 Responsive design
- 🎨 Modern UI with Bootstrap

## Tech Stack
- **Framework**: Next.js 15.0.3
- **UI Library**: React 18.3.1
- **Styling**: Bootstrap 5.3.3 & React Bootstrap 2.10.7
- **Development Tools**:
  - ESLint for code linting
  - Nodemon for development

## Project Structure
```
my-app/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Next.js pages and routing
│   ├── styles/        # CSS and styling files
│   └── lib/          # Utility functions and helpers
├── public/           # Static assets
└── config files      # Various configuration files
```

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/PotterWeb.git
```

2. Navigate to the project directory:
```bash
cd PotterWeb/my-app
```

3. Install dependencies:
```bash
npm install
```

### Running the Application

#### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

#### Production Build
```bash
npm run build
npm start
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code linting
- `npm run dev:nodemon` - Run development server with Nodemon

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- [Harry Potter API](https://github.com/fedeperin/potterapi) for providing the data
- Next.js team for the amazing framework
- Bootstrap team for the UI components
