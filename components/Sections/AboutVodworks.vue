<template>

    
    <section class="lg:py-32 py-14 overflow-hidden vw-map" :class="data.isDarkMode?'bgColor-tertiary-black color-white':'bgColor-normal-grey'">
        <div class="mx-auto container">

            <div class="text-center mx-auto md:max-w-3/5 ">
                <h2>About Vodworks</h2>
            </div>

            <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16 relative">

                <div class="text-center lg:text-left position-relative z-10	">
                    <p class="mb-4 lg:mb-6 text-big">Vodworks is a global provider of end-to-end software development
                        services. We
                        help clients across the world use modern technology to transform challenges into lasting business
                        value,
                        operational efficiency, and revenue growth. With a team of over 200 experts in multiple countries,
                        Vodworks
                        offers tech consulting, engineering, data, and team augmentation services.
                    </p>
                    <p class="text-big">
                        Since our inception in 2012, we have worked with numerous industry leaders and innovative startups,
                        creating
                        value across diverse sectors like media, telecommunications, gaming, fintech, and beyond. As a
                        company,
                        we
                        are driven by a passion for advancing society through technology. We therefore also invest heavily
                        in
                        research and development and collaborate closely with entrepreneurs and startups to build innovative
                        tech
                        solutions to life.
                    </p>
                </div>

                <div>
                    <img class="locations-map" src="~/assets/img/map.png" alt="VW locations Map" />
                </div>

            </div>

        </div>
    </section>
</template>
  
<script>

export default {
    name: 'AboutVodworks',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>
  
  