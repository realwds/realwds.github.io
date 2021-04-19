/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "78793067f62d161886dd1eba4bd21787"
  },
  {
    "url": "assets/css/0.styles.77222301.css",
    "revision": "f3886c1117ac0bb8dcc98a66e9c64c2d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.26fd7dee.js",
    "revision": "f0a96dbca031012f5d55a8b4a2ddd472"
  },
  {
    "url": "assets/js/11.0213e9ef.js",
    "revision": "f43253982281c2f45cac0908a2701990"
  },
  {
    "url": "assets/js/12.baa8e0d3.js",
    "revision": "eafa7ae368f6d0806c84a44865dae072"
  },
  {
    "url": "assets/js/13.c0a3cf78.js",
    "revision": "4984d6e54110d2a5183788d9b95fce83"
  },
  {
    "url": "assets/js/14.2c4d9309.js",
    "revision": "8df5aa8f031c1478e19638982c7a49d2"
  },
  {
    "url": "assets/js/15.99a91d08.js",
    "revision": "5012a5e9d2a95d5bbe546fa8e026fbf3"
  },
  {
    "url": "assets/js/16.38a8f619.js",
    "revision": "1a4773f41d092815d8c894d47da72cc1"
  },
  {
    "url": "assets/js/17.25a76dca.js",
    "revision": "648777885148e6872f00a1552e954105"
  },
  {
    "url": "assets/js/18.32f0b806.js",
    "revision": "1c7ecde8cf1c5d94dba243a893e409b7"
  },
  {
    "url": "assets/js/19.39789d17.js",
    "revision": "77a8706ae07d1f85126a0992fa4d4083"
  },
  {
    "url": "assets/js/2.e56ba6d0.js",
    "revision": "0e34270c698167f1b92e8db22eb7a62e"
  },
  {
    "url": "assets/js/20.8ebddbb5.js",
    "revision": "476283a791b8c2827a8c0ff787b2d523"
  },
  {
    "url": "assets/js/21.b2e83123.js",
    "revision": "3a6cc6a12293c6d6ce1dd430574d50ce"
  },
  {
    "url": "assets/js/22.828fc6ea.js",
    "revision": "2f3352f815c04b94e0d6f56f52b901fe"
  },
  {
    "url": "assets/js/23.601e3726.js",
    "revision": "a5448f4f5d26b94fca0837ee86aa0f8c"
  },
  {
    "url": "assets/js/24.b20171b1.js",
    "revision": "94682524e6136cb854a077415cdbcafe"
  },
  {
    "url": "assets/js/25.12ffe642.js",
    "revision": "fd72e41af341d8630991edb74777f087"
  },
  {
    "url": "assets/js/26.3b553db4.js",
    "revision": "79de20038b45eab4127b2a1cfe236c04"
  },
  {
    "url": "assets/js/27.e717ab35.js",
    "revision": "7d575a12afc12d63c08051c6165c901d"
  },
  {
    "url": "assets/js/28.6c983386.js",
    "revision": "5ea84105f674d04e230d615550c04d1d"
  },
  {
    "url": "assets/js/29.a15adbb6.js",
    "revision": "8518d2cb80b78854a6090c8da3eb59f5"
  },
  {
    "url": "assets/js/3.1a406340.js",
    "revision": "0c7d40fec7572f6a9d7389e0285c76a9"
  },
  {
    "url": "assets/js/30.44c089ac.js",
    "revision": "37986fb93e8a3777bcbe872d193e136e"
  },
  {
    "url": "assets/js/31.fb37b35c.js",
    "revision": "83b4b2fad24954c8d9c429d5f1c3274e"
  },
  {
    "url": "assets/js/32.f635ff4e.js",
    "revision": "9cc9a46fc1eb53d3e967371e0115704a"
  },
  {
    "url": "assets/js/33.61dcf1a5.js",
    "revision": "473ee194709f9417b4010e1926233aad"
  },
  {
    "url": "assets/js/34.7b4e9c09.js",
    "revision": "f78655ad16fb205a0176a85e1e22c33b"
  },
  {
    "url": "assets/js/35.24084ee7.js",
    "revision": "03128fcf1b0b15e01570d2d69e54aa72"
  },
  {
    "url": "assets/js/36.bbc48a03.js",
    "revision": "a6bb6f8d1f8c6f926335eb108a403b5f"
  },
  {
    "url": "assets/js/37.b01a78dd.js",
    "revision": "9761ddb0623257488587027872db3066"
  },
  {
    "url": "assets/js/38.4cf216b0.js",
    "revision": "e8ee44eddfc1aa181ff782e82c9717ac"
  },
  {
    "url": "assets/js/39.fa7851fd.js",
    "revision": "f977f0f642e46ac2a1447c87c715c6e2"
  },
  {
    "url": "assets/js/4.affed72f.js",
    "revision": "2a0ac0df557451ad4cbcbaa9eaf719c7"
  },
  {
    "url": "assets/js/40.5362a9e2.js",
    "revision": "4bbb840f90037705de47314e8fd21e90"
  },
  {
    "url": "assets/js/41.2de142fd.js",
    "revision": "473b36273051cda33dec33a94ee2bd44"
  },
  {
    "url": "assets/js/42.a4b8c462.js",
    "revision": "809ddc177377a813ae8fa7e13732d743"
  },
  {
    "url": "assets/js/43.3ceeee86.js",
    "revision": "628d73e893e0277801dc847c59734190"
  },
  {
    "url": "assets/js/44.d31f916b.js",
    "revision": "fb147f3465fae340afcb1fcf91ec80b5"
  },
  {
    "url": "assets/js/45.582e0070.js",
    "revision": "55e99a564fc956255e1c0b1465c3a7b3"
  },
  {
    "url": "assets/js/46.dcfb1ad8.js",
    "revision": "9e318d52887c208fcdb1b913cc0c2db1"
  },
  {
    "url": "assets/js/47.61c495a2.js",
    "revision": "072f845c168bed967abc019d60686714"
  },
  {
    "url": "assets/js/48.c923ece1.js",
    "revision": "7e4035902d6fcb6effce3f9bf5d34b6c"
  },
  {
    "url": "assets/js/49.716f582d.js",
    "revision": "e95b3d255151db89b8bfcb328e474209"
  },
  {
    "url": "assets/js/5.f4c20fb7.js",
    "revision": "2f8623e2abdf740e0271a26c7d14fd94"
  },
  {
    "url": "assets/js/50.d9d5603c.js",
    "revision": "5f7432bfbbb2f350cab294fec64a0abb"
  },
  {
    "url": "assets/js/6.8ac81527.js",
    "revision": "45652c94d8e10561aa4b07b23fcbcdac"
  },
  {
    "url": "assets/js/7.741de6ef.js",
    "revision": "05793ce14717b320e257107580f6a347"
  },
  {
    "url": "assets/js/8.651be021.js",
    "revision": "f643845a8a053b7fc07b4e3255f80189"
  },
  {
    "url": "assets/js/9.3a8429e2.js",
    "revision": "6feaa5df0491c173cadfffaa5c292f87"
  },
  {
    "url": "assets/js/app.92a782ca.js",
    "revision": "fd76e7c0a5dd4517ec5e66acef62479e"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "afe78fd6a623904eb201b1ddbc6698de"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "d4df8ec187fc11c0cde2156bf8485a75"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "fb4785dd7aff7a0d68c7a7963b7c63a5"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "d108041285e448cddff2e6146dc48b98"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "2e16ffed865c58592d928638030d8071"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "f2517f97e23de9f3795015361f965161"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "dd49410e3dced361be3200ba7dbba4b0"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "02f31a937261106277902c84d3088076"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "43765e44c1ab83c6a397bf7a8459f12a"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "7e4414dbb3aa57de23c18f63dddfad48"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "eeb742914e9d678da82b9ac146fb4510"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "944e65d6abda6f57ec3e4d9576d0fe51"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "9de8b00278928d3a0d24da5576e9d343"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "35dc6295d2bc32b1cea2a96adcd9479d"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "fd6bcbf296fa96ceafe307479b8b35ce"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "943b659b53c1674eec321e3e5bc70a13"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "2ec6d9bff2ea68482970f04f13e13db7"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "398fcfb2bc4095973d4d7bcb16320894"
  },
  {
    "url": "daily/index.html",
    "revision": "b9357c0e1c466fa84d1498eabed5d325"
  },
  {
    "url": "en/index.html",
    "revision": "587c87e9a25959f61903e5b55229848f"
  },
  {
    "url": "en/more/about.html",
    "revision": "5614eb40e272d810ab932ffc08c97eac"
  },
  {
    "url": "en/more/comment.html",
    "revision": "497bedb0ee46e7dea32d27ffa70add70"
  },
  {
    "url": "en/more/contact.html",
    "revision": "b0fb4f8e4d81cb723d43eb11cdcc6e8c"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "7258d3ca285fbcabc554ed0c9fc716b7"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "74779647ebbdb912b08b9df277308310"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "41184ffe5de6a7fe84b6263f3b77dcbd"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "a96cea4ea231deaff16c4eb0b51e541b"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "172238e61dded11ec72b0add6ca19762"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "beb6067b35c0007416f2a0261d3f3b90"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "415f2c78ca17b12595d0e9df19222288"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "0f1997696436d8f23cf9a979a26fe5fe"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "461e1487402df3a5db256aad9b69d794"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "d982f12c20d275e2ed2fce7377db5eb5"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "img/home.png",
    "revision": "814566ef9f01d8c1d5d29cdca790e7a0"
  },
  {
    "url": "index.html",
    "revision": "36818d64f84e50627dfc5179fc309a8c"
  },
  {
    "url": "jp/index.html",
    "revision": "fb19678a9e4ab62ab59926bb0d1dd21a"
  },
  {
    "url": "jp/more/about.html",
    "revision": "4dba973dafd76c8631db4a7219c31164"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "2d70054d87a686097b450525556f28ea"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "988b8188a12d5bb0e970a1441ea28725"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "cba91279b208f878f1b6f65bda5d0249"
  },
  {
    "url": "kr/index.html",
    "revision": "0b714d3be2a831a3b326fd825537117e"
  },
  {
    "url": "kr/more/about.html",
    "revision": "94c99bd0cbd295dcc206963e1c798a4a"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "5e2b0986db94debd1bb80e44a33ab901"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "b382598d67ea47176f9b64d96f2cf499"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "c8911b226b33038b6dbf93a76e4d72b7"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "21426bd0fd527c25e5d145a9c9234d84"
  },
  {
    "url": "more/comment.html",
    "revision": "65ae38b2a849c1e6a93f5b118409a46c"
  },
  {
    "url": "more/contact.html",
    "revision": "1b9e6016fff728cdff8e9c51897ae705"
  },
  {
    "url": "more/sponsor.html",
    "revision": "61ca35652e461e514d8fb78d38b36b5e"
  },
  {
    "url": "post/index.html",
    "revision": "c2efba848458f95a809409e15fd5bfa4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
