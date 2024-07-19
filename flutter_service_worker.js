'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "09f7e02f1290be211da707a266f153b3",
".git/config": "7a7ebe6e37cbc253f4c6bf80b49d3cc3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "62d4fb7259d6c7976039514e08252148",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5654e4b8095628b4b972a4ba6ece970",
".git/logs/refs/heads/main": "9c482a53c70a2efae774f99811de7aa2",
".git/logs/refs/remotes/origin/main": "db1ca3b3dc66757b0fb37acbe1cdf9be",
".git/objects/0c/acdf36ca7def1f6df57bb42f24f357b283a4c2": "c8f66d844a31c3740003eb6045ffcd2b",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/5d8a4a8912de6dbf947f73993c603b6343d306": "1a2f0a82a53f7bff7c53492a67494fe1",
".git/objects/15/356354daba799289ac9dd546f47b644ca2144a": "b6d09d3ae0c5827a4d3f6b18c11c99bf",
".git/objects/15/d3fbe3190072a17dc730260a760ba6613d2b0e": "1bdf43e36162c5846d3aac45107f68f7",
".git/objects/16/33bccff2157acf803c0bd3916d30141fd7dee2": "bfc48599153ad41af45ad1ccfab2f268",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/20e06b5b1a562f3c7d3c2776e5706e5eb27d36": "173037b4353455380aa490142ff4b4d9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/8a54dcad7a651f659f6070885006b5e3f26c38": "8974d7ccd6359aed92388ff4ba465a82",
".git/objects/21/b38e275559af303ec2b83ba50c5de4c098e210": "61108d6d6473a9f99de5af22cefd1c5a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/cf0f1fa4c6b1de96e68edc9627ccf500adb182": "c97c16ef147fa6ec969e3487d8c8b295",
".git/objects/29/b51189ba54931dbc213fc3ea53ef79523df6dc": "8ece5452be8cb744e6339a0700d4e208",
".git/objects/2c/2fc168ad7bdd81cc5d1d4641300d947f1a98c9": "49a7f7d4936bcc0055d8bfd35169168c",
".git/objects/32/469000b9284eb12c0f2c5af7f621d57f57e800": "001034d786557fa096d03fae313977dd",
".git/objects/37/aa89a55633b6eeaec0d95d17787d0a864e0c0c": "e4fbda4d26c5f1fdaefce3c6da50972f",
".git/objects/40/28e93d22e9a11c79b6c98f8e3551ce1ed2b677": "f6934169e6d61711b504f5e18d63859f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/82bb0ac0df3f060e90bfcaa572cd0485e33640": "9e0f65c8220f3979208cbf0b885b0b6f",
".git/objects/48/e28ccfd024029be8b8f19e82a2624e8bcefb17": "b2aeddbe6a3f3f13b39f8a030d46f13a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/d55d61b59762ddb4f6ab7fd9d107dcb6a4154a": "0b2b6d0fc77a5f9ee2969a4501b8e050",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/61/c85011adc23781e1eb76b4d623e88ca8e94d18": "55211beeb3feedccc556e25848fa83a4",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/82d65666ebc4dbb2254847952d631175e9d7ba": "2881ef725f66c69fa4164646b2f1110b",
".git/objects/6c/127d9c64ffb16115588608042036a3c9732ee1": "d0efdccc3a7f7fce021566d5e0439d48",
".git/objects/6d/e4f8e0891f0b153b7f345f3f8dd60a5cdcf284": "dd537909131069bbb06df5a19fb79753",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/cf86419903e879b6c7b33352d0ae4ba8c5f7eb": "129c353e69b8f5e7ab2d5a208d0e49a4",
".git/objects/74/02e61d61ea5401d73add1cf8b4a449bbcb3970": "68c61a941a477d06afc3de8f5c4d42f0",
".git/objects/76/c39a402481e026e32ca41d97746334f2f0bb14": "36f3dca55d5faa32d720b7381d27fae9",
".git/objects/78/c53925fe706fdcb22d27894c18adc923521ac3": "d65fda3ee117d712d5bb1dfa9085b3db",
".git/objects/7f/d3e610d24c05e3d8f6f464ada724dbff5c3e40": "211d61fd4b49204ed842dca65400e209",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/c9e699679b1f98a92631f25bbffacb14992e69": "892a89629e11a298b48cca23746021d6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6a0cadeecdb34c154c7f7c452a24f23848944d": "704bf119c213cc71fa379b56af630332",
".git/objects/8c/74d27537a3345833d625d18cfa71b8af0cf9fc": "20626db792bca4b7ffd3f19686e4e554",
".git/objects/90/07ee742d2f2d3099d4fd8ed81de3c952c074bc": "999575721b70b95f378bc1569c356d10",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a4/7498b176efa1372a27f0a2545f2256345268ef": "8f70fcaf050ad4bef9936bb98364dee6",
".git/objects/a4/b6b22abc4ddaea68edbb7f64d176faaef8db63": "28567c91c0a2648803b9b0eb580054a2",
".git/objects/ad/ddbea84991ab859c404c58c0dcd6a15fddfe23": "c82e9520c41167392e74ea822e39f4f7",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/06174018f7bd6faddac41f1e573ded0c5eb00f": "2805cadb2535bfe9c2d66dd7265b842d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/a9ce66b8a7b46c12d615d2dd169de790e32ddc": "bf8ec4bc7ee7de60503b75440fadd9b1",
".git/objects/c0/46b995ebf34da81f9a43da1f96c49378250c95": "a59d3057f1009f2380c059a41342385c",
".git/objects/c3/fea52267872a9ee177b918f72f0ad4ff44928d": "7748a68e671c7f560a694be5142fb150",
".git/objects/c7/1a06ef9100301fe81c98a9571d4826b80affcf": "f6431953b643efa9a914ee0851897262",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/f3d127054914de38c7d5f4a6fec59cae9fbe8e": "1fcb793918e3683a4633c617d9232145",
".git/objects/cc/934736dfaa072dbd3cb127c46202dbd60eb5b1": "6c20fdcf346a85a844d1f26e233b9013",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/bbeb5cdd04d3592f2c113c72c870b94a3ad079": "39fc2875544d578ac1c52e2f606e4ca9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/b8627adeda4b6325fbeeb0c7b5e84d78ede0c4": "b278f36a8e8e8edf6a66b6b1d8bb9aeb",
".git/objects/e6/34f6a291483c0e4ac43b8499c772f1e0c69b8f": "dbc75a55988b7dde25fdf8e3dda10ba3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/61ab0a632d6742409eaa114103f0cce0b9874c": "aeb9cda03e81eab678b2aada8e3b55f2",
".git/objects/f0/ef72bdc8bb8ccd33a525f6e4ec4602fa69b6f2": "574bb73f9ac62fb3120c445f661eff17",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/d5b6dfd4d60596b0007cd978833b2ef6542d5c": "734c4c2e60e8c2936eec379c55df5260",
".git/objects/f6/e22df0e9668c1056ae9e235e1e753e30e82a37": "e2cab2bd83ada250c9c5d23b2aac5591",
".git/objects/f7/2ebd9589702c99d72bb2a8a83d6ae1c57e76e2": "180ac324539b0b45bff03b701608d2c8",
".git/objects/fe/760673361b25acd21f059b809b8e0f92cfa43c": "f8e9c6eb5bb64535b60a5b21a4563268",
".git/refs/heads/main": "bcdbf67854a0c6dd7443d78c29d21ec9",
".git/refs/remotes/origin/main": "bcdbf67854a0c6dd7443d78c29d21ec9",
"assets/AssetManifest.bin": "59caa0a343849199b7dcd26f31539857",
"assets/AssetManifest.bin.json": "a8beb93ecde54a103bafb951d64b1404",
"assets/AssetManifest.json": "3704725e634e40fdd21e44ccceb69209",
"assets/assets/animations/3.json": "13005d3449adcf4394026d27c724cad6",
"assets/assets/animations/a.json": "5b289d28b4f421b370f6cd5c7b43ff55",
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
"assets/fonts/MaterialIcons-Regular.otf": "24e4734d4839c268fa152fe1ee54b8b8",
"assets/NOTICES": "64a69f4dffac2a9a65cc204a4e7f2d07",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e6fe35bef1a2dd6382fe8394b98dbb34",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e3c754d51c8ca431b799c796c9a4a85a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2be9a1c855078dd5b2701d4c09d62773",
"/": "2be9a1c855078dd5b2701d4c09d62773",
"main.dart.js": "7aac28791bccc8584353fac18c60fc73",
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
