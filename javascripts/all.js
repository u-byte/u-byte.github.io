$(function(){$(".develop-scroller").typed({strings:["Rails.","PHP.","NodeJS.","Java.","WordPress.","AWS.","Heroku.","PostgreSQL."],typeSpeed:60,typeDelay:500,backSpeed:30,backDelay:4e3,loop:!0,showCursor:!1}),$(".btn-contact-us").click(function(){scrollTo(".contact-us")}),$(".btn-projects").click(function(){scrollTo(".projects")}),$(".btn-about-us").click(function(){scrollTo(".about-us")})}),scrollTo=function(o){$("html, body").animate({scrollTop:$(o).offset().top},800)};