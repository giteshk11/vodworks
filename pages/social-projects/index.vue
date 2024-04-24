<template>
  <div>

    <!--------------------------------- HERO -------------------------------------------->
    <PageHeroWithAnimatedTitle :data="{
      title: 'Social ',
      animated_word: 'Projects',
      description: 'We strive to create a world where technology breaks down barriers and improves the lives of people while protecting our planet.'
    }" />
    <!----------------------------------------------------------------------------------->


    <!-------------------------- Social Projects Listing -------------------------------->
    <section v-if="getSocialProjectsData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="mx-auto md:max-w-4/5">

          <template v-for="(project, i) in getSocialProjectsData.stories">
            <div :key="i" class="default-card card-utilities hvr-effect text-left mb-4 lg:mb-10">
              <div class="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 items-center lg:gap-16">

                <div>
                  <div class="w-full flex items-center">
                    <img :src="project.content.project_icon.filename" :alt="project.content.project_icon.alt" />
                    <div class="px-4">
                      <h6 class="color-intense-grey">{{ project.content.project_city }}</h6>
                      <h4 class="">{{ project.content.project_name }}</h4>
                    </div>
                  </div>
                  <p class="my-4">{{ project.content.description }}</p>

                  <!-- eslint-disable vue/no-v-html -->
                  <div class="text-card sproject-list" v-html="$md.render(project.content.features)"></div>

                  <div v-if="project.content.technologies.filename" class="mt-8">
                    <img :src="project.content.technologies.filename" :alt="project.content.technologies.alt" />
                  </div>

                  <a :href="project.content.project_url" target="_blank" class="btn-text mt-8 inline-block">
                    Read More
                  </a>

                </div>

                <div class="hidden lg:inline-block zoom-in overflow-hidden">
                  <img class="w-full" :src="project.content.thumbnail.filename" :alt="project.content.thumbnail.alt" />
                </div>

              </div>
            </div>
          </template>

        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title:'Discuss Your Social Project With Us!',
      isDarkSectionAtTop: false
    }" />
    <!------------------------------------------------------------------------------------------>

  </div>
</template>


<script>



export default {


  async asyncData(context) {

    const [socialProjectsRes] = await Promise.all([

      context.app.$storyapi.get(`cdn/stories/`, {
        version: 'published',
        starts_with: 'social-projects/',
        resolve_relations: 'social-projects-container.social_projects'
      }),
    ])
    return {
      allSocialProjects: socialProjectsRes.data,
    }

  },

  head() {
    return {
      title: 'Social Projects in Software development | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Explore Vodworks diverse range of social projects, dedicated to creating a positive impact and fostering meaningful change in communities worldwide.",
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Social Projects in Software development | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Explore Vodworks social projects.",
        },
      ],
    }
  },


  computed: {
    getSocialProjectsData() {
      return this.allSocialProjects
    },
  },

}
</script>



