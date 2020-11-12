$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// Scroll To Top Button 
var scrollButton = $(".scroll-top");
$(window).scroll(function() {
    ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
});
// Click Button to scroll top 
scrollButton.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 600);
});



var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();



$(document).ready(function() {

    // To Open All Categories List
    if ($(window).width() >= 992) {
        $(".cats").click(function() {
            $(".overlay-box").fadeIn(300);
        });
        $(".cats").click(function() {
            $(".cats .nav-link").removeClass("rotate-reverse");
            $(".cats .nav-link").addClass("rotate");
            $(".cats .cats-list").slideDown(300);
        });
        $(".overlay-box").click(function() {
            $(".overlay-box").fadeOut(300);
        });
        $(".overlay-box").click(function() {
            $(".cats .nav-link").removeClass("rotate");
            $(".cats .nav-link").addClass("rotate-reverse");
            $(".cats .cats-list").slideUp(300);
        });
    }
    if ($(window).width() <= 991) {
        $(".cats").click(function() {
            $(".cats .nav-link").toggleClass("rotate");
            $(".cats .cats-list").slideToggle(300);
        });
    }
    //To Open Offers Box
    $(".offers").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box2").fadeIn(300);
    });
    $(".offers").click(function() {
        $(".offers-box").slideDown(300);
    });
    $(".overlay-box2").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box2").fadeOut(300);
    });
    $(".overlay-box2").click(function() {
        $(".offers-box").slideUp(300);
    });

    // $(".cats").click(function() {
    //     $(".cats .nav-link").toggleClass("rotate");
    //     $(".cats .cats-list").slideToggle(300);
    // });

    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 20,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });


    $('.most-viewd .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        // stagePadding: 10,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });

    // Footer Section Start --------------------------------------------------------------------------------------------------------------------
    // To Toggle Between Footer Slide Menus
    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }
    //This is To Change between footer collapse link ----------------------------------------------------------------
    // First Collapse ---------------------------
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate-reverse")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").addClass("rotate-reverse")
            $(".last .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });

    // Second Collapse ---------------------------
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("collapse")) {
            $(".second .footer-heading .footer-link").addClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate-reverse")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
            $(".last .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("in")) {
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });

    // Last Collapse ---------------------------
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading .footer-link").addClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate-reverse")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });


    // This is To Open search Box
    $(".search").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box3").slideDown(500);
    });

    $(".search").click(function() {
        $(".search .search-icon").removeClass("open-search")
        $(".search .search-icon").addClass("close-search")
        $(".close-search-btn").fadeIn(300)
        $(".rools .search-box").fadeIn(300);
    });

    $(".close-search-btn,.overlay-box3").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box3").slideUp(500);
    });

    $(".close-search-btn,.overlay-box3").click(function() {
        $(".search .search-icon").addClass("open-search")
        $(".search .search-icon").removeClass("close-search")
        $(".close-search-btn").fadeOut(300)
        $(".rools .search-box").fadeOut(300);
    });


    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box4").fadeIn(500);
    });

    $(".close,.overlay-box4").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box4").fadeOut(500);
    });

});