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
  txttime();
}

function sweep() {
  if ($(".swiper-slide-active").attr("id") == "intro") {
    changehead(0)
  }
  if ($(".swiper-slide-active").attr("id") == "Timeline") {
    changehead(1)
    txtchange("2012", "10th from St. Stephen's School", "Scored 91.5% in ICSE");
    setTimeout(function () { txtchange("2014", "12th from St. Stephen's School", "Scored 92% in ISC"); }, 3890);
    setTimeout(function () { txtchange("2018", "B.Tech from Techno India College of Technology.", "Scored 8.25 DGPA"); }, 10200);
    setTimeout(function () { txtchange("Now", "Job at Cognizant (Programmer Analyst Trainee)", "in Artificial Intelligence"); setTimeout(function () { txttime() }, 5500) }, 16200);
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

function txtchange(txt1, txt2, txt3) {
  $("#txtcl1").html(txt1);
  $("#txts1").html(txt1);
  $("#txtcl2").html(txt2);
  $("#txts2").html(txt2);
  $("#txtcl3").html(txt3);
  $("#txts3").html(txt3);
}
function txttime() {
  txtchange("2012", "10th from St. Stephen's School", "Scored 91.5% in ICSE");
  setTimeout(function () { txtchange("2014", "12th from St. Stephen's School", "Scored 92% in ISC"); }, 5890);
  setTimeout(function () { txtchange("2018", "B.Tech from Techno India College of Technology", "Scored 8.25 DGPA"); }, 12600);
  setTimeout(function () { txtchange("Now", "Job at Cognizant (Programmer Analyst Trainee)", "in Artificial Intelligence"); setTimeout(function () { txttime() }, 5500) }, 18800);
}