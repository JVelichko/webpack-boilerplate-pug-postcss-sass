"use strict";

function СreateCarousel(elem) {
  var carousel = document.getElementById(elem);
  var carouselInner = carousel.querySelector('.carouselCustom-inner');  
  var carouselItems = carousel.querySelectorAll('.carouselCustom-item');

  var activeItemNum = 1;                                      //1
  var prev = activeItemNum - 1 ;                              //0
  var next = activeItemNum + 1;                               //2
  carouselItems[prev].classList.add('prev');
  carouselItems[next].classList.add('next');
  
  this.nextItem = function() {
    carouselInner.appendChild(carouselItems[0]);
    carouselItems = carousel.querySelectorAll('.carouselCustom-item');    //refresh collection   
  };

  this.prevItem = function() {
    var last = carouselItems.length - 1 ;
    carouselInner.insertBefore(carouselItems[last], carouselInner.firstChild);
    carouselItems = carousel.querySelectorAll('.carouselCustom-item');     //refresh collection  
  };

  this.cleanUpClasses = function() {
    for (let i = 0; i < carouselItems.length; i++) {                         // remove all added classes
      carouselItems[i].classList.remove('prev','active','next'); 
    }
  }
  
  this.setUpClasses = function() {
    carouselItems[prev].classList.add('prev');                             // добавляем текущие классы
    carouselItems[next].classList.add('next');
    carouselItems[activeItemNum].classList.add('active');
  }
  
  var self = this;
  
  carousel.onclick = function(e) {
    var target = e.target;
    var action = target.getAttribute('data-action');
    if (action) {
      self.cleanUpClasses();                                   
      self[action]();
      self.setUpClasses();
    }
  }; 
} 

var myCarousel = new СreateCarousel('myCarousel');
var myCarousel1 = new СreateCarousel('myCarousel1');
