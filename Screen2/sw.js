self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('signage-screen2-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './2.html',
        './2.png'
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
