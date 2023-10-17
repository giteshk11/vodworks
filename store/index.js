export const state = () => ({


    sliders_configurations:{

      success_stories: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        dots: false,
        speed: 500,
        autoplay: true,
        mobileFirst:true,
        infinite: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              mobileFirst:true,
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
        mobileFirst:true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              mobileFirst:true,
              dots: true,
              arrows: false,
            },
          },

          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              mobileFirst:true,
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
        mobileFirst:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerPadding: '12%',
              mobileFirst:true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerPadding: '0%',
              mobileFirst:true,
            },
          },
        ],
      },
    },

    counter: 0
  })
  
  export const getters = {
    getCounter(state) {
      return state.counter
    }
  }
  
  export const mutations = {
    increment(state) {
      state.counter++
    }
  }
  
  export const actions = {
    fetchCounter({ state }) {
      // make request
      const res = { data: 10 };
      state.counter = res.data;
      return res.data;
    }
  }