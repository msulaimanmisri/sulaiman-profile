# sulaimanmisri.com

Personal portfolio site for Sulaiman Misri — built with the latest Vite/Vue stack, and exposed
to AI assistants through a public MCP server.

## Stack

- **Vite** `^8.1` — build tool and dev server
- **Vue** `^3.5` — UI framework, single-file components with `<script setup>`
- **vue-router** `^5.1` — SPA routing
- **Tailwind CSS** `^4` — utility-first CSS, wired through `@tailwindcss/vite`
- **@headlessui/vue** `^1.7` — accessible primitives (used for the mobile menu Disclosure)
- **axios** `^1.18` — HTTP client
- **@modelcontextprotocol/sdk** `^1.32` — MCP server, served from `/api/mcp` on Vercel

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start dev server (Vite)
npm run build    # production build to dist/
npm run preview  # preview the production build locally

npm run mcp:dev      # local MCP endpoint at http://localhost:8787/mcp
npm run mcp:smoke    # in-memory test of every MCP tool, resource and prompt
npm run mcp:inspect  # MCP Inspector (connect it to the local URL)
```

## Project layout

```
api/
└── mcp.js               # Vercel Function: Streamable HTTP MCP endpoint
mcp/
├── server.js            # MCP server definition (tools, resources, prompts)
└── portfolio.js         # Read-only access layer over src/content
scripts/
├── mcp-dev.mjs          # Local Node server for the MCP endpoint
└── mcp-smoke.mjs        # Smoke test over an in-memory transport
src/
├── App.vue              # Root shell: navbar + Disclosure mobile menu + banner + footer
├── main.js              # App bootstrap, registers the router
├── main.css             # Tailwind v4 entry + @theme font tokens
├── router/index.js      # Route table (lazy-loaded views)
├── content/             # Single source of truth for copy/data
│   ├── profile.js       # Role, location, summary, focus areas, links
│   ├── experience.js    # Career history
│   ├── now.js           # Current focus, reading list
│   ├── stack.js         # Tech stack by category and tier
│   ├── clients.js       # 42 client engagements by sector
│   └── personal-projects.js
├── components/
│   ├── Card.vue, Project.vue, StackItem.vue, StatCard.vue,
│   ├── EyebrowTag.vue, NavLink.vue, FilterChip.vue,
│   ├── ArchiveGrid.vue, FilmGrain.vue, Image.vue
└── views/
    ├── home.vue, about.vue, stack.vue, experience.vue,
    ├── project.vue, personal-project.vue
```

## MCP server

The site ships a public, read-only [Model Context Protocol](https://modelcontextprotocol.io)
server, so AI assistants can query the same content the pages render instead of scraping HTML.

- **Endpoint:** `https://sulaimanmisri.com/api/mcp`
- **Transport:** Streamable HTTP, stateless, JSON responses
- **Auth:** none — everything exposed is already public
- **Runtime:** Vercel Node Function (`api/mcp.js`)

### Tools

| Tool | What it returns |
| --- | --- |
| `get_profile` | Role, location, availability, summary, focus areas, links, counts |
| `get_portfolio_overview` | One-call markdown digest of the whole portfolio |
| `get_now` | Current focus, project niche, reading list |
| `list_experience` | Career history; filter by company or current role only |
| `list_projects` | Projects; filter by category, featured flag or free text |
| `list_clients` | Client engagements grouped by sector |
| `get_stack` | Tech stack by category and proficiency tier |
| `search_portfolio` | Ranked full-text search across all of the above |

Resources: `portfolio://profile`, `portfolio://experience`, `portfolio://projects`,
`portfolio://clients`, `portfolio://stack`, `portfolio://now`, `portfolio://overview`.

Prompts: `introduce-sulaiman` (audience-aware intro), `assess-fit` (compare a role to the profile).

### Connect a client

Claude Desktop (`claude_desktop_config.json`), Cursor (`.cursor/mcp.json`) and Claude Code
(`.mcp.json`) all use the same shape:

```json
{
  "mcpServers": {
    "sulaiman-profile": {
      "type": "http",
      "url": "https://sulaimanmisri.com/api/mcp"
    }
  }
}
```

VS Code (`.vscode/mcp.json`):

```json
{
  "servers": {
    "sulaiman-profile": {
      "type": "http",
      "url": "https://sulaimanmisri.com/api/mcp"
    }
  }
}
```

Claude.ai web accepts the URL directly under Settings → Connectors → Add custom connector.

### Local development

```bash
npm run mcp:dev                     # http://localhost:8787/mcp
npm run mcp:smoke                   # asserts every tool/resource/prompt works
npx @modelcontextprotocol/inspector # connect to http://localhost:8787/mcp
```

### Deployment notes

- `vercel.json` keeps the SPA fallback but excludes `/api/*`, so the MCP endpoint is not
  swallowed by the router.
- The handler is stateless: a fresh server and transport per request, no session ids, no
  in-memory state — safe across cold starts and parallel invocations.
- Content lives in `src/content/*`; editing a role, project or stack item updates the site
  **and** the MCP tools together.

## Notes

- Browser floor for Tailwind v4 / Lightning CSS: Safari 16.4+, Chrome 111+, Firefox 128+.
- The mobile menu uses `@headlessui/vue`'s `<Disclosure>` for accessible, keyboard-friendly toggling.
- `vercel.json` keeps the SPA rewrite so deep links work in production.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
