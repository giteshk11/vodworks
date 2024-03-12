<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div class="card-utilities hvr-effect team-card">
        <div class="team-avatar-wrapper">
            <img class="lazyload" :src="data.content.Avatar.filename" :alt="data.content.Avatar.alt" />
        </div>
        <div class="flex items-center gap-4 p-4 justify-between">
            <div>
                <p class="text-regular font-bold color-primary-black">{{ data.content.Name }}</p>
                <p class="color-main-grey font-medium text-small line-clamp-1">
                    {{ data.content.Designation }}</p>
            </div>
        </div>

        <div class="team-content-overlay">
            <div class="px-4 py-8 text-center v-center">
                <span class="bgColor-primary-red"></span>
                <div class="my-4">
                    <h4 class="color-primary-black">{{ data.content.Name }}</h4>
                    <p class="color-main-grey font-medium text-small leading-5">{{ data.content.Designation }}
                    </p>

                </div>
                <p class="text-card color-primary-black line-clamp-9    ">{{ data.content.short_intro }}</p>
                <a class="inline-block mt-4" target="_blank" :href="data.content.Linkedin_Url">
                    <img class="lazyload" src="~/assets/img/icons/Linkedin-icon.svg" alt="Lnkedin-icon" />
                </a>

            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'TeamSlidingCard',
    props: {
        data: {
            type: Object,
            default: null
        }
    }



}
</script>