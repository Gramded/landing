$(function () {

    $(".rateyo").rateYo({});

});
(function () {
    const $ = jQuery;


    $( document ).ready(function() {
        $('[data-role="mobile-slider"]').slick({
            dots: true,
            slidesToShow: 6,
            slidesToScroll: 3,
            mobileFirst:true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
})

();