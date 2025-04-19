self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('signage-screen1-v1').then(cache => {
      return cache.addAll([
        './1.html',
        './1.png',
        './index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
