<template>
  <div>
    <section
      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
    >
      <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">
          {{ story.content.title }}
        </h1>
        <p class="mt-4 lg:text-lg">
          {{ story.content.description }}
        </p>
      </div>
    </section>
    <!-- section 3 : card -->
    <section class="lg:py-24 py-10 mx-auto max-w-4/5 text-center container">
      <!-- card-list -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <!-- card -->
        <template v-for="(service, i) in getServicesList">
            <div
              :key="i"
              class="justify-self-center p-4 box-card rounded-md w-full"
              @click="gotoService(service.slug)"
            >
              <!-- image -->
              <div class="">
                <img
                  :src="service.content.thumbnail_1x.filename"
                  :srcset="`${service.content.thumbnail_1x.filename} 1x,${service.content.thumbnail_2x.filename} 2x`"
                  :alt="service.content.thumbnail_1x.alt"
                  class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
                />

                <!-- text -->
              </div>
              <p class="mt-4 text-center font-bold text-xl">
                {{ service.content.title }}
              </p>
            </div>

        </template>

      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script>
  import CallToAction from '../../components/Sections/CallToAction'
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
      resolve_relations: 'services-container.services',
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
    CallToAction,
  },
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
    }
  },
  head() {
    return {
      title: 'We Offer Wide-ranging Services And Solutions',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Maintain a competitive edge through our solutions that set high standards in today’s ever-challenging environment. We offer Fintech & Blockchain, Augmented Teams & Developers, Product Engineering, Rapid POCs, IoT, Media Solutions, E-commerce, Logistics, Loyalty, UI/UX Design, Mobile App Development, and Business Intelligence + AI.' ,
        },
      ],
    }
  },
  computed:{
    getServicesList() {
      return this.story.content.body[0].services
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
    gotoService(slug) {
      this.$router.push({
        path: '/services/'+slug,
      })
    },
  },
}
</script>
