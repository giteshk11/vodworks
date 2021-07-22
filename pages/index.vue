<template>
  <div class="font-arial mx-auto">
    <!-- hero section -->
    <div class="bg-section">
      <div class="relative overflow-hidden">
        <div class="w-full relative z-50">
          <div class="flex flex-col md:flex-row text-white mx-auto max-w-4/5">
            <!-- text -->
            <div class="lg:pt-40 pt-8 md:pb-24 lg:pb-0 pb-0 text-lg">
              <h1
                class="title text-42 md:text-56 font-arial-black leading-65 tracking-wide lg:mr-5"
              >
                We Deliver Amazing Web, Mobile & Digital Experience
              </h1>

              <p class="mt-5 pr-20">
                Developing Custom Software & Digital Products at Scale for
                Start-ups and Enterprises since 2012.
              </p>
              <p class="mt-3 pr-24">
                Work with Top Development Company, Awesome Developers and
                On-Demand Agile Teams.
              </p>

              <div class="mt-14">
                <NuxtLink
                  to="/contact"
                  class="px-6 py-5 bg-white rounded-lg text-l-red font-bold inline-block"
                >
                  DISCUSS YOUR PROJECT
                </NuxtLink>
              </div>
            </div>

            <!-- image -->
            <img src="~assets/img/img_home.png" class="object-contain" />
          </div>
        </div>
      </div>
      <!-- end hero section -->

      <div
        class="z-50 lg:pt-40 pt-20 relative text-white text-center overflow-hidden lg:rounded-br-4xl lg:rounded-bl-4xl"
      >
        <div class="mx-auto max-w-4/5 xl:max-w-3/5 relative">
          <div class="mx-auto 2xl:max-w-4/5">
            <h2 class="title font-arial-black lg:text-56 text-41 tracking-wide">
              Our Services
            </h2>
            <p class="mt-6 mb-12 text-lg">
              Supercharge your project. We help business owners and enterprise
              IT teams from concept, to design, to delivery and ongoing
              optimizations/maintenance. There with you every step of the way,
              we leverage our 20 years of experience to build innovative
              custom-made products that your users will love.
            </p>

            <!-- link -->
            <NuxtLink
              id="service-button"
              to="/services"
              class="py-5 px-6 rounded-md font-bold uppercase button-linear-red inline-block"
            >
              View Services
            </NuxtLink>
          </div>
        </div>

        <!-- card list -->
        <div class="px-8 mx-auto max-w-100vw md:max-w-80vw 3xl:max-w-80vw">
          <client-only>
            <div class="flex items-center pb-20 mt-20" style="height: 550px">
              <Slider ref="slider" :options="options" class="service-list">
                <SliderItem
                  v-for="(slide, i) in cardSlides"
                  :key="i"
                  :index="i"
                  class="max-w-100 md:max-w-40vw md:mx-16 lg:mx-0 lg:max-w-24vw xl:max-w-24vw 3xl:max-w-15vw hover:cursor-pointer"
                >
                  <!-- card -->
                  <div
                    class="flex-1 flex w-full s-card flex-col h-full bg-center bg-cover bg-no-repeat justify-end p-8 rounded-xl"
                    :style="
                      resolveBackground(
                        `/img/home/home_card/${slide.image}.png`
                      )
                    "
                  >
                    <p class="text-lg font-bold whitespace-normal">
                      {{ slide.title }}
                    </p>
                    <p
                      class="text-base break-all whitespace-normal text-opacity-90 inline-block break-words"
                      style="overflow-wrap: break-word"
                    >
                      {{ slide.section1.content.split('.')[0] }}
                    </p>
                  </div>

                  <!-- card -->
                </SliderItem>
              </Slider>
            </div>
          </client-only>
        </div>
      </div>
    </div>

    <!-- end services -->

    <!-- expert developers -->
    <div
      id="home-expert"
      class="grid grid-rows-1 lg:grid-cols-2 pt-16 2xl:py-60"
      style="background-color: #fff8f8"
    >
      <!-- image: left -->
      <div
        class="bg-no-repeat bg-cover bg-center py-40 lg:py-72 my-20 relative order-2 lg:order-1"
      >
        <!-- background circle -->
        <img
          src="~assets/img/bg_home_3.png"
          class="absolute w-4/5 md:w-1/2 lg:w-3/4 top-0 bottom-0 right-0 left-0 m-auto z-0"
        />

        <!-- dot -->
        <img
          src="~assets/img/home_dot_1.png"
          class="absolute left-20 lg:left-1/4 bottom-1/2 lg:bottom-3/4 z-0"
        />
        <img
          src="~assets/img/home_dot_2.png"
          class="absolute right-7 bottom-20 z-0"
        />

        <!-- image -->
        <div class="absolute w-2/3 right-0 left-0 bottom-0 top-0 m-auto">
          <img
            src="~assets/img/home/developers_mobile.png"
            class="absolute w-4/5 md:w-1/2 lg:w-3/4 right-0 left-0 bottom-0 top-0 m-auto z-30 filter drop-shadow-lg transform -translate-y-0 transition duration-700 ease-linear"
          />
          <img
            src="~assets/img/home/developers_backend.png"
            class="absolute w-4/5 md:w-1/2 lg:w-3/4 right-0 left-0 bottom-0 top-0 m-auto z-20 filter drop-shadow-lg transform translate-x-0 translate-y-0 transition duration-700 ease-linear"
          />
          <img
            src="~assets/img/home/developers_platform.png"
            class="absolute w-4/5 md:w-1/2 lg:w-3/4 right-0 left-0 bottom-0 top-0 m-auto z-10 filter drop-shadow-lg transform -translate-x-0 translate-y-0 transition duration-700 ease-linear"
          />
        </div>
      </div>

      <!-- text: right -->
      <div class="lg:ml-20 self-center order-1 lg:order-2 px-14">
        <h1
          class="title mb-9 font-arial-black lg:text-56 text-41 leading-10 lg:leading-65"
        >
          Expert Front-End Developers
        </h1>
        <NuxtLink
          to="/contact"
          class="py-5 px-6 button-linear-red rounded-lg text-white font-bold uppercase"
        >
          Discuss Your Project
        </NuxtLink>
      </div>
    </div>
    <!-- end expert developers -->

    <!-- webflow -->
    <div
      class="bg-no-repeat bg-cover bg-center mx-auto w-11/12"
      :style="resolveBackground('/img/bg_home_4.png')"
    >
      <!-- content 1 -->
      <div class="grid lg:grid-cols-2 pt-28 text-white lg:ml-24 px-8 lg:px-0">
        <!-- text -->
        <div class="lg:w-5/6">
          <h1
            class="title font-arial-black text-41 lg:text-56 lg:leading-65 leading-10 text-center lg:text-left"
          >
            On Demand Webflow
          </h1>
          <p class="mt-16 lg:mt-20 font-arial-black text-3xl tracking-wider">
            Augmented Teams & Developers
          </p>
          <p class="mt-5 lg:text-lg opacity-80">
            Expand your existing team with ready-to-go developers ready to
            accelerate your process. Fluent in agile development and the latest
            technology stacks, hire on demand engineers to get your product
            live, faster.
          </p>
        </div>

        <!-- image -->
        <div class="relative">
          <img
            src="~assets/img/img_home_ondemand1.png"
            class="lg:w-9/12 mt-14 lg:mt-0 lg:absolute right-0 left-0 mx-auto"
          />
        </div>
      </div>

      <!-- cotent 2 -->
      <div class="grid lg:grid-cols-2 px-8 lg:px-0">
        <!-- image -->
        <img
          src="~assets/img/img_home_ondemand2.png"
          class="lg:ml-24 lg:w-9/12 my-14 lg:my-0 lg:mt-44 lg:mb-16 order-2 lg:order-none"
        />

        <!-- text -->
        <div
          class="text-white self-center lg:w-5/6 lg:ml-10 mt-16 lg:mt-10 2xl:mt-64"
        >
          <h2
            class="font-arial-black leading-10 lg:leading-65 text-3xl tracking-wider"
          >
            Outsourced Product Development
          </h2>
          <p class="mt-5 text-lg opacity-80">
            Fully managed end-to-end, we take your project from design to
            delivery. Build new features on top of your existing enterprise
            stack, extend your operational efficiency, or create that pet
            project you’ve been thinking about. Like the team after launch? Hire
            the entire crew outright, and have guaranteed performance year over
            year.
          </p>
        </div>
      </div>
    </div>
    <!-- end web flow -->

    <!-- industries -->
    <div class="lg:mt-24 mt-16">
      <h1
        class="title font-arial-black px-20 lg:px-0 leading-10 text-41 lg:text-56 text-center lg:pb-20 pb-16"
      >
        Industries Served
      </h1>

      <!-- card -->
      <div class="grid lg:grid-cols-3 xl:grid-cols-4 lg:px-28">
        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_media.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">
            Media & Entertainment
          </p>
          <p class="text-center text-sm text-h-gray">
            Maximize your media coverage
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_fintech.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">FinTech</p>
          <p class="text-center text-sm text-h-gray">
            Evolving wealth management
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_ecommerce.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">
            Ecommerce & Logistics
          </p>
          <p class="text-center text-sm text-h-gray">
            Built for efficiency and productivity
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_loyalty.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Loyalty & Rewards</p>
          <p class="text-center text-sm text-h-gray">
            Interact, discover, & reward customers
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_data.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Data & Analytics</p>
          <p class="text-center text-sm text-h-gray">
            Intelligent analytics solutions
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_iot.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">IoT</p>
          <p class="text-center text-sm text-h-gray">
            Intelligent analytics solutions
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_telecom.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Telecommunications</p>
          <p class="text-center text-sm text-h-gray">Innovative IT expertise</p>
        </div>
        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_telecom1.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Telecommunications</p>
          <p class="text-center text-sm text-h-gray">Innovative IT expertise</p>
        </div>
      </div>
    </div>
    <!-- end industries -->

    <!-- clients-->
    <!-- banner -->
    <div
      class="lg:w-11/12 py-4 mx-auto lg:rounded-lg bg-no-repeat bg-cover bg-center text-white"
      :style="resolveBackground('/img/bg_home_5.png')"
    >
      <client-only>
        <div style="height: 500px" class="flex 2xl:max-w-9/10 mx-auto">
          <Slider :options="clientSliderOptionsVertical" @slide="currentClient">
            <SliderItem
              v-for="(item, index) in clientList"
              :key="index"
              :index="index"
              class="w-full"
            >
              <div
                class="flex flex-col-reverse md:flex-row justify-between w-full px-20"
              >
                <div class="space-y-8 text-center md:text-left">
                  <p
                    class="transform translate-y-0 transition duration-1000 ease-out text-2xl font-bold max-w-full md:max-w-1/2 text-center md:text-left"
                  >
                    {{ item.name }}
                  </p>
                  <p
                    class="text-white font-arial text-base text-opacity-60 whitespace-normal 2xl:max-w-1/2"
                  >
                    {{ item.about }}
                  </p>
                </div>

                <div
                  id="services-banner-logo"
                  class="self-center justify-self-center lg:w-auto overflow-hidden flex-shrink-0 inline-block"
                >
                  <img
                    :src="
                      require(`~/assets/img/home/home_logo/${item.image}.png`)
                    "
                    :class="[
                      curClientIndex === index
                        ? 'filter invert'
                        : 'filter-none',
                      'filter h-20 invert transform translate-y-0 transition duration-1000 ease-out',
                    ]"
                  />
                </div>
              </div>
            </SliderItem>
          </Slider>
        </div>
      </client-only>
    </div>

    <!-- logo -->
    <client-only>
      <div
        id="client-logo-wrapper"
        class="h-48 overflow-hidden flex justify-center items-center relative"
      >
        <Slider
          :options="clientSliderOptions"
          class="client-list"
          @slide="currentClient"
        >
          <SliderItem
            v-for="(item, index) in clientList"
            :key="index"
            :index="index"
          >
            <div
              class="justify-self-center justify-center absolute flex client-logo-parent transition duration-1000 ease-in-out"
            >
              <div
                :class="[
                  curClientIndex === index ? 'opacity-100' : 'opacity-30',
                  `w-64 -mx-10 lg:-mx-0 `,
                ]"
              >
                <img
                  :src="
                    require(`~/assets/img/home/home_logo/${item.image}.png`)
                  "
                  :alt="item.image"
                />
                <a href="1" class="hidden"></a>
              </div>
            </div>
          </SliderItem>
        </Slider>
      </div>
    </client-only>
    <!-- end clients -->

    <!-- join our team-->
    <div class="bg-section">
      <div
        class="bg-center bg-cover bg-no-repeat lg:py-28 py-6 lg:px-0 px-6 relative"
      >
        <!-- card -->
        <div
          class="lg:py-24 py-10 lg:pl-64 lg:pr-12 px-6 lg:px-0 bg-white text-center lg:text-left lg:rounded-xl lg:w-8/12 mx-auto lg:mr-20 relative z-10"
        >
          <!-- text -->
          <h1 class="lg:text-56 text-41 title font-arial-black">
            Join Our Team
          </h1>

          <p class="text-lg text-h-gray mb-10 lg:mb-16">
            Where impact meet opportunity. Our engineering team builds bespoke
            solutions for global brands. Fully remote, always communicating, and
            fully transparent, see why our employees love working for Vodworks.
          </p>
          <NuxtLink
            to="/career"
            class="py-5 px-6 button-linear-red rounded-lg text-white font-bold uppercase"
          >
            GET STARTED
          </NuxtLink>

          <!-- background circle -->
          <div
            class="bg-no-repeat bg-bottom bg-cover lg:min-h-full h-72 lg:w-100 w-72 mt-24 lg:mt-0 mb-10 lg:mb-0 lg:absolute relative top-0 bottom-0 m-auto lg:-left-1/4 rounded-full"
            :style="resolveBackground('/img/bg_home_6.2.png')"
          >
            <!-- team -->
            <div class="absolute bottom-0 overflow-x-hidden rounded-full">
              <img src="~assets/img/home/our_team_1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- end join our team-->

      <!-- learn with us-->
      <div class="lg:py-28 py-6 relative px-6 lg:px-0">
        <!-- card -->
        <div
          class="lg:py-28 py-10 lg:pr-64 lg:pl-12 px-6 lg:px-0 text-center lg:text-left bg-white lg:rounded-xl lg:w-8/12 mx-auto lg:ml-20 relative z-10"
        >
          <h2 class="title lg:text-56 text-41 font-arial-black">
            Learn With Us
          </h2>
          <p class="text-lg text-h-gray mb-10 lg:mb-16">
            Knowledge share is core to our business model. Learn from industry
            experts, check out our webinars, or take a peek at our culture!
          </p>
          <NuxtLink
            to="/blogs-and-webinars"
            class="py-5 px-6 button-linear-red rounded-lg text-white font-bold uppercase relative inline-block"
          >
            Expore blogs & Webinars
          </NuxtLink>

          <!-- background circle -->
          <div
            class="bg-no-repeat bg-center bg-contain lg:h-full h-72 lg:w-100 w-72 mt-24 lg:mt-0 lg:absolute top-0 bottom-0 m-auto lg:-right-1/4 relative"
            :style="resolveBackground('/img/bg_home_7.1.png')"
          >
            <!-- team -->
            <div class="absolute bottom-0 overflow-x-hidden rounded-full">
              <img src="~assets/img/home/learn_with_us_1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- end learn with us-->

      <!-- bottom section -->
      <div class="overflow-hidden grid lg:grid-cols-2 text-white relative z-10">
        <div class="lg:py-44 py-20 lg:pl-32 px-7 lg:px-0">
          <h1
            class="title mb-16 font-arial-black text-41 lg:text-56 lg:w-3/4 leading-10 lg:leading-65"
          >
            Got a new idea? Let’s Talk
          </h1>
          <NuxtLink
            to="/contact"
            class="py-5 px-6 button-linear-red rounded-lg font-bold uppercase"
          >
            GET IN TOUCH
          </NuxtLink>
        </div>

        <!-- img lg -->
        <img
          src="~assets/img/bg_home_8.1.png"
          class="hidden lg:block absolute top-0 bottom-0 right-0 my-auto z-10"
        />
      </div>
      <!-- end bottom section -->
    </div>
  </div>
</template>

<script>
import ServiceSlides from '~/static/service-slides'
import ClientList from '~/static/client-list'
export default {
  data() {
    return {
      cardSlides: ServiceSlides,
      options: {
        autoplay: '3000',
        currentPage: 0,
        speed: 300,
        itemAnimation: true,
        centeredSlides: true,
        loopedSlides: 2,
        slidesToScroll: 1,
        loop: true,
        pagination: false,
      },
      clientSliderOptions: {
        autoplay: '3000',
        loop: true,
        centeredSlides: true,
        itemAnimation: true,
        preventRebound: true,
        loopedSlides: 5,
        pagination: false,
      },
      clientSliderOptionsVertical: {
        direction: 'vertical',
        autoplay: '3000',
        loop: true,
        centeredSlides: true,
        itemAnimation: true,
        preventRebound: true,
        loopedSlides: 5,
        pagination: false,
      },
      clientList: ClientList,
      curClientIndex: 0,
    }
  },
  head() {
    return {
      metaInfo: {},
    }
  },

  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
    nextSlide() {
      this.$refs.slider.$emit('slideNext')
    },
    prevSlide() {
      this.$refs.slider.$emit('slidePre')
    },
    currentClient(data) {
      this.curClientIndex = data.currentPage
    },
    gotoService(index) {
      this.$router.push({
        path: `/services/${this.cardSlides[index].slug}`,
      })
    },
  },
}
</script>

<style scoped>
.slider-item {
  transform: scale(0.8);
  transition-timing-function: ease;
  transition-duration: 300ms;
}
.slider-item.slider-active {
  transform: scale(1);
  z-index: 999;
}
.slider-item.slider-active-copy {
  transform: scale(1);
  z-index: 999;
}
.s-card {
  border: 2px solid black;
}

/* @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
  only screen and (-o-min-device-pixel-ratio: 13/10),
  only screen and (min-resolution: 120dpi) {
  

  * {
    zoom: 0.8;
  }
} */

.slider-active .s-card {
  border: 1px solid white;
  @apply bg-opacity-30 bg-gradient-to-t via-transparent from-black;
}

@media only screen and (min-width: 320px) and (max-width: 479px) {
  .client-list .slider-item {
    width: 40%;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1440px) {
  .client-list .slider-item {
    width: 20%;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1536px) {
  .client-list .slider-item {
    width: 20%;
  }
}

@media only screen and (min-width: 1536px) {
  .client-list .slider-item {
    width: 20%;
  }
}
</style>
