$(document).ready(function () {
    document.addEventListener('scroll', function (event) {
        if (isElementInViewport(document.getElementById("video-content"))) {
            var playPromise = document.getElementById("video-content").play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                    // We can now safely pause video...
                    video.pause();
                })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                    });
            }
        }
        else
            document.getElementById("video-content").pause();
    }, true /*Capture event*/);
    var tabs = $('.tabs');
    var selector = $('.tabs').find('a').length;
    //var selector = $(".tabs").find(".selector");
    var activeItem = tabs.find('.active');
    var activeWidth = activeItem.innerWidth();
    $(".selector").css({
        "left": activeItem.position.left + "px",
        "width": activeWidth + "px"
    });

    $(".tabs").on("click", "a", function (e) {
        e.preventDefault();
        $('.tabs a').removeClass("active");
        $(this).addClass('active');
        var activeWidth = $(this).innerWidth();
        var itemPos = $(this).position();
        $(".selector").css({
            "left": itemPos.left + "px",
            "width": activeWidth + "px"
        });
    });

    var foc = "full";
    $("#Start").on("click", function (e) {
        fitAnimated();
        foc = "full"
    });
    $("#10th").on("click", function (e) {
        if(foc!="full")
        fitAnimated();
        setTimeout(function(){focusRandom("10th");}, 1800);
        foc = ""
    });
    $("#12th").on("click", function (e) {
        if(foc!="full")
        fitAnimated();
        setTimeout(function(){focusRandom("12th");}, 1800);
        foc = ""
    });
    $("#Tech").on("click", function (e) {
        if(foc!="full")
        fitAnimated();
        setTimeout(function(){focusRandom("B.Tech");}, 1800);
        foc = ""
    });
    $("#CTS").on("click", function (e) {
        if(foc!="full")
        fitAnimated();
        setTimeout(function(){focusRandom("CTS Training");}, 1800);
        foc = ""
    });

    $(".button").click(function(){
        $(".social.reddit").toggleClass("clicked");
        $(".social.instagram").toggleClass("clicked");
       $(".social.devian").toggleClass("clicked");
        $(".social.linked").toggleClass("clicked");
      })
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


