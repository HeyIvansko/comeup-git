/*effet click changement de couleur header*/
var colors = [ "#222f3e", "#f368e0","#ff0000","#fff","#00FF00","#0000FF","#fe6" ];
var i = 0;
var elements = document.querySelectorAll("header");

document.querySelector(".logo").addEventListener("click", function() {
  i = i < colors.length ? ++i : 0;
  for (var j = 0; j < elements.length; j++) {
    elements[j].classList.toggle("bg-color", true);
    elements[j].style.backgroundColor = colors[i];
  }
});

/* Effet fond  card slide */
$(document).ready(function() {
  var slides = $('.slideshow img');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 3000);

  function nextSlide() {
    slides.eq(currentSlide).removeClass('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides.eq(currentSlide).addClass('active');
  }
});

$(document).ready(function() {
  var slider = $('.slider');
  var sliderWidth = slider.width();
  var currentIndex = 0;

  function moveSlider() {
    slider.css('transform', 'translateX(-' + (currentIndex * sliderWidth / 3) + 'px)');
  }

  $('.slider-btn').click(function() {
    currentIndex = (currentIndex + 1) % 3;
    moveSlider();
  });
});






