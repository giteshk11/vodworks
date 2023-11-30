<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
        <div class="mx-auto container">

            <div class="text-center mx-auto md:max-w-4/5">
                <h2 class="color-white">{{ data.getIndustriesData.title }}</h2>
                <p class="mt-4 lg:mt-8 text-big color-white">{{ data.getIndustriesData.description }}</p>
            </div>

            <div class="mt-8 lg:mt-16">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-4">
                    <template v-for="(industry, i) in data.getIndustriesData.industries">
                        <div :key="i" class="industrues-card flex items-center text-left gap-2 bgColor-white p-4 cursor-pointer" @click="gotoSingleIndusty(industry.slug)">
                            <img :src="industry.content.icon.filename" :alt="industry.content.alt" />
                            <h5 class="font-bold lg:max-w-3/5">{{ industry.content.title }}</h5>
                        </div>
                    </template>
                </div>
            </div>


        </div>
    </section>
</template>
  
<script>

export default {
    name: 'IndustriesListingSection',
    props: {
        data: {
            type: Object,
            default: null
        },
    },

    methods: {
        gotoSingleIndusty(slug) {
            this.$router.push({
                path: '/industries/' + slug,
            })
        }
    }
}
</script>
  
  