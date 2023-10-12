<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div class="card-utilities hvr-effect testimonial-card px-6 lg:px-10 py-10 lg:py-10">
        <div class="flex gap-4 flex-wrap md:flex-nowrap">
            <div class="review-card lg:col-span-2 flex gap-4 ">
                <div class="client-avatar-wrapper">
                    <img :src="data.content.Avatar.filename" :alt="data.content.Avatar.alt" />
                </div>
                <!-- show on small devices -->
                <p class="text-regular font-medium color-primary-red inline-block md:hidden visible md:invisible">
                    {{ data.content.Name }} <span v-if="data.content.Name">,</span> <span
                        class="color-dark-grey text-card block md:inline-block"> {{ data.content.Designation }} </span>
                </p>
            </div>

            <div class="lg:col-span-10 mt-4 md:mt-0">
                <p class="text-regular font-medium color-primary-black">"{{ data.content.Feedback }}"</p>
                <!-- Hide on small devices -->
                <p class="text-regular font-medium md:mt-8 color-primary-red  hidden md:inline-block invisible md:visible">
                    {{ data.content.Name }} <span v-if="data.content.Name">,</span> <span
                        class="color-dark-grey text-card block md:inline-block"> {{ data.content.Designation }} </span>
                </p>
            </div>

        </div>
    </div>
</template>

  
<script>

export default {
    name: "TestimonialCard",
    props: {
        data: {
            type: Object,
            default: null
        }
    }
}
</script>
  
  