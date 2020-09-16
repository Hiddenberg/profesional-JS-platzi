/* A partir de Ecmascript 6 se pueden usar clases directamente en JS */
/* class MediaPlayer {
...
} */

//Pero para este curso vamos a utilizar prototipos de la siguiente forma
function MediaPlayer (config) { //como si fuera una funcion normal, y lo que pasemos como parametro, basicamente seria como el constructor de la clase
   this.media = config.el;
   this.plugins = config.plugins || []; // Esto es similar a un if ternario

   this._initPlugins();
   this.togglePlay = this.togglePlay.bind(this); // Hacemos un bind para ligar que el 'this' de esta funcion nunca cambie aun al usarlo como referencia
}
// Para declarar los metodos de esta pseudo-clase, tenemos que hacerlo de la siguiente forma, asignandolos al prototipo de la clase
MediaPlayer.prototype._initPlugins = function () {
   const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
         return this.media.muted;
      },

      set muted(value) {
         if (value === true) {
            this.media.muted = false;
         } else {
            this.media.muted = false;
         }
      }
   };

   this.plugins.forEach(plugin => {
      plugin.run(this)
   });
}

MediaPlayer.prototype.play = function () {
   this.media.play();
}
MediaPlayer.prototype.pause = function () {
   this.media.pause();
}
MediaPlayer.prototype.togglePlay = function (button) {
   console.log(this.media);
   if (this.media.readyState >= 3) {
      if(this.media.paused) {
         this.play();
      } else {
         this.pause();
      }
   }
}

MediaPlayer.prototype.mute = function () {
   this.media.muted = true
}
MediaPlayer.prototype.unmute = function () {
   this.media.muted = false
}
MediaPlayer.prototype.toggleMute = function () {
   if(this.media.muted) {
      this.unmute();
   } else {
      this.mute();
   }
}


// Al momento de crear modulos es necesario hacer un export para que funcionen correctamente al momento de ser importados
export default MediaPlayer;