//  click +- 1
function clickNumber(){
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
}
clickNumber()

// click button heart
function clickBtnHeart(){
    const heartWrap = document.querySelector('.detail__options-heart')
    const heart = document.querySelector('.icon__fisrt')
    const heartActive = document.querySelector('.icon__second')
    
    heartWrap.addEventListener('click', () => {
        heart.classList.toggle('none')
        heartActive.classList.toggle('none')
    })
}
clickBtnHeart()

// click change img
function changeImage(){
    const imgFeature = document.querySelector('.detail__list-img img')
    const listImage = document.querySelectorAll('.detail__list-scroll .row img')
    const prevBtn = document.querySelector('.detail__arrow-item--prev img')
    const nextBtn = document.querySelector('.detail__arrow-item--next img')
    
    var currentIndex = 0;
    
    function updateImage(index){
        currentIndex = index;
    
        // remove all border active
        listImage.forEach(image => {
            image.classList.remove('detail__scroll-item')
        })
        
        imgFeature.src = listImage[index].getAttribute('src')
        listImage[index].classList.add('detail__scroll-item')
    }
    
    // click image
    listImage.forEach((image , index) => {  
        image.addEventListener('click', (e) => {
            updateImage(index)
        })
    })
    
    // click prevBtn
    prevBtn.addEventListener('click', ()=>{
        if(currentIndex === 0){
            currentIndex = listImage.length - 1;
        }
        else{
            currentIndex--    
        }
        updateImage(currentIndex)
    })
    
    // click nextBtn
    nextBtn.addEventListener('click', ()=>{
        if(currentIndex === listImage.length - 1){
            currentIndex = 0;
        }
        else{
            currentIndex++  
        }
        updateImage(currentIndex)
    })
}
changeImage()


// // click active border
// function activeBorder(){
//     const listLiDetail = document.querySelectorAll('.detail__product-info--header li')
    
//     listLiDetail.forEach( (liItem, index) => {
//         liItem.addEventListener('click', ()=>{
//             listLiDetail.forEach( (liItem2, index) =>{
//                 liItem2.classList.remove('detail__product-info--header-active')
//             })
//             liItem.classList.add('detail__product-info--header-active')
//         })
//     })
// }
// activeBorder()

// click active heart
function activeHeart(){
   
    const heartWrap = document.querySelectorAll('.featured__list-item--img')
    const heart = document.querySelectorAll('.icon__fisrt')
    const heartActive = document.querySelectorAll('.icon__second')
    
    
    heartWrap.forEach(function (heartItem, index) {
      heartItem.addEventListener('click', () => {
          heart[index + 1].classList.toggle('none')
          heartActive[index + 1].classList.toggle('none')
      })
    })
    
}
activeHeart()

// tab ui 
function tabUi(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    const tabActive = $(".tab-item.active3");
    const line = $(".tabs .line");

    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";

    tabs.forEach((tab, index) => {
        const pane = panes[index];

    tab.onclick = function () {
        $(".tab-item.active3").classList.remove("active3");
        $(".tab-pane.active3").classList.remove("active3");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active3");
        pane.classList.add("active3");
        };
    });
}

tabUi();