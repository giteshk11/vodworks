<template>
  <div v-if="getBlogs" class="lg:px-60 px-5">
    <h2
      class="title text-center my-8 text-42 md:text-56 font-arial-black leading-65 tracking-wide lg:mr-5"
    >
      Blogs
    </h2>
    <template v-for="(blog, index) in getBlogs">
      <div
        :key="index"
        class="bg-b-gray w-full lg:px-6 px-3 lg:py-8 py-4 grid lg:grid-cols-7 mt-8 rounded-xl text-left"
      >
        <div class="lg:col-span-5">
          <!-- author -->
          <div class="flex items-center">
            <div class="h-4 w-4 bg-x-blue rounded-full mr-2"></div>
            <p class="text-sm text-x-grayText">
              {{ blog.content.author }}
            </p>
          </div>

          <!-- title -->
          <h2 class="font-arial font-bold text-3xl mt-3">
            <NuxtLink :to="`/${blog.full_slug}`">
              {{ blog.content.title }}
            </NuxtLink>
          </h2>

          <!-- description -->
          <p class="text-h-gray mt-2">
            {{ blog.content.description }}
          </p>

          <!-- time -->

          <p v-if="blog.content.published_date" class="mt-5 text-sm">
            {{ getPublishDate(blog) }} - {{ blog.content.read_time }} minutes
          </p>
        </div>

        <!-- image -->
        <div
          v-if="getFeaturedImage(blog)"
          class="w-60 h-48 col-span-2 self-center rounded-lg"
        >
          <img :src="getFeaturedImage(blog).filename" />
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
      resolve_relations: 'blog-container.blogs',
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
    getBlogs() {
      return this.story.content.body[0].blogs
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
