#!/usr/bin/env node
/**
 * Smoke test: exercises every tool, resource and prompt over an in-memory
 * transport, so it runs in CI without starting a server.
 *
 *   npm run mcp:smoke
 */
import assert from 'node:assert/strict';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { createPortfolioServer, SERVER_NAME } from '../mcp/server.js';

function parseToolResult(result) {
  assert.ok(result.content && result.content.length > 0, 'tool returned no content');
  assert.equal(result.content[0].type, 'text');
  return result.content[0].text;
}

const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
const server = createPortfolioServer();
await server.connect(serverTransport);

const client = new Client({ name: 'portfolio-smoke', version: '1.0.0' });
await client.connect(clientTransport);

const { tools } = await client.listTools();
const toolNames = tools.map((tool) => tool.name).sort();
assert.equal(toolNames.length, 8, 'expected 8 tools, got ' + toolNames.join(', '));
assert.deepEqual(toolNames, [
  'get_now',
  'get_portfolio_overview',
  'get_profile',
  'get_stack',
  'list_clients',
  'list_experience',
  'list_projects',
  'search_portfolio',
]);
console.log('tools: ' + toolNames.join(', '));

const profile = JSON.parse(parseToolResult(await client.callTool({ name: 'get_profile', arguments: {} })));
assert.equal(profile.name, 'Sulaiman Misri');
assert.ok(profile.counts.roles >= 9);
assert.ok(profile.counts.projects >= 30);
assert.ok(profile.links.linkedin.startsWith('https://'));
console.log('get_profile: ' + profile.name + ' · ' + profile.role);

const overview = parseToolResult(await client.callTool({ name: 'get_portfolio_overview', arguments: {} }));
assert.ok(overview.includes('## Experience'), 'overview missing experience section');

const currentRoles = JSON.parse(
  parseToolResult(await client.callTool({ name: 'list_experience', arguments: { current: true } })),
);
assert.equal(currentRoles.total, 1);
assert.equal(currentRoles.roles[0].company, 'UEM Sunrise Berhad');

const laravel = JSON.parse(
  parseToolResult(await client.callTool({ name: 'list_projects', arguments: { category: 'Laravel' } })),
);
assert.ok(laravel.total > 0);
for (const project of laravel.projects) assert.equal(project.category, 'Laravel');

const gov = JSON.parse(
  parseToolResult(await client.callTool({ name: 'list_clients', arguments: { sector: 'Government' } })),
);
assert.ok(gov.total > 0);
assert.ok(gov.bySector.Government.length === gov.total);

const daily = JSON.parse(
  parseToolResult(await client.callTool({ name: 'get_stack', arguments: { tier: 'daily' } })),
);
assert.ok(daily.length > 0);
for (const cat of daily) for (const item of cat.items) assert.equal(item.tier, 'daily');

const hits = JSON.parse(
  parseToolResult(await client.callTool({ name: 'search_portfolio', arguments: { query: 'Laravel' } })),
);
assert.ok(hits.totalMatches > 0);
assert.ok(hits.results.length > 0);

const now = JSON.parse(parseToolResult(await client.callTool({ name: 'get_now', arguments: {} })));
assert.ok(now.focus.length > 0);

const { resources } = await client.listResources();
const uris = resources.map((resource) => resource.uri).sort();
assert.ok(uris.includes('portfolio://profile'));
assert.ok(uris.includes('portfolio://overview'));
const profileResource = await client.readResource({ uri: 'portfolio://profile' });
assert.ok(profileResource.contents[0].text.includes('Sulaiman Misri'));
console.log('resources: ' + uris.join(', '));

const { prompts } = await client.listPrompts();
assert.deepEqual(prompts.map((prompt) => prompt.name).sort(), ['assess-fit', 'introduce-sulaiman']);
const rendered = await client.getPrompt({ name: 'introduce-sulaiman', arguments: { audience: 'recruiter' } });
assert.ok(rendered.messages[0].content.text.includes('recruiter'));
console.log('prompts: ' + prompts.map((prompt) => prompt.name).join(', '));

await client.close();
await server.close();

console.log('\n✅ ' + SERVER_NAME + ' smoke test passed');
