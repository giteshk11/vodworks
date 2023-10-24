<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
        <div class="mx-auto max-w-4/5 container">

            <div class="text-center mx-auto md:max-w-3/5 ">
                <h2 class="color-white">Meet our Vodworks team</h2>
            </div>
            <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16">
                <div>
                    <p class="mb-4 lg:mb-6 text-big color-white">We're an international team of around 200 passionate
                        individuals,
                        including over 150 expert developers. Operating from offices spanning the globe, our major hubs are
                        strategically located in Ukraine, Pakistan, and Cambodia.
                    </p>
                    <p class="text-big color-white">
                        Our mission is simple yet profound: we aim to revolutionise the world by building technology that
                        improves
                        lives and safeguards the planet. What sets us apart is our commitment to authenticity and embracing
                        innovation without any pretense. We take pride in our inclusive team, working as one across
                        departments,
                        countries, cultures, and clients. With a true customer-centric approach, we're not just developers,
                        but
                        partners in your software success.
                    </p>
                </div>
                <div>
                    <div class="zoom-in overflow-hidden">
                        <img class="w-full" src="~/assets/img/meet-our-vodworks-team-pic.jpg" alt="Team Picture" />
                    </div>
                </div>

            </div>

            <div class="text-center">
                <NuxtLink to="/about" class="btn-primary btn-lg  mt-16 inline-block">
                    more about us
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
  
<script>

export default {
    name: 'OverviewAboutVodworksTeam',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>
  
  