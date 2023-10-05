export const state = () => ({

    home:{

      statistics:{
        list:[
          {
            icon:"laptop.svg",
            alt:"laptop-icon",
            title:"Expert Developers",
            count:"150+"
          },
          {
            icon:"flag.svg",
            alt:"flag-icon",
            title:"Global Development Centers",
            count:"5+"
          },
          {
            icon:"box.svg",
            alt:"box-icon",
            title:"Projects Delivered",
            count:"300+"
          },
          {
            icon:"location-pin.svg",
            alt:"pin-icon",
            title:"Customers in more than 20 countriess",
            count:"200+"
          }
        ]
      },
      benefits:{
        title:"Tech-empower your business",

        list:[
          {
            intial_title:'Stay competitive',
            remaning_title:"by leveraging our specialised knowledge"
          },
          {
            intial_title:'Reduce development time and cost',
            remaning_title:"by avoiding the hiring overhead "
          },
          {
            intial_title:'Build scalable, adaptable software',
            remaning_title:"that meets your evolving business needs"
          },
        ]
      }
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