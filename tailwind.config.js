const colorsPallette = [
    // '#f2bc94', '#00154f', 'f4af1b',
    '000000',
    '14213d',
    'fca311',

    'f4af1b',
    '00154f',
    'f2bc94',

    '14213d',
    //'8a052b',
    //'3b485d',
    '14213d',
    'ffab40',
]

const index = 2;
const colors = colorsPallette.slice(index * 3, index * 3 + 3)

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            primary: '#' + colors[0],
            secondary: '#' + colors[1],
            complementary: '#' + colors[2],

            headline: '#' + colors[0],
            titleBg: '#' + colors[1],
            titleText: '#' + colors[2]
        }
    },
    //   colors: {
    //     blue: {
    //       '100': '#72c1df',
    //       '200': '#5bb7d9',
    //       '300': '#43add4',
    //       '400': '#2ca2ce',
    //       '500': '#1498c9',
    //       '600': '#1289b5',
    //       '700': '#107aa1',
    //       '800': '#0f0',
    //       '900': '#0c5b79'
    //   },
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
