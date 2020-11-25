// CSS and SASS files
import './index.scss';
// import './lazysizes.min.js';
const el = document.querySelector('.video-container');

el.onclick = function() {
  el.classList.toggle('active');
}