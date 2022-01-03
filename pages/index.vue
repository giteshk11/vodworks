<template>
  <div class="font-arial mx-auto">
    <!-- hero section -->
    <div
      class="lg:py-24 py-10 items-center bg-no-repeat bg-cover bg-center"
      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
    >
      <div class="relative overflow-hidden">
        <div class="w-full relative z-50">
          <div class="grid xl:grid-cols-12 gap-2 mx-auto max-w-4/5 items-center container">
            <!-- text -->
            <div
              class="xl:col-span-7 text-lg"
            >
              <h1
                class="text-white text-3xl md:text-4xl lg:text-5xl font-arial-black"
              >
                We Deliver Amazing Web, Mobile & Digital Experience
              </h1>

              <p class="text-white mt-8 lg:pr-24">
                Developing Custom Software & Digital Products at Scale for
                Start-ups and Enterprises since 2012.
              </p>
              <p class="text-white mt-4 lg:pr-24">
                Work with Top Development Company, Awesome Developers and
                On-Demand Agile Teams.
              </p>

              <div class="mt-8">
                <NuxtLink
                  to="/contact"
                  class="px-6 py-4 bg-white rounded-md text-l-red font-bold inline-block"
                >
                  DISCUSS YOUR PROJECT
                </NuxtLink>
              </div>
            </div>

            <!-- image -->
            <img src="~assets/img/img_home.png" class="xl:col-span-5 object-contain hvr-right" alt="" />
          </div>
        </div>
      </div>
      <!-- end hero section -->


    </div>

    <section class="lg:py-24 py-10 mx-auto max-w-4/5">
      <div class="z-50 relative text-white text-center">

        <div class="mx-auto md:max-w-4/5">
            <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
              Our Services
            </h2>
            <p class="text-h-gray mt-4 text-lg">
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
              class="mt-8 py-4 px-6 rounded-md font-bold uppercase button-red inline-block"
            >
              View Services
            </NuxtLink>
          </div>

        <!-- card list -->
        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-8 mt-16 services-card container"
        >

            <div
              v-for="(slide, i) in cardSlides"
              :key="i"
              class="justify-self-center p-4 box-card rounded-md w-full"
              @click="$router.push({ path: `/services/${slide.slug}` })"
            >
              <!-- card -->
              <img
                :src="require(`~/assets/img/home/home_card/${slide.image}.png`)"
                :alt="slide.image"
                class="lg:w-60 w-80 h-44 rounded-md object-contain mx-auto"
              />
                <p class="color-black mt-4 text-center font-bold text-xl">
                  {{ slide.title }}
                </p>

            </div>
            <!-- card -->

        </div>

      </div>
    </section>

    <!-- end services -->


    <!-- webflow -->
    <div
      class="lg:py-24 py-10 items-center bg-no-repeat bg-cover bg-center mx-auto"
      :style="resolveBackground('/img/bg_home_4.png')"
    >
      <!-- content 1 -->
      <div class="grid lg:grid-cols-2 items-center text-white mx-auto max-w-4/5 my-8 container">
        <!-- text -->
        <div class="lg:w-5/6">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-arial-black text-center lg:text-left"
          >
            On Demand Webflow
          </h2>
          <h4 class="mt-16 lg:mt-12 font-arial-black text-2xl lg:text-3xl">
            Augmented Teams & Developers
          </h4>
          <p class="mt-4 lg:text-lg opacity-80">
            Expand your existing team with ready-to-go developers ready to
            accelerate your process. Fluent in agile development and the latest
            technology stacks, hire on demand engineers to get your product
            live, faster.
          </p>
        </div>

        <!-- image -->
        <div class="relative mt-0 lg:mt-16">
          <img
            src="~assets/img/img_home_ondemand1.png"
            class="mx-auto hvr-right"
            alt=""
          />
        </div>

      </div>

      <!-- cotent 2 -->
      <div class="grid lg:grid-cols-2 items-center mx-auto max-w-4/5 mt-8 lg:mt-16 gap-12 container">

        <!-- image -->
        <div class="relative">
          <img
            src="~assets/img/img_home_ondemand2.png"
            class="order-2 mt-8 lg:mt-0 lg:order-none mx-auto hvr-left"
            alt=""
          />
        </div>

        <!-- text -->
        <div
          class="text-white"
        >
          <h4 class="mt-4 font-arial-black text-2xl lg:text-3xl">
            Outsourced Product Development
          </h4>
          <p class="mt-4 text-lg opacity-80">
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


    <!-- expert developers -->
    <div
      id="home-expert"
      class="lg:py-24 py-10 grid grid-rows-1 lg:grid-cols-2 mx-auto container"
    >
      <!-- image: left -->
      <div
        class="bg-no-repeat bg-cover bg-center py-40 lg:py-72 relative order-2 lg:order-1"
      >
        <!-- background circle -->
        <img
          src="~assets/img/bg_home_3.png"
          class="absolute w-4/5 md:w-1/2 lg:w-3/4 top-0 bottom-0 right-0 left-0 m-auto z-0 hidden lg:visible"
          alt=""
        />

        <!-- dot -->
        <img
          src="~assets/img/home_dot_1.png"
          class="absolute left-20 lg:left-1/4 bottom-1/2 lg:bottom-3/4 z-0 lg:visible"
          alt=""
        />

        <img
          src="~assets/img/home_dot_2.png"
          class="absolute right-7 bottom-20 z-0 lg:visible"
          alt=""
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
              alt=""
            />
          </div>
          <div
            class="absolute lg:h-72 lg:w-72 h-24 w-24 right-0 mx-auto left-0 bottom-0 top-0 z-20 transform transition duration-700 ease-linear dev-card overflow-hidden filter drop-shadow-lg bg-white translate-x-12 translate-y-9 lg:translate-x-36 lg:translate-y-10"
            style="top: 25%"
          >
            <img
              src="~assets/img/home/developers_backend.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0"
              alt=""
            />
          </div>
          <div
            class="absolute lg:h-72 lg:w-72 h-24 w-24 right-0 mx-auto left-0 bottom-0 top-0 z-10 transform transition duration-700 ease-linear dev-card overflow-hidden filter drop-shadow-lg bg-white -translate-x-12 lg:-translate-x-28 translate-y-12 lg:translate-y-24"
            style="top: 25%"
          >
            <img
              src="~assets/img/home/developers_platform.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- text: right -->
      <div
        class="lg:ml-20 self-center order-1 lg:order-2 md:order-2 items-center text-center lg:text-left"
      >
        <h2
          class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black lg:pr-24"
        >
          {{ expertSection[count] }}
        </h2>
        <NuxtLink
          to="/contact"
          class="mt-8 py-4 px-6 button-red rounded-md inline-block text-white font-bold uppercase"
        >
          Discuss Your Project
        </NuxtLink>
      </div>
    </div>
    <!-- end expert developers -->


    <section class="lg:py-24 py-10 bgColor-grey">
      <div class="mx-auto max-w-4/5 text-center mb-0 lg:mb-8">
        <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
          Our Clients
        </h2>
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

      <!-- banner -->
      <div
        class="lg:w-11/12 py-4 mx-auto lg:rounded-lg bg-no-repeat bg-cover bg-center text-white container mx-auto"
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
                    :src="require(`~/assets/img/home/home_logo/${item.image}.png`)"
                    :class="[
                    relativeClientSlide === index
                      ? 'filter invert'
                      : 'filter-none',
                    'filter h-20 invert transform translate-y-0 transition duration-1000 ease-out object-contain',
                  ]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- industries -->
    <section class="lg:py-24 py-10 mx-auto max-w-4/5 container">
      <div>
        <h2
          class="color-black mb-8 text-3xl md:text-4xl lg:text-5xl font-arial-black text-center mb-8 lg:mb-16"
        >
          Industries Served
        </h2>

        <!-- card -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <!-- card 1 -->
          <div class="justify-self-center p-4 box-card rounded-md w-full">
            <!-- image -->
            <img
              class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
              src="~assets/img/home/industries_media.png"
              alt=""
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
          <div class="justify-self-center p-4 box-card rounded-md w-full">
            <!-- image -->
            <img
              class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
              src="~assets/img/home/industries_fintech.png"
              alt=""
            />

            <!-- text -->
            <p class="mt-4 text-center font-bold text-xl">FinTech</p>
            <p class="text-center text-sm text-h-gray">
              Evolving wealth management
            </p>
          </div>

          <!-- card 1 -->
          <div class="justify-self-center p-4 box-card rounded-md w-full">
            <!-- image -->
            <img
              class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
              src="~assets/img/home/industries_ecommerce.png"
              alt=""
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
          <div class="justify-self-center p-4 box-card rounded-md w-full">
            <!-- image -->
            <img
              class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
              src="~assets/img/home/industries_loyalty.png"
              alt=""
            />

            <!-- text -->
            <p class="mt-4 text-center font-bold text-xl">Loyalty & Rewards</p>
            <p class="text-center text-sm text-h-gray">
              Interact, discover, & reward customers
            </p>
          </div>

          <!-- card 1 -->
          <div class="justify-self-center p-4 box-card rounded-md w-full">
            <!-- image -->
            <img
              class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
              src="~assets/img/home/industries_data.png"
              alt=""
            />

            <!-- text -->
            <p class="mt-4 text-center font-bold text-xl">Data & Analytics</p>
            <p class="text-center text-sm text-h-gray">
              Intelligent analytics solutions
            </p>
          </div>

          <!-- card 1 -->
          <div class="justify-self-center p-4 box-card rounded-md w-full">
            <!-- image -->
            <img
              class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
              src="~assets/img/home/industries_iot.png"
              alt=""
            />

            <!-- text -->
            <p class="mt-4 text-center font-bold text-xl">IoT</p>
            <p class="text-center text-sm text-h-gray">
              Connecting technology in day-to-day
            </p>
          </div>

          <!-- card 1 -->
          <div class="justify-self-center p-4 box-card rounded-md w-full">
            <!-- image -->
            <img
              class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
              src="~assets/img/home/industries_telecom.png"
              alt=""
            />

            <!-- text -->
            <p class="mt-4 text-center font-bold text-xl">Telecommunications</p>
            <p class="text-center text-sm text-h-gray">Innovative IT expertise</p>
          </div>
          <!-- card 1 -->
          <div class="justify-self-center p-4 box-card rounded-md w-full">
            <!-- image -->
            <img
              class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
              src="~assets/img/home/industries_telecom1.png"
              alt=""
            />

            <!-- text -->
            <p class="mt-4 text-center font-bold text-xl">Blockchain</p>
            <p class="text-center text-sm text-h-gray">
              Distributed ledger technologies
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- end industries -->

    <!-- clients-->


    <section class="lg:py-24 py-10 mx-auto max-w-4/5 container">

      <div class="grid lg:grid-cols-2 items-center">
        <!-- team -->
        <div class="overflow-x-hidden rounded-full order-2 lg:order-none hvr-right">
          <img
            class="w-80 mx-auto md:m-0"
            src="~assets/img/home/our_team_1.png"
            alt=""
          />
        </div>
        <div class="my-8 lg:my-0">
          <!-- text -->
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
            Join Our Team
          </h2>

          <p class="text-lg text-h-gray mt-4">
            Where impact meet opportunity. Our engineering team builds bespoke
            solutions for global brands. Fully remote, always communicating, and
            fully transparent, see why our employees love working for Vodworks.
          </p>
          <NuxtLink
            to="/career"
            class="inline-block mt-8 py-4 px-6 button-red rounded-md text-white font-bold uppercase"
          >
            GET STARTED
          </NuxtLink>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 items-center">
        <div class="my-8 lg:my-0">
          <!-- text -->
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
            Learn With Us
          </h2>

          <p class="text-lg text-h-gray mt-4">
            Knowledge share is core to our business model. Learn from industry
            experts, check out our webinars, or take a peek at our culture!
          </p>
          <NuxtLink
            to="/blogs-and-webinars"
            class="mt-8 py-4 px-6 button-red rounded-md text-white font-bold uppercase relative inline-block"
          >
            Explore blogs & Webinars
          </NuxtLink>
        </div>
        <!-- team -->
        <div class="overflow-x-hidden rounded-full hvr-left">
          <img
            class="w-80 mx-auto"
            src="~assets/img/home/learn_with_us_1.png"
            alt=""
          />
        </div>
      </div>

    </section>



    <section
      class="lg:py-24 py-10 items-center bg-no-repeat bg-cover bg-center"
      :style="resolveBackground('/img/home/get-in-touch-bg.jpg')"
    >

      <div
        class="overflow-hidden grid lg:grid-cols-2 md:gap-2 items-center text-white relative z-10"
      >
        <div class="mx-auto max-w-3/4">
          <h2
            class="text-white text-3xl md:text-4xl lg:text-5xl font-arial-black"
          >
            Got a new idea? <span class="block font-arial-black">Let’s Talk
            <img
            class="inline-block	align-middle"
            src="~assets/img/announcement.svg"
            alt="Speaker icon"
          /></span>
          </h2>
          <NuxtLink
            to="/contact"
            class="mt-8 py-4 px-6 button-red rounded-md font-bold uppercase inline-block"
          >
            GET IN TOUCH
          </NuxtLink>
        </div>

        <!-- img lg -->

        <img
          src="~assets/img/bg_home_8.1.png"
          class="hidden lg:block w-full h-full object-contain z-10"
          alt=""
        />
      </div>

    </section>

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
      title: 'VODWORKS Solving Technology Puzzles In Industries Globally',
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
    // getImgUrl(url){
    //   return require('~assets/img/home/home_card/' + url + '.png')
    // },
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
        duration: 1500,
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
        duration: 1500,
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
