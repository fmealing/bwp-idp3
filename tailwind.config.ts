import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#2F855A",
        secondary: "#CBD5E0",
        background: "#F7FAFC",
        alert: "#E53E3E",
        warning: "#D69E2E",
        success: "#38A169",
        text: {
          primary: "#1A202C",
          secondary: "#4A5568",
        },
      },
    },
  },
  plugins: [],
};

export default config;
