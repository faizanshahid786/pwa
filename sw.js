self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('taste-buddy').then((cache) => cache.addAll([
      '/tastebuddy',
      '/tastebuddy/index.html',
      '/tastebuddy/index.js',
      '/tastebuddy/style.css',
      '/tastebuddy/images/logo.png',
      '/tastebuddy/icon/tastebuddy-icon.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
