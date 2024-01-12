<template>
  <div>

    <PageHeroWithAnimatedTitle :data="{
      title: 'Social ',
      animated_word: 'Projects',
      description: 'We strive to create a world where technology breaks down barriers and improves the lives of people while protecting our planet.'
    }" />


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
          content: "Explore Vodworks social projects.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ''
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



