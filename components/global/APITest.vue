<template>
    <div class="">
        <h2>API testing Component</h2>


    </div>
</template>
  

<script>


export default {

    asyncData(context) {
        return context.app.$storyapi.get('cdn/stories.testimonials-new', {
            version: 'published',
            // starts_with: 'testimonials/'

        }).then(res => {

            alert(res);
            return res;
        }).catch((res) => {
            if (!res.response) {
                context.error({
                    statusCode: 404,
                    message: 'Failed to receive content form api',
                })
            } else {
                context.error({
                    statusCode: res.response.status,
                    message: res.response.data,
                })
            }
        })
    },

}

</script>
