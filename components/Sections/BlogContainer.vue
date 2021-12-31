<template>
  <!-- section 3: blogs -->
  <div
    class="lg:py-24 py-10 max-w-4/5 container mx-auto border-t border-gray-300 overflow-hidden"
  >
    <!-- title -->
    <div class="lg:text-center">
      <h2 class="font-arial-black text-4xl lg:text-5xl">Blogs</h2>
      <p class="text-h-gray mt-4">
        Stay up-to-date with our latest projects, team updates, and more!
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-6 mt-12">
      <template v-for="blog in blok.blogs" >
        <recent-posts :key="blog.id" :details="blog"></recent-posts>
      </template>
    </div>
    <NuxtLink
      to="/blogs"
      class="text-x-gray inline-block mt-16 underline uppercase tracking-wider text-base"
    >
      View All Blogs >
    </NuxtLink>
  </div>
</template>

<script>
import RecentPosts from '~/components/Sections/RecentPosts'

export default {
  name: 'BlogContainer',
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
