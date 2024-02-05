<template>
    <!----------------------------- Get in Touch with us--------------------------------->
    <section id="GetInTouchWithUs" class="bgColor-normal-grey"
        :class="data.isDarkSectionAtTop ? 'lg:py-32 pt-14 lg:pb-0' : 'py-0'">
        <div class="mx-auto container">

            <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0 lead-collection">
                <div class="md:col-span-7">
                    <div class="bgColor-grey p-4 lg:p-16 h-full">
                        <h2>{{ data.title }} </h2>
                        <GetInTouchForm />
                    </div>
                </div>

                <div v-if="NextStepContent" class="md:col-span-5">
                    <div class="p-6 lg:p-16 bgColor-light-grey h-full">
                        <h2>{{ NextStepContent.title }}</h2>
                        <ul class="mt-8 lg:mt-12">
                            <template v-for="(step, i) in NextStepContent.list">
                                <li :key="i" class="mb-4 lg:mb-6 flex items-center gap-4">
                                    <img src="~assets/img/icons/square-list.svg" alt="list icon" />
                                    {{ step.description }}
                                </li>
                            </template>

                        </ul>
                    </div>
                </div>
            </div>

        </div>

    

    </section>

    <!----------------------------------------------------------------------------------->
</template>
  
<script>

import NextStepContent from '~/static/our-next-steps-content'

export default {

    name: 'GetInTouchWithUs',
    props: {
        data: {
            type: Object,
            default: null
        },
    },
    data() {
        return {
            NextStepContent,
        }
    },
}
</script>
  
  