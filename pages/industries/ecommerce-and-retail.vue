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


    <FeaturedDetailedCtaSection :data="benefits" />


    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="lg:w-3/4 mx-auto">
          <div class="text-center">
            <h2>FAQ About Retail & Ecommerce Software
                  Development</h2>
          </div>

          <div class=" grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mx-auto gap-1 mt-8 lg:mt-16">
            <div>
              <Accordion />
            </div>
          </div>

        </div>



      </div>
    </section>



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
      resolve_relations: 'industries-container.industries,testimonial-container.testimonials_list,case-studies-container.case_studies',
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
            alt: "",

            title: "Platform Implementation",
            description: "We select and implement the best eCommerce platform for your business, with focus on driving revenue growth and improving online customer engagement. We also provide ongoing support and security measures to ensure continued success and compliance with industry standards",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Custom Enterprise Solutions",
            description: "We build custom enterprise solutions for eCommerce and retail, whether you require an end-user application or internal business tool. Our solutions are designed to meet your needs, optimising efficiency and improving customer experience",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Custom Loyalty Applications",
            description: "With strong knowledge and experience in loyalty applications and gamification, our team creates engaging solutions that will help drive your customer loyalty and build lasting engagement.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "System Integration",
            description: "We provide end-to-end system integration services, seamlessly integrating various software and systems to ensure smooth data flow, process automation and improving operational efficiency of your eCommerce and retail business",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Web3 Asset Management and Monetisation",
            description: "By leveraging the power of web3 technology, we build solutions for businesses to manage and monetise your digital assets, driving innovation and revenue growth",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Data and BI Solutions",
            description: "We provide secure, compliant, and optimised data services for eCommerce and retail players, offering your business invaluable insights to enhance operations and make informed decisions.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          }
        ]
      },
      benefits: {
        title: "Get in Touch with Our Team",

        list: [
          {
            intial_title: 'Stay competitive',
            remaning_title: "by leveraging our specialised knowledge"
          },
          {
            intial_title: 'Reduce development time and cost',
            remaning_title: "by avoiding the hiring overhead "
          },
          {
            intial_title: 'Build scalable, adaptable software',
            remaning_title: "that meets your evolving business needs"
          },
        ]
      },
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
    getTestimonialsData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'testimonial-container';
      })
    },
    getCaseStudiesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'case-studies-container';
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