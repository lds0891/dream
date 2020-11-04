$(document).ready(function(){
    //Preloader
    setTimeout(function () {
        let preloader = document.getElementById('page-preloader');
        if ( !preloader.classList.contains('preloader-none') )
        {
            preloader.classList.add('preloader-none')
            $('body').removeClass('body-overflow')
        }
    }, 5000);
    //Menu
    /* Hamburger menu animation */
    $('.header-wrap__toogler').click(function(){
        $(this).toggleClass('open');
    });
    /* Menu fade/in out on mobile */
    $(".header-wrap__toogler").click(function(e){
        e.preventDefault();
        $(".header-menu").toggleClass('open');
        $("body").toggleClass('lock')
    });
    //
    $('.header__menu-link, .btn_sign').click(function () {
        $('.header-wrap__toogler').removeClass('open');
        $('.header-menu').removeClass('open');
        $("body").removeClass('lock')
    });
    //Animation
    new WOW().init();
    //Portfolio slick slider
    let sliderPrev = '<button class="slider-controls__prev slider-controls"><i class="fas fa-chevron-left slider-controls__icon"></i></button>';
    let sliderNext = '<button class="slider-controls__next slider-controls"><i class="fas fa-chevron-right slider-controls__icon"></i></button>';
    $('.slider-portfolio').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: sliderNext,
        prevArrow: sliderPrev,
        dotsClass: 'slider-indication',
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //Slick slider on bootstrap problem fix
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        e.target;
        e.relatedTarget;
        $('.slider-portfolio').slick('setPosition');
    });
    //Click btn slider
    $('.btn-arrow_down').click (function() {
        $('html, body').animate({scrollTop: $('div.services-wrap').offset().top-100 }, 'slow');
        return false;
    });
    //Click and select scroll menu
    $('.header__menu-wrap li a, .container .header__logo').click(function(){
        let element = $(this).attr('href');
        let dist = $(element).offset().top-70;

        $('html, body').animate({'scrollTop': dist}, 1000);

        return false;
    });
    $(window).scroll(function () {
        $('.navi[id]').each(function () {
            let id = $(this).attr('id');
            if ($(this).offset().top-80 < $(window).scrollTop()){
                $('.header__menu-wrap li a[href="#'+id+'"]').parent('li').addClass('active').siblings().removeClass('active');
            }

            if ($(window).scrollTop() < 80){
                $('.header__menu-wrap li a').parent('li').removeClass('active')
            }
        });
    });
    //Search
    $('.search-item, .search-item__mobile').click(function(){
        $(this).toggleClass('active');
        $(".search-item__content").toggleClass('open');
    });
    $('#cancelSeach').click(function(e){
        e.preventDefault();
        $(".search-item__content").removeClass('open');
        $(".search-item, .search-item__mobile").removeClass('active');
    });
    //Sing In
    $('#singIn, #singInFooter').click(function(){
        $(this).addClass('active');
        $(".sing-wrap").addClass('open');
        $("body").addClass('lock-sign')
    });
    $('#singInClose').click(function(){
        $(".sing-wrap").removeClass('open');
        $('#singIn').removeClass('active');
        $("body").removeClass('lock-sign')
    });
    $('.sing-form__login-input').change(function () {
        $(this).attr('value', this.value);
    });
});