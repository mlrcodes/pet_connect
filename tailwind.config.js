/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'heading': ['PoppinsBlack'],
        'popBold': ['PoppinsBold'],
        'popSemiBold': ['PoppinsSemiBold']
      }
    },
  },
  plugins: [],
}

