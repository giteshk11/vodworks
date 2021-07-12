<template>
  <div class="font-arial">
    <!-- hero section -->
    <div class="relative overflow-hidden">
      <div class="bg-b-black w-full relative z-50">
        <div
          class="grid md:grid-cols-2 bg-no-repeat text-white"
          :style="resolveBackground('/img/bg_home.png')"
        >
          <!-- text -->
          <div
            class="lg:pt-40 pt-8 md:pl-10 lg:pl-40 pl-6 md:pb-24 lg:pb-0 pb-0 text-lg"
          >
            <h1
              class="title text-56 font-arial-black leading-65 tracking-wide lg:mr-5"
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
                class="px-6 py-5 bg-white rounded-lg text-l-red font-bold"
              >
                DISCUSS YOUR PROJECT
              </NuxtLink>
            </div>
          </div>

          <!-- image -->
          <img src="~assets/img/img_home.png" />
        </div>
      </div>
    </div>
    <!-- end hero section -->

    <div
      class="lg:pt-40 pt-20 bg-top lg:-mt-32 -mt-16 relative z-50 bg-cover text-white text-center overflow-hidden lg:rounded-br-4xl lg:rounded-bl-4xl bg-service"
    >
      <div class="lg:px-72 px-3">
        <h2 class="title font-arial-black lg:text-56 text-41 tracking-wide">
          Our Services
        </h2>
        <p class="mt-6 mb-12 text-lg">
          Supercharge your project. We help business owners and enterprise IT
          teams from concept, to design, to delivery and ongoing
          optimizations/maintenance. There with you every step of the way, we
          leverage our 20 years of experience to build innovative custom-made
          products that your users will love.
        </p>

        <!-- link -->
        <NuxtLink
          id="service-button"
          to="/services"
          class="py-5 px-6 rounded-md font-bold uppercase button-linear-red"
        >
          View Services
        </NuxtLink>
      </div>

      <!-- card list -->
      <client-only>
        <div
          class="max-h-1/2 flex items-center pb-20 mt-20"
          style="height: 550px"
        >
          <div
            class="absolute z-40 left-0 right-0 top-0 bottom-0 m-auto rounded-md pb-20 arrow-container"
            style="top: 40%; transform: translate(0, 0)"
          >
            <!-- link -->
            <a
              id="service-link"
              href="#"
              class="absolute top-0 right-0 left-0 bottom-0 z-40"
            ></a>

            <!-- right arrow on -->
            <div
              id="button-right-on"
              class="absolute w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-x-red top-0 bottom-0 m-auto lg:right-6 -right-3 rounded-lg cursor-pointer z-50"
              @click="nextSlide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-0 bottom-0 right-0 left-0 m-auto p-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <!-- left arrow on-->
            <div
              id="button-left-on"
              class="absolute w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-x-red top-0 bottom-0 m-auto lg:left-6 -left-3 rounded-lg cursor-pointer z-50"
              @click="prevSlide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-0 bottom-0 right-0 left-0 m-auto transform rotate-180 p-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <Slider ref="slider" :options="options" class="service-list">
            <SliderItem
              v-for="(slide, i) in cardSlides"
              :key="i"
              :index="i"
              class="px-14 lg:px-20"
            >
              <!-- card -->
              <div
                class="flex-1 flex w-full s-card flex-col h-full bg-center bg-cover bg-no-repeat justify-end p-8 rounded-xl"
                :style="
                  resolveBackground(`/img/home/home_card/${slide.image}.png`)
                "
              >
                <p class="text-lg font-bold whitespace-normal">
                  {{ slide.title }}
                </p>
                <p
                  class="text-base break-all whitespace-normal text-opacity-90"
                >
                  Google homes, amazon echos, your fridge. Everything is
                  connected these days. Want to connect your app to Siri? No
                  problem.
                </p>
              </div>

              <!-- card -->
            </SliderItem>
          </Slider>
        </div>
      </client-only>
    </div>

    <!-- end services -->

    <!-- expert developers -->
    <div
      id="home-expert"
      class="grid grid-rows-1 lg:grid-cols-2 pt-16"
      style="background-color: #fff8f8"
    >
      <!-- image: left -->
      <div
        class="bg-no-repeat bg-cover bg-center py-40 lg:py-72 my-20 relative order-2 lg:order-1"
      >
        <!-- background circle -->
        <img
          src="~assets/img/bg_home_3.png"
          class="absolute w-3/4 lg:w-3/4 top-0 bottom-0 right-0 left-0 m-auto z-0"
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
            class="absolute w-8/12 right-0 left-0 bottom-0 top-0 m-auto z-30 filter drop-shadow-lg transform -translate-y-0 transition duration-700 ease-linear"
          />
          <img
            src="~assets/img/home/developers_backend.png"
            class="absolute w-7/12 right-0 left-0 bottom-0 top-0 m-auto z-20 filter drop-shadow-lg transform translate-x-0 translate-y-0 transition duration-700 ease-linear"
          />
          <img
            src="~assets/img/home/developers_platform.png"
            class="absolute w-7/12 right-0 left-0 bottom-0 top-0 m-auto z-10 filter drop-shadow-lg transform -translate-x-0 translate-y-0 transition duration-700 ease-linear"
          />
        </div>
      </div>

      <!-- text: right -->
      <div class="lg:ml-20 self-center order-1 lg:order-2 px-14">
        <h1
          class="title mb-9 font-nimbus lg:text-56 text-41 leading-10 lg:leading-65"
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
      class="bg-no-repeat bg-cover bg-center mx-auto lg:w-11/12"
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
            class="lg:w-9/12 mt-14 lg:mt-0 lg:absolute right-0 left-0 mx-auto -bottom-32"
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
        <div class="text-white self-center lg:w-5/6 lg:ml-10 mt-16 lg:mt-10">
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
      <div class="grid lg:grid-cols-4 lg:px-28">
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
      class="lg:w-11/12 pt-14 lg:pt-0 mx-auto lg:rounded-lg bg-no-repeat bg-cover bg-center text-white"
      :style="resolveBackground('/img/bg_home_5.png')"
    >
      <client-only>
        <div style="height: 300px" class="flex">
          <Slider :options="clientSliderOptionsVertical" @slide="currentClient">
            <SliderItem
              v-for="(item, index) in clientList"
              :key="index"
              :index="index"
              class="w-full"
            >
              <div class="flex justify-between w-full px-20">
                <div class="space-y-8 text-left">
                  <p
                    class="transform translate-y-0 transition duration-1000 ease-out text-2xl font-bold"
                  >
                    {{ item }}
                  </p>
                  <a
                    href="#"
                    class="p-5 border border-gray-600 rounded-lg uppercase text-lg"
                  >
                    Link to client website
                  </a>
                </div>

                <div
                  id="services-banner-logo"
                  class="self-center justify-self-center lg:w-auto overflow-hidden"
                >
                  <img
                    :src="require(`~/assets/img/home/home_logo/${item}.png`)"
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
        class="h-40 overflow-hidden flex justify-center items-center relative"
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
                  :src="require(`~/assets/img/home/home_logo/${item}.png`)"
                  :alt="item"
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
    <div
      class="bg-center bg-cover bg-no-repeat lg:py-28 py-6 lg:px-0 px-6 relative"
      :style="resolveBackground('/img/bg_home_6.png')"
    >
      <!-- card -->
      <div
        class="lg:py-24 py-10 lg:pl-64 lg:pr-12 px-6 lg:px-0 bg-white text-center lg:text-left lg:rounded-xl lg:w-8/12 mx-auto lg:mr-20 relative z-10"
      >
        <!-- background -->
        <img
          src="~assets/img/bg_home_6.3.png"
          class="absolute w-1/2 -right-10 -top-10 hidden lg:block"
        />

        <!-- text -->
        <h1 class="lg:text-56 text-41 title font-arial-black">Join Our Team</h1>

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
    <div
      class="bg-center bg-cover bg-no-repeat lg:py-28 py-6 relative px-6 lg:px-0"
      :style="resolveBackground('/img/bg_home_7.png')"
    >
      <!-- card -->
      <div
        class="lg:py-28 py-10 lg:pr-64 lg:pl-12 px-6 lg:px-0 text-center lg:text-left bg-white lg:rounded-xl lg:w-8/12 mx-auto lg:ml-20 relative z-10"
      >
        <!-- background -->
        <img
          src="~assets/img/bg_home_7.3.png"
          class="hidden lg:block absolute w-1/4 left-0 bottom-0"
        />
        <img
          src="~assets/img/bg_home_7.2.png"
          class="hidden lg:block absolute -top-16 -right-48"
        />

        <h2 class="title lg:text-56 text-41 font-arial-black">Learn With Us</h2>
        <p class="text-lg text-h-gray mb-10 lg:mb-16">
          Knowledge share is core to our business model. Learn from industry
          experts, check out our webinars, or take a peek at our culture!
        </p>
        <NuxtLink
          to="/blogs-and-webinars"
          class="py-5 px-6 button-linear-red rounded-lg text-white font-bold uppercase relative"
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
    <div
      class="overflow-hidden bg-cover bg-center bg-no-repeat grid lg:grid-cols-2 text-white relative z-10"
      :style="resolveBackground('/img/bg_home_8.png')"
    >
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
        class="hidden lg:block absolute top-0 bottom-0 my-auto -right-64 z-10"
      />

      <!-- img mobile -->
      <img
        src="~assets/img/bg_home_8.1_mobile.png"
        class="mb-20 mt-8 lg:hidden transform scale-125 ml-9"
      />
    </div>
    <!-- end bottom section -->
  </div>
</template>

<script>
import ServiceSlides from '~/static/service-slides'
export default {
  data() {
    return {
      cardSlides: ServiceSlides,
      options: {
        currentPage: 0,
        speed: 300,
        itemAnimation: true,
        centeredSlides: true,
        thresholdDistance: 100,
        thresholdTime: 300,
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
        loopedSlides: 4,
        pagination: false,
      },
      clientSliderOptionsVertical: {
        direction: 'vertical',
        loop: true,
        autoplay: '3000',
        centeredSlides: true,
        itemAnimation: true,
        preventRebound: true,
        loopedSlides: 4,
        pagination: false,
      },
      clientList: [
        'itv',
        'sky',
        'irdeto',
        'canal+',
        'k+',
        'liberty_global',
        'xrodmedia',
        'mytv',
        'stc',
        'azdio',
        'nagra',
        'crowdemotion',
        'hubii',
        'dhs',
      ],
      curClientIndex: 0,
    }
  },
  head() {
    return {
      metaInfo: {
        script: [
          { src: '~/assets/scripts/index.js', defer: true, async: true },
        ],
      },
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

.slider-active .s-card {
  border: 1px solid white;
}

@media only screen and (min-width: 320px) and (max-width: 479px) {
  .service-list .slider-item {
    width: 100%;
  }
  .arrow-container {
    width: 75%;
  }
  .client-list .slider-item {
    width: 40%;
  }
}

/* @media only screen and (min-width: 480px) and (max-width: 767px) {
}
*/

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .service-list .slider-item {
    width: 50%;
  }
  .arrow-container {
    width: 40%;
  }
}

@media only screen and (min-width: 992px) {
  .service-list .slider-item {
    width: 33.333333333%;
  }
  .arrow-container {
    width: 30%;
  }
  .client-list .slider-item {
    width: 20%;
  }
}
</style>
