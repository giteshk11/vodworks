<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <!-----------  Hero section -------------------------------------------------------->
        <CsHero :data="{
            content: getSingleCsHero,
            hasMorePadding: true,
        }" />
        <!----------------------------------------------------------------------------------->

        <!-------------- About The Client --------------------------------------------------->
        <CsBrief :data="Brief" />
        <!----------------------------------------------------------------------------------->

        <!--------------- The Scope  -------------------------------------------------------->
        <CsScope :data="Scope" />
        <!----------------------------------------------------------------------------------->

        <!-------------- Featured Image 1---------------------------------------------------->
        <CsFeaturedImage :data="getSingleCsFeaturedImage1" />
        <!----------------------------------------------------------------------------------->

        <!--------------- How Vodworks Helped  ---------------------------------------------->
        <section v-if="Approach" class="single-cs lg:py-32 py-14 bgColor-normal-grey">
            <div class="mx-auto container">
                <div class="md:max-w-4/5 mx-auto">
                    <div class="text-center md:max-w-4/5 mx-auto">
                        <h2 v-in-viewport.once><span class="bgFill"><span class="textClip">{{ Approach.title
                                    }}</span></span>
                        </h2>
                    </div>
                    <div class="mt-8 lg:mt-16 text-center" v-html="$md.render(Approach.description)"> </div>

                    <div class="video-container">
                        <iframe class="mt-8 lg:mt-16" src="https://player.vimeo.com/video/702593566?h=584daa3463"
                            frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
        <!----------------------------------------------------------------------------------->

        <!---------------  Technical Stack -------------------------------------------------->
        <CsTechStack :data="{
            content: TechnicalStack,
            layout: 'cols-3',
        }" />
        <!----------------------------------------------------------------------------------->

        <!---------------- Team ------------------------------------------------------------->
        <CsTeam :data="{
            content: Team,
            layout: 'center-two-ele-in-grid'
        }" />
        <!----------------------------------------------------------------------------------->

        <!-------------- Featured Image 2---------------------------------------------------->
        <CsFeaturedImage :data="getSingleCsFeaturedImage2" />
        <!----------------------------------------------------------------------------------->

        <!--------------- Features  --------------------------------------------------------->
        <CsFeatures :data="{
            Features,
            layout: 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'
        }" />
        <!---------------------------------------------------------------------------------->

        <!--------------- The Result ------------------------------------------------------->
        <CsResult :data="Result" />
        <!---------------------------------------------------------------------------------->

        <!---------------------------FAQs--------------------------------------------------->
        <FAQs :payload="FAQs" />
        <!---------------------------------------------------------------------------------->

        <!------------------------------- Get in Touch with us------------------------------>
        <GetInTouchWithUs :data="{
            title: 'Get in Touch with us',
            isDarkSectionAtTop: true
        }" />
        <!---------------------------------------------------------------------------------->

    </div>
</template>

<script>

const loadData = function ({
    api,
    cacheVersion,
    errorCallback,
    version,
    path,
}) {
    return api
        .get(`cdn/stories${path}`, {
            version,
            resolve_links: 'story,url',
            resolve_relations: 'case-studies-container.case_studies,case_studies.case-study,case-studies-container.case-study,faqs-container.list_of_faqs',
            cv: cacheVersion,
        })
        .then((res) => {
            return res.data
        })
        .catch((res) => {
            if (!res.response) {
                errorCallback({
                    statusCode: 404,
                    message: 'Failed to receive content form api',
                })
            } else {
                errorCallback({
                    statusCode: res.response.status,
                    message: res.response.data,
                })
            }
        })
}

export default {

    asyncData(context) {
        // Check if we are in the editing mode
        let editMode = true
        if (
            context.query._storyblok ||
            context.isDev ||
            (typeof window !== 'undefined' &&
                window.localStorage.getItem('_storyblok_draft_mode'))
        ) {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('_storyblok_draft_mode', '1')
                if (window.location === window.parent.location) {
                    window.localStorage.removeItem('_storyblok_draft_mode')
                }
            }
            editMode = true
        }
        const version = editMode ? 'draft' : 'published'
        const path = context.route.path === '/' ? '/home' : context.route.path
        // Load the JSON from the API
        return loadData({
            version,
            api: context.app.$storyapi,
            errorCallback: context.error,
            path,
        })
    },


    head() {
        return {
            title: `${this.story.content.title}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `${this.story.content.description}`,
                },
                {
                    hid: 'og-type',
                    property: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: `${this.story.content.title}`,
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    property: 'og:description',
                    content: `${this.story.content.description}`,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: `${this.story.content.thumbnail.filename}`,
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: `/${this.story.full_slug}`,
                },
                // For Twitter
                {
                    hid: 't-type',
                    name: 'twitter:card',
                    content: `${this.story.content.thumbnail.filename}`,
                },
            ],
            script: [
                {
                    type: 'application/ld+json',
                    json: this.generateFaqSchema(),
                },
            ],
        }
    },


    computed: {
        getSingleCsHero() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'single-cs-hero';
            })
        },
        Brief() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'cs-fw-brief';
            })
        },
        Scope() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'cs-scope';
            })
        },
        getSingleCsFeaturedImage1() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'single-cs-featured-image-1';
            })
        },
        Approach() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'cs-approach_with_cards';
            })
        },
        TechnicalStack() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'cs-technical-stack';
            })
        },
        Team() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'cs_team';
            })
        },
        getSingleCsFeaturedImage2() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'single-cs-featured-image-2';
            })
        },
        Features() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'cs_features';
            })
        },
        Result() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'cs-result';
            })
        },
        FAQs() {
            return this.story.content.cs_full_details.find(function (obj) {
                return obj.component === 'faqs-container';
            })
        },
    },

    mounted() {
        this.$storybridge.on(['input', 'published', 'change'], (event) => {
            if (event.action === 'input') {
                if (event.story.id === this.story.id) {
                    this.story.content = event.story.content
                }
            } else if (!event.slugChanged) {
                window.location.reload()
            }
        })
    },

    methods: {
        generateFaqSchema() {
            return {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": this.FAQs.list_of_faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.content.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.content.answer
                    }
                }))
            };
        }
    }

}
</script>
