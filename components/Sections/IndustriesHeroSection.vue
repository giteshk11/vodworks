<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
        <div class="mx-auto container">
            <div class="text-center mx-auto md:max-w-3/5">
                <h1 class="color-white">{{ page.title }}</h1>
                <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">{{ page.description }}</p>

       
          
                <div v-if="button.btnURL === true">
                    <NuxtLink to="/services" class="btn-primary btn-lg  inline-block">
                        Explore our services
                    </NuxtLink>
                </div>
                <div v-if="button.btnURL === false">
                    <div v-scroll-to="'#GetInTouchWithUs'"
                        class="btn-primary btn-lg inline-block cursor-pointer">
                        Get started
                    </div>
                </div>
            </div>
            <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">
                <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6">
                    <template v-for="(card, i) in industries.industries">
                        <IndustryCtaCard :key="i" :data="card" />
                    </template>
                </div>
            </div>


        </div>
    </section>
</template>
  
<script>

export default {
    name: 'IndustriesHeroSection',
    props: {
        page: {
            type: Object,
            default: null
        },
        industries: {
            type: Object,
            default: null
        },
        button: {
            type: Object,
            default: null
        }
    }
}
</script>
  
  