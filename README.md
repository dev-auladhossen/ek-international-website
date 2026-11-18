# EK International Website

A Vue 3 and Vite static website using Vue Router, Vite SSG, Tailwind CSS v4, Unhead, and Lucide Vue.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The SSG build outputs nested `index.html` route files under `dist/`. Upload the contents of `dist/` to the domain root on Apache/cPanel. The Vite base path is `/`; route URLs use trailing slashes. `public/.htaccess` serves the generated `/404/` page for Apache 404 responses. There is no SPA fallback rewrite.

## Languages and routes

English uses `en` and `<html lang="en">`. Bangla uses `bn` and `<html lang="bn-BD">`.

- `/` — English homepage; `/en/` is also the English homepage
- `/en/`, `/en/about/`, `/en/team/`, `/en/work-visa/`, `/en/hajj-umrah/`, `/en/contact/`
- `/bn/`, `/bn/about/`, `/bn/team/`, `/bn/work-visa/`, `/bn/hajj-umrah/`, `/bn/contact/`
- `/404/`, `/en/404/`, `/bn/404/` — static not-found pages

The dynamic router catch-all renders the localized not-found component during client navigation. It is excluded from SSG; all explicit routes above are prerendered.

## Source architecture

| Path | Responsibility |
| --- | --- |
| `src/assets/images/` | Bundled images grouped by logo, hero, destination, team, office, and service use |
| `src/components/common/` | Shared language switcher and localized page content |
| `src/components/layout/` | Reusable header, footer, and navigation UI |
| `src/components/home/` | Home-page-specific UI |
| `src/components/contact/` | Contact-page UI |
| `src/components/seo/` | Reusable SEO UI when needed |
| `src/composables/` | Reusable Composition API logic, including current locale/page content |
| `src/data/` | Business content kept outside UI components |
| `src/layouts/` | Shared page shell and document metadata |
| `src/pages/` | Route-level page composition |
| `src/router/` | Vue Router records and SSG route definitions |
| `src/i18n/en.js`, `src/i18n/bn.js` | Central English and Bangla dictionaries |
| `src/utils/` | Small framework-independent helpers |
| `src/main.js` | Vite SSG app entry point |
| `src/style.css` | Tailwind CSS v4 import |
| `public/images/` | Static images copied without bundler processing |
| `public/.htaccess` | Specific Apache 404 document configuration |

Translations stay in `src/i18n/`; UI components read the dictionaries through `usePageContent`. Business details and media should be added when approved source content is available.
