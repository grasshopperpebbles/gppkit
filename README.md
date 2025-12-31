# gppkit.dev

Official documentation and marketing site for [GPP CLI](https://github.com/grasshopperpebbles/gpp).

## About

GPP (GrasshopperPebbles Platform) is a command-line toolkit for scaffolding and managing multi-platform projects. This repository contains the source code for [gppkit.dev](https://gppkit.dev).

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Content:** MDX
- **Styling:** Tailwind CSS + Typography plugin
- **Syntax Highlighting:** Shiki
- **Dark Mode:** next-themes

## Development

```bash
# Install dependencies
cd apps/web
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
gppkit/
├── .gpp/           # GPP configuration
├── apps/
│   └── web/        # Next.js documentation site
├── docs/           # Project documentation
└── logs/           # Development logs
```

## Documentation

The site includes documentation for:

- **Getting Started** - Installation, Quick Start
- **Platforms** - Web, API, Python, Mobile, CMS, Desktop, Worker
- **Commands** - init, add, start/stop, template, wire
- **Templates** - Using, creating, and publishing templates

## License

MIT
