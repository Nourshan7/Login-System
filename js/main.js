



let aboutOffset = $('#about').offset().top;
let navHeight = $('.nav').outerHeight()
$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > aboutOffset - navHeight) {
        $('nav').css('backgroundColor', 'rgba(0,0,0,1)')
        $('.backToTop').fadeIn(1000).css("display", "flex")
    }
    else {
        $('nav').css('backgroundColor', 'transparent')
        $(".backToTop").fadeOut(500)
    }
})
$('a').click(function (e) {
    let linkHref = $(e.target).attr('href');
    let sectioneOffset = $(linkHref).offset().top;
    $('html , body').animate({ scrollTop: sectioneOffset }, 100)
})
$('.backToTop').click(function () {
    $('html , body').animate({ scrollTop: 0 }, 1000)
})
$(document).ready(function () {


    $(".skitter-large").skitter();
    $('.loadingScreen').fadeOut(1000, function () {
        $('.loadingScreen').remove()
        $('body').css("overflow", "auto")
    })
})
let myWidth = $('.coloringBox').innerWidth();
$(".coloringBox").css("left", -myWidth);

$(".fa-cogs").click(function () {

    $(".coloringBox").css("display", "block");
    if ($(".coloringBox").css("left") == "0px") {
        $(".coloringBox").animate({ "left": -myWidth }, 500);
    }
    else {
        $(".coloringBox").animate({ "left": 0 }, 500);
    }
})

$('span').eq(0).css('backgroundColor', "rgb(255,0,0")
$('span').eq(1).css('backgroundColor', "rgb(255,100,140")
$('span').eq(2).css('backgroundColor', "rgb(255,232,250")
$('span').eq(3).css('backgroundColor', "rgb(0,0,0")
$('span').eq(4).css('backgroundColor', "rgb(120,240,70")
$('span').click(function () {
    let colorItem = $(this).css('backgroundColor')
    $('h2,p').css("color", colorItem)
})
$('.bgImg').click(function (e) {
    let currentImg = $(e.target).attr("src");
    $('header').css("backgroundImage", `url(${currentImg})`)
    $('.homecontent').css("color", "red")
})


