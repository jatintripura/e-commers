/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "hsl(26, 100%, 55%)",
        primaryOrangePale: "hsl(25, 100%, 94%)",
        NeutralDarkBlue: "hsl(220, 13%, 13%)",
        NeutralDarkGrayishBlue: "hsl(219, 9%, 45%)",
        NeutralLightGrayishBlue: "hsl(223, 64%, 98%)",
        NeutralWhite: "hsl(0, 0%, 100%)",
        NeutralBlack: "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
