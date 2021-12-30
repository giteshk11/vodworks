<template>
  <div class="">


    <section
      :style="resolveBackground('/img/services-bg.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
    >
      <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
        <h1
          class="text-white text-3xl md:text-4xl lg:text-5xl font-arial-black"
        >
          Our Work
        </h1>
        <p class="mt-4 lg:text-lg">
          Go beyond napkin sketches. We help business owners demonstrate
          functionality and feasibility by bringing your ideas to life. Design,
          develope, and prove your core concept with our agile team. Proof of
          concepts provide the quickest and most accurate way to validate or
          invalidate assumptions about your target users and concept.
        </p>
      </div>
    </section>

    <!-- end hero section -->

    <!-- section 3 : card -->
    <section class="lg:py-32 py-20 text-center relative mx-auto max-w-4/5 container">
      <!-- card-list -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <!-- card -->
        <template v-for="work in blok.work">
          <div
            :key="work.id"
            class="bg-b-dark-gray rounded-xl p-4 text-white hover:cursor-pointer hvr-top"
            @click="isLightBoxVisible = true"
          >
            <NuxtLink :to="`/${work.full_slug}`">
              <!-- image -->
              <img
                :src="work.content.thumbnail.filename"
                class="w-full h-56 rounded-tr-xl rounded-tl-xl object-contain"
                alt=""
              />

              <!-- text -->
              <p class=" mt-4 font-bold text-xl">{{ work.content.title }}</p>
            </NuxtLink>
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


    <div v-if="isLightBoxVisible" class="absolute inset-0 z-50"></div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLightBoxVisible: false,
    }
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  },
}
</script>
