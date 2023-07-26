/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#00a46c",
        secondary: "#15bed1",
        accent: "#fb8d24",
        danger: "#ff3000",
        neutral: "#fff3",
        dark: "#1f1b1a",
        "dark-light": "#615e5d",
        white: "#ffffff",
        light: "f4f2f0",
      },
      screens: {
        "3xl": "1900px",
      },
      keyframes: {
        "ct-spin": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "ct-animation-spin": "ct-spin 10s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    log: false,
    themes: [
      {
        mytheme: {
          primary: "#00a46c",
          secondary: "#15bed1",
          accent: "#fb8d24",
          danger: "#ff3000",
          neutral: "#fff3",
          dark: "#1f1b1a",
          "dark-light": "#615e5d",
          white: "#ffffff",
          light: "f4f2f0",
        },
      },
    ],
  },
};
