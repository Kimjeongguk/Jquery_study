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

let num = 0;
let width = $(".imgbox>div").outerWidth();
console.log(width);
 $(".imgbox>div:first").clone(true).insertAfter(".imgbox>div:last");
setInterval(function(){
    num++;
    $(".imgbox").stop().animate({left: num*-width}, 500, function(){
        if(num > 2){
            num = 0;
            $(".imgbox").css("left", 0);
        }
    });
},2000);

let table= "";
$(".box>.top_icon>dl>dd").eq(2).click(function(){
    console.log("asdfasdfasdf");
    $("#popup").fadeIn();

    $.ajax({
        url:"js/menu.json",
        dataType: "json",
        success: function(data){
            if(table != ""){
                return;
            }
            table = $("<table>");
            for(let i in data){
                let $id = data[i].id;
                let $name = data[i].name;
                let $pay = data[i].pay;
                let $sale = data[i].sale;

                let row = $("<tr>").append(
                    $("<td>").text($id),
                    $("<td>").text($name),
                    $("<td>").text($pay),
                    $("<td>").text($sale),
                );
                table.append(row);
            }
            $(".modal>.list").append(table);
        }
    });
});
$(document).mouseup(function(e){
    if ($("#popup").has(e.target).length === 0){
        $("#popup").fadeOut();
    }
});