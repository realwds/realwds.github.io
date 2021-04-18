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
    "revision": "dbdcf31efb34158fd08d549ebe83244c"
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
    "url": "assets/js/30.4b755c1d.js",
    "revision": "8bcee9163750a6c676afd0b60cc433a3"
  },
  {
    "url": "assets/js/31.96b1c8a7.js",
    "revision": "3e5aaf4ecf9747e0ae8402ecd5924e01"
  },
  {
    "url": "assets/js/32.3f8d9419.js",
    "revision": "ebac9afbf48aa17013b4a88e41ecca5a"
  },
  {
    "url": "assets/js/33.4d566ff1.js",
    "revision": "52dddb947944e1b56ff1417ddf8cead2"
  },
  {
    "url": "assets/js/34.e2ceb972.js",
    "revision": "2ff8273808f93a507c5613669d406d6b"
  },
  {
    "url": "assets/js/35.c2864e67.js",
    "revision": "cadf2a97b20fbfb739101d2cd367c404"
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
    "url": "assets/js/4.eda00bfb.js",
    "revision": "2c02c031dbcfb6d74b524fc2b219a6b8"
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
    "url": "assets/js/48.473b0271.js",
    "revision": "816d7a7cdb2cbcbb0cae935f1c98893d"
  },
  {
    "url": "assets/js/49.db646560.js",
    "revision": "c4da04c04b596a2fc8dc960ee9271a51"
  },
  {
    "url": "assets/js/5.f4c20fb7.js",
    "revision": "2f8623e2abdf740e0271a26c7d14fd94"
  },
  {
    "url": "assets/js/6.7fe9394d.js",
    "revision": "2694b070ad4ba63695623fc8e1f32fc0"
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
    "url": "assets/js/app.41345ef3.js",
    "revision": "fe9c35a919b9a3fd35bf2e579ad43945"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "8d5406f408b9629870ef9c7146b3bbd5"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "4d6d06d80541cabfe51d3f9a4295c4d4"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "cb7e8d1283c3ffda77f7b29df67173a4"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "fe6cf0997a9321101bf12560e7e5486f"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "38e832b93c15e784a4912cac06b4b2f7"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "45206dc1f6104f00d5c6c67bdcb9e6ff"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "cfa80214352795e0beb795fcf8592062"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "4f299f41867f8b6fc6c668c204826e31"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "0ea48758085c9d038505d96373ee660f"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "3bc0ee58c87c3d966a4dc1bbe2ab34e6"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "6c170771dc4673cdbf2d709e0759790e"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "f2eeb201e5ada4ba8fd84899f2902f35"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "5f08fbee64437048aaddd57c95e00d6c"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "e59800ffa20b3c513b12c02602240543"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "b132cb23a01a031dc2057742fc5f8d08"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "8df37dd34f1f05993f2f2372f18ab457"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "a396a6a51d03eec3e78788c0f0a54de9"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "891eb572bd6ee68658c2960031f46d35"
  },
  {
    "url": "daily/index.html",
    "revision": "9447b03689a926eda32e4f58a490ac68"
  },
  {
    "url": "en/index.html",
    "revision": "ed25bea248ed1a1d5e273f5fb38ba450"
  },
  {
    "url": "en/more/about.html",
    "revision": "f0d6e3ab271853e265de1d5bd8658173"
  },
  {
    "url": "en/more/comment.html",
    "revision": "d248f002f267731904ceda1ebe78ade8"
  },
  {
    "url": "en/more/contact.html",
    "revision": "847f296bdea3594209526d67cf9489cb"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "1c61282e6ef283e446028db903686bf3"
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
    "revision": "ceed7bba1bd5532413000944915303ef"
  },
  {
    "url": "jp/index.html",
    "revision": "137f550e21ee3489311462946e431c44"
  },
  {
    "url": "jp/more/about.html",
    "revision": "b5b6b86eeaab895a48ee2d88944c26e2"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "7931f58071c480dd3f7c57b879ececb0"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "59ce4c654e80cf45381c4e50505592c3"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "0cbcc6c17bf13612a038afa4919d7268"
  },
  {
    "url": "kr/index.html",
    "revision": "b2bf5f375bbc6987376ff744fc3f424b"
  },
  {
    "url": "kr/more/about.html",
    "revision": "57eeea4337a33b66ae289ecb0b6cbebd"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "c9f656f6bee7ac87c86012f55c2590a6"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "e54f4636893442c62667d693c2768b09"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "5265e942881ad381296d5e7c7222d4cf"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "b1f35c3aa1385406a16cf5c23c19a2f0"
  },
  {
    "url": "more/comment.html",
    "revision": "32812106b768b0b7bcc96d66444cb053"
  },
  {
    "url": "more/contact.html",
    "revision": "d9d3bfa58e955cb21fdb245de1ca88b9"
  },
  {
    "url": "more/sponsor.html",
    "revision": "86eda35620f58bc2127239563c03ea04"
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
