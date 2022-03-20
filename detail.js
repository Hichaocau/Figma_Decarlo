const number = document.querySelector('.detail__options-number span')
const minus = document.querySelector('.detail__options-minus')
const plus = document.querySelector('.detail__options-plus')

var i = 1;

function render() {
  number.innerHTML = i
}

render()


plus.addEventListener('click' , function(e) {
    i++;
    render()
})

minus.addEventListener('click' , function(e) {
    if(i != 0)
    i--
    render()
})


const heartWrap = document.querySelector('.detail__options-heart')
const heart = document.querySelector('.icon__fisrt')
const heartActive = document.querySelector('.icon__second')

heartWrap.addEventListener('click', () => {
    heart.classList.toggle('none')
    heartActive.classList.toggle('none')
})