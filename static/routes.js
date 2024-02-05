export default {
    // base: {
    //     name: "Home",
    //     path: "/"
    // },

    navigationItems: [
        {
            name: "Services",
            path: "/services",
            mobilePath: "#",
            hasDropDown: true,
            list: [
                {
                    name: "Consulting",
                    path: "/services/consulting",
                },
                {
                    name: "Engineering",
                    path: "/services/engineering",
                },
                {
                    name: "Data",
                    path: "/services/data",
                },
                {
                    name: "Teams",
                    path: "/services/teams",
                },

            ],

        },
        {
            name: "Industries",
            path: "/industries",
            mobilePath: "#",
            hasDropDown: true,
            list: [
                {
                    name: "Media & Entertainment",
                    path: "/industries/media-and-entertainment",
                },
                {
                    name: "Telecommunications",
                    path: "/industries/telecommunications",
                },
                {
                    name: "Gaming",
                    path: "/industries/gaming",
                },
                {
                    name: "Finance and Fintech",
                    path: "/industries/finance-and-fintech",
                },
                {
                    name: "Compliance and Security",
                    path: "/industries/compliance-and-security",
                },
                {
                    name: "Ecommerce & Retail",
                    path: "/industries/ecommerce-and-retail",
                },
                {
                    name: "Web3",
                    path: "/industries/web3",
                },
                {
                    name: "Sustainability",
                    path: "/industries/sustainability",
                }
            ]
        },
        {
            name: "Case Studies",
            path: "/cases",
            mobilePath: "/",
            hasDropDown: false,
        },
        {
            name: "Blog",
            path: "/blogs",
            mobilePath: "/",
            hasDropDown: false,
        },
        {
            name: "Company",
            path: "#",
            mobilePath: "#",
            hasDropDown: true,
            list: [
                {
                    name: "About us",
                    path: "/about",
                },
                {
                    name: "How we work",
                    path: "/how-we-work",
                },
                {
                    name: "For Startups",
                    path: "/for-startups",
                },
                {
                    name: "For Enterprise",
                    path: "/for-enterprise",
                },
                {
                    name: "For Web3",
                    path: "/for-web3",
                },
                {
                    name: "Social Projects",
                    path: "/social-projects",
                },
                {
                    name: "Careers",
                    path: "/careers",
                },
                {
                    name: "Privacy Policy",
                    path: "/privacy-policy",
                }
            ]
        }
    ],



    quick_links: {

        list: [
            {
                name: "Industries",
                path: "/industries",
            },
            {
                name: "Case Studies",
                path: "/cases",
            },
            {
                name: "Blog",
                path: "/blogs",
            },
            {
                name: "Contact us",
                path: "/contact",
            }
        ]
    },

    socials: [
        {
            name: "LinkedIn",
            path: "https://www.linkedin.com/company/vodworks"
        },
        {
            name: "Twitter",
            path: "https://twitter.com/vodworksit"
        },
        {
            name: "Facebook",
            path: "https://www.facebook.com/vodworks/"
        }
    ],

}
