$(document).ready(function () {


    const swiper = new Swiper(" .swiper.banner-slide",{
        autoplay: {
            delay: 6000
        },
        loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            centeredSlides: true,
            freeMode: true,
            spaceBetween:20
    })


    const swiper2 = new Swiper(".best .swiper.product-slide",{
        // autoplay: {
        //     delay: 5000
        // },
        loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            centeredSlides: true,
            spaceBetween: 1,
            slidesPerView: 4
    })


    const swiper3 = new Swiper(".sale .swiper.sale-slide",{
        autoplay: {
            delay: 3000
        },
        loop: true,
            
            centeredSlides: true,
            spaceBetween: 1,
            slidesPerView: 6
    })


    

    $(".header .nav").hover(function () {
        $(".header .submenu").addClass("on");
        $(".header .submenu ul li").addClass("on");
        
    }, function () {
        $(".header .submenu").removeClass("on");
        $(".header .submenu ul li").removeClass("on");
    })
    $(".header .submenu, .header .submenu ul li").hover(function(){
        $(".header .submenu").addClass("on");
        $(".header .submenu ul li").addClass("on") 
    }, function(){
        $(".header .submenu").removeClass("on");
        $(".header .submenu ul li").removeClass("on");
    })
    $(".header .submenu ul").mouseover(function(){
        let sub_list = $(this).index();
        $(".header .nav ul li").removeClass("on").eq(sub_list).addClass("on")
        $(".header .nav ul li a").removeClass("on").eq(sub_list).addClass("on")
        
    }).mouseout(function(){
        $(".header .nav ul li").removeClass("on")
        $(".header .nav ul li a").removeClass("on")
    })


    $(".header .nav ul li").mouseover(function(){
        let sub_list = $(this).index();
        $(".header .nav ul li a").removeClass("on").eq(sub_list).addClass("on")
    }).mouseout(function(){
        $(".header .nav ul li a").removeClass("on")
    })


    $(".header .nav").hover(function () {
        $(".header .submenu").addClass("on");
        $(".header .submenu ul li").addClass("on");
        
        
    }, function () {
        $(".header .submenu").removeClass("on");
        $(".header .submenu ul li").removeClass("on");
    })

    


    // const work_img = [
    //     "https://youtu.be/QMNB-oG2yOk",
        
    // ]

    $(".brows .youtube").click(function(e){
        e.preventDefault();
        let i = $(this).index();
        
        $(".window").fadeIn()
        $(".window-content").show();
        $(".window-content img").attr("src", work_img[i])
        $("html, body").css("overflow", "hidden")


    })

    $(".window-content i, .window").click(function(){
        $(".window").fadeOut()
        $(".window-content").scrollTop(0).hide();
        // $("html, body").css("overflow","scroll")
        $("html, body").css("overFlow","")
        $("html, body").css("overFlow","visible")

    })

    let close = parseInt($(".window-content i").css("top"));

    $(".window-content").scroll(function(){
        let pos = $(".window-content").scrollTop();
        $(".window-content i").css("top", close+pos+"px")
    })



    $(".nav-bar").click(function(){
        $("html,body").stop().animate({
            // stop > 기존의 에니메이션 코드를 멈추다
            scrollTop: 0
        }, 2000)
    })

    
        



})