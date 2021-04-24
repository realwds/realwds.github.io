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
    "revision": "b5776842a36df98f745be3d525998eab"
  },
  {
    "url": "assets/css/0.styles.bbce8880.css",
    "revision": "b85381e6c2c92f893d95d77b028c474b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.87de5512.js",
    "revision": "4999b48a578e8bc2cadcbf2e89dfad81"
  },
  {
    "url": "assets/js/11.a1c216ff.js",
    "revision": "1b992a998c2421aded4582e8cc3256e2"
  },
  {
    "url": "assets/js/12.d9cbd4d3.js",
    "revision": "32f8a27e9246d78139ff2033277c67b3"
  },
  {
    "url": "assets/js/13.ea4896b9.js",
    "revision": "5342e7a073e2a619ecdd47921288a5bd"
  },
  {
    "url": "assets/js/14.d6d03eac.js",
    "revision": "86f7c2a9d7dbb54bc863f8c00c89b426"
  },
  {
    "url": "assets/js/15.41851d4b.js",
    "revision": "a3b4fe011c65f83eac50f06bae16b474"
  },
  {
    "url": "assets/js/16.80af2dac.js",
    "revision": "e8277517705869740ffab43003da64a7"
  },
  {
    "url": "assets/js/17.ad413320.js",
    "revision": "8e4725fb09139a9dac59faa951b8deae"
  },
  {
    "url": "assets/js/18.79c28563.js",
    "revision": "282f78507a6ca876d2325182900eed62"
  },
  {
    "url": "assets/js/19.c1055271.js",
    "revision": "8a738c7ee08dafc9fbff63e423c2ca1c"
  },
  {
    "url": "assets/js/2.0eebcfe2.js",
    "revision": "c1df2b4d5314c87b4b1e5a2a8b0e7009"
  },
  {
    "url": "assets/js/20.f4cdc3b1.js",
    "revision": "7a3c5a7b2c1791b4a2c04bb1d2673256"
  },
  {
    "url": "assets/js/21.f25352a8.js",
    "revision": "96d5c0fb63c18e29a442438b5564203c"
  },
  {
    "url": "assets/js/22.3ac81ec2.js",
    "revision": "9fff7656c32c0197bf9737ead873be2c"
  },
  {
    "url": "assets/js/23.e54713e3.js",
    "revision": "3bf60f3560b743437b46ae3e3e97659d"
  },
  {
    "url": "assets/js/24.5a5e4a85.js",
    "revision": "11e65112f3ef2274d9d2adc5b9a3633c"
  },
  {
    "url": "assets/js/25.27bc4ae5.js",
    "revision": "aad891768e36349f05da17a2ab762043"
  },
  {
    "url": "assets/js/26.19c4915a.js",
    "revision": "b6f8d18186900345c0dc757968f00b27"
  },
  {
    "url": "assets/js/27.de3f0886.js",
    "revision": "e80cf97f35f60ef7230b4301e03b897c"
  },
  {
    "url": "assets/js/28.b7c9ca72.js",
    "revision": "d187a24d6be7fcbcde7ae0baa019da70"
  },
  {
    "url": "assets/js/29.c59b9f7e.js",
    "revision": "ea43a1b19a73acaaa69ff196a7d03e8b"
  },
  {
    "url": "assets/js/3.54524e05.js",
    "revision": "93135d22aa7fa58a231ec05c7866be5e"
  },
  {
    "url": "assets/js/30.cc4d502b.js",
    "revision": "14335030a3d574ff08b151f6d5cb66c6"
  },
  {
    "url": "assets/js/31.533ee689.js",
    "revision": "1a9abd84d0718a27ed8da0afb5fdae81"
  },
  {
    "url": "assets/js/32.3e7ca500.js",
    "revision": "0564fe02b5db202ce7b764e68ae9d813"
  },
  {
    "url": "assets/js/33.252c67d6.js",
    "revision": "2e9cf47a98e132a86ca7cf7789c2b39a"
  },
  {
    "url": "assets/js/34.b3767378.js",
    "revision": "79956e51f4ed48deff123383fb1f63ed"
  },
  {
    "url": "assets/js/35.7801a9bc.js",
    "revision": "993dbaeddad9ed8949c5a58747d948f5"
  },
  {
    "url": "assets/js/36.3a14325f.js",
    "revision": "5dc124efd6dcc115097c1d4edff38cd7"
  },
  {
    "url": "assets/js/37.1d92d79c.js",
    "revision": "9e1e80e421066c9d327f1029e53c1328"
  },
  {
    "url": "assets/js/38.e20a07bf.js",
    "revision": "0c9fe9cbe6cb4b59c54babc01e43e6f7"
  },
  {
    "url": "assets/js/39.971e886a.js",
    "revision": "bb55c08c2adacbc80906fe6d0258a373"
  },
  {
    "url": "assets/js/4.79861165.js",
    "revision": "3bc87d13f185c4bd31027e7fa052c847"
  },
  {
    "url": "assets/js/40.b1fbc784.js",
    "revision": "cbaa99e620299a25481bdf7993873943"
  },
  {
    "url": "assets/js/41.30406417.js",
    "revision": "af892d5d696083f8b420ecd50b24e9cb"
  },
  {
    "url": "assets/js/42.00e46292.js",
    "revision": "3ed3cd955baa0f8ea19c1ff68321e327"
  },
  {
    "url": "assets/js/43.a81571d5.js",
    "revision": "c1ff02b756d33d5e2e98b05583245cd3"
  },
  {
    "url": "assets/js/44.77cd3bff.js",
    "revision": "643b877085d95efc05ea34cda1ea6a0d"
  },
  {
    "url": "assets/js/45.0cce787c.js",
    "revision": "28dc1711bb1f48d399cec5f431040795"
  },
  {
    "url": "assets/js/46.99fde35a.js",
    "revision": "8a209bfbc21ab93fb06b88e438524fb5"
  },
  {
    "url": "assets/js/47.89a3de7e.js",
    "revision": "3c9ffd3ab26255248c5b0873fefdd4d1"
  },
  {
    "url": "assets/js/48.8aec6998.js",
    "revision": "95565432a276d2e549f26add3b57e064"
  },
  {
    "url": "assets/js/49.893c7b4b.js",
    "revision": "3b3f82e4047219a16c0982337cb62c8a"
  },
  {
    "url": "assets/js/5.9d66e110.js",
    "revision": "af9ecafea27f7c3489886912158c4526"
  },
  {
    "url": "assets/js/50.cc69cc92.js",
    "revision": "26e880e5aabf09f7b356d21559d0c92d"
  },
  {
    "url": "assets/js/51.87c113ba.js",
    "revision": "6ce7f0447540e7421a9ed7f70fca7ce6"
  },
  {
    "url": "assets/js/52.fcec9e35.js",
    "revision": "94160443406c500ac15408d9f1db1c46"
  },
  {
    "url": "assets/js/53.68a4994d.js",
    "revision": "e55622e200da0f79277f004625b4b00d"
  },
  {
    "url": "assets/js/54.8e90a6ff.js",
    "revision": "e6e0fb2b7bb4303822b57ddf5d36c011"
  },
  {
    "url": "assets/js/55.61e6d3ab.js",
    "revision": "6d67049706a4256198ba6587e2870d73"
  },
  {
    "url": "assets/js/56.d1bed56e.js",
    "revision": "f01a144f6abf365fccbb34c8155a595b"
  },
  {
    "url": "assets/js/57.e5cef3b1.js",
    "revision": "3913e2c9877c6d4d24a17e8a6a2acc38"
  },
  {
    "url": "assets/js/58.c0afbedc.js",
    "revision": "78ad808857954766f0c6f3ab5c169c0b"
  },
  {
    "url": "assets/js/59.c81b69f2.js",
    "revision": "6e28a9c9dad1d4459bc22c80d5fe94fb"
  },
  {
    "url": "assets/js/6.f86b5965.js",
    "revision": "6d989cf8589f16b36801efbaeae88141"
  },
  {
    "url": "assets/js/60.c15001af.js",
    "revision": "8b5ded30452d7915ad85a240eae3014c"
  },
  {
    "url": "assets/js/61.adba309a.js",
    "revision": "832a71885fc90d8598f7b51db4827427"
  },
  {
    "url": "assets/js/62.225e4eee.js",
    "revision": "f1afce208c7687f4777478a8d7fdd946"
  },
  {
    "url": "assets/js/63.28ef2f49.js",
    "revision": "d572c3bbe3b57c8099cf76a60e9a0be5"
  },
  {
    "url": "assets/js/64.32aad3d9.js",
    "revision": "581d807ae49a4817bf80e425f484a99e"
  },
  {
    "url": "assets/js/65.0bc25d32.js",
    "revision": "1e94361720e47626c195d0947d673820"
  },
  {
    "url": "assets/js/66.8921c7f9.js",
    "revision": "a400574dac6a66310008498bd01cb29b"
  },
  {
    "url": "assets/js/67.10944263.js",
    "revision": "320399b6a4e3494262be1533d0a435ae"
  },
  {
    "url": "assets/js/68.445c5489.js",
    "revision": "785fd91670d71b106b56832a41df8505"
  },
  {
    "url": "assets/js/69.c2cf66d0.js",
    "revision": "d52aab2b5722ecb670169a3311807fff"
  },
  {
    "url": "assets/js/7.87a8316c.js",
    "revision": "3ed86e85c31aba43df74acb91808bc73"
  },
  {
    "url": "assets/js/70.d21dfd32.js",
    "revision": "4c9f3f4599735d57a1ed3c603edca8e8"
  },
  {
    "url": "assets/js/71.61bdb974.js",
    "revision": "f10c65ae19657282cb05017d75fb6d63"
  },
  {
    "url": "assets/js/72.badc5338.js",
    "revision": "96e767ddd78375838ad5ffd6cb543ddf"
  },
  {
    "url": "assets/js/73.97374fc0.js",
    "revision": "91e390177b9f76cbce5fe8ae56379da1"
  },
  {
    "url": "assets/js/8.08b68468.js",
    "revision": "99a199c3fb2dd8b3e6baf6e8729f0b1d"
  },
  {
    "url": "assets/js/9.a5311374.js",
    "revision": "3da617426188027f1b54ab18bf76a737"
  },
  {
    "url": "assets/js/app.fac6fb8d.js",
    "revision": "c41b44ba0df7883e865d6d9f8e58110a"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "de77d00d6830482b3af0eff982262deb"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "3bf9598dc3b6d8c389c1cf6f77ada4fb"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "04212a1f5d1b361b7882bb9d9bbc118d"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "bd9ac067f9585508706f51dd104f7bd7"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "a50e75586e77edb29cbd2956e6126036"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "f1a9b3d82e3823a02844bd38c0cc974c"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "310d2034ee5e49151a1254127236dd87"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "1852278cd347248c0a8a0196d755edf9"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "73cb67c9eefa506731440b0411ec8b3f"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "8a28022e40c306fc07dd28e8a0130581"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "d58d6933b88b5f6d9da06540d00f92f3"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "1988a5f732ba986b7bf6acdb498b6a65"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "f5929f2f30f99119a712b7c27becc0d7"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "d848ec85bbe2e3fa323ce20bde5faf41"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "2ed62f10fa5f880d482450a8138b6475"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "31edfcc3625b1df66022dc5d87fc7a15"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "685d26f365aeb08e52060290cacb35ca"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "d3e28a350dafc41258a0f490d60c239c"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "4388d59e29f0699ba54949a7e59803e7"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "91a424c0d6049cec12212eece256966e"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "7659791ecff7cb45c63411c04abbe908"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "7d5ce3ea6ced784585a094acf9d1c9ec"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "aecb9dba789bc4cd8a28cd76eed747cf"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "6f4047c149e414f02644eea8c20c29bf"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "d5bcbb1d6ceea8190150f67eb1ff202a"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "38b53468b558a7009be6cfe09dbd7c49"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "47d0566667a40225e9bb45e870e91c5e"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "8021a1fc05d36347b1620ac656c45257"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "1a1ec981ba153cf7f9dea6663dce889c"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "80a3701b08a7d155b3257f53b3fba95a"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "9db4a202b37bcddf4f5a6721e055b88f"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "cc141ca5d4584127334edb0a8a7a2724"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "c43ab99bcba3a73cf63ad90c647f47dd"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "d06c981673e292f5cccef930244d9e7a"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "902b0ac096edf3747369935b7f2b36df"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "4e5644b8e2474bd1ff2878f865fe3bcb"
  },
  {
    "url": "daily/2021/04/23.html",
    "revision": "fa997d30c3721d16721cf57f0b032cf3"
  },
  {
    "url": "daily/2021/04/24.html",
    "revision": "ad681b37d1afe2164783fb9d87ffbda9"
  },
  {
    "url": "daily/2021/04/25.html",
    "revision": "fbb169eeb12316d19f9d1a780cc8d186"
  },
  {
    "url": "daily/2021/04/26.html",
    "revision": "77aee2e2e2c50529cf055e13e15fbc02"
  },
  {
    "url": "daily/index.html",
    "revision": "233c093655cae3e54b54524401ebf964"
  },
  {
    "url": "en/index.html",
    "revision": "b380e7bd3ae5730bd94692c38d806f0d"
  },
  {
    "url": "en/more/about.html",
    "revision": "af406062ea72927ef4684d001e71ab34"
  },
  {
    "url": "en/more/comment.html",
    "revision": "e8fe57bf2420e4903a6ef5429e05c5da"
  },
  {
    "url": "en/more/contact.html",
    "revision": "528e65fea79147029509880b8284f4d9"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "efb3ccecb0bf352bc6d52caab56d0125"
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
    "url": "img/20210413174751.png",
    "revision": "fe1c038b0cf131102df440d14f07c236"
  },
  {
    "url": "img/20210413174752.png",
    "revision": "f83273a75356b3d9cf0782f01d3399e3"
  },
  {
    "url": "img/20210413174753.png",
    "revision": "1de3c0a8341a5835973e1c3410cbac87"
  },
  {
    "url": "img/home.png",
    "revision": "814566ef9f01d8c1d5d29cdca790e7a0"
  },
  {
    "url": "index.html",
    "revision": "7e09f9211251fe3271b23aa954ca4125"
  },
  {
    "url": "jp/index.html",
    "revision": "b81aa4e03f6ba1ab67ce3dd2748876ca"
  },
  {
    "url": "jp/more/about.html",
    "revision": "ef94ebf79cfcc6b570b0987ed5d32231"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "9f1b5ba2c3e6c115270fb3510f6cee5f"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "13c7b505013a3a83a9aeb7c953056d7f"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "a83d75eeb9b326fe74951de18b8d402c"
  },
  {
    "url": "js/jquery.fancybox.min.js",
    "revision": "2e62b54f794ae2fae6a69feaad8f0820"
  },
  {
    "url": "js/jquery.slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "kr/index.html",
    "revision": "fe726ab104db0b66e74e08b30eae0257"
  },
  {
    "url": "kr/more/about.html",
    "revision": "b1885088a6d5abed65f55c313c81dc90"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "0200cc11a849ab8c860b004204bdda36"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "222cca43d133d2f6e4ee55c9ccc9c0cf"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "09520c134d5da8638f223fa69e0374be"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "ebc3aebdbe180bd6c3a1be625185db2f"
  },
  {
    "url": "more/comment.html",
    "revision": "26a45d1cf22b6ae4b10632031a6edcf4"
  },
  {
    "url": "more/contact.html",
    "revision": "84be9d98c53975f475336d4c2a42b33b"
  },
  {
    "url": "more/sponsor.html",
    "revision": "8160e1d093e249a8640a7aeed00c2cad"
  },
  {
    "url": "post/index.html",
    "revision": "5dcd4e9cc4173162844b3b441bb5dda5"
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
