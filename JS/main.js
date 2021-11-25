$(document).ready(function () {
    $("#certificate-icon").owlCarousel({
        loop: true,
        margin: 2,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3,
                nav: true,
            },
            600: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 5,
                nav: true,
                loop: true,
            },
        },
    });
    $('.home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        nav: true,
        autoplayHoverPause: true,
        items: 1
    });
   

    $("#social-list").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: false,
                loop: true,
                margin: 0,
            },
            600: {
                items: 3,
                nav: false,
                loop: true,
                margin: 0,
            },
            1000: {
                items: 3,
                nav: false,
                loop: true,
                margin: 0,
            },
        },
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplayHoverPause: true,
        autoplayTimeout: true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    
    


});

function darken_screen(yesno) {
    if (yesno == true) {
        document.querySelector('.screen-darken').classList.add('active');
    }
    else if (yesno == false) {
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas() {
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {

        let offcanvas_id = everyelement.getAttribute('data-trigger');

        everyelement.addEventListener('click', function (e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);

        });
    });

    document.querySelectorAll('.btn-close').forEach(function (everybutton) {

        everybutton.addEventListener('click', function (e) {
            e.preventDefault();
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function (event) {
        close_offcanvas();
    });

});



