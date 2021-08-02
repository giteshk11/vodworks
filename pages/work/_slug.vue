<template>
  <div>
    <div class="absolute inset-0 z-50 bg-black bg-opacity-80">
      <BaseLightBox
        :next="currentStory.content.next_post"
        :previous="currentStory.content.previous_post"
      >
        <div class="px-4 md:px-0 md:max-w-80vw mx-auto pb-20">
          <div
            class="mx-auto flex justify-between items-center py-6 text-white"
          >
            <div class="w-full flex items-center">
              <div
                class="w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0 bg-white rounded-full"
              >
                <img
                  :src="currentStory.content.logo.filename"
                  class="w-full h-full object-contain p-2"
                />
              </div>
              <div
                class="space-y-1 md:space-y-2 lg:space-y-4 xl:space-y-6 px-4"
              >
                <h2
                  class="font-arial-black md:text-4xl lg:text-56 text-white text-left"
                >
                  {{ currentStory.content.title }}
                </h2>
                <p class="text-xs text-left md:text-sm lg:text-lg xl:text-xl">
                  {{ currentStory.content.description }}
                </p>
              </div>
            </div>

            <div
              class="text-white cursor-pointer inline-flex items-center"
              @click="$router.push({ path: '/work' })"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div class="w-full">
            <img
              :src="currentStory.content.featured_image.filename"
              class="w-full mx-auto object-contain"
            />
          </div>
          <div
            v-editable="currentStory.content"
            class="mx-auto mt-20 text-white"
            v-html="$md.render(currentStory.content.content)"
          ></div>
          <div class="w-full flex flex-col items-center my-10 space-y-4">
            <div class="w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-full">
              <img
                :src="currentStory.content.logo.filename"
                class="w-full h-full object-contain p-2"
              />
            </div>
            <h2 class="font-arial-black md:text-4xl text-white text-left">
              {{ currentStory.content.title }}
            </h2>
            <p class="text-white text-opacity-60">Date</p>
          </div>
          <div
            class="mx-auto flex justify-between items-center py-6 text-white"
          >
            <div class="w-full flex items-center">
              <div class="w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0 rounded-full">
                <img
                  src="~assets/img/Vodworks_White_Logo.png"
                  class="w-full h-full object-contain p-2"
                />
              </div>
              <div
                class="space-y-1 md:space-y-2 lg:space-y-4 xl:space-y-6 px-4 flex flex-col items-start"
              >
                <h2
                  class="font-arial-black text-xs md:text-3xl text-white text-left"
                >
                  Curious about our other projects?
                </h2>
                <NuxtLink
                  to="/contact"
                  class="text-left py-2 px-2 lg:py-4 lg:px-6 button-linear-red rounded-lg text-xs lg:text-sm uppercase inline-block"
                >
                  Discuss Your Project
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="grid lg:grid-cols-4 px-10 gap-6 mt-10 pb-16">
            <template v-for="work in getOtherWork">
              <div
                :key="work.id"
                class="bg-b-dark-gray rounded-2xl p-4 text-white hover:cursor-pointer"
                @click="isLightBoxVisible = true"
              >
                <NuxtLink :to="`/${work.full_slug}`">
                  <!-- image -->
                  <img
                    :src="work.content.logo.filename"
                    class="w-full filter invert h-48 rounded-tr-2xl rounded-tl-2xl object-contain"
                  />

                  <!-- text -->
                  <p class="mt-5 font-bold text-2xl">
                    {{ work.content.title }}
                  </p>
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </BaseLightBox>
    </div>
  </div>
</template>

<script>
import BaseLightBox from '~/components/global/BaseLightBox.vue'

const loadData = function ({
  api,
  cacheVersion,
  errorCallback,
  version,
  path,
}) {
  return api
    .get(`cdn/stories/work`, {
      version,
      resolve_links: 'story,url',
      resolve_relations: 'work-container.work',
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
  components: {
    BaseLightBox,
  },
  layout: 'fullpage',
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
      isLightBoxVisible: false,
      story: { content: {} },
      currentStory: {},
    }
  },
  computed: {
    getOtherWork() {
      return this.story.content.body[0].work.filter(
        (s) => `/${s.full_slug}` !== this.$route.fullPath
      )
    },
  },
  watch: {
    story: {
      immediate: true,
      handler(value) {
        if (value) {
          this.currentStory = this.story.content.body[0].work.find(
            (s) => `/${s.full_slug}` === this.$route.fullPath
          )
        }
      },
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
  },
}
</script>
