 window.addEventListener("DOMContentLoaded", onLoad);

 function onLoad(){
     document.getElementById("left-arrow").addEventListener("click",carouselLeft);
     document.getElementById("right-arrow").addEventListener("click",carouselRight); 

     carouselThumbNails = document.querySelectorAll(".carrousel-images img");
     carouselIndicators = document.querySelectorAll(".carousel-control li a i");
     carouselIndex = 1;

     console.log(carouselIndicators[0]);

     for (i = 0; i < carouselIndicators.length; i++){
        carouselIndicators[i].addEventListener("click",carouselMove);
     }

     carouselThumbNails.forEach(element => {
        element.addEventListener("click",carouselMove);
     });
 }


 function carouselLeft(){
    carouselClean(carouselIndex);
    carouselIndex--;
    carouselIndex = (carouselIndex < 0) ? 2 : carouselIndex;
    carouselUpdate(carouselIndex);
 }

 function carouselRight(){
   carouselClean(carouselIndex);
    carouselIndex++;
    carouselIndex = (carouselIndex > 2) ? 0 : carouselIndex;
    carouselUpdate(carouselIndex);
 }

 function carouselMove(){
    var index = this.dataset.index;
    carouselClean(carouselIndex);
    carouselIndex = index;
    carouselUpdate(carouselIndex);
 }

 function carouselClean(index){
   carouselThumbNails[index].className = "";
   carouselIndicators[index].classList.remove("selected");
 }

 function carouselUpdate(index){
   carouselThumbNails[index].className = "main-model";
   carouselIndicators[index].classList.add("selected");
   document.getElementsByTagName("header")[0].style.backgroundImage = "url('./Images/Hero-bg-0" + (parseInt(index)+1) + ".jpg')";
 }