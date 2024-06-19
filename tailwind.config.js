import flowbitePlugin from "flowbite/plugin";
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-light-green": "#80bb40",
        "custom-dark-green": "#041b08",
        "custom-orange": "#f39225",
        "custom-bg": "#f8f4ed",
      },
    },
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [flowbitePlugin, flowbite.plugin()],
};
