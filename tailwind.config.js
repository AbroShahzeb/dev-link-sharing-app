/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(252, 100%, 62%)",
        "primary-light": "hsl(252, 100%, 84%)",
        "primary-lightest": "hsl(252, 100%, 96%)",
        white: "hsl(0, 0%, 100%)",
        light: {
          100: "hsl(0, 0%, 98%)",
          300: "hsl(0, 0%, 85%)",
          500: "hsl(0, 0%, 45%)",
        },
        dark: "hsl(0, 0%, 20%)",
        danger: "hsl(0, 100%, 61%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
