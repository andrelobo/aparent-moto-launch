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

## Package Manager

This project has been configured to work with both `yarn` and `bun`. You will find both `yarn.lock` and `bun.lockb` files in the repository. However, `yarn` is the recommended package manager for this project.

## Development

To get started with the project, follow these steps:

### 1. Installation

Install the project dependencies using `yarn`:

```bash
yarn install
```

Alternatively, you can use `bun`:

```bash
bun install
```

### 2. Running the Development Server

To start the local development server, run:

```bash
yarn dev
```

Or with `bun`:

```bash
bun dev
```

The application will be available at `http://localhost:8080` (or the next available port).

### 3. Building for Production

To create a production-ready build of the application, run:

```bash
yarn build
```

Or with `bun`:

```bash
bun build
```

The output will be generated in the `dist/` directory.

### 4. Linting

To check the code for any linting errors, run:

```bash
yarn lint
```

Or with `bun`:

```bash
bun lint
```

### 5. Previewing the Production Build

To preview the production build locally, run:

```bash
yarn preview
```

Or with `bun`:

```bash
bun preview
```

## File Structure

The project follows a standard React project structure:

- **`public/`**: This directory contains static assets that are not processed by the build tool. These files are served directly by the web server.
- **`src/`**: This directory contains the main source code of the application.
  - **`assets/`**: This directory contains static assets like images, icons, and fonts that are imported into the application.
  - **`components/`**: This directory contains reusable UI components that are used throughout the application.
    - **`ui/`**: This subdirectory contains shadcn/ui components that have been customized for the project.
  - **`hooks/`**: This directory contains custom React hooks that encapsulate reusable logic.
  - **`lib/`**: This directory contains utility functions and libraries that are used across the application.
  - **`pages/`**: This directory contains the main pages of the application. Each file in this directory represents a route.
- **`App.tsx`**: This is the main application component that sets up routing, theme provider, and other global providers.
- **`main.tsx`**: This is the entry point of the application. It renders the `App` component into the DOM.

## Key Components

- **`App.tsx`**: The main application component that sets up routing, theme provider, and other global providers.
- **`pages/Index.tsx`**: The main page of the application, which is composed of several sections.
- **`components/Header.tsx`**: The header of the application, which contains the logo and navigation links.
- **`components/HeroSection.tsx`**: The hero section of the application, which is the first thing users see.
- **`components/AboutSection.tsx`**: This section provides a brief introduction to the company and its mission.
- **`components/BenefitsSection.tsx`**: This section highlights the key benefits of renting a motorcycle from "Aparent Moto Launch".
- **`components/FleetSection.tsx`**: This section showcases the available motorcycle models for rent.
- **`components/HowItWorksSection.tsx`**: This section explains the motorcycle rental process in a clear and concise way.
- **`components/PricingSection.tsx`**: This section displays the pricing plans for different rental durations.
- **`components/TestimonialsSection.tsx`**: This section features testimonials from satisfied customers.
- **`components/FAQSection.tsx`**: This section provides answers to frequently asked questions.
- **`components/ContactSection.tsx`**: This section provides contact information and a contact form.
- **`components/Footer.tsx`**: The footer of the application, which contains social media links and other useful information.
- **`components/WhatsAppWidget.tsx`**: A floating WhatsApp widget that allows users to start a conversation with the company (currently disabled).
- **`components/InstagramWidget.tsx`**: A floating Instagram widget that displays the company's latest Instagram posts (currently disabled).

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

## Proposed Feature: Gemini-powered Chatbot for "Aparent Moto"

To enhance user engagement and provide instant support, we propose the integration of a Gemini-powered chatbot specifically tailored for "Aparent Moto".

### Overview

The chatbot will be available as a floating widget on the website. Users can interact with it to:

- Get answers to frequently asked questions (e.g., "What are the rental requirements?", "What is the price for a 3-day rental?").
- Inquire about motorcycle availability for specific dates.
- Get assistance with the rental process, including a step-by-step guide.
- Receive recommendations for motorcycle models based on their needs (e.g., "I'm looking for a bike for city commuting").

### Technical Implementation

-   **Frontend:** A new chat component will be built using React and TypeScript. It will be styled with Tailwind CSS to match the existing design of the "Aparent Moto" website. The chat history will be maintained using local storage.
-   **Backend:** A backend service will be created (e.g., using Node.js with Express or Python with FastAPI) to handle communication with the Gemini API. This service will be responsible for:
    -   Receiving user messages from the frontend.
    -   Formatting the messages and sending them to the Gemini API.
    -   Receiving the responses from the Gemini API.
    -   Sending the responses back to the frontend.
-   **API:** The frontend will communicate with the backend via a REST API. The API will have endpoints for sending and receiving messages.

This feature will improve the user experience by providing a 24/7 support channel, making information more accessible, and offering personalized recommendations.
