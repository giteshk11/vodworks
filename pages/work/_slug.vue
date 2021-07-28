<template>
  <div>
    <div class="absolute inset-0 z-50 bg-black bg-opacity-80">
      <BaseLightBox
        :next="story.content.next_post"
        :previous="story.content.previous_post"
      >
        <div class="px-4 md:px-0 md:max-w-80vw mx-auto pb-20">
          <div class="mx-auto flex justify-between py-6 text-white">
            <div class="w-16 h-16 flex-shrink-0 bg-white rounded-full">
              <img
                :src="story.content.logo.filename"
                class="w-full h-full object-contain p-2"
              />
            </div>
            <div class="space-y-1 md:space-y-4 px-4">
              <h2
                class="font-arial-black text-lg lg:text-56 text-white text-left"
              >
                {{ story.content.title }}
              </h2>
              <p class="text-xs text-left md:text-lg">
                {{ story.content.description }}
              </p>
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
              :src="story.content.featured_image.filename"
              class="w-full mx-auto object-contain"
            />
          </div>
          <div
            v-editable="story.content"
            class="lg:w-3/5 w-4/5 mx-auto mt-20 text-white"
            v-html="$md.render(story.content.content)"
          ></div>
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
    .get(`cdn/stories${path}`, {
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
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  },
}
</script>
