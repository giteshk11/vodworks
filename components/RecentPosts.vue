<template>
  <div>
    <!-- <div
      class="bg-no-repeat bg-cover bg-center lg:text-center pt-14 lg:pt-44 pb-16 lg:pb-36 lg:px-60 px-5"
      :style="`background-image: url(${require('~/assets/img/bg_main_blog.png')})`"
    >
      <h1 class="font-arial-black text-4xl lg:text-5xl">
        Our Latest Blogs & Webinars
      </h1>
      <p class="lg:text-lg text-base mt-6 text-h-gray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet
        justo donec. Pulvinar mattis nunc sed blandit libero volutpat sed. Sed
        felis eget velit aliquet sagittis id consectetur purus ut. Mattis
        rhoncus urna neque viverra justo nec ultrices dui. Curabitur vitae nunc
        sed velit dignissim sodales ut.
      </p>
    </div> -->
    <!-- section 2: webinars -->

    <div class="lg:px-60 px-5 lg:py-24 py-20 overflow-hidden">
      <!-- title -->
      <div class="lg:text-center pb-10 px-2 lg:px-0">
        <h1 class="font-arial-black text-4xl lg:text-5xl">{{ blok.title }}</h1>
        <p class="text-h-gray mt-4">
          {{ blok.subtitle }}
        </p>
      </div>

      <!-- list webinars -->
      <div v-for="post in blok.posts" :key="post._uid">
        <!-- card -->
        <template v-if="post.type === 'webinar'">
          <div
            class="bg-b-gray w-full lg:px-6 px-3 lg:py-8 py-4 grid lg:grid-cols-7 mt-8 rounded-xl"
          >
            <div class="lg:col-span-5">
              <!-- author -->
              <div class="flex items-center">
                <div class="h-4 w-4 bg-x-blue rounded-full mr-2"></div>
                <p class="text-sm text-x-grayText">{{ post.author }}</p>
              </div>

              <!-- title -->
              <h2 class="font-arial font-bold text-3xl mt-3">
                {{ post.title }}
              </h2>

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
        </template>
        <template v-else>
          <!-- card-1 -->
          <div>
            <!-- image -->
            <div class="lg:px-16">
              <img
                :src="post.image.filename"
                class="mx-auto mt-20 w-full h-full lg:rounded-lg rounded-xl"
              />
            </div>

            <!-- descript -->
            <div class="lg:mt-8 mt-6">
              <!-- author -->
              <div class="flex items-center mb-8">
                <div class="h-4 w-4 bg-x-blue rounded-full mr-4"></div>
                <p class="text-x-grayText text-sm">
                  {{ post.author }}
                </p>
              </div>

              <!-- title -->
              <a href="#" class="font-arial font-bold text-3xl tracking-tight">
                {{ post.title }}
              </a>

              <!-- description -->
              <p class="mt-2 text-h-gray truncate-3-lines lg:truncate-2-lines">
                {{ post.preview_text }}
              </p>

              <!-- time -->
              <div class="lg:w-1/4 flex mt-8 text-h-gray text-sm">
                <p class="lg:border-r lg:border-gray-300 lg:pr-4">Feb 11</p>
                <span class="inline-block lg:hidden mx-3">-</span>
                <p class="lg:ml-4">13 minutes read</p>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="lg:inline-block text-x-gray flex justify-center">
        <a
          href="#"
          class="mt-16 border-b-2 border-x-grayText flex border-x-gray font-bold"
        >
          VIEW ALL {{ blok.title }}

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
