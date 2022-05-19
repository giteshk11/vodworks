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

      <section class="lg:py-24 py-10">
        <div class="max-w-4/5 mx-auto container">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(news, index) in newsletters" :key="index">
              <div class="p-2 pb-4 bgColor-grey rounded-xl hvr-top h-full">
                <div
                  class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
                  :style="{backgroundImage: `url(${news.content.featured_image.filename})`}"
                ></div>
                  <div class="flex items-center mt-4">
                    <div class="h-4 w-4 bg-x-blue rounded-full mr-2"></div>
                    <p class="text-sm text-x-grayText"> {{ news.content.author }}</p>
                  </div>
                  <nuxt-link :to="news.content.external_url">
                    <p class="color-black font-bold text-xl mt-2">{{ news.content.title }}</p>
                  </nuxt-link>
                  <p v-if="news.content.published_date" class="mt-5 text-sm">
                    {{ getPublishDate(news) }} - {{ news.content.read_time }} minutes
                  </p>
              </div>
            </div>
          </div>

        </div>
      </section>

<!--      <section-->
<!--        :style="resolveBackground('/img/home-hero-bg.83a56ef.jpg')"-->
<!--        class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center text-center overflow-hidden relative"-->
<!--      >-->
<!--        <div class="py-12 px-8 mx-auto md:max-w-3/5 container">-->
<!--          <h2-->
<!--            class="text-3xl md:text-4xl lg:text-5xl font-arial-black text-white"-->
<!--          >-->
<!--            Subscribe to our Newsletters-->
<!--          </h2>-->
<!--          <p class="text-lg mt-4 text-white md:px-12">-->
<!--            Be one of the firsts to receive the latest news, happenings and innovations around the globe today.-->
<!--          </p>-->
<!--          <a-->
<!--            href="https://share.hsforms.com/1dA31JO2lSGe3kTtFBoOQvw145tu"-->
<!--            target="_blank"-->
<!--            class="font-bold button-red py-4 px-6 rounded-lg text-white inline-block mt-8 uppercase"-->
<!--          >-->
<!--            Click to Subscribe-->
<!--          </a>-->
<!--        </div>-->
<!--        &lt;!&ndash; ++ &ndash;&gt;-->
<!--      </section>-->

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
        resolve_relations: 'newsletters-container.newsletters',
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
        title: 'Vodworks Monthly Newsletters Focused On Detailed Updates',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Vodworks puts in extra effort to share the latest news, blogs, updates, and information with our subscribers. In this way, everyone stays updated and informed.' ,
          },
        ],
      }
    },
    computed: {
      newsletters(){
        return this.story.content.body[0].newsletters
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
    methods:{
      getPublishDate(news) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
        return new Date(news.content.published_date.split(' ')[0]).toLocaleString(
          'en-US',
          options
        )
      },
      resolveBackground(path){
        return `background-image:url(${require('~/assets' + path)})`
      }
    }
  }
</script>

<style scoped>
  .sp-container section:nth-child(even){
      background-color: #F4F4F4;
  }
  .sp-container section:nth-child(even) .grid>div:first-child{
    order: 2;
  }

  @media only screen and (max-width: 767px) {
    .sp-container section:nth-child(even) .grid>div:first-child{
      order: inherit;
    }
  }
</style>
