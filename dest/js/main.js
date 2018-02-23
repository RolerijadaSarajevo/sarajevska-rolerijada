//Counter

var countDownDate = new Date("Apr 15, 2018 23:59:59").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("counter").innerHTML = " Prijave počinju za </br>" + days + "d &#x26AC " + hours + "h &#x26AC "
    + minutes + "m &#x26AC " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "Prijave za Drugu sarajevsku rolerijadu su otvorene!";
    }
}, 1000);

//Slick slider
$(".rs-gallery-main").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:
    '<div class="gallery__arrow gallery__arrow--prev"><img src="dest/img/arrow-left.png"/></div>',
  nextArrow:
    '<div class="gallery__arrow gallery__arrow--next"><img src="dest/img/arrow-right.png"/></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
