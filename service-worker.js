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
    "revision": "ddf440b2113f94dd7ee7a3274850ef14"
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
    "url": "assets/js/13.02c734f9.js",
    "revision": "e5d2ac2bc2a667ab413f208cef356dae"
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
    "url": "assets/js/17.4e4b9c22.js",
    "revision": "0094de6a2fdafba967a81e29059ccf0b"
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
    "url": "assets/js/59.f1c0ad43.js",
    "revision": "d8c0fe98e0f69b44b8f063654041cbb0"
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
    "url": "assets/js/70.a94a412b.js",
    "revision": "f367cc647c8e82e3aa1a5807eeaa062d"
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
    "url": "assets/js/app.d0b3c9f2.js",
    "revision": "233d975b06f01c550b01c351de82ef28"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "24c56b11ae08af772b092c01a00e4ab4"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "588c0f28b3039b3459b18e505d6a57fa"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "2ac470d816c6c63b75000ad5cfc66721"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "571e597432c6ea3e6f28852243f39fa9"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "97050521e0bc94baca02ca94a596be64"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "d2ce0d24ab6617c670424b659f4a0ea8"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "56f5015eba93c7ca162e2cf204e34aed"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "69001ee9a56dd60b8ecdd6f7063e5b75"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "bd12b3d40a5de87617df851770f37bb5"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "461a0fbd54be46838d813ea313968921"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "fab41a7efdcbe7b227f7bf9fab5bfb76"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "ff675fff04554bb102ebc2f1b172cd46"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "35f2edae4fb9e9cc7482997eefd17723"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "2a187da2ea71675b785c0f52a27d9be3"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "a57ae287caa08235de1548ebf23ca4d1"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "7db2c743e8ad9064bc6775066678afda"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "1acf7aca5232416d109c4657a49e8947"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "e25ff5c01ecb01bc4f96e891a790e2f2"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "fd3e9a52a8fc943804f998b086b98972"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "cdc532fc7dbc48d6762980bd84a9cf3b"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "95a347d7098fe1bca00255a2d28ec742"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "4818192ea27698778ef56333a74ad36c"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "5f950c30b69e36d74ba20a162d671b99"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "41f7f2b3a69877054aa3496055718ca6"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "21ec059dbb7549c4eb75b416234e689d"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "e11c053ee6081f142738df81993bca6c"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "62f24e746ffa0fbbd172d8815b15abb9"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "aa1105659cb80cbb13f1596f0083dfaf"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "700bfe6be0f43549e531bf6f3cb4918d"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "1fd9f1408cccde624a45e4ea5abfc501"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "ce6d62feafb5dd2cff685105dd45dd13"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "862ae9dc2b39e74ffc89df3b0b0a8417"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "6fc78b352bd430907de3b0b634e5433f"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "63afb52cad10d975ed8571b1ceca9a55"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "9966b78900d9555e0a45249eb541546f"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "2c5a798eb430365e9112f8f174e50204"
  },
  {
    "url": "daily/2021/04/23.html",
    "revision": "406d0dee75f7d918146ef4007d022484"
  },
  {
    "url": "daily/2021/04/24.html",
    "revision": "44c19fb4fd3f0ef80152abe7058c58a9"
  },
  {
    "url": "daily/2021/04/25.html",
    "revision": "4302ad678b5cd23162a1ce11671c6f33"
  },
  {
    "url": "daily/2021/04/26.html",
    "revision": "1dd5803a2b64dc52750f97ac3d6299ea"
  },
  {
    "url": "daily/index.html",
    "revision": "fb810ec882d68b32455d0cae0e9e2b66"
  },
  {
    "url": "en/index.html",
    "revision": "5c034c16746bfe67c67ccf929968f3c2"
  },
  {
    "url": "en/more/about.html",
    "revision": "6997a38600d83d29509d1ac9a4ad631a"
  },
  {
    "url": "en/more/comment.html",
    "revision": "eb42fa11ee917107d0e6ee3c55cf90fd"
  },
  {
    "url": "en/more/contact.html",
    "revision": "82c62e79aa622324cb460c9e54bf5440"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "12b162f74a571bfe9e231bd57994c820"
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
    "url": "img/about-contact.jpg",
    "revision": "e17f7b08c2eceb230a8fd0e0f8a5c5b3"
  },
  {
    "url": "img/about-me.jpg",
    "revision": "d68fe85a7d628a713ba209dd78c6ec28"
  },
  {
    "url": "img/about-sponsor.jpg",
    "revision": "002a3172d12c45de86c7efb95de61519"
  },
  {
    "url": "img/coder.jpg",
    "revision": "2336657ad4f7d24ef81956d969f87683"
  },
  {
    "url": "img/home-logo.gif",
    "revision": "96b6c3ba5b2184511c50756b3dfd9e9f"
  },
  {
    "url": "img/home.png",
    "revision": "814566ef9f01d8c1d5d29cdca790e7a0"
  },
  {
    "url": "index.html",
    "revision": "55dd4fb4f336e089b6b006a1f3c29600"
  },
  {
    "url": "jp/index.html",
    "revision": "31afcaa5a24d2f89fa0fa88b5db04a14"
  },
  {
    "url": "jp/more/about.html",
    "revision": "8304410a41612db520d058b1810c6ac1"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "d9e9a69fd175cb59a8f57564fe7155ba"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "a7db793371b97d1b35dd363ae1b19408"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "e54a51804b08806483ba6ff2a0d9aabb"
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
    "revision": "3f6f846c2f4e13b3f98a9a1e40587994"
  },
  {
    "url": "kr/more/about.html",
    "revision": "63d75c5d3de71f826733aff117300f63"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "1f07ced7b473d36ecd5270d6fc668e2a"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "f8cbad22b6a77c695ef8163784a5ab6b"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "3666496f9ca047ee7e7bb36d586419e0"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "aa30c8f02109ffaaf1d109856f4e9bfa"
  },
  {
    "url": "more/comment.html",
    "revision": "df0eb1751356b10b897a4558a17d9638"
  },
  {
    "url": "more/contact.html",
    "revision": "466c19af3cf71f5b30171ed3b07fded7"
  },
  {
    "url": "more/sponsor.html",
    "revision": "dc3a91db4e278d2fc7d82ec7056ab549"
  },
  {
    "url": "post/index.html",
    "revision": "6805687364f57a226ca9ab3aab285364"
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
