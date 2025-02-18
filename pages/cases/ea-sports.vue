te<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <!-----------  Hero section --------------------------------------------------->
    <CsHero :data="{
      content: getSingleCsHero,
      hasMorePadding: true,
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
        <div class="md:max-w-4/5 mx-auto">
          <div class="text-center">
            <h2 v-in-viewport.once><span class="bgFill"><span class="textClip">{{ Approach.title }}</span></span>
            </h2>
          </div>
          <div class="mt-8 lg:mt-16" v-html="$md.render(Approach.description)"> </div>
          <div :style="resolveBackground('/img/border-design.svg')"
            class="bg-no-repeat approach grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto mt-12 lg:mt-24">
            <template v-for="card, i in Approach.cards">
              <div :key="i" class="approach-card">
                <img :src="card.icon.filename" alt="icon" />
                <h3 class="my-4">{{ card.title }}</h3>
                <div class="my-auto" v-html="$md.render(card.description)"></div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
      
    <!----------------------------------------------------------------------------------->

    <!---------------  Technical Stack -------------------------------------------------->
    <CsTechStack :data="{
      content: TechnicalStack,
      layout: 'cols-4',
    }" />
    <!----------------------------------------------------------------------------------->

    <!----------------------------------Services We Provided----------------------------->
    <CsServicesWeProvide :data="{
      content: ServicesWeProvided,
      layout: 'md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'
    }"/>
    <!----------------------------------------------------------------------------------->

    <!---------------  Review -------------------------------------->
    <CsReview :data="Review" />
    <!----------------------------------------------------------------------------------->

    <!--------------- Features  --------------------------------------->
    <CsFeatures :data="{
      Features,
      layout: 'center-two-ele-in-grid'
    }" />
    <!----------------------------------------------------------------->

    <!---------------  Outcome -------------------------------------->
    <section v-if="Outcome" class="lg:py-32 py-14 single-cs bgColor-tertiary-black">
      <div class="outcome mx-auto container">
        <div class="md:max-w-4/5 mx-auto">
          <div class="text-center">
            <h2 v-in-viewport.once><span class="bgFill"><span class="textClip color-white">{{ Outcome.title
                  }}</span></span>
            </h2>
          </div>
          <ul class=" lg:pt-16 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-4">
            <template v-for="card, i in Outcome.cards">
              <li :key="i">
                <h4 class="color-primary-red">{{ card.title }}</h4>
                <div class="color-white" v-html="$md.render(card.description)"> </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
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
      resolve_relations: 'case-studies-container.case_studies,case_studies.case-study,case-studies-container.case-study',
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