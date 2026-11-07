import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        obsidian: "#0D0D0D",
        surface: "#141414",
        elevated: "#1C1C1E",
        borderSubtle: "#262626",
        champagne: "#E0A96D",
        champagneGlow: "rgba(224, 169, 109, 0.18)",
        ivory: "#F5F5F5",
        muted: "#A1A1AA",
      },

      fontFamily: {
        display: [
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        sans: [
          "Plus Jakarta Sans",
          "system-ui",
          "sans-serif",
        ],
      },

      borderRadius: {
        luxury: "16px",
        "luxury-lg": "20px",
        "luxury-xl": "24px",
      },

      boxShadow: {
        champagne:
          "0 0 0 1px rgba(224, 169, 109, 0.08), 0 12px 40px rgba(224, 169, 109, 0.08)",
        "champagne-glow":
          "0 0 40px rgba(224, 169, 109, 0.18)",
      },

      backgroundImage: {
        "luxury-gradient":
          "linear-gradient(135deg, #0D0D0D 0%, #141414 50%, #1C1C1E 100%)",

        "champagne-gradient":
          "linear-gradient(135deg, #E0A96D 0%, #F0C995 100%)",
      },

      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },

  plugins: [],
};

export default config;
