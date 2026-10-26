// Offline PWA update policy: pre-cache while installing, then wait for explicit
// approval from the app before taking over an existing open workout.
const CACHE_NAME='climb-timer-v12-1';
const FILES=['./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(FILES)));
});
self.addEventListener('message',event=>{
  if(event.data&&event.data.type==='SKIP_WAITING')event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(key=>key.startsWith('climb-timer-')&&key!==CACHE_NAME).map(key=>caches.delete(key))
  )).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(response=>{
      if(response.ok){
        const copy=response.clone();
        caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy));
      }
      return response;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
