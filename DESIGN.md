---
name: Syntactic Dark Precision
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: '0'
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.005em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes a high-performance, developer-first aesthetic rooted in minimalist engineering and dark mode sophistication. Built specifically for an open-source and power-user community engineering prompts for advanced LLMs, the visual style prioritizes information density, code legibility, and distraction-free workflows.

The philosophy rejects decorative skeuomorphism and excessive neon saturation in favor of refined technical minimalism paired with subtle deep-space glass effects. Surfaces recede with disciplined neutral tones, allowing prompt logic, code syntax, and contextual model tags to command focus. High-precision borders, micro-interactions with restrained indigo-violet luminescence, and monospace accents project credibility, speed, and computational rigor.

## Colors

The palette operates on calibrated contrast tiers over an obsidian backdrop, preventing eye fatigue during extended deep-work sessions while upholding WCAG AAA standards on core interactive text.

- **Canvas & Surface Architecture**:
  - `canvas-base`: `#0B0F17` (Deep space base layer)
  - `canvas-subtle`: `#0F172A` (Secondary backdrops and layout sections)
  - `surface-card`: `#131B2E` (Prompt tiles, elevated containers)
  - `surface-elevated`: `#1E293B` (Dropdowns, floating tooltips, active code blocks)
  - `border-subtle`: `rgba(255, 255, 255, 0.08)` (Structural container delimiters)
  - `border-focus`: `rgba(99, 102, 241, 0.45)` (Interactive focus rings and hovers)

- **Accents & Luminescence**:
  - Primary (`#6366F1`) and Secondary (`#8B5CF6`) form the core brand gradient, deployed sparingly on active indicators, prompt copy triggers, and primary CTAs.
  - Tertiary (`#06B6D4`) serves as an informative cyan highlight for system variables and token statistics.
  - Model Badges: Unique translucent tints (ChatGPT: `#10A37F`, Claude: `#D97706`, Gemini: `#2563EB`, Perplexity: `#06B6D4`) over matching 10% opacity backgrounds.

## Typography

Typography is calibrated for extreme technical clarity. `Geist` governs top-level headings and metadata hierarchies, producing a contemporary, dense terminal ambiance. `Inter` renders descriptions, prompt guides, and UI labels with high legibility across varied DPI screens. 

`JetBrains Mono` forms the computational backbone: every prompt template, variable token `{{var}}`, JSON schema, and terminal command uses this mono face with explicit tabular figures. Tight negative letter-spacing on display tiers enforces a structured, architectural presence.

## Layout & Spacing

The layout operates on a standard 8pt grid with responsive columns:
- **Desktop (1280px+)**: 12-column responsive fluid grid, max-width `1440px`, 24px (`1.5rem`) gutters, and 32px (`2rem`) outer margins.
- **Tablet (768px - 1279px)**: 8-column layout, 20px gutters, 24px margins. Filters shift into a collapsible horizontal ribbon.
- **Mobile (<768px)**: 4-column layout, 16px (`1rem`) gutters, 16px margins. Cards reflow into single-column vertical stacks.

All interior component paddings rely strictly on `space-*` tokens. Card headers consistently employ `space-lg` bottom clearance, while prompt code blocks feature `space-md` internal safe padding.

## Elevation & Depth

Visual hierarchy uses tonal surface layering and low-contrast borders instead of heavy, opaque drop shadows:

1. **Base Layer (Elevation 0)**: `#0B0F17` pure canvas with an optional fixed radial gradient background spotlight (`rgba(99, 102, 241, 0.05)` at 800px blur radius).
2. **Container Tier (Elevation 1)**: `#131B2E` with `border: 1px solid rgba(255, 255, 255, 0.08)`. Subtle ambient shadow: `0 4px 20px rgba(0, 0, 0, 0.35)`.
3. **Interactive & Hover Tier (Elevation 2)**: Elevated card state shifts border to `rgba(99, 102, 241, 0.3)` and activates an inner micro-glow: `box-shadow: 0 0 24px -4px rgba(99, 102, 241, 0.15)`.
4. **Overlay Tier (Elevation 3)**: Fixed top navigation bar uses backdrop glassmorphism: `background: rgba(11, 15, 23, 0.8)`, `backdrop-filter: blur(12px)`, and bottom border `1px solid rgba(255, 255, 255, 0.06)`.

## Shapes

The design system standardizes on crisp, controlled geometry:
- Default standard elements (buttons, text inputs, search field): `rounded-md` (8px / `0.5rem`).
- Cards, prompt containers, and interactive code blocks: `rounded-xl` (16px / `1rem`), delivering modern softenings that balance technical precision.
- Badges and AI model indicators: `rounded-md` (6px) or full pill `rounded-full` (9999px) depending on contextual density.
- Micro-toggles and copy icons: `rounded-md` (6px).

## Components

### Fixed Top Navigation
- Stripped of user account clutter: no login, sign-up, or user avatar containers.
- Contains the brand mark, a global omni-search input (`⌘K` shortcut trigger), category links, and a direct link to the GitHub repository / open contribution modal.
- Fixed at `top: 0`, height `64px`, with glassmorphic blur and subtle lower divider.

### Cards (Prompt Library Tiles)
- Surface `#131B2E`, border `1px solid rgba(255,255,255,0.08)`, corner radius `16px`.
- Header: Category tag, target LLM badge(s), and an instantaneous one-click "Copy Prompt" icon button.
- Body: Title in `headline-sm`, 2-line truncated description in `body-md` (`#94A3B8`).
- Code Preview: Monospace snippet enclosed in `#0F172A` with highlighted parameter interpolations (`{{system_instruction}}`).
- Footer: Token estimate indicator, prompt author/version badge, and expansion toggle.

### AI Model Badges
- Compact chips rendered with `label-badge` font.
- Styled with `background: rgba(color, 0.1)`, `border: 1px solid rgba(color, 0.25)`, and text color matching the specific engine (e.g., emerald for OpenAI, amber for Claude, cobalt for Gemini).

### Buttons & Interactive Controls
- **Primary Action**: Gradient fill `linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)`, white text, soft glow on hover (`box-shadow: 0 0 16px rgba(99, 102, 241, 0.4)`).
- **Secondary / Ghost Action**: `#1E293B` background, border `1px solid rgba(255, 255, 255, 0.1)`, text `#F1F5F9`. Hover state lightens border to `rgba(255, 255, 255, 0.2)`.
- **Copy Button**: Micro-interaction that morphs from an icon-only outline to a green checkmark confirmation with subtle tactile feedback (`transform: scale(0.96)` on press).

### Code & Prompt Blocks
- Preformatted area with dark slate fill (`#0A0E17`), syntax-highlighted tokens, and explicit scrollbars styled with dark thumbs.
- Fixed overlay copy button positioned top-right with tooltip feedback ("Copied to clipboard").

### Inputs & Filters
- Omni-search field with left-aligned search icon, dark background (`#0F172A`), persistent border `rgba(255,255,255,0.1)`, and focus ring `rgba(99,102,241,0.5)`.
- Filter chips for instantaneous tag toggles (e.g., `#Code-Review`, `#System-Architect`, `#SQL-Optimizer`).