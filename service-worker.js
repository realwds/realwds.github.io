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
    "revision": "e827142c57f53ed78e8141da36621ce8"
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
    "url": "assets/js/app.fbc967a0.js",
    "revision": "ba8a146366bf0a3b6273a4ff3dcd5f7e"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "d354e3ff41c890a64976c82b655fc120"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "6757c931d80367807f24d5e1127d2d72"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "e9f72f6cbac5cce3c9be1c6ba4bd77c8"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "fb2c85735c1261286b76dd04da7e2786"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "865141ac12bfe70e86fd74ab40a5e42a"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "5884d1c112aae3099352de962d332199"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "ceace38e1620ca338ed21f4cc143e896"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "395da8c0bbdd100bde6baaad27dba1e2"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "16249a96124086fa3507e1515af953fc"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "fc310777220a02ccedd686d833bfe8a1"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "040cd3e62ab4d1ca478b8e2d351b7d9d"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "2e8d6e7eee0e680755fd6b7bfb8d93e6"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "f33908c4adfd5336057fd73bc01b9767"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "b0b1bcc9ffc1bf22cd2f706e71d69724"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "0fbe5744d963ff5611aa0a21f289ac52"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "db51cc33cfbdc3b581985b5867974ee3"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "8d46bd136cc962026b1f3bfc781c3ff8"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "798d4c32d101f317b141fcb8343138ba"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "152c10d4981b50466b15f577c6932158"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "5eabeef5e0eb7adfadcef5a99f495c29"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "77797d6fb446ae51cc38bc913a290718"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "b03d5c539a2e47bac9ee8bae3acf8435"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "bee7c8d84aad8587856ae051f5542461"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "fbbf5a2a7947a1de783c0fb2af2fca04"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "ba7e670855c5b596346d1152715dafcf"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "8c187c7c586f40e0863866c5edff531c"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "89bf588028db7beeb79e0eab88243627"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "f416f44251033c14edd3179e6742a6e6"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "4663251f365675b4c7a5625d70e88bc5"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "765f03c42563d940e9e97fd6a435caba"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "c935b6bfc292ede2b2ae5af32067724a"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "05715d862a098c9750649cfd3ddc7f8a"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "67a2fd1218acbd03c7d4742d02b28484"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "b1191b128a1bb30f2bde20137ea54446"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "bd8e42213233728c97166ed9692a8b94"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "c61a6d59c851b722d302ecc3f2e26871"
  },
  {
    "url": "daily/index.html",
    "revision": "36de9e5d6504585733821be3cfa2b5ab"
  },
  {
    "url": "en/index.html",
    "revision": "520c3f4bd5c05a1b7c746cd5c887d136"
  },
  {
    "url": "en/more/about.html",
    "revision": "f1089823dad6f3a59ae83c97a14ed47d"
  },
  {
    "url": "en/more/comment.html",
    "revision": "59f5cd65d96aefdec3ae47f08fd4e1e5"
  },
  {
    "url": "en/more/contact.html",
    "revision": "362d27a71a4cd7be0eb9253f54771956"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "e313df4f0124d8843c3d5f2f2ef03d8b"
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
    "revision": "30ea37091286c98dd69cb5632adeaab9"
  },
  {
    "url": "jp/index.html",
    "revision": "1bc06a40e77e5ad62d5b16e31f495545"
  },
  {
    "url": "jp/more/about.html",
    "revision": "775f28b1bb160b4842612fb565c61572"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "b544524fe9fb976f00e43e2a53acf662"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "07e696be1421433233caca56d0a08a54"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "56f7eb2a299b6cd440a68d50d6e80f99"
  },
  {
    "url": "kr/index.html",
    "revision": "8fcaba54bc8ee43ec62ae7eb43cbe69d"
  },
  {
    "url": "kr/more/about.html",
    "revision": "0b04fc1f6e991d321570ce249a142d2e"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "5a12054a7d6d7912700308327c051568"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "09c5f0c3b5d57056b9c3d539e0b592df"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "5542e66eb26a581c311dc585eecb98c6"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "5e0632ef127f28d53b27bc5d7b1484f0"
  },
  {
    "url": "more/comment.html",
    "revision": "b1c1fc3bc045e7ce4cea725bef17372f"
  },
  {
    "url": "more/contact.html",
    "revision": "30da82d9794d633c72328f7d6fa98032"
  },
  {
    "url": "more/sponsor.html",
    "revision": "bd5050e14bccdc15b14d9f1913033ab8"
  },
  {
    "url": "post/index.html",
    "revision": "7d5f1bb6b6c3be94e026d85a9b6f8341"
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
