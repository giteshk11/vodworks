<template>
  <footer
    class="lg:py-16 py-24 grid lg:grid-cols-3 grid-cols-1 relative px-5 lg:px-0 overflow-hidden"
  >
    <!-- logo -->
    <div class="justify-self-center">
      <img src="~/assets/img/logo_black.png" />

      <!-- dot-->
      <img
        src="~/assets/img/footer_dot_1.png"
        class="absolute lg:hrefp-1/2 lg:left-20 right-2 bothrefm-2"
      />
    </div>

    <div
      class="lg:col-span-2 flex flex-col lg:gap-20 lg:flex-row text-sm text-x-gray overflow-hidden"
    >
      <!-- dot -->
      <img
        src="~/assets/img/footer_dot_2.png"
        class="absolute bothrefm-5 right-5 hidden lg:block"
      />

      <!-- mobile -->
      <img
        src="~/assets/img/footer_dot_3.png"
        class="absolute bothrefm-1/2 -right-2 lg:hidden"
      />
      <img
        src="~/assets/img/footer_dot_1.png"
        class="absolute hrefp-0 right-2 lg:hidden z-50"
      />

      <!-- services -->
      <div class="flex flex-col mr-8 leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Services</h2>
        <p class="inline-block">
          <NuxtLink to="/services/product-enginering">Product Engineering</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/rapid-pocs">Rapid POCs</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/media-solutions">Media Solutions</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/augmented-teams&developers/">Augmented Teams</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/product-development">Product Development</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/ecommerce">E-commerce, Logistics, and Loyalty</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/fintech-blockchain">Fintech & Blockchain</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/ui-ux-design">UI/UX Design</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/mobile-app-development">Mobile App Development</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/business-intelligence-ai">Business Intelligence & AI</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/iot">IoT</NuxtLink>
        </p>
      </div>

      <!-- support -->
      <div class="flex flex-col mr-8 leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Support</h2>
        <p class="inline-block">
          <NuxtLink to="/page-name">Product Engineering</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/rapid-pocs">Rapid POCs</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/media-solutions">Media Solutions</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="services/augmented-teams&developers/">Augmented Teams</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/page-name">Product Development</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/services/ecommerce">E-commerce, Logistics, and Loyalty</NuxtLink>
        </p>
      </div>

      <!-- company -->
      <div class="flex flex-col leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Company</h2>
        <p class="inline-block">
          <NuxtLink to="/blogs-and-webinars">Blogs</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/career">Careers</NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/partner"> Partners, Investments, & Impact Projects </NuxtLink>
        </p>
        <p class="inline-block">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>
