<template>
  <div>

    <PageHeroWithAnimatedTitle :data="{
      title: 'Social ',
      animated_word: 'Projects',
      description: 'We strive to create a world where technology breaks down barriers and improves the lives of people while protecting our planet.'
    }" />


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


    <!----------

       <div class="sp-container">
         <section
           v-for="(project, i) in socialProjects" :key="i"
           class="lg:py-32 py-20 items-center"
         >
           <div class="mx-auto max-w-4/5 container">
             <div class="grid md:grid-cols-2 gap-8 ">
               <div>
                 <div class="w-full flex items-center">
                   <img
                     :src="project.project_icon.filename"
                     :alt="project.project_icon.alt"
                     class="w-16 object-contain"
                   />
                   <div class="px-4">
                     <h6 class="lg:text-lg font-bold color-grey">{{ project.project_city }}</h6>
                     <h4 class="font-arial-black text-2xl md:text-3xl lg:text-4xl">{{ project.project_name }}</h4>
                   </div>
                 </div>
                 <p class="my-8 text-lg text-h-gray">{{ project.description }}</p>

                 <div
                      class="social-content text-lg text-h-gray"
                      v-html="$md.render(project.features)"
                 ></div>

                 <div class="mt-8">
                   <img
                     :src="project.technologies.filename"
                     :alt="project.technologies.alt"
                   />
                 </div>
               </div>
               <div class="mt-8 md:my-auto">
                 <img
                   :src="project.thumbnail.filename"
                   :alt="project.thumbnail.alt"
                   class="w-full mx-auto hvr-right "
                 />
               </div>
             </div>
           </div>
         </section>
       </div>

       ---->

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
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

  computed: {
    getSocialProjectsData() {
      return this.allSocialProjects
    },
  },

}
</script>



