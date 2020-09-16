import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
let config = {
   el: video,
   plugins: [new AutoPlay()] /* instanciamos el plugin */
}

const playButton = document.querySelector("#playButton");
const muteButton = document.querySelector("#muteButton");
const player = new MediaPlayer(config);

function changeButton(button, secondState) {
   if(!button.defaultState) {
      button.defaultState = button.innerHTML;
   }

   button.innerHTML = (button.innerHTML === button.defaultState) ? secondState : button.defaultState;
}

/*  ------------------- INTERACCIONES DE USUARIO -------------------  */
// ↓ click en el boton
playButton.onclick = () => {
   console.log('click en el boton play');
   player.togglePlay();
   changeButton(playButton,'Play');
}
muteButton.onclick = () => {
   console.log('click en el boton mute');
   player.toggleMute();
   changeButton(muteButton,'Mute');
}

// ↓ click directamente en el video
video.onclick = () => {
   console.log('click en el video');
   player.togglePlay();
   changeButton(playButton,'Play');
}