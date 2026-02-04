# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Disruptors Media AI Tools Hub — a client-side AI tools directory with category filtering, pricing filters, and individual tool detail pages. Built with vanilla HTML/CSS/JavaScript (no frameworks, no build step, no package manager). Dark-themed with Disruptors Media branding.

## Running Locally

```bash
# Option 1: Open index.html directly in a browser

# Option 2: Local HTTP server
python -m http.server 8000
# or
npx serve
```

No build, install, lint, or test commands exist. There are no dependencies to install.

## Setup

Copy `js/config.example.js` to `js/config.js` and fill in the `WEBHOOK_AUTH_TOKEN` value. The `config.js` file is gitignored to keep the bearer token out of version control.

## Architecture

### Data Flow

All tool data lives in the `aiTools[]` array in `js/script.js` (83 tools). A `state` object tracks active filters (category, pricing, sort, pagination). The `filterTools()` function applies all active filters together, and `renderTools()` handles DOM output with pagination (12 tools per page).

### Key Files

- **`index.html`** — Main page: header, hero, category buttons, filter controls, tools grid, featured section, submit form, CTA contact section
- **`js/config.js`** — Runtime configuration (webhook URL and bearer token). Gitignored. See `config.example.js` for template
- **`js/script.js`** — All logic: tool data array, state management, filtering/sorting, DOM rendering, webhook form submissions, event listeners, scroll animations (Intersection Observer)
- **`css/style.css`** — All styling with CSS custom properties for theming, Grid/Flexbox layout, responsive breakpoints at 968px and 640px
- **`tools/*.html`** — 53 individual tool detail pages with consistent structure (hero, features, pricing, use cases, pros/cons, related tools)

### Webhook Integration

Both the "Submit Your AI Tool" form and the CTA "Get in Touch" form POST to an n8n webhook. The webhook expects:
- `Authorization: Bearer <token>` header (token from `config.js`)
- JSON body with a `type` field (`tool_submission` or `consult_request`) and a `subject` field (`AI Tools Hub consult request`)
- The webhook returns only a 200 status code with no data

### Theming (Disruptors Media)

CSS variables in `:root` of `css/style.css` control the color scheme:
- `--primary-color: #1F2937` (dark gray)
- `--accent-color: #EAB308` (yellow — used for buttons, links, icons, active states)
- `--bg-light: #0E0E0E` (near-black background)
- `--bg-white: #1a1a1a` (dark card backgrounds)
- Border radius: 3px throughout
- Fonts: Neue Montreal (body/headings), PP Supply Mono (monospace)
- Typography: h1 96px, h2 24px, body 20px

### Adding a New Tool

1. Add an entry to the `aiTools[]` array in `js/script.js` with: `id`, `name`, `category`, `description`, `pricing` (free/freemium/paid), `icon` (Font Awesome class), `url`, `featured` (boolean)
2. Optionally create a detail page in `tools/` following the existing HTML template structure

### Categories

All Tools, Our Favorites, Writing, Image Generation, Video, Coding, Voice & Audio, Business, Marketing, Design, Research, Chatbots, Automation, Email Marketing

### External CDN Dependencies

- Font Awesome v6.4.0
- Google Fonts (Open Sans fallback — primary font Neue Montreal must be self-hosted or added via appropriate source)
