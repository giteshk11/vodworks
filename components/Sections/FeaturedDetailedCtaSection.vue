<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
        <div class="mx-auto container color-white">

            <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0 items-center mx-auto text-center md:text-left">

                <div class="md:col-span-7">
                    <h2 class="heading-1 md:w-4/5"> {{ data.title }}</h2>
                    <h4 v-if="data.description" class="mt-4">{{ data.description }}</h4>

                    <NuxtLink :to="data.btnURL" class="btn-primary btn-lg mt-16 hidden lg:inline-block invisible md:visible">
                        {{ data.btnText }}
                    </NuxtLink>
                </div>
                <div class="md:col-span-5 empowerment">
                    <div v-for="(benefit, i) in data.list" :key="i" class="my-8">
                        <p v-in-viewport class="color-white"> <span class="bgFill"><span
                                    class="textClip color-white font-semibold">{{ benefit.intial_title }}</span></span> {{
                                        benefit.remaning_title }}</p>
                    </div>
                    <NuxtLink :to="data.btnURL" :target="data.target"
                        class="btn-primary btn-lg mt-8 lg:mt-16 inline-block lg:hidden visible lg:invisible">
                        {{ data.btnText }}
                    </NuxtLink>
                </div>

            </div>
        </div>
    </section>
</template>
  
<script>

export default {
    name: 'FeaturedDetailedCtaSection',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>
  
  