// /home/ubuntu/MonitoreJejum/public/sw.js

const CACHE_NAME = 'monitore-jejum-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.jsx',
  // IMPORTANTE: Adicione aqui todos os seus assets estáticos que você quer que funcionem offline.
  // Isso inclui seus arquivos CSS, imagens, fontes, etc.
  // Por exemplo: '/assets/logo.png', '/css/style.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - retorna a resposta do cache
        if (response) {
          return response;
        }
        // Se não encontrou no cache, tenta buscar na rede
        return fetch(event.request);
      })
  );
});
