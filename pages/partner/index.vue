<template>
  <div>
    <div style="background-color: #fff6f6">
      <div class="text-left lg:text-center lg:w-2/3 px-7 lg:px-0 mx-auto py-20">
        <h1 class="font-arial-black text-41 lg:text-56 lg:px-20 leading-none">
          Partners, Investments, & Impact Projects
        </h1>
        <p class="mt-8 text-h-gray">
          Vodworks creates innovative products, not just for clients, but for
          everyone. We understand that in order to really improve the world’s
          technological infrastructure, we have to invest in more than
          ourselves. Through partnerships, investments, and impact projects,
          Vodworks brings together different experts and perspectives to better
          provide the right solutions to the people who need it most.
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
          Sometimes, it’s better to not reinvent the wheel. We know that there
          are more than just us in the industries we create for. Vodwork’s
          unique partnership program focuses on utiilzing partner strengths to
          uplevel what we can provide to our own clients as well as our
          partners. We offer various ways partnerships can work to best build
          the solutions the industy needs.
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
      <NuxtLink to="/contact">
        <span
          class="bg-h-red text-white px-11 py-5 rounded-lg font-bold uppercase"
          >Partner with Vodworks</span
        >
      </NuxtLink>
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
        <a
          href="https://phnompenh.impacthub.net/khmer-tourism-for-the-future/?utm_source=vodworks&utm_medium=referral&utm_campaign=our-partners-page"
          target="_blank"
        >
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
        </a>

        <!-- card -->
        <a
          href="https://bhaicharapakistan.com/?utm_source=vodworks&utm_medium=referral&utm_campaign=our-partners-page"
          target="_blank"
        >
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
        </a>

        <!-- card -->
        <a
          href="https://apps.apple.com/us/app/id1541800274?utm_source=vodworks&utm_medium=referral&utm_campaign=our-partners-page"
          target="_blank"
        >
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
        </a>

        <!-- card -->
        <a
          href="https://www.easelive.tv/?utm_source=vodworks&utm_medium=referral&utm_campaign=our-partners-page"
          target="_blank"
        >
          <div class="p-4 bg-b-dark-gray rounded-2xl text-white text-center">
            <!-- image -->
            <div
              class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-2xl rounded-tl-2xl"
              :style="resolveBackground('/img/partners/img_invest_4.png')"
            ></div>

            <!-- text -->
            <p class="font-bold text-2xl mt-7">EaseLive</p>
            <p class="mb-3 mt-1">
              Investment of interactive live stream design and analytics
              platform
            </p>
          </div>
        </a>
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
