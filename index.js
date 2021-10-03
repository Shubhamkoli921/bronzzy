mybutton=document.getElementById("tbtn");

window.onscroll=function(){
    ScrollTopfunction()
    
};
function ScrollTopfunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        mybutton.style.display="Block";
    } 
    else{
        mybutton.style.display="none";
    }
}


function Topfunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  
function currentSlide(n){
    showSlides(slideIndex = n);
  }
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("column");
var dots = document.getElementsByClassName("dot");
if (n > slides.length){
    slideIndex = 1
}
if (n < 1) 
{ 
   slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";


}

// var slides= 0;
// show();

// function show(){
//     var i;
//     var slide=document.getElementsByClassName("card");

//   for(i=0; i<slide.length;i++){
//     slide[i]=style.display="none";
//   }
//   slides++;
//   if(slides>slide.length){
//       slide=1;
//   }
//   slide[slides -1].style.display="none";
//   setTimeout(show,2000);
// }




var feedindex=0;
feedslide();

function feedslide(){
    var i;
    var slider=document.getElementsByClassName("image-sliderfade");
   
    for (i=0;i<slider.length;i++){
        slider[i].style.display="none";

    }
    feedindex++;
    
    if(feedindex>slider.length){
        feedindex=1;
    }
    
    
    
    slider[feedindex-1].style.display="block";
    
    setTimeout(feedslide,2000);
}