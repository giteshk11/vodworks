<template>
  <div>
    <div class="text-white bg-b-black">
      <!-- 1 -->
      <div
        class="grid lg:grid-cols-2 px-2 lg:px-0 relative overflow-hidden lg:overflow-visible"
      >
        <!-- text -->
        <div
          class="lg:pl-32 lg:pr-20 px-5 lg:px-0 lg:py-36 pt-32 lg:pb-16 pb-12 relative"
        >
          <!-- background pattern -->
          <img
            src="~/assets/img/career/bg_pattern_circle_blue.png"
            class="absolute lg:-top-48 top-0 lg:-left-48 -left-20 transform lg:scale-150 scale-250"
          />
          <img
            src="~/assets/img/career/bg_pattern_circle_red.png"
            class="absolute -right-1/2 -bottom-1/3 transform scale-250 lg:scale-100"
          />

          <div class="relative">
            <h1 class="lg:text-56 text-41 font-arial-black tracking-wider">
              Careers at
              <span class="block lg:-mt-8 -mt-6">Vodworks</span>
            </h1>
            <p class="mt-3 leading-32">
              Vodworks is invested in creating the future of technology. We
              enjoy our work and are committed to making sure we deliver
              quality, service and great solutions to our customers.
            </p>
            <br />
            <p class="mb-11 leading-32">
              We invite you to join us and be more than just an employee, but a
              partner in achieving our goals.
            </p>

            <a
              href="#"
              class="py-5 px-6 bg-white text-h-red rounded-lg font-bold uppercase"
              >BROWSE JOB</a
            >
          </div>
        </div>

        <!-- image -->
        <div class="justify-self-center py-14 relative px-6 lg:px-0">
          <!-- image -->
          <img
            src="~/assets/img/career/img_hero.png"
            class="rounded-3xl mx-auto relative z-10"
          />
        </div>
      </div>

      <!-- 2 -->
      <div
        class="grid lg:grid-cols-2 px-6 lg:px-0 bg-no-repeat bg-center bg-cover overflow-hidden"
        :style="resolveBackground('/img/career/bg_pattern.png')"
      >
        <!-- image -->
        <div class="justify-self-center py-14 relative">
          <!-- background pattern dot -->
          <img
            src="~/assets/img/career/bg_pattern_dot_white.png"
            class="absolute lg:z-0 z-20 top-5 lg:-left-10 -left-5"
          />
          <img
            src="~/assets/img/career/bg_pattern_dot_red.png"
            class="absolute z-20 -right-10 bottom-0"
          />

          <!-- image -->
          <img
            src="~/assets/img/career/img_hero_2.png"
            class="rounded-3xl mx-auto relative z-10"
          />
        </div>

        <!-- text -->
        <div class="my-auto lg:pr-44 pb-20 lg:pb-0">
          <h1 class="text-41 font-arial-black tracking-wider">Is this you?</h1>
          <p class="mt-4 leading-32">
            Are you driven by a passion for applying advanced technologies in
            various industries? Vodworks is constantly searching for
            fast-learning talents craving progress and bringing quality to their
            work. Every team member is eager to explore possibilities technology
            has to offer
          </p>

          <p class="mt-4 leading-32">
            If this sounds like you, you might be just right for our team! Join
            us as we create progressive technological solutions around the
            world.
          </p>
        </div>
      </div>
    </div>
    <!-- end hero -->

    <!-- benefits -->
    <div class="pt-24">
      <!-- text -->
      <div class="text-center lg:px-64 px-11">
        <h1 class="text-41 lg:text-56 font-arial-black tracking-wider">
          Our Benefits
        </h1>
        <p class="mt-6 leading-32 text-x-gray-partner">
          Working at Vodworks is not just a job, but an experience. We believe
          in fostering an environment where our team members are able to have
          space to grow and be creative. Team members have access to benefits
          below so as a team, we can create amazing products.
        </p>
      </div>

      <!-- card list -->
      <div
        class="lg:mt-28 mt-12 grid lg:grid-cols-3 lg:gap-x-20 gap-x-14 gap-y-12 lg:px-32 px-11 pb-36"
      >
        <!-- card -->
        <div class="text-center">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-xl"
            style="
              background-image: url(~/assets/img/career/img_benefits_1.png');
            "
          ></div>
          <p class="font-bold text-xl mt-4">Awesome Culture</p>
          <p class="text-sm text-h-gray">
            Be a part of a fast-paced, progress-driven team that also knows how
            to have fun.
          </p>
        </div>

        <!-- card -->
        <div class="text-center">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-xl"
            style="
              background-image: url(~/assets/img/career/img_benefits_2.png');
            "
          ></div>
          <p class="font-bold text-xl mt-4">Autonomous Environment</p>
          <p class="text-sm text-h-gray">
            Thrive in a lively work environment that values collaboration and
            taking initiative
          </p>
        </div>

        <!-- card -->
        <div class="text-center">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-xl"
            style="
              background-image: url(~/assets/img/career/img_benefits_3.png');
            "
          ></div>
          <p class="font-bold text-xl mt-4">Emerging Technologies</p>
          <p class="text-sm text-h-gray">
            Join our team at the forefront of advanced technologies from AI to
            blockchain
          </p>
        </div>

        <!-- card -->
        <div class="text-center">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-xl"
            style="
              background-image: url(~/assets/img/career/img_benefits_4.png');
            "
          ></div>
          <p class="font-bold text-xl mt-4">Private Healthcare & Pensions</p>
          <p class="text-sm text-h-gray">
            We make sure you’re taken care of as a member of the team, no matter
            the situation.
          </p>
        </div>

        <!-- card -->
        <div class="text-center">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-xl"
            style="
              background-image: url(~/assets/img/career/img_benefits_5.png');
            "
          ></div>
          <p class="font-bold text-xl mt-4">Work From Home</p>
          <p class="text-sm text-h-gray">
            Enjoy the freedom and comfort of working with our international team
            from home.
          </p>
        </div>

        <!-- card -->
        <div class="text-center">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-xl"
            style="
              background-image: url(~/assets/img/career/img_benefits_6.png');
            "
          ></div>
          <p class="font-bold text-xl mt-4">Travel Opportunities</p>
          <p class="text-sm text-h-gray">
            We offer exciting travel opportunities to clients and to our global
            offices
          </p>
        </div>
      </div>
    </div>
    <!-- end benefits -->

    <!-- values -->
    <div class="bg-b-black pb-20">
      <!-- text -->
      <div class="text-center py-20 lg:px-64 px-6 text-white">
        <h1 class="text-41 lg:text-56 font-arial-black tracking-wider">
          Our Values
        </h1>
        <p class="leading-32">
          Working at Vodworks is not just a job, but an experience. We believe
          in fostering an environment where our team members are able to have
          space to grow and be creative. Team members have access to benefits
          below so as a team, we can create amazing products.
        </p>
      </div>

      <!-- card list -->
      <div class="grid lg:grid-cols-4 lg:px-6 px-11 gap-8">
        <!-- card -->
        <div class="bg-b-dark-gray p-4 rounded-2xl">
          <!-- image -->
          <div
            class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/career/img_values_1.png')"
          ></div>

          <!-- text -->
          <p class="text-white text-center font-bold text-2xl mt-7">
            Passionate about technology
          </p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray p-4 rounded-2xl">
          <!-- image -->
          <div
            class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/career/img_values_2.png')"
          ></div>

          <!-- text -->
          <p class="text-white text-center font-bold text-2xl mt-7">
            Honesty and quality- focused mindset
          </p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray p-4 rounded-2xl">
          <!-- image -->
          <div
            class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/career/img_values_3.png')"
          ></div>

          <!-- text -->
          <p class="text-white text-center font-bold text-2xl mt-7">
            Constant progress and improvmenet
          </p>
        </div>

        <!-- card -->
        <div class="bg-b-dark-gray p-4 rounded-2xl">
          <!-- image -->
          <div
            class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-2xl rounded-tl-2xl"
            :style="resolveBackground('/img/career/img_values_4.png')"
          ></div>

          <!-- text -->
          <p class="text-white text-center font-bold text-2xl mt-7">
            Not taking ourselves too seriously
          </p>
        </div>
      </div>
    </div>
    <!-- end values -->

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
          src="~/assets/img/bg_home_6.3.png"
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
            <img src="~/assets/img/home/our_team_1.png" alt="" />
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
