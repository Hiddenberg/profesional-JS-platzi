/* A partir de Ecmascript 6 se pueden usar clases directamente en JS */
/* class MediaPlayer {
...
} */

//Pero para este curso vamos a utilizar prototipos de la siguiente forma
class MediaPlayer {
   media: HTMLMediaElement;
   plugins: Array<any>;

   constructor(config) {
      this.media = config.el;
      this.plugins = config.plugins || []; // Esto es similar a un if ternario

      this.initPlugins();
      this.togglePlay = this.togglePlay.bind(this); // Hacemos un bind para ligar que el 'this' de esta funcion nunca cambie aun al usarlo como referencia
   }
   // Para declarar los metodos de esta pseudo-clase, tenemos que hacerlo de la siguiente forma, asignandolos al prototipo de la clase
   private initPlugins() {
/*       const player = {
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
      }; */

      this.plugins.forEach(plugin => {
         plugin.run(this);
      });
   }
   play() {
      this.media.play();
   }
   pause() {
      this.media.pause();
   }
   mute() {
      this.media.muted = true;
   }
   unmute() {
      this.media.muted = false;
   }
   toggleMute() {
      if (this.media.muted) {
         this.unmute();
      } else {
         this.mute();
      }
   }

   togglePlay () {
      console.log(this.media);
      if (this.media.readyState >= 3) {
         if(this.media.paused) {
            this.play();
         } else {
            this.pause();
         }
      }
   }
}





// Al momento de crear modulos es necesario hacer un export para que funcionen correctamente al momento de ser importados
export default MediaPlayer;