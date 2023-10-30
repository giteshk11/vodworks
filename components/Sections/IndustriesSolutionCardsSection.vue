

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
        <div class="mx-auto container">
            <div class="text-center mx-auto w-full lg:w-3/5">
                <h2 v-in-viewport>{{ data.SingleIndustrySolutionData.title }} <span class="bgFill"><span class="textClip">{{
                    data.SingleIndustrySolutionData.animated_word }}</span></span></h2>
            </div>

            <div class="grid mx-auto gap-4 mt-8 lg:mt-16" :class="data.gridlayout==='four-cols'? 'md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ': 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full lg:w-4/5'">
                <template v-for="(card, i) in data.SingleIndustrySolutionData.list">
                    <IndustryCard :key="i" :data="card" />
                </template>
            </div>


        </div>
    </section>
</template>

<script>


export default {

    name: 'IndustriesSolutionCardsSection',

    props: {
        data: {
            type: Object,
            default: null
        }
    }
}
</script>
  
  
  