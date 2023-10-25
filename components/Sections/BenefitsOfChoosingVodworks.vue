<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container color-white">

          <div class="text-center">
              <h2>{{ why_choose_vodworks.title }}</h2>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-8 mt-8 lg:mt-16">

              <template v-for="(card, i) in why_choose_vodworks.list">
                  <div :key="i" class="my-4 lg:my-4 text-center md:text-left">
                      <h3 v-in-viewport class="mb-4 inline-block capitalize"> <span class="bgFill"><span
                                  class="textClip color-white">{{ card.title }}</span></span> </h3>
                      <p class="color-white text-regular">{{ card.description }}</p>
                  </div>
              </template>

          </div>
      </div>
  </section>
</template>
  
<script>

export default {
  name: 'BenefitsOfChoosingVodworks',

  data() {
    return {

      why_choose_vodworks: {
        title: "Why Choose Vodworks?",
        list: [
          {
            title: "Optimize development cost",
            description: "We work closely with you through every stage of the development process, making sure we tackle risks and set your technology investments up for success"
          },
          {
            title: "Faster time-to-market",
            description: "We build rapid PoCs and MVPs to reduce time-to-market, and implement time-tested agile processes to ensure quick and  successful delivery of full-scale software products"
          },
          {
            title: "Diverse technical expertise",
            description: "With more than 150 highly-skilled developers and a global network of experts, we guarantee the right technical talent for your business needs"
          },
          {
            title: "Flexible teams",
            description: "We offer an agile and flexible working approach, supporting you to quickly scale your projects up or down"
          },
          {
            title: "End-to-end services",
            description: "We offer an agile and flexible working approach, supporting you to quickly scale your projects up or down"
          },
          {
            title: "Global presence",
            description: "We cater to diverse technical and budget requirements, and serve clients spanning various time zones"
          }
        ]
      }
    }
  },


}
</script>
  
  