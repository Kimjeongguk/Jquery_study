$(function(){
    let width = $(".inner_slide li").outerWidth();
    let count = $(".inner_slide li").length;
    let list = "";
    for (let i = 0; i<count; i++){
        list += "<li>" + i + "</li>";
    }
    $(".dot").append(list);

    setInterval(function(){
        $(".inner_slide").animate({"margin-left": -width},500,function(){
            $(".inner_slide li:first").appendTo(".inner_slide");
            $(".inner_slide").css("margin-left", "0px");
        });
    let index = $(".inner_slide>li:nth-child(2)").children("img").attr("alt");
    
    $(".dot>li").eq(index).addClass("on").siblings("li").removeClass("on");
    },2000);

    //상품 슬라이더

    $(".p_img>li:nth-child(2)").addClass("on")
    setInterval(roll,2000);

    function roll(){
        $(".p_img").animate({"margin-left": "-336px"},500,function(){
            $(".p_img>li:first").appendTo(".p_img");
            $(".p_img>li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
            $(".p_img").css("margin-left", "0");
        });
    }
})