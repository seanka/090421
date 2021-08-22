'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ac52c34c31fe9504e886c6da558cfcf0",
".git/config": "6b01c622b62f9bd5cfa1b517ff3fcf31",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "e70d50ab8426d642f10430e380381fb6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e4a49d7a55a4dca97ef8992f74c0d85f",
".git/logs/refs/heads/master": "e4a49d7a55a4dca97ef8992f74c0d85f",
".git/logs/refs/remotes/origin/master": "73a8ba1c1444ff262670ea8cb2b8b18e",
".git/objects/01/5548ef620ac4a00b1af98bc0939979d4cd8056": "204b001bb395009ce2b7cab0bfb6068c",
".git/objects/18/bf795eb99d88014c759402a060a033f1c35913": "c10fc64795c21a220f1b8425265a61c0",
".git/objects/1d/97015e2d37a61a5cd1c7f0e3d394dc8f509859": "ded33c753497522020e9bebdeb84a013",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/27/b7ff071735f12fbaf4760eb76d71f36dd29179": "eb95c6fe214fa9d6b112359db83510be",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/f09bf68d1cbf963820b2757de9c11a51175854": "d66a203c7d31f35ce1fc0267a33f1749",
".git/objects/35/51bfbcfe9e2d2761c4451df224918bff288f53": "79717021383cc849dcf8d677d78bb234",
".git/objects/41/6c9c8275377c07527694165a510d9f5d1f5209": "6fb8bd1d387ff585877d607605160c1d",
".git/objects/42/96f68f0ce32cb9262452c3ccbdaed0ace23b79": "7303c4d56552ccc04c5b40ab674c3dac",
".git/objects/43/0e45defd20963d533cfdf15f49c6453c269799": "fedd1437f008785e9da30d502f71b4c8",
".git/objects/55/251951ed186588cf85d0d802e90cfc8b5979a0": "9e74df7e4c0a5f7effc1eb5020030807",
".git/objects/56/9d6cb6256ea4fde6c8fc1d4bc71275aafe8354": "9cf0c9c8b9b7643ce18a6dc4103907db",
".git/objects/57/c11f91b828dfebf45aa5f2f71724e70643d2e7": "4954511c253f09e83826f82a0bf28d06",
".git/objects/5e/672fafdd34bd41638402482a72a5f088548bdb": "97629aea3dd80ab9ea29e2ddc1e97ead",
".git/objects/5e/b3725058ed4f966e012b13ed5d043246412350": "5e356023b2266d06848712f0685fa268",
".git/objects/6a/8405206c00d67cd76abff046ac5f941907d7d7": "536e9871846644423c0f4988f7509f5e",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/73/db4069cc69f36eb8296c5f61159cb3d61ff951": "7f01ddda3d031dd2d4dc6a34044b6c36",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/24f8ebd971c6ec7f46b11b4e5fff9301ca27e0": "8e2fca27ae665d0c9ed23464f30bc4a5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/f526bb5e27cee5aff027d3b4e54a187e16a181": "7a1c20d83ff7c85e96e9729bfd9ac05d",
".git/objects/91/0d692a3f67361fd114aea6b81b8fd2568ec2ae": "f7d864938bf1a58c8a59fe76564a1c35",
".git/objects/97/601596c971240e53ea8e48066f493b5841da09": "e16c071362eb0331fd229c627b5b31c9",
".git/objects/9c/5eb2f4b9eb7e03709b9228666a7751525f36c9": "16a267d77e83b4e4f71f416ce019f09f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/ecd2e4d82c5442a0a8bf7108dc1ac36be2dae2": "8fd0e4dcff480ea3df1ea64f961742a2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/83e0eca897b6fc493597ec9c08750ef7343d6b": "21ccff82608f46ffa17ad655c7216ca1",
".git/objects/c3/fea2a1318f284e20a27f14beb203237e5079fc": "458bf42274d52bab33f4da3a4b60f22d",
".git/objects/d2/ba1360c507eaca87bdaa65904878a6f337fc8a": "7bccb299d2c3fa7cdc389fd9d7864200",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/c7b7b532553694a3cee18845dac5522efba6ae": "c66120b9c36b9257bedf86667048299b",
".git/objects/df/b156ab8a3313382ceba36875a9fed9234004ce": "3804ca66356c92dfc032cc73de98cd6e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/e8238cc3af8b7b06a46bd580088e6a0187dd63": "c57ee96bb36e2866893e95b22aaaa3a6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/c72ed5af55717bdecc79615c1b18e8f282c1e8": "5695de5f052acb6241ca147cfe20fec7",
".git/objects/f4/790da671168df2e9b05d2896a5788b91a514b1": "d5790cbed6ac3077828278a621921674",
".git/objects/f7/9c9ccc66f9d8b393760c900533cbc5b67fc076": "0c927ae903dee8f77699156597259c79",
".git/objects/f8/a43f2b203054676b64e38e2b78af5468c39b6d": "c74b50a853cc4b1a5f5dc1f07b4a619a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "d384678af3a69d086921f50f8aff1deb",
".git/refs/remotes/origin/master": "d384678af3a69d086921f50f8aff1deb",
"assets/AssetManifest.json": "3cb800eebeb24616fd7294459b98ff28",
"assets/FontManifest.json": "4579d96733135340eca1f008c56959ae",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/fonts/nikotinusDEMO.otf": "c64727ba0523d723e776bdd95661da55",
"assets/images/campfire.gif": "44aabf18a71ff66482bc4f3393dda913",
"assets/images/firework.gif": "a03b89b4915e7263d979e6e2d297fe73",
"assets/images/ofischl.png": "8ce2330bb978f11c8f9bc2aeb0c9f4a1",
"assets/images/Sketch.png": "9ecdfd40b25eff1503b00ed7c3f0041d",
"assets/NOTICES": "fdb932d0c5b4b9b38df7746d616e3446",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"git": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "1a6861b4565e225fe8685966ed9cfc50",
"icons/Icon-512.png": "5bac7ea3b3f287902a29ab7fd75de0db",
"icons/Icon-maskable-192.png": "3e21cc7ca5e2762e6e099efc9d912a68",
"icons/Icon-maskable-512.png": "1cd19596bce9a759d02dd470791e1fc8",
"index.html": "cf44bac1af6853a161d29fb2fc596f41",
"/": "cf44bac1af6853a161d29fb2fc596f41",
"main.dart.js": "54b1f778e5fa959860ba494938fe517d",
"manifest.json": "e7249a52a9c372928cad0a341782ec5e",
"version.json": "98283d51d6fc53b9449adf601a657ec2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
