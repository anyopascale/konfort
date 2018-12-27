$(".slider > div:gt(0)").hide();

setInterval(function() {
  $('.slider > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('.slider');
}, 3000);


$(".owl-carousel").owlCarousel({
    loop: true,
    items: 3,
    nav: true,
    pagination: true,
    margin: 15,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
       
        1024: {
            items: 2,
        }
    }
});

$('.btm_menu').click(function(){
    $('.menu').toggleClass('active');
    $('.icon_barrs , .icon_times').toggleClass('active');
});