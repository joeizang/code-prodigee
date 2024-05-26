/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{razor,cshtml,html}'],
  theme: {
    extend: {
      colors: {
        'old-brick': {
          '50': '#fdf3f3',
          '100': '#fbe6e5',
          '200': '#f9d1cf',
          '300': '#f3b1ae',
          '400': '#ea837f',
          '500': '#de5a55',
          '600': '#ca3e38',
          '700': '#a9312c',
          '800': '#942e2a',
          '900': '#752a27',
          '950': '#3f1210',
        },
      }
    },
  },
  plugins: [],
}

