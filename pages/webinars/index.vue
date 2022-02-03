<template>
  <div v-if="getWebinars">

    <section
      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
    >
      <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-arial-black"
        >
          {{ story.content.title }}
        </h1>
        <p class="mt-4 lg:text-lg">
          {{ story.content.description }}
        </p>
      </div>
    </section>

    <section class="lg:py-16 py-10 max-w-4/5 mx-auto container">
      <template v-for="(webinar, index) in getWebinars">
        <div
          :key="index"
          class="bgColor-grey grid md:grid-cols-7 hvr-right w-full lg:px-6 px-3 lg:py-8 py-4 mt-6 rounded-xl text-left"
        >
          <div class="md:col-span-5 pr-6 lg:pr-24">
            <!-- author -->
            <div class="flex items-center">
              <div class="h-4 w-4 bg-x-blue rounded-full mr-2"></div>
              <p class="text-sm text-x-grayText">
                {{ webinar.content.author }}
              </p>
            </div>

            <!-- title -->
            <h4 class="font-arial font-bold text-2xl mt-4">
              <NuxtLink :to="`/${webinar.full_slug}`">
                {{ webinar.content.title }}
              </NuxtLink>
            </h4>

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
            class="col-span-2 self-center rounded-lg inline-flex w-full h-auto md:h-full mt-8 md:mt-0"
          >
            <img
              :src="getFeaturedImage(webinar).filename"
              class="object-cover mx-auto items-center rounded-lg"
              alt=""
            />
          </div>
        </div>
      </template>
    </section>
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
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
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
