<template>
  <footer
    class="lg:py-16 py-24 grid lg:grid-cols-3 grid-cols-1 relative px-5 lg:px-0 overflow-hidden mx-auto container"
  >
    <!-- logo -->
    <div class="justify-self-center">
      <img src="~/assets/img/logo_black.svg" />

      <!-- dot-->
      <img
        src="~/assets/img/footer_dot_1.png"
        class="absolute lg:top-1/2 lg:left-20 right-2 bottom-2 hidden lg:block"
      />
    </div>

    <div
      class="lg:col-span-2 flex flex-col lg:gap-20 lg:flex-row text-sm text-x-gray overflow-hidden"
    >
      <!-- dot -->
      <img
        src="~/assets/img/footer_dot_2.png"
        class="absolute bottom-5 right-5 hidden lg:block"
      />

      <!-- mobile -->
      <img
        src="~/assets/img/footer_dot_3.png"
        class="absolute bottom-1/2 -right-2 hidden lg:hidden"
      />
      <img
        src="~/assets/img/footer_dot_1.png"
        class="absolute top-0 right-2 lg:hidden z-50"
      />

      <!-- services -->
      <div class="flex flex-col mr-8 leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Services</h2>
        <p class="inline-block">
          <NuxtLink
            to="/services/product-engineering"
            active-class="bg-transparent"
          >
            Product Engineering
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/rapid-pocs" active-class="bg-transparent">
            Rapid POCs
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink
            to="/services/media-solutions"
            active-class="bg-transparent"
          >
            Media Solutions
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink
            active-class="bg-transparent"
            to="/services/augmented-teams&developers/"
            >Augmented Teams
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink
            to="/services/product-development"
            active-class="bg-transparent"
          >
            Product Development
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/ecommerce" active-class="bg-transparent">
            E-commerce, Logistics, and Loyalty
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink
            to="/services/fintech-blockchain"
            active-class="bg-transparent"
          >
            Fintech & Blockchain
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/ui-ux-design" active-class="bg-transparent">
            UI/UX Design
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink
            to="/services/mobile-app-development"
            active-class="bg-transparent"
          >
            Mobile App Development
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink
            to="/services/business-intelligence-ai"
            active-class="bg-transparent"
          >
            Business Intelligence & AI
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/iot" active-class="bg-transparent">
            IoT
          </NuxtLink>
        </p>
      </div>

      <!-- social -->
      <div class="flex flex-col mr-14 leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Social</h2>
        <p class="inline-block">
          <a href="https://twitter.com/vodworksit" target="_blank"> Twitter </a>
        </p>
        <p class="inline-block">
          <a href="https://www.facebook.com/vodworks/" target="_blank">
            Facebook
          </a>
        </p>
        <p class="inline-block">
          <a href="https://www.linkedin.com/company/vodworks" target="_blank">
            LinkedIn
          </a>
        </p>
      </div>

      <!-- company -->
      <div class="flex flex-col leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Company</h2>
        <p class="inline-block">
          <NuxtLink to="/blogs-and-webinars" active-class="bg-transparent">
            Blogs
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/career" active-class="bg-transparent">
            Careers
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/partner" active-class="bg-transparent">
            Partners, Investments, & Impact Projects
          </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/contact" active-class="bg-transparent">
            Contact
          </NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>
