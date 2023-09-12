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
    },
    backgroundImage: {
      faq: "url('/src/assets/imgs/faq-background.png')",
      driver: "url('/src/assets/svgs/driver.svg')"
    }
  }
}
export const plugins = []
