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

      our_team: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        dots: false,
        speed: 1000,
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
    },

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

      custom_software_for_your_business:{
        title:"Custom Software for Your Business",
        description:"We work with diverse clients, spanning from startups to large enterprises in various industries. Our adaptable team excels in tailoring solutions to unique working styles and needs, driving innovation with new technologies.",
        list:[
          {
            icon:"Rocket.svg",
            alt:"Rocket-Icon",

            title:"For Startups",
            description:"We take your idea from prototype to full-scale launch, offering technical expertise along the way to minimize risk and boost success. When we recognise exceptional potential, we also offer investment and incubation for new market prospects.",

            market_prospects:[
              {
                title:"- MVP and rapid PoCs",
              },
              {
                title:"- Tech stack advice",
              },
              {
                title:"- Team augmentation",
              },
              {
                title:"- Investment and incubation",
              }
            ]

          },
          {
            icon:"Color-Palette.svg",
            alt:"Color-Palette-icon",

            title:"For Enterprise",
            description:"With more than a decade of experience in enterprise software, we work closely with you to define, visualise, and build software products and teams tailored to your business needs. ",

            market_prospects:[
              {
                title:"- Business requirement analysis",
              },
              {
                title:"- Custom business applications ",
              },
              {
                title:"- Dedicated technical teams",
              },
              {
                title:"- Modernization of legacy software",
              }
            ]

          },
          {
            icon:"Share.svg",
            alt:"share-icon",

            title:"For Web3",
            description:"Using our expertise in web3, we collaborate closely with clients across different industries to identify how web3 technologies can optimise processes and unlock new business opportunities.",

            market_prospects:[
              {
                title:"- Web3 consulting",
              },
              {
                title:"- MVP and rapid PoCs",
              },
              {
                title:"- DApp development",
              },
              {
                title:"- Web3 monetisation and loyalty",
              }
            ]

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
      },

      why_choose_vodworks:{
        title:"Why Choose Vodworks?",
        list:[
          {
            title:"Optimize development cost",
            description:"We work closely with you through every stage of the development process, making sure we tackle risks and set your technology investments up for success"
          },
          {
            title:"Faster time-to-market",
            description:"We build rapid PoCs and MVPs to reduce time-to-market, and implement time-tested agile processes to ensure quick and  successful delivery of full-scale software products"
          },
          {
            title:"Diverse technical expertise",
            description:"With more than 150 highly-skilled developers and a global network of experts, we guarantee the right technical talent for your business needs"
          },
          {
            title:"Flexible teams",
            description:"We offer an agile and flexible working approach, supporting you to quickly scale your projects up or down"
          },
          {
            title:"End-to-end services",
            description:"We offer an agile and flexible working approach, supporting you to quickly scale your projects up or down"
          },
          {
            title:"Global presence",
            description:"We cater to diverse technical and budget requirements, and serve clients spanning various time zones"
          }
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