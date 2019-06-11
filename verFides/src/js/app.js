 
(($) => {

  $(() => {

// Hamburger
$('.burger').click(function(){
  $('.nav-menu-header').toggleClass('nav-menu-header-burger');
  $('.hamburger--slider').toggleClass('is-active');
});


// Intro
var videoEl = document.getElementsByTagName('video')[0],
playBtn = document.getElementById('playBtn');
var sectionVideo =  document.getElementById('video');
if (typeof(sectionVideo) != 'undefined' && sectionVideo != null)
{

playBtn.addEventListener('click', function () {
if (videoEl.paused) {
    videoEl.play();
} else {
    videoEl.pause();
}
}, false);

videoEl.addEventListener('play', function () {
playBtn.innerText = "Pause ❚❚";
}, false);

videoEl.addEventListener('pause', function () {
playBtn.innerText = "Play ►";
}, false);
};


// Scroll animation
$(document).ready(function(){
  $(".scroll").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

// Slider
$('.slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});
});

// Validate registration form
$('.form-registration').validate({
  rules: {
    name: {
      required: true,
      minWords: 1
    },
    email: {
      required: true,
      minWords: 1,
      email: true
    }
  }
});

// Validate questions form
$('.questions-form').validate({
  rules: {
    name: {
      required: true,
      minWords: 1
    },
    email: {
      required: true,
      minWords: 1,
      email: true
    },
    tel: {
      required: true,
      number: true,
      minWords: 1,
      digits: true
    },
    textarea: {
      minWords: 1,
      required: true,  
    }
  }
});

// Currency
$('.tablinks').on('click', function(e) {
  const currency = $(this).attr('data-currency');
  openCurrency(e, currency);
});
function openCurrency(evt, currencyName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(currencyName).style.display = "block";
  evt.currentTarget.className += " active";
}
  
})(jQuery);