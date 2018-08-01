"use strict";
var carousel;
var carouselInner;
var carouselItems;

var activeItemNum;                                  
var prev;                                          
var next;

function createCarousel(id) {
  carousel = document.querySelector(id);
  carouselItems = carousel.querySelectorAll('.carouselCustom-item');

  activeItemNum = 1;                                      //1
  prev = activeItemNum - 1 ;                              //0
  next = activeItemNum + 1;                               //2
  carouselItems[prev].classList.add('prev');
  carouselItems[next].classList.add('next');
  
  carousel.addEventListener("click", moveCarousel, false);
} 


function moveCarousel(e) {
  if (e.target.nodeName === "BUTTON") {
    var button = e.target; 
    if (button.classList.contains('carouselCustom-controll-prev')) {
      carouselPrev(button.parentElement);
    } else if (button.classList.contains('carouselCustom-controll-next')) {
      carouselNext(button.parentElement);
    }
    
  }
}


function carouselNext(carousel) {
  carouselInner = carousel.querySelector('.carouselCustom-inner');
  carouselItems = carousel.querySelectorAll('.carouselCustom-item');

  cleanUpClasses(carouselItems);

  carouselInner.appendChild(carouselItems[0]);
 
  carouselItems = carousel.querySelectorAll('.carouselCustom-item');       //как нормально обновить коллекцию


  carouselItems[prev].classList.add('prev');                             // добавляем текущие классы
  carouselItems[next].classList.add('next');
  carouselItems[activeItemNum].classList.add('active');

}
function cleanUpClasses(elems) {
  for (let i = 0; i < elems.length; i++) {                         // remove all added classes
    elems[i].classList.remove('prev','active','next'); 
  }
}
function carouselPrev(carousel) {
  
  carouselInner = carousel.querySelector('.carouselCustom-inner');
  carouselItems = carousel.querySelectorAll('.carouselCustom-item');
  
  cleanUpClasses(carouselItems);

  var last = carouselItems.length - 1 ;
  carouselInner.insertBefore(carouselItems[last], carouselInner.firstChild);
 
  carouselItems = carousel.querySelectorAll('.carouselCustom-item');     //как нормально обновить коллекцию 
                                                                        //Возвращает non-live NodeList всех соотв. узлов элемента.
  carouselItems[prev].classList.add('prev');                             // добавляем текущие классы
  carouselItems[next].classList.add('next');
  carouselItems[activeItemNum].classList.add('active');
}

createCarousel('#myCarousel');
createCarousel('#myCarousel1');


