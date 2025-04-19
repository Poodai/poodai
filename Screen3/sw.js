self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('signage-screen3-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './3.html',
        './3.png'
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
