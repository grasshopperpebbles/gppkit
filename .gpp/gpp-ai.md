# GPP AI Capabilities & Rules

This file describes what AI assistants (Claude, Cursor, ChatGPT, etc.) are
allowed and expected to do inside a GrasshopperPebbles Project (GPP).

## Project Detection
- Presence of `.gpp/` means this is a GPP-managed project
- AI must respect platform isolation and gpp workflows
- Check `.gpp/deploy.json` for enabled platforms and variants

## Supported Platforms & Variants

### Web (Next.js)
- **generic**: Basic Next.js app with standard pages (about, privacy, terms, contact)
- **headless-wp-cms**: WordPress headless CMS frontend (articles, blog)
- **headless-wp-ecommerce**: WordPress e-commerce frontend (products, cart, checkout)
- **headless-wp-full**: WordPress full stack (CMS + e-commerce)
- **saas-dashboard**: Customer-facing SaaS dashboard with auth, data visualization, admin features
- **admin-dashboard**: Platform-level admin interface (user management, CRUD generation)

### API
- **fastapi**: Python FastAPI backend
  - REST API (default)
  - Optional GraphQL server support (Strawberry GraphQL)
  - Install: `pip install 'strawberry-graphql[fastapi]'`
  - Enable: Uncomment GraphQL router in `app/main.py`
  - Access: `http://localhost:8000/graphql`
  - Both REST and GraphQL can be used simultaneously
  - Same Bearer token authentication for both
- **express**: Node.js/Express backend

### CMS
- **cms-only**: WordPress CMS only
- **ecommerce-only**: WooCommerce only
- **cms-ecommerce**: WordPress + WooCommerce
- **ecommerce-cms**: WooCommerce + WordPress

### Mobile
- **flutter-api-client**: Flutter app with API integration
- **flutter-standalone**: Standalone Flutter app

### Desktop
- **electron**: Electron desktop application

## Supported AI Actions
AI MAY:
- Read project structure
- Read logs under `logs/` and platform logs
- Update code inside a single platform when instructed
- Propose `gpp` commands instead of manual edits
- Update TODO.md, DEVELOPMENT.md, VERSION_LOG.txt, and STRATEGY_NOTES.md when making changes

AI MUST:
- Read `.gpp/CONVENTIONS.md` before modifying API or routing code (if present)
- Prefer `gpp add/remove/convert` over manual scaffolding
- Use `gpp add route` when adding new pages/routes
- Use `gpp add api` when adding new domain-specific APIs
- Treat templates as read-only
- Avoid cross-platform edits unless explicitly requested
- Assume databases require backups before schema changes
- Check `.gpp/deploy.json` to understand platform configuration
- Respect variant-specific patterns (e.g., don't add WordPress features to generic variant)

AI MUST NOT:
- Modify `.gpp/deploy.json` without user confirmation
- Run destructive commands without confirmation
- Invent deploy or CI behavior not implemented in gpp
- Mix variant patterns (e.g., adding WordPress GraphQL to generic variant)
- Enable GraphQL server in FastAPI without user request (it's optional, commented by default)
- Enable GraphQL server in FastAPI without user request (it's optional, commented by default)

## Logging Expectations
- Update TODO.md before starting work
- Update DEVELOPMENT.md after completing work
- Update VERSION_LOG.txt for version changes
- Update STRATEGY_NOTES.md for architectural decisions
- Never overwrite logs
- Respect log archiving rules

## Platform-Specific Guidelines

### Web Variants
- **Generic**: Basic pages, optional API/CMS integration
  - Optional REST API client
  - Optional GraphQL client (for FastAPI, Strapi, WordPress)
- **SaaS Dashboard**: Requires `api` platform, includes auth, React Query, admin features
  - REST API client (default)
  - Optional GraphQL client
- **Admin Dashboard**: Requires `api` platform, admin-only, supports CRUD generation
  - REST API client (default)
  - Optional GraphQL client
- **WordPress variants**: Require `cms` platform, use GraphQL client (WPGraphQL)

### API Variants
- **FastAPI**: Python backend
  - REST API (default)
  - Optional GraphQL server support (Strawberry GraphQL)
  - Install: `pip install 'strawberry-graphql[fastapi]'`
  - Enable: Uncomment GraphQL router in `app/main.py`
  - Access: `http://localhost:8000/graphql`
  - Both REST and GraphQL can be used simultaneously
  - Same Bearer token authentication for both
- **Express**: Node.js backend, standard middleware stack

## UI Components (Web Templates)

GPP web projects use **shadcn/ui**. Always use shadcn components instead of plain HTML.

| Instead of... | Use shadcn... |
|---------------|---------------|
| `<button>` | `<Button>` from `@/components/ui/button` |
| `<input>` | `<Input>` from `@/components/ui/input` |
| `<select>` | `<Select>` from `@/components/ui/select` |
| `<textarea>` | `<Textarea>` from `@/components/ui/textarea` |
| `<div class="card">` | `<Card>` from `@/components/ui/card` |

Add new components: `npx shadcn@latest add [component-name]`

See `.gpp/CONVENTIONS.md` for full component list and examples.

## Scaffolding Commands

### Add Route
Create a new page/route with API integration:
```bash
gpp add route /path/to/route      # Creates page with apiClient usage
gpp add route /settings --static  # Creates static page without API
```

### Add API
Create a new domain-specific API module:
```bash
gpp add api billing    # Creates billingApi in src/lib/api.ts
gpp add api analytics  # Creates analyticsApi with CRUD methods
```

Generated APIs include: `list`, `getById`, `create`, `update`, `delete` methods.

## API Patterns (Web Templates)

Web templates support two coexisting API patterns:

1. **Generic `apiClient`** - For simple, one-off API calls
   ```typescript
   import { apiClient } from "@/lib/api";
   const data = await apiClient.get("/endpoint");
   ```

2. **Domain-specific APIs** - For features with 3+ related endpoints
   ```typescript
   import { billingApi } from "@/lib/api";
   const invoices = await billingApi.list({ limit: 10 });
   ```

See `.gpp/CONVENTIONS.md` in your project for detailed patterns.

## Source of Truth
- `.gpp/` is the control plane
- `.gpp/deploy.json` defines enabled platforms and variants
- `.gpp/CONVENTIONS.md` defines code patterns (if present)
- Templates define structure
- gpp CLI defines lifecycle
- `logs/` directory contains project history