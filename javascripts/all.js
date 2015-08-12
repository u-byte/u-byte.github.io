$(function() {

  $(".develop-scroller").typed({
    strings: ["Rails.", "PHP.", "NodeJS.", "Java.",
              "WordPress.", "AWS.", "Heroku.", "PostgreSQL."],
    typeSpeed: 60,
    typeDelay: 500,
    backSpeed: 30,
    backDelay: 4000,
    loop: true,
    showCursor: false
  });

  $(".btn-contact-us").click(function() {
    scrollTo('.contact-us');
  });

  $(".btn-projects").click(function() {
    scrollTo('.projects');
  });
  $(".btn-about-us").click(function() {
    scrollTo('.about-us');
  });


});

scrollTo = function(target) {
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 800);
}
;
