const iconHeader = document.querySelector('.header__menu i')
const headerNavbar = document.querySelector('.header__navbar')

iconHeader.addEventListener('click', () => {
  headerNavbar.classList.toggle('active')
  iconHeader.classList.toggle('fa-xmark')
})


// khởi tạo slick slider
$(document).ready(function(){
  $('.slider__wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: false, //dấu chấm dưới slider css: slick-dots
      // arrows: false, //ẩn previous/next
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            }
          },
          {
            breakpoint: 741,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              infinite: false,
              dots: false,
            }
          }
        ],
  });
});


const storyWrap = document.querySelector('.story__list-img--wrap')
const iconPlayShop = document.querySelector('.story__play')
const videoShop = document.querySelector('.main__video')

iconPlayShop.addEventListener('click', function () {
  storyWrap.classList.add('none')
  videoShop.setAttribute('autoplay', 'true')
  videoShop.classList.remove('none')
})



const heartWrap = document.querySelectorAll('.featured__list-item--img')
const heart = document.querySelectorAll('.icon__fisrt')
const heartActive = document.querySelectorAll('.icon__second')


heartWrap.forEach(function (heartItem, index) {
  heartItem.addEventListener('click', () => {
      heart[index].classList.toggle('none')
      heartActive[index].classList.toggle('none')
  })
})

const itemDown = document.querySelector('.header__item-down-2-wrap')
const menuDown = document.querySelector('.menu__down-2')

itemDown.addEventListener('click', () => {
  menuDown.classList.toggle('menu__down-2--active')
})

