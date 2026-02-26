# Development Log - web

**Platform:** web
**Location:** logs

See LOGGING_SYSTEM.md for usage guidelines.

**Note:** These logs are for web platform development. Project-wide logs are in the root `logs/` directory.

---

## Session: Build & Lint Fixes
**Date:** 2026-02-26
**Status:** COMPLETED
**Focus:** Fix build errors and add ESLint.

### Changes Made

**middleware.ts:**
- Replaced Supabase auth middleware with no-op passthrough
- Static export (`output: 'export'`) doesn't support middleware execution

**package.json:**
- Removed `@supabase/supabase-js` and `@supabase/ssr`
- Added `eslint` (v8) and `eslint-config-next` (v15)

**components/Search.tsx:**
- Escaped `"` entities to `&ldquo;` / `&rdquo;`

**.eslintrc.json (new):**
- Extends `next/core-web-vitals`

**Deleted:**
- `lib/supabase/client.ts`, `lib/supabase/server.ts`, `lib/supabase/middleware.ts`

### Technical Notes

ESLint 9 + eslint-config-next 16 has a circular reference bug with FlatCompat. Using ESLint 8 + eslint-config-next 15 as the stable pair.

---

## Session: Branding Implementation
**Date:** 2025-12-31
**Status:** COMPLETED
**Focus:** Implement GPP brand identity

### Changes Made

**tailwind.config.ts:**
- Changed brand colors from sky blue to emerald green
- Full color scale from brand-50 to brand-950

**components/Header.tsx:**
- Added logo: green gradient square with "G"
- Logo uses `bg-gradient-to-br from-brand-500 to-brand-600`

**components/Hero.tsx:**
- New headline: "One CLI for all your platforms"
- New tagline focusing on unified structure
- Updated code example with accurate GPP commands

**Favicon files:**
- `app/icon.svg` - Auto-detected by Next.js
- `app/apple-icon.svg` - Apple touch icon
- `public/favicon.svg` - Public fallback

### Technical Notes

Next.js 15 App Router automatically handles `icon.svg` in the app directory - no need to manually add `<link>` tags in layout.tsx.
