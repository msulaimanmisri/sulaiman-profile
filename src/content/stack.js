/**
 * Stack categories rendered on /stack and exposed through the MCP server.
 * Tiers: daily | comfortable | exposure.
 */
export const stackCategories = [
  {
    id: 'languages',
    index: '01',
    title: 'Languages',
    blurb: 'The grammars I think in.',
    items: [
      { name: 'PHP', tier: 'daily' },
      { name: 'JavaScript', tier: 'daily' },
      { name: 'SQL', tier: 'daily' },
      { name: 'Bash', tier: 'comfortable' },
    ],
    span: { col: 4, row: 1 },
  },
  {
    id: 'backend',
    index: '02',
    title: 'Backend',
    blurb: 'Where most of the production hours go.',
    items: [
      { name: 'Laravel', tier: 'daily' },
      { name: 'Node.js / Express', tier: 'comfortable' },
      { name: 'REST API design', tier: 'daily' },
      { name: 'Queue systems (Redis, Horizon)', tier: 'comfortable' },
      { name: 'GraphQL', tier: 'exposure' },
      { name: 'Multi-tenant architecture', tier: 'comfortable' },
    ],
    span: { col: 4, row: 2 },
  },
  {
    id: 'frontend',
    index: '03',
    title: 'Frontend',
    blurb: 'Taste matters at the edge.',
    items: [
      { name: 'Vue.js (Composition API)', tier: 'daily' },
      { name: 'React.js', tier: 'exposure' },
      { name: 'Tailwind CSS', tier: 'daily' },
      { name: 'Alpine.js', tier: 'comfortable' },
      { name: 'Vite', tier: 'daily' },
      { name: 'Headless component patterns', tier: 'comfortable' },
      { name: 'Accessibility (WCAG 2.2 AA)', tier: 'comfortable' },
    ],
    span: { col: 4, row: 2 },
  },
  {
    id: 'infra',
    index: '04',
    title: 'Infrastructure',
    blurb: 'The unglamorous half.',
    items: [
      { name: 'Nginx', tier: 'comfortable' },
      { name: 'Docker', tier: 'comfortable' },
      { name: 'Linux server admin', tier: 'comfortable' },
      { name: 'CI/CD pipelines', tier: 'comfortable' },
      { name: 'Vercel · Netlify', tier: 'daily' },
    ],
    span: { col: 4, row: 1 },
  },
  {
    id: 'data',
    index: '05',
    title: 'Data & Search',
    blurb: 'Where answers come from.',
    items: [
      { name: 'MySQL', tier: 'daily' },
      { name: 'PostgreSQL', tier: 'comfortable' },
      { name: 'Redis', tier: 'comfortable' },
      { name: 'Elasticsearch', tier: 'exposure' },
    ],
    span: { col: 4, row: 1 },
  },
  {
    id: 'workspace',
    index: '06',
    title: 'Workspace',
    blurb: 'The desk I sit at.',
    items: [
      { name: 'Macbook M4 Pro', tier: 'daily' },
      { name: 'TablePlus', tier: 'daily' },
      { name: 'Terminal', tier: 'daily', note: 'KunciMasuk · Warp' },
      { name: 'Hot Americano & mineral water', tier: 'daily' },
      { name: 'VsCode', tier: 'daily' },
      { name: 'AI CLI tools for coding assistants', tier: 'daily' },
      { name: 'Draw.io', tier: 'comfortable' },
      { name: 'Github / Bitbucket', tier: 'daily' },
      { name: 'Jira', tier: 'daily' },
    ],
    span: { col: 4, row: 1 },
  },
];

export default stackCategories;
