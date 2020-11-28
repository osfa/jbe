// CSS and SASS files
import './index.scss';

const el = document.querySelector('.video-container');

if(el){
    el.onclick = function() {
      el.classList.toggle('active');
    }
}

const loader = document.querySelector('#loader');
const mainVideo = document.querySelector('#bgvid');
const lowQ = 'mini-min-mix-3-hd-r.mp4'
const hiQ = 'mini-min-mix-3-fullhd.mp4'
const superQ = 'reel-max.mp4'

if(mainVideo){
    loader.classList.remove('hidden');
    if (window.innerWidth < 960) {
      mainVideo.innerHTML = "<source type='video/mp4' src='" + lowQ + "' />";
      mainVideo.setAttribute('poster', '/assets/images/poster-v.jpg');
    } else {
      mainVideo.innerHTML = "<source type='video/mp4' src='" + hiQ + "' />";
    }
}

mainVideo.addEventListener('play', function(){
    loader.classList.add('hidden');
});