<template>
  <div>

    <!-- Hero -->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Vodworks Software Development Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">From exploration and consultation to development of
            scalable software solutions, we provide comprehensive technical services that align with your unique business
            needs.
          </p>

          <NuxtLink to="/contact" class="btn-primary btn-lg inline-block">
            Discuss your project
          </NuxtLink>

        </div>


        <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">



          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6">

            <template v-for="(card, i) in getServicesData.services">

              <div :key="i" v-scroll-to="'#' + `${card.content.scrollToID}`" class="cta-card">

                <img :src="card.content.icon_light.filename" :alt="card.content.icon_light.alt" />
                <p class="text-card mt-3 color-white">
                  {{ card.content.title }}
                </p>

              </div>

            </template>

          </div>

        </div>

      </div>
    </section>

    <!-- Services details Cards (larg Cards) -->
    <section v-if="getServicesData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2>End-to-end Software Development <span class="styled-text">Services</span></h2>

          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">

            <template v-for="(card, i) in getServicesData.services">
              <div :id="card.content.scrollToID" :key="i"
                class="default-card card-utilities hvr-effect text-left mb-4 lg:mb-10">
                <div class="grid lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-4">

                  <div>
                    <div class="flex gap-4 items-center">
                      <img :src="card.content.icon_colored.filename" :alt="card.content.icon_colored.alt" />
                      <h3>{{ card.content.title }}</h3>
                    </div>
                    <p class="text-card mt-6">{{ card.content.description }}</p>
                    <p class="text-card my-4">{{ card.content.services_list_title }}</p>

                    <!-- eslint-disable vue/no-v-html -->
                    <div class="text-card rendered-list" v-html="$md.render(card.content.list)"></div>

                    <NuxtLink :to="card.slug" class="btn-text mt-8 inline-block">
                      Read More
                    </NuxtLink>
                  </div>

                  <div class="hidden lg:inline-block">
                    <img class="w-full" :src="card.content.thumbnail.filename" :alt="card.content.thumbnail.alt" />
                  </div>

                </div>
              </div>
            </template>

          </div>
        </div>
      </div>
    </section>

    <!-- Tools and Technologies we use -->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center mx-auto md:max-w-3/5">
          <h2 class="color-white">Tools and Technologies we use</h2>
          <p class="mt-4 lg:mt-8 text-big color-white">Our team at Vodworks has knowledge and experience
            with a broad range of tools and technologies. Based on your project's unique requirements, we will carefully
            select the appropriate tools and tech stack to ensure we deliver on time and within budget.
          </p>
        </div>


        <div class="flex flex-col md:flex-row justify-between mx-auto md:max-w-4/5  mt-8 lg:mt-16">


          <template v-for="(tech, i) in tools_and_techs.techs">

            <div :key="i" class="tools_and_techs text-center mb-8 md:mb-0">
              <p class="styled-text font-semibold inline-block">{{ tech.title }}</p>

              <div class="techs-stacks mt-8 md:mt-0">
                <template v-for="(logo, index) in tech.list">
                  <img :key="index" class="mx-auto md:my-10"
                    :src="`${require('~/assets/img/technologies/' + logo.image)}`" :alt="logo.alt" />
                </template>
              </div>

            </div>

          </template>

        </div>

      </div>
    </section>


    <!--CTA with Image-->
    <section>
      <div class="mx-auto max-w-4/5 container">


        <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0 text-center md:text-left">

          <div class="py-12 md:col-span-5">
            <h2 class="heading-1">Discuss your project's future</h2>
            <NuxtLink to="/contact" class="btn-primary inline-block btn-lg mt-8 lg:mt-16">
              Get in touch with us
            </NuxtLink>
          </div>

          <div class="relative md:col-span-7">
            <img class="w-full cta-team-pic" src="~/assets/img/team.png" alt="" />

          </div>

        </div>
      </div>
    </section>

    <!-- What Our Clients Say -->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 class="">What Our Clients <span class="styled-text">Say</span></h2>
        </div>
      </div>

      <div class="mt-8 lg:mt-16">
        <VueSlickCarousel class="center-slider" v-bind="testimonials_configs">

          <div class="card-utilities hvr-effect testimonial-card px-6 lg:px-10 py-10 lg:py-10">

            <div class="flex gap-4 flex-wrap md:flex-nowrap">

              <div class="review-card lg:col-span-2 flex gap-4 ">

                <div class="client-avatar-wrapper">
                  <img src="~assets/img/client.jpg" alt="" />
                </div>

                <!-- show on small devices -->
                <p class="text-regular font-medium color-primary-red inline-block md:hidden visible md:invisible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span>
                </p>

              </div>

              <div class="lg:col-span-10 mt-4 md:mt-0">
                <p class="text-regular font-medium color-primary-black">The night is dark and full of terrors. What is
                  dead may never die. And now his watch is ended. All men must die.</p>

                <!-- Hide on small devices -->
                <p
                  class="text-regular font-medium md:mt-8 color-primary-red  hidden md:inline-block invisible md:visible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span>
                </p>
              </div>

            </div>
          </div>

          <div class="card-utilities hvr-effect testimonial-card px-6 lg:px-10 py-10 lg:py-10">

            <div class="flex gap-4 flex-wrap md:flex-nowrap">

              <div class="review-card lg:col-span-2 flex gap-4 ">

                <div class="client-avatar-wrapper">
                  <img src="~assets/img/client.jpg" alt="" />
                </div>

                <!-- show on small devices -->
                <p class="text-regular font-medium color-primary-red inline-block md:hidden visible md:invisible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span>
                </p>

              </div>

              <div class="lg:col-span-10 mt-4 md:mt-0">
                <p class="text-regular font-medium color-primary-black">The night is dark and full of terrors. What is
                  dead may never die. And now his watch is ended. All men must die.</p>

                <!-- Hide on small devices -->
                <p
                  class="text-regular font-medium md:mt-8 color-primary-red  hidden md:inline-block invisible md:visible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span>
                </p>
              </div>

            </div>
          </div>

          <div class="card-utilities hvr-effect testimonial-card px-6 lg:px-10 py-10 lg:py-10">

            <div class="flex gap-4 flex-wrap md:flex-nowrap">

              <div class="review-card lg:col-span-2 flex gap-4 ">

                <div class="client-avatar-wrapper">
                  <img src="~assets/img/client.jpg" alt="" />
                </div>

                <!-- show on small devices -->
                <p class="text-regular font-medium color-primary-red inline-block md:hidden visible md:invisible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span>
                </p>

              </div>

              <div class="lg:col-span-10 mt-4 md:mt-0">
                <p class="text-regular font-medium color-primary-black">The night is dark and full of terrors. What is
                  dead may never die. And now his watch is ended. All men must die.</p>

                <!-- Hide on small devices -->
                <p
                  class="text-regular font-medium md:mt-8 color-primary-red  hidden md:inline-block invisible md:visible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span>
                </p>
              </div>

            </div>
          </div>



        </VueSlickCarousel>
      </div>

    </section>

    <!--  Meet our Vodworks team -->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2 class="color-white">Meet our Vodworks team</h2>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16">

          <div>
            <p class="mb-4 lg:mb-6 text-big color-white">We're an international team of around 200 passionate individuals,
              including over 150 expert developers. Operating from offices spanning the globe, our major hubs are
              strategically located in Ukraine, Pakistan, and Cambodia.
            </p>
            <p class="text-big color-white">
              Our mission is simple yet profound: we aim to revolutionise the world by building technology that improves
              lives and safeguards the planet. What sets us apart is our commitment to authenticity and embracing
              innovation without any pretense. We take pride in our inclusive team, working as one across departments,
              countries, cultures, and clients. With a true customer-centric approach, we're not just developers, but
              partners in your software success.
            </p>
          </div>
          <div>
            <img class="w-full" src="~/assets/img/service-img.jpg" alt="" />
          </div>

        </div>

        <div class="text-center">
          <NuxtLink to="/contact" class="btn-primary btn-lg  mt-16 inline-block">
            Discuss your project
          </NuxtLink>
        </div>






      </div>
    </section>

    <!-- Get in Touch with us-->
    <section class="lg:py-32 pt-14 lg:pb-0 bgColor-normal-grey">
      <GetInTouchWithUs />
    </section>

  </div>
</template>

<script>


import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import GetInTouchWithUs from '~/components/Sections/GetInTouchWithUs.vue'




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
      resolve_relations: 'services-container.services',
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

  components: {
    GetInTouchWithUs,
    VueSlickCarousel
  },

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
      // count: 0,
      // vertClientSlider: {},
      // horzClientSlider: {},
      // relativeClientSlide: 0,
      story: { content: {} },

      testimonials_configs: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerPadding: '24%',
        speed: 1000,
        infinite: true,
        autoplay: false,


        responsive: [

          {
            breakpoint: 1024,
            settings: {
              centerPadding: '12%',
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerPadding: '0%',
            },
          },
        ],


      },


      tools_and_techs: {
        title: "Tools and Technologies we use",
        description: "Our team at Vodworks has knowledge and experience with a broad range of tools and technologies. Based on your project's unique requirements, we  will carefully select the appropriate tools and tech stack to ensure we deliver on time and within budget.",

        techs: [
          // Mobile
          {
            title: "Mobile",
            list: [
              {
                image: "mobile/ios.svg",
                alt: "Tech-paltform",
              },
              {
                image: "mobile/react-native.svg",
                alt: "Tech-paltform",
              },
              {
                image: "mobile/android.svg",
                alt: "Tech-paltform",
              },
              {
                image: "mobile/flutter-dev.svg",
                alt: "Tech-paltform",
              },
            ]
          },
          // Front-End
          {
            title: "Front-End",
            list: [
              {
                image: "frontend/reactjs.svg",
                alt: "Tech-paltform",
              },
              {
                image: "frontend/angular.svg",
                alt: "Tech-paltform",
              },
              {
                image: "frontend/eleventy.svg",
                alt: "Tech-paltform",
              },
              {
                image: "frontend/nuxtjs.svg",
                alt: "Tech-paltform",
              },
            ]
          },

          // Backend
          {
            title: "Backend",
            list: [
              {
                image: "backend/dot-net.svg",
                alt: "Tech-paltform",
              },
              {
                image: "backend/java.svg",
                alt: "Tech-paltform",
              },
              {
                image: "backend/php.svg",
                alt: "Tech-paltform",
              },
              {
                image: "backend/node_js.svg",
                alt: "Tech-paltform",
              },
              {
                image: "backend/go.svg",
                alt: "Tech-paltform",
              },
            ]
          },
          // Database
          {
            title: "Database",
            list: [
              {
                image: "database/cassandra.svg",
                alt: "Tech-paltform",
              },
              {
                image: "database/mongoDB.svg",
                alt: "Tech-paltform",
              },
              {
                image: "database/mySQL.svg",
                alt: "Tech-paltform",
              },
              {
                image: "database/elephantDB.svg",
                alt: "Tech-paltform",
              },
              {
                image: "database/SQLserver.svg",
                alt: "Tech-paltform",
              },
            ]
          },

          // Platforms
          {
            title: "Platform",
            list: [
              {
                image: "platform/spotify.svg",
                alt: "Tech-paltform",
              },
              {
                image: "platform/set.svg",
                alt: "Tech-paltform",
              },
              {
                image: "platform/blocks.svg",
                alt: "Tech-paltform",
              },
              {
                image: "platform/domo.svg",
                alt: "Tech-paltform",
              },
            ]
          }


        ]
      }

    }
  },

  head() {
    return {
      title: 'Vodworks | Explore Software Development Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Empower your business with Vodworks' Software Development Services. We create tailored solutions for web, mobile, and custom software. Explore now!",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development service, custom software development services, software solution services, software development consulting services, software product development services, Software Services We Provide, software development services company, enterprise software development services, outsource software development services, services software development, software development company services, agile software development services'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Vodworks | Explore Software Development Services',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Empower your business with Vodworks' Software Development Services. We create tailored solutions for web, mobile, and custom software. Explore now!",
        },
      ],
    }
  },

  computed: {
    getServicesData() {
      return this.story.content.body[0]
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

  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
    gotoService(slug) {
      this.$router.push({
        path: '/services/' + slug,
      })
    },

    gotoSection(hash) {


    }


  },
}
</script>
