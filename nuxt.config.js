export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  // target: 'static',
  // mode: 'universal',

  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Software Development Company | Vodworks',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Vodworks'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'software development, it company, software development company, software development companies, development company, software development service, software development services, software developer company, software development firm, product development services, software development services company, database management company'
      },
      // OG: Meta Data
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Software Development Company | Vodworks',
        // content: this.article.title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '',
        // content: `/${this.article.image}`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/components', '~/plugins/v-viewer.js', '~/plugins/vue-scrollto.js', '~/plugins/vue-in-viewport-directive.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // For Scss
    // '@nuxtjs/style-resources',
    [
      'storyblok-nuxt-routes',
      {
        accessToken: process.env.NUXT_ENV_STORYBLOCK_ACCESS_TOKEN,
        defaultLanguage: '',
        contentTypes: 'page',
        resolveLinks: 'url,story',
        resolveRelations: 'testimonial-container.testimonials_list',
      },
    ],
    '@nuxtjs/google-analytics',
  ],


  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.NUXT_ENV_STORYBLOCK_ACCESS_TOKEN,
        cacheProvider: 'memory',
      },
    ],
    [
      '@nuxtjs/markdownit',
      {
        html: true,
        injected: true,
      },
    ],
    ['nuxt-cookie-control', {
        barPosition: 'bottom-full',
        text: {
          barTitle: 'Cookies',
          barDescription: 'This website uses cookies to ensure you get the best experience on our website.',
          acceptAll: 'ACCEPT',
          declineAll: 'Delete all',
          manageCookies: 'Manage cookies',
          unsaved: 'You have unsaved settings',
          close: 'Close',
          save: 'Save',
          necessary: 'Necessary cookies',
          optional: 'Optional cookies',
          functional: 'Functional cookies',
          blockedIframe: 'To see this, please enable functional cookies',
          here: 'here'
        },
        colors: {
          barTextColor: '#fff',
          barBackground: '#000',
          barButtonColor: '#fff',
          barButtonHoverColor: '#fff',
          barButtonBackground: '#ec4042',
          controlButtonIconColor: '#000',
          controlButtonBackground: '#fff',
          barButtonHoverBackground: '#e12729',


        },
      }
    ],

  ],

  // cookies: {
  //   modal:false,
  //   name:"test",
  //   necessary: [
  //     {
  //       name:  'Default Cookies',
  //       description:  'Used for cookie control.',
  //       cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
  //     }
  //   ],
  // },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    linkExactActiveClass: 'isActiveMenuItem',
  },
  googleAnalytics: {
    id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_KEY,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_KEY,
    }
  },
  rules: {
    'no-console': 'off',

    "comment-empty-line-before": [
      "always", {
        "ignore": [
          "stylelint-commands",
          "after-comment"
        ]
      }
    ],
  }
}
