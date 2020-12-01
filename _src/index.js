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
// const lowQ = 'mini-min-mix-3-hd-r.mp4'
const lowQ = 'hd-1mbps-v.mp4'
const hiQ = 'fullhd-2mbps-h.mp4'

if(mainVideo){
    // loader.classList.remove('hidden');
    if (window.innerWidth < 960) {
      mainVideo.innerHTML = "<source type='video/mp4' src='" + lowQ + "' />";
      mainVideo.setAttribute('poster', '/assets/images/poster-v.jpg');
    } else {
      mainVideo.innerHTML = "<source type='video/mp4' src='" + hiQ + "' />";
    }
    // mainVideo.addEventListener('play', function(){
    //     loader.classList.add('hidden');
    // });
}




// // Run after the HTML document has finished loading
// document.addEventListener("DOMContentLoaded", function() {
//   // Get our lazy-loaded images
//   var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

//   // Do this only if IntersectionObserver is supported
//     if ("IntersectionObserver" in window) {
//       // Create new observer object
//       let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//           // Loop through IntersectionObserverEntry objects
//           entries.forEach(function(entry) {
//             // Do these if the target intersects with the root
//             if (entry.isIntersecting) {
//               let lazyImage = entry.target;
//               lazyImage.src = lazyImage.dataset.src;
//               lazyImage.classList.remove("lazy");
//               lazyImageObserver.unobserve(lazyImage);
//             }
//           });
//       });

//       // Loop through and observe each image
//       lazyImages.forEach(function(lazyImage) {
//         lazyImageObserver.observe(lazyImage);
//       });
//     }

// });
