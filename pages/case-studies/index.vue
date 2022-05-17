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

    <section
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
    >
      <div class="mx-auto max-w-4/5 container">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-arial-black"
        >
          {{ getGeneralDetails.title }}
        </h1>
        <p class="text-h-gray mt-4 text-lg">
          {{ getGeneralDetails.description }}
        </p>
      </div>
    </section>

    <div class="cs-sections">
      <section
        v-for="(caseStudy, i) in getCaseStudies" :key="i"
        :style="{ backgroundImage: `url(${caseStudy.content.bg_image.filename})` }"
        class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center text-white"
      >
        <div class="mx-auto max-w-4/5 container">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="w-full flex items-center">
                <img
                  :src="caseStudy.content.project_icon.filename"
                  :alt="caseStudy.content.project_icon.alt"
                  class="object-contain"
                />
                <div class="px-4">
                  <h6 class="lg:text-lg font-bold color-grey">{{ caseStudy.content.subtitle }}</h6>
                  <h4 class="font-arial-black text-2xl md:text-3xl">{{ caseStudy.content.title }}</h4>
                </div>
              </div>
              <p class="my-4 text-md">{{ caseStudy.content.description }}</p>

              <div class="social-content c-studies mt-8">
                <h5 class="text-xl font-semibold mb-4">Key Features</h5>
                <div
                  class="social-content text-md"
                  v-html="$md.render(caseStudy.content.features)"
                ></div>
              </div>


              <div class="my-8">
                <img
                  :src="caseStudy.content.techs_used.filename"
                  :alt="caseStudy.content.techs_used.alt"
                />
              </div>

<!--              <div class="max-w-7/10 flex items-center">-->
<!--                <img-->
<!--                  :src="caseStudy.content.featured_image.filename"-->
<!--                  :alt="caseStudy.content.featured_image.alt"-->
<!--                  class="w-20 object-contain"-->
<!--                />-->
<!--                <div class="px-4">-->
<!--                  <p class="text-md">{{ caseStudy.content.featured_text }}</p>-->
<!--                </div>-->
<!--              </div>-->


            </div>
            <!-- Thumbnail image-->
            <div class="mt-8 md:my-auto">
              <img
                :src="caseStudy.content.thumbnail.filename"
                :alt="caseStudy.content.thumbnail.alt"
                class="w-full mx-auto hvr-right"
              />
            </div>
          </div>
        </div>

      </section>
    </div>






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
        resolve_relations: 'case-studies-container.case_studies',
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
    head(){
      return{
        title:'Read our exclusive collection of the latest tools, ideas, technologies, and innovations. ',
        meta:[
          {
            hid: 'description',
            name: 'description',
            content:
              'Browse through to read our compilation of articles on startups, Agile best practices,  NFTs, blockchain, Artificial Intelligence (AI), Business Intelligence, and the Internet of Things (IoT).' ,
          },
        ]
      }
    },

    computed:{
      getGeneralDetails(){
        return this.story.content.body[0]
      },
      getCaseStudies(){
        return this.story.content.body[1].case_studies
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
      resolveBackground(path){
        return `background-image:url(${require('~/assets' + path)})`
      }
    }

  }
</script>
<style scoped>
  .cs-sections section{
    background-attachment: fixed;
  }
  .cs-sections section:nth-child(even) .grid>div:first-child{
    order: 2;
  }
  @media only screen and (max-width: 767px) {
    .cs-sections section:nth-child(even) .grid>div:first-child{
      order: inherit;
    }
  }
</style>
