# Copilot Instructions for react-portfolio

## Project Overview
- This is a single-page React portfolio site built with Vite.
- Main logic and data are in `src/Portfolio.jsx`.
- Project images are stored in `src/assets/` and imported directly into components.
- Styling is handled via CSS files (`App.css`, `index.css`) and inline styles/media queries in JSX.

## Key Files & Structure
- `src/Portfolio.jsx`: Main component, project data array, rendering logic, and custom styles.
- `src/App.jsx` and `src/main.jsx`: Standard React entry points.
- `vite.config.js`: Vite configuration, uses `@vitejs/plugin-react`.
- `public/`: For static assets (not used for project images, which are in `src/assets/`).

## Developer Workflows
- **Start dev server:** `npm run dev` (serves at http://localhost:5173)
- **Build for production:** `npm run build` (outputs to `dist/`)
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint`

## Patterns & Conventions
- Project data (title, images, description, etc.) is defined as an array of objects in `Portfolio.jsx`.
- Images are imported at the top of `Portfolio.jsx` and referenced in the data array.
- Responsive design is achieved with media queries in CSS and inline styles.
- Per-project customizations (e.g., image fit, title size) are handled with conditional logic in JSX.
- Contact info and project details are rendered conditionally based on data.

## Integration & Extensibility
- No backend or API integration; all data is local.
- To add a new project: import images in `Portfolio.jsx`, add a new object to the `projects` array.
- To update contact info: edit the contact section in `Portfolio.jsx`.
- For SEO: add meta tags in `index.html` and static files (sitemap, robots.txt) in `public/`.

## External Dependencies
- React, ReactDOM
- Vite (build tool)
- `lucide-react` for icons

## Example: Adding a Project
1. Place images in `src/assets/`.
2. Import them at the top of `Portfolio.jsx`.
3. Add a new object to the `projects` array with the relevant fields.

---

If you update project structure or add new workflows, document them here for future AI agents and developers.
