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
                                alt: "iOS logo",
                            },
                            {
                                image: "mobile/react-native.svg",
                                alt: "React Native logo",
                            },
                            {
                                image: "mobile/android.svg",
                                alt: "Android logo",
                            },
                            {
                                image: "mobile/flutter-dev.svg",
                                alt: "Flutter logo",
                            },
                        ]
                    },
                    // Front-End
                    {
                        title: "Front-End",
                        list: [
                            {
                                image: "frontend/reactjs.svg",
                                alt: "ReactJs Logo",
                            },
                            {
                                image: "frontend/angular.svg",
                                alt: "AngularJs logo",
                            },
                            {
                                image: "frontend/eleventy.svg",
                                alt: "eleventy logo",
                            },
                            {
                                image: "frontend/nuxtjs.svg",
                                alt: "NuxtJs logo",
                            },
                        ]
                    },

                    // Backend
                    {
                        title: "Backend",
                        list: [
                            {
                                image: "backend/dot-net.svg",
                                alt: "Dotnet logo",
                            },
                            {
                                image: "backend/java.svg",
                                alt: "Java logo",
                            },
                            {
                                image: "backend/php.svg",
                                alt: "Php logo",
                            },
                            {
                                image: "backend/node_js.svg",
                                alt: "NodeJs logo",
                            },
                            {
                                image: "backend/go.svg",
                                alt: "Go logo",
                            },
                        ]
                    },
                    // Database
                    {
                        title: "Database",
                        list: [
                            {
                                image: "database/cassandra.svg",
                                alt: "Cassandra logo",
                            },
                            {
                                image: "database/mongoDB.svg",
                                alt: "mongoDB logo",
                            },
                            {
                                image: "database/mySQL.svg",
                                alt: "mySQL logo",
                            },
                            {
                                image: "database/elephantDB.svg",
                                alt: "elephantDB logo",
                            },
                            {
                                image: "database/SQLserver.svg",
                                alt: "SQLserver logo",
                            },
                        ]
                    },

                    // Platforms
                    {
                        title: "Platform",
                        list: [
                            {
                                image: "platform/spotify.svg",
                                alt: "Spotify logo",
                            },
                            {
                                image: "platform/set.svg",
                                alt: "Setting logo",
                            },
                            {
                                image: "platform/blocks.svg",
                                alt: "Blocks logo",
                            },
                            {
                                image: "platform/domo.svg",
                                alt: "Domo logo",
                            },
                        ]
                    }


                ]
            }
        }
    },
}
</script>
  
  
  