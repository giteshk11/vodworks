<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
        <div class="mx-auto container color-white">

            <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-4 text-center md:text-left">
                <div class="">
                    <h2 class="heading-1 md:w-4/5"> {{ data.title }}</h2>
                    <NuxtLink to="/contact" class="btn-primary btn-lg mt-16 hidden lg:inline-block invisible md:visible">
                        Get in touch with us
                    </NuxtLink>
                </div>
                <div class="empowerment">
                    <div v-for="(benefit, i) in data.list" :key="i" class="my-8">
                        <p v-in-viewport class="color-white"> <span class="bgFill"><span
                                    class="textClip color-white font-semibold">{{ benefit.intial_title }}</span></span> {{
                                        benefit.remaning_title }}</p>
                    </div>
                    <NuxtLink to="/contact"
                        class="btn-primary btn-lg mt-8 lg:mt-16 inline-block lg:hidden visible lg:invisible">
                        Get in touch with us
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
  
  