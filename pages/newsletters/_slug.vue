<template>
  <div class="font-arial">
    <section
      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
      class="lg:py-24 py-20 items-center bg-no-repeat bg-cover bg-center single-post relative"
    >
      <div class="mx-auto max-w-4/5 text-white container relative z-10">
        <h1
          class="text-2xl md:text-3xl lg:text-4xl font-arial-black"
        >
          {{ getCurrentNewsletter.title }}
        </h1>

        <!-- author -->
        <div class="flex mt-8">
          <!-- image -->
          <div
            class="w-12 h-12 rounded-full bg-no-repeat bg-cover bg-center mr-2 bg-x-blue"
          ></div>

          <div>
            <!-- name -->
            <p class="font-bold">{{ getCurrentNewsletter.author }}</p>

            <!-- time -->
            <p class="mt-1 text-sm text-white opacity-80">
              {{ getPublishDate }} - {{ getCurrentNewsletter.read_time }} min read
            </p>
          </div>
        </div>
      </div>

    </section>

    <section class="lg:py-16 py-10 blog-description">
        <div
          id="text"
          ref="details"
          class="lg:w-3/5 w-4/5 container mx-auto"
          v-html="$md.render(getCurrentNewsletter.content)"
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
    computed:{
      getCurrentNewsletter(){
        return this.story.content
      },
      getPublishDate() {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
        return new Date(this.story.content.published_date.split(' ')[0]).toLocaleString(
          'en-US',
          options
        )
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
      const collections = this.$refs["details"].querySelectorAll('a')
      collections.forEach((anchor) => anchor.target = "_blank")
    },
    methods:{
      resolveBackground(path) {
        return `background-image: url(${require('~/assets' + path)});`
      },
    }
  }
</script>
<style>
  #text h3{
    margin-top: 2rem;
    font-size: 1.25rem;
  }
  #text ul{
    margin: 1rem 0;
    padding-left:24px;
  }
  #text li{
    display: block;
    line-height: 1.7;
    color: #555C6B;
    font-size: 18px;
    position: relative;
  }
  #text li::before{
    content: "";
    position: absolute;
    left: -16px;
    top: 11px;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: #9befe7;
  }
  #text img{
    border-radius: 8px;
  }
  #text iframe{
    border-radius: 12px;
    overflow: hidden;
    margin:24px 0;
  }

</style>
