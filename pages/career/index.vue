<template>
  <div>
    <!-- Careers at Vodworks start -->
      <section
        class="lg:py-24 py-10 bg-no-repeat bg-cover bg-center"
        :style="resolveBackground('/img/home/home-hero-bg.jpg')"
      >

        <div
          class="grid lg:grid-cols-2 relative max-w-4/5 items-center mx-auto container"
        >
          <div class="relative my-8 md:my-0">
              <h1
                class="text-white text-3xl md:text-4xl lg:text-5xl font-arial-black"
              >
                Careers at Vodworks
              </h1>
             <p class="text-white mt-8 lg:pr-24">
                Vodworks is invested in creating the future of technology. We
                enjoy our work and are committed to making sure we deliver
                quality, service and great solutions to our customers.
              </p>

             <p class="text-white mt-4 lg:pr-24">
                We invite you to join us and be more than just an employee, but a
                partner in achieving our goals.
              </p>
              <div class="mt-8">
                <a
                  href="https://vodworks.breezy.hr/"
                  class="py-4 px-6 bg-white text-h-red rounded-md font-bold uppercase inline-block"
                  target="_blank"
                >
                  BROWSE JOB
                </a>
              </div>

            </div>
          <!-- image -->
          <div class="justify-self-center lg:pl-32">
            <!-- image -->
            <img
              src="~/assets/img/career/img_hero.png"
              class="rounded-2xl mx-auto hvr-left"
              alt="Careers image"
            />
          </div>
        </div>

      </section>
    <!-- Careers at Vodworks End -->

    <!-- Is This You section start -->
    <section class="lg:py-24 py-10">
      <div class="grid lg:grid-cols-2 items-center max-w-4/5 container mx-auto">
        <!-- image -->
        <div class="">
          <img
            src="~/assets/img/career/img_hero_2.jpg"
            class="rounded-2xl lg:w-4/5 mx-auto md:m-0 hvr-right"
            alt="cup of tea"
          />
        </div>
        <!-- text -->
        <div class="my-8 md:my-0">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
            Is this you?
          </h2>
          <p class="text-lg text-h-gray mt-4">
            Are you driven by a passion for applying advanced technologies in
            various industries? Vodworks is constantly searching for
            fast-learning talents craving progress and bringing quality to their
            work. Every team member is eager to explore possibilities technology
            has to offer
          </p>
          <p class="text-lg text-h-gray mt-4">
            If this sounds like you, you might be just right for our team! Join
            us as we create progressive technological solutions around the
            world.
          </p>
        </div>
      </div>

    </section>
    <!-- Is This You section end -->
    <!-- Is This You section end -->


    <!-- benefits -->
    <section class="lg:py-24 py-10 max-w-4/5 container mx-auto" >
      <!-- text -->
      <div class="mx-auto md:max-w-4/5 text-center">
        <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
          Our Benefits
        </h2>
        <p class="text-h-gray mt-4 text-lg">
          Working at Vodworks is not just a job, but an experience. We believe
          in fostering an environment where our team members are able to have
          space to grow and be creative. Team members have access to benefits
          below so as a team, we can create amazing products.
        </p>
      </div>

      <!-- card list -->
      <div
        class="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-tr-xl rounded-tl-xl"
            :style="resolveBackground(`/img/career/img_benefits_1.png`)"
          ></div>
          <p class="font-bold text-xl mt-4">Awesome Culture</p>
          <p class="text-h-gray mt-2">
            Be a part of a fast-paced, progress-driven team that also knows how
            to have fun.
          </p>
        </div>

        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-tr-xl rounded-tl-xl"
            :style="resolveBackground(`/img/career/img_benefits_2.png`)"
          ></div>
          <p class="color-black mt-4 font-bold text-xl">Autonomous Environment</p>
          <p class="text-h-gray mt-2">
            Thrive in a lively work environment that values collaboration and
            taking initiative
          </p>
        </div>

        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-tr-xl rounded-tl-xl"
            :style="resolveBackground(`/img/career/img_benefits_3.png`)"
          ></div>
          <p class="color-black mt-4 font-bold text-xl">Emerging Technologies</p>
          <p class="text-h-gray mt-2">
            Join our team at the forefront of advanced technologies from AI to
            blockchain
          </p>
        </div>

        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-tr-xl rounded-tl-xl"
            :style="resolveBackground(`/img/career/img_benefits_4.png`)"
          ></div>
          <p class="color-black mt-4 font-bold text-xl">Private Healthcare & Pensions</p>
          <p class="text-h-gray mt-2">
            We make sure you’re taken care of as a member of the team, no matter
            the situation.
          </p>
        </div>

        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-xl"
            :style="resolveBackground(`/img/career/img_benefits_5.png`)"
          ></div>
          <p class="color-black mt-4 font-bold text-xl">Work From Home</p>
          <p class="text-h-gray mt-2">
            Enjoy the freedom and comfort of working with our international team
            from home.
          </p>
        </div>

        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-xl"
            :style="resolveBackground(`/img/career/img_benefits_6.png`)"
          ></div>
          <p class="color-black mt-4 font-bold text-xl">Travel Opportunities</p>
          <p class="text-h-gray mt-2">
            We offer exciting travel opportunities to clients and to our global
            offices
          </p>
        </div>
      </div>
    </section>
    <!-- end benefits -->

    <!-- values -->
    <section
      class="lg:py-24 py-10 items-center bg-no-repeat bg-cover bg-center"
      :style="resolveBackground('/img/product-bg.jpg')"
    >
      <div class="max-w-4/5 mx-auto container">
        <!-- text -->
        <div class="text-white text-center mx-auto max-w-4/5">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">
            Our Values
          </h2>
          <p class="mt-4 lg:text-lg opacity-80">
            Working at Vodworks is not just a job, but an experience. We believe
            in fostering an environment where our team members are able to have
            space to grow and be creative. Team members have access to benefits
            below so as a team, we can create amazing products.
          </p>
        </div>
        <!-- card list -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <!-- card -->
          <div class="bg-b-dark-gray p-2 pb-4 rounded-xl hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-xl rounded-tl-xl"
              :style="resolveBackground('/img/career/img_values_1.png')"
            ></div>

            <!-- text -->
            <p class="text-white text-center mt-4 font-bold text-xl">
              Passionate about technology
            </p>
          </div>

          <!-- card -->
          <div class="bg-b-dark-gray p-2 pb-4 rounded-xl hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-xl rounded-tl-xl"
              :style="resolveBackground('/img/career/img_values_2.png')"
            ></div>

            <!-- text -->
            <p class="text-white text-center mt-4 font-bold text-xl">
              Honesty and quality- focused mindset
            </p>
          </div>

          <!-- card -->
          <div class="bg-b-dark-gray p-2 pb-4 rounded-xl hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-xl rounded-tl-xl"
              :style="resolveBackground('/img/career/img_values_3.png')"
            ></div>

            <!-- text -->
            <p class="text-white text-center mt-4 font-bold text-xl">
              Constant progress and improvmenet
            </p>
          </div>

          <!-- card -->
          <div class="bg-b-dark-gray p-2 pb-4 rounded-xl hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-xl rounded-tl-xl"
              :style="resolveBackground('/img/career/img_values_4.png')"
            ></div>

            <!-- text -->
            <p class="text-white text-center mt-4 font-bold text-xl">
              Not taking ourselves too seriously
            </p>
          </div>
        </div>
      </div>

    </section>
    <!-- end values -->

    <!-- join our team start-->
    <section class="lg:py-24 py-10 bgColor-grey">

      <div class="grid lg:grid-cols-2 items-center mx-auto max-w-4/5 container">
        <!-- team -->
        <div class="overflow-x-hidden rounded-full order-2 lg:order-none">
          <img
            class="w-80 mx-auto md:m-0 hvr-right"
            src="~assets/img/home/our_team_1.png"
            alt="" />
        </div>
        <div class="my-8 lg:my-0">
          <!-- text -->
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
            Join Our Team
          </h2>

          <p class="text-lg text-h-gray mt-4">
            Where impact meet opportunity. Our engineering team builds bespoke
            solutions for global brands. Fully remote, always communicating, and
            fully transparent, see why our employees love working for Vodworks.
          </p>
          <a
            href="https://vodworks.breezy.hr/"
            class="inline-block mt-8 py-4 px-6 button-red rounded-md text-white font-bold uppercase"
            target="_blank"
          >
            Get Started
          </a>
        </div>
      </div>

    </section>
    <!-- join our team End-->



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
