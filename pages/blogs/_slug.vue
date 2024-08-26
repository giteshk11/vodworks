<template>
  <div>
    <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid"
      :blok="story.content" :faq_data="FaqsData" />
  </div>
</template>

<script>

import FAQs from '~/static/faqs'

const loadData = function ({
  api,
  cacheVersion,
  errorCallback,
  version,
  path,
}) {
  return api
    .get(`cdn/stories${path}`, {
      version,
      resolve_links: 'story,url',
      resolve_relations: 'blog-container.blog,blog.author',
      cv: cacheVersion,
    })
    .then((res) => {
      return res.data
    })
    .catch((res) => {
      if (!res.response) {
        errorCallback({
          statusCode: 404,
          message: 'Failed to receive content form api',
        })
      } else {
        errorCallback({
          statusCode: res.response.status,
          message: res.response.data,
        })
      }
    })
}

export default {
  
  asyncData(context) {
    // Check if we are in the editing mode
    let editMode = true
    if (
      context.query._storyblok ||
      context.isDev ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('_storyblok_draft_mode'))
    ) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('_storyblok_draft_mode', '1')
        if (window.location === window.parent.location) {
          window.localStorage.removeItem('_storyblok_draft_mode')
        }
      }
      editMode = true
    }
    const version = editMode ? 'draft' : 'published'
    const path = context.route.path === '/' ? '/home' : context.route.path
    // Load the JSON from the API
    return loadData({
      version,
      api: context.app.$storyapi,
      errorCallback: context.error,
      path,
    })
  },


  data() {
    return { 
      story: { content: {} },
      FaqsData: {
        title: "Frequently Asked",
        animated_word: "Questions",
        faqs: FAQs.list
      } 
    }
  },

  head() {
    return {
      title: `${this.story.content.meta_title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.story.content.meta_description}`,
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.story.content.meta_title}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `${this.story.content.meta_description}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.story.content.featured_image.filename}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://vodworks.com/${this.story.full_slug}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.story.content.featured_image.filename}`,
        },

      ],

      script: [
      {
        json: {
          "@context": "https://schema.org/",
          "@type": "Article",
          "author": [
            {
              "@type": "Organization",
              "name": "Vodworks",
              "url": "https://vodworks.com/about/"
            }
          ],

          
          "headline": `${this.story.content.title}`,
          "datePublished": `${this.story.published_at}`,

          "publisher": {
            "@type": "Organization",
            "name": "Vodworks",
            "logo": {
              "@type": "ImageObject",
              "url": "https://vodworks.com/_nuxt/img/vw-logo.bda932c.svg"
            }
          },
          "mainEntityOfPage": `https://vodworks.com/${this.story.full_slug}`
        },
        type: 'application/ld+json'
      },
    ]

    }
  },

  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  },
 
}

</script>