<template>
  <div class="bg-h-black">
    <header class="flex flex-row justify-between mx-auto max-w-4/5 container py-4">
      <!-- logo -->
      <div class="flex">
        <NuxtLink
          to="/"
          class="lg:justify-self-end mr-5 cursor-pointer"
          active-class="bg-transparent"
        >
          <img src="~/assets/img/logo.svg" alt="logo" />
        </NuxtLink>

        <!-- menu -->
        <div class="my-auto">
          <ul class="text-h-font self-center hidden md:inline-block space-x-4">
            <li class="relative dropdown-parent">
              <NuxtLink
                to="/services"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
              >
                Services
              </NuxtLink>

              <ul class="dropdown">
                <li>
                  <NuxtLink
                    to="/services/fintech-blockchain"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Fintech & Blockchain
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/services/augmented-teams-developers"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Augmented Teams & Developers
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/services/product-engineering"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Product Engineering
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/services/rapid-pocs"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Rapid POC’s
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/services/iot"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    IoT
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/services/media-solutions"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Media Solutions
                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                    to="/services/ecommerce"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    E-commerce, Logistics, and Loyalty
                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                    to="/services/ui-ux-design"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    UI/UX Design
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/services/mobile-app-development"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Mobile App Development
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/services/business-intelligence-ai"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Business Intelligence + AI
                  </NuxtLink>
                </li>

              </ul>
            </li>
            <li>
              <NuxtLink
                to="/work"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
              >
                Work
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/blogs-and-webinars"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
              >
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/career"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
              >
                Career
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/partner"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
              >
                Partner
              </NuxtLink>
            </li>
          </ul>

        </div>
      </div>

      <!-- button -->
      <NuxtLink
        to="/contact"
        class="text-white self-center font-bold hidden lg:inline-block invisible md:visible"
        active-class="bg-transparent"
      >
        <div class="button-red inline-block py-4 px-6 rounded-md uppercase">
          Get in Touch
        </div>
      </NuxtLink>
      <!-- icon menu -->
      <img
        v-show="!showMenu"
        src="~/assets/img/icon/menu.png"
        class="self-center justify-self-end md:hidden cursor-pointer"
        @click="showMenu = true"
      />
      <div v-show="showMenu" class="self-center justify-self-end md:hidden cursor-pointer" @click="showMenu = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </header>
    <div class="header">
      <ul
        v-show="showMenu"
        class="text-h-font md:hidden flex flex-col items-start px-6 pb-4 space-y-4"
      >
        <li>
          <NuxtLink
            to="/services"
            class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
            @click.native="showMenu = false"
          >
            Services
          </NuxtLink>

          <ul class="dropdown sm">
            <li>
              <NuxtLink
                to="/services/product-engineering"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Product Engineering
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/services/rapid-pocs"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Rapid POC’s
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/media-solutions"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Media Solutions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/augmented-teams&developers"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Augmented Teams & Developers
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/ecommerce"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                E-commerce, Logistics, and Loyalty
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/fintech-blockchain"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Fintech & Blockchain
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/ui-ux-design"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                UI/UX Design
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/mobile-app-development"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Mobile App Development
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/business-intelligence-ai"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Business Intelligence + AI
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/iot"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                IoT
              </NuxtLink>
            </li>
          </ul>

        </li>
        <li>
          <NuxtLink
            to="/work"
            class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
            @click.native="showMenu = false"
          >
            Work
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/blogs-and-webinars"
            class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
            @click.native="showMenu = false"
          >
            Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/career"
            class="hover:bg-h-gray py-2 rounded-md px-2 inline-block"
          >
            Career
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/partner"
            class="hover:bg-h-gray py-2 rounded-md px-2 inline-block"
          >
            Partner
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
            @click.native="showMenu = false"
          >
            Schedule Demo
          </NuxtLink>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader',
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>
