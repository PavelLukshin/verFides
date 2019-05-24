 
(($) => {

  $(() => {

// Hamburger
$('.burger').click(function(){
  $('.nav-menu-header').toggleClass('active');
  $('.hamburger--slider').toggleClass('is-active');
});

// Intro
var videoEl = document.getElementsByTagName('video')[0],
playBtn = document.getElementById('playBtn');
 
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

// Scroll animation
$(document).ready(function(){
  $(".scroll, .nav-menu-header").on("click","a", function (event) {
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

// button "see all" in management section
$.getJSON('assets/data/team.json', function(data) {
  const management = $('.management');
  const button = management.find('button');
  const newTeam = $('<div class="team newTeam"></div>');

  management.append(newTeam); 

  button.click(function() {
    $(this).hide();

    for (let i = 0; i < data.member.length; i++) {
      const member = $(`

      <div class="member">
        <a href="#" class="member-img"><img src="${data.member[i].images}" alt="icon-${i+1}"></a>
        <p><a href="#">${data.member[i].title}</a><br><span><a href="#">${data.member[i].description}</a></span></p>
        <div class="link">
          <a href="#" class="linkedin"><img src="assets/images/icon-linkedin.svg" alt="linkedin"></a>
          <a href="#" class="email"><img src="assets/images/icon-email.svg" alt="Email"></a>
          <a href="#" class="vcard">vCard</a>
        </div>
      </div>

    `);

      newTeam.append(member);
    }
  });
});

// button "see all" in resources section
  $.getJSON('assets/data/resources.json', function(data) {
    const resources = $('.block-articles');
    const button = resources.find('button');
    const newArticles = $('<div class="articles newArticles"></div>');

    resources.append(newArticles); 

    button.click(function() {
      $(this).hide();

      for (let i = 0; i < data.article.length; i++) {
        const articles = $(`

        <article>
          <a class="article-title" href="#"><h4>${data.article[i].title}</h4></a>
          <p class="article-text">${data.article[i].description}</p>
          <a href="#" class="read-more">Read More<i class="fas fa-arrow-right"></i></a>
        </article>

      `);

        newArticles.append(articles);
      }
    });
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
  
})(jQuery);