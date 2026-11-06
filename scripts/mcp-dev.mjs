#!/usr/bin/env node
/**
 * Local MCP endpoint for development.
 *
 *   npm run mcp:dev        # http://localhost:8787/mcp
 *
 * Then point MCP Inspector at it:
 *   npx @modelcontextprotocol/inspector
 */
import { createServer } from 'node:http';
import handler from '../api/mcp.js';

const port = Number(process.env.PORT || 8787);

const server = createServer(async (req, res) => {
  const url = req.url || '/';

  if (url === '/' || url === '/health') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true, endpoint: 'http://localhost:' + port + '/mcp' }));
    return;
  }

  if (!url.startsWith('/mcp')) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Not found. The MCP endpoint is at /mcp.' }));
    return;
  }

  await handler(req, res);
});

server.listen(port, () => {
  console.log('MCP dev server listening on http://localhost:' + port + '/mcp');
});
