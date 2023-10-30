<template>
  <div>

    <!---------------------------------------------------------------------------------------------------->
    <IndustriesHeroSection :industries="getIndustriesData" :page="getPageDetails" :button="{
      btnURL: false
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!---------------------------------------------------------------------------------------------------->
    <IndustriesSolutionCardsSection :data="{
      SingleIndustrySolutionData,
      gridlayout: 'four-cols'
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!--------------------------------Our Success Stories---------------------------------------->
    <section v-if="getCaseStudiesData" class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <div class="text-center">
          <h2>{{ getCaseStudiesData.title }}</h2>
        </div>

        <CaseStudiesContainer :data="getCaseStudiesData" />

        <div class="text-center">
          <NuxtLink to="/" class="btn-primary btn-lg mt-16 inline-block ">
            show all cases
          </NuxtLink>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Consult with our Media and Entertainment Industry Expert`,
      btnText: 'Get in touch with us',
      btnURL: '/contact',
      imgSrc: 'expert.png',
      col_1: 'md:col-span-7',
      col_2: 'md:col-span-4',
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!---------------------------------------------------------------------------------------------------->
    <BenefitsOfChoosingVodworks :data="{
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <ArticlesSections :data="{
      getArticlesData,
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->



    <!----------------------------- What Our Clients Say ------------------------------------->
    <Testimonials :data="{
      getTestimonialsData,
      isDarkMode: false
    }" />
    <!----------------------------------------------------------------------------------------->


    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: false
    }" />
    <!----------------------------------------------------------------------------------->


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
      resolve_relations: 'industries-container.industries,testimonial-container.testimonials_list,case-studies-container.case_studies,blog-container.blogs,blog.categories',
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

      SingleIndustrySolutionData: {
        title: "Media & Entertainment Software Development",
        animated_word: "Solutions",
        list: [
          {
            icon: "webcam.svg",
            alt: "webcam icon",

            title: "White-label Video Streaming Apps",
            description: "We create custom video streaming solutions, including branded platforms, tailored to your needs, offering a seamless experience for your customers with user apps and robust content management systems.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "Backend Development.svg",
            alt: "Backend Development icon",

            title: "Custom Enterprise Software",
            description: "We specialise in bespoke enterprise software solutions for global media and entertainment clients, offering end-to-end support from initial contempt to final deployment of your customised software",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "layout-template.svg",
            alt: "layout-template icon",

            title: "End-User Applications",
            description: "Whether it’s new or existing applications, we excel in cross-platform development (mobile, web, TV, and more), delivering immersive, user-friendly experiences with our expertise in product engineering and development.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "network.svg",
            alt: "network icon",

            title: "Backend Application and Infrastructure",
            description: "With our extensive experience in managing millions of concurrent streams, we build technical infrastructure and develop backend applications that guarantee minimal downtime and peak performance, even under heavy user loads.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "user-cog.svg",
            alt: "user-cog icon",

            title: "Recommendation and Personalisation",
            description: "We create advanced content recommendation and personalization services through advanced algorithms and data analysis, leading to higher user engagement and revenue growth for your business",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "file-input.svg",
            alt: "file-input icon",

            title: "Consulting Services",
            description: "We offer trusted consulting with industry insights, technology recommendations, and effective content monetisation strategies for Media and Entertainment businesses, leveraging our expertise",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "shuffle.svg",
            alt: "shuffle icon",

            title: "System Integration",
            description: "As system integrators, we work the best-in-class partners to bring together technologies and systems that enhance the productivity, efficiency, and capacity  of your software products",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "db.svg",
            alt: "Data base icon",

            title: "Data and BI",
            description: "We specialise in data services, helping you access insights for informed decision-making Our expertise ensures seamless, safe and compliant integration of these services into your operations.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          }
        ]
      }
    }
  },
  head() {
    return {
      title: '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '',
        },
      ],
    }
  },
  computed: {
    getPageDetails() {
      return this.story.content
    },
    getIndustriesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'industries-container';
      })
    },
    getCaseStudiesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'case-studies-container';
      })
    },

    getArticlesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'blog-container';
      })
    },
    getTestimonialsData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'testimonial-container';
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
    


  },
}
</script>
