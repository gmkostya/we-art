
// const video = document.querySelector('video');
// video.onclick = () => video.paused ? video.play() : video.pause();


/*stylint-disable*/
// let isPlayed=false;

// let playButton= document.getElementById('playBtn');

// function toggle () {

// let claasName = playButton.className;

// console.log(claasName);


// if (claasName==='pause') {
//     playButton.className = 'play';
//     playButton.innerHTML = 'Play';
//     isPlayed = true;
// } else {
//     playButton.className='pause';
//     playButton.innerHTML='Pause';
//     isPlayed='false'
// }

// }



// Take 1 here: https://codepen.io/koenigsegg1/pen/QNMJvP

// 3-variant

// var atlanticlight = document.querySelector("#atlanticlight video"),
// playpause = document.getElementById("playpause"),
// lefttoplay = document.getElementById("lefttoplay"),
// righttoplay = document.getElementById("righttoplay"),
// lefttopause = document.getElementById("lefttopause"),
// righttopause = document.getElementById("righttopause");
// atlanticlight.removeAttribute("controls");
// playpause.style.display = "block";
// playpause.addEventListener('click',function(){
// 	if (atlanticlight.paused) {
// 		atlanticlight.play();
// 		playpause.classList.add("playing");
// 		lefttopause.beginElement();
// 		righttopause.beginElement();
		
// 	} else { 
// 		atlanticlight.pause();
// 		lefttoplay.beginElement();
// 		righttoplay.beginElement();
// 		playpause.classList.remove("playing");
// 	}
	
// },false);


// 4-variant
let container = document.querySelector('.video-container'),
    video = container.querySelector('video'),
    controls = container.querySelector('.video-controls');

video.load();
video.volume = .2;

container.addEventListener('click', function(e) {
  if(video.paused) {
    if(controls.classList.contains('video-controls--play'))
      controls.classList.remove('video-controls--play');
    controls.classList.add('video-controls--pause');
    video.play();
  } else {
    if(controls.classList.contains('video-controls--pause'))
      controls.classList.remove('video-controls--pause');
    controls.classList.add('video-controls--play');
    video.pause();
  }
});

video.addEventListener('ended', function(e) {
  video.currentTime = 0;
  if(controls.classList.contains('video-controls--pause'))
    controls.classList.remove('video-controls--pause');
  controls.classList.add('video-controls--play');
}, false);