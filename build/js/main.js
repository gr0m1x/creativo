$(document).ready(function(){
    $('.studio-slider').slick({

    });

    // Slow scroll

    $("#site-nav").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

        top = $(id).offset().top;

        toggleMenu();

        $('body,html').animate({scrollTop: top}, 1000);

    });

    // hamburger
    var hamburgerButton = $('.hamburger');
    var siteNav = $('.site-nav__list');

    hamburgerButton.click(toggleMenu);

    function toggleMenu() {
        hamburgerButton.toggleClass('is-active');
        siteNav.toggleClass('site-nav__list__visible');
    }

    // site nav

  var siteHeader = $('.header')
  var headerOffsetTop = $('.header-top').offset().top;
  
  $(window).scroll( function(){

    if (window.pageYOffset > headerOffsetTop) {
      siteHeader.addClass('navigation-fixed');
    } else {
      siteHeader.removeClass('navigation-fixed');
    }
  })
});


// var siteHeader = document.querySelector('.header')
// var headerOffsetTop = document.querySelector('.header-top').offsetTop;

// window.addEventListener('scroll', function(event) {
//     if (window.scrollY > headerOffsetTop) {
//         siteHeader.classList.add('navigation-fixed');
//     } else {
//         siteHeader.classList.remove('navigation-fixed');
//     }
// })


// var hamburgerButton = document.querySelector('.hamburger');
// var siteNav = document.querySelector('.site-nav__list')

// hamburgerButton.addEventListener('click', function() {
//     var isActive = hamburgerButton.classList.contains('is-active')

//     if (isActive) {
//         hamburgerButton.classList.remove('is-active');
//         siteNav.classList.remove('site-nav__list__visible');
//     } else {
//         hamburgerButton.classList.add('is-active');
//         siteNav.classList.add('site-nav__list__visible');
//     }
// })



// var navLinks = document.querySelectorAll('.site-nav__list a');

// for (var index = 0; index < navLinks.length; index++) {
//     navLinks[index].addEventListener('click', function(event) {
        
//         event.preventDefault();

//         var sectionId = event.target.hash;

//         var sectionElement = document.querySelector(sectionId);

//         hamburgerButton.classList.remove('is-active');
//         siteNav.classList.remove('site-nav__list__visible');
       

//         sectionElement.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     })
// }

