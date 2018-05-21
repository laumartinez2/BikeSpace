$(document).ready(function() {

    // escondemos .navbar al inicio
    $(".navbar").hide();

    $(".close").click(function() {
        $('.navbar-collapse').collapse('toggle');
    });

    $('.nav a').click(function() {
        $('.navbar-collapse').collapse('toggle');
        var target = this.hash;

        event.preventDefault();

        var navOffset = $('#navbar').height();

        return $('html, body').animate({
            scrollTop: $(this.hash).offset().top - navOffset
        }, 300, function() {
            return window.history.pushState(null, null, target);
        });
    });
    
    // mostramos la .navbar cuando hayamos hecho 80px de scroll
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 80) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });



});