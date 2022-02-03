<template>
  <div class="">


    <!-- section 3 : card -->
    <section
      class="lg:py-32 py-20 text-center relative mx-auto max-w-4/5 container"
    >
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
              <p class="mt-4 font-bold text-xl">{{ work.content.title }}</p>
            </NuxtLink>
          </div>
        </template>
      </div>
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
