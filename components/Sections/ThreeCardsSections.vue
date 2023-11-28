<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14" :class="data.backgroundColor">
        <div class="mx-auto container">

            <div class="mx-auto w-full lg:w-4/5">
                <div class="text-center mx-auto w-full lg:w-4/5">
                    <h2 v-in-viewport>{{ data.sectionData.title }} <span class="bgFill"><span class="textClip">{{
                        data.sectionData.animated_word }}</span></span></h2>

                    <p class="mt-4 lg:mt-8 text-big mx-auto">{{ data.sectionData.description }}</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4 mt-8 lg:mt-16">

                    <template v-for="(card, i) in data.sectionData.list">

                        <div :key="i" class="default-card card-utilities hvr-effect business-card">

                            <img class="hvr-top" :src="`${require('~/assets/img/icons/' + card.icon)}`" :alt="card.alt" />
                            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h3>
                            <p class="text-card">{{ card.description }}</p>

                            <ul v-if="card.innerList" class="mt-4 md:mt-8 flex-grow-1 text-card">
                                <template v-for="(item, index) in card.innerList">
                                    <li :key="index">{{ item.title }} </li>
                                </template>
                            </ul>

                            <div v-if="card.button">
                                <div v-scroll-to="data.btnURL" class="btn-text mt-8 inline-block cursor-pointer">
                                    {{ data.btnText }}
                                </div>
                            </div>




                        </div>
                    </template>

                </div>


            </div>

        </div>
    </section>
</template>
  
<script>


export default {
    name: 'ThreeCardsSections',
    props: {
        data: {
            type: Object,
            default: null
        }
    },

}
</script>
  
  