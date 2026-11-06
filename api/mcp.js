/**
 * POST /api/mcp — Streamable HTTP MCP endpoint.
 *
 * Stateless: every request builds a fresh server + transport, so it works on
 * serverless (Vercel) where instances are short-lived and may run in parallel.
 *
 * Vercel's Node runtime pre-parses JSON bodies, so we hand req.body to the
 * transport instead of letting it re-read the (already consumed) stream.
 */
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createPortfolioServer, SERVER_NAME, SERVER_VERSION } from '../mcp/server.js';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS',
  'Access-Control-Allow-Headers':
    'Content-Type, Accept, Authorization, Mcp-Session-Id, MCP-Protocol-Version, Last-Event-ID',
  'Access-Control-Expose-Headers': 'Mcp-Session-Id',
  'Access-Control-Max-Age': '86400',
};

function sendJson(res, status, payload, extraHeaders) {
  const body = JSON.stringify(payload);
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.setHeader('Cache-Control', 'no-store');
  if (extraHeaders) {
    for (const [key, value] of Object.entries(extraHeaders)) {
      res.setHeader(key, value);
    }
  }
  res.end(body);
}

function rpcError(code, message, status, extraHeaders) {
  return {
    status,
    payload: { jsonrpc: '2.0', error: { code, message }, id: null },
    extraHeaders,
  };
}

function preParsedBody(req) {
  const body = req.body;
  if (!body || typeof body !== 'object' || Buffer.isBuffer(body)) return undefined;
  return body;
}

export default async function handler(req, res) {
  for (const [key, value] of Object.entries(CORS_HEADERS)) {
    res.setHeader(key, value);
  }

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    const error = rpcError(
      -32000,
      'Method not allowed. This MCP endpoint is stateless: send JSON-RPC over POST.',
      405,
      { Allow: 'POST, OPTIONS' },
    );
    sendJson(res, error.status, error.payload, error.extraHeaders);
    return;
  }

  const server = createPortfolioServer();
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });

  let closed = false;
  const cleanup = async () => {
    if (closed) return;
    closed = true;
    await transport.close().catch(() => {});
    await server.close().catch(() => {});
  };

  res.on('close', cleanup);

  try {
    await server.connect(transport);
    await transport.handleRequest(req, res, preParsedBody(req));
  } catch (error) {
    console.error('[' + SERVER_NAME + '] MCP request failed', error);
    if (!res.headersSent) {
      const failure = rpcError(-32603, 'Internal server error.', 500);
      sendJson(res, failure.status, failure.payload, failure.extraHeaders);
    }
  } finally {
    await cleanup();
  }
}

export { SERVER_NAME, SERVER_VERSION };
