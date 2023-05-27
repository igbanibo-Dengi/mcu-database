/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '968px',
        xl: '1200px'
      },
      colors: {
        brand: '#ec1d24'
      }
    },
  },
  plugins: [],
}

