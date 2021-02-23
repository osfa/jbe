// CSS and SASS files
import './index.scss';

var ready = function() {

  console.log('ready');
  // const el = document.querySelector('.video-container');

  // if(el){
  //     el.onclick = function() {
  //       el.classList.toggle('active');
  //     }
  // }

  // const loader = document.querySelector('#loader');
  // const mainVideo = document.querySelector('#bgvid');

  // const lowQ = 'glitter-min-equi.mp4'
  // const hiQ = 'glitter-min-equi.mp4'

  // if(mainVideo){
  //     // loader.classList.remove('hidden');
  //     if (window.innerWidth < 960) {
  //       // mainVideo.innerHTML = "<source type='video/mp4' src='/video/" + lowQ + "' />";
  //       mainVideo.setAttribute('poster', '/assets/images/equi-80-r.jpg');
  //     } 
  //     else {
  //       // mainVideo.innerHTML = "<source type='video/mp4' src='/video/" + hiQ + "' />";
  //     }
  //     // mainVideo.addEventListener('play', function(){
  //     //     loader.classList.add('hidden');
  //     // });
  // }

  // const synth = new Tone.Synth().toMaster()
  // synth.volume.value = -20
  // const seq = new Tone.Sequence((time, note) => {
  //   synth.triggerAttackRelease(note, 0.1, time)
  // }, ['C4', 'E4', 'G4', 'B4'])
  // seq.start(0)

  // var minVolume = -Infinity;
  // var maxVolume = -32;
  // var osc = new Tone.Oscillator(396, "sine");
  // // osc.volume.value = minVolume;

  //   // var solfeggioFreqs = [396, 417, 528, 639, 741, 852]; //, 963]; all at same time?
  // osc.toMaster().start();

  // osc.frequency.rampTo(420, 0); // seq val rampto
  // Tone.Transport.start()  

}


var audioReady = function() {
  console.log('audio ready')
  UnmuteButton({
    //the parent element of the mute button
    //can pass in "none" to create the element, but not add it to the DOM
    container : document.querySelector('#muter'),
    //the title which appears on the iOS lock screen
    title : 'Web Audio',
    //force it to start muted, even when the AudioContext is running
    mute : true,
    //AudioContext
    context : new AudioContext(),
  })
  const split = new Tone.Merge().toMaster()
  const leftEar = new Tone.Oscillator(80, "sine").start();
  const rightEar = new Tone.Oscillator(81, "sine").start();
  const rainMaker = new Tone.Noise("pink").start().toMaster();
  
  leftEar.set("volume", -6);
  rightEar.set("volume", -6);
  
  rainMaker.set("volume", -24);
  leftEar.connect(split.left)
  rightEar.connect(split.right)
}

// $(document).ready(ready);
// $(document).on('page:load', ready);

document.addEventListener("page:load", ready);
document.addEventListener("DOMContentLoaded", ready);
document.addEventListener("DOMContentLoaded", audioReady);