const heartWrap = document.querySelectorAll('.featured__list-item--img')
const heart = document.querySelectorAll('.icon__fisrt')
const heartActive = document.querySelectorAll('.icon__second')


heartWrap.forEach(function (heartItem, index) {
  heartItem.addEventListener('click', () => {
      heart[index].classList.toggle('none')
      heartActive[index].classList.toggle('none')
  })
})
