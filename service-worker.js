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
    "revision": "67eef255e0d99fc7c351bbe39c088a0f"
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
    "url": "assets/js/10.dc45ca7c.js",
    "revision": "d24a1bbd5122fade620b8f7bb23b94ed"
  },
  {
    "url": "assets/js/11.06380479.js",
    "revision": "1c2e2a1fe6028fa8f4f551f143ce1ac8"
  },
  {
    "url": "assets/js/12.9a248db3.js",
    "revision": "ffc51a21d70d551cd13b03d123d06004"
  },
  {
    "url": "assets/js/13.662843d5.js",
    "revision": "ce34cd2ac022a3fdc8f08c91a625c050"
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
    "url": "assets/js/2.6ba88186.js",
    "revision": "b43bb37442409bbd034ee574eb2af21c"
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
    "url": "assets/js/5.0fff190f.js",
    "revision": "1b5ce81a05688c3e63816b0161d69709"
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
    "url": "assets/js/53.06b96bea.js",
    "revision": "2de59443f64b968624796605f0459ac7"
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
    "url": "assets/js/56.d3acca74.js",
    "revision": "04688af8ca55d027694506336532e901"
  },
  {
    "url": "assets/js/57.5e05b7d1.js",
    "revision": "348e039e2bc509c9cb5fd46e81f3f18d"
  },
  {
    "url": "assets/js/58.b3ed6f23.js",
    "revision": "515e2b04d741d5f3865b1eee5519fbad"
  },
  {
    "url": "assets/js/59.85bd290d.js",
    "revision": "10fa8b0ba866b04235aebd4bfc1372a3"
  },
  {
    "url": "assets/js/6.f86b5965.js",
    "revision": "6d989cf8589f16b36801efbaeae88141"
  },
  {
    "url": "assets/js/60.328e616c.js",
    "revision": "1cab449bbeeb41fbf7aa3da50cbf0a08"
  },
  {
    "url": "assets/js/61.1b932f28.js",
    "revision": "ed2f78f91fa86d521dffbd44ce48bb13"
  },
  {
    "url": "assets/js/62.ffcf4d67.js",
    "revision": "f4abe7199bf2b43e9a8c7f7b4d97bc26"
  },
  {
    "url": "assets/js/63.75f9deb2.js",
    "revision": "c49d4002cd5ed3dbb786150399e3df19"
  },
  {
    "url": "assets/js/64.4d133b8f.js",
    "revision": "b46d6907c08ad45639fda874f18af6c0"
  },
  {
    "url": "assets/js/65.4b483ab3.js",
    "revision": "22356deb88cfcedfc80a2527fbe2cade"
  },
  {
    "url": "assets/js/66.5f3f0431.js",
    "revision": "8c4426e40c6fcdb62c6132c8a4e3ee4b"
  },
  {
    "url": "assets/js/67.927bcb1c.js",
    "revision": "73a1a45bf32597626d0df6e1cdf4a9a0"
  },
  {
    "url": "assets/js/68.595a66b0.js",
    "revision": "e757348e042fb377e8aec7d224f155d4"
  },
  {
    "url": "assets/js/69.a47d8246.js",
    "revision": "1af23dacadf00841c953695356f6263b"
  },
  {
    "url": "assets/js/7.dfa6f346.js",
    "revision": "cfbb23795a435863badd1c0193377930"
  },
  {
    "url": "assets/js/70.64e29250.js",
    "revision": "3d87db6540e69227b5d79d64352cbdc4"
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
    "url": "assets/js/app.0affce76.js",
    "revision": "8c1a8614d7d4860995bf559b02f96a35"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "d61fd2e8874983811287468547bbd553"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "c331ef48812911112407a17151e002e7"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "e086eb7c0c561426bcc1600661c67168"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "c050eaa99476260ed3c91bed9f07d5ef"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "fcf00eb0c6365fe94b3bb9f1a4839142"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "423eae292f3f542d7adadebb78e03221"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "379a09f0c714ea9a31bfd7706fd1c299"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "6eb16c1fad8ea1fb95f560cdcb96d00c"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "70352bac66fccdb945fa440abe6030fb"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "efea9d57231c7b4c5eaa47ed327d6b2e"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "d49e7d5748eb2e52dbc026870ee204d7"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "946d063059b7c05faedc480737d61b49"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "7d6154570e26a6c8451966d90bc78d98"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "6044a2c403827014164077c1a4db8591"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "7ecfa257e19415a5cf59433692bc2f50"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "1047faa08eabd3f5fa6f7571c9fca454"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "ff9bc30368740de81abfa33645cec01d"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "b17809959ba2a53d53c832ae0e68f73c"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "b77aa401229c4358262938ae2c8fd381"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "24ec482024ce3bf201b9229b8e588941"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "78fd67f3ea71692c7645a7f3f6d826d9"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "cb6b520e5a140b741ebf17c797475d35"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "2744b1b831e67b81dad989b4edd3d298"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "c4c79f26fc5090b694eb035629bc41e5"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "b326676e57b6a736ccc5cae426e0ffe4"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "a580729ed12082e51a594945ef01cc5b"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "aaddc0ab66d2af73722358e8e1ca9677"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "973349810890de9b636672ccf43c409f"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "7ed837ac518620166bb09e365555eaeb"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "b03f6cf5a543190d940a2401e3c7583f"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "bbd24021f30b7c656c39ded49e6e9d93"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "f42074d9bd8472c077b9a51090d5b9a2"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "d4fb26a48631825c960b0abebe6cf9f4"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "478c7b2b508d274e9dbe7cbb77915117"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "1ef97734e330b3456b5df1fa5ab2832d"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "62c8883b389a0cb9b2a9e8148c3e7188"
  },
  {
    "url": "daily/2021/04/23.html",
    "revision": "0d960d8d5e230b68f66865e5e1547acc"
  },
  {
    "url": "daily/index.html",
    "revision": "4d94f3abf0aa04f250a379b4cb6c919f"
  },
  {
    "url": "en/index.html",
    "revision": "3d06933e944a5464d88e6320f978f29b"
  },
  {
    "url": "en/more/about.html",
    "revision": "82bb10e6d6433f93e4aa6eb48c1c5b64"
  },
  {
    "url": "en/more/comment.html",
    "revision": "170f4a3c42f5c9dafb32b1a41a5dac35"
  },
  {
    "url": "en/more/contact.html",
    "revision": "40159eeca4e2eda3a17353629dbe9d46"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "44a5eb70d03f6ae45b505ce3ac5ab77b"
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
    "revision": "f76a9b49d12456d16d654654c7f0a066"
  },
  {
    "url": "jp/index.html",
    "revision": "ba19e0fabb058b7a8f6d3965c6cf8d6a"
  },
  {
    "url": "jp/more/about.html",
    "revision": "e36a8e37ec4f43e29bb11abb2c5409f5"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "63b786551d751c58dc63adddce38d187"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "2005bed83c8e66693524377234013ad1"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "8f1bf0c316dd0733d2c411256cd3752b"
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
    "revision": "b8370c5242104654b5a80b151d391643"
  },
  {
    "url": "kr/more/about.html",
    "revision": "e0b091f1704dea5cf3751b732ec99bd3"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "fdddc77547e9d3153a9213dc5fd5e514"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "f675ad0fe40c518a7b73009028c5b9c9"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "43413854535065a0649a150cb5cf84f3"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "f8b6bdc05c065660fe4bdef0f1585054"
  },
  {
    "url": "more/comment.html",
    "revision": "8a6b2ac67eb8a670d6168932da45f17a"
  },
  {
    "url": "more/contact.html",
    "revision": "46a5171ee19346c9230c59a38ca39ee3"
  },
  {
    "url": "more/sponsor.html",
    "revision": "806dba1e3927c209c2268448eb0576c8"
  },
  {
    "url": "post/index.html",
    "revision": "f47b2961818eefe602952a650ddc9176"
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
