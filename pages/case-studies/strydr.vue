<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    
    <!-----------  Hero section ---------------------------->
    <section v-if="getSingleCsHero" class="single-cs bgColor-tertiary-black color-white">

      <div class="hero">
        <div class="grid items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-0 md:gap-8">
          <div class="py-8 lg:py-4 order-2 lg:order-1 content">

            <div class="cs-title md:w-4/5" v-html="$md.render(getSingleCsHero.cs_name)"></div>

          </div>
          <div class="order-1 lg:order-2">
            <img class="w-full" :src="getSingleCsHero.hero_featured_image.filename"
              :alt="getSingleCsHero.hero_featured_image.alt" />
          </div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------->

    <!------------- Section 12 cols with Grey background ---------------------------->
    <section v-if="Section12ColsWithGreyBackground" class="single-cs lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="md:max-w-4/5 mx-auto">
          <div class="text-center">
            <h2>{{ Section12ColsWithGreyBackground.title }}</h2>
          </div>
          <div v-html="$md.render(Section12ColsWithGreyBackground.description)">
          </div>
        </div>
      </div>

    </section>
    <!----------------------------------------------------------------------------->

    <!------------- Featured Section Blue and White 0 --------------------------------------->
    <section v-if="FeaturedSectionBlueAndWhite_0" class="single-cs">
      <div class="mx-auto ">
        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto">
          <div class="bgColor-tertiary-black color-white p-8 left-full-box h-full">
            <div class="">
              <h2>{{ FeaturedSectionBlueAndWhite_0.title_1 }}</h2>
              <div v-html="$md.render(FeaturedSectionBlueAndWhite_0.description_1)">
              </div>
            </div>
          </div>
          <div class="p-8 right-full-box">
            <h2>{{ FeaturedSectionBlueAndWhite_0.title_2 }}</h2>
            <div v-html="$md.render(FeaturedSectionBlueAndWhite_0.description_2)">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!--------------Challenge --------------------------------------->
    <section v-if="getSingleCsChallenge" class="single-cs lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="md:max-w-4/5 mx-auto">
          <div class="text-center">
            <h2>{{ getSingleCsChallenge.title }}</h2>
          </div>

          <div v-html="$md.render(getSingleCsChallenge.description)">
          </div>

        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!-------------- Featured Dark Section -------------------------------------->
    <section v-if="getSingleCsFullWidthDarkSection" class="single-cs lg:py-32 py-14 bgColor-tertiary-black">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-1 xl:grid-cols-1 items-center mx-auto">
          <div class="md:max-w-4/5 mx-auto color-white">

            <div class="text-center">
              <h2>{{ getSingleCsFullWidthDarkSection.title }}</h2>
            </div>

            <div v-html="$md.render(getSingleCsFullWidthDarkSection.description)">
            </div>

          </div>

        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!---------------Featured Image 2---------------------------------------->
    <section v-if="getSingleCsFeaturedImage2" class="single-cs">
      <img class="w-full" :src="getSingleCsFeaturedImage2.image.filename" :alt="getSingleCsFeaturedImage2.image.alt" />
    </section>
    <!----------------------------------------------------------------------------------->

    <!--------------- Features  --------------------------------------->
    <section v-if="getSingleCsFeatures" class="single-cs lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="md:max-w-4/5 mx-auto">
          <div class="text-center">
            <h2 v-in-viewport><span class="bgFill"><span class="textClip">{{ getSingleCsFeatures.title }}</span></span>
            </h2>
          </div>

          <div v-html="$md.render(getSingleCsFeatures.description)"> </div>

        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!---------------  Results and IMage -------------------------------------->
    <section v-if="getSingleCsFeaturedTextPlusImage" class="single-cs bgColor-tertiary-black color-white">

      <div class="hero">
        <div class="grid items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-0 md:gap-8">
          <div class="py-8 lg:py-4 order-2 lg:order-1 content">

            <h2>{{ getSingleCsFeaturedTextPlusImage.title }}</h2>
            <div class="white-box" v-html="$md.render(getSingleCsFeaturedTextPlusImage.description)"></div>

          </div>
          <div class="order-1 lg:order-2">
            <img class="w-full" :src="getSingleCsFeaturedTextPlusImage.featured_image.filename"
              :alt="getSingleCsFeaturedTextPlusImage.featured_image.alt" />
          </div>
        </div>
      </div>
    </section>

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


  data() {
    return { story: { content: {} } }
  },


  computed: {

    // Hero
    getSingleCsHero() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-hero';
      })
    },

    // Section 8 by 4 cols with whit background
    Section8by4ColsWithGreyBackground() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-section-eight-by-four-with-grey-bg';
      })
    },

    // Section 12 cols with white background
    Section12ColsWithGreyBackground() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-section-12-cols-with-grey-bg';
      })
    },

    //  Featured section blue and white 0
    FeaturedSectionBlueAndWhite_0() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-featured-section-blue-and-white-0';
      })
    },

    // Featured Image 1
    getSingleCsFeaturedImage1() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-featured-image-1';
      })
    },

    // Challenge
    getSingleCsChallenge() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-challenge';
      })
    },


    //  Featured section blue and white 1
    FeaturedSectionBlueAndWhite_1() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-featured-section-blue-and-white-1';
      })
    },

    // Full Width Dark Section
    getSingleCsFullWidthDarkSection() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-full-width-dark-section';
      })
    },

    // Full Width White Background
    getSingleCsFullWidthWhiteBackground() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-full-width-white-bg';
      })
    },

    // Featured Image 2
    getSingleCsFeaturedImage2() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-featured-image-2';
      })
    },

    // Features
    getSingleCsFeatures() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-features';
      })
    },

    // Results And Review
    getSingleCsResultsAndReview() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-results-and-review';
      })
    },

    getSingleCsFeaturedTextPlusImage() {
      return this.story.content.cs_full_details.find(function (obj) {
        return obj.component === 'single-cs-featured-text-plus-image';
      })
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
}

</script>