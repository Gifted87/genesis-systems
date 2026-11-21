# The Genesis Machine

The Genesis Machine website is a portfolio and product overview for an AI-assisted backend engineering workflow. It presents the system concepts, process, and example projects through an animated, responsive site. This repository contains the website frontend; it does not implement the backend generation system described by the site.

## Pages

- `/` — overview, featured projects, and system concepts
- `/how-it-works` — the six-phase workflow
- `/portfolio` — project case studies
- `/thinking` — approach and design principles
- `/about` — background
- `/contact` — contact information

## Tech stack

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Vite with Tailwind CSS 4
- Radix UI components and Lucide icons
- GSAP for selected interface animations

## Requirements

- Node.js 20 or newer
- npm

## Develop locally

```bash
npm install
npm run dev
```

Vite prints the local development URL when the server starts.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Build with the development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format files with Prettier |

## Deployment

The repository includes Vercel and Cloudflare Vite configuration. Choose the matching platform configuration when deploying; the project has no environment variables configured in its package scripts.

## Project structure

```text
src/
  components/  Shared site and UI components
  hooks/       Reusable React hooks
  lib/         Shared utilities
  routes/      TanStack file-based routes
  styles.css   Global styles and theme
```

## Content and claims

The site includes project descriptions, performance figures, and links to external project and document pages. Treat those as portfolio content supplied by the project author; this frontend does not independently verify the claims or execute the referenced engineering workflow.
