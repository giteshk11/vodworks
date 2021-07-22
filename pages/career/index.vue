<template>
  <div>
    <div class="text-white bg-section">
      <!-- 1 -->
      <div
        class="grid lg:grid-cols-2 px-2 lg:px-0 relative overflow-hidden lg:overflow-visible"
      >
        <!-- text -->
        <div
          class="lg:pl-32 lg:pr-20 px-5 lg:px-0 lg:py-36 pt-32 lg:pb-16 pb-12 relative"
        >
          <!-- background pattern -->

          <div class="relative">
            <h1
              class="title lg:text-56 text-41 font-arial-black tracking-wider"
            >
              Careers at
              <span class="block lg:-mt-8 -mt-6 title font-arial-black">
                Vodworks
              </span>
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
              href="https://vodworks.breezy.hr/"
              class="py-5 px-6 bg-white text-h-red rounded-lg font-bold uppercase"
            >
              BROWSE JOB
            </a>
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
      <div class="grid lg:grid-cols-2 px-6 lg:px-0 overflow-hidden">
        <!-- image -->
        <div class="justify-self-center py-14 relative">
          <!-- image -->
          <img
            src="~/assets/img/career/img_hero_2.png"
            class="rounded-3xl mx-auto relative z-10"
          />
        </div>

        <!-- text -->
        <div class="my-auto lg:pr-44 pb-20 lg:pb-0">
          <h1 class="text-41 font-arial-black tracking-wider title">
            Is this you?
          </h1>
          <p class="mt-4 leading-32 text-opacity-80">
            Are you driven by a passion for applying advanced technologies in
            various industries? Vodworks is constantly searching for
            fast-learning talents craving progress and bringing quality to their
            work. Every team member is eager to explore possibilities technology
            has to offer
          </p>

          <p class="mt-4 leading-32 text-opacity-80">
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
        <h1 class="text-41 lg:text-56 font-arial-black tracking-wider title">
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
            :style="resolveBackground(`/img/career/img_benefits_1.png`)"
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
            :style="resolveBackground(`/img/career/img_benefits_2.png`)"
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
            :style="resolveBackground(`/img/career/img_benefits_3.png`)"
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
            :style="resolveBackground(`/img/career/img_benefits_4.png`)"
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
            :style="resolveBackground(`/img/career/img_benefits_5.png`)"
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
            :style="resolveBackground(`/img/career/img_benefits_6.png`)"
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
        <h1 class="text-41 lg:text-56 font-arial-black tracking-wider title">
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
    <div class="lg:py-28 py-6 relative bg-section lg:px-10">
      <!-- card -->
      <div
        class="bg-white rounded-xl max-w-4/5 2xl:max-w-9/10 mx-auto flex flex-col-reverse items-center xl:flex xl:flex-row xl:justify-center xl:items-center px-4 py-6 2xl:px-36 xl:space-x-reverse xl:space-x-10"
      >
        <!-- team -->
        <div
          class="max-w-7/10 max-h-7/10 xl:max-w-3/10 2xl:max-h-3/10 2xl:max-w-3/10"
        >
          <img
            src="~/assets/img/home/our_team_1.png"
            alt=""
            class="object-cover w-full h-full"
          />
        </div>
        <!-- text -->
        <div
          class="h-full lg:max-w-4/5 space-y-8 text-center xl:text-left xl:pl-32 xl:max-w-1/2"
        >
          <h1 class="lg:text-56 text-41 font-arial-black title">
            Join Our Team
          </h1>
          <p class="text-lg text-h-gray -mt-4">
            Where impact meet opportunity. Our engineering team builds bespoke
            solutions for global brands. Fully remote, always communicating, and
            fully transparent, see why our employees love working for Vodworks.
          </p>
          <a
            href="https://vodworks.breezy.hr/"
            class="py-5 px-6 inline-block button-linear-red rounded-lg text-white font-bold uppercase"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  },
}
</script>
