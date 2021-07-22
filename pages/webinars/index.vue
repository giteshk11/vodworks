<template>
  <div v-if="getWebinars" class="lg:px-60 px-5">
    <h2
      class="title text-center my-8 text-42 md:text-56 font-arial-black leading-65 tracking-wide lg:mr-5"
    >
      Webinars
    </h2>
    <template v-for="(webinar, index) in getWebinars">
      <div
        :key="index"
        class="bg-b-gray w-full lg:px-6 px-3 lg:py-8 py-4 grid lg:grid-cols-7 mt-8 rounded-xl text-left"
      >
        <div class="lg:col-span-5">
          <!-- author -->
          <div class="flex items-center">
            <div class="h-4 w-4 bg-x-blue rounded-full mr-2"></div>
            <p class="text-sm text-x-grayText">
              {{ webinar.content.author }}
            </p>
          </div>

          <!-- title -->
          <h2 class="font-arial font-bold text-3xl mt-3">
            <NuxtLink :to="`/${webinar.full_slug}`">
              {{ webinar.content.title }}
            </NuxtLink>
          </h2>

          <!-- description -->
          <p class="text-h-gray mt-2">
            {{ webinar.content.description }}
          </p>

          <!-- time -->

          <p v-if="webinar.content.published_date" class="mt-5 text-sm">
            {{ getPublishDate(webinar) }} -
            {{ webinar.content.read_time }} minutes
          </p>
        </div>

        <!-- image -->
        <div
          v-if="getFeaturedImage(webinar)"
          class="w-60 h-48 col-span-2 self-center rounded-lg"
        >
          <img :src="getFeaturedImage(webinar).filename" />
        </div>
      </div>
    </template>
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
      resolve_relations: 'webinar-container.webinars',
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
  computed: {
    getWebinars() {
      return this.story.content.body[0].webinars
    },
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
  methods: {
    getPublishDate(blog) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(blog.content.published_date.split(' ')[0]).toLocaleString(
        'en-US',
        options
      )
    },
    getFeaturedImage(blog) {
      return blog.content.featured_image
    },
  },
}
</script>
