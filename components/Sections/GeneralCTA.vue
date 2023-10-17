<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14"  :class="data.darkMode ? 'bgColor-tertiary-black color-white' : 'bgColor-normal-grey'">
        <div class="mx-auto max-w-4/5 container">
            <div
                class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 items-center gap-4 md:gap-16 text-center md:text-left">

                <div class="md:col-span-7">
                    <h2 class="heading-1 col-start-1 col-end-3">{{ data.title }}</h2>
                </div>
                <div class="md:col-span-5 text-center">
                    <NuxtLink :to="data.btnURL" class="btn-primary inline-block btn-lg mt-8 md:mt-0">
                        {{ data.btnText }}
                    </NuxtLink>
                </div>

            </div>
        </div>
    </section>
</template>

<script>


export default {

    name: 'GeneralCTA',

    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>
  
  
  