<template>
  <div id="contact_page">


    <PageHeroWithAnimatedTitle
      :data="{ title: 'Get in Touch', animated_word: 'with Us', description: 'Just tell us a little bit about your project via the contact form, and we’ll make sure the right person reaches out.' }" />


  </div>
</template>



<script>

import NextStepContent from '~/static/our-next-steps-content'

export default {

  data() {
    return {
      story: { content: {} },
      NextStepContent,
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
          hid: 'keywords',
          name: 'keywords',
          content: ''
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
      ],
    }
  },


}
</script>
    