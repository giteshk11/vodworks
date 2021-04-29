<template>
  <div>
    <!-- hero section -->
    <div class="relative overflow-hidden">
      <div
        class="bg-b-black lg:w-3/5 lg:transform lg:-skew-x-6 lg:-translate-x-10 relative z-50"
      >
        <div
          class="bg-no-repeat lg:pl-40 pl-6 lg:pt-40 pt-8 lg:pb-44 pb-14 text-white"
          :style="resolveBackground('/img/bg_home.png')"
          style="background-position: 50%"
        >
          <div class="transform lg:skew-x-6">
            <h1 class="text-56 font-arial-black leading-65 tracking-wide">
              We Deliver Amazing Web, Mobile & Digital Experience
            </h1>

            <p class="mt-5 pr-20">
              Developing Custom Software & Digital Products at Scale for
              Start-ups and Enterprises since 2012.
            </p>
            <p class="mt-3 pr-24">
              Work with Top Development Company, Awesome Developers and
              On-Demand Agile Teams.
            </p>

            <div class="mt-14">
              <a
                href="/contact"
                class="px-6 py-5 bg-white rounded-lg text-l-red font-bold"
                >DISCUSS YOUR PROJECT</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- image lg-->
      <div
        class="px-0 w-full h-full absolute right-0 top-0 hidden lg:block"
        :style="resolveBackground('/img/img_home.png')"
        id="hero-image"
      >
        <!-- <img src="~assets/img/img_home.png" class="lg:inline-block lg:right-0 lg:top-0 lg:absolute lg:z-10" id="hero-image" /> -->
      </div>

      <!-- img mobile -->
      <img src="~assets/img/img_home.png" class="lg:hidden" />
    </div>
    <!-- end hero section -->

    <!-- services -->
    <div
      class="lg:pt-40 pt-20 bg-top lg:-mt-44 -mt-16 relative z-50 bg-cover text-white text-center overflow-hidden lg:rounded-br-4xl lg:rounded-bl-4xl bg-service"
    >
      <div class="lg:px-72 px-3">
        <h1 class="lg:text-56 text-41 font-arial-black tracking-wide">
          Our Services
        </h1>
        <p class="mt-6 mb-12">
          Supercharge your project. We help business owners and enterprise IT
          teams from concept, to design, to delivery and ongoing
          optimizations/maintenance. There with you every step of the way, we
          leverage our 20 years of experience to build innovative custom-made
          products that your users will love.
        </p>

        <!-- link -->
        <a
          href="/services"
          class="py-5 px-6 rounded-md font-bold uppercase button-linear-red"
          >View Services</a
        >
      </div>

      <!-- card -->
      <div class="overflow-hidden relative my-14 py-72 flex justify-center">
        <!-- arrow -->
        <div
          class="absolute h-96 w-72 lg:w-64 z-50 left-0 right-0 top-0 bottom-0 m-auto rounded-md"
        >
          <!-- right arrow on -->
          <div
            class="absolute w-16 h-16 bg-x-red top-0 bottom-0 m-auto -right-8 rounded-lg cursor-pointer"
            id="button-right-on"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 absolute top-0 bottom-0 right-0 left-0 m-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <!-- right arrow off -->
          <div
            class="absolute w-16 h-16 bg-x-black top-0 bottom-0 m-auto -right-8 rounded-lg hidden"
            id="button-right-off"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 absolute top-0 bottom-0 right-0 left-0 m-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <!-- left arrow on-->
          <div
            class="absolute w-16 h-16 bg-x-red top-0 bottom-0 m-auto -left-8 rounded-lg cursor-pointer"
            id="button-left-on"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 absolute top-0 bottom-0 right-0 left-0 m-auto transform rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <!-- left arrow off-->
          <div
            class="absolute w-16 h-16 bg-x-black top-0 bottom-0 m-auto -left-8 rounded-lg hidden"
            id="button-left-off"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 absolute top-0 bottom-0 right-0 left-0 m-auto transform rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <!-- card list -->
        <div
          class="flex absolute top-0 bottom-0 m-auto gap-24 home-card-wrapper"
        >
          <!-- DONT PUT IMAGE HERE -->
          <div class="home-card transform border-transparent">
            <!-- dark effect -->
            <div class="home-card--dark hidden"></div>

            <!-- text -->
            <p class="home-card--text hidden">Rapid Proof of Concepts</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- DONT PUT IMAGE HERE -->
          <div class="home-card transform border-transparent">
            <!-- dark effect -->
            <div class="home-card--dark hidden"></div>

            <!-- text -->
            <p class="home-card--text hidden">Rapid Proof of Concepts</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- card -->
          <div
            class="home-card transform border-black"
            :style="
              resolveBackground(
                '/img/home/home_card/Rapid_Proof_of_Concepts.png'
              )
            "
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">Rapid Proof of Concepts</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- card -->
          <div
            class="home-card transform border-black"
            :style="
              resolveBackground('/img/home/home_card/Product_Engineering.png')
            "
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">Product Engineering</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- card -->
          <div
            class="home-card transform border-black"
            :style="
              resolveBackground(
                '/img/home/home_card/Outsourced_Product_Development.png'
              )
            "
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">Outsourced Product Development</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- card -->
          <div
            class="home-card transform border-black"
            :style="
              resolveBackground(
                '/img/home/home_card/mobile_app_development.png'
              )
            "
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">Mobile App Development</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- card -->
          <div
            class="home-card transform border-black"
            :style="
              resolveBackground('/img/home/home_card/Media_Solutions.png')
            "
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">Media Solutions</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- MAIN CARD -->
          <div
            class="home-card transform border-black"
            :style="
              resolveBackground('/img/home/home_card/UI_UX_Development.png')
            "
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">UI UX Development</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- card -->
          <div
            class="home-card transform border-black"
            :style="resolveBackground('/img/home/home_card/ioT.png')"
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">IoT</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- card -->
          <div
            class="home-card transform border-black"
            :style="
              resolveBackground('/img/home/home_card/Fintech&Blockchain.png')
            "
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">Fintech & Blockchain</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- card -->
          <div
            class="home-card transform border-black"
            :style="
              resolveBackground(
                '/img/home/home_card/EcommerceLogisticsLoyalty.png'
              )
            "
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">Ecommerce, Logistics, Loyalty</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- card -->
          <div
            class="home-card transform border-black"
            :style="
              resolveBackground(
                '/img/home/home_card/Business_Intelligence&Data_Analytics.png'
              )
            "
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">
              Business Intelligence & Data Analytics
            </p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- card -->
          <div
            class="home-card transform border-black"
            :style="
              resolveBackground(
                '/img/home/home_card/Augmented_Teams_and_Developers.png'
              )
            "
          >
            <!-- dark effect -->
            <div class="home-card--dark"></div>

            <!-- text -->
            <p class="home-card--text">Augmented Teams and Developers</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- DONT PUT IMAGE HERE -->
          <div class="home-card transform border-transparent">
            <!-- dark effect -->
            <div class="home-card--dark hidden"></div>

            <!-- text -->
            <p class="home-card--text hidden">Rapid Proof of Concepts</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>

          <!-- DONT PUT IMAGE HERE -->
          <div
            class="home-card transform border-transparent scale-70 home-card-right"
          >
            <!-- dark effect -->
            <div class="home-card--dark hidden"></div>

            <!-- text -->
            <p class="home-card--text hidden">Rapid Proof of Concepts</p>

            <!-- main dark effect -->
            <div class="home-card--dark-main"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- end services -->

    <!-- expert developers -->
    <div class="grid lg:grid-cols-2 mt-14 lg:mt-10 lg:my-10" id="home-expert">
      <!-- image: left -->
      <div
        class="bg-no-repeat bg-cover bg-center py-40 lg:py-72 my-20 relative order-2 lg:order-1"
      >
        <!-- background circle -->
        <img
          src="~assets/img/bg_home_3.png"
          class="absolute w-3/4 lg:w-3/4 top-0 bottom-0 right-0 left-0 m-auto z-0"
        />

        <!-- dot -->
        <img
          src="~assets/img/home_dot_1.png"
          class="absolute left-20 lg:left-1/4 bottom-1/2 lg:bottom-3/4 z-0"
        />
        <img
          src="~assets/img/home_dot_2.png"
          class="absolute right-7 bottom-20 z-0"
        />

        <!-- image -->
        <div class="absolute w-2/3 right-0 left-0 bottom-0 top-0 m-auto">
          <img
            src="~assets/img/home/developers_mobile.png"
            class="absolute w-8/12 right-0 left-0 bottom-0 top-0 m-auto z-30 filter drop-shadow-lg transform -translate-y-0 transition duration-700 ease-linear"
          />
          <img
            src="~assets/img/home/developers_backend.png"
            class="absolute w-7/12 right-0 left-0 bottom-0 top-0 m-auto z-20 filter drop-shadow-lg transform translate-x-0 translate-y-0 transition duration-700 ease-linear"
          />
          <img
            src="~assets/img/home/developers_platform.png"
            class="absolute w-7/12 right-0 left-0 bottom-0 top-0 m-auto z-10 filter drop-shadow-lg transform -translate-x-0 translate-y-0 transition duration-700 ease-linear"
          />
        </div>
      </div>

      <!-- text: right -->
      <div class="lg:ml-20 self-center order-1 lg:order-2">
        <h1
          class="mb-9 font-arial-black lg:text-56 text-41 leading-10 lg:leading-65"
        >
          Expert Front-End Developers
        </h1>
        <a
          href="/contact"
          class="py-5 px-6 button-linear-red rounded-lg text-white font-bold uppercase"
          >Discuss Your Project</a
        >
      </div>
    </div>
    <!-- end expert developers -->

    <!-- webflow -->
    <div
      class="bg-no-repeat bg-cover bg-center mx-auto lg:w-11/12"
      :style="resolveBackground('/img/bg_home_4.png')"
    >
      <!-- content 1 -->
      <div class="grid lg:grid-cols-2 pt-28 text-white lg:ml-24 px-8 lg:px-0">
        <!-- text -->
        <div class="lg:w-5/6">
          <h1
            class="font-arial-black text-41 lg:text-56 lg:leading-65 leading-10 text-center lg:text-left"
          >
            On Demand Webflow
          </h1>
          <p class="mt-16 lg:mt-20 font-arial-black text-3xl tracking-wider">
            Augmented Teams & Developers
          </p>
          <p class="mt-5 lg:text-lg">
            Expand your existing team with ready-to-go developers ready to
            accelerate your process. Fluent in agile development and the latest
            technology stacks, hire on demand engineers to get your product
            live, faster.
          </p>
        </div>

        <!-- image -->
        <div class="relative">
          <img
            src="~assets/img/img_home_ondemand1.png"
            class="lg:w-9/12 mt-14 lg:mt-0 lg:absolute right-0 left-0 mx-auto -bottom-32"
          />
        </div>
      </div>

      <!-- cotent 2 -->
      <div class="grid lg:grid-cols-2 px-8 lg:px-0">
        <!-- image -->
        <img
          src="~assets/img/img_home_ondemand2.png"
          class="lg:ml-24 lg:w-9/12 my-14 lg:my-0 lg:mt-44 lg:mb-16 order-2 lg:order-none"
        />

        <!-- text -->
        <div class="text-white self-center lg:w-5/6 lg:ml-10 mt-16 lg:mt-10">
          <h2
            class="font-arial-black leading-10 lg:leading-65 text-3xl tracking-wider"
          >
            Outsourced Product Development
          </h2>
          <p class="mt-5 text-lg">
            Fully managed end-to-end, we take your project from design to
            delivery. Build new features on top of your existing enterprise
            stack, extend your operational efficiency, or create that pet
            project you’ve been thinking about. Like the team after launch? Hire
            the entire crew outright, and have guaranteed performance year over
            year.
          </p>
        </div>
      </div>
    </div>
    <!-- end web flow -->

    <!-- industries -->
    <div class="lg:mt-24 mt-16">
      <h1
        class="font-arial-black px-20 lg:px-0 leading-10 text-41 lg:text-56 text-center lg:pb-20 pb-16"
      >
        Industries Served
      </h1>

      <!-- card -->
      <div class="grid lg:grid-cols-4 lg:px-28">
        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_media.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">
            Media & Entertainment
          </p>
          <p class="text-center text-sm text-h-gray">
            Maximize your media coverage
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            style="
              background-image: url('~assets/img/home/industries_fintech.png');
            "
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">FinTech</p>
          <p class="text-center text-sm text-h-gray">
            Evolving wealth management
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_ecommerce.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">
            Ecommerce & Logistics
          </p>
          <p class="text-center text-sm text-h-gray">
            Built for efficiency and productivity
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_loyalty.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Loyalty & Rewards</p>
          <p class="text-center text-sm text-h-gray">
            Interact, discover, & reward customers
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_data.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Data & Analytics</p>
          <p class="text-center text-sm text-h-gray">
            Intelligent analytics solutions
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_iot.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">IoT</p>
          <p class="text-center text-sm text-h-gray">
            Intelligent analytics solutions
          </p>
        </div>

        <!-- card 1 -->
        <div class="justify-self-center lg:mb-20 mb-10">
          <!-- image -->
          <div
            class="lg:w-60 w-80 h-44 rounded-lg bg-center bg-no-repeat bg-cover"
            :style="resolveBackground('/img/home/industries_telecom.png')"
          ></div>

          <!-- text -->
          <p class="mt-4 text-center font-bold text-xl">Telecommunications</p>
          <p class="text-center text-sm text-h-gray">Innovative IT expertise</p>
        </div>
      </div>
    </div>
    <!-- end industries -->

    <!-- clients-->
    <!-- banner -->
    <div
      class="lg:w-11/12 pt-14 lg:pt-0 mx-auto lg:rounded-lg bg-no-repeat bg-cover bg-center grid lg:grid-cols-2 text-white"
      :style="resolveBackground('/img/bg_home_5.png')"
    >
      <div
        class="lg:pl-20 text-center lg:text-left py-14 lg:py-24 order-2 lg:order-1"
      >
        <p class="font-bold text-2xl lg:text-4xl mb-14 px-8 lg:px-0">
          Need info about each of these clients here
        </p>
        <a href="#" class="p-5 border border-gray-600 rounded-lg font-bold"
          >LEARN MORE ABOUT OUR CLIENTS</a
        >
      </div>

      <div class="self-center justify-self-center w-1/3 lg:w-auto">
        <img src="~assets/img/home_logo_irdeta.png" class="" />
      </div>
    </div>

    <!-- logo -->
    <div class="lg:py-20 py-20 overflow-hidden flex items-center relative">
      <div class="absolute flex justify-self-center justify-center">
        <img
          src="~assets/img/home/home_logo/ea.png"
          class="w-4/5 -mx-10 lg:-mx-0"
        />
        <!-- <img
          src="~assets/img/home/home_logo/itv"
          class="w-4/5 -mx-10 lg:-mx-0"
        /> -->
        <img
          src="~assets/img/home/home_logo/sky.png"
          class="w-4/5 -mx-10 lg:-mx-0"
        />
        <img
          src="~assets/img/home/home_logo/irdeto.png"
          class="w-4/5 -mx-10 lg:-mx-0"
        />
        <img
          src="~assets/img/home/home_logo/canal+.png"
          class="w-4/5 -mx-10 lg:-mx-0"
        />
        <img
          src="~assets/img/home/home_logo/k+.png"
          class="w-4/5 -mx-10 lg:-mx-0"
        />
        <img
          src="~assets/img/home/home_logo/liberty_global.png"
          class="w-4/5 -mx-10 lg:-mx-0"
        />

        <img src="~assets/img/home/home_logo/mytv.png" alt="" />
      </div>
    </div>
    <!-- end clients -->

    <!-- join our team-->
    <div
      class="bg-center bg-cover bg-no-repeat lg:py-28 py-6 lg:px-0 px-6 relative"
      :style="resolveBackground('/img/bg_home_6.png')"
    >
      <!-- card -->
      <div
        class="lg:py-24 py-10 lg:pl-64 lg:pr-12 px-6 lg:px-0 bg-white text-center lg:text-left lg:rounded-xl lg:w-8/12 mx-auto lg:mr-20 relative z-10"
      >
        <!-- background -->
        <img
          src="~assets/img/bg_home_6.3.png"
          class="absolute w-1/2 -right-10 -top-10 hidden lg:block"
        />

        <!-- text -->
        <h1 class="lg:text-56 text-41 font-arial-black">Join Our Team</h1>
        <p class="text-lg text-h-gray mb-10 lg:mb-16">
          Where impact meet opportunity. Our engineering team builds bespoke
          solutions for global brands. Fully remote, always communicating, and
          fully transparent, see why our employees love working for Vodworks.
        </p>
        <a
          href="#"
          class="py-5 px-6 button-linear-red rounded-lg text-white font-bold uppercase"
          >GET STARTED</a
        >

        <!-- background circle -->
        <div
          class="bg-no-repeat bg-bottom bg-cover lg:min-h-full h-72 lg:w-100 w-72 mt-24 lg:mt-0 mb-10 lg:mb-0 lg:absolute relative top-0 bottom-0 m-auto lg:-left-1/4 rounded-full"
          :style="resolveBackground('/img/bg_home_6.2.png')"
        >
          <!-- team -->
          <div class="absolute bottom-0 overflow-x-hidden rounded-full">
            <img src="~assets/img/home/our_team_1.png" alt="" />
          </div>

          <!-- dot -->
          <div
            class="absolute z-50 left-0 right-0 m-auto -bottom-10 flex justify-center gap-2"
          >
            <div class="w-2 h-2 rounded-full bg-x-gray"></div>
            <div
              class="w-2 h-2 rounded-full bg-center bg-no-repeat bg-contain"
              :style="resolveBackground('/img/home/our_team_dot.png')"
            ></div>
            <div class="w-2 h-2 rounded-full bg-x-gray"></div>
            <div class="w-2 h-2 rounded-full bg-x-gray"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- end join our team-->

    <!-- learn with us-->
    <div
      class="bg-center bg-cover bg-no-repeat lg:py-28 py-6 relative px-6 lg:px-0"
      :style="resolveBackground('/img/bg_home_7.png')"
    >
      <!-- card -->
      <div
        class="lg:py-28 py-10 lg:pr-64 lg:pl-12 px-6 lg:px-0 text-center lg:text-left bg-white lg:rounded-xl lg:w-8/12 mx-auto lg:ml-20 relative z-10"
      >
        <!-- background -->
        <img
          src="~assets/img/bg_home_7.3.png"
          class="hidden lg:block absolute w-1/4 left-0 bottom-0"
        />
        <img
          src="~assets/img/bg_home_7.2.png"
          class="hidden lg:block absolute -top-16 -right-48"
        />

        <h1 class="lg:text-56 text-41 font-arial-black">Learn With Us</h1>
        <p class="text-lg text-h-gray mb-10 lg:mb-16">
          Knowledge share is core to our business model. Learn from industry
          experts, check out our webinars, or take a peek at our culture!
        </p>
        <a
          href="/blog_main"
          class="py-5 px-6 button-linear-red rounded-lg text-white font-bold uppercase relative"
          >Expore blogs & Webinars</a
        >

        <!-- background circle -->
        <div
          class="bg-no-repeat bg-center bg-contain lg:h-full h-72 lg:w-100 w-72 mt-24 lg:mt-0 lg:absolute top-0 bottom-0 m-auto lg:-right-1/4 relative"
          :style="resolveBackground('/img/bg_home_7.1.png')"
        >
          <!-- team -->
          <div class="absolute bottom-0 overflow-x-hidden rounded-full">
            <img src="~assets/img/home/learn_with_us_1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- end learn with us-->

    <!-- bottom section -->
    <div
      class="overflow-hidden bg-cover bg-center bg-no-repeat grid lg:grid-cols-2 text-white relative z-10"
      :style="resolveBackground('/img/bg_home_8.png')"
    >
      <div class="lg:py-44 py-20 lg:pl-32 px-7 lg:px-0">
        <h1
          class="mb-16 font-arial-black text-41 lg:text-56 lg:w-3/4 leading-10 lg:leading-65"
        >
          Got a new idea? Let’s Talk
        </h1>
        <a
          href="#"
          class="py-5 px-6 button-linear-red rounded-lg font-bold uppercase"
        >
          GET IN TOUCH
        </a>
      </div>

      <!-- img lg -->
      <img
        src="~assets/img/bg_home_8.1.png"
        class="hidden lg:block absolute top-0 bottom-0 my-auto -right-64 z-10"
      />

      <!-- img mobile -->
      <img
        src="~assets/img/bg_home_8.1_mobile.png"
        class="mb-20 mt-8 lg:hidden transform scale-125 ml-9"
      />
    </div>
    <!-- end bottom section -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      metaInfo: {
        script: [
          { src: '~/assets/scripts/index.js', defer: true, async: true },
        ],
      },
    }
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  },
}
</script>
