const swiper = new Swiper('.image-slider', {
  // стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // булети,пагинація
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
   //    renderFraction: function (currentClass, totalClass) {
   //        return 'Фото <span class="' + currentClass + '"></span>' +
   //            ' из '
   //            + '<span class="' + totalClass + '"></span>';
   //    }
  },
    //scroll

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  simulateTouch: false,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,

  hashNavigation: {
    watchState: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: false,
  },
  mousewheel: {
    sensitivity: 1,
  },

  autoHeight: false,

  slidesPerView: 1,

  slidesPerGroup: 1,

  watchOverflow: false,

  //spaceBetween: 10,

  loop: true,

  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  speed: 1000,

  // effect:'slide',

  // effect: 'fade',

  //   effect: 'flip',
  //   flipEffect: {
  //       slideShadows: true,
  //       limitRotation: true
  //   },

  effect: 'cube',

    cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },

  // effect: 'coverflow',
  // coverFlowEffect: {
  //   rotate: 10,
  //   stretch: 30,
  //   slideShadows: false,
  // },

  //  breakpoints: {
  //          '@.075': {
  //             slidesPerView: 1,

  //         },

  //         '@1.00': {
  //              slidesPerView: 1,
  //         },

  //          '@01.50': {
  //              slidesPerView: 1,
  //          },
  //     },
  breakpoints: {
    320: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 1,
      
    },
    992: {
      slidesPerView: 1,
      
      
    },
  },

  preloadImages: false,
  lazy: true,

  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});

const onSliderOpen = document.querySelector('.slider-open');
const wrapper = document.querySelector('.wrapper');

onSliderOpen.addEventListener('click', toogleSliderHandler);
wrapper.addEventListener('click', onBackdropClick);

export function toogleSliderHandler() {
  window.addEventListener('keydown', onEscKeyPress);
  wrapper.classList.toggle('hide');
}

export function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    toogleSliderHandler();
    console.log('click');
  }
}

export function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    toogleSliderHandler();
  }
}

//  let sliderBlock = document.querySelector('.image-slider');
// //  let qSlides = myImageSlider.slides.length;

//  sliderBlock.addEventListener('mouseenter', function (e) {
//      myImageSlider.params.autoplay.disableOnInteraction = false;
//      myImageSlider.params.autoplay.delay = 500;
//      myImageSlider.autoplay.start();
// });

// sliderBlock.addEventListener('mouseleave', function (e) {
//     myImageSlider.autoplay.stop();
//  });

export default swiper;