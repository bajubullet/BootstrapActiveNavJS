$('ul.nav').children('li').each(function() {
    if($(this).children('a').attr('href') == window.location.pathname){
        $(this).addClass('active');
    }
});