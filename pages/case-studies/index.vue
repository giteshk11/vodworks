<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>

    <PageHeroWithAnimatedTitle :data="{
      title: 'Case',
      animated_word: 'Studies',
      description: `From exploration and consultation to development of scalable software solutions, we provide comprehensive technical services that align with our clients' unique business needs and industry trends.`,
    }" />



    <section class="lg:py-32 py-14 bgColor-normal-grey">

      <div class="mx-auto container">

        <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 lg:gap-8 mt-8 lg:mt-16">
          <div class="md:col-span-12 articles mx-auto max-w-3/4">
            <div class="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-8">
              <template v-for="(caseStudy, i) in getCasesData.stories">
                <article :key="i" class="zoom-in overflow-hidden cursor-pointer mb-8">
                  <div v-if="getFeaturedImage(caseStudy)" class="blog-thumbnail-wrapper ">
                    <img :src="getFeaturedImage(caseStudy).filename" class="scaleable-img"
                      :alt="getFeaturedImage(caseStudy).alt" />
                  </div>
                  <div class="article-content">
                    <h4 class="line-clamp-2 mt-4">
                      {{ caseStudy.content.title }}
                    </h4>
                    <p class="btn-text mt-4 inline-block">Read More</p>
                  </div>
                </article>
              </template>
            </div>
          </div>
        </div>

      </div>

    </section>





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
      title: 'Read our exclusive collection of the latest tools, ideas, technologies, and innovations. ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Browse through to read our compilation of articles on startups, Agile best practices,  NFTs, blockchain, Artificial Intelligence (AI), Business Intelligence, and the Internet of Things (IoT).',
        },
      ]
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
