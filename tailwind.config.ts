import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  // Targeting app and components for optimal build size
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // Deep Navy: The Foundation (Authority)
        primary: {
          DEFAULT: "#0A2540",
          dark: "#051B2E",
          light: "#0D3060",
        },
        // Vivid Red: The Action (Intake/Urgency)
        secondary: {
          DEFAULT: "#E30613",
          dark: "#B8040F",
          light: "#FF1A26",
        },
        // Golden Yellow: The Highlight (Optimism/Success)
        accent: {
          DEFAULT: "#F2C12C",
          dark: "#D4A520",
          light: "#F7D45A",
        },
        // Institutional Neutrals: From the poster's dividers and backgrounds
        brand: {
          gray: "#F1F4F9",     // Light gray for section backgrounds
          charcoal: "#1F2937", // Dark gray for secondary text
          white: "#FFFFFF",
        }
      },
      backgroundImage: {
        // The signature Red-Yellow-Navy line seen on the poster
        tribar:
          "linear-gradient(90deg, #E30613 0%, #E30613 33%, #F2C12C 33%, #F2C12C 66%, #0A2540 66%, #0A2540 100%)",
        
        // A professional depth gradient for Hero sections
        "navy-gradient":
          "linear-gradient(160deg, #051B2E 0%, #0A2540 100%)",
        
        // Faded overlay for text readability over images
        "hero-overlay": 
          "linear-gradient(to right, rgba(10, 37, 64, 0.95) 0%, rgba(10, 37, 64, 0.4) 100%)",
      },
    },
  },

  plugins: [typography, daisyui],

  daisyui: {
    themes: [
      {
        institute: {
          "primary": "#0A2540",   
          "secondary": "#E30613", 
          "accent": "#F2C12C",   
          "neutral": "#1F2937",   
          "base-100": "#FFFFFF",  
          "info": "#0D3060",
          "success": "#10B981",
          "warning": "#F2C12C",
          "error": "#E30613",
        },
      },
    ],
  },
};

export default config;