# GPPKit.dev Strategy Notes

---

## Project Purpose

GPPKit.dev is the official documentation site for GPP CLI (GrasshopperPebbles CLI). It serves as:
1. Marketing/landing page for GPP CLI
2. Comprehensive documentation hub
3. Quick reference for commands and templates

---

## Site Architecture

### Template Used
- `devtool-site` - Developer tool / OSS project site template
- Similar to nextjs.org, strapi.io style sites

### Tech Stack
- Next.js 15 (App Router)
- MDX for documentation
- Tailwind CSS + Typography
- Shiki for syntax highlighting
- next-themes for dark mode
- Pagefind for static search

### Content Structure
```
/                     - Landing page (Hero, Features, QuickStart)
/docs                 - Documentation hub
/docs/getting-started - Installation, Quick Start
/docs/platforms       - Web, API, Mobile, CMS, Desktop
/docs/commands        - init, add, template, wire, etc.
/docs/templates       - Overview, Creating, Registry
```

---

## Branding Decisions

### Color Choice: Emerald
- Represents "Grasshopper" in GrasshopperPebbles
- Professional, developer-friendly
- Works well in both light and dark modes
- Palette: Tailwind emerald scale

### Logo
- Simple "G" letter mark
- Emerald gradient background
- Rounded corners
- Works at small sizes (favicon)

---

## Search Strategy

### Why Pagefind?
- No backend required (static site)
- Build-time indexing
- Fast client-side search
- Works offline after initial load
- Free and open source

### Implementation
- Search button in header with Cmd+K hint
- Modal-based search UI
- Keyboard navigation (arrows, enter, esc)
- Debounced search (150ms)
- Max 8 results shown

---

## Documentation Strategy

### Accuracy First
- All docs reflect actual GPP CLI capabilities
- No aspirational features listed as current
- Version-specific (v0.9.52+)

### Platforms Documented
| Platform | Variants |
|----------|----------|
| Web | 10 variants (Next.js based) |
| API | express |
| Mobile | flutter, expo |
| CMS | strapi-only, strapi-dev, wp-content |
| Desktop | electron, tauri |
| Python | fastapi, base, conda-trading |
| Worker | celery-python |

### Command Categories
1. Project setup (init, add, remove, delete)
2. Development (start, stop, build, dev, log)
3. Templates (list, install, info, remove)
4. Wiring (wire command)
5. Planning (plan list/show/apply/delete)
6. Utilities (verify, convert, cms, strapi)

---

## SEO & Social Sharing

### OpenGraph Images
- Static SVG template at `public/og-image.svg`
- 1200x630 standard size for social platforms
- Emerald gradient with GPP branding
- Convert to PNG for deployment

### Metadata Configuration
- metadataBase set to https://gppkit.dev
- OpenGraph configured in layout.tsx
- Twitter card with summary_large_image
- All pages inherit base metadata

### Remaining SEO Tasks
- [ ] Convert SVG to PNG for OG image
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Configure analytics (optional)

---

## Future Considerations

### Blog/Changelog
- Consider adding /blog for release announcements
- Could use same MDX setup as docs

### Versioning
- Currently single version
- May need version selector if breaking changes occur

### Community
- GitHub discussions for support
- Issue templates for bugs/features

---

*Last updated: 2025-12-31*
