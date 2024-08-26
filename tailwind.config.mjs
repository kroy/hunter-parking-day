/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        light: "var(--light)",
        accent: "var(--accent)",
        "dark-purp": "var(--text-dark)",
      },
      fontFamily: {
        newnord: ["newnord", "ui-sans-serif", "system-ui"],
        "newnord-extended": [
          "newnord-extended",
          "newnord",
          "ui-sans-serif",
          "system-ui",
        ],
        "puffin-nerf": [
          "puffin-arcade-nerf",
          "newnord",
          "ui-sans-serif",
          "system-ui",
        ],
      },
    },
  },
  plugins: [],
};
