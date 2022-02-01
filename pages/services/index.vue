<template>
  <div>
    <section
      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
    >
      <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">
          Services
        </h1>
        <p class="mt-4 lg:text-lg">
          Supercharge your project. We help you with the concept, design, delivery, ongoing optimization, and maintenance. Working closely with your team together we build innovative custom-made products using the latest tools and technologies.
        </p>
      </div>
    </section>
    <!-- section 3 : card -->
    <section class="lg:py-24 py-10 mx-auto max-w-4/5 text-center container">
      <!-- card-list -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <!-- card -->
        <template v-for="(slide, i) in slides">
          <div
            :key="i"
            class="justify-self-center p-4 box-card rounded-md w-full"
            @click="gotoService(i)"
          >
            <!-- image -->
            <div class="">
              <img
                class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
                :src="
                  require(`~/assets/img/services/${slide.image}_section_2.png`)
                "
                alt=""
              />

              <!-- text -->
            </div>
            <p class="mt-4 text-center font-bold text-xl">
              {{ slide.title }}
            </p>
          </div>
        </template>
      </div>
    </section>

    <!-- CTA -->
    <section
      :style="resolveBackground('/img/home-hero-bg.83a56ef.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center text-center overflow-hidden relative"
    >
      <div class="py-12 px-8 mx-auto max-w-4/5 container">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-arial-black text-white"
        >
          Change the Game
        </h2>
        <p class="text-lg mt-4 text-white">
          Our experts bring your ideas and innovations to life.
        </p>
        <NuxtLink
          to="/contact"
          class="font-bold button-red py-4 px-6 rounded-lg text-white inline-block mt-8"
        >
          GET IN TOUCH
        </NuxtLink>
      </div>
      <!-- ++ -->
    </section>
  </div>
</template>

<script>
import ServiceSlides from '~/static/service-slides'
export default {
  data() {
    return {
      slides: ServiceSlides,
    }
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
    gotoService(index) {
      this.$router.push({
        path: `/services/${this.slides[index].slug}`,
      })
    },
  },
}
</script>
