// CSS and SASS files
import './index.scss';

const el = document.querySelector('.video-container');

if(el){
    el.onclick = function() {
      el.classList.toggle('active');
    }
}

const mainVideo = document.querySelector('#bgvid');
const lowQ = 'min-grid-hd-10mbps-rotated.mp4'
const hiQ = 'min-grid-fullhd-20mbps.mp4'
const superQ = 'reel-max.mp4'

if(mainVideo){
    if (window.innerWidth < 1024) {
      mainVideo.innerHTML = "<source type='video/mp4' src='" + lowQ + "' />";
    } else {
      mainVideo.innerHTML = "<source type='video/mp4' src='" + hiQ + "' />";
    }
}

