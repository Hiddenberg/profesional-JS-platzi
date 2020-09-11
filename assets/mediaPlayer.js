const video = document.querySelector("video");
const button = document.querySelector("button");
let head = document.getElementById('header');


/* A partir de Ecmascript 6 se pueden usar clases directamente en JS */
/* class MediaPlayer {

} */


//Pero para este curso vamos a utilizar prototipos de la siguiente forma
function MediaPlayer (config) { //como si fuera una funcion normal, y lo que pasemos como parametro, basicamente seria como el constructor de la clase
   this.media = config.el
}


// Para declarar los metodos de esta pseudo-clase, tenemos que hacerlo de la siguiente forma, asignandolos al prototipo de la clase
MediaPlayer.prototype.play = function () {
   video.play();
}
MediaPlayer.prototype.pause = function () {
   video.pause();
}
MediaPlayer.prototype.playPause = function () {
   if (video.readyState >= 3) {
      if(video.paused) {
         video.play();
      } else {
         video.pause();
      }
   }
}

const player = new MediaPlayer({ el: video });

/*  ------------------- INTERACCIONES DE USUARIO -------------------  */
// ↓ click en el boton
button.onclick = () => {
   console.log('click en el boton');
   player.playPause();
}

// ↓ click directamente en el video
video.addEventListener('click',player.playPause);

domc