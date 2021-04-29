/* eslint-disable */

/*===============
===== HOME =====
===============*/

// CARD SLIDER
let home_card = document.querySelectorAll('.home-card')
let home_card_wrapper = document.querySelector('.home-card-wrapper')
let home_right_button = document.getElementById('button-right-on')
let home_left_button = document.getElementById('button-left-on')
let home_right_button_off = document.getElementById('button-right-off')
let home_left_button_off = document.getElementById('button-left-off')
let home_card_middle = Math.floor(home_card.length / 2)
let number = 0

// clone first
let home_card_last = home_card[home_card.length - 1]
let home_card_clone_last = home_card_last.cloneNode(true)

if (home_card.length % 2 == 0) {
  home_card_wrapper.appendChild(home_card_clone_last)
}

home_card.forEach((el, num) => {
  el.classList.add('scale-70')
  el.children[1].classList.add('hidden')
  el.children[2].classList.add('hidden')

  if (num < home_card_middle - 2) {
    el.classList.add('home-card-left')
    el.classList.remove('home-card-right')
  } else if (num > home_card_middle + 2) {
    el.classList.add('home-card-right')
    el.classList.remove('home-card-left')
  } else {
    el.classList.remove('home-card-right', 'home-card-left')
  }
})

// middle card
home_card[home_card_middle + number].classList.add('shadow-home-card')
home_card[home_card_middle].classList.add('scale-100', 'border-white')
home_card[home_card_middle].children[0].classList.add('hidden')

home_card[home_card_middle].classList.remove('scale-70', 'border-black')
home_card[home_card_middle].children[1].classList.remove('hidden')
home_card[home_card_middle].children[2].classList.remove('hidden')

// middle card + 1 && -1
home_card[home_card_middle + 1].classList.add('scale-90')
home_card[home_card_middle - 1].classList.add('scale-90')

home_card[home_card_middle + 1].classList.remove('scale-70')
home_card[home_card_middle - 1].classList.remove('scale-70')

home_card[home_card_middle - 1].style.marginRight =
  'calc((288px - (288px * 0.9)) * -1)'
home_card[home_card_middle + 1].style.marginLeft =
  'calc((288px - (288px * 0.9)) * -1)'

// middle card + 2 && -2
home_card[home_card_middle + 2].classList.add('scale-80')
home_card[home_card_middle - 2].classList.add('scale-80')

home_card[home_card_middle + 2].classList.remove('scale-70')
home_card[home_card_middle - 2].classList.remove('scale-70')

home_card[home_card_middle - 2].style.marginRight =
  'calc((288px - (288px * 0.8)) * -1)'
home_card[home_card_middle + 2].style.marginLeft =
  'calc((288px - (288px * 0.8)) * -1)'

// click right
home_right_button.addEventListener('click', function () {
  number++

  if (window.screen.width <= '1024') {
    home_card_wrapper.style.transform = 'translateX(' + -297.5 * number + 'px)'
  } else {
    home_card_wrapper.style.transform = 'translateX(' + -266 * number + 'px)'
  }

  home_card.forEach((el, num) => {
    el.classList.remove('shadow-home-card')
    el.classList.add('scale-70')
    el.children[1].classList.add('hidden')
    el.children[2].classList.add('hidden')

    if (num < home_card_middle + number - 2) {
      el.style.marginLeft = 0
      el.classList.add('home-card-left')
      el.classList.remove('home-card-right', 'scale-80')
      el.style.marginRight = 'calc((288px - (288px * 0.7)) * -1)'
    } else if (num > home_card_middle + number + 2) {
      el.style.marginRight = 0
      el.classList.add('home-card-right')
      el.classList.remove('home-card-left', 'scale-80')
      el.style.marginLeft = 'calc((288px - (288px * 0.7)) * -1)'
    } else {
      el.classList.remove('home-card-right', 'home-card-left')
    }
  })

  // middle card
  home_card[home_card_middle + number].classList.add('shadow-home-card')
  home_card[home_card_middle + number].classList.add(
    'scale-100',
    'border-white'
  )
  home_card[home_card_middle + number].classList.remove(
    'border-black',
    'scale-70',
    'scale-90'
  )

  home_card[home_card_middle + number].children[0].classList.add('hidden')
  home_card[home_card_middle + number].children[1].classList.remove('hidden')
  home_card[home_card_middle + number].children[2].classList.remove('hidden')

  // middle card + 1 && -1
  home_card[home_card_middle + number].style.marginRight = 0
  home_card[home_card_middle + number].style.marginLeft = 0

  home_card[home_card_middle + number + 1].children[0].classList.remove(
    'hidden'
  )
  home_card[home_card_middle + number - 1].children[0].classList.remove(
    'hidden'
  )

  home_card[home_card_middle + number + 1].classList.add('scale-90')
  home_card[home_card_middle + number - 1].classList.add(
    'border-black',
    'scale-90'
  )

  home_card[home_card_middle + number + 1].classList.remove(
    'scale-70',
    'scale-80',
    'scale-100'
  )
  home_card[home_card_middle + number - 1].classList.remove(
    'scale-70',
    'scale-80',
    'scale-100',
    'border-white'
  )

  home_card[home_card_middle + number + 1].style.marginLeft =
    'calc((288px - (288px * 0.9)) * -1)'
  home_card[home_card_middle + number - 1].style.marginRight =
    'calc((288px - (288px * 0.9)) * -1)'

  // middle card + 2 && -2
  home_card[home_card_middle + number + 2].children[0].classList.remove(
    'hidden'
  )
  home_card[home_card_middle + number - 2].children[0].classList.remove(
    'hidden'
  )

  home_card[home_card_middle + number + 2].classList.add('scale-80')
  home_card[home_card_middle + number - 2].classList.add('scale-80')

  home_card[home_card_middle + number + 2].classList.remove(
    'scale-90',
    'scale-70'
  )
  home_card[home_card_middle + number - 2].classList.remove(
    'scale-90',
    'scale-70'
  )

  home_card[home_card_middle + number + 2].style.marginRight = 0
  home_card[home_card_middle + number - 2].style.marginLeft = 0

  home_card[home_card_middle + number - 2].style.marginRight =
    'calc((288px - (288px * 0.8)) * -1)'
  home_card[home_card_middle + number + 2].style.marginLeft =
    'calc((288px - (288px * 0.8)) * -1)'

  // hidden card
  home_card[0].children[0].classList.add('hidden')
  home_card[0].children[2].classList.add('hidden')
  home_card[1].children[0].classList.add('hidden')
  home_card[1].children[2].classList.add('hidden')
  home_card[home_card.length - 1].children[0].classList.add('hidden')
  home_card[home_card.length - 1].children[2].classList.add('hidden')
  home_card[home_card.length - 2].children[0].classList.add('hidden')
  home_card[home_card.length - 2].children[2].classList.add('hidden')

  // change button left
  if (home_card_middle + number == 2) {
    home_left_button_off.classList.remove('hidden')
    home_left_button.classList.add('hidden')
  } else {
    home_left_button_off.classList.add('hidden')
    home_left_button.classList.remove('hidden')
  }

  // change button right
  if (home_card_middle + number == home_card.length - 3) {
    home_right_button_off.classList.remove('hidden')
    home_right_button.classList.add('hidden')
  } else {
    home_right_button_off.classList.add('hidden')
    home_right_button.classList.remove('hidden')
  }
})

// click left
home_left_button.addEventListener('click', function () {
  number--

  if (window.screen.width <= '1024') {
    home_card_wrapper.style.transform = 'translateX(' + -297.5 * number + 'px)'
  } else {
    home_card_wrapper.style.transform = 'translateX(' + -266 * number + 'px)'
  }

  home_card.forEach((el, num) => {
    el.classList.remove('shadow-home-card')
    el.classList.add('scale-70')
    el.children[1].classList.add('hidden')
    el.children[2].classList.add('hidden')

    if (num < home_card_middle + number - 2) {
      el.style.marginLeft = 0
      el.classList.add('home-card-left')
      el.classList.remove('home-card-right', 'scale-80')
      el.style.marginRight = 'calc((288px - (288px * 0.7)) * -1)'
    } else if (num > home_card_middle + number + 2) {
      el.style.marginRight = 0
      el.classList.add('home-card-right')
      el.classList.remove('home-card-left', 'scale-80')
      el.style.marginLeft = 'calc((288px - (288px * 0.7)) * -1)'
    } else {
      el.classList.remove('home-card-right', 'home-card-left')
    }
  })

  // middle card
  home_card[home_card_middle + number].classList.add('shadow-home-card')
  home_card[home_card_middle + number].style.marginRight = 0
  home_card[home_card_middle + number].style.marginLeft = 0

  home_card[home_card_middle + number].classList.add(
    'scale-100',
    'border-white'
  )
  home_card[home_card_middle + number].children[0].classList.add('hidden')

  home_card[home_card_middle + number].classList.remove(
    'scale-70',
    'scale-90',
    'border-black'
  )
  home_card[home_card_middle + number].children[1].classList.remove('hidden')
  home_card[home_card_middle + number].children[2].classList.remove('hidden')

  // middle card + 1 && -1
  home_card[home_card_middle + number + 1].children[0].classList.remove(
    'hidden'
  )
  home_card[home_card_middle + number - 1].children[0].classList.remove(
    'hidden'
  )

  home_card[home_card_middle + number + 1].classList.add(
    'scale-90',
    'border-black'
  )
  home_card[home_card_middle + number - 1].classList.add('scale-90')

  home_card[home_card_middle + number + 1].classList.remove(
    'scale-70',
    'scale-80',
    'scale-100',
    'border-white'
  )
  home_card[home_card_middle + number - 1].classList.remove(
    'scale-70',
    'scale-80',
    'scale-100'
  )

  home_card[home_card_middle + number - 1].style.marginRight =
    'calc((288px - (288px * 0.9)) * -1)'
  home_card[home_card_middle + number + 1].style.marginLeft =
    'calc((288px - (288px * 0.9)) * -1)'

  // middle card + 2 && -2
  home_card[home_card_middle + number + 2].children[0].classList.remove(
    'hidden'
  )
  home_card[home_card_middle + number - 2].children[0].classList.remove(
    'hidden'
  )

  home_card[home_card_middle + number + 2].classList.add('scale-80')
  home_card[home_card_middle + number - 2].classList.add('scale-80')

  home_card[home_card_middle + number + 2].classList.remove(
    'scale-70',
    'scale-90'
  )
  home_card[home_card_middle + number - 2].classList.remove(
    'scale-70',
    'scale-90'
  )

  home_card[home_card_middle + number + 2].style.marginRight = 0
  home_card[home_card_middle + number - 2].style.marginLeft = 0

  home_card[home_card_middle + number - 2].style.marginRight =
    'calc((288px - (288px * 0.8)) * -1)'
  home_card[home_card_middle + number + 2].style.marginLeft =
    'calc((288px - (288px * 0.8)) * -1)'

  // hidden card
  home_card[0].children[0].classList.add('hidden')
  home_card[0].children[2].classList.add('hidden')
  home_card[1].children[0].classList.add('hidden')
  home_card[1].children[2].classList.add('hidden')
  home_card[home_card.length - 1].children[0].classList.add('hidden')
  home_card[home_card.length - 1].children[2].classList.add('hidden')
  home_card[home_card.length - 2].children[0].classList.add('hidden')
  home_card[home_card.length - 2].children[2].classList.add('hidden')

  // change button
  if (home_card_middle + number == 2) {
    home_left_button_off.classList.remove('hidden')
    home_left_button.classList.add('hidden')
  } else {
    home_left_button_off.classList.add('hidden')
    home_left_button.classList.remove('hidden')
  }

  if (home_card_middle + number == home_card.length - 3) {
    home_right_button_off.classList.remove('hidden')
    home_right_button.classList.add('hidden')
  } else {
    home_right_button_off.classList.add('hidden')
    home_right_button.classList.remove('hidden')
  }
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
