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

        const [testimonials, articlesRes, consultingTeamRes] = await Promise.all([

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

            // Core:       24d738a4-ad30-45f7-9ec6-3584eb0ddbe0
            // Data:       87a4dfac-ca7d-4605-92d1-b95a7bee0a85
            // Consulting: 6e27734f-2f09-4108-9292-b27bd8a17870
            context.app.$storyapi.get('cdn/stories/', {
                version: 'published',
                starts_with: 'teams/',
                resolve_relations: 'teams-container.teams',
                'filter_query[team_categories][exists]': '6e27734f-2f09-4108-9292-b27bd8a17870'
            }),


        ])

        return {
            testimonials: testimonials.data,
            posts: articlesRes.data,
            consultingExperts: consultingTeamRes.data
        }

    },

    data() {
        return {
            testimonials: [],
            posts: []
        }
    },




}

</script>
