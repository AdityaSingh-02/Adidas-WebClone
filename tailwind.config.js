/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Oswald':['Oswald' , 'sans'],
        'Teko':['Teko'],
        'Rubik':['Rubik']
      },
    },
  },
  plugins: [],
}
