# sulaimanmisri.com

Personal portfolio site for Sulaiman Misri — built with the latest Vite/Vue stack.

## Stack

- **Vite** `^8.1` — build tool and dev server
- **Vue** `^3.5` — UI framework, single-file components with `<script setup>`
- **vue-router** `^5.1` — SPA routing
- **Tailwind CSS** `^4` — utility-first CSS, wired through `@tailwindcss/vite`
- **@headlessui/vue** `^1.7` — accessible primitives (used for the mobile menu Disclosure)
- **axios** `^1.18` — HTTP client (used by the blog post index page)

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start dev server (Vite)
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Project layout

```
src/
├── App.vue              # Root shell: navbar + Disclosure mobile menu + banner + footer
├── main.js              # App bootstrap, registers the router
├── main.css             # Tailwind v4 entry + @theme font tokens
├── api/index.js         # Pre-configured axios instance
├── router/index.js      # Route table (lazy-loaded views)
├── components/
│   ├── Card.vue         # Project card (used on the personal-projects page)
│   ├── Image.vue        # Lazy-loaded grayscale hero image
│   └── Project.vue      # Inline project-list item
└── views/
    ├── home.vue
    ├── about.vue
    ├── stack.vue
    ├── project.vue
    ├── personal-project.vue
    └── posts/
        ├── index.vue
        ├── create.vue
        └── edit.vue
```

## Notes

- Browser floor for Tailwind v4 / Lightning CSS: Safari 16.4+, Chrome 111+, Firefox 128+.
- The mobile menu uses `@headlessui/vue`'s `<Disclosure>` for accessible, keyboard-friendly toggling.
- `vercel.json` keeps the SPA rewrite so deep links work in production.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
