/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        vini: {
          paper: '#f5efe5',
          ivory: '#fffaf3',
          ink: '#161411',
          charcoal: '#24211d',
          smoke: '#e8ded1',
          linen: '#d8c7b3',
          wood: '#8a633d',
          caramel: '#b9834d',
          bronze: '#b08a57',
          sage: '#7b8670',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(22, 20, 17, 0.14)',
        lift: '0 18px 45px rgba(22, 20, 17, 0.18)',
      },
    },
  },
  plugins: [],
};
