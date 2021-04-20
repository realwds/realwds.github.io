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
    "revision": "aa3e39387fc1f3258e938ade764ddde5"
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
    "url": "assets/js/10.543b8ce3.js",
    "revision": "d7fc5737f701f8b8aba1bdeda85257ce"
  },
  {
    "url": "assets/js/11.42d7e94b.js",
    "revision": "d08d4a928a59959517ba90e5e4d93aaf"
  },
  {
    "url": "assets/js/12.639d60d5.js",
    "revision": "b179534b2be39138821a2b32d88345df"
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
    "url": "assets/js/31.ff59eeb8.js",
    "revision": "901bf138c5f081c632939376bd778903"
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
    "url": "assets/js/36.68edd599.js",
    "revision": "b59a6897ae2f995c5f6b896fba1d2850"
  },
  {
    "url": "assets/js/37.104c5c5b.js",
    "revision": "1e470b8433454059397d8eb55de8ffda"
  },
  {
    "url": "assets/js/38.5af22ed8.js",
    "revision": "67203e850302c90aa3e3f95435d4d0e1"
  },
  {
    "url": "assets/js/39.54d8abb1.js",
    "revision": "2cd6de3aef18227ce66fea875d1e129b"
  },
  {
    "url": "assets/js/4.947795aa.js",
    "revision": "0a5c704dbd30f89ac0e931a7c0f5fbc6"
  },
  {
    "url": "assets/js/40.681a2af6.js",
    "revision": "92604cc7b1a5a7bc08d5e834d98ff317"
  },
  {
    "url": "assets/js/41.dc984af7.js",
    "revision": "4b3a84981f62b044303246582ff356b2"
  },
  {
    "url": "assets/js/42.1be29f8f.js",
    "revision": "467665d501b85b81b15c4461d60b880e"
  },
  {
    "url": "assets/js/43.738d46a8.js",
    "revision": "e71ed3045f4af86652dccfff0b21af76"
  },
  {
    "url": "assets/js/44.cf7ca766.js",
    "revision": "ed3bd25759424403a34d213c48d59428"
  },
  {
    "url": "assets/js/45.80942e0c.js",
    "revision": "700750e43c8714464b65ea362aea87fb"
  },
  {
    "url": "assets/js/46.17979f46.js",
    "revision": "1c05394e9f2c21107d253115ef622cb2"
  },
  {
    "url": "assets/js/47.be7e8e69.js",
    "revision": "271493eb06be1295d4645d6779e1940c"
  },
  {
    "url": "assets/js/48.22548035.js",
    "revision": "160f179cde5b8bae1106cc98334c199c"
  },
  {
    "url": "assets/js/49.6ee8b451.js",
    "revision": "4141ae6258fe25a4834988e524f93722"
  },
  {
    "url": "assets/js/5.f4c20fb7.js",
    "revision": "2f8623e2abdf740e0271a26c7d14fd94"
  },
  {
    "url": "assets/js/50.e46b5031.js",
    "revision": "9d48092b212c61f883e39b1eecb00976"
  },
  {
    "url": "assets/js/51.36146fff.js",
    "revision": "5870289d6b78806831e3f6e68be6d810"
  },
  {
    "url": "assets/js/6.ee48c082.js",
    "revision": "1fabf1cb58413d5ae5f51a02e5006866"
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
    "url": "assets/js/9.d5eae95d.js",
    "revision": "3e4373f4d7b49bae82e7c3445649e2e6"
  },
  {
    "url": "assets/js/app.ffd69a28.js",
    "revision": "9d92201d745cf0e0958a6290a310b3a8"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "879cae722c6e9a2484d5e3437344d501"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "6a3fa10bf1e2db6717930043fcaca49b"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "ab2956d10b99d65efb9afa92aba3d6ab"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "c0cba08e0e98b7bacfcc5f34cfaa3c20"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "cf33e42b264e34f7c8a4275d4545f371"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "4440709f99e9d22fd2ec94c88d97c156"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "36ca59aa4ae3be29321826b6faa04a1d"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "facddc999817e58ab70ad22259658a0f"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "ef4b57f771744bc8c76e9fcb144fb348"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "3452d010c1c5b85cf77fe6acc28e4ecb"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "48dc2697ce8abec8c7e75656ec2173a7"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "0c65b8697c3b5665fa91e0131b6292ad"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "497cf87b30e65ba6807cc863e687fb8e"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "1d292d52dc2f8c6a259bdf5df1cb5d21"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "3d17b45cdd5a47b1dd0094b1d8e320c0"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "fd53bc183c93e5dca6c176977fcaea15"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "103297489c0ed39ba6fe7bc08c0ec280"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "d4b0512541d5d8df9b797a6c37b58fcd"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "f4967da8e767277d677eac1f4522a8ce"
  },
  {
    "url": "daily/index.html",
    "revision": "bef0be808d6e3c9e84402a180f385d05"
  },
  {
    "url": "en/index.html",
    "revision": "fb9304ba4b02973741551d8fbffc9599"
  },
  {
    "url": "en/more/about.html",
    "revision": "ae60085dcde832771e0e388111deb65b"
  },
  {
    "url": "en/more/comment.html",
    "revision": "3da044d13ec459b67e045bbb5dad93d6"
  },
  {
    "url": "en/more/contact.html",
    "revision": "88b561b954ba5a679c97d2d985545aef"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "b35f74913147935277ad0016e00da109"
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
    "revision": "8f2b69f115f306dc5b86e1c5fc571c81"
  },
  {
    "url": "jp/index.html",
    "revision": "f09298e03727d0e7662fb9e16ee369a3"
  },
  {
    "url": "jp/more/about.html",
    "revision": "511f6feb5c2eb46a9726230128ab5209"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "e8dc15c1eb303ad318e0a9cd74bfe901"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "69df8d4a057be62e447743a5fad82249"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "0d099f88c27cbd7647aa0cc43647657b"
  },
  {
    "url": "kr/index.html",
    "revision": "fa6f94257b967c7bb9e93a6591a36004"
  },
  {
    "url": "kr/more/about.html",
    "revision": "f68abbf1ef17ea438c5041543590068d"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "76592078fd4f8d6d0ec4ef4a3125fea4"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "b4704ccf9aeb7ea146b8b1aa46be16b4"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "72a78a23de4a0fdd3475f62f19f65f9e"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "54ed7a65e71dd0f4eea5ec5a88b1a34a"
  },
  {
    "url": "more/comment.html",
    "revision": "f453a6adf24d2d3b8d5f98382034a591"
  },
  {
    "url": "more/contact.html",
    "revision": "5f27287a6c15e2bcffdc1778e1ea3f31"
  },
  {
    "url": "more/sponsor.html",
    "revision": "e4d2b5526814dc51ffed3a5d699db44b"
  },
  {
    "url": "post/index.html",
    "revision": "797cf6e4229e91f0ed2829e215f91bd9"
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
