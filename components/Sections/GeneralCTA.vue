<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14" :class="data.darkMode ? 'bgColor-tertiary-black color-white' : 'bgColor-normal-grey'">
        <div class="mx-auto  container">
            <div
                class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 items-center gap-4 md:gap-16 text-center md:text-left">

                <div :class="data.col_1">
                    <h2 class="heading-1 col-start-1 col-end-3">{{ data.title }}</h2>
                </div>
                <div class="text-center" :class="data.col_2">

                    <div v-if="data.isNavigatingToContactPage === true">
                        <NuxtLink :to="data.btnURL" class="btn-primary inline-block btn-lg mt-8 md:mt-0">
                            {{ data.btnText }}
                        </NuxtLink>
                    </div>

                    <div v-if="data.isNavigatingToContactPage === false">
                        <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
                            {{ data.btnText }}
                        </div>
                    </div>
                    
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
  
  
  