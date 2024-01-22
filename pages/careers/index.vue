<template>
  <div>

    <!------------------------------ Hero section ---------------------------->
    <section class="bgColor-tertiary-black color-white">

      <div class="hero">
        <div class="grid items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-0 md:gap-8">
          <div class="py-8 lg:py-4 order-2 lg:order-1 content">
            <h1 class="capitalize"> Careers at Vodworks <span class="inline-block lg:block"></span>
            </h1>
            <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big mr-4">
              Vodworks is invested in creating the future of technology in the most ethical and ecological way. Our team
              is passionate about each project, and is committed to delivering high-quality service and innovative
              solutions to our customers.
            </p>
            <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big mr-4">We invite you to join us and be more than just an
              employee, but
              a partner in achieving our goals.</p>

            <div v-scroll-to="'#OurOpenings'" class="btn-primary btn-lg inline-block cursor-pointer">
              Browse Jobs
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <img class="w-full" src="~/assets/img/IMG_9597.jpg" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------->


    <!------------------------------------  Our Benefits ------------------------------>
    <ThreeCardsSections :data="{
      sectionData: our_benefits,
      backgroundColor: 'bgColor-normal-grey',
    }" />
    <!-------------------------------------------------------------------------------------->



    <!-------------------------------------- About Vodworks ---------------------------------------->
    <AboutVodworks :data="{
      isDarkMode: true
    }" />
    <!---------------------------------------------------------------------------------------------->

    <!------------------------------- Our Values -------------------------------------------------->
    <section class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="text-center mx-auto w-full lg:w-3/5">
          <h2 v-in-viewport>{{ our_values.title }} <span class="bgFill"><span class="textClip">{{
            our_values.animated_word }}</span></span></h2>
          <p class="mt-4 lg:mt-8 text-big">{{ our_values.description }}</p>
        </div>
        <div class="grid mx-auto gap-4 mt-8 lg:mt-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <template v-for="(card, i) in our_values.list">
            <div :key="i" class="default-card card-utilities hvr-effect">
              <img class="hvr-top" :src="`${require('~/assets/img/icons/' + card.icon)}`" :alt="card.alt" />
              <h4 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h4>

            </div>
          </template>
        </div>
      </div>
    </section>
    <!---------------------------------------------------------------------------------------------->


    <!-----------------------------Join Our Team---------------------------------->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>{{ join_our_team.title }}</h2>
        </div>
        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16">
          <div>
            <p class="mb-4 lg:mb-6 text-big">
              {{ join_our_team.description1 }}
            </p>
            <p class="mb-4 lg:mb-6 text-big">
              {{ join_our_team.description2 }}
            </p>
          </div>
          <div>
            <div class="zoom-in overflow-hidden">
              <img class="hvr-top" :src="`${require('~/assets/img/' + join_our_team.img)}`" :alt="join_our_team.alt" />
            </div>
          </div>
        </div>
        <div v-scroll-to="'#OurOpenings'" class="btn-primary btn-lg inline-block cursor-pointer mt-4 lg:mt-8">
          Browse Jobs
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------->


    <!------------------------------- Our Openings----------------------------->
    <section id="OurOpenings" class="lg:py-32 py-14 ">
      <div class="mx-auto container">
        <div class="text-center mx-auto w-full lg:w-3/5">
          <h2 v-in-viewport>Our <span class="bgFill"><span class="textClip">Openings</span></span></h2>
        </div>
        <div class="mt-8 lg:mt-16">
          <div id='bzOpeningsContainer'></div>
          <script src='https://vodworks.breezy.hr/embed/js?inline=true'></script>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------->


    <!------------------------------- Get in Touch with us----------------------------->
    <GetInTouchWithUs :data="{
      title:'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!--------------------------------------------------------------------------------->

  </div>
</template>




<script>

export default {
  data() {
    return {

      our_benefits: {
        title: "Our ",
        animated_word: "Benefits",
        description: "",

        list: [
          {
            icon: "careers/brain-circuit.svg",
            alt: "icon",
            title: "Emerging Technologies",
            description: "Join our team at the forefront of advanced technologies from AI and ML to Web3.",
          },
          {
            icon: "careers/rotation.svg",
            alt: "icon",
            title: "Autonomous Environment",
            description: "Thrive in a lively work environment that values collaboration and taking initiative",
          },
          {
            icon: "careers/users.svg",
            alt: "icon",
            title: "Awesome Culture",
            description: "Be a part of a fast-paced, progress-driven team that also knows how to have fun and enjoy work to the fullest.",
          },
          {
            icon: "careers/heart-handshake.svg",
            alt: "icon",
            title: "Private Healthcare & Pensions",
            description: "We make sure you’re taken care of as a member of the team, no matter the situation.",
          },
          {
            icon: "careers/building-2.svg",
            alt: "icon",
            title: "Work From Home",
            description: "Enjoy the freedom and comfort of working with our international team from home.",
          },
          {
            icon: "careers/globe-2.svg",
            alt: "icon",
            title: "Travel Opportunities",
            description: "We offer exciting travel opportunities to clients and to our global offices",
          }
        ]
      },

      join_our_team: {
        title: "Join Our Team",
        description1: "Are you driven by a passion for applying advanced technologies in various industries? Vodworks is constantly searching for fast-learning talents craving progress and bringing quality to their work. Every team member is eager to explore possibilities technology has to offer If this sounds like you, you might be just right for our team! Join us as we create progressive technological solutions around the world.",
        description2: "Where impact meet opportunity. Our engineering team builds bespoke solutions for global brands. Fully remote, always communicating, and fully transparent, see why our employees love working for Vodworks.",

        img: "meet-our-vodworks-team-pic.jpg",
        alt: "Team Image",
      },

      our_values: {
        title: "Our",
        animated_word: "Values",
        description: "Working at Vodworks is not just a job, but an experience. We believe in fostering an environment where our team members are able to have space to grow and be creative. Team members have access to benefits below so as a team, we can create amazing products.",

        list: [
          {
            icon: "careers/brain-cog.svg",
            alt: "icon",
            title: "Passion for new technology",
            description: "",
          },
          {
            icon: "careers/view.svg",
            alt: "icon",
            title: "Honesty and quality-focused mindset",
            description: "",
          },
          {
            icon: "careers/scatter-chart.svg",
            alt: "icon",
            title: "Constant progress and improvement",
            description: "",
          },
          {
            icon: "careers/users.svg",
            alt: "icon",
            title: "Diversity and Inclusion",
            description: "",
          }
        ]
      },

    }
  },


  head() {
    return {
      title: 'Careers in Software Development | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Join Vodworks team and work on projects with advanced technologies from AI and ML to Web3. ",
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Careers in Software Development | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Join Vodworks team and work on projects with advanced technologies from AI and ML to Web3.",
        },
      ],

    }
  },

}
</script>


