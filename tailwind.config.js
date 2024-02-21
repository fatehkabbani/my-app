/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max':'640px'},
      // => @media (max-width: 640px) { ... }

    'md': {'max':'768px'},
      // => @media (max-width: 768px) { ... }
      'md-to-lg': {'max':'900x'},
      'lg': {'max':'1024px'},
      // => @media (max-width: 1024px) { ... }

      'xl': {'max':'1300px'},
      // => @media (max-width: 1280px) { ... }

      '2xl': {'max':'1536px'},
      // => @media (max-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        '100': '25rem',
        '128': '32rem',
        '42r': '42rem',
      },
      boxShadow:{
        'primary': '5px 5px rgba(0, 0, 0, 0.2)',
      },
      fontSize: {
        '18xl': '17.875rem',
      },
      colors: {
      },
    },
  },
  plugins: [],
}

