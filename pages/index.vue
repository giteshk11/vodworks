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
                class="title text-42 md:text-56 font-arial-black leading-50 md:leading-65 tracking-wide lg:mr-5"
              >
                We Deliver Amazing Web, Mobile & Digital Experience
              </h1>

              <p class="mt-5 lg:pr-20">
                Developing Custom Software & Digital Products at Scale for
                Start-ups and Enterprises since 2012.
              </p>
              <p class="mt-3 lg:pr-24">
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

      <div class="z-50 relative text-white text-center overflow-hidden">
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
        <div
          class="px-8 mx-auto max-w-100vw md:max-w-80vw 3xl:max-w-50vw h-100 flex items-center my-10 2xl:my-20"
        >
          <div
            class="absolute z-40 left-0 right-0 top-0 bottom-0 m-auto rounded-md pb-20 max-w-4/5 md:max-w-2/5 lg:max-w-9/20 xl:max-w-3/10 2xl:max-w-3/10 3xl:max-w-1/5 center-arrow"
          >
            <!-- right arrow on -->
            <div
              id="button-right-on"
              class="absolute w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-x-red top-0 bottom-0 m-auto lg:right-6 -right-3 rounded-lg cursor-pointer z-50"
              @click="serviceSlider.next()"
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
              class="absolute w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-x-red top-0 bottom-0 m-auto lg:left-6 -left-3 rounded-lg cursor-pointer z-50"
              @click="serviceSlider.prev()"
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
          <div ref="serviceSlider" class="keen-slider h-full">
            <div
              v-for="(slide, i) in cardSlides"
              :key="i"
              :class="[
                relativeServiceSlide === i ? 's-card-active' : 's-card',
                `keen-slider__slide`,
              ]"
              :style="[
                relativeServiceSlide === i
                  ? 'transform:scale(1.2)'
                  : 'transform:scale(1)',
              ]"
              @click="$router.push({ path: `/services/${slide.slug}` })"
            >
              <!-- card -->
              <div
                class="flex-1 flex w-full flex-col h-full bg-center bg-cover bg-no-repeat justify-end p-8 rounded-xl"
                :style="
                  resolveBackground(`/img/home/home_card/${slide.image}.png`)
                "
              >
                <p class="text-lg font-bold whitespace-normal">
                  {{ slide.title }}
                </p>
                <p class="whitespace-normal text-opacity-90">
                  {{ slide.desc }}
                </p>
              </div>
            </div>
            <!-- card -->
          </div>
        </div>
      </div>
    </div>

    <!-- end services -->

    <!-- expert developers -->
    <div
      id="home-expert"
      class="grid grid-rows-1 lg:grid-cols-2 pt-16 2xl:py-40"
      style="background-color: #fff8f8"
    >
      <!-- image: left -->
      <div
        class="bg-no-repeat bg-cover bg-center py-40 lg:py-72 my-20 relative order-2 lg:order-1"
      >
        <!-- background circle -->
        <img
          src="~assets/img/bg_home_3.png"
          class="absolute w-4/5 md:w-1/2 lg:w-3/4 top-0 bottom-0 right-0 left-0 m-auto z-0 hidden lg:visible"
        />

        <!-- dot -->
        <img
          src="~assets/img/home_dot_1.png"
          class="absolute left-20 lg:left-1/4 bottom-1/2 lg:bottom-3/4 z-0 hidden lg:visible"
        />

        <img
          src="~assets/img/home_dot_2.png"
          class="absolute right-7 bottom-20 z-0 hidden lg:visible"
        />

        <!-- image -->
        <div
          ref="rotateAnimation"
          class="absolute inset-0 w-3/4 right-0 left-0 bottom-0 top-0 bg-contain bg-center bg-no-repeat mx-auto"
          :style="resolveBackground('/img/bg_home_3.png')"
        >
          <div
            class="absolute transition duration-700 ease-linear mx-auto transform right-0 left-0 bottom-0 top-0 z-50 lg:h-72 h-24 w-24 lg:w-72 dev-card overflow-hidden filter drop-shadow-lg bg-white -translate-y-6 lg:-translate-y-20"
            style="top: 25%"
          >
            <img
              src="~assets/img/home/developers_mobile.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0"
            />
          </div>
          <div
            class="absolute lg:h-72 lg:w-72 h-24 w-24 right-0 mx-auto left-0 bottom-0 top-0 z-20 transform transition duration-700 ease-linear dev-card overflow-hidden filter drop-shadow-lg bg-white translate-x-12 translate-y-9 lg:translate-x-36 lg:translate-y-10"
            style="top: 25%"
          >
            <img
              src="~assets/img/home/developers_backend.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0"
            />
          </div>
          <div
            class="absolute lg:h-72 lg:w-72 h-24 w-24 right-0 mx-auto left-0 bottom-0 top-0 z-10 transform transition duration-700 ease-linear dev-card overflow-hidden filter drop-shadow-lg bg-white -translate-x-12 lg:-translate-x-28 translate-y-12 lg:translate-y-24"
            style="top: 25%"
          >
            <img
              src="~assets/img/home/developers_platform.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0"
            />
          </div>
        </div>
      </div>

      <!-- text: right -->
      <div
        class="lg:ml-20 self-center order-1 lg:order-2 text-center lg:text-left"
      >
        <h1
          class="title mb-9 font-arial-black lg:text-56 text-41 leading-10 lg:leading-65"
        >
          {{ expertSection[count] }}
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
          class="text-white self-center lg:w-5/6 lg:ml-10 mt-16 lg:mt-10 2xl:mt-40"
        >
          <h2 class="font-arial-black text-3xl tracking-wider">
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
        class="title font-arial-black lg:px-0 leading-10 text-41 lg:text-56 text-center py-8"
      >
        Industries Served
      </h1>

      <!-- card -->
      <div class="grid lg:grid-cols-3 xl:grid-cols-4 lg:px-28">
        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <img
            class="lg:w-60 w-80 h-44 rounded-lg object-contain"
            src="~assets/img/home/industries_media.png"
          />

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
          <img
            class="lg:w-60 w-80 h-44 rounded-lg object-contain"
            src="~assets/img/home/industries_fintech.png"
          />

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">FinTech</p>
          <p class="text-center text-sm text-h-gray">
            Evolving wealth management
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <img
            class="lg:w-60 w-80 h-44 rounded-lg object-contain"
            src="~assets/img/home/industries_ecommerce.png"
          />

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
          <img
            class="lg:w-60 w-80 h-44 rounded-lg object-contain"
            src="~assets/img/home/industries_loyalty.png"
          />

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Loyalty & Rewards</p>
          <p class="text-center text-sm text-h-gray">
            Interact, discover, & reward customers
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <img
            class="lg:w-60 w-80 h-44 rounded-lg object-contain"
            src="~assets/img/home/industries_data.png"
          />

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Data & Analytics</p>
          <p class="text-center text-sm text-h-gray">
            Intelligent analytics solutions
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <img
            class="lg:w-60 w-80 h-44 rounded-lg object-contain"
            src="~assets/img/home/industries_iot.png"
          />

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">IoT</p>
          <p class="text-center text-sm text-h-gray">
            Connecting technology in day-to-day
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <img
            class="lg:w-60 w-80 h-44 rounded-lg object-contain"
            src="~assets/img/home/industries_telecom.png"
          />

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Telecommunications</p>
          <p class="text-center text-sm text-h-gray">Innovative IT expertise</p>
        </div>
        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <img
            class="lg:w-60 w-80 h-44 rounded-lg object-contain"
            src="~assets/img/home/industries_telecom1.png"
          />

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Blockchain</p>
          <p class="text-center text-sm text-h-gray">
            Distributed ledger technologies
          </p>
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
      <div class="flex items-center md:items-baseline 2xl:max-w-9/10 mx-auto">
        <div ref="vertClientSlider" class="keen-slider h-486 md:h-80">
          <div
            v-for="(item, index) in clientList"
            :key="index"
            class="w-full keen-slider__slide h-full flex items-center md:flex-none"
          >
            <div
              class="flex flex-col-reverse md:flex-row justify-between w-full px-10 lg:px-20 md:h-full md:items-center align-middle"
            >
              <div class="space-y-8 text-center md:text-left">
                <p
                  class="transform translate-y-0 transition duration-1000 ease-out text-2xl font-bold max-w-full md:max-w-1/2 text-center md:text-left"
                >
                  {{ item.name }}
                </p>
                <p
                  class="text-white font-arial text-sm md:text-base text-opacity-60 whitespace-normal text-justify md:text-left"
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
                    relativeClientSlide === index
                      ? 'filter invert'
                      : 'filter-none',
                    'filter h-20 invert transform translate-y-0 transition duration-1000 ease-out object-contain',
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- logo -->
    <div class="h-48 flex justify-center items-center relative">
      <div ref="horzClientSlider" class="keen-slider w-full h-full">
        <div
          v-for="(item, index) in clientList"
          :key="index"
          class="keen-slider__slide flex justify-center items-center"
        >
          <div class="flex justify-center transition duration-1000 ease-in-out">
            <div
              :class="[
                relativeClientSlide === index ? 'opacity-100' : 'opacity-30',
                `w-64`,
              ]"
            >
              <img
                :src="require(`~/assets/img/home/home_logo/${item.image}.png`)"
                :alt="item.image"
                class="object-contain"
              />
              <!-- <a href="1" class="hidden"></a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end clients -->

    <!-- join our team-->
    <div class="bg-section">
      <div class="lg:py-32 py-6 lg:px-0 px-6 relative">
        <!-- card -->
        <div
          class="lg:py-24 py-10 lg:pl-64 lg:pr-12 px-6 lg:px-0 bg-white text-center lg:text-left lg:rounded-xl lg:w-8/12 mx-auto lg:mr-32 relative z-10"
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
            class="lg:min-h-full h-48 lg:w-100 w-48 mt-24 lg:mt-0 mb-10 lg:mb-0 lg:absolute relative top-0 bottom-0 m-auto lg:-left-1/4 rounded-full"
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
          class="lg:py-28 py-10 lg:pr-64 lg:pl-12 px-6 lg:px-0 text-center lg:text-left bg-white lg:rounded-xl lg:w-8/12 mx-auto lg:ml-32 relative z-10"
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
            class="lg:h-full h-48 lg:w-100 w-48 mt-24 lg:mt-0 lg:absolute top-0 bottom-0 m-auto lg:-right-1/4 relative"
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
        class="overflow-hidden grid lg:grid-cols-2 md:gap-2 text-white relative z-10"
      >
        <div class="lg:py-44 py-20 lg:px-0 mx-auto max-w-3/4">
          <h1
            class="title mb-16 font-arial-black text-41 lg:text-56 leading-10 lg:leading-65"
          >
            Got a new idea? <br />Let’s Talk
          </h1>
          <NuxtLink
            to="/contact"
            class="py-5 px-6 button-linear-red rounded-lg font-bold uppercase inline-block"
          >
            GET IN TOUCH
          </NuxtLink>
        </div>

        <!-- img lg -->

        <img
          src="~assets/img/bg_home_8.1.png"
          class="hidden lg:block w-full h-full object-contain z-10"
        />
      </div>
      <!-- end bottom section -->
    </div>
  </div>
</template>

<script>
import KeenSlider from 'keen-slider'
import ServiceSlides from '~/static/service-slides'
import ClientList from '~/static/client-list'
import 'keen-slider/keen-slider.min.css'
export default {
  data() {
    return {
      cardSlides: ServiceSlides,
      clientList: ClientList,
      curClientIndex: 0,
      count: 0,
      expertSection: [
        'Expert Mobile & Front-End Developers',
        'Expert Platform Developers',
        'Expert Back-End Developers',
      ],
      serviceSlider: {},
      vertClientSlider: {},
      horzClientSlider: {},
      relativeServiceSlide: 0,
      relativeClientSlide: 0,
    }
  },
  head() {
    return {
      title: 'Vodworks is great again',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Vodworks provides innovative technology &amp; OTT solutions, business/technology consulting, enterprise software services, staff augmentation, UI/UX designs &amp; more.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'vodworks is great again',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'product development, product engineering, Product &amp; Technology Consulting, Product Experience Design, Media technology, OTT Solutions, OTT platform, Online streaming solutions, Product Architecture Transformation, Product Modernisation, DevOps, Product Lifecycle, Product Engineering Process, Conceptualisation, Design &amp; Development, Development, Design, Performance, scalable software, scalable solutions',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'some link from cloudinary?',
        },
      ],
    }
  },
  mounted() {
    this.expertSectionAnimation()
    this.initServiceSldier()
    this.initVertClientSlider()
    this.initHorzClientSlider()
    this.setLongInterval()
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
    expertSectionAnimation() {
      setInterval(() => {
        const childern = this.$refs.rotateAnimation.children
        const child1Class = childern[0].className
        const child2Class = childern[1].className
        const child3Class = childern[2].className
        childern[0].className = child2Class
        childern[1].className = child3Class
        childern[2].className = child1Class
        if (this.count === 2) {
          this.count = 0
        } else {
          this.count = this.count + 1
        }
      }, 2500)
    },
    initServiceSldier() {
      this.serviceSlider = new KeenSlider(this.$refs.serviceSlider, {
        slidesPerView: 3,
        spacing: 50,
        loop: true,
        duration: 1000,
        centered: true,
        slideChanged: (data) => {
          this.relativeServiceSlide = data.details().relativeSlide
        },
        breakpoints: {
          '(min-width: 320px) and (max-width: 479px)': {
            slidesPerView: 1,
            spacing: 0,
          },
          '(min-width: 768px) and (max-width: 1024px)': {
            slidesPerView: 2,
            spacing: 20,
          },
        },
      })
    },
    initVertClientSlider() {
      this.vertClientSlider = new KeenSlider(this.$refs.vertClientSlider, {
        slidesPerView: 1,
        centered: true,
        vertical: true,
        loop: true,
        spacing: 10,
        controls: false,
        slideChanged: (data) => {
          this.relativeClientSlide = data.details().relativeSlide
        },
      })
    },
    initHorzClientSlider() {
      this.horzClientSlider = new KeenSlider(this.$refs.horzClientSlider, {
        slidesPerView: 5,
        loop: true,
        centered: true,
        controls: false,
        slideChanged: (data) => {
          this.relativeClientSlide = data.details().relativeSlide
        },
        breakpoints: {
          '(min-width: 320px) and (max-width: 479px)': {
            slidesPerView: 1,
          },
          '(min-width: 768px) and (max-width: 1024px)': {
            slidesPerView: 4,
          },
        },
      })
    },

    currentClient(data) {
      this.curClientIndex = data.currentPage
    },
    gotoService(index) {
      this.$router.push({
        path: `/services/${this.cardSlides[index].slug}`,
      })
    },
    resetInterval() {
      clearInterval(this.interval)
    },
    setLongInterval() {
      this.interval = setInterval(() => {
        if (!this.pause) {
          this.horzClientSlider.next()
          this.vertClientSlider.next()
        }
      }, 5000)
    },
  },
}
</script>

<style scoped>
.s-card {
  border: 2px solid black;
  @apply rounded-xl;
}
.s-card-active {
  border: 1px solid white;
  @apply bg-opacity-30 bg-gradient-to-t via-transparent from-black rounded-xl;
}

.center-arrow {
  top: 50%;
}
@screen md {
  .center-arrow {
    top: 40%;
  }
}
</style>
