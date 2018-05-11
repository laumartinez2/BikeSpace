$(document).ready(function(){

    // escondemos .navbar al inicio
    $(".navbar").hide();

    // mostramos la .navbar cuando hayamos hecho 80px de scroll
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 80) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
});