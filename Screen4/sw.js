self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('signage-screen4-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './4.html',
        './4.png'
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
