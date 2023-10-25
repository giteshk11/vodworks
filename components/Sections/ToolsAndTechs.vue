<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14" :class="data.isDarkMode? 'bgColor-tertiary-black color-white':'bgColor-normal-grey'">
        <div class="mx-auto container">

            <div class="text-center mx-auto md:max-w-3/5">
                <h2 class="">Tools and Technologies we use</h2>
                <p class="mt-4 lg:mt-8 text-big">Our team at Vodworks has knowledge and experience
                    with a broad range of tools and technologies. Based on your project's unique requirements, we will
                    carefully
                    select the appropriate tools and tech stack to ensure we deliver on time and within budget.
                </p>
            </div>

            <div class="flex flex-col md:flex-row justify-between mx-auto md:max-w-4/5  mt-8 lg:mt-16">
                <template v-for="(tech, i) in tools_and_techs.techs">
                    <div :key="i" class="tools_and_techs text-center mb-8 md:mb-0">
                        <p v-in-viewport> <span class="bgFill"><span :class="data.isDarkMode?'textClip color-white font-semibold':'textClip font-semibold' ">{{
                            tech.title
                        }}</span></span></p>
                        <div class="techs-stacks mt-8 md:mt-0">
                            <template v-for="(logo, index) in tech.list">
                                <img :key="index" class="mx-auto md:my-10 hvr-top"
                                    :src="`${require('~/assets/img/technologies/' + logo.image)}`" :alt="logo.alt" />
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ToolsAndTechs',

    props: {
        data: {
            type: Object,
            default: null
        },
    },

    data() {
        return {
            tools_and_techs: {
                title: "Tools and Technologies we use",
                description: "Our team at Vodworks has knowledge and experience with a broad range of tools and technologies. Based on your project's unique requirements, we  will carefully select the appropriate tools and tech stack to ensure we deliver on time and within budget.",

                techs: [
                    // Mobile
                    {
                        title: "Mobile",
                        list: [
                            {
                                image: "mobile/ios.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "mobile/react-native.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "mobile/android.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "mobile/flutter-dev.svg",
                                alt: "Tech-paltform",
                            },
                        ]
                    },
                    // Front-End
                    {
                        title: "Front-End",
                        list: [
                            {
                                image: "frontend/reactjs.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "frontend/angular.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "frontend/eleventy.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "frontend/nuxtjs.svg",
                                alt: "Tech-paltform",
                            },
                        ]
                    },

                    // Backend
                    {
                        title: "Backend",
                        list: [
                            {
                                image: "backend/dot-net.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "backend/java.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "backend/php.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "backend/node_js.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "backend/go.svg",
                                alt: "Tech-paltform",
                            },
                        ]
                    },
                    // Database
                    {
                        title: "Database",
                        list: [
                            {
                                image: "database/cassandra.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "database/mongoDB.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "database/mySQL.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "database/elephantDB.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "database/SQLserver.svg",
                                alt: "Tech-paltform",
                            },
                        ]
                    },

                    // Platforms
                    {
                        title: "Platform",
                        list: [
                            {
                                image: "platform/spotify.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "platform/set.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "platform/blocks.svg",
                                alt: "Tech-paltform",
                            },
                            {
                                image: "platform/domo.svg",
                                alt: "Tech-paltform",
                            },
                        ]
                    }


                ]
            }
        }
    },
}
</script>
  
  
  