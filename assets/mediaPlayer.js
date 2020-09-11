/* A partir de Ecmascript 6 se pueden usar clases directamente en JS */
/* class MediaPlayer {
...
} */

//Pero para este curso vamos a utilizar prototipos de la siguiente forma
function MediaPlayer (config) { //como si fuera una funcion normal, y lo que pasemos como parametro, basicamente seria como el constructor de la clase
   this.media = config.el;
}
// Para declarar los metodos de esta pseudo-clase, tenemos que hacerlo de la siguiente forma, asignandolos al prototipo de la clase
MediaPlayer.prototype.play = function () {
   this.media.play();
}
MediaPlayer.prototype.pause = function () {
   this.media.pause();
}
MediaPlayer.prototype.togglePlay = function () {
   if (this.media.readyState >= 3) {
      if(this.media.paused) {
         this.media.play();
      } else {
         this.media.pause();
      }
   }
}


// Al momento de crear modulos es necesario hacer un export para que funcionen correctamente al momento de ser importados
export default MediaPlayer;