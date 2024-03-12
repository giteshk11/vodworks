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
  const resForBlogPosts = await axios.get(`https://api.storyblok.com/v2/cdn/stories?cv=${cacheVersion}&token=${token}&version=${version}&starts_with=blogs/`)
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
  plugins: ['~/plugins/components', '~/plugins/vue-scrollto.js', '~/plugins/vue-in-viewport-directive.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
    'nuxt-delay-hydration',
    
    'nuxt-lazysizes',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // For Scss

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



  build: {

    // collapseBooleanAttributes: true,
    // decodeEntities: true,
    // minifyCSS: true,
    // minifyJS: true,
    // processConditionalComments: true,
    // removeEmptyAttributes: true,
    // removeRedundantAttributes: true,
    // trimCustomFragments: true,
    // useShortDoctype: true,
    // removeComments: true,
    // preserveLineBreaks: false,
    // collapseWhitespace: true,

    // extractCSS: true,

    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|vue)$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     }
    //   }
    // }
    
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
