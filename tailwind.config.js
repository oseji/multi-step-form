/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        stepsBGDesktop: 'url("/assets/images/bg-sidebar-desktop.svg")',
        stepsBGMobile: 'url("/assets/images/bg-sidebar-mobile.svg")',
      },
      height: {
        105: "426px",
      },
      width: {
        105: "426px",
      },
      colors: {
        textColor: "#2E315A",
      },
    },
  },
  plugins: [],
};
