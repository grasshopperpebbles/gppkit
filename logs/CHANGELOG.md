# CHANGELOG - GPPKit.dev

=================================================

Version 1.4.0 - Build & Lint Fixes
Date: 2026-02-26
Status: COMPLETED

**Changes:**
- Removed unused Supabase scaffolding (middleware, lib/supabase/) — incompatible with static export
- Removed `@supabase/supabase-js` and `@supabase/ssr` from dependencies
- Added ESLint configuration (ESLint 8 + eslint-config-next 15)
- Fixed unescaped quote entities in Search.tsx

**Build:**
- `pnpm build` passes: 30 static pages generated, Pagefind indexed
- `pnpm lint` passes: 0 errors, 0 warnings

=================================================

Version 1.3.0 - GPP v0.9.89 Documentation Update
Date: 2026-01-05
Status: COMPLETED

**Changes:**
- Added `gpp package` command documentation page
- Updated `gpp add` with `nextjs-app-landing` web variant
- Updated `gpp generate` with `content app-landing` subcommand
- Added `gpp package` to sidebar navigation

**New Documentation:**
- `/docs/commands/package` - Package publishing (strapi, npm, appstore)

**Updated Pages:**
- `/docs/commands/add` - Added nextjs-app-landing variant with example
- `/docs/commands/generate` - Added content generation section

=================================================

Version 1.2.0 - GPP Naming Convention Compliance
Date: 2026-01-03
Status: COMPLETED

**Changes:**
- Renamed `apps/web` to `apps/gppkit-nextjs-nextapp-web` to follow GPP naming convention
- Project now passes `gpp verify` validation
- Root structure: VALID
- Platform directory: VALID

**Naming Convention:**
- Format: `<system>-<technology>-<type>-<platform>`
- Updated directory: `web` → `gppkit-nextjs-nextapp-web`

=================================================

Version 1.1.0 - OpenGraph Images & SEO
Date: 2025-12-31
Status: COMPLETED

Added OpenGraph and Twitter card metadata for social sharing.

OG IMAGES:
- Created public/og-image.svg (1200x630)
- GPP-branded with emerald gradient
- Logo, title, tagline, platform badges
- gppkit.dev URL

METADATA:
- Updated layout.tsx with full OpenGraph config
- Added Twitter card metadata (summary_large_image)
- Configured metadataBase for absolute URLs
- Images reference /og-image.png (convert from SVG)

TODO:
- Convert og-image.svg to og-image.png for social platform compatibility
- Add sitemap.xml
- Add robots.txt

=================================================

Version 1.0.0 - Initial Release
Date: 2025-12-31
Status: COMPLETED

Initial release of gppkit.dev - GPP CLI official documentation site.

FEATURES:
- Next.js 15 App Router with MDX documentation
- 21 documentation pages covering all GPP features
- Pagefind static search with Cmd+K shortcut
- Dark/light mode with next-themes
- Shiki syntax highlighting
- Emerald brand colors (Grasshopper theme)
- Responsive design

DOCUMENTATION SECTIONS:
- Getting Started (Installation, Quick Start)
- Platforms (Web, API, Mobile, CMS, Desktop)
- Commands (init, add, start/stop, template, wire)
- Templates (Overview, Creating, Registry)

SEARCH:
- Pagefind integration for static site search
- Search component in header
- Cmd+K keyboard shortcut
- Auto-indexed on build via postbuild script

BRANDING:
- Emerald color palette (#10b981 primary)
- "G" logo with gradient
- SVG favicon (icon.svg, apple-icon.svg)

TECH STACK:
- Next.js 15.1.3
- React 19
- Tailwind CSS 3.4 with Typography plugin
- MDX for documentation
- Shiki for syntax highlighting
- next-themes for dark mode
- Pagefind 1.4.0 for search

=================================================

