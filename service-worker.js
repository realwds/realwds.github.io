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
    "revision": "b1404541460c4c07b07371cf389363fb"
  },
  {
    "url": "assets/css/0.styles.f345d56e.css",
    "revision": "6266a4ff63d68434fa94326f5954f30d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.76251f37.js",
    "revision": "fcbb897c1c98f29c1e7f56b8057c12e5"
  },
  {
    "url": "assets/js/11.fb91a4a4.js",
    "revision": "e86e8e1dbc5bff448fce74224b0f7e27"
  },
  {
    "url": "assets/js/12.681dc699.js",
    "revision": "cd79879116dfbe42dbda80585e38eda1"
  },
  {
    "url": "assets/js/13.43327230.js",
    "revision": "8f06112354b87d4a0604adbe4da78798"
  },
  {
    "url": "assets/js/14.1a6bed41.js",
    "revision": "e528e94413677d889551519a307d195c"
  },
  {
    "url": "assets/js/15.2138364c.js",
    "revision": "21003915a9d3b1fc4280e01038e3cbf8"
  },
  {
    "url": "assets/js/16.0adfb76a.js",
    "revision": "8bf9ed2d15705da17f9da38ba06ff6df"
  },
  {
    "url": "assets/js/17.11bb052e.js",
    "revision": "e10dea945493803e204df459224a5243"
  },
  {
    "url": "assets/js/18.9eb8e282.js",
    "revision": "48e90b4b51bf4279dbb2f96c344616ba"
  },
  {
    "url": "assets/js/19.b68a325a.js",
    "revision": "856161d651e92e9b7d003afb451f3d46"
  },
  {
    "url": "assets/js/2.7a48ace5.js",
    "revision": "fce95b24bab79b337ee9d10f5e9c1d9c"
  },
  {
    "url": "assets/js/20.77adf303.js",
    "revision": "d0edd109077014bb454c466732cf7c57"
  },
  {
    "url": "assets/js/21.6dc7a537.js",
    "revision": "cf82bc27f2c7b30d666c1a5f1c62f7d5"
  },
  {
    "url": "assets/js/22.acd74c88.js",
    "revision": "55d4690f7e433c206b882ae8270fc2b1"
  },
  {
    "url": "assets/js/23.fd21a231.js",
    "revision": "5fc1259e0bd7fe6b813a121ab0854da4"
  },
  {
    "url": "assets/js/24.bf29fe65.js",
    "revision": "647a30e10d37c862876822a5cf92fcd5"
  },
  {
    "url": "assets/js/25.64f3e2d2.js",
    "revision": "8cac1ba365932073b2d441489c395c9b"
  },
  {
    "url": "assets/js/26.b9dfd85a.js",
    "revision": "78b01ec3a26e07a329a0a9f31072c2cd"
  },
  {
    "url": "assets/js/27.b2be9c1d.js",
    "revision": "ae4ccd37c7a2394db6058112f2b2f4ef"
  },
  {
    "url": "assets/js/28.944c6da2.js",
    "revision": "2cf41397e2f5581166523547f1af5af4"
  },
  {
    "url": "assets/js/29.c506d452.js",
    "revision": "2ab867fef4f9528da8554ee5d1a5641e"
  },
  {
    "url": "assets/js/3.10ffaac2.js",
    "revision": "27ea4e50fd3330020c6221f9e6d2838b"
  },
  {
    "url": "assets/js/30.9d455e4d.js",
    "revision": "f7738c950df8fda545eb232df09bb2d9"
  },
  {
    "url": "assets/js/31.d8903f53.js",
    "revision": "88bb8707c7bc83c3d379d36dcaa9ff27"
  },
  {
    "url": "assets/js/32.ca580db1.js",
    "revision": "9cdea85fd071a14b6b0be72d63149eec"
  },
  {
    "url": "assets/js/33.bf83c85b.js",
    "revision": "8d41d93b89510a2aa34fcc2f5be4b69f"
  },
  {
    "url": "assets/js/34.82c17c66.js",
    "revision": "b3de9630a605516a189809475d984e5c"
  },
  {
    "url": "assets/js/35.b64bc021.js",
    "revision": "660f61563aa9a89def22a97d5af1e4bd"
  },
  {
    "url": "assets/js/36.7dd04803.js",
    "revision": "73f43dbfbb54baf1b817b5414d92f20c"
  },
  {
    "url": "assets/js/37.754aa183.js",
    "revision": "22b43cda38eb4b00a208901c7e8e0a39"
  },
  {
    "url": "assets/js/38.a6a0f8d5.js",
    "revision": "157c72c7bc1cd531b4962225310767db"
  },
  {
    "url": "assets/js/39.48bb0c39.js",
    "revision": "dcc9b916c6a3cac0471535e9da47bfa0"
  },
  {
    "url": "assets/js/4.625e0adb.js",
    "revision": "7b40d06e0926170b9f00974b6b956f5c"
  },
  {
    "url": "assets/js/40.33945d93.js",
    "revision": "7883db36503fa640d5fbc650f90dedf9"
  },
  {
    "url": "assets/js/41.debf78cf.js",
    "revision": "122b8f40f3ccea15f3dd898f99dc73d9"
  },
  {
    "url": "assets/js/42.c3b64b4a.js",
    "revision": "66ac27a1cde0793bf10761b4dad29cb5"
  },
  {
    "url": "assets/js/43.c9207310.js",
    "revision": "f1ccf15f82c1a0900f36499e3eec9bae"
  },
  {
    "url": "assets/js/44.713f23c3.js",
    "revision": "a9293bd5ccd9e72b12309d7ad2a8230d"
  },
  {
    "url": "assets/js/45.edad2371.js",
    "revision": "347a4235d46ef38742b33e8ebb4690e6"
  },
  {
    "url": "assets/js/46.74c3b91e.js",
    "revision": "8f218c322dc83d258daaf4eb204853f2"
  },
  {
    "url": "assets/js/47.a748e16c.js",
    "revision": "42ab076ff34d726185df2a3a9456a69d"
  },
  {
    "url": "assets/js/48.48725d81.js",
    "revision": "cf03c07489c4f1be6f8ebd1652b59dc3"
  },
  {
    "url": "assets/js/49.12cede77.js",
    "revision": "752f59c2182c64bf673cb4b8403be461"
  },
  {
    "url": "assets/js/5.0cbc8e4c.js",
    "revision": "4aceef432fd2db6ba8da9a91ae7b6b7c"
  },
  {
    "url": "assets/js/50.a6f29458.js",
    "revision": "00017b18f742a0f3b3489f55d474ea4d"
  },
  {
    "url": "assets/js/51.07574204.js",
    "revision": "c438b615e6a47157aeed60ef22e4b483"
  },
  {
    "url": "assets/js/52.5f78d1c4.js",
    "revision": "40cbbb85d3e99bf29a77a0b33da064f9"
  },
  {
    "url": "assets/js/53.09c5eeab.js",
    "revision": "93bff573977a3d78580191311b4ed5c6"
  },
  {
    "url": "assets/js/54.e90a39c7.js",
    "revision": "dfea2e846c0cd6d073a004d79105f4c9"
  },
  {
    "url": "assets/js/55.72235d03.js",
    "revision": "9293f0c03f935783312ad0c40f620e22"
  },
  {
    "url": "assets/js/56.ffefc7fc.js",
    "revision": "fc7f433fece3d3aa05e4c2800e6e3b21"
  },
  {
    "url": "assets/js/57.46a65003.js",
    "revision": "cffce98c0a3b2fe079d96128f4e79ca5"
  },
  {
    "url": "assets/js/58.268273e6.js",
    "revision": "ce583efba34be625d9816c0a7dcbd9a6"
  },
  {
    "url": "assets/js/59.6d95d8d7.js",
    "revision": "ca2082ca59449cc610d4bcd2886b935c"
  },
  {
    "url": "assets/js/6.fa976840.js",
    "revision": "c015beb8795f22fe175de0d1dbd58f86"
  },
  {
    "url": "assets/js/60.5cd0a77e.js",
    "revision": "128f721c29760037427a04f86924c191"
  },
  {
    "url": "assets/js/61.fea49cf1.js",
    "revision": "456a76f3cb221356ffb1e3d287eddddb"
  },
  {
    "url": "assets/js/62.5bbd3b01.js",
    "revision": "68398bdbe360908aa5d8c36e5043004a"
  },
  {
    "url": "assets/js/63.22d330c1.js",
    "revision": "0a0d4e686ac241ef4d54019da4400cd3"
  },
  {
    "url": "assets/js/64.eba2387f.js",
    "revision": "80f092aa305cddb59298b9932bde85fb"
  },
  {
    "url": "assets/js/65.30dff955.js",
    "revision": "cb79d8c6714ce4bd0526c937d3dd4dc9"
  },
  {
    "url": "assets/js/66.ce784be1.js",
    "revision": "049c881e296626b41b7e2b6f6ea5a330"
  },
  {
    "url": "assets/js/67.15bacbb6.js",
    "revision": "1007e7220016e1a921c66ccd516c0049"
  },
  {
    "url": "assets/js/68.98b5d62a.js",
    "revision": "5450c7cc69c111748706e087817939ac"
  },
  {
    "url": "assets/js/69.807738ac.js",
    "revision": "73f7be5be740c2c1b7fea7c9a32d6858"
  },
  {
    "url": "assets/js/7.8bd7e04c.js",
    "revision": "efaf453ab569549f24f849f70baa90a3"
  },
  {
    "url": "assets/js/70.792ce79e.js",
    "revision": "3a483f1d7b60a6a024f86404d956786f"
  },
  {
    "url": "assets/js/71.f365c619.js",
    "revision": "40ed1a3d99d1b5a776eca9d111e3f6a0"
  },
  {
    "url": "assets/js/72.cbdf5e86.js",
    "revision": "aab2773a49106baa34c5d9dd28f91ede"
  },
  {
    "url": "assets/js/73.2ca6ed2c.js",
    "revision": "28f9542f9905f072533c0db9f9e2ae41"
  },
  {
    "url": "assets/js/74.c64d19fe.js",
    "revision": "cdb1b4a4ed635745bc628bfcb943250d"
  },
  {
    "url": "assets/js/75.88cacb72.js",
    "revision": "ba22392e752fc5a601be25acc41449c8"
  },
  {
    "url": "assets/js/76.290127f7.js",
    "revision": "7140b3a89f4e3959e87ce2644c29ed96"
  },
  {
    "url": "assets/js/77.e2cac19f.js",
    "revision": "271e959a90e5d76e86b21634edb829ac"
  },
  {
    "url": "assets/js/8.6e7ca087.js",
    "revision": "05b46f9bc3569d7ad827cb6beb3e6133"
  },
  {
    "url": "assets/js/9.04e82f71.js",
    "revision": "cfc486530f0308aab961a067ee9b4d22"
  },
  {
    "url": "assets/js/app.bfe59b76.js",
    "revision": "fd751ac2dea9dfc5595d39f4b0c702d1"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "5ac080e2dd87b6f845b43bd067bbd353"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "e02883719c83d9883bd67fa861137d5c"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "ffa1cbcc93ef85bcfda4db7a45532df3"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "4c720a199e4afbb629974e39b6dff522"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "e95f7db45545989a0e9c8d385ad0dbcc"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "2baee7902922c0414e8e162a354be794"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "f7a9e862dcc8458e01d3aa06bf420590"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "2359e11f375a6cfab1828104c778cbf9"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "93ad1846c14c4f19ab2a6a15fe9ba9de"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "be66699d9a71daa61b2da99304fae62b"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "bf14a81febdda30c7f4635fbcf29271b"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "48a322f8889e04cc01900b7977e7dd6c"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "c244d9a558c06f09b28be9a211fd71f5"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "d82168e955413b195028933b7286b614"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "22126c12456e5b288cb9ff111d75853e"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "773ed7024ad3126d3b08ab50b63a97f8"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "c684909c12982eee7265fff40d4a809c"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "da277c3e12c76599a960d8d368b61ae7"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "d0edf05efa9222ee342f12b79f25cd4e"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "34b502c621aeb75aeb3dee3f59b6dd63"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "7ea52adb8c1dd0d62a1185bc43c09ab6"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "2c8bc0905f008b1940bdadf48045a37e"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "b6cfeb664a64c6a0e6a5af1b2f978229"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "248f65b3d00bb76b75b2a8ce905b9043"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "68b32ced15ff33c9cfb3338bf2c55921"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "4e6fb50aae8489a5f8a64a751a7a8a28"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "027d45f8c9e4a1d8b4b694c99bd7b21a"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "8affe915c653b683523728ee4b6c3709"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "8bf92602c03b1e41e95f7de05e3687b0"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "a65f757161e83a011b04c8a8a2820967"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "588c5b7fcf990f7e5ab5255c219b7f9f"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "177852196cdff81f266f2477fb9f6671"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "1058d1ef72a834f3c9da366389b71d14"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "69804e3c8c2d6b6e8f6bde4fd9573d02"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "e2331be0f99f86c3b46b64399672c711"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "db4a47b1a86a0eb145022f7136647fcf"
  },
  {
    "url": "daily/2021/04/23.html",
    "revision": "2431da30a05602ca1fa3e0cccdbb09bb"
  },
  {
    "url": "daily/2021/04/24.html",
    "revision": "db981e0a5f779abad15eae51b84d8cec"
  },
  {
    "url": "daily/2021/04/25.html",
    "revision": "89a99a7ff59e12b0746b05f6e21dab06"
  },
  {
    "url": "daily/2021/04/26.html",
    "revision": "0c9bf29bd4012089f466774bde873a6e"
  },
  {
    "url": "daily/2021/04/27.html",
    "revision": "886f5e466ee7aeccd14bf5bf551eb7a3"
  },
  {
    "url": "daily/2021/04/28.html",
    "revision": "870e6a8d0377b0e9c992b5d6625f96be"
  },
  {
    "url": "daily/index.html",
    "revision": "7c1746a447475f0f9f7a047a0e2f3752"
  },
  {
    "url": "en/index.html",
    "revision": "174c0bea315bc25331cb6d28dd3dd059"
  },
  {
    "url": "en/more/about.html",
    "revision": "c8f243dc955c250fb280d286dc5469d8"
  },
  {
    "url": "en/more/comment.html",
    "revision": "4ac8937e85cdd8162000c1bc98637418"
  },
  {
    "url": "en/more/contact.html",
    "revision": "92e1c15753ef92992cb1156f4d8f2282"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "5ac2abb290cada801ec2e12fff885e80"
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
    "url": "img/home-logo.gif",
    "revision": "96b6c3ba5b2184511c50756b3dfd9e9f"
  },
  {
    "url": "img/home.png",
    "revision": "814566ef9f01d8c1d5d29cdca790e7a0"
  },
  {
    "url": "index.html",
    "revision": "8cb324b5d66a1e48f3e82b9373a7af15"
  },
  {
    "url": "jp/index.html",
    "revision": "02c87de24eee41c14fe1804a85b457b0"
  },
  {
    "url": "jp/more/about.html",
    "revision": "2d7b2b2c75d0a9d079134f45b0275389"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "1d44c84d50dd16ba09d45c3655d70ee7"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "6870c37ae3bd6cddca92a05f4d48701c"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "6296ae315b43aba5dc92ccef6a2e2e83"
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
    "revision": "5cf3f58b0bad6d436e83643ee01f71c6"
  },
  {
    "url": "kr/more/about.html",
    "revision": "506cc8c2aef2ecd6fda9ec81dfb8cb38"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "51e40fcde50e63b3447ec50d7f3de442"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "5669643bcddcd22ec01d11a07ab651d5"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "e59d206683c4a96a0b2b9d6cfa177c70"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "5fa368d9fadfe9ba5991248756584a03"
  },
  {
    "url": "more/comment.html",
    "revision": "8cd677606f652bc5c295c229ceb09ad5"
  },
  {
    "url": "more/contact.html",
    "revision": "ade14a1103d92a1bbc71ef0d577efa98"
  },
  {
    "url": "more/sponsor.html",
    "revision": "950c021577ee33cf6cd85f4c723e6118"
  },
  {
    "url": "post/index.html",
    "revision": "e2d53c4fe612a116a927581809b2c041"
  },
  {
    "url": "tools/index.html",
    "revision": "e7bc59092019d527459f19e2b6a54eeb"
  },
  {
    "url": "video/index.html",
    "revision": "7924a0d93c3490dc36abfdf1291c777c"
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
