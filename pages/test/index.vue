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


    async asyncData(context) {
        const [testimonials, articlesRes] = await Promise.all([
            context.app.$storyapi.get('cdn/stories/', {
                version: 'published',
                starts_with: 'testimonials/',
                resolve_relations: 'testimonial-container.testimonials_list',
            }),
            context.app.$storyapi.get('cdn/stories/', {
                version: 'published',
                starts_with: 'blog/',
                resolve_relations: 'blog-container.blogs',
            }),
        ])
        return {
            testimonials: testimonials.data,
            posts: articlesRes.data,
        }
    },
    data() {
        return {
            story: { content: {} },
        }
    },


    computed: {
        getTestimonialsData() {
            return this.testimonials.stories
        },
        getArticlesData() {
            return this.posts.stories
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



}
</script>
      
  
