/**
 * Machine-readable profile facts.
 *
 * The prose lives in src/views/about.vue and src/views/home.vue. This module
 * mirrors it in a structured shape so the MCP server (and anything else) can
 * answer questions without scraping Vue templates.
 *
 * Keep in sync when the site copy changes.
 */
export const profile = {
  name: 'Sulaiman Misri',
  role: 'Senior Software Engineer & Software Architect',
  headline: 'Your next Full Stack Engineer & Architect',
  location: {
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    timezone: 'GMT+8',
    workPreference: 'Hybrid/Remote',
  },
  availability: 'Open for advisory, architecture review, and senior engineering engagements.',
  summary: [
    'Sulaiman is a Senior Software Engineer and Software Architect based in Kuala Lumpur. He works hands-on — writing the code, drawing the diagrams, sitting in the stand-ups — and at the same time shapes the architecture behind the systems that run for years after the launch party is over.',
    'Over a decade he has shipped e-commerce platforms, learning management systems, enterprise applications, and public-sector websites — for ministries, multinational brands, universities, and one-person shops alike.',
    'He specialises in PHP, Laravel, Tailwind CSS, Alpine.js, and Vue.js, with additional depth across infrastructure, performance, and team-scale engineering. This website is built on Vue 3 and Tailwind v4.',
    'Outside of work, Sulaiman mentors people interested in WordPress and web development — in person and online — and has spoken at official WordPress gatherings in Malaysia.',
  ],
  focusAreas: ['Architecture', 'System design', 'API platforms', 'Performance', 'Mentoring'],
  principles: [
    'Boring tech for critical paths.',
    'Measure before optimizing.',
    'Architecture is a team sport.',
    'Push often, push early. Break things, but learn them well.',
  ],
  languages: ['PHP', 'JavaScript', 'Bash', 'SQL'],
  highlights: [
    { label: 'Years writing production code', value: '10+', caption: 'Since 2014' },
    { label: 'Engagements shipped', value: '40+', caption: 'Across sectors' },
    { label: 'Developers mentored', value: '1200+', caption: 'Since 2015' },
  ],
  speaking: [
    'WordCamp Malaysia',
    'WP Malaysia Meetup',
    'Local dev community events',
    'Internal sharing sessions',
  ],
  currentlyLearning:
    'Going deep into DevOps and sharpening AI skills to become an AI-Native Engineer (AINE).',
  links: {
    website: 'https://sulaimanmisri.com',
    linkedin: 'https://www.linkedin.com/in/msulaimanmisri/',
    github: 'https://github.com/msulaimanmisri',
    devto: 'https://dev.to/msulaimanmisri',
  },
};

export default profile;
