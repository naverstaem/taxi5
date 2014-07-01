$(document).ready(function(){

    function headerScroll() {

        if ($(window).width() > 768) {

            if ((window.pageYOffset || document.documentElement.scrollTop) > 15) {
                $('header >.navbar').addClass('fixed');
            }
            else {
                $('header >.navbar').removeClass('fixed');
            }

            if ((window.pageYOffset || document.documentElement.scrollTop) > 50) {
                $('header >.navbar').addClass('scroll');
            }
            else {
                $('header >.navbar').removeClass('scroll');
            }
        }
    }

   headerScroll();

    $(document).on('scroll', headerScroll);

    $(".main-menu a, a.logo").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-95 + "px"
        }, {
            duration: 500
        });
        return false;
    });

    var maxHeight = -1;
    $('#benefits .carousel-inner .item').each(function() {
        if ($(this).height() > maxHeight){
            maxHeight = $(this).height();
        }
    });

    $('#benefits .carousel-inner .item').each(function() {
        $(this).height(maxHeight);
    });

    $('.investors__reload').on('click', function(){
        event.preventDefault();

        var el = $(this).addClass('rotateIn');

        setTimeout(function() {
            el.removeClass('rotateIn');
        }, 1000);

    });

    $('button.navbar-toggle').click(function(){
        $('header >.navbar').toggleClass('scroll');
    });

});