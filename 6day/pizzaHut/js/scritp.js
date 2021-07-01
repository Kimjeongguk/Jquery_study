var menu_offset = $('header').offset();
$(window).scroll(function() {
    if ($(document).scrollTop() > menu_offset.top) {
        $('header').addClass('header-fixed');
    }else {
        $('header').removeClass('header-fixed');
    }
});

$(".gnb li").mouseover(function(){
     $(this).children("ul").show();
});
$(".gnb li").mouseleave(function(){
    $(this).children("ul").hide();
});
$(".box>.top_icon>dl>dd:last").click(function(){
    $(".menuAll").slideToggle();
});