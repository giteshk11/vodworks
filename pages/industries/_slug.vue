<template>
  <div class="">
    <section
      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
    >
      <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">
          {{ currentStory.content.title }}
        </h1>
        <p class="mt-4 lg:text-lg">
          {{ currentStory.content.detailed_description }}
        </p>
      </div>
    </section>
    <!-- end hero section -->

    <!-- section 1 -->
    <section
        class="grid lg:grid-cols-2 lg:gap-6 items-center lg:py-24 py-10 mx-auto max-w-4/5 container"
      >
        <!-- image-->
        <div class="mx-auto relative rounded-2xl hvr-right">
          <img
            class="w-full h-full object-contain"
            :src="currentStory.content.thumbnail.filename"
            :alt="currentStory.content.thumbnail.alt"
          />
          <!-- text -->
        </div>

        <div class="my-8 lg:my-0">
          <h2 class="color-black text-2xl md:text-3xl lg:text-4xl font-arial-black text-left">{{ currentStory.content.detailed_title_1 }}</h2>
          <p class="text-lg text-h-gray mt-4">
            {{ currentStory.content.detailed_description_1 }}
          </p>
          <p class="text-lg text-h-gray mt-4">
          {{ currentStory.content.detailed_description_2 }}
        </p>
        </div>
      </section>

    <!-- end section 1 -->

    <section class="bgColor-grey lg:py-24 py-10">
      <div class="mx-auto max-w-4/5 text-center container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        <div
          v-for="(industory, index) in getIndustriesList"
          :key="index"
          @click="gotoIndustries(industory.slug)"
        >
          <!-- card start -->
          <div
            class="justify-self-center p-4 box-card rounded-md w-full h-full bg-white">
            <!-- image -->
            <img
              :src="industory.content.thumbnail.filename"
              :alt="industory.content.thumbnail.alt"
              class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
            />
            <!-- text -->
            <p class="mt-4 text-center font-bold text-xl">{{industory.content.title}}</p>
            <p class="text-center text-sm text-h-gray">
              {{industory.content.tag_line}}
            </p>
          </div>
          <!-- card end -->
        </div>
      </div>
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
      .get(`cdn/stories/industries`, {
        version,
        resolve_links: 'story,url',
        resolve_relations: 'industries-served.industries',
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
        currentStory: {},
      }
    },
    computed:{
      getIndustriesList() {
        return this.story.content.body[0].industries
      },
    },
    watch: {
      story: {
        immediate: true,
        handler(value) {
          if (value) {
            this.currentStory = this.story.content.body[0].industries.find(
              (s) => `/industries/${s.slug}` === this.$route.fullPath
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
      gotoIndustries(slug) {
        this.$router.push({
          path: '/industries/'+slug,
        })
      },
    },
  }
</script>

<style scoped>
  @screen md {
    .feature-image {
      display: block;
    }
  }
</style>
