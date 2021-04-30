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
          <a href="#">Product Engineering</a>
        </p>
        <p class="inline-block">
          <a href="#">Rapid POCs</a>
        </p>
        <p class="inline-block">
          <a href="#">Media Solutions</a>
        </p>
        <p class="inline-block">
          <a href="#">Augmented Teams</a>
        </p>
        <p class="inline-block">
          <a href="#">Product Development</a>
        </p>
        <p class="inline-block">
          <a href="#">E-commerce, Logistics, and Loyalty</a>
        </p>
        <p class="inline-block">
          <a href="#">Fintech & Blockchain</a>
        </p>
        <p class="inline-block">
          <a href="#">UI/UX Design</a>
        </p>
        <p class="inline-block">
          <a href="#">Mobile App Development</a>
        </p>
        <p class="inline-block">
          <a href="#">Business Intelligence + Data Analytics</a>
        </p>
        <p class="inline-block">
          <a href="#">IoT</a>
        </p>
      </div>

      <!-- support -->
      <div class="flex flex-col mr-8 leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Support</h2>
        <p class="inline-block">
          <a href="#">Product Engineering</a>
        </p>
        <p class="inline-block">
          <a href="#">Rapid POCs</a>
        </p>
        <p class="inline-block">
          <a href="#">Media Solutions</a>
        </p>
        <p class="inline-block">
          <a href="#">Augmented Teams</a>
        </p>
        <p class="inline-block">
          <a href="#">Product Development</a>
        </p>
        <p class="inline-block">
          <a href="#">E-commerce, Logistics, and Loyalty</a>
        </p>
      </div>

      <!-- company -->
      <div class="flex flex-col leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Company</h2>
        <p class="inline-block">
          <a href="#">About</a>
        </p>
        <p class="inline-block">
          <a href="/blogs-and-webinars">Blogs</a>
        </p>
        <p class="inline-block">
          <a href="/career">Careers</a>
        </p>
        <p class="inline-block">
          <a href="/partner"> Partners, Investments, & Impact Projects </a>
        </p>
        <p class="inline-block">
          <a href="/contact">Contact</a>
        </p>
      </div>
    </div>
  </footer>
</template>
