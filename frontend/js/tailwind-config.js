/* ==========================================================================
   SpellDev · Configuración del tema de Tailwind
   Se carga después del CDN de Tailwind (cdn.tailwindcss.com).
   Paleta y tokens de diseño: ver DESIGN.md ("Syntactic Dark Precision")
   ========================================================================== */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-surface": "#dfe2ee",
        "on-primary-fixed-variant": "#2f2ebe",
        "outline-variant": "#464554",
        "error": "#ffb4ab",
        "secondary": "#d0bcff",
        "on-tertiary-fixed-variant": "#004e5c",
        "secondary-container": "#571bc1",
        "secondary-fixed-dim": "#d0bcff",
        "primary-container": "#8083ff",
        "background": "#0f131c",
        "tertiary-fixed": "#acedff",
        "on-tertiary-fixed": "#001f26",
        "tertiary": "#4cd7f6",
        "surface-container-highest": "#31353e",
        "on-secondary-container": "#c4abff",
        "secondary-fixed": "#e9ddff",
        "inverse-primary": "#494bd6",
        "surface-dim": "#0f131c",
        "inverse-on-surface": "#2c3039",
        "primary": "#c0c1ff",
        "on-tertiary": "#003640",
        "primary-fixed-dim": "#c0c1ff",
        "surface-bright": "#353942",
        "surface-variant": "#31353e",
        "on-primary": "#1000a9",
        "on-secondary-fixed": "#23005c",
        "on-primary-fixed": "#07006c",
        "surface-container-lowest": "#0a0e16",
        "surface": "#0f131c",
        "tertiary-fixed-dim": "#4cd7f6",
        "on-background": "#dfe2ee",
        "on-primary-container": "#0d0096",
        "surface-container-low": "#181c24",
        "on-surface-variant": "#c7c4d7",
        "surface-tint": "#c0c1ff",
        "outline": "#908fa0",
        "surface-container-high": "#262a33",
        "surface-container": "#1c2028",
        "inverse-surface": "#dfe2ee",
        "on-tertiary-container": "#002f38",
        "tertiary-container": "#009eb9",
        "primary-fixed": "#e1e0ff",
        "on-secondary-fixed-variant": "#5516be",
        "on-secondary": "#3c0091",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "space-xs": "0.25rem",
        "space-xl": "2rem",
        "margin-mobile": "1rem",
        "space-md": "1rem",
        "gutter-mobile": "1rem",
        "margin": "2rem",
        "gutter": "1.5rem",
        "space-sm": "0.5rem",
        "space-lg": "1.5rem"
      },
      "fontFamily": {
        "headline-md": ["Geist", "sans-serif"],
        "code-block": ["JetBrains Mono", "monospace"],
        "headline-lg": ["Geist", "sans-serif"],
        "headline-lg-mobile": ["Geist", "sans-serif"],
        "label-badge": ["JetBrains Mono", "monospace"],
        "label-button": ["Inter", "sans-serif"],
        "headline-sm": ["Geist", "sans-serif"],
        "display-hero": ["Geist", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "code-inline": ["JetBrains Mono", "monospace"],
        "body-sm": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "display-hero-mobile": ["Geist", "sans-serif"]
      },
      "fontSize": {
        "headline-md": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" }],
        "code-block": ["14px", { "lineHeight": "22px", "letterSpacing": "0", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "label-badge": ["11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "500" }],
        "label-button": ["14px", { "lineHeight": "20px", "letterSpacing": "-0.005em", "fontWeight": "500" }],
        "headline-sm": ["18px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "display-hero": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.03em", "fontWeight": "700" }],
        "body-md": ["14px", { "lineHeight": "22px", "letterSpacing": "0", "fontWeight": "400" }],
        "code-inline": ["13px", { "lineHeight": "20px", "letterSpacing": "-0.01em", "fontWeight": "400" }],
        "body-sm": ["12px", { "lineHeight": "18px", "letterSpacing": "0.01em", "fontWeight": "400" }],
        "body-lg": ["16px", { "lineHeight": "24px", "letterSpacing": "-0.005em", "fontWeight": "400" }],
        "display-hero-mobile": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
      }
    }
  }
};
