$(function() {
    $('header nav ul li').click(function() {
        $('header nav ul li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        console.log(idx)

        $('.tab > *').hide().removeClass('on')
        $('.tab > *').eq(idx).show().addClass('on')
    })   
    
    $(window).scroll(function() {
        $('.arrow').click(function(e){
            e.pereventDefault()
            $('html, body').stop().animate({
                scrollTop : 0
            }, 3000)
        })
    })
})                                            