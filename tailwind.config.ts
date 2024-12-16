import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#00222C",
        },
        accent: {
          light: "#7BC8EC",
          DEFAULT: "#43B1E4",
          dark: "#286A89",
        },
        neutral: {
          light: "#99A7AB",
          DEFAULT: "#808080",
          dark: "#666666",
        },
        customGray: "#2d3748",
      },
    },
  },
  plugins: [],
};
export default config;
