<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>

    <!-----------------------------------HERO-------------------------------------------->
    <PageHeroWithAnimatedTitle :data="{
      title: 'Case',
      animated_word: 'Studies',
      description: `From exploration and consultation to development of scalable software solutions, we provide comprehensive technical services that align with our clients' unique business needs and industry trends.`,
    }" />
    <!----------------------------------------------------------------------------------->


    <!---------------------------Case Studies Listing------------------------------------------>
    <div class="lg:py-32 py-14 bgColor-normal-grey">

      <div class="mx-auto container">

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-8 w-full mx-auto lg:w-4/5">

          <article v-for="(caseStudy, i) in publishedCaseStudies" :key="i"
            class="zoom-in overflow-hidden cursor-pointer mb-8" @click="gotoSingleCaseStudy(caseStudy.slug)">
            <div v-if="getFeaturedImage(caseStudy)" class="blog-thumbnail-wrapper">
              <img :src="getFeaturedImage(caseStudy).filename" class="scaleable-img"
                :alt="getFeaturedImage(caseStudy).alt" />
            </div>
            <div class="article-content">
              <h4 class="line-clamp-2 mt-4">
                {{ caseStudy.content.title }}
              </h4>
              <p class="line-clamp-3 mt-2">{{ caseStudy.content.description }}</p>
              <p class="btn-text mt-4 inline-block">Read More</p>
            </div>
          </article>
        </div>

      </div>

    </div>
    <!----------------------------------------------------------------------------------->

    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: false
    }
      " />
    <!----------------------------------------------------------------------------------->

  </div>
</template>

<script>

export default {

  async asyncData(context) {
    // const path = context.route.path === '/' ? '/home' : context.route.path
    const [allCasesRes, allTestimonialsRes] = await Promise.all([

      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'cases/',
        resolve_relations: 'case-studies-container.case_studies',
      }),

      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'testimonials/',
        resolve_relations: 'testimonial-container.testimonials_list',
      }),

    ])
    return {
      allCases: allCasesRes.data,
      allTestimonials: allTestimonialsRes.data,
    }

  },


  data() {
    return { story: { content: {} } }
  },


  head() {
    return {
      title: 'Software Development Case Studies | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Explore Vodworks case studies in various industries from Media & Entertainment and Telecommunications to Web3 and FinTech.",
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Software Development Case Studies | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Explore Vodworks case studies in various industries from Media & Entertainment and Telecommunications to Web3 and FinTech.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.allCases.stories[0].content.thumbnail.filename}`,
        },
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.allCases.stories[0].content.thumbnail.filename}`,
        },

      ],
    }
  },


  computed: {
    // getCasesData() {
    //   return this.allCases
    // },
    publishedCaseStudies() {
      return this.allCases.stories.filter(
        (story) => story.content.is_published_on_production
      );
    },
    getTestimonialsData() {
      return this.allTestimonials
    },

  },

  methods: {
    getFeaturedImage(caseStudy) {
      return caseStudy.content.thumbnail
    },

    gotoSingleCaseStudy(slug) {
      this.$router.push({
        path: '/cases/' + slug + '/',
      })
    },

  }



}
</script>
