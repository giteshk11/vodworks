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
        3: '3',
      },
    },
    extend: {
      boxShadow: {
        'home-card': '0px 0px 80px 9px #000000',
      },

      spacing: {
        100: '28rem',
        272: '272px',
        486: '486px',
        347: '347px',
      },

      scale: {
        80: '.8',
        70: '.7',
        60: '.6',
        40: '.4',
        250: '2.5',
        350: '3.5',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      lineHeight: {
        65: '65px',
        32: '32px',
      },

      fontSize: {
        56: '56px',
        41: '41px',
        42: '42px',
      },

      colors: {
        //  header
        'h-black': '#040912',
        'h-red': '#FD0404',
        'h-gray': '#555C6B',
        'h-font': '#D2D6DC',

        // background
        'b-gray': '#DADBE0',
        'b-gray-form': '#F8F7F9',
        'b-black': '#03020B',
        'b-dark-gray': '#0A111E',

        // linear gradient
        'l-blue': '#74FFCA',
        'l-darkblue': '#4FAFFF',
        'l-red': '#FF0000',
        'l-darkred': '#E52D27',

        //
        'x-blue': '#9BEFE7',
        'x-gray': '#666',
        'x-grayText': 'rgba(4,2,38,60%)',
        'x-red': '#FE0202',
        'x-black': '#0D1D39',
        'x-gray-partner': '#777B87',
      },
    },
    fontFamily: {
      nimbus: ['Nimbus'],
      boden: ['Boden'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
