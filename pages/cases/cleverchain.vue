te<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <!-----------  Hero section --------------------------------------------------->
    <CsHero :data="{
      content: getSingleCsHero,
      hasMorePadding: false,
    }" />
    <!----------------------------------------------------------------------------->

    <!-------------- Brief ----------------------------------------------------->
    <CsBrief :data="Brief" />
    <!----------------------------------------------------------------------------------->

    <!-------------- Featured Image------------------------------------------------------>
    <CsFeaturedImage :data="getSingleCsFeaturedImage" />
    <!----------------------------------------------------------------------------------->

    <!--------------- Approach  --------------------------------------->
    <section v-if="Approach" class="single-cs lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="">
          <div class="text-center md:max-w-4/5 mx-auto">
            <h2 v-in-viewport.once><span class="bgFill"><span class="textClip">{{ Approach.title }}</span></span>
            </h2>
            <div class="mt-8 lg:mt-16 text-center" v-html="$md.render(Approach.description)"> </div>
          </div>

          <!-- Development Lifecycle -->
          <div
            class="bg-no-repeat dev_life_cycle grid lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-auto mt-8 lg:mt-16">
            <template v-for="card, i in Approach.cards">
              <div :key="i" class="default-card card-utilities hvr-effect overflow-visible">
                <img class="card-icon hvr-top lazyload" :src="card.icon.filename" :alt="card.icon.alt" />
                <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h3>
                <div class="text-card flex-grow-1" v-html="$md.render(card.description)"></div>
              </div>
            </template>
          </div>
        </div>
        
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!----------------------------------Team--------------------------------------------->
    <CsTeam :data="{
      content: Team,
      layout: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
    }" />
    <!----------------------------------------------------------------------------------->

    <!---------------  Technical Stack -------------------------------------------------->
    <CsTechStack :data="{
      content: TechnicalStack,
      layout: 'cols-5',
    }" />
    <!----------------------------------------------------------------------------------->


    <!----------------------------------Services We Provided----------------------------->
    <CsServicesWeProvide :data="{
      content: ServicesWeProvided,
      layout: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'
    }" />
    <!----------------------------------------------------------------------------------->

    <!---------------  Outcome -------------------------------------->
    <section v-if="Outcome" class="lg:py-32 py-14 single-cs bgColor-tertiary-black">
      <div class="outcome mx-auto container">

        <div class="text-center">
          <h2 v-in-viewport.once><span class="bgFill"><span class="textClip color-white">{{ Outcome.title
                }}</span></span>
          </h2>
        </div>

        <div class="bgColor-white px-4 py-4 lg:px-8 lg:py-8 rounded-md mt-8 lg:mt-16">
          <div class="awards-logos flex flex-wrap gap-8 justify-between">
            <template v-for="card, i in Outcome.cards">
              <div :key="i" class="item flex items-center justify-center">
                <img :src="card.image.filename" :alt="card.image.alt" />
              </div>
            </template>
          </div>
        </div>
      </div>

    </section>
    <!----------------------------------------------------------------------------------->

    <!--------------- Features  --------------------------------------->
    <CsFeatures :data="Features" />
    <!----------------------------------------------------------------->

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: false
    }" />
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
      resolve_relations: 'case-studies-container.case_studies,case_studies.case-study,case-studies-container.case-study,faqs-container.list_of_faqs',
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


  head() {
    return {
      title: `${this.story.content.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.story.content.description}`,
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.story.content.title}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `${this.story.content.description}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.story.content.thumbnail.filename}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `/${this.story.full_slug}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.story.content.thumbnail.filename}`,
        },

      ],
    }
  },


  computed: {
    getSingleCsHero() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-hero';
      })
    },
    getSingleCsFeaturedImage() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-fw-featured-image';
      })
    },
    Brief() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-fw-brief';
      })
    },
    Approach() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-approach_with_cards';
      })
    },
    TechnicalStack() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-technical-stack';
      })
    },
    Team() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs_team';
      })
    },
    ServicesWeProvided() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'services_we_provided';
      })
    },
    Review() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-review';
      })
    },

    FullWidthWhiteBgSection() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-full-width-white-bg';
      })
    },

    Features() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs_features';
      })
    },

    Outcome() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'cs-outcome';
      })
    },

    FAQs() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'faqs-container';
      })
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
  }

}

</script>