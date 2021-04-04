<template>
  <div class="px-24 pt-10">
    <!-- section 2: webinars -->
    <div>
      <!-- title -->
      <div class="text-center pb-10">
        <h1 class="font-arial-black text-5xl">{{ blok.title }}</h1>
        <p class="text-h-gray mt-4">
          {{ blok.subtitle }}
        </p>
      </div>

      <!-- list webinars -->
      <div v-for="post in blok.posts" :key="post._uid">
        <!-- card -->
        <div class="bg-b-gray w-full px-6 py-8 grid grid-cols-7 mt-8">
          <div class="col-span-5">
            <!-- author -->
            <div class="flex items-center">
              <div class="h-4 w-4 bg-x-blue rounded-full mr-2"></div>
              <p class="text-sm text-x-grayText">{{ post.author }}</p>
            </div>

            <!-- title -->
            <h1 class="font-arial font-bold text-3xl mt-3">
              {{ post.title }}
            </h1>

            <!-- description -->
            <p class="text-h-gray mt-2">
              {{ post.preview_text }}
            </p>

            <!-- time -->
            <p class="mt-5 text-sm">Feb 11 - 13 minutes</p>
          </div>

          <!-- image -->
          <div class="w-60 h-48 col-span-2 self-center rounded-lg">
            <img :src="post.image.filename" />
          </div>
        </div>
      </div>

      <!-- view all -->
      <div class="inline-block text-x-gray">
        <a
          href="#"
          class="mt-16 border-b-2 border-x-grayText flex border-x-gray font-bold"
        >
          View All Blogs

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 self-center ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
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
}
</script>
