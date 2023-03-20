/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        waves: "url(/images/bg-waves.png)",
      },
      backgroundSize: {
        150: "150%",
      },
      height: {
        100: "30rem",
      },
      backgroundColor: {
        "button-blue": "#BBFFFF",
      },
    },
  },
  plugins: [],
};
