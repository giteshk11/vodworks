<template>
  <div>

    <PageHeroWithAnimatedTitle :data="{title:'Welcome to', animated_word:'Vodworks'}" />


    <section class="lg:py-32 py-14">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>Other Content Here</h2>
        </div>
      </div>
    </section>

    <!-- 
    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h1 v-in-viewport>Welcome to <span class="bgFill"><span class="textClip color-white">Vodworks</span></span></h1>
        </div>
      </div>
    </section>



  
    <section class="lg:py-32 py-14">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>About Us</h2>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16">
          <div>
            <p class="mb-4 lg:mb-6 text-big">We are a global provider of end-to-end software development
              services. We help clients across the world use modern technology to transform challenges into lasting
              business value, operational efficiency, and revenue growth. With an international team of over 200 tech
              experts, we offer tech consulting, engineering, data, and team augmentation services. Since our inception in
              2012, we have worked with numerous industry leaders and innovative startups, creating value across diverse
              sectors like media, telecommunications, gaming, fintech, and beyond. As a company, we are driven by a
              passion for advancing society through technology. We therefore also invest heavily in research and
              development and collaborate closely with entrepreneurs and startups to build innovative tech solutions to
              life.
            </p>
          </div>
          <div>
            <img class="w-full" src="~/assets/img/service-img.jpg" alt="" />
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
      title: 'About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'About Us',
        },
      ],
    }
  },

}
</script>
    