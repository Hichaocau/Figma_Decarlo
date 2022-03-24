// const liList = document.querySelectorAll('.ask__header-item')
// const aList = document.querySelectorAll('.ask__header-item a')

// liList.forEach(function(li, index) {
//     li.addEventListener('click', (e) => {
//         liList.forEach(function(li2) {
//             li2.classList.remove('ask__boxshadow')
//         })
//         li.classList.remove('ask__boxshadow')
//         aList.forEach(function(a, index) {
//             a.classList.remove('ask__active')
//         })
//         aList[index].classList.toggle('ask__active')

//         li.classList.toggle('ask__boxshadow')
//     })
// })

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

// tab ui
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active2");
const line = $(".line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active2").classList.remove("active2");
    $(".tab-pane.active2").classList.remove("active2");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active2");
    pane.classList.add("active2");
  };
});


