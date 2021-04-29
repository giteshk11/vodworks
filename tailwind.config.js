module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
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
    },
    fontFamily: {
      nimbus: ['Nimbus'],
      arial: ['arial'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
