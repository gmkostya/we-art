// $('#playBtn').on("click",function(){
//     if($(this).hasClass('play'))
//      {
//        $(this).removeClass('play');
//        $(this).addClass('pause');
//        audio.play();
//      }
//     else
//      {
//        $(this).removeClass('pause');
//        $(this).addClass('play');
//        audio.pause();
//      }
//   });
  
//   audio.onended = function() {
//        $("#playBtn").removeClass('pause');
//        $("#playBtn").addClass('play');
//   };





/*stylint-disable*/
let isPlayed=false;

let playButton= document.getElementById('playBtn');

function toggle () {

let claasName = playButton.className;

console.log(claasName);


if (claasName==='pause') {
    playButton.className = 'play';
    playButton.innerHTML = 'Play';
    isPlayed = true;
} else {
    playButton.className='pause';
    playButton.innerHTML='Pause';
    isPlayed='false'
}

}