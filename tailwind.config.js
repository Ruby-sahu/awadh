/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg":"rgba(255, 255, 255, 1)",
        // "primary-bg":"rgba(255, 102, 0, 1)",
        "primary-bg":"rgba(244,193,68,1)",
        "secondary-bg":"rgba(255, 102, 0, 1)",
        "pink-bg":"rgba(253, 223, 225, 1)",
        "teritary-bg":"rgba(249, 249, 249, 1)",
        "head-bg":"rgba(240, 240, 240, 1)",
        "overlay-bg":"rgba(0, 0, 0, 0.5)",
        "border-color":"rgba(183, 183, 183, 1)",
        "star-color":"rgba(237, 203, 88, 1)",
        "border-secondary":"rgba(232, 232, 232, 1)",
        "border-teritary":"rgba(183, 183, 183, 1)",
        "border-pink":"rgba(255, 201, 205, 1)",
        "input-border":"rgba(224, 224, 224, 1)",
        "label-color":"rgba(56, 56, 56, 1)",

        "primary-text":"rgba(40, 40, 40, 1)",
        "secondary-text":"rgba(110, 110, 110, 1)",
        "tertiary-text":"rgba(3, 177, 10, 1)",

      
      },
   
    container: {
        center: true, // Centers the container
        padding: '20px', // Adds padding to prevent content from touching edges
        width:'100%',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1250px', // Custom width for extra large screens
          '2xl': '1400px', // Even wider container
        },
      },

    fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },

      textShadow: {
        neon: "0 0 5px #FF6600, 0 0 50px #FF6600, 0 0 20px #FF6600, 0 0 20px #FF6600",
      },

    },
  },
  plugins: [require("tailwindcss-textshadow")],
}

