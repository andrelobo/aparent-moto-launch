## Project Overview

This is a React-based web application for a motorcycle rental service called "Aparent Moto Launch". The application is a single-page marketing website that showcases the company's services, pricing, and contact information.

## Technologies

- **Framework:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS with shadcn/ui components
- **Routing:** React Router DOM
- **Data Fetching:** TanStack Query (React Query)
- **Form Management:** React Hook Form with Zod for validation
- **Linting:** ESLint

## Project Structure

The project follows a standard React project structure:

- `src/`: Contains the main source code of the application.
  - `assets/`: Static assets like images and icons.
  - `components/`: Reusable UI components.
    - `ui/`: shadcn/ui components.
  - `hooks/`: Custom React hooks.
  - `lib/`: Utility functions.
  - `pages/`: Application pages.
- `public/`: Static assets that are not processed by Vite.

## Key Components

- `App.tsx`: The main application component that sets up routing, theme provider, and other global providers.
- `pages/Index.tsx`: The main page of the application, which is composed of several sections.
- `components/Header.tsx`: The header of the application.
- `components/HeroSection.tsx`: The hero section of the application.
- `components/PricingSection.tsx`: The section that displays the pricing plans.
- `components/Footer.tsx`: The footer of the application.
- `components/WhatsAppWidget.tsx`: A floating WhatsApp widget.
- `components/InstagramWidget.tsx`: A floating Instagram widget.

## Styling

The project uses Tailwind CSS for styling. It also uses [shadcn/ui](https://ui.shadcn.com/) for a set of pre-built components that are built on top of Radix UI and Tailwind CSS. The theme can be customized in `tailwind.config.ts`.

## Routing

Routing is handled by `react-router-dom`. The routes are defined in `src/App.tsx`. The application has two routes:

- `/`: The main page.
- `*`: A 404 Not Found page.

## State Management

The application uses TanStack Query (React Query) for managing server state (data fetching, caching, etc.). Client state is managed using React's built-in state management (useState, useReducer) and custom hooks.

## Linting and Formatting

The project uses ESLint for linting. The configuration is in `eslint.config.js`.
