/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orpheus: ["orpheuspro"],
        jost: ["Jost"],
        serify: ["Noto Serif"],
      },
      colors: {
        coral: "#864C3B",
        silver: "#f7f4f5",
      },
    },
  },
  plugins: [],
};
