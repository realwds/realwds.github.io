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
    "revision": "ad3b8a9d32258cff30714ebd83fa4697"
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
    "url": "assets/js/21.d57ff834.js",
    "revision": "f959916913ffb3057f27efb52bb9dd2b"
  },
  {
    "url": "assets/js/22.8dbab4b1.js",
    "revision": "2fae4b36399cb4cefb96d04f708b53c9"
  },
  {
    "url": "assets/js/23.c2ed926e.js",
    "revision": "5852d0a5075dd931fb3b0ec54c1a7639"
  },
  {
    "url": "assets/js/24.e43d0c52.js",
    "revision": "3074ccfcedf265614585737e443f9bab"
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
    "url": "assets/js/48.c6b39e8e.js",
    "revision": "0344c436d3d7f38e4aa0c6f929689fb7"
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
    "url": "assets/js/app.c82bf15c.js",
    "revision": "a79a5aea146380f4b6d9bf7ce82b3b43"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "cf5bbb2a29745e75c91aeb7bfddb5947"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "56c603670a4103923e2c5342cc604a28"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "b2a9e498e67eb6bb406274cb6d48d92e"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "651eaaed1cfb20078de7a303741c5f55"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "5acdfdfc9e7f00c9db513f6dda5c2290"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "1744daf5d5afd744b8b10f6e24287ef7"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "45dc68e613806e3259766f290aab17b5"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "911a7b47079ca654a43c9b4bed7741e6"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "2fd255de4f5affa8e55c997cbcdf91ef"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "43725e47044db2fcd234e4a4cce28676"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "dd46e96f3efc911ad88af570cc11d173"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "51ba4ab44310e9cf821e37376ace41bf"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "2c44ee2bcfba1abf6ff451f28b870fc0"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "1d4e567a431ebef9be412b11178f7ccb"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "d7c1f8c491223438e7bb4ff0b8342f8a"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "91ea79926ff4c864925af481849d5794"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "56ddfc7718f414be6462ed9fe3a88977"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "738fdd9d36d1b78b88cae8ee0cbaff5d"
  },
  {
    "url": "daily/index.html",
    "revision": "8c6f42ec6410fed92b0c0e308b629d74"
  },
  {
    "url": "en/index.html",
    "revision": "6ce85d59e8856e239b1ad0f7c63f7c13"
  },
  {
    "url": "en/more/about.html",
    "revision": "0b811c840319de83145cb90a013dac5f"
  },
  {
    "url": "en/more/comment.html",
    "revision": "fce1e1ab3c688eae525a3624fab88351"
  },
  {
    "url": "en/more/contact.html",
    "revision": "ebd7bb4eaf40395d2f507deeaf5337c8"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "b62f60eaf376e20990fc9de4cda818c5"
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
    "revision": "9cc31c3fee5b4bfa8f3bafb0a8c7c4b6"
  },
  {
    "url": "jp/index.html",
    "revision": "6887bab5bd62eb11e4db484ae4709841"
  },
  {
    "url": "jp/more/about.html",
    "revision": "f59de056a72e3fc9d666c9daaf2ec83c"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "0a55c13cc9b4ba803d4466d3c5fb8baa"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "ffdaab372d0e721377bb7bac52aabe86"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "0087da1d9b9b793f6ea009db3f9cc89f"
  },
  {
    "url": "kr/index.html",
    "revision": "a50596b52ad80a2d740681ba8107e2e4"
  },
  {
    "url": "kr/more/about.html",
    "revision": "97de76d45ff6f74faa71679f27e27f83"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "898d295a809758f46d1fb7db3385336a"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "a0b1a5a7408252d4633a0fb5ba591086"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "6dbd377f2b9b26405a18a5533097a2a9"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "a408ac76ff21b79c498f92d992a7cd17"
  },
  {
    "url": "more/comment.html",
    "revision": "fe2371ac9b3066193b9037027bde88b1"
  },
  {
    "url": "more/contact.html",
    "revision": "82a6ad311e2128a1f83f4cdb83dc0780"
  },
  {
    "url": "more/sponsor.html",
    "revision": "dbf0a3c0f31d4defb254f3a4634b82fb"
  },
  {
    "url": "post/index.html",
    "revision": "5617898db3f58c61ae15ae4202af1c1c"
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
