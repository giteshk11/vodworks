<template>
  <div>

    <!------------------------------------- Data Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Data Management Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">While most companies collect data, very few take
            action on that data. Our team of dedicated data specialists is here to ensure your data becomes an asset that
            actively benefits your operations. We collaborate within your current analytics framework or provide
            recommendations for tailored tools, guaranteeing consistent and dependable data delivery for seamless
            consumption every time.
          </p>
          <NuxtLink to="/contact" class="btn-primary btn-lg inline-block">
            Talk with our experts
          </NuxtLink>
        </div>

        <div class="text-center mx-auto md:max-w-3/5 mt-8 lg:mt-16">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-2 md:gap-4 lg:gap-6">
            <template v-for="(card, i) in getDataServiceData.service_data_details">
              <ServiceCtaCard :key="i" :data="card" />
            </template>
          </div>
        </div>


      </div>
    </section>
    <!------------------------------------------------------------------------------------------>



    <!---------------------------- Data details Cards (larg Cards) ------------------------>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">

          <h2 v-in-viewport>{{ getDataServiceData.title }} <span class="bgFill"><span class="textClip">{{ getDataServiceData.animated_word }}</span></span></h2>

          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">
            <template v-for="(card, i) in getDataServiceData.service_data_details">
              <ServiceLargeCard :key="i" :data="card" :button="{ text: `Get in touch`, btnURL: 'isStatic' }" />
            </template>

          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>


    
    <!------------------------------- Get in Touch with us-------------------------------------->
    <section class="lg:py-32 pt-14 lg:pb-0 bgColor-normal-grey">
      <GetInTouchWithUs />
    </section>
    <!------------------------------------------------------------------------------------------>



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
      resolve_relations: 'services-container.services,service_data_details_container.service_data_details',
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
      title: 'Engineering',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ''
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: '',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "",
        },
      ],
    }
  },

  computed: {
    getDataServiceData() {
      return this.story.content.Services_Detailed_Content[0]
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


  },
}
</script>
