var timer;
var i = 0;
var a;
$(document).ready(function () {
    $(".navigation_product").mouseover(function () {
        $(".navigation_product_i").show()
    })
    $(".navigation_product").mouseout(function () {
        $(".navigation_product_i").hide()
    })
    // 以上为导航栏部分的代码
    $(".slide_img img").eq(0).show(0).siblings().hide(1000)
    start();
    chang();
    $("b").hover(function(){
        clearInterval(timer);
        i= $(this).index();
        chang()
    },function(){
        start()
    });
    // 此处为幻灯片
})

function start() {
    timer = setInterval(function () {
        i++;
        if (i === 3) {
            i = 0;
        }
        chang()
    }, 3000)
}

function chang() {
    $(".slide_img img").eq(i).fadeIn(0).siblings().stop(true, true).fadeOut(1000)
    $("b").eq(i).addClass("slide_ctrl").siblings().removeClass("slide_ctrl");
}