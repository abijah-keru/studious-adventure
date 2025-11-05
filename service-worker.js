// Service Worker for Nairobi Dates PWA (auto-update enabled)

const CACHE_NAME = 'nairobi-dates-v1';

const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './images/logo.png'
];

// 💡 Install: cache essentials + skip waiting so new version activates quickly
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting(); // Immediately activate new SW
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// 💡 Activate: take control of open pages immediately
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
      await self.clients.claim(); // Start controlling all clients immediately
    })()
  );
});

// 💡 Fetch: try network first, then fallback to cache (always fetch latest)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
