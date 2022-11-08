$(function(){
$(".nav-menu").hide();
$(".student-des").hide();

$("#menu").click(function(){
    $(".nav-menu").slideToggle(700);
});
$("#arrowBox-1").click(function(){
    $(".student-des-1").slideToggle();
});
$("#arrowBox-2").click(function(){
    $(".student-des-2").slideToggle();
});
$("#arrowBox-3").click(function(){
    $(".student-des-3").slideToggle();
});
});
