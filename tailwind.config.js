/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'fair': ['Playfair Display', 'serif']
      },
      extend: {
        colors: {
          'main': '#05001a',
          'contrast': '#5F9EA0',
          'alternate': 'rgba(255,255,255,0.6)',
        },
        boxShadow: {
          'mdPer': '-3px 3px 15px rgba(255,255,255,0.25)'
        }
      },
    },
    plugins: [],
}