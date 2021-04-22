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
    "revision": "9c8a4d11cb24b82c0a9d417698794815"
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
    "url": "assets/js/10.a7fbabce.js",
    "revision": "2366cce0b365bb51bd34ff8067fcb88b"
  },
  {
    "url": "assets/js/11.35eb765a.js",
    "revision": "f4257ce985bf32f9b82d3a3d606a05be"
  },
  {
    "url": "assets/js/12.eba32c5a.js",
    "revision": "d20da05c3ba420b4546895ee3a59c59f"
  },
  {
    "url": "assets/js/13.5993182f.js",
    "revision": "7ffaaa7d481b0239904687172b537672"
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
    "url": "assets/js/5.cb81c5bf.js",
    "revision": "b7332e8e145ba10b556fd478b5a7a718"
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
    "url": "assets/js/54.ab3eee2d.js",
    "revision": "2ee91cce545c83f42d123ffdac5cba22"
  },
  {
    "url": "assets/js/55.fa1b7644.js",
    "revision": "bf906e2778675a5bcec64f9648974a6d"
  },
  {
    "url": "assets/js/56.83e03499.js",
    "revision": "a6501193cdfaab63c5a833b44f7030c8"
  },
  {
    "url": "assets/js/57.c91765ae.js",
    "revision": "d34b50c5ba4c401b17fca65c6efa89c5"
  },
  {
    "url": "assets/js/58.1418ac8f.js",
    "revision": "6ac413afb39ff79d3f2162d7d3ebdb99"
  },
  {
    "url": "assets/js/59.954f0080.js",
    "revision": "ef8e7c29f4eb4ad5dec262fcbe27792c"
  },
  {
    "url": "assets/js/6.f86b5965.js",
    "revision": "6d989cf8589f16b36801efbaeae88141"
  },
  {
    "url": "assets/js/60.fa3b6381.js",
    "revision": "8694861750617ce4f90987a507efd31b"
  },
  {
    "url": "assets/js/61.65d68d96.js",
    "revision": "05fb4ef8c800de876b15ee6859735535"
  },
  {
    "url": "assets/js/62.17cac5b5.js",
    "revision": "68398bdbe360908aa5d8c36e5043004a"
  },
  {
    "url": "assets/js/63.1a84bad6.js",
    "revision": "e6e5086e605583e8e68e8d113154d6b3"
  },
  {
    "url": "assets/js/64.34e11001.js",
    "revision": "f71d92ce5731ca965f4fde48e2d9d5cf"
  },
  {
    "url": "assets/js/65.aa61db66.js",
    "revision": "48f78a25e8678d19230d026e2383d0de"
  },
  {
    "url": "assets/js/66.3b3dc0ba.js",
    "revision": "259ad8b5da794eb7976e6f379181bdaa"
  },
  {
    "url": "assets/js/67.0c9c8c65.js",
    "revision": "962a3b7b09c911594617267a64b34bed"
  },
  {
    "url": "assets/js/68.269cdf63.js",
    "revision": "c4f8fd749e5869532d4f7ad5699817db"
  },
  {
    "url": "assets/js/69.97e769ac.js",
    "revision": "12c5fa755a540adab3373c88ef54249a"
  },
  {
    "url": "assets/js/7.16651d2a.js",
    "revision": "31306f10fd2d93626e8640d1e8c4b0a2"
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
    "url": "assets/js/app.8f19b436.js",
    "revision": "43483b11b5396c4091a0b38973e786bc"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "3a0c70b11b5e3f796a1d5ce6bc0e5edc"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "c9fea428cf7d99078af3ddc175cbd2a9"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "add5080744b79d228ee021835fca77ed"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "e654e3ea61ea4ecf359c2d11521ac022"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "6e23127aa0d3212a4023bac6e1d6c694"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "cadad03bf99daef6ae26dd5345255bfe"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "3adbb6e3491d3b297e9fe35d4d8913e3"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "9cd5b3936b37a599843ec9c76c91b673"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "9396869b8c88c3535b006cf3c2b55107"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "3822ce3ac7f26cb4aa92a02a1fd6c9d1"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "45e472c0161935683b8b22a60aaf192f"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "8ee8eef03ee280c83d4f43382ebee223"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "d8e5c3fa039d78a1acb2ac87b00fecfd"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "b4267e77503684e998f753c4982206cc"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "d5813a467b4b77a22020f247e8f0f287"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "dead3beb0cf9a39a01b4ad0dad2be820"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "424bf394df60308cac91bf16cca5808d"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "2249dfaa364ad856a60c03023f928741"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "d977403073264f2ee4e02a3a706ebf74"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "91b7af419c8cef5ad90bb85ae4e2d0e9"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "286f79b0b2818c1df15f97895207a20d"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "e99ec57bf2d2b8e29c2a39453d611dd9"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "4e74198ddaeb225bdf25708faecfa107"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "c5078be3ed78289f961219e7ac9eeea9"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "4686b90e5ee0d1e54871ac0b317b9c8a"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "f16b8c44d89b0ab5828595148db78460"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "0c8a049eb0b4809149a66e2c3a3c85e5"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "279463c92621e983d4427b5679230f15"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "97e7b416fbd0f5bfb38b6bea6d904eff"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "83674ec3b06e0e94226c5d5923e6c4c7"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "e1217552520cf501a6cc5b18cd61117e"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "4cb3ff2b2565f52a88a99d22c7063a22"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "70ae5a9beb147027ea143a264e0c962d"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "7bbd3993688d2942bdb8b7d01b288bdc"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "e5bd809c631f35116c2a060ccd6394fc"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "568bdfe6b70ea777074e39e66e9546f9"
  },
  {
    "url": "daily/index.html",
    "revision": "84b9b4e5cce564806257f88903c24d21"
  },
  {
    "url": "en/index.html",
    "revision": "e01b05e73a6f84d99ca742a0fc3acc16"
  },
  {
    "url": "en/more/about.html",
    "revision": "559e6ef03fd8431ba050350ce725c59f"
  },
  {
    "url": "en/more/comment.html",
    "revision": "adb48c2e921b9491c3a92c67cdfcc345"
  },
  {
    "url": "en/more/contact.html",
    "revision": "0d757ba83642538fa7193f9b4b8e68d8"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "ace70258d59e91346c8fea098db4532b"
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
    "revision": "6f2a98c5015dfe9d03558006b9a3d75b"
  },
  {
    "url": "jp/index.html",
    "revision": "a54bea90e4acac71caab684355754fd3"
  },
  {
    "url": "jp/more/about.html",
    "revision": "897e1f54f4b2e91b9c63c2434c0b1ccc"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "2dd1a451071e48c03aae11da8a3beec1"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "c9ba7e9c71d8178738ce8c61b2b0b71f"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "aa6695aaae0e5ff9e47668bb1af5a442"
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
    "revision": "89027702637c9122151c4f70d0a3fdca"
  },
  {
    "url": "kr/more/about.html",
    "revision": "15294471b1fdcca41ae3a02b76259df4"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "5615930ef600cecd46f1707d7796cc9d"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "6b37c39cd6a035c8a70b7fb0621cdaab"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "0de48c5dbdd6ac0dfc09e0033d6a40d1"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "a3dab1d44dbf3292ff5b579d99200e66"
  },
  {
    "url": "more/comment.html",
    "revision": "3fdd617ef0739b5d64a395c8610d208e"
  },
  {
    "url": "more/contact.html",
    "revision": "c8b4df036d50e9606ef8f517d046ebe5"
  },
  {
    "url": "more/sponsor.html",
    "revision": "21268a907f9d084e835a0e4065825fc8"
  },
  {
    "url": "post/index.html",
    "revision": "f3f0f67383da7a07e5835e2df53e7fde"
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
