$(document).ready(function () {
  var loopit = "false"
  $(".button").click(function () {
    $(".social.reddit").toggleClass("clicked");
    $(".social.instagram").toggleClass("clicked");
    $(".social.devian").toggleClass("clicked");
    $(".social.linked").toggleClass("clicked");
  });
  $('body').bind('mousewheel', function(e){
    if($(".swiper-slide-active").attr("id")=="intro") {
      changehead(0)
    }
    if($(".swiper-slide-active").attr("id")=="Timeline") {
      changehead(1)
      txtchange("2012","10th from St. Stephen's School","Scored 91.5% in ICSE");
      setTimeout(function(){txtchange("2014","12th from St. Stephen's School","Scored 92% in ISC");},4000);
      setTimeout(function(){txtchange("2018","B.Tech from Techno India College of Technology.","Scored 8.25 DGPA");},8000);
      setTimeout(function(){txtchange("Now","Job at Cognizant (Programmer Analyst Trainee)","in Artificial Intelligence");setTimeout(function(){txttime()},4000)},12000);
    }
    if($(".swiper-slide-active").attr("id")=="10") {
      changehead(2)
    }
    if($(".swiper-slide-active").attr("id")=="12") {
      changehead(3)
    }
    if($(".swiper-slide-active").attr("id")=="btech") {
      changehead(4)
    }
    if($(".swiper-slide-active").attr("id")=="cts") {
      changehead(5)
    }
    if($(".swiper-slide-active").attr("id")=="contactinfo") {
      changehead(6)
    }
  });
})

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function txtchange(txt1,txt2,txt3) {
  $("#txtcl1").html(txt1);
  $("#txts1").html(txt1);
  $("#txtcl2").html(txt2);
  $("#txts2").html(txt2);
  $("#txtcl3").html(txt3);
  $("#txts3").html(txt3);
}
function txttime() {
  txtchange("2012","10th from St. Stephen's School","Scored 91.5% in ICSE");
  setTimeout(function(){txtchange("2014","12th from St. Stephen's School","Scored 92% in ISC");},4000);
  setTimeout(function(){txtchange("2018","B.Tech from Techno India College of Technology","Scored 8.25 DGPA");},8000);
  setTimeout(function(){txtchange("Now","Job at Cognizant (Programmer Analyst Trainee)","in Artificial Intelligence"); setTimeout(function(){txttime()},4000)},12000);
}
