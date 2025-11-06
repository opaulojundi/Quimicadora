const CACHE_NAME = "quimicadora-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "css/style.css",
  "js/script.js",
  "img/logo.jpg",
  "manifest.json"
];

// Instala o Service Worker e faz cache dos arquivos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  console.log("Service Worker instalado");
});

// Ativa e limpa caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Removendo cache antigo:", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Intercepta requisições e serve do cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
