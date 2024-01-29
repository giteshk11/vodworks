<template>
  <div>

    <!---------------------------------- Thanks ------------------------------->
    <section class="lg:py-32 py-14 bgColor-normal-grey success-msg">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5">
          <img src="~/assets/img/icons/success-icon.svg" alt="success icon" />
          <h1 class="heading-2 mt-8">Thank You!</h1>
          <p class="mt-4 text-big md:w-4/5 mx-auto">
            Thank You For Contacting Us! Your message has been received and we will be contacting you shortly.
          </p>

          <NuxtLink to="/" class="btn-primary btn-md mt-16 inline-block ">
            Back to Home
          </NuxtLink>

        </div>
      </div>
    </section>
    <!-------------------------------------------------------------------------------->

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
      title: 'Thank you for contacting us!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Your message has been received and we will be contacting you shortly.",
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Thank you for contacting us!',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Your message has been received and we will be contacting you shortly.",
        },
      ],
    }
  },

}
</script>

<style>
.success-msg {
  img {
    margin: 0 auto;
    width: 100px;
  }
}
</style>
    