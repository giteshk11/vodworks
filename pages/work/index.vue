<template>
  <div>
    <div
      class="bg-cover bg-center bg-no-repeat overflow-hidden -mt-1 relative"
      :style="resolveBackground('/img/services/bg_hero_section.png')"
    >
      <!-- background pattern -->
      <img
        src="~/assets/img/services/bg_hero_circle_blue.png"
        class="absolute -left-1/3 top-0 lg:bottom-0 lg:my-auto z-0 transform scale-350 lg:scale-100"
      />
      <img
        src="~/assets/img/services/bg_hero_circle_red.png"
        class="absolute -right-1/3 lg:top-0 bottom-0 lg:my-auto z-0 transform scale-150 lg:scale-100"
      />
      <img
        src="~/assets/img/services/bg_hero_pattern.png"
        class="absolute top-0 bottom-0 lg:right-0 lg:left-0 my-auto z-10 transform scale-350 lg:scale-100"
      />

      <!-- card list -->
      <div class="py-20 relative flex w-auto overflow-x-scroll" id="card-list">
        <div
          class="flex gap-5 absolute top-0 bottom-0 my-auto items-center px-5"
        >
          <!-- card -->
          <div
            class="h-36 w-80 bg-no-repeat bg-center bg-cover relative overflow-hidden rounded-xl"
            :style="resolveBackground('/img/home/industries_data.png')"
          >
            <!-- black effect -->
            <div
              class="absolute top-0 rounded-xl right-0 left-0 bottom-0 bg-gradient-to-t from-black via-transparent"
            ></div>

            <!-- text -->
            <p
              class="mx-4 mt-24 font-bold text-white relative text-lg tracking-wide"
            >
              Data & Analytics
            </p>
          </div>

          <!-- card -->
          <div
            class="h-36 w-80 bg-no-repeat bg-center bg-cover relative overflow-hidden rounded-xl"
            :style="resolveBackground('/img/home/industries_iot.png')"
          >
            <!-- black effect -->
            <div
              class="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black via-transparent"
            ></div>

            <!-- text -->
            <p
              class="mx-4 mt-24 font-bold text-white relative text-lg tracking-wide"
            >
              IoT
            </p>
          </div>

          <!-- card -->
          <div
            class="h-36 w-80 bg-no-repeat bg-center bg-cover relative overflow-hidden rounded-xl"
            :style="resolveBackground('/img/home/industries_telecom.png')"
          >
            <!-- black effect -->
            <div
              class="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black via-transparent"
            ></div>

            <!-- text -->
            <p
              class="mx-4 mt-24 font-bold text-white relative text-lg tracking-wide"
            >
              Telecommunications
            </p>
          </div>

          <!-- card -->
          <div
            class="h-36 w-80 bg-no-repeat bg-center bg-cover relative overflow-hidden rounded-xl"
            :style="resolveBackground('/img/home/industries_media.png')"
          >
            <!-- black effect -->
            <div
              class="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black via-transparent"
            ></div>

            <!-- text -->
            <p
              class="mx-4 mt-24 font-bold text-white relative text-lg tracking-wide"
            >
              Media & Entertainment
            </p>
          </div>

          <!-- card -->
          <div
            class="h-36 w-80 bg-no-repeat bg-center bg-cover relative overflow-hidden rounded-xl"
            :style="resolveBackground('/img/home/industries_fintech.png')"
          >
            <!-- black effect -->
            <div
              class="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black via-transparent"
            ></div>

            <!-- text -->
            <p
              class="mx-4 mt-24 font-bold text-white relative text-lg tracking-wide"
            >
              FinTech
            </p>
          </div>
        </div>
      </div>

      <!-- text -->
      <div
        class="mt-20 mb-40 lg:w-2/3 relative z-20 mx-auto px-5 lg:px-0 text-white lg:text-center"
      >
        <h1 class="font-arial-black lg:text-56 text-41 leading-none py-3">
          Our Work
        </h1>
        <p>
          Go beyond napkin sketches. We help business owners demonstrate
          functionality and feasibility by bringing your ideas to life. Design,
          develope, and prove your core concept with our agile team. Proof of
          concepts provide the quickest and most accurate way to validate or
          invalidate assumptions about your target users and concept.
        </p>
      </div>
    </div>
    <!-- end hero section -->

    <!-- section 3 : card -->
    <div
      class="bg-bottom bg-cover bg-no-repeat text-center pb-36 -mt-20 lg:-mt-0 overflow-hidden relative"
      :style="resolveBackground('/img/services/bg_section_3.png')"
    >
      <!-- card-list -->
      <div class="grid lg:grid-cols-4 px-10 gap-7 mt-10">
        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_1.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Rapid POC 1</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_2.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Rapid POC 2</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_3.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Rapid POC 3</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_4.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Rapid POC 4</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_5.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Rapid POC 5</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_6.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Rapid POC 6</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_7.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Rapid POC 7</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_8.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Rapid POC 8</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_9.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Data & Analytics</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_10.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">IoT</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_11.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Telecommunications</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_12.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Telecommunications</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_13.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Data & Analytics</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_14.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">IoT</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_15.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Telecommunications</p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray rounded-2xl p-4 text-white">
          <!-- image -->
          <div
            class="bg-center bg-cover bg-no-repeat w-full h-56 rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/services/img_card_16.png')"
          ></div>

          <!-- text -->
          <p class="mt-5 font-bold text-2xl">Telecommunications</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="my-40 bg-white lg:w-3/4 mx-5 mb-20 lg:mx-auto pb-20 relative">
        <h1 class="font-arial-black lg:text-56 text-41 pt-14">
          Change the Game
        </h1>
        <p class="mt-3 mb-14">
          Our experts can take your requirements and turn in them into products
          users love.
        </p>
        <a
          href="/contact"
          class="font-bold button-linear-red py-5 px-6 rounded-lg text-white"
          >GET IN TOUCH</a
        >

        <!-- background pattern -->
        <img
          src="~/assets/img/services/img_section_3.1.png"
          class="absolute -left-60 -bottom-48 hidden lg:inline-block"
        />
        <img
          src="~/assets/img/services/img_section_3.2_dot.png"
          class="absolute lg:-top-10 -top-20 transform rotate-90 lg:rotate-0 -right-10"
        />
        <img
          src="~/assets/img/services/img_section_3.3_dot.png"
          class="absolute lg:-bottom-14 -bottom-24 lg:right-2/3 -right-10"
        />
        <img
          src="~/assets/img/services/img_section_3.4.png"
          class="absolute -top-14 lg:left-24 left-5 w-1/6 lg:w-auto"
        />
        <img
          src="~/assets/img/services/img_section_3.5.png"
          class="absolute -bottom-1/4 right-10 hidden lg:inline-block"
        />
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
