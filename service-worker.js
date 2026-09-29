importScripts('./characters.js');

const CACHE_NAME = 'aniranker-v12';
const APP_SHELL = [
    './',
    './index.html',
    './daily.html',
    './classic.html',
    './kmk.html',
    './top10.html',
    './connection.html',
    './anidle.html',
    './lexikon.html',
    './achievements.html',
    './patchnotes.html',
    './impressum.html',
    './suggest.html',
    './tot.html',
    './style.css',
    './characters.js',
    './characters.json',
    './achievements.js',
    './classic.js',
    './kmk.js',
    './top10.js',
    './connection.js',
    './anidle.js',
    './lexikon.js',
    './tot.js',
    './daily.js',
    './daily-page.js',
    './pwa.js',
    './manifest.webmanifest',
    './patchNotes.txt',
    './assets/icon.png',
    './assets/icon-192.png',
    './assets/icon-512.png',
    './assets/icon-192-maskable.png',
    './assets/icon-512-maskable.png'
];

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(APP_SHELL);

        const imageUrls = [...new Set(CHARACTERS_DATA.map(character => `./${character.image}`))];

        for (let index = 0; index < imageUrls.length; index += 20) {
            const batch = imageUrls.slice(index, index + 20);
            await Promise.allSettled(batch.map(url => cache.add(url)));
        }

        await self.skipWaiting();
    })());
});

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames
                .filter(cacheName => cacheName !== CACHE_NAME)
                .map(cacheName => caches.delete(cacheName))
        );
        await self.clients.claim();
    })());
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                    return response;
                })
                .catch(async () => {
                    return (await caches.match(event.request)) || caches.match('./index.html');
                })
        );
        return;
    }

    event.respondWith((async () => {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) return cachedResponse;

        const networkResponse = await fetch(event.request);
        if (networkResponse.ok && new URL(event.request.url).origin === self.location.origin) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
    })());
});
