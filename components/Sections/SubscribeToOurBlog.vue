<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
        <div class="mx-auto container">

            <div class="text-center">
                <form class="blog-subscription-form">
                    <h2 class="heading-1">Subscribe to our blog</h2>
                    <input id="email" name="email-address" type="email" placeholder="Your email"
                        class="appearance-none block w-full focus:outline-none focus:bg-white form-control mt-8 lg:mt-12  mb-8 lg:mb-12"
                        required />
                    <button type="button" class="btn-primary btn-lg inline-block">
                        Subscribe
                    </button>
                </form>
            </div>

        </div>
    </section>
</template>
  
<script>


export default {
    name: 'SubscribeToOurBlog',
    props: {
        data: {
            type: Object,
            default: null
        }
    },

}
</script>
  
  