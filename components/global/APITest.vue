<template>
    <div class="">
        <h2>API testing Component</h2>

        {{ posts }}

    </div>
</template>
  
<script>

export default {
    // data() {
    //     return {
    //         posts: []
    //     };
    // },
    // created() {
    //     fetch('https://api.storyblok.com/v2/cdn/stories/reviews/?token=LSAGJFizpCbsp7rpxXMcRgtt&version=published')
    //         .then((res) => res.json())
    //         .then((posts) => {
    //             // store the posts in the reactive state
    //             this.posts = posts;
    //         });
    // }

    data() {
        return {
            mountains: []
        }
    },
    async fetch() {
        this.mountains = await fetch(
            'https://api.nuxtjs.dev/mountains'
        ).then(res => res.json())
    }


    // https://v2.nuxt.com/docs/features/data-fetching/


};

</script>




  
  