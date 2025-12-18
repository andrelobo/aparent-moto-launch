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

## Development

To get started with the project, follow these steps:

### 1. Installation

Install the project dependencies using `yarn`:

```bash
yarn install
```

### 2. Running the Development Server

To start the local development server, run:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### 3. Building for Production

To create a production-ready build of the application, run:

```bash
yarn build
```

The output will be generated in the `dist/` directory.

### 4. Linting

To check the code for any linting errors, run:

```bash
yarn lint
```

### 5. Previewing the Production Build

To preview the production build locally, run:

```bash
yarn preview
```

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

## Proposed Feature: Gemini-powered Chatbot

To enhance user engagement and provide instant support, we propose the integration of a Gemini-powered chatbot.

### Overview

The chatbot will be available as a floating widget on the website. Users can interact with it to get answers to frequently asked questions, inquire about motorcycle availability, and get assistance with the rental process.

### Technical Implementation

-   **Frontend:** A new chat component will be built using React and TypeScript. It will be styled with Tailwind CSS to match the existing design.
-   **Backend:** A backend service will be created (e.g., using Node.js or Python) to handle communication with the Gemini API. This service will be responsible for sending user messages to the Gemini model and returning the responses. The Python snippets provided during our initial setup could be used as a reference for this backend service.
-   **API:** The frontend will communicate with the backend via a REST API.

This feature will improve the user experience by providing a 24/7 support channel and making information more accessible.

## Recent Changes (HeroSection.tsx)

The `HeroSection.tsx` component has undergone several layout and styling adjustments to meet specific visual requirements:

-   **Motorcycle Image Sizing:**
    -   **Desktop:** The motorcycle images have been resized multiple times to achieve the desired visual balance. The final size is controlled by `max-w-[340px]` on each image and a container height of `h-[340px] xl:h-[395px]`.
    -   **Mobile:** The `honda-start-vermelha.png` and `honda-titan-cinza.png` images have been scaled up using `scale-125` to visually match the `honda-fan-azul.png`.

-   **Motorcycle Image Positioning:**
    -   **Desktop:** The images are now vertically aligned to the bottom of their container using the `items-end` class. The horizontal spacing between them has been reduced by changing `gap-4` to `gap-2`.

-   **"Ver motos" Button:**
    -   The "Ver motos disponíveis" button has been made invisible across all viewports (desktop and mobile) by applying the `invisible` Tailwind CSS class. It remains in the DOM but is not rendered.

-   **Hero Text:**
    -   The `whitespace-nowrap` class was removed from the main heading and paragraph to allow the text to wrap naturally on smaller screens, preventing overflow and text from being cut off.

-   **`hero-couple.png` Image:**
    -   The size of the `hero-couple.png` image has been significantly increased on mobile viewports to `w-96 sm:w-[512px]` for better visual impact.
