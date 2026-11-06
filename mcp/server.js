/**
 * MCP server definition for sulaimanmisri.com.
 *
 * Transport-agnostic: api/mcp.js wires it to Vercel's Node runtime over
 * Streamable HTTP, while scripts/mcp-smoke.mjs talks to it in-memory.
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
  getNow,
  getOverview,
  getProfile,
  getStack,
  listClients,
  listExperience,
  listProjects,
  searchPortfolio,
} from './portfolio.js';

export const SERVER_NAME = 'sulaimanmisri-portfolio';
export const SERVER_VERSION = '1.0.0';

const INSTRUCTIONS = [
  'Read-only MCP server for Sulaiman Misri — Senior Software Engineer & Software Architect based in Kuala Lumpur, Malaysia.',
  'It exposes the same public information published on https://sulaimanmisri.com.',
  'Use search_portfolio for broad questions, the list_* tools for structured lookups, and get_profile for the short bio, availability and contact links.',
  'Never invent facts that are not returned by a tool.',
].join(' ');

const READ_ONLY = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
};

function jsonResult(value) {
  return { content: [{ type: 'text', text: JSON.stringify(value, null, 2) }] };
}

function textResult(value) {
  return { content: [{ type: 'text', text: value }] };
}

function registerJsonResource(server, name, uri, title, description, load) {
  server.registerResource(
    name,
    uri,
    { title, description, mimeType: 'application/json' },
    async (resourceUri) => ({
      contents: [
        {
          uri: resourceUri.href,
          mimeType: 'application/json',
          text: JSON.stringify(load(), null, 2),
        },
      ],
    }),
  );
}

export function createPortfolioServer() {
  const server = new McpServer(
    { name: SERVER_NAME, version: SERVER_VERSION, title: 'Sulaiman Misri — Portfolio' },
    { instructions: INSTRUCTIONS },
  );

  // ---------------------------------------------------------------- tools

  server.registerTool(
    'get_profile',
    {
      title: 'Get profile',
      description:
        "Sulaiman Misri's professional profile: role, location, availability, summary, focus areas, principles, languages, career highlights, speaking, links and content counts. Start here for an overview.",
      annotations: READ_ONLY,
    },
    async () => jsonResult(getProfile()),
  );

  server.registerTool(
    'get_portfolio_overview',
    {
      title: 'Get portfolio overview',
      description:
        'A single markdown digest of the whole portfolio: summary, current focus, full career history, featured projects, stack and links. Cheapest way to load everything in one call.',
      annotations: READ_ONLY,
    },
    async () => textResult(getOverview()),
  );

  server.registerTool(
    'get_now',
    {
      title: 'Get current focus',
      description:
        'What Sulaiman is working on right now, the project niche, recent reading, and work location/timezone.',
      annotations: READ_ONLY,
    },
    async () => jsonResult(getNow()),
  );

  server.registerTool(
    'list_experience',
    {
      title: 'List work experience',
      description:
        'Career history, most recent first. Optionally filter by company/title substring or to the current role only.',
      inputSchema: {
        company: z
          .string()
          .min(1)
          .optional()
          .describe('Case-insensitive substring matched against company name or job title.'),
        current: z
          .boolean()
          .optional()
          .describe('true returns only the current role, false returns only past roles.'),
      },
      annotations: READ_ONLY,
    },
    async ({ company, current }) => jsonResult(listExperience({ company, current })),
  );

  server.registerTool(
    'list_projects',
    {
      title: 'List personal projects',
      description:
        'Personal and open-source projects with descriptions and links. Filter by category, featured flag, or free-text query.',
      inputSchema: {
        category: z
          .string()
          .min(1)
          .optional()
          .describe('Framework | Laravel | Vue | WordPress | Tooling | Architecture.'),
        featured: z
          .boolean()
          .optional()
          .describe('true returns only curated/featured projects.'),
        query: z
          .string()
          .min(1)
          .optional()
          .describe('Case-insensitive substring matched against title, description and category.'),
        limit: z.number().int().min(1).max(50).optional().describe('Max projects to return (default 25).'),
      },
      annotations: READ_ONLY,
    },
    async (args) => jsonResult(listProjects(args)),
  );

  server.registerTool(
    'list_clients',
    {
      title: 'List client engagements',
      description:
        'Client engagements grouped by sector (Government, Education, Commerce, Manufacturing, Other). Optionally filter by sector or client name.',
      inputSchema: {
        sector: z
          .string()
          .min(1)
          .optional()
          .describe('Government | Education | Commerce | Manufacturing | Other.'),
        query: z.string().min(1).optional().describe('Case-insensitive client name substring.'),
      },
      annotations: READ_ONLY,
    },
    async (args) => jsonResult(listClients(args)),
  );

  server.registerTool(
    'get_stack',
    {
      title: 'Get tech stack',
      description:
        'Tools and technologies grouped by category, each rated daily, comfortable or exposure. Optionally filter by category or proficiency tier.',
      inputSchema: {
        category: z
          .string()
          .min(1)
          .optional()
          .describe('Category id or title, e.g. backend, frontend, infra, data, workspace, languages.'),
        tier: z
          .enum(['daily', 'comfortable', 'exposure'])
          .optional()
          .describe('Only return items at this proficiency tier.'),
      },
      annotations: READ_ONLY,
    },
    async (args) => jsonResult(getStack(args)),
  );

  server.registerTool(
    'search_portfolio',
    {
      title: 'Search the portfolio',
      description:
        'Full-text search across profile, experience, projects, clients, stack and current focus. Returns ranked hits with type, title, link and a snippet.',
      inputSchema: {
        query: z.string().min(1).describe('Keywords, e.g. "Laravel queue" or "WordPress plugin".'),
        limit: z.number().int().min(1).max(50).optional().describe('Max results to return (default 10).'),
      },
      annotations: READ_ONLY,
    },
    async ({ query, limit }) => jsonResult(searchPortfolio(query, limit)),
  );

  // ------------------------------------------------------------ resources

  registerJsonResource(
    server,
    'profile',
    'portfolio://profile',
    'Profile',
    'Structured profile: role, location, summary, focus areas and links.',
    () => getProfile(),
  );

  registerJsonResource(
    server,
    'experience',
    'portfolio://experience',
    'Experience',
    'Full career history, most recent first.',
    () => listExperience(),
  );

  registerJsonResource(
    server,
    'projects',
    'portfolio://projects',
    'Projects',
    'All personal and open-source projects.',
    () => listProjects({ limit: 50 }),
  );

  registerJsonResource(
    server,
    'clients',
    'portfolio://clients',
    'Clients',
    'Client engagements grouped by sector.',
    () => listClients(),
  );

  registerJsonResource(
    server,
    'stack',
    'portfolio://stack',
    'Stack',
    'Tech stack grouped by category and proficiency tier.',
    () => getStack(),
  );

  registerJsonResource(
    server,
    'now',
    'portfolio://now',
    'Now',
    'Current focus, project niche and reading list.',
    () => getNow(),
  );

  server.registerResource(
    'overview',
    'portfolio://overview',
    {
      title: 'Portfolio overview',
      description: 'Markdown digest of the whole portfolio.',
      mimeType: 'text/markdown',
    },
    async (resourceUri) => ({
      contents: [
        {
          uri: resourceUri.href,
          mimeType: 'text/markdown',
          text: getOverview(),
        },
      ],
    }),
  );

  // -------------------------------------------------------------- prompts

  server.registerPrompt(
    'introduce-sulaiman',
    {
      title: 'Introduce Sulaiman',
      description: 'Draft an introduction of Sulaiman tailored to a specific audience.',
      argsSchema: {
        audience: z
          .enum(['recruiter', 'client', 'conference', 'general'])
          .optional()
          .describe('Who the introduction is written for. Defaults to general.'),
      },
    },
    ({ audience }) => {
      const target = audience || 'general';
      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text:
                'Call get_profile and get_portfolio_overview first. Then write a 3-4 sentence introduction of Sulaiman Misri for a ' +
                target +
                ' audience. Use only facts returned by the tools, and lead with what matters most to that audience.',
            },
          },
        ],
      };
    },
  );

  server.registerPrompt(
    'assess-fit',
    {
      title: 'Assess fit for a role',
      description: 'Compare a role description or brief against the portfolio and summarise fit.',
      argsSchema: {
        role: z.string().min(1).describe('The role or project brief to assess against.'),
      },
    },
    ({ role }) => ({
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text:
              'Use get_profile, list_experience, get_stack and list_projects to compare Sulaiman against the role below. ' +
              'Report the strongest matches, any honest gaps, and two questions worth asking next. Do not guess beyond the tool output.\n\nRole:\n' +
              role,
          },
        },
      ],
    }),
  );

  return server;
}

export default createPortfolioServer;
