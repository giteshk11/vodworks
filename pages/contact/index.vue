<template>
  <div id="contact_page">


    <PageHeroWithAnimatedTitle
      :data="{ title: 'Get in Touch', animated_word: 'with Us', description: 'Just tell us a little bit about your project via the contact form, and we’ll make sure the right person reaches out.' }" />



    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: false
    }" />
    <!------------------------------------------------------------------------------------------>


    <section v-if="Our_Next_Step" class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto container">


        <div class="text-center">
          <h2>{{ Our_Next_Step.title }}</h2>
        </div>

        <div class="next_step_timeline grid md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-4 mt-8 lg:mt-16">
          <template v-for="(step, i) in Our_Next_Step.list">
            <div :key="i" class="next_step">
              <span>{{ step.count }}</span>
              <p>{{ step.description }}</p>
            </div>

          </template>
        </div>


      </div>
    </section>


    <section class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 lg:gap-8 items-center">
          <div class="md:col-span-9">
            <h2 class="heading-1">Need Customer Support?</h2>
            <p class="mt-4 lg:mt-8 text-big lg:max-w-4/5">Access certified IT professionals including Project Managers,
              Architects,
              Systems/Bussiness Analysts, Software Developers, Infrastructure Specialists, and more ad Vodworks.</p>
          </div>
          <div class="md:col-span-3">
            <div class="p-4 py-4 lg:px-8 lg:py-8 card-utilities hvr-effect my-4">
              <div class="flex gap-2 items-center">

                <img src="~/assets/img/icons/email-icon.svg" alt="Envelop icon" />

                <h4>Email Us</h4>
              </div>
              <a class="mt-2 color-pink text-regular font-medium" target="_blank"
                href="mailto:info@vodworks.com">info@vodworks.com</a>
            </div>
            <div class="p-4 py-4 lg:px-8 lg:py-8 card-utilities hvr-effect my-4">
              <div class="flex gap-2 items-center">

                <img src="~/assets/img/icons/phone-icon.svg" alt="Phone icon" />

                <h4>Call Us</h4>
              </div>
              <a class="mt-2 color-pink text-regular font-medium" target="_blank" href="tel:+4408432897925">+44 (0) 84
                3289 7925</a>
            </div>
          </div>

        </div>
      </div>
    </section>


  </div>
</template>




<script>
export default {

  data() {
    return {
      story: { content: {} },

      Our_Next_Step: {
        title: "Our Next Steps",
        list: [
          {
            count: "01",
            description: "Our team reaches out to you within one business day"
          },
          {
            count: "02",
            description: "We begin with an initial conversation to understand your needs"
          },
          {
            count: "03",
            description: "Our analysts and developers evaluate the scope and propose a path forward"
          },
          {
            count: "04",
            description: "We initiate the project, working towards successful software delivery"
          }
        ]
      }
    }
  },
  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Contact Us',
        },
      ],
    }
  },




}
</script>
    