<template>
  <section class="lg:py-24 py-10 max-w-4/5 container border-t border-gray-300 mx-auto overflow-hidden">
    <!-- title -->
    <div class="lg:text-center pb-10 px-2 lg:px-0">
      <h2 class="font-arial-black text-4xl lg:text-5xl">{{ blok.title }}</h2>
      <p class="text-h-gray mt-4 text-lg">
        {{ blok.description }}
      </p>
      <div class="mt-12">
        <template v-for="webinar in blok.webinars">
          <recent-posts :key="webinar.id" :details="webinar"></recent-posts>
        </template>
      </div>
    </div>
    <NuxtLink
      to="/webinars"
      class="text-x-gray inline-block mt-8 underline uppercase tracking-wider text-base"
    >
      View All Webinars >
    </NuxtLink>
  </section>
</template>

<script>

import RecentPosts from '~/components/Sections/RecentPosts'

export default {
  name: 'WebinarContainer',
  components: {
    RecentPosts,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
