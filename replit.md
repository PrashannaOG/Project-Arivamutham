# Arivamudham Business Solutions

## Overview

Arivamudham Business Solutions is a modern business landing page built to promote LIC career opportunities. The application is designed as a full-stack web solution with a React frontend and Express.js backend, featuring a professional design system using shadcn/ui components and modern development practices.

The project focuses on lead generation and conversion for insurance career opportunities, with emphasis on mobile-responsive design and user engagement through interactive forms and compelling messaging.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Library**: Radix UI primitives with custom shadcn/ui styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Configured for connect-pg-simple for PostgreSQL session storage
- **API Pattern**: RESTful API design with /api prefix routing
- **Development**: Hot module replacement and development middleware integration

### Database Design
- **Primary Database**: PostgreSQL with Neon serverless connection
- **Schema Management**: Drizzle Kit for migrations and schema management
- **User Management**: Basic user table with username/password authentication
- **Type Safety**: Generated TypeScript types from database schema using Drizzle

### Development Tools
- **Package Manager**: npm with lockfile for dependency consistency
- **TypeScript**: Strict mode enabled with path mapping for clean imports
- **Code Quality**: ESM modules throughout the application
- **Build Process**: Separate client and server builds with esbuild for server bundling

### Deployment Architecture
- **Static Assets**: Client built to dist/public for static serving
- **Server Deployment**: Bundled Node.js application with external dependencies
- **Environment**: Production/development environment detection
- **Asset Management**: Vite handles client asset optimization and bundling

## External Dependencies

### UI Framework Dependencies
- **@radix-ui/***: Complete set of unstyled, accessible UI primitives for building the component library
- **@tanstack/react-query**: Server state management and data fetching with caching capabilities
- **class-variance-authority**: Utility for creating variant-based component APIs
- **tailwindcss**: Utility-first CSS framework for styling
- **lucide-react**: Modern icon library with consistent design

### Database and Backend Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection for Neon
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **drizzle-kit**: Database migrations and schema management tools
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Dependencies
- **vite**: Build tool and development server with HMR support
- **@vitejs/plugin-react**: React integration for Vite
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for server-side code

### Form and Validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **react-hook-form**: Performant form library with minimal re-renders
- **zod**: TypeScript-first schema validation integrated with Drizzle

### Utility Libraries
- **date-fns**: Modern date utility library for date manipulation
- **clsx**: Utility for conditionally constructing className strings
- **nanoid**: URL-safe unique ID generator
- **wouter**: Minimalist routing library for React applications