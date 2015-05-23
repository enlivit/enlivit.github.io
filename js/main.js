var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
new WOW().init();
jQuery(document).ready(function ($) {


    $(".mobile-menu-btn").click(function () {
        $(".body-wrap").toggleClass("body-left");
        $(".mobile-menu").toggleClass("menu-left");
		
    });

    $(".godown").click(function (e) {
        $('html, body').animate({
            scrollTop: $("section").first().offset().top
        }, 1500);
    });





//google maps show event
    $(".view_map").click(function (e) {
        e.preventDefault();
//        $(".footer").slideUp();
        $(".map-overlay").fadeOut();
        $(".close1").fadeIn();
    });
    //
    $(".close1").click(function () {
        $(".map-overlay").fadeIn();
        $(".close1").fadeOut();
    });

    //scroll and hightlight menu
    $(".mobile-menu ul li a, .nav1 ul li a").click(function (e) {
        e.preventDefault();
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        $('html, body').animate({
            scrollTop: $(refElement).offset().top
        }, 1500);
    });
    $(window).scroll(function (event) {
        var scrollPos = $(document).scrollTop();
        $('.nav1 ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav1 ul li a').removeClass("nav1hover");
                currLink.addClass("nav1hover");
            } else {
                currLink.removeClass("nav1hover");
            }
        });
    });


    $("#tm").owlCarousel({
        items: 1,
//        navigation: true,
        autoPlay: true,
//        pagination: false
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
    });
});



//google maps
function initialize() {
    var myLatlng = new google.maps.LatLng(27.7069179, 85.3375574);
    var mapOptions = {
        center: myLatlng,
        zoom: 16
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Enliv Information Technology'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

 