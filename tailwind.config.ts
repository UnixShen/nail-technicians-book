import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'soft': '5px 5px 10px #f0f0f0, -5px -5px 10px #ffffff',
        'inner-soft': 'inset 5px 5px 10px #f0f0f0, inset -5px -5px 10px #ffffff',
      },
    },
  },
  plugins: [],
};
export default config;