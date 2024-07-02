  // tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          twinkle: {
            '0%, 100%': { opacity: 0.5 },
            '50%': { opacity: 1 },
          }
        },
        animation: {
          twinkle: 'twinkle 5s infinite',
        }
      },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
  }