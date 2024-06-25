// Service Worker to cache resources for offline use
const CACHE_NAME = 'sports-is-a-no-go-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/audio/background-music.mp3',
    '/manifest.json',
    // Add other resources to cache as needed
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});