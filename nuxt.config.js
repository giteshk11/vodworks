import axios from "axios"

async function dynamicRoutes() {
  const token = process.env.NUXT_ENV_STORYBLOCK_ACCESS_TOKEN;
  const version = 'published';

  try {
    const spaceRes = await axios.get(`https://api.storyblok.com/v2/cdn/spaces/me?token=${token}`);
    const cacheVersion = spaceRes.data.space.version;

    const res = await axios.get(`https://api.storyblok.com/v2/cdn/stories?cv=${cacheVersion}&token=${token}&version=${version}&starts_with=blogs/`);
    return res.data.stories.map(blog => '/blogs/' + blog.slug);
  } catch (error) {
    console.error('Error generating routes:', error);
    return [];
  }
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

    script: [
      {
        json: {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "vodworks.com",
            "url": "https://vodworks.com/",
            "sameAs": [
              "https://www.facebook.com/vodworks/",
              "https://www.linkedin.com/company/vodworks",
              "https://x.com/vodworksit"
            ],
            "description": "Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more",
            "image": {
              "@type": "ImageObject",
              "url": "https://vodworks.com/_nuxt/img/vw-logo.bda932c.svg"
            },
            "alternateName": "Vodworks"
        },
        type: 'application/ld+json'
      },
      {
        json: {
          "@context": "https://schema.org/",
          "@type": "Organization",
          "url": "https://vodworks.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://vodworks.com/_nuxt/img/vw-logo.bda932c.svg"
          }
        },
        type: 'application/ld+json'
      },
    ]
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
