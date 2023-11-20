import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#063853", //primary color
        secondary: "#21C3FF", //secondary color
        neutral: "#ffffff", //neutral color
        base: "#000000", //dark basis
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
