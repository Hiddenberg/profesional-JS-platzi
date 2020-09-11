import MediaPlayer from './MediaPlayer'

const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer({ el: video });


/*  ------------------- INTERACCIONES DE USUARIO -------------------  */
// ↓ click en el boton
button.onclick = () => {
   console.log('click en el boton');
   player.togglePlay();
}

// ↓ click directamente en el video
video.addEventListener('click',player.togglePlay);

