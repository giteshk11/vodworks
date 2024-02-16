export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    routes: [
      '/blogs/ai-ml-in-business-preparing-your-2024-technical-strategy',
      '/blogs/driving-digital-transformation-key-strategies-for-c-level-executives-in-the-uk',
      '/blogs/cloud-migration-in-the-uk-strategies-for-secure-transition',
      '/blogs/pocs-in-fintech-future-proofing-financial-services',
      '/blogs/a-new-dawn-for-nft-creators-opensea-s-royalty-shift-and-vodworks-solutions',
      '/blogs/how-to-partner-with-a-dedicated-development-team-tips-tricks',
      '/blogs/balancing-privacy-and-innovation-the-role-of-product-engineering-in-uk-data-security',
      '/blogs/the-difference-between-offshore-and-nearshore-teams-and-why-hybrid-is-better',
      '/blogs/agile-product-development-for-competitive-adaptability',
      '/blogs/staff-augmentation-meeting-the-uk-tech-talent-demand',
      '/blogs/enhancing-user-experience-in-cross-platform-apps',
      '/blogs/software-development-outsourcing-in-the-uk-an-overview',
      '/blogs/the-evolution-of-gaming-in-southeast-asia-with-web3-innovation',
      '/blogs/vodworks-at-gitex-global-2023-how-companies-leverage-ai-and-adopt-web3-technology',
      '/blogs/the-fixed-cost-project-is-dead-how-to-choose-the-ideal-software-development-partner-for-your-media-and-entertainment-project',
      '/blogs/ibc-insights-unveiling-our-uniquely-different-approach-to-web-3-0',
      '/blogs/9-ways-to-use-ai-in-project-management-and-risk-assessment',
      '/blogs/software-is-like-milk-it-goes-bad-over-time-a-guide-on-building-safe-code',
      '/blogs/the-future-of-the-internet-how-will-web3-change-our-interactions',
      '/blogs/pirates-passwords-and-policing-using-technology-to-tackle-key-challenges-faced-by-streaming-companies',
      '/blogs/secrets-to-a-successful-software-development-life-cycle-sdlc-implementation-5-tips-by-vodworks',
      '/blogs/from-concept-to-code-understanding-the-software-development-lifecycle-and-its-phases',
      '/blogs/programming-languages-ranking-top-10-for-2021',
      '/blogs/how-mobile-first-web-design-is-different-from-adaptive-and-responsive',
      '/blogs/8-web-development-trends-every-cto-should-be-ready-for-in-2021',

    ]
  },

  // generate: { 
  //   asyncData(context) {
  //     return context.app.$storyapi.get('cdn/stories/blogs/').then(res => {
  //       return res.data.map(blog => {
  //         return '/blogs/' + blog.slug
  //       })
  //     })
  //   }
  // },

  // generate: {
  //   routes: async ($storyapi) => {

  //     const [allArticlesRes] = await Promise.all([
  //       $storyapi.get('cdn/stories/', {
  //         version: 'published',
  //         starts_with: 'blogs/',

  //       }),

  //     ])
  //     const routes = allArticlesRes.data.map((blog) => {
  //       return {
  //         route: '/blogs/' + blog.slug,
  //         payload: blog
  //       }
  //     });
  //     return ['/blogs/', ...routes]
  //   }
  // },


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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],

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

  cookies: {
    modal: false,
    name: "test",
    necessary: [
      {
        name: 'Default Cookies',
        description: 'Used for cookie control.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
  },

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
