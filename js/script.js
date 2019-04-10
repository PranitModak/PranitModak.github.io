$(document).ready(function () {
  $(".button").click(function () {
    $(".social.reddit").toggleClass("clicked");
    $(".social.instagram").toggleClass("clicked");
    $(".social.devian").toggleClass("clicked");
    $(".social.linked").toggleClass("clicked");
  });
  $(document).bind('mousewheel', function (e) {
    sweep();
  });
  $(document).bind('keyup', function (e) {
    sweep();
  });
})

function sclmove(limit) {
  var keyupEvent = new KeyboardEvent("keydown", {key : "ArrowUp", keyCode : 38});
  for(i=0;i<=9;i++)
  document.dispatchEvent(keyupEvent);

  var keyEvent = new KeyboardEvent("keydown", {key : "ArrowDown", keyCode : 40});
  for(i=0;i<=limit;i++)
  document.dispatchEvent(keyEvent);
  changehead(limit+1);
}

function sweep() {
  if ($(".swiper-slide-active").attr("id") == "intro") {
    changehead(0)
  }
  if ($(".swiper-slide-active").attr("id") == "Timeline") {
    changehead(1)
  }
  if ($(".swiper-slide-active").attr("id") == "Showcase") {
    changehead(2)
  }
  if ($(".swiper-slide-active").attr("id") == "10") {
    changehead(3)
  }
  if ($(".swiper-slide-active").attr("id") == "12") {
    changehead(4)
  }
  if ($(".swiper-slide-active").attr("id") == "btech") {
    changehead(5)
  }
  if ($(".swiper-slide-active").attr("id") == "cts") {
    changehead(6)
  }
  if ($(".swiper-slide-active").attr("id") == "contactinfo") {
    changehead(7)
  }
}
