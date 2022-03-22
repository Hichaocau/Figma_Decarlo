const liList = document.querySelectorAll('.ask__header-item')
const aList = document.querySelectorAll('.ask__header-item a')

liList.forEach(function(li, index) {
    li.addEventListener('click', (e) => {
        liList.forEach(function(li2) {
            li2.classList.remove('ask__boxshadow')
        })
        li.classList.remove('ask__boxshadow')
        aList.forEach(function(a, index) {
            a.classList.remove('ask__active')
        })
        aList[index].classList.toggle('ask__active')

        li.classList.toggle('ask__boxshadow')
    })
})

const askList = document.querySelectorAll('.ask__form-detail--item')
const iconList = document.querySelectorAll('.ask__form-detail--item i')
const solutionList = document.querySelectorAll('.ask__form-info')

askList.forEach(function(askItem, index) {
    askItem.addEventListener('click', () => {
        if(iconList[index].classList.contains('fa-plus')){
            iconList[index].classList.remove('fa-plus')
            iconList[index].classList.add('fa-minus')
    
            solutionList[index].style.height = '490px'
        }
        else{
            iconList[index].classList.add('fa-plus')
            iconList[index].classList.remove('fa-minus')
    
            solutionList[index].style.height = '0'
        }

    })
})



