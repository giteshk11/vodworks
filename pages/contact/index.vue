<template>
  <div>

    <section
      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
    >
      <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-arial-black"
        >
          Contact Us
        </h1>
        <p class="mt-4 lg:text-lg lg:px-8">
          Just tell us a little bit about yourself via the contact form, and
          we’ll make sure the right person reaches out.
        </p>
      </div>
    </section>

    <section class="lg:py-24 py-10 overflow-hidden">
      <div class="max-w-4/5 mx-auto container contact-form">
        <!-- form -->
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >

          <input type="hidden" name="form-name" value="contact" />
          <div
            class="lg:w-3/4 rounded-xl mx-auto"
          >
<!--            <div class="lg:w-3/4 mx-auto text-center">-->
<!--              <h4 class="font-arial-black text-2xl lg:text-3xl">Get In touch With Us</h4>-->
<!--              <p class="text-h-gray mt-4 text-lg mb-12">Just tell us a little bit about yourself via the contact form, and we’ll make sure the right person reaches out.-->
<!--              </p>-->
<!--            </div>-->
            <div class="grid md:grid-cols-2 gap-6 text-black">
              <input
                name="firstname"
                type="text"
                placeholder="First name"
                class="p-4 bg-b-gray-form rounded-md outline-none"
                required
              />
              <input
                name="lastname"
                type="text"
                placeholder="Last name"
                class="p-4 bg-b-gray-form rounded-md outline-none"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                class="p-4 bg-b-gray-form rounded-md outline-none"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                required
              />
              <input
                name="phonenumber"
                type="number"
                placeholder="Phone number"
                class="p-4 bg-b-gray-form rounded-md outline-none"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="8"
              class="p-4 bg-b-gray-form w-full mt-6 rounded-md text-black outline-none"
              required
            ></textarea>
            <button
              type="submit"
              class="mt-4 text-white py-4 lg:px-24 px-12 rounded-md font-bold uppercase button-red inline-block float-right"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="lg:py-16 py-10 bgColor-grey">
      <!--  -->
      <div
        class="grid lg:grid-cols-2 max-w-4/5 mx-auto items-center container lg:text-left text-center"
      >
        <div class="lg:border-r lg:border-gray-700 lg:pr-10 pb-10 lg:pb-0">
          <h4 class="font-bold text-2xl lg:text-3xl">Need Customer Support?</h4>
          <p class="text-h-gray mt-2">
            Access certified IT professionals including Project Managers,
            Architects, Systems/Bussiness Analysts, Software Developers,
            Infrastructure Specialists, and more ad Vodworks.
          </p>
        </div>

        <div
          class="grid lg:grid-cols-2 lg:ml-16 pt-10 lg:gap-16 lg:pt-0 lg:w-auto mx-auto border-t lg:border-none border-gray-700"
        >
          <div>
            <h2 class="font-bold text-lg">Email us</h2>
            <p class="text-h-gray mt-2"><a href="mailto:info@vodworks.com">info@vodworks.com</a></p>
          </div>

          <div class="mt-7 lg:mt-0">
            <h2 class="font-bold text-lg">Call Us</h2>
            <p class="text-h-gray mt-2"><a href="tel:+4408432897925">+44 (0) 84 3289 7925</a></p>
          </div>
        </div>
      </div>
    </section>


    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      metaInfo: {},
    }
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  },
}
</script>
<style>
.contact-form input, .contact-form textarea{
  border: 1px solid #ccc;
  background-color: transparent;
}

.contact-form input:focus, .contact-form textarea:focus{
  background-color: #f9f9f9;
}
</style>
