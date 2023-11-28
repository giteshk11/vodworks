<template>
  <div>
    <!-- <component
      :is="story.content.header.content.component"
      v-if="story.content.header.content.component"
      :key="story.content.header.content._uid"
      :blok="story.content.header.content"
    /> -->
    <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid"
      :blok="story.content" />
    <!-- <component
      :is="story.content.footer.content.component"
      v-if="story.content.footer.content.component"
      :key="story.content.footer.content._uid"
      :blok="story.content.footer.content"
    /> -->
  </div>
</template>
<script>
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
      resolve_relations: 'blog-container.blog',
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
    return { story: { content: {} } }
  },

  head() {
    return {
      title: 'Join Us Today - We\'re The Right Place For You',
      meta: [
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.story.content.title}`,
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

<!-- <style>
#text h3 {
  margin-top: 2rem;
  font-size: 1.25rem;
}

#text ul {
  margin: 1rem 0;
  padding-left: 24px;
}

#text li {
  display: block;
  line-height: 1.7;
  color: #555C6B;
  font-size: 18px;
  position: relative;
}

#text li::before {
  content: "";
  position: absolute;
  left: -16px;
  top: 11px;
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background-color: #9befe7;
}
</style> -->
