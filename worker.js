const filesToCache = [
  "Tarot.htm",
  "Tarot.png",
  "TarotFavIcon_16x16.png",
  "TarotFavIcon_192x192.png",
  "TarotFavIcon_512x512.png",
  "TarotShare.png",
  "manifest.json"
]

const staticCacheName = "tarot-v1"

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        return response
      }
      return fetch(event.request)
    }).catch(error => {
    })
  )
})