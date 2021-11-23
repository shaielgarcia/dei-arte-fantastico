//jquery

jQuery('document').ready(function($) {
    var bloques = $('.bloque'),
        enlaces = $('#navegacion').find('a');

    enlaces.click(function(e) {
        e.preventDefault();
        var hash = $(this).attr('href');

        bloques
            .filter(hash)
            .addClass('visible')
            .siblings()
            .removeClass('visible');

        enlaces
            .removeClass('activo')

        $(this)
            .addClass('activo');


    });
});