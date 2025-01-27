/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        // Add your custom drop shadow
        'custom-gray': '2px 4px 8px #585858',
      },
    },
  },
  plugins: [],
};
