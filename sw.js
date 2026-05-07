const CACHE_NAME = "portfolio-v5";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css?v=20260312",
  "/couleurs.css?v=20260312"
];

// INSTALL
self.addEventListener("install", event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.error("CACHE ERROR:", err))
  );
});

// ACTIVATE
self.addEventListener("activate", event => {

  event.waitUntil(
    Promise.all([
      caches.keys().then(keys =>
        Promise.all(
          keys.map(key => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        )
      ),
      self.clients.claim()
    ])
  );
});

// FETCH
self.addEventListener("fetch", event => {

  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
