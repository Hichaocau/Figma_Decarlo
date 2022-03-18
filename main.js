const iconHeader = document.querySelector('.header__menu i')
const headerNavbar = document.querySelector('.header__navbar')

iconHeader.addEventListener('click', () => {
  headerNavbar.classList.toggle('active')
  iconHeader.classList.toggle('fa-xmark')
})









const storyWrap = document.querySelector('.story__list-img--wrap')
const iconPlayShop = document.querySelector('.story__play')
const videoShop = document.querySelector('.main__video')

iconPlayShop.addEventListener('click', function () {
  storyWrap.classList.add('none')
  videoShop.setAttribute('autoplay', 'true')
  videoShop.setAttribute('loop', 'true')
  videoShop.classList.remove('none')
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
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 741,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false //ẩn mũi tên
            }
          }
        ],
  });
});


