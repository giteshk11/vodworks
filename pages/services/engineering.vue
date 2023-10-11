<template>
  <div>
    <div class="py-12 text-center">
      <h2>Services/Engineering</h2>
      <p>My path is: {{ $route.path }}</p>
    </div>


    <!-- 

    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center mx-auto md:max-w-3/5">
          <h2 class="color-white">We Work Across Industries</h2>
          <p class="mt-4 lg:mt-8 text-big color-white">At Vodworks, we pride ourselves on our versatile approach,
            supporting clients across a spectrum of industries. Our team's extensive experience and commitment to
            understanding the unique nuances of your industry and company guarantee the success of your project, no matter
            the sector you operate in.</p>
        </div>

        <div class="mt-8 lg:mt-16">

          <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-4">

            <div class="industrues-card flex items-center text-left gap-4 bgColor-white p-4 ">
              <img src="~/assets/img/industries/Media.svg" alt="" />
              <h5 class="font-bold">Media & Entertainment</h5>
            </div>

            <div class="industrues-card flex items-center text-left gap-4 bgColor-white p-4 ">
              <img src="~/assets/img/industries/Media.svg" alt="" />
              <h5 class="font-bold">Media & Entertainment</h5>
            </div>

            <div class="industrues-card flex items-center text-left gap-4 bgColor-white p-4 ">
              <img src="~/assets/img/industries/Media.svg" alt="" />
              <h5 class="font-bold">Media & Entertainment</h5>
            </div>

            <div class="industrues-card flex items-center text-left gap-4 bgColor-white p-4 ">
              <img src="~/assets/img/industries/Media.svg" alt="" />
              <h5 class="font-bold">Media & Entertainment</h5>
            </div>


            <div class="industrues-card flex items-center text-left gap-4 bgColor-white p-4 ">
              <img src="~/assets/img/industries/Media.svg" alt="" />
              <h5 class="font-bold">Media & Entertainment</h5>
            </div>

            <div class="industrues-card flex items-center text-left gap-4 bgColor-white p-4 ">
              <img src="~/assets/img/industries/Media.svg" alt="" />
              <h5 class="font-bold">Media & Entertainment</h5>
            </div>

            <div class="industrues-card flex items-center text-left gap-4 bgColor-white p-4 ">
              <img src="~/assets/img/industries/Media.svg" alt="" />
              <h5 class="font-bold">Media & Entertainment</h5>
            </div>

            <div class="industrues-card flex items-center text-left gap-4 bgColor-white p-4 ">
              <img src="~/assets/img/industries/Media.svg" alt="" />
              <h5 class="font-bold">Media & Entertainment</h5>
            </div>
          </div>

        </div>
      </div>
    </section>




    <section class="lg:py-32 py-14 overflow-hidden	vw-map">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>About Vodworks</h2>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16 relative">

          <div class="text-center lg:text-left">
            <p class="mb-4 lg:mb-6 text-big">Vodworks is a global provider of end-to-end software development
              services. We
              help clients across the world use modern technology to transform challenges into lasting business value,
              operational efficiency, and revenue growth. With a team of over 200 experts in multiple countries,
              Vodworks
              offers tech consulting, engineering, data, and team augmentation services.
            </p>
            <p class="text-big">
              Since our inception in 2012, we have worked with numerous industry leaders and innovative startups,
              creating
              value across diverse sectors like media, telecommunications, gaming, fintech, and beyond. As a company,
              we
              are driven by a passion for advancing society through technology. We therefore also invest heavily in
              research and development and collaborate closely with entrepreneurs and startups to build innovative
              tech
              solutions to life.
            </p>
          </div>

          <div>
            <img class="locations-map" src="~/assets/img/map.png" alt="" />
          </div>

        </div>

      </div>
    </section>


    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">


        <div
          class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 items-center  gap-4 md:gap-16 text-center md:text-left">

          <div class="md:col-span-7">
            <h2 class="heading-1 color-white">Bring your ideas and innovations to life!</h2>

          </div>

          <div class="md:col-span-5 text-center">
            <NuxtLink to="/contact" class="btn-primary inline-block btn-lg mt-8 md:mt-0">
              Get in touch with us
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
      title: 'Engineering',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Engineering',
        },
      ],
    }
  },

}
</script>
  