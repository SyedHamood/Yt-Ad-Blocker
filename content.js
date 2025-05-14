setInterval(() => {
    const video = document.querySelector('video');
    if (video && document.querySelector('.ad-showing')) {
        video.playbackRate = 16;
    } else if (video) {
        video.playbackRate = 1;
    }
}, 1000);
