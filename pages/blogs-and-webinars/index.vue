<template>
  <div>
    <!-- <component
      :is="story.content.header.content.component"
      v-if="story.content.header.content.component"
      :key="story.content.header.content._uid"
      :blok="story.content.header.content"
    /> -->
    <div
      class="bg-no-repeat bg-cover bg-center lg:text-center pt-14 lg:pt-44 pb-16 lg:pb-36 lg:px-60 px-5"
      :style="`background-image: url(${require('~/assets/img/bg_main_blog.png')})`"
    >
      <h1 class="font-arial-black text-4xl lg:text-5xl">
        {{ story.content.title }}
      </h1>
      <p class="lg:text-lg text-base mt-6 text-h-gray">
        {{ story.content.subtitle }}
      </p>
    </div>
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
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
      resolve_relations: 'webinar-container.webinars,blog-container.blogs',
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
