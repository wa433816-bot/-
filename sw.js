const CACHE_NAME = 'bawaba-v1';

const FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-512.png',
  './1786386520663.png',
  './1787166170367.jpg',
  './1787412935974.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
      .catch(() => caches.match('./index.html'))
  );
});
