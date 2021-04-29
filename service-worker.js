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
    "revision": "8dc30b0cce5214fbd079c2686713dfde"
  },
  {
    "url": "assets/css/0.styles.8b6fb9c0.css",
    "revision": "408ff873f716f2cf981413b26fb98d9c"
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
    "url": "assets/js/2.c709e986.js",
    "revision": "b9e04dfd3158795cc9878899e5b3c42e"
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
    "url": "assets/js/61.3b0cce6d.js",
    "revision": "7de15174b0fa9b109c52ad7e3f72c369"
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
    "url": "assets/js/8.c9406f72.js",
    "revision": "a6d5741ed4e20d9a540b89401e8dfa19"
  },
  {
    "url": "assets/js/9.08c60e40.js",
    "revision": "5336bf7ec7bcf3ac8f68a128490c0304"
  },
  {
    "url": "assets/js/app.21e1538c.js",
    "revision": "6383fbe9802d555fd2c16af1c580acea"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "8ed381e5714b3d7164c9d44faf8927eb"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "ab2f044147934b80d59438f105fd3364"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "d1e168d11a75e0cb887239331312913d"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "384815ecb673e1a536ff0763b68cd481"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "bc689f19a446c8a6a541671e6151504f"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "7b79b974dd3ae1037ee4e8963fddcb48"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "c824d58ef73d6931245dd538bdad983a"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "dca07cf6db56567832007e67c0b6af72"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "ce7a1a34b74d899c0233cda5fe59f123"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "b9f5975feac37d5eecac2158e8d3fb62"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "27934cec9e1fa4bd6534b8fe0cdfc60b"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "a8b543155898614ef8e519663ec95458"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "ec43d7981eef8dfd360d873e56395d39"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "e2a9869dd14f10be944e4131afb75c1f"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "6b16fa22681c81ef4fff79d8dda7962a"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "97b9c30b502b13ab7d7f37bd9d07db45"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "f3d5a10f419ba1407eadca18991389bf"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "8fc0506f5e4ace5d35165f5f35cf73ee"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "649dabaa4067adc78037fb15b5ce9262"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "6454048953be82154c504cdc9872fb72"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "206e1c0f26b9f3a61d60193b9f1d463e"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "48abf57f6e124caabab4a2f15d0a4a7f"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "a8e0935ea3ccd933c10336c674a246d9"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "09161617e397bca5c15ae5304e4df4fd"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "9e5db98efefc9bcec06934a50642133e"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "9306c5c27a4f06d4bbe48b052f5d77f1"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "cf9b48c7c4bfab79751df137af5cfe12"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "cb242923d28a55d7709465031f6bb164"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "2f533b5540ca62e84f5ec58c0059ffa1"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "444a6322f6eda5dc9ef936ae4a5e830e"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "702ac2b4ce70b6d2a4045d797638aba7"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "910829022974e10cd2bf6ab2536aea43"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "368f9dac35e3a3aa8453957e8f05c04f"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "d8f682b36ae8d346d47ce0e91baefc18"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "9ecbb22a42b2e7dde3dbc97461b7eae9"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "23635ac1b461c5c08799fa0d3a33c20f"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "3d3400b6bdde0ed238d1f58cd0c07b9a"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "7790778eecc98819595951a16826aedf"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "2449147bf6a7ba2dd21f788fa6a080d7"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "bb57e9adacd2e6106c49f4d264d46253"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "1fad51f968d38726257a7063b482a6de"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "82a5147749721a5ffd846757dd1eee25"
  },
  {
    "url": "daily/index.html",
    "revision": "c7b71f2d7a1a6f190fdc1235a997be53"
  },
  {
    "url": "en/index.html",
    "revision": "3091e29f7db7ddf4d8a5a6e412a852dd"
  },
  {
    "url": "en/more/about/index.html",
    "revision": "ed9e2ec4732ca0d001f985b40772ae84"
  },
  {
    "url": "en/more/comment/index.html",
    "revision": "9b1a80e6475b1dbd97b14adefcb875d9"
  },
  {
    "url": "en/more/contact/index.html",
    "revision": "30a02777c9302a77fc0c1ee6dbc635f0"
  },
  {
    "url": "en/more/sponsor/index.html",
    "revision": "52e3b0cec03e3980650ed5a9430acc0e"
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
    "revision": "8c9466d7de461c54a39f1a1752e0cd47"
  },
  {
    "url": "jp/index.html",
    "revision": "726ade1c63bfbcbfd9f0ed4a96bb18ce"
  },
  {
    "url": "jp/more/about/index.html",
    "revision": "9b951551ab502c5fa8656f5c24315140"
  },
  {
    "url": "jp/more/comment/index.html",
    "revision": "a153bad1f350a3277e0a105282f0007e"
  },
  {
    "url": "jp/more/contact/index.html",
    "revision": "04ba1391c00bb233f3d44929425d6581"
  },
  {
    "url": "jp/more/sponsor/index.html",
    "revision": "1bc21ed3414e4d8f73f56d2ad558363b"
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
    "revision": "939fc4a748a44c3054dc1c9d1536324a"
  },
  {
    "url": "kr/more/about/index.html",
    "revision": "b0a11eb63fac427e9938952d389f122c"
  },
  {
    "url": "kr/more/comment/index.html",
    "revision": "50f310d9dfb25ee5fcf2cb366369ea6f"
  },
  {
    "url": "kr/more/contact/index.html",
    "revision": "40e5aebe2c68d22f99d02b292b714db4"
  },
  {
    "url": "kr/more/sponsor/index.html",
    "revision": "92fa9cd67a54ad8fdb713898076c290c"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about/index.html",
    "revision": "5e29b0899ba58a4fa4f78f61a402bdb8"
  },
  {
    "url": "more/comment/index.html",
    "revision": "5e4c33f51565951b45362af9e00f1c1f"
  },
  {
    "url": "more/contact/index.html",
    "revision": "0b257001631cd1f7e69ac59a48ababc3"
  },
  {
    "url": "more/sponsor/index.html",
    "revision": "b2715ffc45e891f672d4adf8e880ad76"
  },
  {
    "url": "post/index.html",
    "revision": "c89d852d1186253098a57a3b5e0e055e"
  },
  {
    "url": "tools/index.html",
    "revision": "cf79374a774b9486397f549704b6117f"
  },
  {
    "url": "video/index.html",
    "revision": "ffbf3e7bc9808dc00d7177f8be282e48"
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
