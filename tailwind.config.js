/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgMobile: "url('./src/assets/bg-sidebar-mobile.svg')",
        bgDesktop: "url('./src/assets/bg-sidebar-desktop.svg')",
      },
      height: {
        100: "480px",
        98: "450px",
        formContainerMobile: "70vh",
      },
      width: {
        98: "450px",
        100: "480px",
      },
      colors: {
        pastelBlue: "hsl(228, 100%, 84%)",
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue: "hsl(243, 100%, 62%)",
      },
      translate: {
        end: "200%",
      },
    },
  },
  plugins: [],
};
