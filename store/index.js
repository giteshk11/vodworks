/* eslint-disable no-undef */

export const strict = false
export const state = () => ({

  sliders_configurations: {

    success_stories: {
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: false,
      arrows: true,
      dots: false,
      speed: 500,
      autoplay: true,
      mobileFirst: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            dots: true,
            arrows: false,
          },
        },

      ],
    },

    our_team: {
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      arrows: true,
      dots: false,
      speed: 1000,
      autoplay: true,
      mobileFirst: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            mobileFirst: true,
            dots: true,
            arrows: false,
          },
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            dots: true,
            arrows: false,
          },
        },

      ],
    },

    testimonials: {
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      centerPadding: '28%',
      speed: 1000,
      infinite: true,
      autoplay: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '12%',
            mobileFirst: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            centerPadding: '0%',
            mobileFirst: true,
          },
        },
      ],
    },

  },

  CurrentPageData: {},
  AllTestimonials: [],
  AllTeamMembers: [],
  AllCases: []

})

// can be trigger and commit
// can not trigger async code here
// called using 'commit'
export const mutations = {
  SetPageData(state, data) {
    state.CurrentPageData = data
  },
  SetAllTestimonials(state, data) {
    state.AllTestimonials = data.stories
  },
  SetAllTeam(state, data) {
    state.AllTeamMembers = data.stories
  },
  SetAllCases(state, data) {
    state.AllCases = data.stories
  }
}

// can not change data in state
// can be triggered async code here
// called using 'dispatch'
export const actions = {

  // ======================================================================
  loadPagedata({ commit }, pageULR) {
    this.$storyapi.get(`cdn/stories/${pageULR}`, {
      version: 'published',
      resolve_relations: 'services-container.services, testimonial-container.testimonials_list, service_teams_details_container.service_teams_details'
    }).then((res) => {
      /* eslint-disable no-console */
      console.log('path is:',pageULR)
      commit('SetPageData', res.data);
    })
  },

  // ======================================================================
  loadAllTestimonials({ commit }) {
    this.$storyapi.get('cdn/stories/', {
      version: 'published',
      starts_with: 'testimonials/',
      resolve_relations: 'testimonial-container.testimonials_list',
    }).then((res) => {
      commit('SetAllTestimonials', res.data);
    })
  },

  // ======================================================================
  loadAllTeam({ commit }) {
    this.$storyapi.get(`cdn/stories/`, {
      version: 'published',
      starts_with: 'teams/',
      resolve_relations: 'teams-container.teams',
    }).then((res) => {
      commit('SetAllTeam', res.data);
    })
  },
  // ======================================================================
  loadAllCases({ commit }) {
    this.$storyapi.get(`cdn/stories/`, {
      version: 'published',
      starts_with: 'cases/',
      resolve_relations: 'case-studies-container.case_studies',
    }).then((res) => {
      commit('SetAllCases', res.data);
    })
  }
  // ======================================================================


}


// Getter allows to get data from state into diff components
export const getters = {

}

// allows to break up our store into multile modules, having its own state, mutations, actions , getter etc..
export const modules = {

}
