<template>
  <div>
    <div style="background-color: #fff6f6">
      <div class="text-left lg:text-center lg:w-2/3 px-7 lg:px-0 mx-auto py-20">
        <h1 class="font-arial-black text-41 lg:text-56 lg:px-20 leading-none">
          Partners, Investments, & Impact Projects
        </h1>
        <p class="mt-8 text-h-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit
          amet justo donec. Pulvinar mattis nunc sed blandit libero volutpat
          sed. Sed felis eget velit aliquet sagittis id consectetur purus ut.
          Mattis rhoncus urna neque viverra justo nec ultrices dui. Curabitur
          vitae nunc sed velit dignissim sodales ut.
        </p>
      </div>
    </div>
    <!-- end hero -->

    <!-- partner program -->
    <div
      class="pt-32 pb-40 bg-no-repeat bg-center bg-cover"
      :style="resolveBackground('/img/partners/bg_partner.png')"
    >
      <!-- text -->
      <div class="lg:w-2/3 px-5 lg:px-0 mx-auto text-center">
        <h1 class="font-arial-black text-41 lg:text-56 leading-none">
          Our Partner Program
        </h1>
        <p class="mt-8 text-h-gray">
          Vodworks is passionate about the technology and TV industry. We are
          both financially and technologically invested in building more
          innovation for our respective markets. Vodworks recognises that there
          are many companies in our industry that deliver fantastic solutions
          and that sometimes it is better not to reinvent the wheel. We see
          ourselves as not only contributing to our customers, but our partners
          and the industry as a whole.
        </p>
      </div>

      <!-- card -->
      <div class="pt-20 grid lg:grid-cols-4 px-10 lg:px-6 gap-8">
        <!-- card -->
        <div class="p-4 bg-b-dark-gray rounded-2xl text-white text-center">
          <!-- image -->
          <div
            class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/partners/img_program_1.png')"
          ></div>

          <!-- text -->
          <p class="font-bold text-2xl mt-7">Resell</p>
          <p class="mb-3 mt-1">
            Your brand, your customers, Vodworks’ expertise, technology, and
            services.
          </p>
        </div>

        <!-- card -->
        <div class="p-4 bg-b-dark-gray rounded-2xl text-white text-center">
          <!-- image -->
          <div
            class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/partners/img_program_2.png')"
          ></div>

          <!-- text -->
          <p class="font-bold text-2xl mt-7">Teams</p>
          <p class="mb-3 mt-1">
            Utilise Vodworks’ experience in building interantional software
            teams to scale your business more effectively.
          </p>
        </div>

        <!-- card -->
        <div class="p-4 bg-b-dark-gray rounded-2xl text-white text-center">
          <!-- image -->
          <div
            class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/partners/img_program_3.png')"
          ></div>

          <!-- text -->
          <p class="font-bold text-2xl mt-7">Technology</p>
          <p class="mb-3 mt-1">
            Combine your proprietary technology with our SI and consulting
            services, technology delivery, and global reach.
          </p>
        </div>

        <!-- card -->
        <div class="p-4 bg-b-dark-gray rounded-2xl text-white text-center">
          <!-- image -->
          <div
            class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/partners/img_program_4.png')"
          ></div>

          <!-- text -->
          <p class="font-bold text-2xl mt-7">Invest</p>
          <p class="mb-3 mt-1">
            Utilise Vodworks’ experience in building interantional software
            teams to scale your business more effectively.
          </p>
        </div>
      </div>
    </div>
    <!-- end partner program -->

    <!-- current partner -->
    <div class="text-center mb-20">
      <h1 class="font-arial-black text-2xl">Our current partners</h1>

      <!-- img -->
      <div class="relative lg:py-32 py-20 mb-10 overflow-hidden">
        <div class="flex absolute top-0 justify-center">
          <img
            src="~/assets/img/partners/img_partner_hubii.png"
            class="w-1/2 lg:w-auto"
          />
          <img
            src="~/assets/img/partners/img_partner_sixty.png"
            class="w-1/2 lg:w-auto"
          />
          <img
            src="~/assets/img/partners/img_partner_crowde.png"
            class="w-1/2 lg:w-auto"
          />
          <img
            src="~/assets/img/partners/img_partner_xroad.png"
            class="w-1/2 lg:w-auto"
          />
          <img
            src="~/assets/img/partners/img_partner_custom.png"
            class="w-1/2 lg:w-auto"
          />
        </div>
      </div>

      <!-- button -->
      <a href="#">
        <span
          class="bg-h-red text-white px-11 py-5 rounded-lg font-bold uppercase"
          >Partners with Vodworks</span
        >
      </a>
    </div>
    <!-- end current partner -->

    <!-- investment -->
    <div class="py-20">
      <!-- text -->
      <div class="text-center px-6 lg:px-0">
        <h1 class="font-arial-black lg:text-56 text-41 leading-none">
          Our Investments & Impact Projects
        </h1>
        <p class="lg:mx-72 mt-8 text-x-gray-partner">
          Working at Vodworks is not just a job, but an experience. We believe
          in fostering an environment where our team members are able to have
          space to grow and be creative. Team members have access to benefits
          below so as a team, we can create amazing products.
        </p>
      </div>

      <!-- card -->
      <div class="pt-20 grid lg:grid-cols-4 px-10 lg:px-6 gap-8">
        <!-- card -->
        <div class="p-4 bg-b-dark-gray rounded-2xl text-white text-center">
          <!-- image -->
          <div
            class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/partners/img_invest_1.png')"
          ></div>

          <!-- text -->
          <p class="font-bold text-2xl mt-7">Impact Hub</p>
          <p class="mb-3 mt-1">
            Mentorship and sponsorship for software development in Cambodia
          </p>
        </div>

        <!-- card -->
        <div class="p-4 bg-b-dark-gray rounded-2xl text-white text-center">
          <!-- image -->
          <div
            class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/partners/img_invest_2.png')"
          ></div>

          <!-- text -->
          <p class="font-bold text-2xl mt-7">BhaiChara</p>
          <p class="mb-3 mt-1">
            Investment and Software Development for social impact in Pakistan
          </p>
        </div>

        <!-- card -->
        <div class="p-4 bg-b-dark-gray rounded-2xl text-white text-center">
          <!-- image -->
          <div
            class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/partners/img_invest_3.png')"
          ></div>

          <!-- text -->
          <p class="font-bold text-2xl mt-7">Happy Highlights</p>
          <p class="mb-3 mt-1">
            Investment and development of mental health monitering app
          </p>
        </div>

        <!-- card -->
        <div class="p-4 bg-b-dark-gray rounded-2xl text-white text-center">
          <!-- image -->
          <div
            class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/partners/img_invest_4.png')"
          ></div>

          <!-- text -->
          <p class="font-bold text-2xl mt-7">EaseLive</p>
          <p class="mb-3 mt-1">
            Investment of interactive live stream design and analytics platform
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  },
}
</script>
