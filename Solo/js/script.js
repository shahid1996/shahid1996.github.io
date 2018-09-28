/*##############################
        preloader
##############################*/
$(window).on('load', function () {
    $('#status').delay(350).fadeOut();
    $('#preloader').fadeOut();
})
/*##############################
        team
##############################*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*##############################
        progress bars
##############################*/
$(function () {
    $('#progress-elements').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000)
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*##############################
        Responsive Tabs
##############################*/
$(function () {
    $("#service-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*##############################
        Portfolio
##############################*/
$(window).on('load', function () {
    //Initialize isotope
    $('#isotope-container').isotope({

    });
    //filters item on button click
    $("#isotope-filters").on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr('data-filter');
        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });
        //        active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*##############################
        Magnifier
##############################*/
$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*##############################
        Testimonial
##############################*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/*##############################
        Stats
##############################*/
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});
/*##############################
        Clients
##############################*/
$(function () {
    $("#client-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            //Breaking points for 0 up
            0:{
                items:2
            },
            //Breaking points for 480 down
            480:{
                items:3
            },
            //Breaking points for 768 down
            768:{
                items:6
            }
        }
    });
});

/*##############################
        Google Map
##############################*/
//$(window).on('load', function () {
//Map Variables
//var addressString = '230 Broadway, NY, New York 10007, USA';
//var myLating = {
//    lat: 40.712685,
//    lng: -74.005920
//};

//1. Render Map
//var map = new google.maps.Map(document.getElementById('map'), {
//    zoom: 11,
//    center: myLating
//});
////});

/*##############################
        Navigation
##############################*/
/* show and hide white navigation */
$(function () {
    showHidenav();
    $(window).scroll(function () {
        showHidenav();
    });

    function showHidenav() {
        if ($(window).scrollTop() > 50) {
            //show white nav
            $("nav").addClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr('src', 'images/logo/logo-dark.png')
            //show back to top button 
            $("#back-to-top").fadeIn();
        } else {
            //hide white nav
            $("nav").removeClass("white-nav-top");
            //show logo
            $('.navbar-brand img').attr('src', 'images/logo/logo.png')
            //hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

//smooth scroll effect
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get selection id
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});


/*##############################
        Mobile Menu
##############################*/
$(function () {
    
    //show mobile nav
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height","100%");
    });
    
    //hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height","0%");
    });
    
});

/*##############################
        Animate JS
##############################*/
$(function () {
    //initialize wow js
    new WOW.init();

});
//home animation on page load
$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown")
    $("#home-heading-2").addClass("animated fadeInLeft")
    $("#home-text").addClass("animated zoomIn")
    $("#home-btn").addClass("animated zoomIn")
    $("#arrow-down i").addClass("animated fadeInDown infinite")
});  



















