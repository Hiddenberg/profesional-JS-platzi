import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector("video");
let config = {
   el: video,
   plugins: [new AutoPlay(), new AutoPause()] /* instanciamos el plugin */
}

const playButton: HTMLElement = document.querySelector("#playButton");
const muteButton: HTMLElement = document.querySelector("#muteButton");
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

if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js').catch(error => {
      console.log(error);
   })
}