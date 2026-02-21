const CACHE_NAME = 'jayanth-mobile-v1';
const urlsToCache = [
  '/Jayanth-Mobile-service-/',
  '/Jayanth-Mobile-service-/index.html',
  '/Jayanth-Mobile-service-/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
