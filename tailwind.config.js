/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{vue, js}']
export const theme = {
  extend: {
    colors: {
      'primary-purple': '#5959CB'
    },
    fontFamily: {
      sans: ['"Harabara"', 'Inter', 'sans-serif'],
      lato: ['"Lato"']
    }
  }
}
export const plugins = []