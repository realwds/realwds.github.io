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
    "revision": "1f17b704b9e6ad5ab8247931190af995"
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
    "url": "assets/js/10.3138c775.js",
    "revision": "291e7bd2dd26b504c6e1ea5bbd566c78"
  },
  {
    "url": "assets/js/11.f796f77d.js",
    "revision": "9ee127bf7ca5426f766d15e8a495f450"
  },
  {
    "url": "assets/js/12.e39876dc.js",
    "revision": "93f6990fe0ac0c8d89a1a9e2feac7714"
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
    "url": "assets/js/35.8948bb9d.js",
    "revision": "f5a7ac1f31a956218f23c188fb25843a"
  },
  {
    "url": "assets/js/36.f626830d.js",
    "revision": "c8633b23ca208b8a6981c49196fcf084"
  },
  {
    "url": "assets/js/37.c57ca976.js",
    "revision": "438addd6c44680e29924d7c30770097f"
  },
  {
    "url": "assets/js/38.8f2c830a.js",
    "revision": "185282d277fb2f788a9e6714fe3f9f2c"
  },
  {
    "url": "assets/js/39.2dccd425.js",
    "revision": "f32e0596bd81ae478245763e57eafea5"
  },
  {
    "url": "assets/js/4.f7c0de83.js",
    "revision": "72cc3e73813e25e7af21cbaea13d8807"
  },
  {
    "url": "assets/js/40.08ee0aa8.js",
    "revision": "37fe522507e0ad737b6cf09102823fd8"
  },
  {
    "url": "assets/js/41.49c4229f.js",
    "revision": "54cdeb7250dd73806c01046c2b20acc7"
  },
  {
    "url": "assets/js/42.85c7544c.js",
    "revision": "2199e5fea4e23f287120428b6a4aab3d"
  },
  {
    "url": "assets/js/43.cc508710.js",
    "revision": "c9cb82eace7afc50ebebc3712fc82467"
  },
  {
    "url": "assets/js/44.8986cb54.js",
    "revision": "5698d6f3d24e5132be6d3a12e51994da"
  },
  {
    "url": "assets/js/45.a9f276de.js",
    "revision": "437e355512bfeb7c2720c6837cc9925f"
  },
  {
    "url": "assets/js/46.b721dd39.js",
    "revision": "531561fb8a324cad566d18f1acbdf9df"
  },
  {
    "url": "assets/js/47.d391a87b.js",
    "revision": "8b940950850ab7a2100c759c4356bc2b"
  },
  {
    "url": "assets/js/48.d3ed0f9c.js",
    "revision": "f3333312b10057ea3a444757864bab69"
  },
  {
    "url": "assets/js/5.f4c20fb7.js",
    "revision": "2f8623e2abdf740e0271a26c7d14fd94"
  },
  {
    "url": "assets/js/6.3642444a.js",
    "revision": "601590bf8dc87d7de0b23ba9a74e655c"
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
    "url": "assets/js/9.504f1315.js",
    "revision": "55d7ed23e4ba5c7cafdd3e2b3477809f"
  },
  {
    "url": "assets/js/app.1cc27086.js",
    "revision": "fe6865f665d883ff1586b82cedd9b5d0"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "2dd3b2393fe40950a3d5abe120277e13"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "c604e5c25ab754f37e88082117c7bb0e"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "9548871a770317845fd57944b3d22a21"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "70e531d9a7a4495b1adda4d8a7dc5f17"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "91a4c36dd3fa017f4db0ac53174522ff"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "7aa309fad18ddabff7c6f9db334c1ee5"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "796d289dcb541af8f7c25de541a59d8e"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "7e8f7f28f2c10b17d7cf775520064ab9"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "8df3d26f01c7712b9b1a10d1f72badd5"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "a36cb3ba850af30887dcfc0443d5c7ce"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "b22d6351eb1777de15f3e31bddf5d74c"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "4953c8d9ebd1356da7992141633455d7"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "83eb554f83ccc6d120a04c41f6b0b78d"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "a8e505c74be9340130efa3b6a1598a13"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "950652acb5678825b1057e409d49d270"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "cf29839f7d1cb5c00562222d1e2feac3"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "91d5d63d548d30d7c3b62f1bb25b9a4f"
  },
  {
    "url": "daily/index.html",
    "revision": "92d7ed49687c78a139e63bb3f317f383"
  },
  {
    "url": "en/index.html",
    "revision": "fa898697a40a322621aad6aecb0d9165"
  },
  {
    "url": "en/more/about.html",
    "revision": "9331f9ec4fedc1abc36b6629f226e147"
  },
  {
    "url": "en/more/comment.html",
    "revision": "a093a5f1072d271791ae885d4f2331eb"
  },
  {
    "url": "en/more/contact.html",
    "revision": "b18308a87793533e2fd6a32ebd08c6e8"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "f95bfa3653a5bd6f910ab37fc22eebf1"
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
    "revision": "78e305ad5ae3d8d0615935d480a1baa3"
  },
  {
    "url": "jp/index.html",
    "revision": "0a94b359123f2381267abc2223215098"
  },
  {
    "url": "jp/more/about.html",
    "revision": "f19d44240d6d22c824bc6705cbb24eea"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "097e88407567b1e0564555cd44f5bd5a"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "22abc0c86f9314550588378a1a1ee055"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "b6953b9af7d5c3ae9da738a3ee87d405"
  },
  {
    "url": "kr/index.html",
    "revision": "4cb241ca3d75604d47ba87df20584303"
  },
  {
    "url": "kr/more/about.html",
    "revision": "e590d91db02c2d32fdd9560e626ea796"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "53496bdd181e0946c744ea67631f66ef"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "0843a973bd88b79471eb58751d22e2a0"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "5801a36e20fe1120010699607fa3d463"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "75b918fb782522d78a624a1c241990f2"
  },
  {
    "url": "more/comment.html",
    "revision": "93af6ce87bdfba205ad63f5acd3510c8"
  },
  {
    "url": "more/contact.html",
    "revision": "7bbbcb609e8db6ad6cf2f18fc2a268fc"
  },
  {
    "url": "more/sponsor.html",
    "revision": "8797a0565baa8c47ec23b8a8fa82d584"
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
