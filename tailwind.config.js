module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    truncate: {
      lines: {
        2: '2',
        5: '5',
        8: '8',
      },
    },
    extend: {
      colors: {
        //  header
        'h-black': '#040912',
        'h-red': '#FD0404',
        'h-gray': '#555C6B',
        'h-font': '#D2D6DC',

        // backgrouind
        'b-gray': '#DADBE0',

        //
        'x-blue': '#9BEFE7',
        'x-gray': '#666',
        'x-grayText': 'rgba(4,2,38,60%)',
      },
      fontFamily: {
        arial: 'arial',
        'arial-black': 'arial-black',
      },
    },
  },
  variants: {
    extend: {},
  },
}
