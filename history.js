const videoShop2 = document.querySelector('.main__video_2')
const birthImg = document.querySelector('.birth__img')
const birthPlay = document.querySelector('.birth__img-detail img')

birthPlay.addEventListener('click', function () {
  birthImg.classList.add('none')
  videoShop2.setAttribute('autoplay', 'true')
  videoShop2.classList.remove('none')
})