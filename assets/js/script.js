window.addEventListener('DOMContentLoaded', (event) => {
    var cover = document.querySelector('.video-container .cover');
    var icon = document.querySelector('.video-container .play-icon');
    var player = document.querySelector('.video-container iframe');
    if (cover) {
        cover.addEventListener('click', () => {
            cover.remove();
            icon.remove();
            var playerUrl = player.getAttribute('src');
            playerUrl = playerUrl + '?autoplay=1';
            player.setAttribute('src', playerUrl);
        });
    }
});