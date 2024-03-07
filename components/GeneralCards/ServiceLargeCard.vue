<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div :id="data.content.ScrollToID" class="default-card card-utilities hvr-effect text-left mb-4 lg:mb-10">
        <div class="grid lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-4 lg:gap-16">

            <div>
                <div class="flex gap-2 items-center">
                    <img class="card-icon lazyload" :data-src="data.content.service_icon.filename" :alt="data.content.service_icon.alt" />
                    <h3 class="w-full">{{ data.content.service_title }}</h3>
                </div>
                <p class="text-card mt-6">{{ data.content.service_description }}</p>

                <p class="text-card my-4">{{ data.content.services_list_title }}</p>
                <!-- eslint-disable vue/no-v-html -->
                <div class="text-card rendered-list" v-html="$md.render(data.content.list)"></div>




                <div v-if="button.btnURL === 'isStatic'">
   
                    <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-md btn-lg mt-8 inline-block cursor-pointer">
                        {{ button.text }}
                    </div>

                </div>
                <div v-if="button.btnURL === 'isDynamic'">
                    <NuxtLink :to="'/services/' + data.slug" class="btn-text mt-8 inline-block">
                        Read More
                    </NuxtLink>
                </div>


            </div>

            <div class="hidden lg:inline-block zoom-in overflow-hidden">
                <img class="w-full" :src="data.content.thumbnail.filename" :alt="data.content.thumbnail.alt" />
            </div>

        </div>
    </div>
</template>
  
<script>


export default {
    name: 'ServiceLargeCard',
    props: {
        data: {
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
  
  