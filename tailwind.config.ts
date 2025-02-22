import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["Lora", "serif"], // For Headings
        body: ["Inter", "sans-serif"], // For Body Text
        accent: ["Merriweather", "serif"], // For Buttons & Accents
      },
    },
  },
  plugins: [],
} satisfies Config;
