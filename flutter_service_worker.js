'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4df9cc121afe1c00de4e9e396af4cdb1",
".git/config": "7a7ebe6e37cbc253f4c6bf80b49d3cc3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "186b0ab0e4dbc2a58659c49c1fb82e2e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b759cb6ad2f7dd807365bf20cba420f",
".git/logs/refs/heads/main": "ee29037dd88b100d543b5c2ff992ae52",
".git/logs/refs/remotes/origin/main": "8c8c4b230da3e9ab0b957eacc9b4cc1f",
".git/objects/02/be11bfd883f0c89a0712b0297fb288d9934136": "8d6a627205e1d6f6ac75ff412ca002db",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/d013fced248dbc7f0cbbe9b42bbc6f368e684b": "64670296c2e53baa0cbd3eabe3cadb1f",
".git/objects/15/d3fbe3190072a17dc730260a760ba6613d2b0e": "1bdf43e36162c5846d3aac45107f68f7",
".git/objects/16/33bccff2157acf803c0bd3916d30141fd7dee2": "bfc48599153ad41af45ad1ccfab2f268",
".git/objects/16/742a3d8b29c760314891c4a4e7d94cd55a96a4": "de5aab64fb92c787aedef83c5aa626d2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/6ce0f976a73a41ed746affc67d506b0223f21f": "abeac1842dd474f24eee37a09228d8a6",
".git/objects/21/b38e275559af303ec2b83ba50c5de4c098e210": "61108d6d6473a9f99de5af22cefd1c5a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/908a7adc0c295a2b322abc673772ebd0e7f2d1": "0324448a2550742547f524725b758ad1",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/32/469000b9284eb12c0f2c5af7f621d57f57e800": "001034d786557fa096d03fae313977dd",
".git/objects/3d/ccf70b548fad824b0dc803ac99b552b7bf4c2e": "1805496eaf1d3851eb75357cbdb964cb",
".git/objects/40/28e93d22e9a11c79b6c98f8e3551ce1ed2b677": "f6934169e6d61711b504f5e18d63859f",
".git/objects/42/5d5d5d5515d537329520d48456aa7879a3d570": "e4df1fbe81d231d96572aecc7eb09ea6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/7477e2dce65e49e1f4d64f9711f596fbabd618": "91421131ee406b5a24b839570ea04bde",
".git/objects/5d/c028877875a5c2666ac6f2af48fedad80cd8c7": "bafd498752203b1378bacf117787ea06",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/61/c85011adc23781e1eb76b4d623e88ca8e94d18": "55211beeb3feedccc556e25848fa83a4",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/68/82d65666ebc4dbb2254847952d631175e9d7ba": "2881ef725f66c69fa4164646b2f1110b",
".git/objects/6c/127d9c64ffb16115588608042036a3c9732ee1": "d0efdccc3a7f7fce021566d5e0439d48",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/cf86419903e879b6c7b33352d0ae4ba8c5f7eb": "129c353e69b8f5e7ab2d5a208d0e49a4",
".git/objects/74/02e61d61ea5401d73add1cf8b4a449bbcb3970": "68c61a941a477d06afc3de8f5c4d42f0",
".git/objects/74/ab25392ca35073f2e76af2dfd1764f9ea260c0": "218c281cfb214c01fb1231ac60b88eca",
".git/objects/76/c39a402481e026e32ca41d97746334f2f0bb14": "36f3dca55d5faa32d720b7381d27fae9",
".git/objects/78/c53925fe706fdcb22d27894c18adc923521ac3": "d65fda3ee117d712d5bb1dfa9085b3db",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/c9e699679b1f98a92631f25bbffacb14992e69": "892a89629e11a298b48cca23746021d6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6a0cadeecdb34c154c7f7c452a24f23848944d": "704bf119c213cc71fa379b56af630332",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/9cc59e428af1f37e1b3f662e39ff9575d156f4": "15395fc17c8bd64ab7befe493dc142a7",
".git/objects/90/07ee742d2f2d3099d4fd8ed81de3c952c074bc": "999575721b70b95f378bc1569c356d10",
".git/objects/92/559d6c4da00337141077e6bc77c0f42f33c134": "38f1745a711892e9713e6202b450bd30",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a4/b6b22abc4ddaea68edbb7f64d176faaef8db63": "28567c91c0a2648803b9b0eb580054a2",
".git/objects/a5/b118bbe42828ca43bf900035ecaa3909940c71": "23b2473b9fbb75f63cf331b1ea2bac18",
".git/objects/ad/ddbea84991ab859c404c58c0dcd6a15fddfe23": "c82e9520c41167392e74ea822e39f4f7",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/34c61505632b12ed8a923fefd4435d869f488b": "7df3fcb1eb8895ce4f64a1d9a2775a34",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/a9ce66b8a7b46c12d615d2dd169de790e32ddc": "bf8ec4bc7ee7de60503b75440fadd9b1",
".git/objects/c0/46b995ebf34da81f9a43da1f96c49378250c95": "a59d3057f1009f2380c059a41342385c",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/fea52267872a9ee177b918f72f0ad4ff44928d": "7748a68e671c7f560a694be5142fb150",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cc/934736dfaa072dbd3cb127c46202dbd60eb5b1": "6c20fdcf346a85a844d1f26e233b9013",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9205ed1b29b574e71b5368d1c8b03ed3f28aa7": "a8264ba99abafc87f23061ff2c8ef932",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/b8627adeda4b6325fbeeb0c7b5e84d78ede0c4": "b278f36a8e8e8edf6a66b6b1d8bb9aeb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/bf780f3158f79618a5271a738b8ae08c38541a": "46585e52e9cf593055953712268c12c8",
".git/objects/f6/e22df0e9668c1056ae9e235e1e753e30e82a37": "e2cab2bd83ada250c9c5d23b2aac5591",
".git/objects/fe/760673361b25acd21f059b809b8e0f92cfa43c": "f8e9c6eb5bb64535b60a5b21a4563268",
".git/refs/heads/main": "6d8c7ba1929358df4af72ff4074d15e3",
".git/refs/remotes/origin/main": "6d8c7ba1929358df4af72ff4074d15e3",
"assets/AssetManifest.bin": "afbe06f443ccaf40b2c57fd8ded996ba",
"assets/AssetManifest.bin.json": "75993cc60ca20e3107ad3705c894707a",
"assets/AssetManifest.json": "16fda792aea08d595051776a3bff53e8",
"assets/assets/animations/3.json": "13005d3449adcf4394026d27c724cad6",
"assets/assets/animations/a.json": "5b289d28b4f421b370f6cd5c7b43ff55",
"assets/assets/images/bg.png": "6c4fd73109716bde31f988bbb53d9d07",
"assets/assets/images/personImage.png": "9cae13050c4d6bc3fdc3e0a03506811b",
"assets/assets/images/phone.png": "c2e034c71c3d69e7e44ca399fa8bb424",
"assets/assets/vectors/android.png": "3e263dc6ada70943f24ee173c9429129",
"assets/assets/vectors/blob.svg": "6e76a5b509cc9b30833cbc439ff2fb6c",
"assets/assets/vectors/btn.svg": "94bac5235312090a57316581850fea36",
"assets/assets/vectors/code.svg": "b75e8ae6287cd518487ba7499c13462c",
"assets/assets/vectors/django.png": "c47627db4052fa207fcc505852259e7d",
"assets/assets/vectors/flutter.png": "77ea4ed7e7da281f4bcc339adedb2f67",
"assets/assets/vectors/github.png": "abbc5db5b3315d2bf2362e30eb9401c7",
"assets/assets/vectors/icon1.svg": "5cdcc2121dc19b14c81f42d4247dbb9b",
"assets/assets/vectors/instagram.png": "6fee368d224c18198389e5ac1a2ff18b",
"assets/assets/vectors/java.png": "19ed2428dffd33fe2b4f436b37d1d62b",
"assets/assets/vectors/linkedin.png": "e4c101b73e3e23002202ae7b5ec7f190",
"assets/assets/vectors/logo.png": "2cac7303a214eb0ef8126eafa9d6c1e4",
"assets/assets/vectors/logo.svg": "69b31bb058e615e2b7a6e1536b856857",
"assets/assets/vectors/medium.png": "ce47b48ecdaf6c56785a709ab8b6b045",
"assets/assets/vectors/upwork.png": "5719defdc9db290e8e0d466c47c58c55",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ea7e92e2bd0d5d4af3c6e4033dfb58ac",
"assets/NOTICES": "b10308b9122b3248c07b65d54e728c95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "e6fe35bef1a2dd6382fe8394b98dbb34",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "cd6874199812001e9803c9eb7dc3af9b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6164171f4dfc88e5d95c9e420021acba",
"/": "6164171f4dfc88e5d95c9e420021acba",
"main.dart.js": "e468281cb1a0079ea4d3f09775fb2913",
"manifest.json": "9cc5002128a3005bf4b0f4c1afba1651",
"version.json": "2a4bdd3370ee966319e180d97d91e050"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
