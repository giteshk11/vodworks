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
        <p class="mt-4 lg:text-lg">
          {{ story.content.description }}
        </p>
      </div>
    </section>


    <!-- end hero -->

    <!-- partner program -->
    <section
      class="lg:py-24 py-10 bg-no-repeat bg-center bg-cover"
      :style="resolveBackground('/img/partners/bg_partner.png')"
    >
      <div class="max-w-4/5 mx-auto container">
        <!-- text -->
        <div class="md:w-4/5 mx-auto text-center">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
            {{ story.content.body[0].title }}
          </h2>
          <p class="text-h-gray mt-4 text-lg">
            {{ story.content.body[0].description }}
          </p>
        </div>

        <div
          v-if="getPartnersProgram"
          class="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div
            v-for="(program, index) in getPartnersProgram" :key="index"
          >
            <!-- card -->
            <div class="p-2 pb-4 bgColor-grey rounded-xl text-white text-center hvr-top h-full">
              <!-- image -->
              <div
                class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
                :style="{backgroundImage: `url(${program.content.thumbnail.filename})`}"
              ></div>

              <!-- text -->
              <p class="color-black font-bold text-xl mt-4">{{ program.content.title }}</p>
              <p class="text-h-gray mt-2">
                {{ program.content.description }}
              </p>
            </div>
          </div>

        </div>
      </div>


    </section>
    <!-- end partner program -->

    <!-- current partner -->
    <section
    class="lg:my-24 my-10 max-w-4/5 mx-auto container text-center"
    >

      <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black ">
        {{ story.content.body[1].title }}
      </h2>

      <!-- img -->
      <div
        v-if="getPartnersList"
        class="relative mt-12 overflow-hidden">
        <div class="grid md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center gap-6 partners">
          <div v-for="(logo, index) in getPartnersList" :key="index">
            <a :href="logo.content.partner_url" target="_blank">
              <img
                :src="logo.content.partner_logo.filename"
                class="hvr-top rounded-md"
                :alt="logo.content.partner_logo.alt"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- button -->
      <NuxtLink
          class="inline-block mt-12 py-4 px-6 button-red rounded-md text-white font-bold uppercase"
          :to="story.content.body[1].button_url"
      >
        {{ story.content.body[1].button_txt }}
      </NuxtLink>
    </section>
    <!-- end current partner -->

    <!-- investment -->
    <section
      :style="resolveBackground('/img/product-bg.jpg')"
      class="lg:py-24 py-10 bg-no-repeat bg-center bg-cover"
    >
      <div class="text-white text-center mx-auto max-w-4/5">
        <!-- text -->
        <div class="mx-auto max-w-4/5 text-center px-6 lg:px-0">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">
            {{ story.content.body[2].title }}
          </h2>
          <p class="mt-4 lg:text-lg opacity-80">
            {{ story.content.body[2].description }}
          </p>
        </div>

        <!-- card -->
        <div
          v-if="getInvestmentAndImpact"
          class="pt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- card -->
          <div v-for="(project, index) in getInvestmentAndImpact" :key="index">
            <a
              :href="project.content.url"
              target="_blank"
            >
              <div class="p-2 pb-4 bg-b-dark-gray rounded-xl text-white text-center hvr-top h-full">
                <!-- image -->
                <div
                  class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
                  :style="{ backgroundImage: `url(${project.content.thumbnail.filename})` }"
                ></div>

                <!-- text -->
                <p class="text-white text-center mt-4 font-bold text-xl">{{ project.content.title }}</p>
                <p class="opacity-80 mt-2">
                  {{ project.content.description }}
                </p>
              </div>
            </a>
          </div>

        </div>

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
      resolve_relations: 'partner-program-container.programs,current-partners-container.partner,investments-impact-container.projects',
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
      title: 'Be our partner to reach a wider customer base.\n',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We are passionate about technology and are open to working with other companies to resell their products, develop together, build teams and provide investments.' ,
        },
      ],
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
  computed: {
    getPartnersProgram(){
      return this.story.content.body[0].programs
    },
    getPartnersList(){
      return this.story.content.body[1].partner
    },
    getInvestmentAndImpact(){
      return this.story.content.body[2].projects
    }
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  },
}
</script>

<style>

.partners img{
  border: 1px solid #e9e9e9;
  filter: grayscale(100%);
  padding: 1rem;
}
.partners{
  padding: 16px 0;
}
.partners img:hover{
  filter: grayscale(0%);
}
</style>
