<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <!------------------------------------------------------------------------------------------>
    <section class="lg:py-32 py-14" :class="data.isDarkMode ? 'bgColor-tertiary-black color-wihte' : 'bgColor-normal-grey'">
        <div class="mx-auto container">
            <div :class="['text-center', { 'color-white': data.isDarkMode }]">
                <h2 v-in-viewport>{{ data.title }} <span class="bgFill"><span class="textClip"
                            :class="data.isDarkMode ? 'color-white' : ''">{{ data.animated_word }}</span></span></h2>
                <p class="mt-4 lg:mt-8 mx-auto max-w-full lg:max-w-3/5">{{ data.description }}</p>
            </div>

            <div class="mx-auto max-w-full lg:max-w-3/5 mt-4 lg:mt-12">

                <template v-for="(card, i) in data.getDataExpertsData.stories">
                    <div :key="i" class="bgColor-white card-utilities hvr-effect">
                        <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0">
                            <div class="md:col-span-5 expert-avatar-wrapper">
                                <img :src="card.content.Avatar.filename" :alt="card.content.Avatar.alt" />
                            </div>
                            <div class="md:col-span-7 expert-content p-4 lg:px-8 lg:py-8">
                                <div class="flex items-center gap-4 justify-between">
                                    <div>
                                        <h4 class="text-regular font-bold color-primary-black">{{ card.content.Name }}</h4>
                                        <p class="color-main-grey font-medium text-regular">{{
                                            card.content.Designation }}</p>
                                    </div>
                                    <a target="_blank" :href="card.content.Linkedin_Url"><img
                                            src="~assets/img/icons/Linkedin-icon.svg" alt="Lnkedin-icon" /></a>
                                </div>
                                <p class="mt-4 lg:mt-8 color-primary-black">{{ card.content.Description }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

            <div class="text-center mt-16">
                <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
                    Book a consultation
                </div>
            </div>

        </div>
    </section>
    <!------------------------------------------------------------------------------------------>
</template>
  
<script>


export default {
    name: 'Web3ExpertsSection',
    props: {
        data: {
            type: Object,
            default: null
        }
    }
}
</script>
  
