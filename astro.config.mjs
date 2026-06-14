import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectPage = repository && !repository.endsWith('.github.io');
const configuredBase = process.env.BASE_PATH || (isProjectPage ? `/${repository}` : '/');
const base = configuredBase === '/' ? '/' : `${configuredBase.replace(/\/$/, '')}/`;

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
