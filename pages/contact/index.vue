<template>
  <div id="contact_page">


    <PageHeroWithAnimatedTitle
      :data="{ title: 'Get in Touch', animated_word: 'with Us', description: 'Just tell us a little bit about your project via the contact form, and we’ll make sure the right person reaches out.' }" />


    <!------------------------------- Form -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-grey ">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-3/5">
          <GetInTouchForm />
        </div>

      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!----------------------------------- Our Next Steps --------------------------------------->
    <section v-if="NextStepContent" class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <div class="text-center">
          <h2>{{ NextStepContent.title }}</h2>
        </div>

        <div class="next_step_timeline grid md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-4 mt-8 lg:mt-16">
          <template v-for="(step, i) in NextStepContent.list">
            <div :key="i" class="next_step">
              <span>{{ step.count }}</span>
              <p>{{ step.description }}</p>
            </div>
          </template>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>


    <!---------------------------------- Customer Support ------------------------------------->

    <section class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 lg:gap-8 items-center">
          <div class="md:col-span-9">
            <h2 class="heading-1">{{ customer_supprt.title }}</h2>
            <p class="mt-4 lg:mt-8 text-big lg:max-w-4/5">{{ customer_supprt.description }}</p>
          </div>

          <div class="md:col-span-3">
            <template v-for="(detail, i) in customer_supprt.company_detail">
              <div :key="i" class="p-4 py-4 lg:px-8 lg:py-8 card-utilities hvr-effect my-4">
                <div class="flex gap-2 items-center">
                  <img class="card-icon" :src="`${require('~/assets/img/icons/' + detail.icon)}`" :alt="detail.alt" />
                  <h4>{{ detail.label }}</h4>
                </div>
                <a class="mt-2 text-regular font-medium" target="_blank" :href="detail.url">{{ detail.info }}</a>
              </div>
            </template>
          </div>

        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

  </div>
</template>



<script>

import NextStepContent from '~/static/our-next-steps-content'
import ogImage from '~/static/preview-contact.jpg';

export default {

  data() {
    return {
      story: { content: {} },
      NextStepContent,

      customer_supprt: {
        title: "Need Customer Support?",
        description: "Access certified IT professionals including Project Managers, Architects, Systems/Bussiness Analysts, Software Developers, Infrastructure Specialists, and more ad Vodworks.",
        company_detail: [
          {
            icon: "email-icon.svg",
            alt: "envelop icon",
            label: "Email Us",
            info: "info@vodworks.com",
            url: "mailto:info@vodworks.com",
          },
          {
            icon: "phone-icon.svg",
            alt: "phone icon",
            label: "Call Us",
            info: "+44 (0) 84 3289 7925",
            url: "tel:+4408432897925",
          },
        ]

      }
    }
  },



  head() {
    return {
      title: 'Contact us | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Contact Vodworks experts and get answers about your software development project.",
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Contact us | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Contact Vodworks experts and get answers about your software development project.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogImage,
        },        
      ],
    }
  },


}
</script>
    