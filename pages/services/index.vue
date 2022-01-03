<template>
  <div>

      <section
        :style="resolveBackground('/img/services-bg.jpg')"
        class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
      >
        <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
          <h1
            class="text-3xl md:text-4xl lg:text-5xl font-arial-black"
          >
            Services
          </h1>

        </div>
      </section>
      <!-- section 3 : card -->
      <section class="lg:py-24 py-10 mx-auto max-w-4/5 text-center container">
        <!-- card-list -->
        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
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
        :style="resolveBackground('/img/change-the-game-bg.jpg')"
        class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center text-center overflow-hidden relative"
      >
        <img class="three-lines" src="~assets/img/services/img_section_3.1.png" alt="" />
        <img class="red-dots" src="~assets/img/services/img_section_3.2_dot.png" alt="" />
        <img class="black-dots" src="~assets/img/services/img_section_3.3_dot.png" alt="" />

        <div class="bg-white rounded-lg py-12 px-8 mx-auto max-w-4/5 container">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
            Change the Game
          </h2>
          <p class="text-lg text-h-gray mt-4">
            Our experts can take your requirements and turn in them into products
            users love.
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

