$(function () {
    // alert('dd')
    const menu = $('main .inner .left ul li')
        contents = $('main .right > section')

    menu.click(function () {
        $(this).addClass('on')
        $(this).siblings().removeClass('on')

        let idx = $(this).index()
        console.log(idx)
        let section = contents.eq(idx)
        let sectionD = section.offset().top-(100)
        $('heml, body').animate({
            scrollTop : sectionD
        })
    })

    $(window).scroll(function(){
        contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()+100){
                let idx = $(this).index()
                menu.removeClass('on')
                menu.eq(idx).addClass('on')
            }
        })

        $('.arrow').click(function(e){
            e.preventDefault()
            $('html, body').stop().animate({
                scrollTop : 0
            }, 1000)
        })
    })
})