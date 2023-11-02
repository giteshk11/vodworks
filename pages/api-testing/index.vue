<template>
    <div class="">
        <h2>API testing Component</h2>

    </div>
</template>
  

<script>


export default {


    // asyncData(context) {
    //     return context.app.$storyapi.get('cdn/stories/', {
    //         version: 'published',
    //         starts_with: 'testimonials/',
    //         resolve_relations: 'testimonial-container.testimonials_list',

    //     }).then(res => {
    //         /* eslint-disable no-console */
    //         console.log(res);
    //         return res;

    //     }).catch((res) => {
    //         if (!res.response) {
    //             context.error({
    //                 statusCode: 404,
    //                 message: 'Failed to receive content form api',
    //             })
    //         } else {
    //             context.error({
    //                 statusCode: res.response.status,
    //                 message: res.response.data,
    //             })
    //         }
    //     })
    // },

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
            testimonials:[],
            posts:[]
        }
    },




}

</script>
