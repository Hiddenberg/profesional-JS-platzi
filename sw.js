const VERSION = "v1"

self.addEventListener('install',event => {
   event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
   const request = event.request;

   if (request.method !== "GET"){
      return; //Esto solo hace que el programa salga del bloque de ejecucion y continue con el resto
   }

   //Buscar en cache
   event.respondWith(cachedResponse(request));

   //Actualizar el cache en caso de cambios en la aplicacion
   event.waitUntil(updateCache(request))
})

async function precache() {
   const cache = await caches.open(VERSION);
   cache.addAll([
      '/',
      '/index.html',
      '/assets/index.js',
      '/assets/MediaPlayer.js',
      '/assets/plugins/AutoPlay.js',
      '/assets/plugins/AutoPause.js',
      '/assets/index.css',
      '/assets/BigBuckBunny.mp4',
   ])
}

async function cachedResponse(request) {
   const cache = await caches.open(VERSION);
   const response = await cache.match(request);
   return response || fetch(request); //Esto hace en caso de que no exista 'response' podamos hacer el fetch directamente
}

async function updateCache(request) {
   const cache = await caches.open(VERSION);
   const response = await fetch(request);

   return cache.put(request, response);
}