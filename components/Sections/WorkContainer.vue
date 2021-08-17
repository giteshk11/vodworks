<template>
  <div class="bg-section">
    <div class="overflow-hidden -mt-1">
      <div
        class="mt-20 mb-40 lg:w-2/3 mx-auto px-5 lg:px-0 text-white lg:text-center"
      >
        <h1 class="font-arial-black lg:text-56 text-41 leading-none py-3 title">
          Our Work
        </h1>
        <p>
          Go beyond napkin sketches. We help business owners demonstrate
          functionality and feasibility by bringing your ideas to life. Design,
          develope, and prove your core concept with our agile team. Proof of
          concepts provide the quickest and most accurate way to validate or
          invalidate assumptions about your target users and concept.
        </p>
      </div>
    </div>
    <!-- end hero section -->

    <!-- section 3 : card -->
    <div class="text-center pb-36 -mt-20 lg:-mt-0 overflow-hidden relative">
      <!-- card-list -->
      <div class="grid lg:grid-cols-4 px-10 gap-7 mt-10">
        <!-- card -->
        <template v-for="work in blok.work">
          <div
            :key="work.id"
            class="bg-b-dark-gray rounded-2xl p-4 text-white hover:cursor-pointer"
            @click="isLightBoxVisible = true"
          >
            <NuxtLink :to="`/${work.full_slug}`">
              <!-- image -->
              <img
                :src="work.content.thumbnail.filename"
                class="w-full h-56 rounded-tr-2xl rounded-tl-2xl object-contain"
              />

              <!-- text -->
              <p class="mt-5 font-bold text-2xl">{{ work.content.title }}</p>
            </NuxtLink>
          </div>
        </template>
      </div>

      <!-- CTA -->
      <div class="my-40 bg-white lg:w-3/4 mx-5 mb-20 lg:mx-auto pb-20 relative">
        <h1 class="font-arial-black lg:text-56 text-41 pt-14 title">
          Change the Game
        </h1>
        <p class="mt-3 mb-14">
          Our experts can take your requirements and turn in them into products
          users love.
        </p>
        <NuxtLink
          to="/contact"
          class="font-bold button-linear-red py-5 px-6 rounded-lg text-white"
        >
          GET IN TOUCH
        </NuxtLink>
      </div>
    </div>

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
