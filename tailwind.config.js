/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "on-background": "var(--color-on-surface)",
        primary: "var(--color-primary)",
        "on-primary": "var(--color-on-primary)",
        "primary-container": "var(--color-primary-container)",
        outline: "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",
        secondary: "var(--color-secondary)",
        "secondary-container": "var(--color-secondary-container)",
        "on-secondary": "var(--color-on-secondary)",
        tertiary: "var(--color-tertiary)",
        "tertiary-container": "var(--color-tertiary-container)",
        "on-tertiary": "var(--color-on-tertiary)",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      maxWidth: {
        "container-max": "1200px",
      },
      spacing: {
        "container-max": "1200px",
        "gutter": "24px",
        "margin-sm": "16px",
        "margin-md": "40px",
        "margin-lg": "80px",
        "unit": "8px",
        "xl": "40px",
        "xs": "4px",
        "margin-desktop": "48px",
        "base": "4px"
      },
      fontFamily: {
        "body-lg": ["Geist", "sans-serif"],
        "code": ["JetBrains Mono", "monospace"],
        "headline-md": ["Geist", "sans-serif"],
        "display": ["Geist", "sans-serif"],
        "headline-lg": ["Geist", "sans-serif"],
        "label-md": ["JetBrains Mono", "monospace"],
        "headline-lg-mobile": ["Geist", "sans-serif"],
        "body-md": ["Geist", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "code": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
        "display": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700" }],
        "headline-lg": ["40px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "label-md": ["14px", { "lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }]
      }
    },
  },
  plugins: [],
}
