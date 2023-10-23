<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section>

        <div class="mx-auto max-w-4/5 container">
            <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0 text-center md:text-left">
                <div class="py-16 md:col-span-7">
                    <h2 class="heading-1">{{ data.title }}</h2>
                    <NuxtLink :to="data.btnURL" class="btn-primary inline-block btn-lg mt-8 lg:mt-16">
                        {{ data.btnText }}
                    </NuxtLink>
                </div>
                <div class="relative md:col-span-5">
                    <img class="w-full cta-team-pic" :src="`${require('~/assets/img/'+data.imgSrc)}`" alt="Team Member" />
                </div>
            </div>
        </div>

    </section>
</template>

<script>


export default {

    name: 'FeaturedCTAv2',

    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>
  
  
  