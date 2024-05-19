/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#252E33",
        secondary: "#5A6266",
        secondary2: "#B5BBBF",
        white: "#EEEFF2",
        accent: "#EA6553",
      },
    },
  },
  plugins: [],
};
