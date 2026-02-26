# Strategy Notes - web

**Platform:** web
**Purpose:** Platform-specific technical and business strategy decisions

See LOGGING_SYSTEM.md for usage guidelines.

**Note:** These logs are for web platform development. Project-wide logs are in the root `logs/` directory.

---

## Static Export Constraints

- `output: 'export'` disables runtime middleware and API routes
- Supabase auth middleware must be removed (no-op passthrough only)
- ESLint 8 + eslint-config-next 15 is the stable linting pair for Next.js 15

---

## Brand Identity

### Colors

Emerald/green theme reflecting "Grasshopper" in GrasshopperPebbles.

| Token | Hex | Usage |
|-------|-----|-------|
| brand-500 | #10b981 | Primary |
| brand-600 | #059669 | Primary dark/hover |
| brand-400 | #34d399 | Light/accent |

### Logo

Simple geometric logo:
- Green gradient square with rounded corners
- White "G" letter centered
- Paired with "GPP" text in header

### Typography

- Headings: System font stack (bold)
- Body: System font stack
- Code: Monospace with Shiki highlighting

---

## Content Strategy

### Documentation Priority

1. Getting Started (installation, quick start)
2. Platform docs (most commonly searched)
3. Command reference
4. Template system

### Future Content

- Blog for release announcements
- Guides for common workflows
- Video tutorials (YouTube embed)
