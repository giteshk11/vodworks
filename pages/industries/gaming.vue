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



    <!--------------------------------Our Success Stories---------------------------------->
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
    <!----------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Consult with our Gaming Industry Expert!`,
      btnText: 'Get in touch',
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

    
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
        <div class="mx-auto container">

            <div class="text-center mx-auto md:max-w-3/5 ">
                <h2 class="color-white">Why Vodworks as your Gaming Development Partner?</h2>
            </div>
            <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16">
                <div>
                    <p class="mb-4 lg:mb-6 text-big color-white">Our comprehensive set of software solutions for gaming, combined with our commitment to driving innovation and delivering value to our clients, makes Vodworks your ultimate gaming development partner.
                    </p>
                    <p class="text-big color-white">
                      Our comprehensive set of software solutions for gaming, combined with our commitment to driving innovation and delivering value to our clients, makes Vodworks your ultimate gaming development partner.
                    </p>
                </div>
                <div>
                    <div class="zoom-in overflow-hidden">
                        <img class="w-full" src="~/assets/img/dev-partner.jpg" alt="Development Partner" />
                    </div>
                </div>

            </div>
        </div>
    </section>



    <!--------------------------------------FAQs-------------------------------------------------->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-3/5">
          <div class="text-center">
            <h2 v-in-viewport>{{ FaqsData.title }} <span class="bgFill"><span class="textClip">{{
              FaqsData.animated_word }}</span></span></h2>

          </div>
          <div class="mt-8 lg:mt-16">
            <Accordion :payload="FaqsData" />
          </div>
        </div>

      </div>
    </section>
    <!---------------------------------------------------------------------------------------------------->




    <!----------------------------- What Our Clients Say ------------------------------------->
    <Testimonials :data="{
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->


    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: true
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
        title: "Our Software Solutions for",
        animated_word: "Gaming",
        list: [
          {
            icon: "layers.svg",
            alt: "layers icon",

            title: "Enterprise Gaming Infrastructure",
            description: "We seamlessly incorporate enterprise gaming infrastructure into your business, ensuring it aligns with your overarching architecture, is optimised for performance, and improves your customers' experiences.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "shrink.svg",
            alt: "shrink icon",

            title: "Gaming DevOps and Scalability",
            description: "We help your business build and implement scalable software infrastructure to handle mass concurrent users while reducing costs",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "star.svg",
            alt: "star icon",

            title: "Game Design",
            description: "We recognize the vital role of UX and UI design in shaping immersive gaming. Our skilled designers create intuitive, captivating interfaces to boost gamer engagement and retention.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "rocket.svg",
            alt: "rocket icon",

            title: "Game Development",
            description: "We work closely with your team to conceive, strategize, and meticulously documet game designs, ensuring thorough consideration of every aspect of the gaming experience",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "db.svg",
            alt: "db icon",

            title: "Data and BI Solutions",
            description: "We deliver secure, compliant, and optimised gaming data service, giving your business access to invaluable insights for operational improvements and better decision making",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "gamepad.svg",
            alt: "Gamepad icon",

            title: "Web3 Gaming Integration",
            description: "We transform your web2 economies for seamless integration with web3 technologies, enabling your business to harness the opportunities in the web3 landscape",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },

        ]
      },

      FaqsData: {
        title: "Gaming Software",
        animated_word: "FAQ",
        faqs: [
          {
            id: "1",
            isOpen: false,
            question: "Is on-demand developer availability among your offerings in software development?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "2",
            isOpen: false,
            question: "Are we able to vet the developers before we take them on-board?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "3",
            isOpen: false,
            question: "How do you manage and accommodate change requests in software development?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "4",
            isOpen: false,
            question: "Who owns the IP of my application code/will I own the source code?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "5",
            isOpen: false,
            question: "How do you handle different timezones?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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

    getArticlesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'blog-container';
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