<template>
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
        to="/contact/"
        class="font-bold button-red py-4 px-6 rounded-lg text-white inline-block mt-8 uppercase"
      >
       Get In Touch
      </NuxtLink>
    </div>
    <!-- ++ -->
  </section>
</template>

<script>

  export default {
    name: 'CallToAction',
    methods: {
      resolveBackground(path) {
        return `background-image: url(${require('~/assets' + path)});`
      },
    },
  }
</script>

