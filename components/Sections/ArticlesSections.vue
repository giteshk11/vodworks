<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14" :class="data.isDarkMode ? 'bgColor-tertiary-black' : ''">

        <div class="mx-auto container">
            <div class="text-center">
                <h2 v-in-viewport :class="data.isDarkMode ? 'color-white' : ''">{{ data.title }} <span
                        class="bgFill"><span class="textClip" :class="data.isDarkMode ? 'color-white' : ''">{{
                            data.animated_word }}</span></span></h2>
            </div>

            <div class="mt-8 lg:mt-16 mx-auto md:max-w-4/5">


                <client-only>
                    <VueSlickCarousel class="our-team-slider" v-bind="$store.state.sliders_configurations.our_team">

                        <template v-for="(card, i) in data.getBlogData.stories">
                            <div :key="i" class="article-card card-utilities hvr-effect">
                                <div class="article-thumbnail-wrapper">
                                    <img class="w-full" :src="card.content.featured_image.filename"
                                        :alt="card.content.featured_image.alt" />
                                </div>

                                <div class="article-content-wrapper p-4">

                                    <div class="flex items-center justify-between">
                                        <p class="text-sm color-dark-grey">{{ getPublishDate(card) }}</p>
                                        <div class="flex items-center gap-2">
                                            <img class="clock-icon" src="~/assets/img/icons/clock-icon.svg"
                                                alt="clock-icon" />
                                            <p class="text-sm color-dark-grey">{{ card.content.read_time }} min read</p>
                                        </div>
                                    </div>

                                    <h6 class="mt-2 font-bold line-clamp-1 flex-grow-1">{{ card.content.title }}</h6>
                                    <p class="btn-text mt-4 lg:mt-6 inline-block cursor-pointer">Read Article</p>
                                </div>
                            </div>
                        </template>

                    </VueSlickCarousel>
                </client-only>

            </div>



        </div>


    </section>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {

    name: 'ArticlesSections',
    components: {
        VueSlickCarousel,
    },
    props: {
        data: {
            type: Object,
            default: null
        },
    },
    methods: {

        getPublishDate(blog) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
            return new Date(blog.content.published_date.split(' ')[0]).toLocaleString(
                'en-US',
                options
            )
        },
        getFeaturedImage(blog) {
            return blog.content.featured_image
        },

        gotoIndustries(slug) {
            this.$router.push({
                path: '/industries/' + slug,
            })
        },

    },
}
</script>
  
  
  