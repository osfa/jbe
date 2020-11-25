// CSS and SASS files
import './index.scss';

const el = document.querySelector('.video-container');

if(el){
    el.onclick = function() {
      el.classList.toggle('active');
    }
}

const mainVideo = document.querySelector('#bgvid');
const lowQ = 'reel-mobile.mp4'
const hiQ = 'reel-desktop.mp4'
const superQ = 'reel-max.mp4'

if(mainVideo){
    if (window.innerWidth < 1024) {
      mainVideo.innerHTML = "<source type='video/mp4' src='" + lowQ + "' />";
    } else {
      mainVideo.innerHTML = "<source type='video/mp4' src='" + hiQ + "' />";
    }
}

