<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>

    <PageHeroWithAnimatedTitle :data="{
      title: 'Case',
      animated_word: 'Studies',
      description: `From exploration and consultation to development of scalable software solutions, we provide comprehensive technical services that align with our clients' unique business needs and industry trends.`,
    }" />




    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
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
          hid: 'keywords',
          name: 'keywords',
          content: ''
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
      ],
    }
  },


  computed: {
    getCasesData() {
      return this.allCases
    },
    getTestimonialsData() {
      return this.allTestimonials
    },

  },

  methods: {
    getFeaturedImage(caseStudy) {
      return caseStudy.content.thumbnail
    },
  }



}
</script>
