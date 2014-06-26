$(document).ready(function(){

    function headerScroll() {
        if ((window.pageYOffset || document.documentElement.scrollTop) > 50) {
            $('header >.navbar').addClass('scroll');
        }
        else {
            $('header >.navbar').removeClass('scroll');
            // $('.main-menu li.active').removeClass('active');
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

});