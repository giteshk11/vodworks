<template>
  <div>

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
        <p class="mt-4 lg:text-lg lg:px-8">
          {{ story.content.description }}
        </p>
      </div>
    </section>


    <section class="lg:py-16 py-10 blog-description">
      <div
        id="text"
        ref="all-content"
        class="lg:w-3/5 w-4/5 container mx-auto"
        v-html="$md.render(getContent.Privacy_Policy_Content)"
      >
      </div>
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
        resolve_relations: 'privacy-policy',
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
      }

    },
    head() {
      return {
        title: 'Privacy Policy',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Privacy Policy',
          },
        ],
      }
    },
    computed:{
      getContent(){
        return this.story.content.body[0]
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
      const collections = this.$refs["all-content"].querySelectorAll('a')
      collections.forEach((anchor) => anchor.target = "_blank")
    },

    methods: {
      resolveBackground(path) {
        return `background-image: url(${require('~/assets' + path)});`
      },

    },
  }
</script>
