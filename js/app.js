$(document).ready(function () {
    // date
    var year = new Date().getFullYear();
    $('#year').text(year);
    // isotop
    var $gallery = $('.masonry-container').isotope({});

    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({
            filter: filterValue
        });
    });
    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $(window).scroll(function () {
        var scrollPoint = $(window).scrollTop();
        if (scrollPoint >= 55) {
            $('.fixed-top').css('box-shadow', '0px 0px 10px grey');
        } else if (scrollPoint <= 55) {
            $('.fixed-top').css('box-shadow', 'unset');
        }
    })
})
new WOW().init();
