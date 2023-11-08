<template>
    <div>



        <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
            <div class="mx-auto container">
                <div class="text-center mx-auto md:max-w-3/5">
                    <h1 v-in-viewport class="w-full">Welcome to <span class="bgFill"><span
                                class="textClip color-white">Vodworks</span></span>
                    </h1>
                </div>
            </div>
        </section>


        <section class="lg:py-32 py-14">
            <div class="mx-auto container">
                <div class="text-center">
                    <h2>Case Studies</h2>

                    <div class="mt-16">
                        <template v-for="(card, i) in articles.stories">
                            <div :key="i" class="text-left p-2">
                                <div class="flex justify-between">
                                    <span>{{ card.content.title }}</span>
                                    <span>{{ getPublishDate(card) }}</span>
                                </div>
                                <hr />
                            </div>
                        </template>
                    </div>

                </div>

            </div>
        </section>


        <!--    
    
        <Testimonials :data="{
            getTestimonialsData,
            isDarkMode: false
        }" />
        
        -->




    </div>
</template>
    
    
<script>

export default {



    data() {
        return {
            testimonials: [],
            articles: [],
            ServicePage: {},
            postsByCatsTrend: [],


            // ========= for filtering data =============
            // services: [],
            // industries: [],
            // categories: [],
            // posts: [],
            // laoding: true,
            // selected: {
            //     services: [],
            //     industries: [],
            //     categories: [],
            // }
            // ===========================================
        }
    },
    async fetch({ store,  route }) {
        const path = route.path
        await store.dispatch('loadAllTestimonials')
        await store.dispatch('loadpagedata', path)


    },



    // async fetch(context) {



    //     // const paths = [
    //     //     {
    //     //         url: 'cdn/stories/',
    //     //         options: {
    //     //             version: 'published',
    //     //             starts_with: 'testimonials/',
    //     //             resolve_relations: 'testimonial-container.testimonials_list',
    //     //         }
    //     //     },
    //     //     {
    //     //         url: 'cdn/stories/',
    //     //         options: {
    //     //             version: 'published',
    //     //             starts_with: 'blog/',
    //     //             resolve_relations: 'blog-container.blogs',
    //     //         }
    //     //     }
    //     // ]
    //     // const requests = paths.map((path) =>
    //     //     context.app.$storyapi.get(path.url, path.options)
    //     // );
    //     // Promise.all(requests).then((responses) => {
    //     //     responses.forEach((res) => {
    //     //         return res.data.stories
    //     //     });
    //     // });




    //     // const [testimonials, articlesRes] = await Promise.all([
    //     //     context.app.$storyapi.get('cdn/stories/', {
    //     //         version: 'published',
    //     //         starts_with: 'testimonials/',
    //     //         resolve_relations: 'testimonial-container.testimonials_list',
    //     //     }),
    //     //     context.app.$storyapi.get('cdn/stories/', {
    //     //         version: 'published',
    //     //         starts_with: 'blog/',
    //     //         resolve_relations: 'blog-container.blogs',
    //     //     }),
    //     // ])
    //     // return {
    //     //     testimonials: testimonials.data,
    //     //     posts: articlesRes.data,
    //     // }

    //     // const [testimonialsRes, articlesRes, servicesPageRes] = await Promise.all([
    //     //     context.app.$storyapi.get('cdn/stories/', {
    //     //         version: 'published',
    //     //         starts_with: 'testimonials/',
    //     //         resolve_relations: 'testimonial-container.testimonials_list',
    //     //     }),

    //     //     context.app.$storyapi.get('cdn/stories/', {
    //     //         version: 'published',
    //     //         starts_with: 'blog/',
    //     //         // per_page:100,
    //     //         resolve_relations: 'blog-container.blogs',
    //     //         // 'filter_query[categories][exists]':'264624b7-7abc-4a2c-b28c-1e8007062e7a'	
    //     //     }),

    //     //     context.app.$storyapi.get('cdn/stories/services', {
    //     //         version: 'published',
    //     //         resolve_relations: 'services-container.services,case-studies-container.case_studies,case-studies.category,testimonial-container.testimonials_list',
    //     //     }),

    //     // ])
    //     // return {
    //     //     testimonials: testimonialsRes.data,
    //     //     articles: articlesRes.data,
    //     //     ServicePage: servicesPageRes.data,
    //     // }

    // },



    computed: {
        getTestimonialsData() {
            return this.testimonials.stories
        },
        getArticlesData() {
            return this.articles.stories
        },
        ServicePageData() {
            return this.ServicePage
        },


    },


    mounted() {
        // this.$storybridge.on(['input', 'published', 'change'], (event) => {
        //     if (event.action === 'input') {
        //         if (event.story.id === this.story.id) {
        //             this.story.content = event.story.content
        //         }
        //     } else if (!event.slugChanged) {
        //         window.location.reload()
        //     }
        // })
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



    }



}
</script>
      
  
