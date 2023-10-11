<template>
  <div>
    <div class="py-12 text-center">
      <h2>Services/Consulting</h2>
      <p>My path is: {{ $route.path }}</p>
    </div>


    <!-- Featured CTA (Light version) 
      
    <section class="lg:py-32 py-14">
      <div class="mx-auto max-w-4/5 container">


        <div
          class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 items-center gap-4 md:gap-16 text-center md:text-left">

          <div class="md:col-span-7">
            <h2 class="heading-1 col-start-1 col-end-3">Discuss your project with us!</h2>

          </div>

          <div class="md:col-span-5 text-center">
            <NuxtLink to="/contact" class="btn-primary inline-block btn-lg mt-8 md:mt-0">
              Book a consultation
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>

    -->



  </div>
</template>


<script>
export default {
  data() {
    return {
      story: { content: {} },
    }
  },
  head() {
    return {
      title: 'Consulting',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Consulting',
        },
      ],
    }
  },

}
</script>
  