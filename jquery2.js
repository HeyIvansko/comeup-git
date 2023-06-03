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

/*question 2 */
$(document).ready(function() {
  $(document).keydown(function(event) {
    if (event.which == 16) {
      $('p').text('La touche "Shift" est enfoncée.');
    }
  });

  $(document).keyup(function(event) {
    if (event.which == 16) {
      $('p').text('La touche "Shift" est relâchée.');
    }
  });
});

/*question 3 */
$(document).ready(function() {
  $('#btn1').click(function() {
    $('#box').queue('maFile', function(next) {
      $(this).animate({left: '+=100px'}, 1000);
      next();
    });
  });

  $('#btn2').click(function() {
    $('#box').dequeue('maFile');
  });

  $('#btn3').click(function() {
    $('#box').clearQueue('maFile');
  });
});

