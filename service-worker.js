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
    "revision": "624e329e7bd585e88011eb80767a2989"
  },
  {
    "url": "assets/css/0.styles.d71a5a57.css",
    "revision": "fb9d2c356ce6359ff83dd3382e6f8851"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.90036172.js",
    "revision": "250f65cd31ee78c849862713ab666145"
  },
  {
    "url": "assets/js/11.e759da32.js",
    "revision": "dca6ebc378d079944d8c6c4ca497c28a"
  },
  {
    "url": "assets/js/12.21ae295d.js",
    "revision": "3b630489cb445b8ba026d18a04827246"
  },
  {
    "url": "assets/js/13.3e2b03d2.js",
    "revision": "bd32bbcadcaf51e9e5ec33dd30caf396"
  },
  {
    "url": "assets/js/14.07cb3311.js",
    "revision": "d22f938af1c9588f784bcba6fe8d20c7"
  },
  {
    "url": "assets/js/15.a5ea90e3.js",
    "revision": "2d5c3335de4372a4bc5846002d088655"
  },
  {
    "url": "assets/js/16.bb41a5fb.js",
    "revision": "ece8cd5b05f71238f9cbfc1ac4ada62d"
  },
  {
    "url": "assets/js/17.a1efa862.js",
    "revision": "9995107f1b7b92c1584ef66ff9475ce3"
  },
  {
    "url": "assets/js/18.bc90cd62.js",
    "revision": "eeef8bd87e9367225c7a336be7782d43"
  },
  {
    "url": "assets/js/19.15297710.js",
    "revision": "0e94594785ed93902bdbceabf3f0434d"
  },
  {
    "url": "assets/js/2.ab0885d2.js",
    "revision": "426126b4c6788f085514923d870f890f"
  },
  {
    "url": "assets/js/20.fc64eca9.js",
    "revision": "c0d334dbf516c81956c90a64595122a5"
  },
  {
    "url": "assets/js/21.a9bd7d9b.js",
    "revision": "b07b939c234493d34788dca930109d4c"
  },
  {
    "url": "assets/js/22.e033a8aa.js",
    "revision": "87ddfb52b15ef49809be0a7b1bd744ac"
  },
  {
    "url": "assets/js/23.a7da6a1c.js",
    "revision": "75ea3f62345f3c92badc50e65f9afce8"
  },
  {
    "url": "assets/js/24.52f65bfb.js",
    "revision": "37ba8929e256a1340839436e61f031c2"
  },
  {
    "url": "assets/js/25.8e2cc086.js",
    "revision": "9ab700e79b35a3b65b0d1688f87a7ece"
  },
  {
    "url": "assets/js/26.3ed7fa77.js",
    "revision": "015dac4c1a346b1b5eb24078cf59367e"
  },
  {
    "url": "assets/js/27.def441fc.js",
    "revision": "3fba5438e77c41759c1011f5f9bcd027"
  },
  {
    "url": "assets/js/28.6bd11eaa.js",
    "revision": "e29a0ec063919aa65325071f230cf33f"
  },
  {
    "url": "assets/js/29.1b61b590.js",
    "revision": "4f1a3523f9e299af1a2e34148e9b2bbb"
  },
  {
    "url": "assets/js/3.3323ec81.js",
    "revision": "3d18914db69f8cf0dd52efe02d5c84c2"
  },
  {
    "url": "assets/js/30.39869f37.js",
    "revision": "9bb6f1c4cc1e8d7356f0543a50c57d20"
  },
  {
    "url": "assets/js/31.97324df8.js",
    "revision": "51a2d28a4b50a264d175314f60cb9aa6"
  },
  {
    "url": "assets/js/32.812cf095.js",
    "revision": "f0a786912035cdc54c4784bb934692a7"
  },
  {
    "url": "assets/js/33.2d9cb80d.js",
    "revision": "0942ac90656bba33ab41d8d45c518636"
  },
  {
    "url": "assets/js/34.3ba9d886.js",
    "revision": "e965889698bf4aa1d4a83e7eadde1036"
  },
  {
    "url": "assets/js/35.647ad4e5.js",
    "revision": "20b6d6d947ee47b3d89b4f9823104278"
  },
  {
    "url": "assets/js/36.1cf09030.js",
    "revision": "522b97a43e5573f95039f7bd6d7a5561"
  },
  {
    "url": "assets/js/37.861e5158.js",
    "revision": "5c6d22955d0e009a3bcc8d6dd9063c13"
  },
  {
    "url": "assets/js/38.dfc38d5a.js",
    "revision": "f2c9a8b794bebfc34d29bc03f7f0c574"
  },
  {
    "url": "assets/js/39.f71ad671.js",
    "revision": "bc4d98e3b5642ce53ef0e815a59956ce"
  },
  {
    "url": "assets/js/4.5fc28416.js",
    "revision": "1405e6852bcdf0c10de68b54d75dedb3"
  },
  {
    "url": "assets/js/40.5995ea8c.js",
    "revision": "0b3d072a812b7f3e733d279486d1588e"
  },
  {
    "url": "assets/js/41.4879e4e6.js",
    "revision": "4c4fb438e6a3006308f4c6cfe605e82c"
  },
  {
    "url": "assets/js/42.0ed98711.js",
    "revision": "f1af3cc244b3bc91ce3cecdd90e8fffc"
  },
  {
    "url": "assets/js/43.6114301a.js",
    "revision": "b6b945289c1ee8b4ee8efda7f77ec1cb"
  },
  {
    "url": "assets/js/44.113fedee.js",
    "revision": "20c8740a0ed5664125b3975939745d9e"
  },
  {
    "url": "assets/js/45.1811ac3c.js",
    "revision": "452ee08e6beb91493e45a78d2488ab49"
  },
  {
    "url": "assets/js/46.9f757ceb.js",
    "revision": "3bdbf5d6ea2d138298cdb1f51226dc6e"
  },
  {
    "url": "assets/js/47.093b20a9.js",
    "revision": "23e71501513f14119c29c7f33686558c"
  },
  {
    "url": "assets/js/48.c8dd0b0d.js",
    "revision": "b9662d5429955ebf90ffccc6b59f81e6"
  },
  {
    "url": "assets/js/49.c48b0425.js",
    "revision": "420f143394d5db15eabbccbb7950be0e"
  },
  {
    "url": "assets/js/5.ed410f19.js",
    "revision": "0cd18ffbb176b40709166921fee37899"
  },
  {
    "url": "assets/js/50.65a57529.js",
    "revision": "c28f5610133060332562779a557eb396"
  },
  {
    "url": "assets/js/51.d15ff883.js",
    "revision": "e769d264f22bd1497f2732c1d5d961b4"
  },
  {
    "url": "assets/js/52.17991068.js",
    "revision": "9ed6eadb1d65edd56b312e68d5f6dd07"
  },
  {
    "url": "assets/js/53.a70b7452.js",
    "revision": "0a20d1c077052d554170bb34e6bc2f67"
  },
  {
    "url": "assets/js/54.b1feda69.js",
    "revision": "59b065f78c19de87564b4cc8de51dca4"
  },
  {
    "url": "assets/js/55.136f6a06.js",
    "revision": "b4d19cf9111a22cb241ee2972c1c33de"
  },
  {
    "url": "assets/js/56.078eecb1.js",
    "revision": "98a6dabf66cd730173673f61457d6e9c"
  },
  {
    "url": "assets/js/57.9219372d.js",
    "revision": "e70522efb2961f987448d26388c64753"
  },
  {
    "url": "assets/js/58.7f94654e.js",
    "revision": "ecb57f83248538f7703e170e608e154c"
  },
  {
    "url": "assets/js/59.76b86693.js",
    "revision": "c870f22ca12513ab81f9f2efafd1de95"
  },
  {
    "url": "assets/js/6.9db6c622.js",
    "revision": "ffcd10b9572d277f8c679ee8e6c2316d"
  },
  {
    "url": "assets/js/60.182583d9.js",
    "revision": "e5aac85289a0c05371335b9de6305a41"
  },
  {
    "url": "assets/js/61.45b06bbe.js",
    "revision": "88171a19588b871f4f6136a3b69ec8e8"
  },
  {
    "url": "assets/js/62.e52a9cc2.js",
    "revision": "fa639070f4ce88d2e7125d1dc9400546"
  },
  {
    "url": "assets/js/63.067ddcef.js",
    "revision": "d11fe37976ddfc7cd9e2aa69baa01720"
  },
  {
    "url": "assets/js/64.7b8caf77.js",
    "revision": "323fbad697a40318672420cb49f51649"
  },
  {
    "url": "assets/js/65.3b1639fe.js",
    "revision": "dfd8e597633ec932a3f8b676409235f2"
  },
  {
    "url": "assets/js/66.f5f2e6b7.js",
    "revision": "6ca0387072acaac1dc5b16b0ce512a61"
  },
  {
    "url": "assets/js/67.1d4797f9.js",
    "revision": "06e75ed70dbd78fa5069f1d54bf3f4ff"
  },
  {
    "url": "assets/js/68.9842ab6c.js",
    "revision": "84d078121e640f33f2a3c2117087f994"
  },
  {
    "url": "assets/js/69.97011671.js",
    "revision": "97f979186f5c5e66464a72ea8e29cd61"
  },
  {
    "url": "assets/js/7.d081b7c4.js",
    "revision": "40fd566a3f16c7ad9335465c009816b3"
  },
  {
    "url": "assets/js/70.31267f5a.js",
    "revision": "7c7220a69d7fc7988f5370af23a71103"
  },
  {
    "url": "assets/js/71.e7cc2f49.js",
    "revision": "e1527c7f8fd14a34c5a4c53d80e659ea"
  },
  {
    "url": "assets/js/72.5edefd0b.js",
    "revision": "a50c626c306d4ae8eddae43115cef06b"
  },
  {
    "url": "assets/js/73.172d52db.js",
    "revision": "b777eeab247996d2c88e13da12691590"
  },
  {
    "url": "assets/js/74.326969a8.js",
    "revision": "e3813e68ad8b3c27b74d87d1e81ba2ff"
  },
  {
    "url": "assets/js/75.a815ffcd.js",
    "revision": "64604195ef71a022d8b3b9637ccc7c76"
  },
  {
    "url": "assets/js/76.e71cf19e.js",
    "revision": "12eac41ebaee257dd55b4b44061af4c5"
  },
  {
    "url": "assets/js/77.ea360290.js",
    "revision": "98addfae6562481241799dc7b5c869e7"
  },
  {
    "url": "assets/js/8.1adc3a8b.js",
    "revision": "3c3dd7f560fa72d7f436566b17b30792"
  },
  {
    "url": "assets/js/9.08c60e40.js",
    "revision": "5336bf7ec7bcf3ac8f68a128490c0304"
  },
  {
    "url": "assets/js/app.1197076d.js",
    "revision": "f74f440fb8c77ecfe2d4ce5922059188"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "b0eafedd3252778470e5e548e8f09909"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "2387473b886bf6c5b4b260b73ec54213"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "17dd02e43733fc8577729944422a2100"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "a0aa8b265daeae33e78c7de27dba5e39"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "860789fff228232cec28508bfe88bef1"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "d654abed9dd84783ced2423fa52e6424"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "f1af73240c8933863c239763a220b199"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "1798c1ede89f5823eb450265c3e987a1"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "cf6d6f9ac92ac07ad5d69ac35cbda8f2"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "e0c094bf4e9d834c68493e6f4b496017"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "fce26df836e8169597bfa40a54faa5aa"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "51b294eda61749e460bb374b978b2455"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "0339f2086c02126abe720a3cea04acfe"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "4198be87c780856586a68ddb98d66af3"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "c0e4e6b2fe36460a0423296ca2d7f1ff"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "62e9ee15591aa13aa13bebd554af4436"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "6986407fb258244ac23d2b8a01c4197c"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "4ccd63bce908d5d98dc2d5cc0de5de9c"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "0efe1c43105e5baacfbb42eca201f41c"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "a9f45ff2f3c42811acdcdfedc64bf01d"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "f7a9986c7fea8920dbfaa5f8f9c278be"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "832c68f4405e020bfe85fdc80196bd8c"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "0b735059cb6d7cb221f8e848512dc530"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "45218aa1b832acddf01e1fd3d2d7c02a"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "e01c078c446789dfe7c76fa6dfeea675"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "211ad4f7a98959853a370035df611472"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "99b0a816165c71f1cc0cac8e8f0ba3ae"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "3b8f2175e6337d45a5cb790878eac47b"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "eee70a411174cd7557af8f50c4d54cfe"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "43354705aa99a7e62c70d35e687c8514"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "d811b9f2f1d8c99f081ac77ac4a692a2"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "9bbebaa2c09a7d2164ca8fe24c3c0bfe"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "d11fec90d0df8b970f45f22b575bafd2"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "584aca35dc3e5731d6efe63a29fcab58"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "3844d9e29c0232ac53c502572b74890b"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "5cd4f021ab5775c25fbc6073b87922c1"
  },
  {
    "url": "daily/2021/04/23.html",
    "revision": "07ef294898cd249a66b1786691eea2ca"
  },
  {
    "url": "daily/2021/04/24.html",
    "revision": "759e1093ccb5aa3eda514b338893e09e"
  },
  {
    "url": "daily/2021/04/25.html",
    "revision": "4b6f8d46cc1796979affa48502267e2f"
  },
  {
    "url": "daily/2021/04/26.html",
    "revision": "9aac29567825455711c4b00a26f6881a"
  },
  {
    "url": "daily/2021/04/27.html",
    "revision": "3b0d0f58964271133560c59b551a93b7"
  },
  {
    "url": "daily/2021/04/28.html",
    "revision": "3bbcd55f5be284e904da636f3bce0413"
  },
  {
    "url": "daily/index.html",
    "revision": "4848addaebb98f7d1d2393170fbf77a8"
  },
  {
    "url": "en/index.html",
    "revision": "d971cbffe4383ebb14cee401a7bbf8e2"
  },
  {
    "url": "en/more/about.html",
    "revision": "09a1d8b525e7e4ed0733d77e0949905f"
  },
  {
    "url": "en/more/comment.html",
    "revision": "9e3cc921d6517720b0de3ae536120e98"
  },
  {
    "url": "en/more/contact.html",
    "revision": "fec6d77504cbb9df0d6e2d8795405f58"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "df3705013f1cf2dc2923a91536895087"
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
    "revision": "aee55df0e56ab976970b87c455cded9e"
  },
  {
    "url": "jp/index.html",
    "revision": "1ef7c42dcea2e5d993789a67322e4da1"
  },
  {
    "url": "jp/more/about.html",
    "revision": "837cad87623d4014b09b3f5f38bee098"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "bcff4c6ce369dc5efa9606d47ccffad5"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "fe83a598f35850a1bd0072eee28639d1"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "4d28299ac03843a23da33dde969078f4"
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
    "revision": "2e3f8a406fa9138bad7562ba4bb560fe"
  },
  {
    "url": "kr/more/about.html",
    "revision": "2aa8e0c3a755b137b6bbbf9a2592b134"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "0f661a6bb4e3377ac83981262268fea1"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "f2746a9a42fbe82f8de0ff3968b28d2e"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "045d5c2ab0dbf4bd2ade93ff9fe1a965"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "66d8a7b2faf8fc61910447d9e1e83863"
  },
  {
    "url": "more/comment.html",
    "revision": "023f07f19a132aa70f2ab53102ed4d25"
  },
  {
    "url": "more/contact.html",
    "revision": "37767022b9f25eec4cb063191525ad03"
  },
  {
    "url": "more/sponsor.html",
    "revision": "77750784ec4d8e174d60393e9dca4a0f"
  },
  {
    "url": "post/index.html",
    "revision": "6c058785b42e671256d067b81cccb2e4"
  },
  {
    "url": "tools/index.html",
    "revision": "5973a60682a9ab684d9b0daef290f1a1"
  },
  {
    "url": "video/index.html",
    "revision": "d3c3016c119f71534670ba192e6af83f"
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
