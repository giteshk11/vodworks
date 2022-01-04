<template>
  <div>
    <section
      :style="resolveBackground('/img/services-bg.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
    >
      <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-arial-black"
        >
          Partners, Investments, & Impact Projects
        </h1>
        <p class="mt-4 lg:text-lg">
          Vodworks creates innovative products, not just for clients, but for
          everyone. We understand that in order to really improve the world’s
          technological infrastructure, we have to invest in more than
          ourselves. Through partnerships, investments, and impact projects,
          Vodworks brings together different experts and perspectives to better
          provide the right solutions to the people who need it most.
        </p>
      </div>
    </section>


    <!-- end hero -->

    <!-- partner program -->
    <section
      class="lg:py-24 py-10 bg-no-repeat bg-center bg-cover"
      :style="resolveBackground('/img/partners/bg_partner.png')"
    >
      <div class="max-w-4/5 mx-auto container">
        <!-- text -->
        <div class="md:w-4/5 mx-auto text-center">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
            Our Partner Program
          </h2>
          <p class="text-h-gray mt-4 text-lg">
            Sometimes, it’s better to not reinvent the wheel. We know that there
            are more than just us in the industries we create for. Vodwork’s
            unique partnership program focuses on utiilzing partner strengths to
            uplevel what we can provide to our own clients as well as our
            partners. We offer various ways partnerships can work to best build
            the solutions the industy needs.
          </p>
        </div>

        <!-- card -->
        <div class="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- card -->
          <div class="p-2 pb-4 bgColor-grey rounded-xl text-white text-center hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
              :style="resolveBackground('/img/partners/img_program_1.png')"
            ></div>

            <!-- text -->
            <p class="color-black font-bold text-xl mt-4">Resell</p>
            <p class="text-h-gray mt-2">
              Your brand, your customers, Vodworks’ expertise, technology, and
              services.
            </p>
          </div>

          <!-- card -->
          <div class="p-2 pb-4 bgColor-grey rounded-xl text-white text-center hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
              :style="resolveBackground('/img/partners/img_program_2.png')"
            ></div>

            <!-- text -->
            <p class="color-black font-bold text-xl mt-4">Teams</p>
            <p class="text-h-gray mt-2">
              Utilise Vodworks’ experience in building interantional software
              teams to scale your business more effectively.
            </p>
          </div>

          <!-- card -->
          <div class="p-2 pb-4 bgColor-grey rounded-xl text-white text-center hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
              :style="resolveBackground('/img/partners/img_program_3.png')"
            ></div>

            <!-- text -->
            <p class="color-black font-bold text-xl mt-4">Technology</p>
            <p class="text-h-gray mt-2">
              Combine your proprietary technology with our SI and consulting
              services, technology delivery, and global reach.
            </p>
          </div>

          <!-- card -->
          <div class="p-2 pb-4 bgColor-grey rounded-xl text-white text-center hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
              :style="resolveBackground('/img/partners/img_program_4.png')"
            ></div>

            <!-- text -->
            <p class="color-black font-bold text-xl mt-4">Invest</p>
            <p class="text-h-gray mt-2">
              Utilise Vodworks’ experience in building interantional software
              teams to scale your business more effectively.
            </p>
          </div>
        </div>
      </div>


    </section>
    <!-- end partner program -->

    <!-- current partner -->
    <section
    class="lg:my-24 my-10 max-w-4/5 mx-auto container text-center"
    >

      <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black ">
        Our Current Partners
      </h2>

      <!-- img -->
      <div class="relative mt-12 overflow-hidden">
        <div class="grid md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center gap-6 partners">
          <img
            src="~/assets/img/partners/img_partner_hubii.png"
            class="hvr-top rounded-md"
            alt=""
          />
          <img
            src="~/assets/img/partners/img_partner_sixty.png"
            class="hvr-top rounded-md"
            alt=""
          />
          <img
            src="~/assets/img/partners/img_partner_crowde.png"
            class="hvr-top rounded-md"
            alt=""
          />
          <img
            src="~/assets/img/partners/img_partner_xroad.png"
            class="hvr-top rounded-md"
            alt=""
          />
          <img
            src="~/assets/img/partners/img_partner_custom.png"
            class="hvr-top rounded-md"
            alt=""
          />

          <img
            src="~/assets/img/partners/img_partner_nagra.png"
            class="hvr-top rounded-md"
            alt=""
          />
          <img
            src="~/assets/img/partners/img_partner_stc.png"
            class="hvr-top rounded-md"
            alt=""
          />
          <img
            src="~/assets/img/partners/img_partner_tapeffect.png"
            class="hvr-top rounded-md"
            alt=""
          />
          <img
            src="~/assets/img/partners/img_partner_liberty.png"
            class="hvr-top rounded-md"
            alt=""
          />
          <img
            src="~/assets/img/partners/img_partner_azdio.png"
            class="hvr-top rounded-md"
            alt=""
          />


        </div>
      </div>

      <!-- button -->
      <NuxtLink
          class="inline-block mt-12 py-4 px-6 button-red rounded-md text-white font-bold uppercase"
          to="/contact"
      >
        Partner with Vodworks
      </NuxtLink>
    </section>
    <!-- end current partner -->

    <!-- investment -->
    <section
      :style="resolveBackground('/img/product-bg.jpg')"
      class="lg:py-24 py-10 bg-no-repeat bg-center bg-cover"
    >
      <div class="text-white text-center mx-auto max-w-4/5">
        <!-- text -->
        <div class="mx-auto max-w-4/5 text-center px-6 lg:px-0">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">
            Our Investments & Impact Projects
          </h2>
          <p class="mt-4 lg:text-lg opacity-80">
            Working at Vodworks is not just a job, but an experience. We believe
            in fostering an environment where our team members are able to have
            space to grow and be creative. Team members have access to benefits
            below so as a team, we can create amazing products.
          </p>
        </div>

        <!-- card -->
        <div class="pt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- card -->
          <a
            href="https://phnompenh.impacthub.net/khmer-tourism-for-the-future/?utm_source=vodworks&utm_medium=referral&utm_campaign=our-partners-page"
            target="_blank"
          >
            <div class="p-2 pb-4 bg-b-dark-gray rounded-xl text-white text-center hvr-top h-full">
              <!-- image -->
              <div
                class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
                :style="resolveBackground('/img/partners/img_invest_1.png')"
              ></div>

              <!-- text -->
              <p class="text-white text-center mt-4 font-bold text-xl">Impact Hub</p>
              <p class="opacity-80 mt-2">
                Mentorship and sponsorship for software development in Cambodia
              </p>
            </div>
          </a>

          <!-- card -->
          <a
            href="https://bhaicharapakistan.com/?utm_source=vodworks&utm_medium=referral&utm_campaign=our-partners-page"
            target="_blank"
          >
            <div class="p-2 pb-4 bg-b-dark-gray rounded-xl text-white text-center hvr-top h-full">
              <!-- image -->
              <div
                class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
                :style="resolveBackground('/img/partners/img_invest_2.png')"
              ></div>

              <!-- text -->
              <p class="text-white text-center mt-4 font-bold text-xl">BhaiChara</p>
              <p class="opacity-80 mt-2">
                Investment and Software Development for social impact in Pakistan
              </p>
            </div>
          </a>

          <!-- card -->
          <a
            href="https://apps.apple.com/us/app/id1541800274?utm_source=vodworks&utm_medium=referral&utm_campaign=our-partners-page"
            target="_blank"
          >
            <div class="p-4 bg-b-dark-gray rounded-xl text-white text-center hvr-top h-full">
              <!-- image -->
              <div
                class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
                :style="resolveBackground('/img/partners/img_invest_3.png')"
              ></div>

              <!-- text -->
              <p class="text-white text-center mt-4 font-bold text-xl">Happy Highlights</p>
              <p class="opacity-80 mt-2">
                Investment and development of mental health monitering app
              </p>
            </div>
          </a>

          <!-- card -->
          <a
            href="https://www.easelive.tv/?utm_source=vodworks&utm_medium=referral&utm_campaign=our-partners-page"
            target="_blank"
          >
            <div class="p-2 pb-4 bg-b-dark-gray rounded-xl text-white text-center hvr-top h-full">
              <!-- image -->
              <div
                class="w-full h-56 bg-center bg-no-repeat bg-cover rounded-tr-xl rounded-tl-xl"
                :style="resolveBackground('/img/partners/img_invest_4.png')"
              ></div>

              <!-- text -->
              <p class="text-white text-center mt-4 font-bold text-xl">EaseLive</p>
              <p class="opacity-80 mt-2">
                Investment of interactive live stream design and analytics
                platform
              </p>
            </div>
          </a>
        </div>

      </div>
    </section>
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

.partners img{
  border: 1px solid #e9e9e9;
  filter: grayscale(100%);
  padding: 1rem;
}
.partners{
  padding: 16px 0;
}
.partners img:hover{
  filter: grayscale(0%);
}
</style>
