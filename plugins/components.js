import Vue from 'vue'
import Markdown from '~/components/Sections/Markdown.vue'
import Page from '~/components/PostTypes/Page.vue'
import WebinarContainer from '~/components/Sections/WebinarContainer.vue'
import BlogContainer from '~/components/Sections/BlogContainer.vue'
import WorkContainer from '~/components/Sections/WorkContainer.vue'
import Webinar from '~/components/PostTypes/Webinar.vue'
import Blog from '~/components/PostTypes/Blog.vue'


import ServiceCard from '~/components/GeneralCards/ServiceCard.vue'
import ServiceCtaCard from '~/components/GeneralCards/ServiceCtaCard.vue'

import ServiceLargeCard from '~/components/GeneralCards/ServiceLargeCard.vue'
import CaseStudyCard from '~/components/GeneralCards/CaseStudyCard.vue'
import TestimonialCard from '~/components/GeneralCards/TestimonialCard.vue'
import TeamSlidingCard from '~/components/GeneralCards/TeamSlidingCard.vue'

import PageHeroWithAnimatedTitle from '~/components/Sections/PageHeroWithAnimatedTitle.vue'
import TestimonialsConatiner from '~/components/Sections/TestimonialsConatiner.vue'
import CaseStudiesContainer from '~/components/Sections/CaseStudiesContainer.vue'

import FeaturedCTA from '~/components/Sections/FeaturedCTA.vue'
import GeneralCTA from '~/components/Sections/GeneralCTA.vue'



import GetInTouchWithUs from '~/components/Sections/GetInTouchWithUs.vue'
import FeaturedCards3sInRow from '~/components/Sections/FeaturedCards3sInRow.vue'



// General Cards
Vue.component('ServiceCtaCard', ServiceCtaCard)
Vue.component('ServiceCard', ServiceCard)
Vue.component('ServiceLargeCard', ServiceLargeCard)
Vue.component('CaseStudyCard', CaseStudyCard)
Vue.component('TestimonialCard', TestimonialCard)
Vue.component('TeamSlidingCard', TeamSlidingCard)

// Containers
Vue.component('TestimonialsConatiner', TestimonialsConatiner)
Vue.component('CaseStudiesContainer', CaseStudiesContainer)

// Sections
Vue.component('PageHeroWithAnimatedTitle', PageHeroWithAnimatedTitle)
Vue.component('GetInTouchWithUs', GetInTouchWithUs)
Vue.component('GeneralCTA', GeneralCTA)
Vue.component('FeaturedCTA', FeaturedCTA)
Vue.component('FeaturedCards3sInRow', FeaturedCards3sInRow)




Vue.component('Markdown', Markdown)
Vue.component('Page', Page)
Vue.component('WebinarContainer', WebinarContainer)
Vue.component('BlogContainer', BlogContainer)
Vue.component('WorkContainer', WorkContainer)
Vue.component('Webinar', Webinar)
Vue.component('Blog', Blog)