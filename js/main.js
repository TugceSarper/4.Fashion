/*
Initialize Swiper
*/
var swiper = new Swiper('.swiper-container', {
    speed: 800,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

/*
 Initialize Scroll Animations
 */

$(".animated-on-scroll").attr({
    "data-sal-delay": "200",
    "data-sal-duration": "500",
    "data-sal-easing": "ease-out-bounce"
});
$(".fade").attr({
    "data-sal": "fade",
});
$(".slide-up").attr({
    "data-sal": "slide-up",
});
$(".slide-down").attr({
    "data-sal": "slide-down",
});
$(".slide-left").attr({
    "data-sal": "slide-left",
});
$(".slide-right").attr({
    "data-sal": "slide-right",
});
$(".zoom-in").attr({
    "data-sal": "zoom-in",
});
$(".zoom-out").attr({
    "data-sal": "zoom-out",
});
$(".flip-up").attr({
    "data-sal": "flip-up",
});
$(".flip-down").attr({
    "data-sal": "flip-down",
});
$(".flip-left").attr({
    "data-sal": "flip-left",
});
$(".flip-right").attr({
    "data-sal": "flip-right",
});


sal({
    threshold: .2,
    once: false,
});



/*
nav bar scrolling background color change
*/
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }
});


/*
nav bar active section change on scroll
 */
var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight() * 15 ;

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});




nav.find('a').on('click', function () {
    var $el = $(this)
        , id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);

    return false;
});


let currentSlide = 1,
    slide = Array.from(document.getElementById('slider-dots').childNodes),
    slidesLength = slide.length,
    next = document.getElementById('next-slide'),
    prev = document.getElementById('prev-slide'),
    direction = 'up';


const animateSlide = (slideNumber, direction) => {


    // YPUOU COULD PUT ALSO A LOGIC FOR clearInterval()
    // IN ORDER TO DISABLE THE AUTOMATIC MODE
};

const changeSlide = () => {


    if (currentSlide === slidesLength) {
        direction = 'down';
    } else if (currentSlide === 1) {
        direction = 'up';
    }
    switch (direction) {
        case 'up':
            nextSlide();
            break;
        case 'down':
            prevSlide();
            break;
        default:
            currentSlide = 1;
            console.error('unknown direction');
    }

    function nextSlide() {
        next.click();

    }

    function prevSlide() {
        prev.click();

    }

};

let sliderChangeDuration = 5000;

let slideInterval = setInterval(changeSlide, sliderChangeDuration);

next.addEventListener('click', function () {
    currentSlide += 1;
    clearInterval(slideInterval);
    slideInterval = setInterval(changeSlide, sliderChangeDuration);
});
prev.addEventListener('click', function () {
    currentSlide -= 1;
    clearInterval(slideInterval);
    slideInterval = setInterval(changeSlide, sliderChangeDuration);
});


$(document).ready(function () {
    $('.menu').on('click', function () {
        $(this).toggleClass('open');
        $('.header').toggleClass('opened');
    });
});

nav.find('a').on('click', function () {
    $('.header').toggleClass('opened');
    $('.menu').toggleClass('open');
});