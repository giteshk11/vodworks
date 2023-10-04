<template>
  <div class="mx-auto">

    <!--Hero section start-->
    <section class="bgColor-normal-grey">

      <div class="hero">
        <div class="grid items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-0 md:gap-8">
          <div class="py-8 lg:py-4 order-2 lg:order-1 content">
            <h1 class="capitalize"> Vodworks - <span class="inline-block lg:block"> Solving your technology puzzles</span>
            </h1>

            <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big">
              We are a global provider of end-to-end software development services. We work closely with our clients to
              create innovative custom software products and build successful engineering teams.
            </p>

            <NuxtLink to="/contact" class="btn-primary btn-lg inline-block">
              Discuss your project
            </NuxtLink>

          </div>

          <div class="order-1 lg:order-2">
            <img class="w-full" src="~/assets/img/hero-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!--Hero section end-->

    <section class="lg:py-8 py-6 bgColor-tertiary-black">

      <div class="stats-wrapper mx-auto max-w-4/5 container color-white">

        <div class="stats">

          <div class="stats-card relative">
            <img src="~assets/img/icons/laptop.svg" alt="" />
            <div>
              <h3>150+</h3>
              <p class="color-white text-regular">Expert Developers</p>
            </div>
          </div>

          <img class="v-line-border" src="~assets/img/v-line.svg" alt="" />

          <div class="stats-card relative">
            <img src="~assets/img/icons/flag.svg" alt="" />
            <div>
              <h3>5+</h3>
              <p class="color-white text-regular">Global Development Centers</p>
            </div>
          </div>

          <img class="v-line-border" src="~assets/img/v-line.svg" alt="" />

          <div class="stats-card relative">
            <img src="~assets/img/icons/box.svg" alt="" />
            <div>
              <h3>300+</h3>
              <p class="color-white text-regular">Projects Delivered</p>
            </div>
          </div>

          <img class="v-line-border" src="~assets/img/v-line.svg" alt="" />

          <div class="stats-card relative">
            <img src="~assets/img/icons/location-pin.svg" alt="" />
            <div>
              <h3>200+</h3>
              <p class="color-white text-regular">Customers in more than 20 countriess</p>
            </div>
          </div>

        </div>

      </div>
    </section>



    <!--Services start-->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2>End-to-end Software Development <span class="styled-text">Services</span></h2>
          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-1/2">
            From exploration and consultation to development of scalable software solutions, we provide comprehensive
            technical services that align with your unique business needs.
          </p>
        </div>

        <!-- card list -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-4 mt-8 lg:mt-16">
          <ServiceCard :data="services" />
        </div>


      </div>
    </section>
    <!--Services end-->



    <!--Empower your business today-->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container color-white">


        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-4 text-center md:text-left">

          <div class="">
            <h2 class="heading-1">Empower your business today</h2>
            <NuxtLink to="/contact" class="btn-primary btn-lg mt-16 hidden lg:inline-block invisible md:visible">
              Get in touch with us
            </NuxtLink>
          </div>

          <div class="empowerment">
            <div class="my-8">
              <p class="color-white"><span class="styled-text font-semibold">Stay competitive</span> by leveraging our
                specialised knowledge </p>
            </div>
            <div class="my-8">
              <p class="color-white"><span class="styled-text font-semibold">Reduce development time and cost</span> by
                avoiding the hiring overhead </p>
            </div>
            <div class="my-8">
              <p class="color-white"><span class="styled-text font-semibold">Build scalable, adaptable software</span>
                that meets your evolving business needs </p>
            </div>

            <NuxtLink to="/contact" class="btn-primary btn-lg mt-8 lg:mt-16 inline-block lg:hidden visible lg:invisible">
              Get in touch with us
            </NuxtLink>


          </div>

        </div>
      </div>
    </section>



    <!-- Custom Software for Your Business-->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 class="">Custom Software for Your <span class="styled-text">Business</span></h2>
          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-3/5">
            We work with diverse clients, spanning from startups to large enterprises in various industries. Our adaptable
            team excels in tailoring solutions to unique working styles and needs, driving innovation with new
            technologies.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4 mt-8 lg:mt-16">

          <div class="default-card card-utilities hvr-effect">
            <img src="~assets/img/icons/Rocket.svg" alt="" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">For Startups</h3>
            <p class="text-card">We take your idea from prototype to full-scale launch, offering technical expertise along
              the way to minimize risk and boost success. When we recognise exceptional potential, we also offer
              investment and incubation for new market prospects.</p>
            <ul class="mt-8">
              <li> - MVP and rapid PoCs</li>
              <li> - Tech stack advice</li>
              <li> - Team augmentation</li>
              <li> - Investment and incubation</li>
            </ul>

            <NuxtLink to="/contact" class="btn-text mt-8 inline-block">
              Read More
            </NuxtLink>
          </div>

          <div class="default-card card-utilities hvr-effect">
            <img src="~assets/img/icons/Color-Palette.svg" alt="" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">For Enterprise</h3>
            <p class="text-card">We take your idea from prototype to full-scale launch, offering technical expertise along
              the way to minimize risk and boost success. When we recognise exceptional potential, we also offer
              investment and incubation for new market prospects.</p>
            <ul class="mt-8">
              <li> - MVP and rapid PoCs</li>
              <li> - Tech stack advice</li>
              <li> - Team augmentation</li>
              <li> - Investment and incubation</li>
            </ul>
            <NuxtLink to="/contact" class="btn-text mt-8 inline-block">
              Read More
            </NuxtLink>
          </div>

          <div class="default-card card-utilities hvr-effect">
            <img src="~assets/img/icons/Share.svg" alt="" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">For Web3</h3>
            <p class="text-card">We take your idea from prototype to full-scale launch, offering technical expertise along
              the way to minimize risk and boost success. When we recognise exceptional potential, we also offer
              investment and incubation for new market prospects.</p>
            <ul class="mt-8">
              <li> - MVP and rapid PoCs</li>
              <li> - Tech stack advice</li>
              <li> - Team augmentation</li>
              <li> - Investment and incubation</li>
            </ul>

            <NuxtLink to="/contact" class="btn-text mt-8 inline-block">
              Read More
            </NuxtLink>
          </div>

        </div>

      </div>
    </section>


    <!--Our Success Stories-->
    <section v-if="getCaseStudiesData" class="lg:py-32 py-14 bgColor-tertiary-black">

      <div class="mx-auto max-w-4/5 container color-white">
        <div class="text-center">
          <h2>Our Success Stories</h2>
        </div>



        <div class="mx-auto md:max-w-4/5">
          <div class="mt-8 lg:mt-16">

            <VueSlickCarousel class="success-stories-slider" v-bind="succes_stories_configs">

              <div v-for="(card, i) in getCaseStudiesData.case_studies" :key="i" class="case-study-card">

                <div class="cs-thumbnail-wrapper">
                  <img :src="card.content.thumbnail.filename" :alt="card.content.thumbnail.alt" />
                </div>
                <div class="cs-content p-4 text-center">
                  <h4>{{ card.content.title }}</h4>
                  <p class="color-white">{{ card.content.description }}</p>
                </div>

              </div>

            </VueSlickCarousel>

          </div>

        </div>

        <div class="text-center">
          <NuxtLink to="/contact" class="btn-primary btn-lg mt-16 inline-block ">
            show all cases
          </NuxtLink>
        </div>

      </div>

    </section>



    <!-- What Our Clients Say -->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 class="">What Our Clients <span class="styled-text">Say</span></h2>
        </div>
      </div>

      <div class="mt-8 lg:mt-16">
        <VueSlickCarousel class="center-slider" v-bind="testimonials_configs">

          <div class="card-utilities hvr-effect testimonial-card px-6 lg:px-10 py-10 lg:py-10">

            <div class="flex gap-4 flex-wrap md:flex-nowrap">

              <div class="review-card lg:col-span-2 flex gap-4 ">

                <div class="client-avatar-wrapper">
                  <img src="~assets/img/client.jpg" alt="" />
                </div>

                <!-- show on small devices -->
                <p class="text-regular font-medium color-primary-red inline-block md:hidden visible md:invisible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span>
                </p>

              </div>

              <div class="lg:col-span-10 mt-4 md:mt-0">
                <p class="text-regular font-medium color-primary-black">The night is dark and full of terrors. What is
                  dead may never die. And now his watch is ended. All men must die.</p>

                <!-- Hide on small devices -->
                <p
                  class="text-regular font-medium md:mt-8 color-primary-red  hidden md:inline-block invisible md:visible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span></p>
              </div>

            </div>
          </div>

          <div class="card-utilities hvr-effect testimonial-card px-6 lg:px-10 py-10 lg:py-10">

            <div class="flex gap-4 flex-wrap md:flex-nowrap">

              <div class="review-card lg:col-span-2 flex gap-4 ">

                <div class="client-avatar-wrapper">
                  <img src="~assets/img/client.jpg" alt="" />
                </div>

                <!-- show on small devices -->
                <p class="text-regular font-medium color-primary-red inline-block md:hidden visible md:invisible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span>
                </p>

              </div>

              <div class="lg:col-span-10 mt-4 md:mt-0">
                <p class="text-regular font-medium color-primary-black">The night is dark and full of terrors. What is
                  dead may never die. And now his watch is ended. All men must die.</p>

                <!-- Hide on small devices -->
                <p
                  class="text-regular font-medium md:mt-8 color-primary-red  hidden md:inline-block invisible md:visible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span></p>
              </div>

            </div>
          </div>

          <div class="card-utilities hvr-effect testimonial-card px-6 lg:px-10 py-10 lg:py-10">

            <div class="flex gap-4 flex-wrap md:flex-nowrap">

              <div class="review-card lg:col-span-2 flex gap-4 ">

                <div class="client-avatar-wrapper">
                  <img src="~assets/img/client.jpg" alt="" />
                </div>

                <!-- show on small devices -->
                <p class="text-regular font-medium color-primary-red inline-block md:hidden visible md:invisible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span>
                </p>

              </div>

              <div class="lg:col-span-10 mt-4 md:mt-0">
                <p class="text-regular font-medium color-primary-black">The night is dark and full of terrors. What is
                  dead may never die. And now his watch is ended. All men must die.</p>

                <!-- Hide on small devices -->
                <p
                  class="text-regular font-medium md:mt-8 color-primary-red  hidden md:inline-block invisible md:visible">
                  Matt Celuszak, <span class="color-dark-grey text-card block md:inline-block">CEO of Element Human</span></p>
              </div>

            </div>
          </div>



        </VueSlickCarousel>
      </div>

    </section>


    <!-- Why Choose Vodworks?-->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container color-white">

        <div class="text-center">
          <h2>Why Choose Vodworks?</h2>
        </div>


        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-8 mt-8 lg:mt-16">


          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">Optimize development cost</h3>
            <p class="color-white text-regular">We work closely with you through every stage of the development process,
              making sure we tackle risks and
              set your technology investments up for success</p>
          </div>

          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">Faster time-to-market</h3>
            <p class="color-white text-regular">We build rapid PoCs and MVPs to reduce time-to-market, and implement
              time-tested agile processes to ensure
              quick and successful delivery of full-scale software products</p>
          </div>

          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">Diverse technical expertise</h3>
            <p class="color-white text-regular">With more than 150 highly-skilled developers and a global network of
              experts, we guarantee the right
              technical talent for your business needs</p>
          </div>

          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">Flexible teams</h3>
            <p class="color-white text-regular">We offer an agile and flexible working approach, supporting you to quickly
              scale your projects up or down
            </p>
          </div>

          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">End-to-end services</h3>
            <p class="color-white text-regular">We support clients from ideation to launch, offering consistent and
              integrated technical services
              throughout the development cycle</p>
          </div>

          <div class="my-4 lg:my-4 text-center md:text-left">
            <h3 class="styled-text mb-4 inline-block capitalize">Global presence</h3>
            <p class="color-white text-regular">We cater to diverse technical and budget requirements, and serve clients
              spanning various time zones</p>
          </div>

        </div>
      </div>
    </section>


    <!-- Meet Our Team -->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center">
          <h2 class="">Meet Our <span class="styled-text">Team</span></h2>
          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-3/5">
            Meet our dynamic leadership team, a group of tech industry veterans with extensive experience across
            industries and regions. Their combined expertise drives innovation and passion at the heart of our company.
          </p>
        </div>

        <!-- card list -->

        <div class="mx-auto max-w-7/10">

          <div class="mx-auto">
            <div class="mt-8 lg:mt-16">

              <VueSlickCarousel class="our-team-slider" v-bind="our_team_configs">

                <div class="card-utilities hvr-effect team-card">
                  <div class="team-avatar-wrapper">
                    <img src="~assets/img/team-1.jpg" alt="" />
                  </div>
                  <div class="flex items-center p-4 justify-between">
                    <div>
                      <p class="text-regular font-bold color-primary-black">Sakib Mirza</p>
                      <p class="color-secondary-black font-medium text-small">CEO</p>
                    </div>
                    <a target="_blank" href="#"><img src="~assets/img/icons/Linkedin-icon.svg" alt="" /></a>
                  </div>

                  <div class="team-content-overlay text-center">
                    <div class="p-4 v-center">
                      <span class="bgColor-primary-red"></span>
                      <div class="my-4">
                        <h4 class="font-bold color-primary-black">Sakib Mirza</h4>
                        <p class="color-secondary-black font-medium text-small">CEO</p>
                      </div>
                      <p class="text-card color-primary-black">Passionate about driving innovation and growth, Sakib
                        brings
                        over 15 years of expertise in Technology
                        Solutions. With a proven track record in shaping Product and Business strategies,he leads the
                        Vodworks
                        team of 150+ expert developers.</p>
                    </div>
                  </div>
                </div>

                <div class="card-utilities hvr-effect team-card">
                  <div class="team-avatar-wrapper">
                    <img src="~assets/img/team-1.jpg" alt="" />
                  </div>
                  <div class="flex items-center p-4 justify-between">
                    <div>
                      <p class="text-regular font-bold color-primary-black">Sakib Mirza</p>
                      <p class="color-secondary-black font-medium text-small">CEO</p>
                    </div>
                    <a target="_blank" href="#"><img src="~assets/img/icons/Linkedin-icon.svg" alt="" /></a>
                  </div>

                  <div class="team-content-overlay text-center">
                    <div class="p-4 v-center">
                      <span class="bgColor-primary-red"></span>
                      <div class="my-4">
                        <h4 class="font-bold color-primary-black">Sakib Mirza</h4>
                        <p class="color-secondary-black font-medium text-small">CEO</p>
                      </div>
                      <p class="text-card color-primary-black">Passionate about driving innovation and growth, Sakib
                        brings
                        over 15 years of expertise in Technology
                        Solutions. With a proven track record in shaping Product and Business strategies,he leads the
                        Vodworks
                        team of 150+ expert developers.</p>
                    </div>
                  </div>
                </div>

                <div class="card-utilities hvr-effect team-card">
                  <div class="team-avatar-wrapper">
                    <img src="~assets/img/team-1.jpg" alt="" />
                  </div>
                  <div class="flex items-center p-4 justify-between">
                    <div>
                      <p class="text-regular font-bold color-primary-black">Sakib Mirza</p>
                      <p class="color-secondary-black font-medium text-small">CEO</p>
                    </div>
                    <a target="_blank" href="#"><img src="~assets/img/icons/Linkedin-icon.svg" alt="" /></a>
                  </div>

                  <div class="team-content-overlay text-center">
                    <div class="p-4 v-center">
                      <span class="bgColor-primary-red"></span>
                      <div class="my-4">
                        <h4 class="font-bold color-primary-black">Sakib Mirza</h4>
                        <p class="color-secondary-black font-medium text-small">CEO</p>
                      </div>
                      <p class="text-card color-primary-black">Passionate about driving innovation and growth, Sakib
                        brings
                        over 15 years of expertise in Technology
                        Solutions. With a proven track record in shaping Product and Business strategies,he leads the
                        Vodworks
                        team of 150+ expert developers.</p>
                    </div>
                  </div>
                </div>


                <div class="card-utilities hvr-effect team-card">
                  <div class="team-avatar-wrapper">
                    <img src="~assets/img/team-1.jpg" alt="" />
                  </div>
                  <div class="flex items-center p-4 justify-between">
                    <div>
                      <p class="text-regular font-bold color-primary-black">Sakib Mirza</p>
                      <p class="color-secondary-black font-medium text-small">CEO</p>
                    </div>
                    <a target="_blank" href="#"><img src="~assets/img/icons/Linkedin-icon.svg" alt="" /></a>
                  </div>

                  <div class="team-content-overlay text-center">
                    <div class="p-4 v-center">
                      <span class="bgColor-primary-red"></span>
                      <div class="my-4">
                        <h4 class="font-bold color-primary-black">Sakib Mirza</h4>
                        <p class="color-secondary-black font-medium text-small">CEO</p>
                      </div>
                      <p class="text-card color-primary-black">Passionate about driving innovation and growth, Sakib
                        brings
                        over 15 years of expertise in Technology
                        Solutions. With a proven track record in shaping Product and Business strategies,he leads the
                        Vodworks
                        team of 150+ expert developers.</p>
                    </div>
                  </div>
                </div>

                <div class="card-utilities hvr-effect team-card">
                  <div class="team-avatar-wrapper">
                    <img src="~assets/img/team-1.jpg" alt="" />
                  </div>
                  <div class="flex items-center p-4 justify-between">
                    <div>
                      <p class="text-regular font-bold color-primary-black">Sakib Mirza</p>
                      <p class="color-secondary-black font-medium text-small">CEO</p>
                    </div>
                    <a target="_blank" href="#"><img src="~assets/img/icons/Linkedin-icon.svg" alt="" /></a>
                  </div>

                  <div class="team-content-overlay text-center">
                    <div class="p-4 v-center">
                      <span class="bgColor-primary-red"></span>
                      <div class="my-4">
                        <h4 class="font-bold color-primary-black">Sakib Mirza</h4>
                        <p class="color-secondary-black font-medium text-small">CEO</p>
                      </div>
                      <p class="text-card color-primary-black">Passionate about driving innovation and growth, Sakib
                        brings
                        over 15 years of expertise in Technology
                        Solutions. With a proven track record in shaping Product and Business strategies,he leads the
                        Vodworks
                        team of 150+ expert developers.</p>
                    </div>
                  </div>
                </div>

              </VueSlickCarousel>

            </div>

          </div>

          <div class="text-center">
            <NuxtLink to="/contact" class="btn-primary btn-lg mt-16 inline-block ">
              more about us
            </NuxtLink>
          </div>


        </div>


      </div>
    </section>

    <!--Webflow -->

    <!--<section class="lg:py-24 py-10 items-center bg-no-repeat bg-cover bg-center mx-auto"
      :style="resolveBackground('/img/bg_home_4.png')">
      <div v-if="getOpertareSeamlesslyData"
        class="grid md:grid-cols-2 items-center color-white mx-auto max-w-4/5 container">
        <div class="lg:w-5/6">

          <h4 class=" text-2xl lg:text-3xl">
            {{ getOpertareSeamlesslyData.title }}
          </h4>
          <p class="mt-4 lg:text-lg opacity-80">
            {{ getOpertareSeamlesslyData.description }}
          </p>
        </div>

        <div class="relative">
          <img :src="getOpertareSeamlesslyData.image_1x.filename"
            :srcset="`${getOpertareSeamlesslyData.image_1x.filename} 1x,${getOpertareSeamlesslyData.image_1x.filename} 2x`"
            :alt="getOpertareSeamlesslyData.image_1x.alt" class="mx-auto hvr-right" />
        </div>
      </div>

      <div v-if="getOutsourcedProductsData" class="grid md:grid-cols-2 items-center mx-auto max-w-4/5 gap-12 container">
 
        <div class="relative order-2 md:order-none">
          <img :src="getOutsourcedProductsData.image_1x.filename"
            :srcset="`${getOutsourcedProductsData.image_1x.filename} 1x,${getOutsourcedProductsData.image_2x.filename} 2x`"
            :alt="getOutsourcedProductsData.image_1x.alt" class="order-2 lg:order-none mx-auto hvr-left" />
        </div>


        <div class="color-white">
          <h4 class=" text-2xl lg:text-3xl mt-8 lg:mt-0">
            {{ getOutsourcedProductsData.title }}
          </h4>
          <p class="mt-4 lg:text-lg opacity-80">
            {{ getOutsourcedProductsData.description }}
          </p>
        </div>
      </div>
    </section> -->

    <!--End web flow -->

    <!-- Statistics start-->
    <!--  <section v-if="getStatisticsData" class="py-10 lg:py-20 bgColor-grey">
      <div class="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-4/5 container gap-8">
        <div class="lg:border-r">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl ">{{ getStatisticsData.card_1_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_1_title }}</p>
        </div>
        <div class="lg:border-r">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl ">{{ getStatisticsData.card_2_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_2_title }}</p>
        </div>
        <div class="lg:border-r">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl ">{{ getStatisticsData.card_3_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_3_title }}</p>
        </div>
        <div class="">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl ">{{ getStatisticsData.card_4_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_4_title }}</p>
        </div>
      </div>
    </section>-->
    <!-- Statistics end-->

    <!-- Expert developers start-->
    <!--
    <section id="home-expert" class="lg:py-24 py-10 grid grid-rows-1 lg:grid-cols-2 mx-auto container">

      <div class="bg-no-repeat bg-cover bg-center py-40 lg:py-72 relative order-2 lg:order-1">

        <div ref="rotateAnimation"
          class="absolute inset-0 w-3/4 right-0 left-0 bottom-0 top-0 bg-contain bg-center bg-no-repeat mx-auto">
          <div
            class="absolute transition duration-700 ease-linear mx-auto transform right-0 left-0 bottom-0 top-0 z-50 lg:h-72 h-24 w-24 lg:w-72 dev-card overflow-hidden filter drop-shadow-lg bg-white -translate-y-6 lg:-translate-y-20"
            style="top: 25%">
            <img src="~assets/img/home/developers_mobile.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0" alt="Developers Mobile" />
          </div>
          <div
            class="absolute lg:h-72 lg:w-72 h-24 w-24 right-0 mx-auto left-0 bottom-0 top-0 z-20 transform transition duration-700 ease-linear dev-card overflow-hidden filter drop-shadow-lg bg-white translate-x-12 translate-y-9 lg:translate-x-36 lg:translate-y-10"
            style="top: 25%">
            <img src="~assets/img/home/developers_backend.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0" alt="Developers Backend" />
          </div>
          <div
            class="absolute lg:h-72 lg:w-72 h-24 w-24 right-0 mx-auto left-0 bottom-0 top-0 z-10 transform transition duration-700 ease-linear dev-card overflow-hidden filter drop-shadow-lg bg-white -translate-x-12 lg:-translate-x-28 translate-y-12 lg:translate-y-24"
            style="top: 25%">
            <img src="~assets/img/home/developers_platform.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0" alt="Developers Platform" />
          </div>
        </div>
      </div>

     -->

    <!-- text: right -->

    <!--
    <div v-if="getExpertSlidesData"
      class="lg:ml-20 self-center order-1 lg:order-2 md:order-2 items-center text-center lg:text-left">

      <h2 class="color-black text-3xl md:text-4xl lg:text-5xl  lg:pr-24" style="width: 90%">
        {{ getExpertSlidesData[count] }}
      </h2>


      <NuxtLink to="/contact" class="mt-8 py-4 px-6 button-red rounded-md inline-block color-white font-bold uppercase">
        Discuss Your Project
      </NuxtLink>
    </div>
    </section>

  -->
    <!-- Expert developers end-->

    <!--
    <section v-if="getOurClientsData" class="lg:py-24 py-10 bgColor-grey">
      <div class="mx-auto max-w-4/5 text-center mb-0 lg:mb-8">
        <h2 class="color-black text-3xl md:text-4xl lg:text-5xl ">
          {{ getOurClientsData.title }}
        </h2>
      </div>

      <div class="h-48 flex justify-center items-center relative">
        <div ref="horzClientSlider" class="keen-slider w-full h-full">
          <div v-for="(item, index) in getOurClientsData.slides" :key="index"
            class="keen-slider__slide flex justify-center items-center">
            <div class="flex justify-center transition duration-1000 ease-in-out">
              <div :class="[
                relativeClientSlide === index ? 'opacity-100' : 'opacity-30',
                `w-64`,
              ]">
                <img :src="item.content.client_logo.filename" :alt="item.content.client_logo.alt"
                  class="object-contain" />
        
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-11/12 py-4 mx-auto lg:rounded-lg bg-no-repeat bg-cover bg-center color-white container mx-auto"
        :style="resolveBackground('/img/bg_home_5.png')">
        <div class="flex items-center md:items-baseline 2xl:max-w-9/10 mx-auto">
          <div ref="vertClientSlider" class="keen-slider h-486 md:h-80">
            <div v-for="(item, index) in getOurClientsData.slides" :key="index"
              class="w-full keen-slider__slide h-full flex items-center md:flex-none">
              <div
                class="flex flex-col-reverse md:flex-row justify-between w-full px-10 lg:px-20 md:h-full md:items-center align-middle">
                <div class="space-y-8 text-center md:text-left">
                  <p
                    class="transform translate-y-0 transition duration-1000 ease-out text-2xl font-bold max-w-full md:max-w-1/2 text-center md:text-left">
                    {{ item.content.name }}
                  </p>
                  <p
                    class="color-white font-arial text-sm md:text-base text-opacity-60 whitespace-normal text-justify md:text-left">
                    {{ item.content.overview }}
                  </p>
                </div>

                <div id="services-banner-logo"
                  class="self-center justify-self-center lg:w-auto overflow-hidden flex-shrink-0 inline-block">
                  <img :src="item.content.client_logo.filename" :class="[
                    relativeClientSlide === index
                      ? 'filter invert'
                      : 'filter-none',
                    'filter h-20 invert transform translate-y-0 transition duration-1000 ease-out object-contain',
                  ]" :alt="item.content.client_logo.alt" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  -->

    <GetInTouchWithUs />




  </div>
</template>

<script>
// import KeenSlider from 'keen-slider'
// import 'keen-slider/keen-slider.min.css'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import GetInTouchWithUs from '~/components/Sections/GetInTouchWithUs.vue'


import ServiceCard from '~/components/services/ServiceCard'


const loadData = function ({
  api,
  cacheVersion,
  errorCallback,
  version,
  path,
}) {
  return api
    .get(`cdn/stories${path}`, {
      version,
      resolve_links: 'story,url',
      resolve_relations: 'case-studies-container.case_studies, services-container.services,expert-section-container.slides,our-clients-container.slides,industries-served.industries',
      cv: cacheVersion,
    })
    .then((res) => {
      return res.data
    })
    .catch((res) => {
      if (!res.response) {
        errorCallback({
          statusCode: 404,
          message: 'Failed to receive content form api',
        })
      } else {
        errorCallback({
          statusCode: res.response.status,
          message: res.response.data,
        })
      }
    })
}
export default {
  components: {
    ServiceCard,
    VueSlickCarousel,
    GetInTouchWithUs
  },
  asyncData(context) {
    // Check if we are in the editing mode
    let editMode = true
    if (
      context.query._storyblok ||
      context.isDev ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('_storyblok_draft_mode'))
    ) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('_storyblok_draft_mode', '1')
        if (window.location === window.parent.location) {
          window.localStorage.removeItem('_storyblok_draft_mode')
        }
      }
      editMode = true
    }
    const version = editMode ? 'draft' : 'published'
    const path = context.route.path === '/' ? '/home' : context.route.path
    // Load the JSON from the API
    return loadData({
      version,
      api: context.app.$storyapi,
      errorCallback: context.error,
      path,
    })
  },
  data() {
    return {
      // count: 0,
      // vertClientSlider: {},
      // horzClientSlider: {},
      // relativeClientSlide: 0,
      story: { content: {} },

      succes_stories_configs: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        dots: false,
        speed: 500,
        autoplay: true,
        infinite: true,


        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },

        ],


      },

      our_team_configs: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        dots: false,
        speed: 500,
        autoplay: true,
        infinite: true,


        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },

          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },

        ],


      },

      testimonials_configs: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerPadding: '24%',
        speed: 1000,
        infinite: true,
        autoplay: false,


        responsive: [

          {
            breakpoint: 1024,
            settings: {
              centerPadding: '12%',
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerPadding: '0%',
            },
          },
        ],


      },

      services: [
        {
          icon: "consulting.svg",
          alt: "icon",
          title: "Consulting",
          description: "Drawing on the expertise of our software development specialists, our consulting services blend strategic guidance with strong technical knowledge, enabling you to mitigate risks and optimise returns on your technology investments.",
          ctaText: "Read More",
          ctaURL: "",
        },
        {
          icon: "engineering.svg",
          alt: "icon",
          title: "Engineering",
          description: "Whether you’re initiating a new software project or seeking assistance with an existing one, our global team of initiative-driven developers has the proven track record and skill to build tailored software to your business requirements.",
          ctaText: "Read More",
          ctaURL: "",
        },
        {
          icon: "data.svg",
          alt: "icon",
          title: "Data",
          description: "We empower your business through data-driven insights, offering BI, reporting, data science, and AI solutions. Capture and transform your data for impactful business outcomes.",
          ctaText: "Read More",
          ctaURL: "",
        },
        {
          icon: "teams.svg",
          alt: "icon",
          title: "Teams",
          description: "Drawing on our experience in building efficient remote tech teams, we seamlessly integrate talent into your organisation, aligning with your business principles and enhancing project success.",
          ctaText: "Read More",
          ctaURL: "",
        }
      ],

      // caseStudies_Cards: [
      //   {
      //     thumbnail: "mockup.jpg",
      //     alt: "CS THumbnail",
      //     title: "Canal+",
      //     description: "Leading satellite digital television service operating in Vietnam with approximately 1 million subscribers. Over-The-Top (OTT) Solution",
      //     ctaURL: "",
      //   },
      //   {
      //     thumbnail: "mockup.jpg",
      //     alt: "CS THumbnail",

      //     title: "EA Sports",
      //     description: "Multi-user namagement platform Centralised Resource Actuals and Forecasting Tool (CRAFT).",
      //     ctaURL: "",
      //   },
      //   {
      //     thumbnail: "mockup.jpg",
      //     alt: "CS THumbnail",
      //     title: "Canal+",
      //     description: "Leading satellite digital television service operating in Vietnam with approximately 1 million subscribers. Over-The-Top (OTT) Solution",
      //     ctaURL: "",
      //   }
      // ]

    }
  },

  head() {
    return {
      title: 'Software Development Company | Vodworks',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development, it company, software development company, software development companies, development company, software development service, software development services, software developer company, software development firm, product development services, software development services company, database management company'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Software Development Company | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more',
        },

      ],
    }
  },
  computed: {
    getCaseStudiesData() {
      return this.story.content.body[0]
    },


  },
  mounted() {

    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    });




  },

  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },




    gotoService(slug) {
      this.$router.push({
        path: '/services/' + slug,
      })
    },

    // setLongInterval() {
    //   this.interval = setInterval(() => {
    //     if (!this.pause) {
    //       this.horzClientSlider.next()
    //       this.vertClientSlider.next()
    //     }
    //   }, 5000)
    // },
  },
}
</script>

<style scoped>
.s-card {
  border: 2px solid black;
  @apply rounded-xl;
}

.s-card-active {
  border: 1px solid white;
  @apply bg-opacity-30 bg-gradient-to-t via-transparent from-black rounded-xl;
}

.center-arrow {
  top: 50%;
}

@screen md {
  .center-arrow {
    top: 40%;
  }
}
</style>