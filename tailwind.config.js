/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    themes: ["light", "cupcake"],
  },
};
