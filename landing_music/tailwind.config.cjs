/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "var(--lightgray)",
        gray: "var(--gray)",
        orange: "var(--orange)",
        darkGrey: "var(--darkGrey)",
        caloryCard: "var(--caloryCard)",
        appColor: "var(--appColor)",
      },
      backgroundImage: {
        planCard: "var(--planCard)",
      },
    },
  },
  plugins: [],
};
