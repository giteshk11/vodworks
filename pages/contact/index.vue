<template>
  <div>
    <div
      class="bg-cover bg-no-repeat bg-center text-center text-white px-6 lg:px-0"
      :style="`background-image: url(${require('~/assets/img/contact/bg_hero.png')})`"
    >
      <!-- text -->
      <div class="pt-32">
        <h1 class="lg:text-56 text-41 font-arial-black">Contact Us</h1>
        <p class="mt-3 lg:pb-20 pb-14">
          Just tell us a little bit about yourself via the contact form, and
          we’ll make sure the right person reaches out.
        </p>
      </div>

      <!-- form -->
      <div
        class="bg-white lg:w-3/4 rounded-3xl mx-auto lg:py-11 py-9 lg:px-28 px-7"
      >
        <div class="grid lg:grid-cols-2 lg:gap-10 gap-6 text-black">
          <input
            type="text"
            placeholder="First name"
            class="py-4 lg:pl-6 pl-5 bg-b-gray-form rounded-xl outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            class="py-4 lg:pl-6 pl-5 bg-b-gray-form rounded-xl outline-none"
          />
          <input
            type="text"
            placeholder="Your email"
            class="py-4 lg:pl-6 pl-5 bg-b-gray-form rounded-xl outline-none"
          />
          <input
            type="text"
            placeholder="Phone number"
            class="py-4 lg:pl-6 pl-5 bg-b-gray-form rounded-xl outline-none"
          />
        </div>
        <textarea
          placeholder="Tell us about your project"
          rows="8"
          class="pt-4 pl-6 bg-b-gray-form w-full lg:mt-10 mt-6 rounded-xl text-black outline-none"
        ></textarea>
        <button
          type="submit"
          class="bg-h-red block py-4 lg:px-32 px-12 rounded-xl mt-8 font-bold uppercase"
        >
          CONTACT US
        </button>
      </div>

      <!--  -->
      <div
        class="grid lg:grid-cols-2 lg:w-3/4 mx-auto items-center pt-24 pb-16 lg:text-left text-center"
      >
        <div class="lg:border-r lg:border-gray-700 lg:pr-10 pb-10 lg:pb-0">
          <h2 class="font-bold text-3xl">Need customer support?</h2>
          <p class="mt-3 text-gray-300">
            Access certified IT professionals including Project Managers,
            Architects, Systems/Bussiness Analysts, Software Developers,
            Infrastructure Specialists, and more ad Vodworks.
          </p>
        </div>

        <div
          class="grid lg:grid-cols-2 lg:ml-16 pt-10 lg:gap-24 lg:pt-0 w-1/2 lg:w-auto mx-auto border-t lg:border-none border-gray-700"
        >
          <div>
            <h2 class="font-bold text-lg">Email us</h2>
            <p class="text-gray-300">info@Vodworks.com</p>
          </div>

          <div class="mt-7 lg:mt-0">
            <h2 class="font-bold text-lg">Call Us</h2>
            <p class="text-gray-300">+44 (0) 84 3289 7925</p>
          </div>
        </div>
      </div>
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
