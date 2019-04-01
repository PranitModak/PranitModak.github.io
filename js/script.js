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