import axios from "axios"


const dynamicRoutes = async () => {
  const token = process.env.NUXT_ENV_STORYBLOCK_ACCESS_TOKEN
  const version = 'published'
  let cacheVersion = 0
  // Calling Space and finding Dynamic cache version
  axios.get(`https://api.storyblok.com/v2/cdn/spaces/me?token=${token}`).then((spaceRes) => {
    cacheVersion = spaceRes.data.space.version
  })
  // Fetching blog posts
  // const resForBlogPosts = await axios.get(`https://api.storyblok.com/v2/cdn/stories?cv=${cacheVersion}&token=${token}&version=${version}&starts_with=blogs/`)
  
  const resForBlogPosts = {
    data:{
      stories:[
        {
          slug:"advancing-aml-compliance-through-innovative-software-solutions",
        },
        {
          slug:"best-bi-tools-to-consider-in-2024",
        },
        {
          slug:"dedicated-dev-teams-in-e-commerce-empowering-canada-s-online-retailers",
        },
        {
          slug:"top-ai-startups-transforming-telecom",
        },
        {
          "slug": "eastern-europe-as-an-it-outsourcing-hub-opportunities-for-canada",
        },
        {
          "slug": "charting-the-titans-top-grossing-it-firms-in-the-uk-s-2024-market-landscape",
        },
        {
          "slug": "exploring-the-future-of-fintech-and-blockchain-in-bangkok-a-recap-of-money20-20-and-onchain-2024",
        },
        {
          "slug": "the-future-of-telecommunications-in-the-uk-innovations-and-market-growth",
        },
        {
          "slug": "canadian-innovation-how-proof-of-concepts-fosters-tech-advancements",
        },
        {
          "slug": "cost-effective-tech-solutions-outsourcing-vs-in-house-development-in-canada",
        },
        {
          "slug": "the-impact-of-brexit-on-the-uk-s-data-center-industry",
        },
        {
          "slug": "navigating-economic-challenges-in-the-uk-tech-sector-strategies-and-outlook",
        },
        {
          "slug": "strategic-planning-for-it-offshore-outsourcing-a-guide-for-senior-management",
        },
        {
          "slug": "evaluating-and-measuring-the-success-of-offshore-teams-metrics-and-kpis-for-the-c-level",
        },
        {
          "slug": "ai-ml-in-business-preparing-your-2024-technical-strategy",
        },
        {
          "slug": "driving-digital-transformation-key-strategies-for-c-level-executives-in-the-uk",
        },
        {
          "slug": "cloud-migration-in-the-uk-strategies-for-secure-transition",
        },
        {
          "slug": "a-new-dawn-for-nft-creators-opensea-s-royalty-shift-and-vodworks-solutions",
        },
        {
          "slug": "pocs-in-fintech-future-proofing-financial-services",
        },
        {
          "slug": "how-to-partner-with-a-dedicated-development-team-tips-tricks",
        },
        {
          "slug": "balancing-privacy-and-innovation-the-role-of-product-engineering-in-uk-data-security",
        },
        {
          "slug": "the-difference-between-offshore-and-nearshore-teams-and-why-hybrid-is-better",
        },
        {
          "slug": "agile-product-development-for-competitive-adaptability",
        },
        {
          "slug": "staff-augmentation-meeting-the-uk-tech-talent-demand",
        },
        {
          "slug": "enhancing-user-experience-in-cross-platform-apps",
        },
        {
          "slug": "software-development-outsourcing-in-the-uk-an-overview",
        },
        {
          "slug": "the-evolution-of-gaming-in-southeast-asia-with-web3-innovation",
        },
        {
          "slug": "vodworks-at-gitex-global-2023-how-companies-leverage-ai-and-adopt-web3-technology",
        },
        {
          "slug": "the-fixed-cost-project-is-dead-how-to-choose-the-ideal-software-development-partner-for-your-media-and-entertainment-project",
        },
        {
          "slug": "ibc-insights-unveiling-our-uniquely-different-approach-to-web-3-0",
        },
        {
          "slug": "9-ways-to-use-ai-in-project-management-and-risk-assessment",
        },
        {
          "slug": "software-is-like-milk-it-goes-bad-over-time-a-guide-on-building-safe-code",
        },
        {
          "slug": "the-future-of-the-internet-how-will-web3-change-our-interactions",
        },
        {
          "slug": "pirates-passwords-and-policing-using-technology-to-tackle-key-challenges-faced-by-streaming-companies",
        },
        {
          "slug": "secrets-to-a-successful-software-development-life-cycle-sdlc-implementation-5-tips-by-vodworks",
        },
        {
          "slug": "from-concept-to-code-understanding-the-software-development-lifecycle-and-its-phases",
        },
        {
          "slug": "programming-languages-ranking-top-10-for-2021",
        },
        {
          "slug": "how-mobile-first-web-design-is-different-from-adaptive-and-responsive",
        },
        {
          "slug": "8-web-development-trends-every-cto-should-be-ready-for-in-2021",
        },
      ]
    }
  }
  
  
  // Fetching case studies
  const resForCaseStudies = await axios.get(`https://api.storyblok.com/v2/cdn/stories?cv=${cacheVersion}&token=${token}&version=${version}&starts_with=cases/`)
  
  const routesForPosts = resForBlogPosts.data.stories.map(blog => {
    return {
      route: '/blogs/' + blog.slug,
      payload: blog
    }
  })
  const routesForCases = resForCaseStudies.data.stories.map(caseStudy => {
    return {
      route: '/cases/' + caseStudy.slug,
      payload: caseStudy
    }
  })
  // Concatenating both routes
  const routes = routesForPosts.concat(routesForCases)
  return routes
}

export default {
  target: 'static',

  generate: {
    routes: dynamicRoutes
  },

  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },

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

  css: [
    '~/assets/scss/main.scss',
  ],

  plugins: ['~/plugins/components', '~/plugins/vue-scrollto.js', '~/plugins/vue-in-viewport-directive.js'],

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  
    'nuxt-lazysizes',
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
        resolveLinks: 'url,story',
        resolveRelations: 'testimonial-container.testimonials_list',
      },
    ],

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [



    //  Doc: https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap',

    // '@nuxtjs/google-analytics',
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



  sitemap: {
    hostname: 'https://vodworks.com/',
    path: '/sitemap.xml',
    trailingSlash: true,
    gzip: true,
    routes: dynamicRoutes,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },


  lazySizes: {
  
    extendAssetUrls: {
      img: ['src', 'srcset', 'data-src', 'data-srcset'],
      source: ['src', 'srcset', 'data-src', 'data-srcset'],
    },

    plugins: {
      blurUp: true,
      // nativeLoading: true,
    },
  },




  router: {
    linkExactActiveClass: 'isActiveMenuItem',
  },

  // googleAnalytics: {
  //   id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_KEY,
  // },

  // publicRuntimeConfig: {
  //   googleAnalytics: {
  //     id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_KEY,
  //   }
  // },

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
