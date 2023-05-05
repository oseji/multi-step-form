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
        120: "500px",
      },
      width: {
        105: "426px",
      },
      colors: {
        textColor: "#2E315A",
        textColorHover: "#5C61AC",
      },
    },
  },
  plugins: [],
};
