<template>
  <div id="contact_page">


    <PageHeroWithAnimatedTitle
      :data="{ title: 'Get in Touch', animated_word: 'with Us', description: 'Just tell us a little bit about your project via the contact form, and we’ll make sure the right person reaches out.' }" />



    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: false
    }" />
    <!------------------------------------------------------------------------------------------>

    <section class="lg:py-32 py-14">
      <div class="mx-auto container">

        <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 lg:gap-8 items-center">

          <div class="md:col-span-9">
            <h2 class="heading-1">Need Customer Support?</h2>
            <p class="mt-4 lg:mt-8 text-big lg:max-w-4/5">Access certified IT professionals including Project Managers, Architects,
              Systems/Bussiness Analysts, Software Developers, Infrastructure Specialists, and more ad Vodworks.</p>
          </div>

          <div class="md:col-span-3">
            <div class="p-4 py-4 lg:px-8 lg:py-8 card-utilities hvr-effect my-4">
              <div class="flex gap-2 items-center">
  
                <img src="~/assets/img/icons/email-icon.svg" alt="Envelop icon" />

                <h4>Email Us</h4>
              </div>
              <a class="mt-2 color-pink text-regular font-medium" target="_blank" href="mailto:info@vodworks.com">info@vodworks.com</a>
            </div>
            <div class="p-4 py-4 lg:px-8 lg:py-8 card-utilities hvr-effect my-4">
              <div class="flex gap-2 items-center">
           
                <img src="~/assets/img/icons/phone-icon.svg" alt="Phone icon" />

                <h4>Call Us</h4>
              </div>
              <a class="mt-2 color-pink text-regular font-medium" target="_blank" href="tel:+4408432897925">+44 (0) 84 3289 7925</a>
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
    }
  },
  head() {
    return {
      title: 'Contactt Us',
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
    