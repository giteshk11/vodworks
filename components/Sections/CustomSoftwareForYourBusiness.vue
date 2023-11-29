<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
        <div class="mx-auto container">
            <div class="text-center">
                <h2 v-in-viewport>Custom Software for Your <span class="bgFill"><span
                            class="textClip">Business</span></span>
                </h2>
                <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-3/5">
                    {{ custom_software_for_your_business.description }}
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4 mt-8 lg:mt-16">
                <template v-for="(card, i) in custom_software_for_your_business.list">
                    <div :key="i" class="default-card card-utilities hvr-effect business-card">
                        <img class="hvr-top" :src="`${require('~/assets/img/icons/' + card.icon)}`" :alt="card.alt" />
                        <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h3>
                        <p class="text-card">{{ card.description }}</p>
                        <ul class="mt-4 md:mt-8 flex-grow-1 text-card">
                            <template v-for="(item, index) in card.market_prospects">
                                <li :key="index">{{ item.title }} </li>
                            </template>
                        </ul>
                        <NuxtLink :to="card.btnURL" class="btn-text mt-8 inline-block">
                            Read More
                        </NuxtLink>
                    </div>
                </template>
            </div>
            
        </div>
    </section>
</template>

<script>


export default {

    name: 'CustomSoftwareForYourBusiness',
    data() {
        return {
            custom_software_for_your_business: {
                title: "Custom Software for Your Business",
                description: "We work with diverse clients, spanning from startups to large enterprises in various industries. Our adaptable team excels in tailoring solutions to unique working styles and needs, driving innovation with new technologies.",
                list: [
                    {
                        icon: "Rocket.svg",
                        alt: "Rocket-Icon",

                        title: "For Startups",
                        description: "We take your idea from prototype to full-scale launch, offering technical expertise along the way to minimize risk and boost success. When we recognise exceptional potential, we also offer investment and incubation for new market prospects.",

                        market_prospects: [
                            {
                                title: "- MVP and rapid PoCs",
                            },
                            {
                                title: "- Tech stack advice",
                            },
                            {
                                title: "- Team augmentation",
                            },
                            {
                                title: "- Investment and incubation",
                            }
                        ],

                        btnURL:"/for-startups",

                    },
                    {
                        icon: "Color-Palette.svg",
                        alt: "Color-Palette-icon",

                        title: "For Enterprise",
                        description: "With more than a decade of experience in enterprise software, we work closely with you to define, visualise, and build software products and teams tailored to your business needs. ",

                        market_prospects: [
                            {
                                title: "- Business requirement analysis",
                            },
                            {
                                title: "- Custom business applications ",
                            },
                            {
                                title: "- Dedicated technical teams",
                            },
                            {
                                title: "- Modernization of legacy software",
                            }
                        ],

                        btnURL:"for-enterprise",

                    },
                    {
                        icon: "Share.svg",
                        alt: "share-icon",

                        title: "For Web3",
                        description: "Using our expertise in web3, we collaborate closely with clients across different industries to identify how web3 technologies can optimise processes and unlock new business opportunities.",

                        market_prospects: [
                            {
                                title: "- Web3 consulting",
                            },
                            {
                                title: "- MVP and rapid PoCs",
                            },
                            {
                                title: "- DApp development",
                            },
                            {
                                title: "- Web3 monetisation and loyalty",
                            }
                        ],

                        btnURL:"/for-web3",

                    }
                ]
            },
        }
    },


}
</script>
  
  
  