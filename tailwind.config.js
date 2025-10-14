/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        // Add your custom drop shadow
        "custom-gray": "2px 4px 8px #585858",
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite", // Adjust duration as needed
      },
      keyframes: {
        "border-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
