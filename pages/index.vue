<template>
  <div class="mx-auto">
    <!--Hero section start-->
    <section class="bgColor-normal-grey">

      <div class="">
        <div class="grid items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-8">
          <div class="py-4 px-10 lg:px-20 order-2 lg:order-1">
            <h1> Vodworks - Solving your technology puzzles</h1>

            <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big">
              We are a global provider of end-to-end software development services. We work closely with our clients to
              create innovative custom software products and build successful engineering teams.
            </p>

            <NuxtLink to="/contact" class="btn-primary btn-lg inline-block">
              Discuss your project
            </NuxtLink>

          </div>

          <div class="order-1 lg:order-2">
            <img class="w-full" src="~/assets/img/hero-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!--Hero section end-->

    <section class="lg:py-8 py-6 bgColor-tertiary-black">

      <div class="mx-auto max-w-4/5 container color-white">

        <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 mx-auto">

          <div class="stats flex items-center gap-4">
            <img src="~assets/img/icons/laptop.svg" alt="" />
            <div>
              <h3>150+</h3>
              <p class="color-white text-regular">Expert Developers</p>
            </div>
          </div>

          <div class="stats flex items-center gap-4">
            <img src="~assets/img/icons/flag.svg" alt="" />
            <div>
              <h3>5+</h3>
              <p class="color-white text-regular">Global Development Centers</p>
            </div>
          </div>

          <div class="stats flex items-center gap-4">
            <img src="~assets/img/icons/box.svg" alt="" />
            <div>
              <h3>300+</h3>
              <p class="color-white text-regular">Projects Delivered</p>
            </div>
          </div>

          <div class="stats flex items-center gap-4">
            <img src="~assets/img/icons/laptop.svg" alt="" />
            <div>
              <h3>200+</h3>
              <p class="color-white text-regular">Customers in more than 20 countriess</p>
            </div>
          </div>

        </div>

      </div>
    </section>



    <!--Services start-->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2>End-to-end Software Development <span class="styled-text">Services</span></h2>
          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-1/2">
            From exploration and consultation to development of scalable software solutions, we provide comprehensive
            technical services that align with your unique business needs.
          </p>
        </div>

        <!-- card list -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-4 mt-8 lg:mt-16">

          <div class="default-card">
            <img src="~assets/img/icons/consulting.svg" alt="" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">Consulting</h3>
            <p class="text-card">Drawing on the expertise of our software development specialists, our consulting services
              blend strategic guidance with strong technical knowledge, enabling you to mitigate risks and optimise
              returns on your technology investments.</p>

            <NuxtLink to="/contact" class="btn-text mt-8 inline-block">
              Read More
            </NuxtLink>
          </div>

          <div class="default-card">
            <img src="~assets/img/icons/engineering.svg" alt="" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">Engineering</h3>
            <p class="text-card">Whether you’re initiating a new software project or seeking assistance with an existing
              one, our global team of initiative-driven developers has the proven track record and skill to build tailored
              software to your business requirements.</p>


            <NuxtLink to="/contact" class="btn-text mt-8 inline-block">
              Read More
            </NuxtLink>
          </div>

          <div class="default-card">
            <img src="~assets/img/icons/data.svg" alt="" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">Data</h3>
            <p class="text-card">We empower your business through data-driven insights, offering BI, reporting, data
              science, and AI solutions. Capture and transform your data for impactful business outcomes.</p>


            <NuxtLink to="/contact" class="btn-text mt-8 inline-block">
              Read More
            </NuxtLink>
          </div>

          <div class="default-card">
            <img src="~assets/img/icons/teams.svg" alt="" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">Teams</h3>
            <p class="text-card">Drawing on our experience in building efficient remote tech teams, we seamlessly
              integrate talent into your organisation, aligning with your business principles and enhancing project
              success.</p>


            <NuxtLink to="/contact" class="btn-text mt-8 inline-block">
              Read More
            </NuxtLink>
          </div>


        </div>
      </div>
    </section>
    <!--Services end-->



    <!--Empower your business today-->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container color-white">


        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-4 text-center md:text-left">

          <div class="">
            <h2 class="heading-1">Empower your business today</h2>
            <NuxtLink to="/contact" class="btn-primary btn-lg mt-16 hidden lg:inline-block invisible md:visible">
              Get in touch with us
            </NuxtLink>
          </div>

          <div class="empowerment">
            <div class="my-8">
              <p class="color-white"><span class="styled-text font-semibold">Stay competitive</span> by leveraging our
                specialised knowledge </p>
            </div>
            <div class="my-8">
              <p class="color-white"><span class="styled-text font-semibold">Reduce development time and cost</span> by
                avoiding the hiring overhead </p>
            </div>
            <div class="my-8">
              <p class="color-white"><span class="styled-text font-semibold">Build scalable, adaptable software</span>
                that meets your evolving business needs </p>
            </div>

            <NuxtLink to="/contact" class="btn-primary btn-lg mt-16 inline-block lg:hidden visible lg:invisible">
              Get in touch with us
            </NuxtLink>


          </div>

        </div>
      </div>
    </section>



    <!-- Custom Software for Your Business-->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 class="">Custom Software for Your <span class="styled-text">Business</span></h2>
          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-3/5">
            We work with diverse clients, spanning from startups to large enterprises in various industries. Our adaptable
            team excels in tailoring solutions to unique working styles and needs, driving innovation with new
            technologies.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4 mt-8 lg:mt-16">

          <div class="default-card">
            <img src="~assets/img/icons/Share.svg" alt="" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">For Startups</h3>
            <p class="text-card">We take your idea from prototype to full-scale launch, offering technical expertise along
              the way to minimize risk and boost success. When we recognise exceptional potential, we also offer
              investment and incubation for new market prospects.</p>
            <ul class="mt-8">
              <li> - MVP and rapid PoCs</li>
              <li> - Tech stack advice</li>
              <li> - Team augmentation</li>
              <li> - Investment and incubation</li>
            </ul>

            <NuxtLink to="/contact" class="btn-text mt-8 inline-block">
              Read More
            </NuxtLink>
          </div>

          <div class="default-card">
            <img src="~assets/img/icons/Rocket.svg" alt="" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">For Enterprise</h3>
            <p class="text-card">We take your idea from prototype to full-scale launch, offering technical expertise along
              the way to minimize risk and boost success. When we recognise exceptional potential, we also offer
              investment and incubation for new market prospects.</p>
            <ul class="mt-8">
              <li> - MVP and rapid PoCs</li>
              <li> - Tech stack advice</li>
              <li> - Team augmentation</li>
              <li> - Investment and incubation</li>
            </ul>
            <NuxtLink to="/contact" class="btn-text mt-8 inline-block">
              Read More
            </NuxtLink>
          </div>

          <div class="default-card">
            <img src="~assets/img/icons/Color-Palette.svg" alt="" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">For Web3</h3>
            <p class="text-card">We take your idea from prototype to full-scale launch, offering technical expertise along
              the way to minimize risk and boost success. When we recognise exceptional potential, we also offer
              investment and incubation for new market prospects.</p>
            <ul class="mt-8">
              <li> - MVP and rapid PoCs</li>
              <li> - Tech stack advice</li>
              <li> - Team augmentation</li>
              <li> - Investment and incubation</li>
            </ul>

            <NuxtLink to="/contact" class="btn-text mt-8 inline-block">
              Read More
            </NuxtLink>
          </div>

        </div>

      </div>
    </section>


    <!--Our Success Stories-->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">

      <div class="mx-auto max-w-4/5 container color-white">
        <div class="text-center">
          <h2>Our Success Stories</h2>
        </div>
        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-4 text-center md:text-left">

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
    </section>


    <!-- Why Choose Vodworks?-->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container color-white">

        <div class="text-center">
          <h2>Why Choose Vodworks?</h2>
        </div>


        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-8 mt-8 lg:mt-16">


          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">Optimize development cost</h3>
            <p class="color-white text-regular">We work closely with you through every stage of the development process,
              making sure we tackle risks and
              set your technology investments up for success</p>
          </div>

          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">Faster time-to-market</h3>
            <p class="color-white text-regular">We build rapid PoCs and MVPs to reduce time-to-market, and implement
              time-tested agile processes to ensure
              quick and successful delivery of full-scale software products</p>
          </div>

          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">Diverse technical expertise</h3>
            <p class="color-white text-regular">With more than 150 highly-skilled developers and a global network of
              experts, we guarantee the right
              technical talent for your business needs</p>
          </div>

          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">Flexible teams</h3>
            <p class="color-white text-regular">We offer an agile and flexible working approach, supporting you to quickly
              scale your projects up or down
            </p>
          </div>

          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">End-to-end services</h3>
            <p class="color-white text-regular">We support clients from ideation to launch, offering consistent and
              integrated technical services
              throughout the development cycle</p>
          </div>

          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">Global presence</h3>
            <p class="color-white text-regular">We cater to diverse technical and budget requirements, and serve clients
              spanning various time zones</p>
          </div>

        </div>
      </div>
    </section>


    <!-- Meet Our Team -->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 class="">Meet Our <span class="styled-text">Team</span></h2>
          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-3/5">
            Meet our dynamic leadership team, a group of tech industry veterans with extensive experience across
            industries and regions. Their combined expertise drives innovation and passion at the heart of our company.
          </p>
        </div>

      </div>
    </section>







    <!--Webflow -->
    <section class="lg:py-24 py-10 items-center bg-no-repeat bg-cover bg-center mx-auto"
      :style="resolveBackground('/img/bg_home_4.png')">
      <!-- content 1 -->
      <div v-if="getOpertareSeamlesslyData"
        class="grid md:grid-cols-2 items-center color-white mx-auto max-w-4/5 container">
        <!-- text -->
        <div class="lg:w-5/6">

          <h4 class=" text-2xl lg:text-3xl">
            {{ getOpertareSeamlesslyData.title }}
          </h4>
          <p class="mt-4 lg:text-lg opacity-80">
            {{ getOpertareSeamlesslyData.description }}
          </p>
        </div>

        <!-- image -->
        <div class="relative">
          <img :src="getOpertareSeamlesslyData.image_1x.filename"
            :srcset="`${getOpertareSeamlesslyData.image_1x.filename} 1x,${getOpertareSeamlesslyData.image_1x.filename} 2x`"
            :alt="getOpertareSeamlesslyData.image_1x.alt" class="mx-auto hvr-right" />
        </div>
      </div>

      <!-- cotent 2 -->
      <div v-if="getOutsourcedProductsData" class="grid md:grid-cols-2 items-center mx-auto max-w-4/5 gap-12 container">
        <!-- image -->
        <div class="relative order-2 md:order-none">
          <img :src="getOutsourcedProductsData.image_1x.filename"
            :srcset="`${getOutsourcedProductsData.image_1x.filename} 1x,${getOutsourcedProductsData.image_2x.filename} 2x`"
            :alt="getOutsourcedProductsData.image_1x.alt" class="order-2 lg:order-none mx-auto hvr-left" />
        </div>

        <!-- text -->
        <div class="color-white">
          <h4 class=" text-2xl lg:text-3xl mt-8 lg:mt-0">
            {{ getOutsourcedProductsData.title }}
          </h4>
          <p class="mt-4 lg:text-lg opacity-80">
            {{ getOutsourcedProductsData.description }}
          </p>
        </div>
      </div>
    </section>
    <!--End web flow -->

    <!-- Statistics start-->
    <!--  <section v-if="getStatisticsData" class="py-10 lg:py-20 bgColor-grey">
      <div class="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-4/5 container gap-8">
        <div class="lg:border-r">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl ">{{ getStatisticsData.card_1_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_1_title }}</p>
        </div>
        <div class="lg:border-r">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl ">{{ getStatisticsData.card_2_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_2_title }}</p>
        </div>
        <div class="lg:border-r">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl ">{{ getStatisticsData.card_3_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_3_title }}</p>
        </div>
        <div class="">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl ">{{ getStatisticsData.card_4_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_4_title }}</p>
        </div>
      </div>
    </section>-->
    <!-- Statistics end-->

    <!-- Expert developers start-->
    <section id="home-expert" class="lg:py-24 py-10 grid grid-rows-1 lg:grid-cols-2 mx-auto container">

      <div class="bg-no-repeat bg-cover bg-center py-40 lg:py-72 relative order-2 lg:order-1">

        <div ref="rotateAnimation"
          class="absolute inset-0 w-3/4 right-0 left-0 bottom-0 top-0 bg-contain bg-center bg-no-repeat mx-auto">
          <div
            class="absolute transition duration-700 ease-linear mx-auto transform right-0 left-0 bottom-0 top-0 z-50 lg:h-72 h-24 w-24 lg:w-72 dev-card overflow-hidden filter drop-shadow-lg bg-white -translate-y-6 lg:-translate-y-20"
            style="top: 25%">
            <img src="~assets/img/home/developers_mobile.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0" alt="Developers Mobile" />
          </div>
          <div
            class="absolute lg:h-72 lg:w-72 h-24 w-24 right-0 mx-auto left-0 bottom-0 top-0 z-20 transform transition duration-700 ease-linear dev-card overflow-hidden filter drop-shadow-lg bg-white translate-x-12 translate-y-9 lg:translate-x-36 lg:translate-y-10"
            style="top: 25%">
            <img src="~assets/img/home/developers_backend.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0" alt="Developers Backend" />
          </div>
          <div
            class="absolute lg:h-72 lg:w-72 h-24 w-24 right-0 mx-auto left-0 bottom-0 top-0 z-10 transform transition duration-700 ease-linear dev-card overflow-hidden filter drop-shadow-lg bg-white -translate-x-12 lg:-translate-x-28 translate-y-12 lg:translate-y-24"
            style="top: 25%">
            <img src="~assets/img/home/developers_platform.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0" alt="Developers Platform" />
          </div>
        </div>
      </div>

      <!-- text: right -->
      <div v-if="getExpertSlidesData"
        class="lg:ml-20 self-center order-1 lg:order-2 md:order-2 items-center text-center lg:text-left">

        <h2 class="color-black text-3xl md:text-4xl lg:text-5xl  lg:pr-24" style="width: 90%">
          {{ getExpertSlidesData[count] }}
        </h2>


        <NuxtLink to="/contact" class="mt-8 py-4 px-6 button-red rounded-md inline-block color-white font-bold uppercase">
          Discuss Your Project
        </NuxtLink>
      </div>
    </section>
    <!-- Expert developers end-->

    <!-- Our clients start-->
    <section v-if="getOurClientsData" class="lg:py-24 py-10 bgColor-grey">
      <div class="mx-auto max-w-4/5 text-center mb-0 lg:mb-8">
        <h2 class="color-black text-3xl md:text-4xl lg:text-5xl ">
          {{ getOurClientsData.title }}
        </h2>
      </div>
      <!-- logo -->
      <div class="h-48 flex justify-center items-center relative">
        <div ref="horzClientSlider" class="keen-slider w-full h-full">
          <div v-for="(item, index) in getOurClientsData.slides" :key="index"
            class="keen-slider__slide flex justify-center items-center">
            <div class="flex justify-center transition duration-1000 ease-in-out">
              <div :class="[
                relativeClientSlide === index ? 'opacity-100' : 'opacity-30',
                `w-64`,
              ]">
                <img :src="item.content.client_logo.filename" :alt="item.content.client_logo.alt"
                  class="object-contain" />
                <!-- <a href="1" class="hidden"></a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end clients -->

      <!-- banner -->
      <div class="lg:w-11/12 py-4 mx-auto lg:rounded-lg bg-no-repeat bg-cover bg-center color-white container mx-auto"
        :style="resolveBackground('/img/bg_home_5.png')">
        <div class="flex items-center md:items-baseline 2xl:max-w-9/10 mx-auto">
          <div ref="vertClientSlider" class="keen-slider h-486 md:h-80">
            <div v-for="(item, index) in getOurClientsData.slides" :key="index"
              class="w-full keen-slider__slide h-full flex items-center md:flex-none">
              <div
                class="flex flex-col-reverse md:flex-row justify-between w-full px-10 lg:px-20 md:h-full md:items-center align-middle">
                <div class="space-y-8 text-center md:text-left">
                  <p
                    class="transform translate-y-0 transition duration-1000 ease-out text-2xl font-bold max-w-full md:max-w-1/2 text-center md:text-left">
                    {{ item.content.name }}
                  </p>
                  <p
                    class="color-white font-arial text-sm md:text-base text-opacity-60 whitespace-normal text-justify md:text-left">
                    {{ item.content.overview }}
                  </p>
                </div>

                <div id="services-banner-logo"
                  class="self-center justify-self-center lg:w-auto overflow-hidden flex-shrink-0 inline-block">
                  <img :src="item.content.client_logo.filename" :class="[
                    relativeClientSlide === index
                      ? 'filter invert'
                      : 'filter-none',
                    'filter h-20 invert transform translate-y-0 transition duration-1000 ease-out object-contain',
                  ]" :alt="item.content.client_logo.alt" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Our clients end-->



  </div>
</template>

<script>
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
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
      resolve_relations: 'services-container.services,expert-section-container.slides,our-clients-container.slides,industries-served.industries',
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
      count: 0,
      vertClientSlider: {},
      horzClientSlider: {},
      relativeClientSlide: 0,
      story: { content: {} },
    }
  },

  head() {
    return {
      title: 'Software Development Company | Vodworks',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development, it company, software development company, software development companies, development company, software development service, software development services, software developer company, software development firm, product development services, software development services company, database management company'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Software Development Company | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more',
        },

      ],
    }
  },
  computed: {
    getHeroData() {
      return this.story.content.body[0]
    },
    getServicesData() {
      return this.story.content.body[1]
    },
    getOpertareSeamlesslyData() {
      return this.story.content.body[2]
    },
    getOutsourcedProductsData() {
      return this.story.content.body[3]
    },
    getStatisticsData() {
      return this.story.content.body[4]
    },

    getExpertSlidesData() {
      const items = this.story.content.body[5].slides
      const array = items.map(function (item) {
        return item.content.slide_data
      })
      // this.expertSection=array
      return array

    },
    getOurClientsData() {
      return this.story.content.body[6]
    },
    getIndustriesData() {
      return this.story.content.body[8]
    },
    getJoinOurTeamData() {
      return this.story.content.body[9]
    },
    getShareWithUsData() {
      return this.story.content.body[10]
    },
    getCTAData() {
      return this.story.content.body[11]
    }

  },
  mounted() {
    this.expertSectionAnimation()
    this.initVertClientSlider()
    this.initHorzClientSlider()
    this.setLongInterval()
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
    gotoService(slug) {
      this.$router.push({
        path: '/services/' + slug,
      })
    },
    gotoIndustries(slug) {
      this.$router.push({
        path: '/industries/' + slug,
      })
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
