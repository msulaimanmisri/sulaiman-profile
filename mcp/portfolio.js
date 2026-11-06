/**
 * Read-only access layer over the site content.
 *
 * Everything the MCP server exposes comes from here so the site and the API
 * stay in sync: edit src/content/*, both surfaces update.
 */
import profile from '../src/content/profile.js';
import experience from '../src/content/experience.js';
import now from '../src/content/now.js';
import {
  personalProjects,
  personalProjectCategories,
  featuredPersonalProjects,
} from '../src/content/personal-projects.js';
import { clients, clientSectors } from '../src/content/clients.js';
import stackCategories from '../src/content/stack.js';

const SITE = profile.links.website;

function clampLimit(value, max, fallback) {
  if (typeof value !== 'number' || Number.isNaN(value)) return fallback;
  return Math.min(Math.max(Math.trunc(value), 1), max);
}

export function getProfile() {
  return {
    name: profile.name,
    role: profile.role,
    headline: profile.headline,
    location: profile.location,
    availability: profile.availability,
    summary: profile.summary,
    focusAreas: profile.focusAreas,
    principles: profile.principles,
    languages: profile.languages,
    highlights: profile.highlights,
    speaking: profile.speaking,
    currentlyLearning: profile.currentlyLearning,
    links: profile.links,
    counts: {
      roles: experience.length,
      projects: personalProjects.length,
      featuredProjects: featuredPersonalProjects.length,
      clients: clients.length,
      projectCategories: personalProjectCategories.filter((c) => c !== 'All'),
      clientSectors: clientSectors.filter((s) => s !== 'All'),
    },
  };
}

export function listExperience({ company, current } = {}) {
  const needle = company ? String(company).toLowerCase() : null;

  const roles = experience.filter((role) => {
    if (current === true && role.to !== 'Present') return false;
    if (current === false && role.to === 'Present') return false;
    if (needle) {
      const haystack = (role.company + ' ' + role.title).toLowerCase();
      if (!haystack.includes(needle)) return false;
    }
    return true;
  });

  return { total: roles.length, roles };
}

export function listProjects({ category, featured, query, limit } = {}) {
  const needle = query ? String(query).toLowerCase() : null;
  const max = clampLimit(limit, 50, 25);

  const matches = personalProjects.filter((project) => {
    if (category) {
      const wanted = String(category).toLowerCase();
      if (project.category.toLowerCase() !== wanted) return false;
    }
    if (featured === true && !project.featured) return false;
    if (featured === false && project.featured) return false;
    if (needle) {
      const haystack = (project.title + ' ' + project.description + ' ' + project.category).toLowerCase();
      if (!haystack.includes(needle)) return false;
    }
    return true;
  });

  return {
    total: matches.length,
    returned: Math.min(matches.length, max),
    categories: personalProjectCategories.filter((c) => c !== 'All'),
    projects: matches.slice(0, max),
  };
}

export function listClients({ sector, query } = {}) {
  const needle = query ? String(query).toLowerCase() : null;

  const matches = clients.filter((client) => {
    if (sector && client.sector.toLowerCase() !== String(sector).toLowerCase()) return false;
    if (needle && !client.title.toLowerCase().includes(needle)) return false;
    return true;
  });

  const bySector = {};
  for (const client of matches) {
    if (!bySector[client.sector]) bySector[client.sector] = [];
    bySector[client.sector].push(client.title);
  }

  return {
    total: matches.length,
    sectors: clientSectors.filter((s) => s !== 'All'),
    bySector,
  };
}

export function getStack({ category, tier } = {}) {
  const wantedCategory = category ? String(category).toLowerCase() : null;
  const wantedTier = tier ? String(tier).toLowerCase() : null;

  return stackCategories
    .filter((cat) => {
      if (!wantedCategory) return true;
      return cat.id === wantedCategory || cat.title.toLowerCase() === wantedCategory;
    })
    .map((cat) => ({
      id: cat.id,
      title: cat.title,
      blurb: cat.blurb,
      items: cat.items.filter((item) => !wantedTier || item.tier === wantedTier),
    }))
    .filter((cat) => cat.items.length > 0);
}

export function getNow() {
  return {
    ...now,
    site: SITE,
  };
}

function portfolioDocuments() {
  const docs = [];

  docs.push({
    type: 'profile',
    title: profile.name,
    subtitle: profile.role,
    url: SITE,
    fields: [
      profile.headline,
      profile.role,
      ...profile.summary,
      ...profile.focusAreas,
      ...profile.principles,
      ...profile.languages,
      profile.availability,
      profile.location.city,
      profile.location.country,
    ],
  });

  for (const role of experience) {
    docs.push({
      type: 'experience',
      title: role.title + ' · ' + role.company,
      subtitle: role.from + ' – ' + role.to + ' · ' + role.location,
      url: SITE + '/experience',
      fields: [role.title, role.company, role.location, role.from, role.to],
    });
  }

  for (const project of personalProjects) {
    docs.push({
      type: 'project',
      title: project.title,
      subtitle: project.category,
      url: project.url,
      fields: [project.title, project.description, project.category],
    });
  }

  for (const client of clients) {
    docs.push({
      type: 'client',
      title: client.title,
      subtitle: client.sector,
      url: SITE + '/project',
      fields: [client.title, client.sector],
    });
  }

  for (const cat of stackCategories) {
    for (const item of cat.items) {
      docs.push({
        type: 'stack',
        title: item.name,
        subtitle: cat.title + ' · ' + item.tier,
        url: SITE + '/stack',
        fields: [item.name, cat.title, item.tier, item.note || ''],
      });
    }
  }

  docs.push({
    type: 'now',
    title: 'Now',
    subtitle: now.location,
    url: SITE,
    fields: [now.focus, now.projectNiche, now.location, ...now.reading],
  });

  return docs;
}

function tokenize(query) {
  return String(query || '')
    .toLowerCase()
    .split(/[^a-z0-9+#]+/i)
    .filter((token) => token.length > 1);
}

function makeSnippet(doc, tokens) {
  const candidates = [doc.subtitle, ...doc.fields].filter(Boolean);
  const hit = candidates.find((value) =>
    tokens.some((token) => String(value).toLowerCase().includes(token)),
  );
  if (!hit) return '';
  const text = String(hit).replace(/\s+/g, ' ').trim();
  return text.length > 180 ? text.slice(0, 177) + '…' : text;
}

export function searchPortfolio(query, limit = 10) {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return { query, totalMatches: 0, results: [] };
  }

  const max = clampLimit(limit, 50, 10);
  const scored = [];

  for (const doc of portfolioDocuments()) {
    let score = 0;
    const title = doc.title.toLowerCase();
    const subtitle = (doc.subtitle || '').toLowerCase();
    const body = doc.fields.join(' ').toLowerCase();

    for (const token of tokens) {
      if (title.includes(token)) score += 6;
      if (subtitle.includes(token)) score += 3;
      if (body.includes(token)) score += 1;
    }

    if (score > 0) {
      scored.push({ doc, score });
    }
  }

  scored.sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title));

  const results = scored.slice(0, max).map(({ doc }) => ({
    type: doc.type,
    title: doc.title,
    subtitle: doc.subtitle,
    url: doc.url,
    snippet: makeSnippet(doc, tokens),
  }));

  return { query, totalMatches: scored.length, results };
}

export function getOverview() {
  const lines = [];

  lines.push('# ' + profile.name + ' — ' + profile.role);
  lines.push('');
  lines.push(
    profile.location.city + ', ' + profile.location.country +
      ' · ' + profile.location.workPreference +
      ' · ' + profile.location.timezone,
  );
  lines.push('');
  lines.push('Website: ' + SITE);
  lines.push('Availability: ' + profile.availability);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  for (const paragraph of profile.summary) {
    lines.push(paragraph);
    lines.push('');
  }

  lines.push('## Now');
  lines.push('');
  lines.push('- Focus: ' + now.focus);
  lines.push('- Niche: ' + now.projectNiche);
  lines.push('- Reading: ' + now.reading.join('; '));
  lines.push('');

  lines.push('## Experience (most recent first)');
  lines.push('');
  for (const role of experience) {
    lines.push('- ' + role.from + ' – ' + role.to + ' · ' + role.title + ', ' + role.company + ' (' + role.location + ')');
  }
  lines.push('');

  lines.push('## Featured projects');
  lines.push('');
  for (const project of featuredPersonalProjects) {
    lines.push('- ' + project.title + ' (' + project.category + ') — ' + project.url);
  }
  lines.push('');

  lines.push('## Stack');
  lines.push('');
  for (const cat of stackCategories) {
    const names = cat.items.map((item) => item.name + ' [' + item.tier + ']').join(', ');
    lines.push('- ' + cat.title + ': ' + names);
  }
  lines.push('');

  lines.push('## Links');
  lines.push('');
  lines.push('- Website: ' + profile.links.website);
  lines.push('- LinkedIn: ' + profile.links.linkedin);
  lines.push('- GitHub: ' + profile.links.github);
  lines.push('- Writing: ' + profile.links.devto);

  return lines.join('\n');
}
