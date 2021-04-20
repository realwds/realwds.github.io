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
    "revision": "c735b48dbd7451309a6bde42b33f475b"
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
    "url": "assets/js/10.1393b7e5.js",
    "revision": "76aa3a5654fe02d93611d2cf3f2c9269"
  },
  {
    "url": "assets/js/11.de3450c3.js",
    "revision": "37ff23f3c3adb3149666e264e4244a47"
  },
  {
    "url": "assets/js/12.cb3c8644.js",
    "revision": "85cf8d4548dfdd06047a4df37f13289b"
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
    "url": "assets/js/18.b5f51a74.js",
    "revision": "1a275e6e8444c40cc09baced75320a74"
  },
  {
    "url": "assets/js/19.4f6e0612.js",
    "revision": "067ef3f7fdc9ad97c06c1d25c664baff"
  },
  {
    "url": "assets/js/2.e56ba6d0.js",
    "revision": "0e34270c698167f1b92e8db22eb7a62e"
  },
  {
    "url": "assets/js/20.d7b2b8a5.js",
    "revision": "d45500be19153f6e20c24b138c02d8d9"
  },
  {
    "url": "assets/js/21.b864b53b.js",
    "revision": "b5bad017f18bcdf0bd5d91e4604ba48c"
  },
  {
    "url": "assets/js/22.7af32377.js",
    "revision": "8d480859bbbd7638fb11c90032b68e46"
  },
  {
    "url": "assets/js/23.b4ba2d04.js",
    "revision": "2086003b436b91b5250745645038c0aa"
  },
  {
    "url": "assets/js/24.932449a0.js",
    "revision": "5631c153b9b525eb3d343436129b21b9"
  },
  {
    "url": "assets/js/25.2d395a6d.js",
    "revision": "10182ae44ae536c22e7094247760748e"
  },
  {
    "url": "assets/js/26.d23c9778.js",
    "revision": "a046f14c27271144de04bec4529de54c"
  },
  {
    "url": "assets/js/27.48115d14.js",
    "revision": "d8535ca7bb2352105323a8c334fa1820"
  },
  {
    "url": "assets/js/28.20326996.js",
    "revision": "0441e2dad3c64e9404fa318b711e1eab"
  },
  {
    "url": "assets/js/29.aaf46f92.js",
    "revision": "226307c08d671e38ef357037caa5fc46"
  },
  {
    "url": "assets/js/3.1a406340.js",
    "revision": "0c7d40fec7572f6a9d7389e0285c76a9"
  },
  {
    "url": "assets/js/30.39921e12.js",
    "revision": "fe4950a20b4fb4b10de56161a6a0ad42"
  },
  {
    "url": "assets/js/31.e79aefcb.js",
    "revision": "baa87a4872c0e9479c4771a1425a6319"
  },
  {
    "url": "assets/js/32.8f6b40eb.js",
    "revision": "cc6409cac6e096185d651558adf3926d"
  },
  {
    "url": "assets/js/33.103ca2e5.js",
    "revision": "d69f50f8a220676cd7cbf7a0a92ca7a0"
  },
  {
    "url": "assets/js/34.3a93d347.js",
    "revision": "b1b331dbfb857da6bb6a3b006e7e2c7a"
  },
  {
    "url": "assets/js/35.79bec194.js",
    "revision": "2311d79d040a806302257a392f557b6e"
  },
  {
    "url": "assets/js/36.f9f06dce.js",
    "revision": "d5ea70994e1881d665bed077bbb75f38"
  },
  {
    "url": "assets/js/37.df1d4e82.js",
    "revision": "7b3112c3bfaee9b624341623291289e0"
  },
  {
    "url": "assets/js/38.f2877ffb.js",
    "revision": "d4ab51e1df618e373bee347bf7cc21d1"
  },
  {
    "url": "assets/js/39.9a4bdcb7.js",
    "revision": "63aae8d1e1d2a7fd95552a259a868fe4"
  },
  {
    "url": "assets/js/4.c3d374fc.js",
    "revision": "b935f2a73423b666e5c4784cffd976c2"
  },
  {
    "url": "assets/js/40.f6f3c37f.js",
    "revision": "1bf6d5564ae0d5d61594b9e6db49dc6d"
  },
  {
    "url": "assets/js/41.97837484.js",
    "revision": "b9dcd5d50907098105932b52ff150c1c"
  },
  {
    "url": "assets/js/42.9203a0d0.js",
    "revision": "f774045567efc7838a3f5781683386c4"
  },
  {
    "url": "assets/js/43.a458fb3b.js",
    "revision": "222dc57b8a6d5c61915a06ff53928d24"
  },
  {
    "url": "assets/js/44.a63ef075.js",
    "revision": "a28768778ae0937782f0a8c845871505"
  },
  {
    "url": "assets/js/45.386a22a5.js",
    "revision": "649c02e9e7ac5145278fc9d55d17b28b"
  },
  {
    "url": "assets/js/46.f472c965.js",
    "revision": "c782fd3a21a5615113f9f393350bd4e9"
  },
  {
    "url": "assets/js/47.6493d285.js",
    "revision": "d9c1517750462644b05de9afdc7901e8"
  },
  {
    "url": "assets/js/48.8e237cc5.js",
    "revision": "fb81cc662bacc670fa67f7219168aa3b"
  },
  {
    "url": "assets/js/49.7d42b9d7.js",
    "revision": "6e0f4295aefa45a82bf571b790c0efd4"
  },
  {
    "url": "assets/js/5.f4c20fb7.js",
    "revision": "2f8623e2abdf740e0271a26c7d14fd94"
  },
  {
    "url": "assets/js/50.55b4f001.js",
    "revision": "1e068e5e099ca49f24ac1840a612fab7"
  },
  {
    "url": "assets/js/51.e70d3f97.js",
    "revision": "667955fed7e65fde2b174d773a1a9e04"
  },
  {
    "url": "assets/js/52.88f7d73b.js",
    "revision": "b8057b3879ce5344216cd1a23a992b8c"
  },
  {
    "url": "assets/js/53.18b3ee8e.js",
    "revision": "81802c70b4aa66c0ead486cc60694f87"
  },
  {
    "url": "assets/js/54.59f1ae6d.js",
    "revision": "6f42eb3c3aba7eaad275e7d7905a17c9"
  },
  {
    "url": "assets/js/55.0f8f54b6.js",
    "revision": "6306f7d0bd538ac35bc273a8e5598627"
  },
  {
    "url": "assets/js/56.3f45ea5f.js",
    "revision": "f8585e2be81b6207adc40d1b7b1f2490"
  },
  {
    "url": "assets/js/57.05f45b60.js",
    "revision": "0a022e282516636d137fe5f7edb9cdb9"
  },
  {
    "url": "assets/js/58.d445db6b.js",
    "revision": "07d99c85359fcee53913b6bcc64556ba"
  },
  {
    "url": "assets/js/59.563c9181.js",
    "revision": "ef0ba4cc03d1258d5d771a787ae0b9b0"
  },
  {
    "url": "assets/js/6.90c3ac75.js",
    "revision": "17dc3b0218df042cbe968abb8471ab94"
  },
  {
    "url": "assets/js/60.741f9274.js",
    "revision": "68b0353de03e60e24b18ab973a2e0d22"
  },
  {
    "url": "assets/js/61.266a15bb.js",
    "revision": "c10a1c06bdfe0657f50e33203f209980"
  },
  {
    "url": "assets/js/62.c4d634c4.js",
    "revision": "92985ea348980bf030ed3efb42cc8bc2"
  },
  {
    "url": "assets/js/63.dc1f4df5.js",
    "revision": "971c590d2f57e64cf695abff8ac58b7d"
  },
  {
    "url": "assets/js/64.1e2a56e9.js",
    "revision": "f8db6588a9916c7bf485823a0b2b3720"
  },
  {
    "url": "assets/js/65.99313eb3.js",
    "revision": "9f3ec65776532461f93c7cb3c0d67916"
  },
  {
    "url": "assets/js/66.54d4beb9.js",
    "revision": "3048716346d1e96ffe46e601d921c8fc"
  },
  {
    "url": "assets/js/67.1e6525ee.js",
    "revision": "a8248f592e3c8630f7bd8bb734dcdec2"
  },
  {
    "url": "assets/js/68.ac97bb48.js",
    "revision": "1c4fcfffdce1abce932a75accfa85c3b"
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
    "url": "assets/js/9.154e2a6a.js",
    "revision": "75d101d24fdf681d17faf2c7df8bf21f"
  },
  {
    "url": "assets/js/app.5724b5c5.js",
    "revision": "7dfa798c937df08395d502e9880482c9"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "2edd6706c6e5c0490b4ef9e81b9a9dfe"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "005f539e2d6b1e831e2568c17b000282"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "268464e894a9bb1279d97b7c2853d64f"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "92a5158c3ec6fd9f08bf7ff68f832ffc"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "00fa53cbd9ed0d98b0d0bc87bb143662"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "36b0c7424eae048cf771b0a3ad058076"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "8188f412d704f8bf50b4e1402d0cd1c0"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "e04cfa27660b44943837b669b0c53c58"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "5718d590c1f4a611291742d730316448"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "f978ee79254db150adb08788f592f538"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "175120d0c5c100b88eed752a1c542c8b"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "3ac0684f9ea2b97da3525c44a3f7339b"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "feef83266a0d2f3b0a38f125c17b235e"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "d54de24ae15d22b72afeaab8414b0a88"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "a022b5ff00aee0323cfa4752349399cd"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "5808f901d178c1f448f635203cc49e76"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "800bb383e1358afb2c8db98e4d33ea6f"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "0060a87cd5be7524c078b2bbf0d7d03a"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "c6cb9ac894167491b2e196c73721ab85"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "a13e928e44074a29a8e0f3b7b185bfa1"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "9ea20d27d73e8a64359df6cdd8ee9b16"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "a2c4c8129a0d11cb050d7511101c5a88"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "71978505fe8b2e0104b14181b90a2614"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "fd87db333e3bea7fd56da2ca8f64ddd2"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "8449adde580865771deafe63c1588eb1"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "6002684fbbe6ce8bd5a80786e6787409"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "9b6f705503ab7a9fae89c547f00e54cd"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "3d9d84afa947ac23cfc79f0e9a80bcd4"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "090560a9a1d16e46a2375c9619c10065"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "5f50b1f040a56143e0e3d2f5ca99ff79"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "4efc8577f85b75ec13598bc695c8df38"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "dbc02b0d788faedd66370494cd4aa535"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "2f482d376c5774bef70a9c4ada1e883b"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "02773c939854da9c22228bb57f02678f"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "af53dd287cf328551ba2b844c82b3a4b"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "2cac2934f399ae2c20b8a5436538a5fb"
  },
  {
    "url": "daily/index.html",
    "revision": "aa851f10093c3693b76ade56967de833"
  },
  {
    "url": "en/index.html",
    "revision": "33ef858789588736c065a2a17f456e9f"
  },
  {
    "url": "en/more/about.html",
    "revision": "49013a1f4af3b6835336245ed318f2d2"
  },
  {
    "url": "en/more/comment.html",
    "revision": "92ce1b32cb203164adb4f3008b282019"
  },
  {
    "url": "en/more/contact.html",
    "revision": "9f424c0dbf8007996dcac9c0fc087624"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "c432136bb78577d3fe876901d9869ece"
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
    "revision": "53b0112d74f8dd3083435f4e976b1a0b"
  },
  {
    "url": "jp/index.html",
    "revision": "14852aaf7b0197a813d56982373efb86"
  },
  {
    "url": "jp/more/about.html",
    "revision": "3efb70b8dc700d8df9a5f2cf952e259f"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "dab2dfa00569569482be90d5df3a0fa1"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "8fefaec48ab8b8655ca5832f17bd56fa"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "d5ba58339476bd5935e5f85a3da1633d"
  },
  {
    "url": "kr/index.html",
    "revision": "49a995fbf69e5aaa0991b2d7d5e17506"
  },
  {
    "url": "kr/more/about.html",
    "revision": "7c05d37245081e37db9fd124aca6b224"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "5baeac18cae22f147847783f7effdc26"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "059076df86bc30ff6189a0b669455c44"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "f4169368159a921b5d5e48fb90a9bb3b"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "d554a3258e1f9f1034cca3620286749f"
  },
  {
    "url": "more/comment.html",
    "revision": "b1e1e3355b7becb8606d2422916c27a3"
  },
  {
    "url": "more/contact.html",
    "revision": "6f170e20ff0244ed8f697d3b98f2b98a"
  },
  {
    "url": "more/sponsor.html",
    "revision": "b88ff839a9d3156c9372eee00f676b57"
  },
  {
    "url": "post/index.html",
    "revision": "7bf059940675ac2c6fddab8751a19731"
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
