/* eslint-disable */

/*===============
===== HOME =====
===============*/

let home_card = document.querySelectorAll('.service-card-all')
let home_card_wrapper = document.getElementsByClassName('.home-card-wrapper')
let home_right_button = document.getElementById('button-right-on')
let home_left_button = document.getElementById('button-left-on')
let service_button = document.getElementById('service-button')
let service_link = document.getElementById('service-link')
let home_card_middle = Math.floor(home_card.length / 2)
let number = 1

// clone first
let home_card_last = home_card[home_card_middle]
let home_card_clone_last = home_card_last.cloneNode(true)

if (home_card.length % 2 == 0) {
  home_card_wrapper.appendChild(home_card_clone_last)
  home_card_wrapper.style.transform = 'translateX(45px)'
}

// change href
service_button.href = home_card[home_card_middle].children[3].href
service_link.href = home_card[home_card_middle].children[3].href

home_card.forEach((el, num) => {
  el.children[1].classList.add('hidden')
  el.children[2].classList.add('hidden')

  if (num < home_card_middle - 2) {
    el.classList.add('service-card-left')
  } else if (num > home_card_middle + 2) {
    el.classList.add('service-card-right')
  } else {
    el.classList.remove('home-card-right', 'home-card-left')
  }
})

home_card_wrapper.style.transition = 'transform 300ms'

// middle card
home_card[home_card_middle].classList.add(
  'service-card-main',
  'bg-b-black',
  'bg-opacity-70'
)
home_card[home_card_middle].classList.remove('service-card')

home_card[home_card_middle].children[0].classList.add('hidden')
home_card[home_card_middle].children[1].classList.remove('hidden')
home_card[home_card_middle].children[2].classList.remove('hidden')

// middle card + 1 && -1
home_card[home_card_middle - 1].classList.add(
  'service-card-main-between',
  'service-card-left-1'
)
home_card[home_card_middle - 1].classList.remove('service-card')
home_card[home_card_middle + 1].classList.add(
  'service-card-main-between',
  'service-card-right-1'
)
home_card[home_card_middle + 1].classList.remove('service-card')

// middle card + 2 && -2
home_card[home_card_middle - 2].classList.add(
  'service-card-main-between-2',
  'service-card-left-2'
)
home_card[home_card_middle - 2].classList.remove('service-card')
home_card[home_card_middle + 2].classList.add(
  'service-card-main-between-2',
  'service-card-right-2'
)
home_card[home_card_middle + 2].classList.remove('service-card')

// click right
home_right_button.addEventListener('click', function () {
  number = 1
  home_card = document.querySelectorAll('.service-card-all')
  home_card_wrapper = document.querySelector('.home-card-wrapper')

  if (window.screen.width <= '1024') {
    home_card_wrapper.style.transform = 'translateX(' + -320 * number + 'px)'
  } else {
    home_card_wrapper.style.transform = 'translateX(' + -347 * number + 'px)'
  }

  setTimeout(() => {
    home_card_wrapper.appendChild(home_card_wrapper.firstElementChild)
    home_card_wrapper.style.transform = 'translateX(0)'

    home_card_wrapper.style.transition = 'none'
    home_card_wrapper.lastChild.classList.add('service-card-right')
    home_card_wrapper.lastChild.classList.remove('service-card-left')

    setTimeout(() => {
      home_card_wrapper.style.transition = 'transform 300ms'
    }, 100)
  }, 300.1)

  home_card.forEach((el, num) => {
    el.classList.add('service-card')
    el.classList.remove(
      'service-card-main-between-2',
      'service-card-left-2',
      'service-card-right-2',
      'service-card-main'
    )
    el.children[1].classList.add('hidden')
    el.children[2].classList.add('hidden')

    if (num < home_card_middle + number - 2) {
      el.classList.add('service-card-left')
      el.classList.remove('service-card-right')
    } else if (num > home_card_middle + number + 2) {
      el.classList.add('service-card-right')
      el.classList.remove('service-card-left')
    } else {
      el.classList.remove('service-card-main')
    }
  })

  // change href
  service_button.href = home_card[home_card_middle + 1].children[3].href
  service_link.href = home_card[home_card_middle + 1].children[3].href

  // middle card
  home_card[home_card_middle + number].classList.add(
    'service-card-main',
    'bg-b-black',
    'bg-opacity-70'
  )
  home_card[home_card_middle + number].classList.remove(
    'service-card',
    'service-card-right-1',
    'service-card-main-between'
  )

  home_card[home_card_middle + number].children[0].classList.add('hidden')
  home_card[home_card_middle + number].children[1].classList.remove('hidden')
  home_card[home_card_middle + number].children[2].classList.remove('hidden')

  // middle card + 1 && -1
  home_card[home_card_middle + (number - 1)].classList.add(
    'service-card-main-between',
    'service-card-left-1'
  )
  home_card[home_card_middle + (number - 1)].classList.remove(
    'service-card',
    'service-card-main',
    'service-card-main-between-2',
    'bg-b-black',
    'bg-opacity-70'
  )
  home_card[home_card_middle + (number + 1)].classList.add(
    'service-card-main-between',
    'service-card-right-1'
  )
  home_card[home_card_middle + (number + 1)].classList.remove(
    'service-card',
    'service-card-main-between-2',
    'service-card-right-2'
  )

  home_card[home_card_middle + number + 1].children[0].classList.remove(
    'hidden'
  )
  home_card[home_card_middle + number - 1].children[0].classList.remove(
    'hidden'
  )

  // middle card + 2 && -2
  home_card[home_card_middle + number - 2].classList.add(
    'service-card-main-between-2',
    'service-card-left-2'
  )
  home_card[home_card_middle + number - 2].classList.remove(
    'service-card',
    'service-card-main-between',
    'service-card-left-1'
  )
  home_card[home_card_middle + number + 2].classList.add(
    'service-card-main-between-2',
    'service-card-right-2'
  )
  home_card[home_card_middle + number + 2].classList.remove(
    'service-card',
    'service-card-right',
    'service-card-main-between',
    'service-card-left-1'
  )

  home_card[home_card_middle + number + 2].children[0].classList.remove(
    'hidden'
  )
  home_card[home_card_middle + number - 2].children[0].classList.remove(
    'hidden'
  )
})

// click left
home_left_button.addEventListener('click', function () {
  number = -1

  home_card = document.querySelectorAll('.service-card-all')
  home_card_wrapper = document.querySelector('.home-card-wrapper')

  if (window.screen.width <= '1024') {
    home_card_wrapper.style.transform = 'translateX(' + -320 * number + 'px)'
  } else {
    home_card_wrapper.style.transform = 'translateX(' + -347 * number + 'px)'
  }

  setTimeout(() => {
    home_card_wrapper.insertBefore(
      home_card_wrapper.lastElementChild,
      home_card_wrapper.firstChild
    )
    home_card_wrapper.style.transform = 'translateX(0)'

    home_card_wrapper.style.transition = 'none'
    home_card_wrapper.firstChild.classList.add('service-card-left')
    home_card_wrapper.firstChild.classList.remove('service-card-right')
    setTimeout(() => {
      home_card_wrapper.style.transition = 'transform 300ms'
    }, 100)
  }, 300.1)

  home_card.forEach((el, num) => {
    el.classList.add('service-card')
    el.classList.remove(
      'service-card-main-between-2',
      'service-card-left-2',
      'service-card-right-2'
    )
    el.children[1].classList.add('hidden')
    el.children[2].classList.add('hidden')

    if (num < home_card_middle + number - 2) {
      el.classList.add('service-card-left')
      el.classList.remove('service-card-right')
    } else if (num > home_card_middle + number + 2) {
      el.classList.add('service-card-right')
      el.classList.remove('service-card-left')
    } else {
      el.classList.remove('home-card-right', 'home-card-left')
    }
  })

  // change href
  service_button.href = home_card[home_card_middle - 1].children[3].href
  service_link.href = home_card[home_card_middle - 1].children[3].href

  // middle card
  home_card[home_card_middle + number].classList.add(
    'service-card-main',
    'bg-b-black',
    'bg-opacity-70'
  )
  home_card[home_card_middle + number].classList.remove(
    'service-card',
    'service-card-left-1',
    'service-card-main-between'
  )

  home_card[home_card_middle + number].children[0].classList.add('hidden')
  home_card[home_card_middle + number].children[1].classList.remove('hidden')
  home_card[home_card_middle + number].children[2].classList.remove('hidden')

  // middle card + 1 && -1
  home_card[home_card_middle + (number - 1)].classList.add(
    'service-card-main-between',
    'service-card-left-1'
  )
  home_card[home_card_middle + (number - 1)].classList.remove(
    'service-card',
    'service-card-main-between-2'
  )
  home_card[home_card_middle + (number + 1)].classList.add(
    'service-card-main-between',
    'service-card-right-1'
  )
  home_card[home_card_middle + (number + 1)].classList.remove(
    'service-card',
    'service-card-main',
    'service-card-main-between-2',
    'service-card-right-2',
    'bg-b-black',
    'bg-opacity-70'
  )

  home_card[home_card_middle + number + 1].children[0].classList.remove(
    'hidden'
  )
  home_card[home_card_middle + number - 1].children[0].classList.remove(
    'hidden'
  )

  // middle card + 2 && -2
  home_card[home_card_middle + number - 2].classList.add(
    'service-card-main-between-2',
    'service-card-left-2'
  )
  home_card[home_card_middle + number - 2].classList.remove(
    'service-card',
    'service-card-left'
  )
  home_card[home_card_middle + number + 2].classList.add(
    'service-card-main-between-2',
    'service-card-right-2'
  )
  home_card[home_card_middle + number + 2].classList.remove(
    'service-card',
    'service-card-left',
    'service-card-main-between',
    'service-card-right-1'
  )

  home_card[home_card_middle + number + 2].children[0].classList.remove(
    'hidden'
  )
  home_card[home_card_middle + number - 2].children[0].classList.remove(
    'hidden'
  )
})

// IMAGES EXPERT DEV SECTION
let home_image_expert = document.getElementById('home-expert')
let home_elementHeight = home_image_expert.clientHeight - 300

// listen for scroll event and call animate function
document.addEventListener('scroll', animate)

// check if element is in view
function inView() {
  // get window height
  let windowHeight = window.innerHeight

  // get number of pixels that the document is scrolled
  let scrollY = window.scrollY || window.pageYOffset

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  let scrollPosition = scrollY + windowHeight

  // get element position (distance from the top of the page to the bottom of the element)
  let elementPosition =
    home_image_expert.getBoundingClientRect().top + scrollY + home_elementHeight

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true
  }

  return false
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
    let image = home_image_expert.children[0].children[3]

    // element is in view, add class to element
    // mobile view
    if (window.screen.width <= '1024') {
      image.children[0].classList.add('-translate-y-10')
      image.children[0].classList.remove('-translate-y-0')

      image.children[1].classList.add('translate-x-16', 'translate-y-5')
      image.children[1].classList.remove('-translate-y-0', '-translate-x-0')

      image.children[2].classList.add('translate-y-12', '-translate-x-14')
      image.children[2].classList.remove('translate-y-0', '-translate-x-0')

      // desktop view
    } else {
      image.children[0].classList.add('-translate-y-20')
      image.children[0].classList.remove('-translate-y-0')

      image.children[1].classList.add('translate-x-36', 'translate-y-10')
      image.children[1].classList.remove('-translate-y-0', '-translate-x-0')

      image.children[2].classList.add('-translate-x-28', 'translate-y-24')
      image.children[2].classList.remove('-translate-x-0', 'translate-y-0')
    }
  }
}

// CLIENT CARD
const servicesCardWrapper = document.getElementById('client-logo-wrapper')
const servicesCardParent = servicesCardWrapper.querySelector(
  '.client-logo-parent'
)
const servicesBannerLogo = document.getElementById('services-banner-logo')
const servicesBannerText = document.getElementById('services-banner-text')
const linkButtonToClient = document.querySelector('.link-to-client')

// run every 3s
setInterval(() => {
  // move the logo backwards
  servicesCardParent.appendChild(servicesCardParent.firstElementChild)

  // move text and logo
  servicesCardParent.style.transition = 'none'
  servicesCardParent.style.transform = 'translate(0)'
  servicesBannerText.children[0].classList.add('translate-y-0')
  servicesBannerText.children[0].classList.remove('translate-y-10')
  servicesBannerLogo.children[0].classList.add('translate-y-0')
  servicesBannerLogo.children[0].classList.remove('translate-y-20')

  // clone alt, img src, link
  servicesBannerText.children[0].innerHTML =
    servicesCardParent.children[
      Math.floor(servicesCardParent.children.length / 2)
    ].children[0].alt
  servicesBannerLogo.children[0].src =
    servicesCardParent.children[
      Math.floor(servicesCardParent.children.length / 2)
    ].children[0].src
  linkButtonToClient.href =
    servicesCardParent.children[
      Math.floor(servicesCardParent.children.length / 2)
    ].children[1].href

  setTimeout(() => {
    // banner text
    servicesBannerText.children[0].classList.remove('translate-y-0')
    servicesBannerText.children[0].classList.add('translate-y-10')

    // opacity logo
    servicesCardParent.children[
      Math.floor(servicesCardParent.children.length / 2)
    ].classList.add('opacity-30')
    servicesCardParent.children[
      Math.floor(servicesCardParent.children.length / 2)
    ].classList.remove('opacity-100')
    servicesCardParent.children[
      Math.floor(servicesCardParent.children.length / 2) + 1
    ].classList.remove('opacity-30')
    servicesCardParent.children[
      Math.floor(servicesCardParent.children.length / 2) + 1
    ].classList.add('opacity-100')

    // move logo
    servicesBannerLogo.children[0].classList.remove('translate-y-0')
    servicesBannerLogo.children[0].classList.add('translate-y-20')

    if (window.screen.width <= '1024') {
      servicesCardParent.style.transform = 'translate(-176px)'
    } else {
      servicesCardParent.style.transform = 'translate(-256px)'
    }
    servicesCardParent.style.transition = 'transform 1.5s'
  }, 1500)
}, 3000)
