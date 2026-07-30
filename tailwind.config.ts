import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070c",
          900: "#0a0d14",
          800: "#12161f",
          700: "#1a2030",
          600: "#232939",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(59,130,246,0.35)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0)", opacity: "0.5" },
          "50%": { transform: "translate(3px,-4px)", opacity: "0.9" },
        },
        meshPulse: {
          "0%, 100%": { opacity: "0.85" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
        meshPulse: "meshPulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
