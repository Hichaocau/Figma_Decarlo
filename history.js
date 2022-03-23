const videoShop2 = document.querySelector('.main__video_2')
const birthImg = document.querySelector('.birth__img')
const birthPlay = document.querySelector('.birth__img-detail img')

birthPlay.addEventListener('click', function () {
  videoShop2.style.zIndex = '2';
  videoShop2.play();
})