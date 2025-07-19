# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm install    # Install dependencies
npm run dev    # Start development server at localhost:3000
npm run build  # Build static site to ./dist/
npm run preview # Preview production build locally
```

### Astro CLI
```bash
npm run astro -- --help  # Get help with Astro CLI
npm run astro check      # TypeScript diagnostics
```

## Architecture

This is a personal portfolio/link aggregation site built with Astro v2.3.4 as a static site generator.

### Key Technologies
- **Astro**: Static site generator with component-based architecture
- **TypeScript**: Type safety for development
- **Component-scoped CSS**: No CSS framework, custom dark theme design

### Project Structure
- `src/pages/`: Astro pages (link.astro is the main page, 404.astro for errors)
- `src/components/`: Reusable Astro components (PageHeader, SNSCard, UpdateCard)
- `src/layouts/`: Base layout with meta tags and Open Graph configuration
- `src/data/`: JSON files for content (profile.json, snsLinkList.json, updateLinkList.json)
- `public/`: Static assets including favicon, images, and Netlify redirects

### Important Patterns
1. **Data-driven content**: All dynamic content comes from JSON files in `src/data/`
2. **Component props**: Components accept typed props for social links and updates
3. **External links**: All external links should use `target="_blank"` with `rel="noopener noreferrer"`
4. **Date formatting**: Japanese locale date formatting for update cards
5. **Image paths**: Public assets referenced as `/path/to/asset` (no `public/` prefix)

### Deployment
- Deployed to Netlify with redirects configured in `public/_redirects`
- Root path `/` redirects to `/link`
- Production domain: ishikawa-pro.dev