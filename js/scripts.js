/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


    $("#slideshow > div:gt(0)").hide();
    $("#slideshow2 > div:gt(0)").hide();
    $("#slideshow3 > div:gt(0)").hide();
    $("#slideshow4 > div:gt(0)").hide();

    setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 4000); 

    setInterval(function() {
    $('#slideshow2 > div:first')
        .fadeOut(10)
        .next()
        .fadeIn(10)
        .end()
        .appendTo('#slideshow2');
    }, 4000);  

    setInterval(function() {
    $('#slideshow3 > div:first')
        .fadeOut(10)
        .next()
        .fadeIn(10)
        .end()
        .appendTo('#slideshow3');
    }, 4000);   

    setInterval(function() {
        $('#slideshow4 > div:first')
            .fadeOut(10)
            .next()
            .fadeIn(10)
            .end()
            .appendTo('#slideshow4');
        }, 4000);   
   

})(jQuery); // End of use strict
