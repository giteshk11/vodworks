<template>
  <div>


    <IndustriesHeroSection :industries="getIndustriesData" :page="getPageDetails" :button="{
      btnURL: false
    }" />


    <!---------------------------------------------------------------------------------------------------->
    <IndustriesSolutionCardsSection :data="{
      SingleIndustrySolutionData,
      gridlayout: 'three-cols'
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
      title: `Talk to our Telecom Industry Expert`,
      btnText: 'Get in touch with us',
      btnURL: '/contact',
      imgSrc: 'expert.png',
      col_1: 'md:col-span-8',
      col_2: 'md:col-span-3',
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <div class="bgColor-normal-grey">
      <ArticlesSections :data="{
      getArticlesData,
      isDarkMode: false
    }" />
    </div>


    <!----------------------------- What Our Clients Say ------------------------------------->
    <Testimonials :data="{
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->



    <!----------------------------------------------------------------------------------------->
    <AboutVodworks :data="{
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
        title: "Telecom Software Development Solutions",
        animated_word: "We Offer",
        list: [
          {
            icon: "webcam.svg",
            alt: "",

            title: "Technical and Monetisation Consulting",
            description: "We provide reliable consultancy services, using our expertise to offer valuable industry insights, technology recommendations, and successful monetisation strategies tailored to telecom companies",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Custom Enterprise Software",
            description: "We specialise in building customised enterprise software solutions for telecom clients worldwide, delivering comprehensive support from the initial concept to the ultimate deployment of your tailored software",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Video Platform Building",
            description: "Our expertise is in building top-tier video platforms designed for scalable streaming and content monetisation, ensuring the best experience for your users while at the same time ensuring more revenue for your business",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Content Distribution Software",
            description: "We build end-to-end customised software for telecom clients to facilitate efficient and effective digital content delivery and enhance end-user experience.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Data and BI Solutions",
            description: "We provide reliable data services, enabling you to access insights for better decision-making. We handle both large and small data sets, ensuring smooth, secure, and compliant use of data across your operations",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Web3 Strategy and Implementation",
            description: "We delve into and incorporate web3 technologies into telecom businesses, providing you with the opportunity to engage with and monetize your users through the next generation of interactions",

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
  
