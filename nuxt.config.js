export default {
  // Target: https://go.nuxtjs.dev/config-target
  // ssr: false,
  target: 'static',
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
    title: 'Vodworks - Solving Technology Puzzles In Industries Globally',
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
        hid:'author',
        name:'author',
        content: 'Sakib Mirza'
      },
      {
        hid: 'description',
        name: 'description',
        content: ' We take the pain out of software development - no need to worry about recruitment, skill-sets, short-term projects, in fact, no project is too large or too small as we are big enough to cope and small enough to care.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Fintech & Blockchain, Augmented Teams & Developers, Product Engineering, Rapid POC’s, IoT, Media Solutions, E-commerce, Logistics, and Loyalty,  UI/UX Design, Mobile App Development, Business Intelligence + AI, web design, web developer, app development, software company, web design company, mobile app development, website design company, web development company, web design services, web design software, CRM Services, Web App Development, E-commerce Solutions, Website Development, Website hosting and maintenance, Cloud consulting, Omnichannel, Data Analytics services and software, certified blockchain business foundations, certified crypto finance expert, use cases for blockchain, the future of blockchain technology, top blockchain trends, trending cryptocurrencies today, new blockchain technologies, importance of blockchain technology, cryptocurrency project manager, certified blockchain professional, top blockchain certifications, certified blockchain expert, how long to become a blockchain developer, blockchain training alliance, certified blockchain architect, blockchain projects for beginners, fund transfer use case diagram, blockchain and fintech, blockchain technology use cases, top use cases for blockchain, blockchain technology in finance, enterprise blockchain use cases'
      },
        // OG: Meta Data
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Vodworks - Solving Technology Puzzles In Industries Globally',
        // content: this.article.title,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '',
        // content: `/${this.article.image}`,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Vodworks provides Software Development, POCs, Augmented Teams, Outsourced DevOps, New Products, Apps, and Blockchain development, and services.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content:'',
        // content: `https://langvad.dev/blog/${this.article.slug}`,
      },


    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/animate.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/components', '~/plugins/v-viewer.js'],

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
    [
      'storyblok-nuxt-routes',
      {
        accessToken: process.env.NUXT_ENV_STORYBLOCK_ACCESS_TOKEN,
        defaultLanguage: '',
        contentTypes: 'page',
        resolveLinks: 'url',
        // prettier-ignore
        resolveRelations: 'webinar-container.webinar, blog-container.blog, work-container.work',
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
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    linkExactActiveClass: 'bg-h-gray',
  },
  googleAnalytics: {
    id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_KEY,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_KEY,
    }
  },
  rules:{
    'no-console': 'off',
  }
}
