/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes:{
        fadeup:{
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        fade:{
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        }
      },
      animation: {
        fadeup: 'fadeup 0.3s ease-in-out',
        fade: 'fade 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
