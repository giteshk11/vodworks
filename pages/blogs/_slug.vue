<template>
  <div>
    <component :is="pageData.story.content.component" v-if="pageData.story.content.component"
      :key="pageData.story.content._uid" :blok="pageData.story.content" :faqsdata="faqs" :getBlogData="relatedPosts" />
  </div>
</template>

<script>



export default {

  async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, faqsRes, relatedPostsRes] = await Promise.all([
      context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: 'published',
        resolve_relations: 'blog-container.blog,blog.author',
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'faqs/',
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'blogs/',
        per_page: 4,
      }),
    ])
    return {
      pageData: pageDataRes.data,
      faqs: faqsRes.data,
      relatedPosts: relatedPostsRes.data
    }

  },


  data() {
    return {
      story: { content: {} },
    }
  },

  head() {
    return {
      title: `${this.pageData.story.content.meta_title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.pageData.story.content.meta_description}`,
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.pageData.story.content.meta_title}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `${this.pageData.story.content.meta_description}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.pageData.story.content.featured_image.filename}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://vodworks.com/${this.pageData.story.full_slug}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.pageData.story.content.featured_image.filename}`,
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

            "headline": `${this.pageData.story.content.title}`,
            "datePublished": `${this.pageData.story.published_at}`,

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
      
      ],
    }
  },

  computed: {
    getBlogData() {
      return this.relatedPosts
    },
  },

}

</script>