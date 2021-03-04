$(function () {
    $('.about__slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'about__slider-dots',
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1455,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.year-btn').on('click', function () {
        $('.pricing__item').addClass('year--active');
    });
    $('.month-btn').on('click', function () {
        $('.pricing__item').removeClass('year--active');
    });

    $(".scroll").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);

    });
});