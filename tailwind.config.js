/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--orange))',
        secondary: 'rgb(var(--blue))',

        'aorange': '#ff6600',
        'ablue': '#73b9ff',
        'apurple': '#ca03fc',
        'agray': '#171616',
      },
      boxShadow: {
        aorange: '0px 0px 8px 3px rgb(var(--orange), 60%)',
        ablue: '0px 0px 8px 3px rgb(var(--blue), 60%)',
        apurple: '0px 0px 8px 3px rgb(var(--purple), 60%)',
      },
    },
  },
  plugins: [],
}

