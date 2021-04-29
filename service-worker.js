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
    "revision": "07ed9e488467ad8cc39dc1270ea759a4"
  },
  {
    "url": "about/comment/index.html",
    "revision": "5b7edb752fd58bea0dba5b4c7ed6ea70"
  },
  {
    "url": "about/contact/index.html",
    "revision": "f49481cb8dd8a8d234851bfcc696a3bd"
  },
  {
    "url": "about/index.html",
    "revision": "7e4fea4c7f4fd67a3712f44e059659bb"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "dcefa63ffa64a49970109413eb8ff631"
  },
  {
    "url": "assets/css/0.styles.a5bfbda5.css",
    "revision": "41a63a561a765dfa9f930a0351996056"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.89273373.js",
    "revision": "387ce3ce344c1b79daa402febe251dff"
  },
  {
    "url": "assets/js/11.4ce44d55.js",
    "revision": "8965f3b924f0d27fc7abd4bc144f84de"
  },
  {
    "url": "assets/js/12.388d0b25.js",
    "revision": "965243e1f2ed26fc39709662715e38a6"
  },
  {
    "url": "assets/js/13.118d8ded.js",
    "revision": "afb00ef7c8863e02b22ddc62cce43643"
  },
  {
    "url": "assets/js/14.2bb540b9.js",
    "revision": "757b714064ac89e72470d04a2ce71db5"
  },
  {
    "url": "assets/js/15.5e9c6004.js",
    "revision": "0d4ff5ea2ff88fe04564a4ceb45aa392"
  },
  {
    "url": "assets/js/16.4701632e.js",
    "revision": "2d07b5b1b58a0d56b27ff691142ff111"
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
    "url": "assets/js/19.64445ad4.js",
    "revision": "54d9f430f9dde3737dd0b03bdec9acfb"
  },
  {
    "url": "assets/js/2.c709e986.js",
    "revision": "b9e04dfd3158795cc9878899e5b3c42e"
  },
  {
    "url": "assets/js/20.002fbb44.js",
    "revision": "b1dd06fee93878e7be3f5550bebc186e"
  },
  {
    "url": "assets/js/21.b35c844d.js",
    "revision": "b2d5e5b92edb6e163bfcbe4390032b94"
  },
  {
    "url": "assets/js/22.0ad3d38a.js",
    "revision": "c2e4cdc9f472b8bee26bb235bd0cce16"
  },
  {
    "url": "assets/js/23.acaec52d.js",
    "revision": "cdbb54e3dd637c6089cc7211c1fca178"
  },
  {
    "url": "assets/js/24.1de100e8.js",
    "revision": "2949ac61a0ef84d53faddae5a8905fea"
  },
  {
    "url": "assets/js/25.88f5eded.js",
    "revision": "b88828c5324dd497ef289dd5f739bb09"
  },
  {
    "url": "assets/js/26.69cbba33.js",
    "revision": "70a553b0b507de683698e88b68d14fc0"
  },
  {
    "url": "assets/js/27.c8fa8cbe.js",
    "revision": "2d93822c66803a0dbcf88da90e04627d"
  },
  {
    "url": "assets/js/28.5edd3a71.js",
    "revision": "261533ede1cd477dea119051aaed3027"
  },
  {
    "url": "assets/js/29.51e02c77.js",
    "revision": "242f238cce926dcf94cd97a6c190fc3f"
  },
  {
    "url": "assets/js/3.3323ec81.js",
    "revision": "3d18914db69f8cf0dd52efe02d5c84c2"
  },
  {
    "url": "assets/js/30.9ea73be8.js",
    "revision": "e8ac2208b5dd8beec0d212b735db919a"
  },
  {
    "url": "assets/js/31.418f947f.js",
    "revision": "cc54a37b84cd95624ee5a3ba67ce5d21"
  },
  {
    "url": "assets/js/32.57e2ee03.js",
    "revision": "f7726a63cae287adaab658c0beff6bee"
  },
  {
    "url": "assets/js/33.cc3ad687.js",
    "revision": "a000e796bcc12c3525265412b4839a5b"
  },
  {
    "url": "assets/js/34.7d77d8e4.js",
    "revision": "a2b0fbee488ec7198e22de41029456f3"
  },
  {
    "url": "assets/js/35.dd5786f9.js",
    "revision": "2af17e066c5cf7c6837c2efa4e553693"
  },
  {
    "url": "assets/js/36.f54c86ab.js",
    "revision": "87c18c9220c6504b8de5d097f08d3f13"
  },
  {
    "url": "assets/js/37.7c42c7ce.js",
    "revision": "d32a4c7097d5bb9f9d04eb8c825a835d"
  },
  {
    "url": "assets/js/38.018e2200.js",
    "revision": "652af4ca53509d75407d30e99efa6425"
  },
  {
    "url": "assets/js/39.8d03363a.js",
    "revision": "808063011f5d6d6d3944661f8ff040ce"
  },
  {
    "url": "assets/js/4.0678a3d5.js",
    "revision": "9cf8a33a20501015501c61202d3f2d0c"
  },
  {
    "url": "assets/js/40.7dae7552.js",
    "revision": "05f4606e25a0465eb3423453e7b47762"
  },
  {
    "url": "assets/js/41.a647a985.js",
    "revision": "c34787a1c46f5ac00cf65dc159f8831a"
  },
  {
    "url": "assets/js/42.01c759be.js",
    "revision": "1b0caf06bbaba0c830a853428f72421e"
  },
  {
    "url": "assets/js/43.754917f8.js",
    "revision": "559b9db48dfa8439fc07776026f0cbf9"
  },
  {
    "url": "assets/js/44.59611f4f.js",
    "revision": "2d859f29debd26948d47deba716f3eff"
  },
  {
    "url": "assets/js/45.619a9ffa.js",
    "revision": "d153aed1930195c9d1a1af2ee6c0538e"
  },
  {
    "url": "assets/js/46.63a6e612.js",
    "revision": "eb65d7a66029db817bf94ac4ec9d3975"
  },
  {
    "url": "assets/js/47.4ddd5661.js",
    "revision": "ad73786bc135ce817f5b85b1fa950147"
  },
  {
    "url": "assets/js/48.46c7e294.js",
    "revision": "d53f7cbddef977fa9a9e41f2801f54ca"
  },
  {
    "url": "assets/js/49.8410fee3.js",
    "revision": "f3aef3f14f1992465a08f8a8da29da70"
  },
  {
    "url": "assets/js/5.ed410f19.js",
    "revision": "0cd18ffbb176b40709166921fee37899"
  },
  {
    "url": "assets/js/50.384b7ac9.js",
    "revision": "02c1b55979c1df025a374a1062994772"
  },
  {
    "url": "assets/js/51.032b9ffb.js",
    "revision": "94928687b4a530d48b56d7a2fbfbc8db"
  },
  {
    "url": "assets/js/52.4551e697.js",
    "revision": "1000bf08b5b1e6b026326afd3d73942f"
  },
  {
    "url": "assets/js/53.8cc71855.js",
    "revision": "bcbc03db33a9dc8777fd4e6bf4c46780"
  },
  {
    "url": "assets/js/54.324c4ef7.js",
    "revision": "96425e465125a86e4721348986e4cbb8"
  },
  {
    "url": "assets/js/55.44eb2c15.js",
    "revision": "1ce37d69a613b7d713b982f41596ffbe"
  },
  {
    "url": "assets/js/56.0d5c5492.js",
    "revision": "2f3222e953ac6b8693b2382b572e88cb"
  },
  {
    "url": "assets/js/57.6386dd54.js",
    "revision": "06adf5f82c68346640cfed83b8809cb4"
  },
  {
    "url": "assets/js/58.df5b3109.js",
    "revision": "a147aa8375ae6f7a6c845f8d1650953f"
  },
  {
    "url": "assets/js/59.a8619879.js",
    "revision": "b36ef7ec6fa11aa670e712e2e70597ee"
  },
  {
    "url": "assets/js/6.cf587644.js",
    "revision": "688a3f197a5c0c9ed205347355502816"
  },
  {
    "url": "assets/js/60.e4ecaa20.js",
    "revision": "5060092acd50c403cfb9002ca87a415f"
  },
  {
    "url": "assets/js/61.db664899.js",
    "revision": "4154c33b0db026209df609b1aa96b135"
  },
  {
    "url": "assets/js/62.2f6a52db.js",
    "revision": "96b4df523045420d518241e40166ea11"
  },
  {
    "url": "assets/js/63.b718a630.js",
    "revision": "53410869022b4e1ba897b578c669f066"
  },
  {
    "url": "assets/js/64.a1e7ca76.js",
    "revision": "e89779276269e551e13bafc2143a0b91"
  },
  {
    "url": "assets/js/65.74a98a44.js",
    "revision": "dfd8e597633ec932a3f8b676409235f2"
  },
  {
    "url": "assets/js/66.aa84be25.js",
    "revision": "9e87bfdc424b35fd5e4a231931de3d55"
  },
  {
    "url": "assets/js/67.03c7bfa3.js",
    "revision": "4fa9b38519f079952ba3e5549ba3d863"
  },
  {
    "url": "assets/js/68.3cca504c.js",
    "revision": "84d078121e640f33f2a3c2117087f994"
  },
  {
    "url": "assets/js/69.f1039993.js",
    "revision": "447014645d3388a5dcbcd42aa9daef17"
  },
  {
    "url": "assets/js/7.d081b7c4.js",
    "revision": "40fd566a3f16c7ad9335465c009816b3"
  },
  {
    "url": "assets/js/70.4383b1a4.js",
    "revision": "956ad7f23c928f3e4de3e4c1a7400d05"
  },
  {
    "url": "assets/js/71.f6ab27a7.js",
    "revision": "081553015044469692329dffa6fcf297"
  },
  {
    "url": "assets/js/72.a8975584.js",
    "revision": "ec5b359c0996c94ff30a76c035f377dc"
  },
  {
    "url": "assets/js/73.a5c1f0d1.js",
    "revision": "e391f6081edfefeb3870c19403a882aa"
  },
  {
    "url": "assets/js/74.1cbbe5f9.js",
    "revision": "cadedf855badb0be42ebd89f1ea68bbe"
  },
  {
    "url": "assets/js/75.b66bb89d.js",
    "revision": "ded6f48735c082c0cc64443258e9039e"
  },
  {
    "url": "assets/js/76.7c99d550.js",
    "revision": "b316d1be939b362ff2c4e00535b667b9"
  },
  {
    "url": "assets/js/77.33ce8908.js",
    "revision": "41b1be4f2bd6fe80a8e9ef56274fd537"
  },
  {
    "url": "assets/js/78.4ac8238b.js",
    "revision": "1aa562ad7e9c99a5fb6856f9d605c15b"
  },
  {
    "url": "assets/js/79.bd249714.js",
    "revision": "b7ec321e6aad12bd79fbfc80ef077ec2"
  },
  {
    "url": "assets/js/8.c9406f72.js",
    "revision": "a6d5741ed4e20d9a540b89401e8dfa19"
  },
  {
    "url": "assets/js/80.7db82855.js",
    "revision": "272ebb178c2ee3254c32e4ce01f292ee"
  },
  {
    "url": "assets/js/9.0f7c471a.js",
    "revision": "ca2719803a948c5ca049474bd051d06f"
  },
  {
    "url": "assets/js/app.26529f88.js",
    "revision": "340cd608a409cac94fb7b4690e49e397"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "4b30e6dde04a60bc88c8b531aebb6ef1"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "83086125bc80a5c8fa21947e948b465f"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "75e7a52e0514252d7c3be7ecbdcf7ba5"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "9e82f89f50a6c3da27fdf1b9a7cb887a"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "b61ade3e0c3fd6b98fcf47bdc61ee18a"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "5fb6ffc6f5f36f6c0b14c2d8b2587bdc"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "97f00c5783f43f9ace459d251ed49ab5"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "3ec0ac4fe3647db5bd200bcc90481512"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "e72a2fd2006f510dc5aa1cd5c6d19164"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "8cfd3fe860da6e08d4e2f7622d58553a"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "d7138df007a40cedc01693394483f1c4"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "eabc594293e60dc27b0bdb97a2565729"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "7f59c6020a3dcd04b906a3807fa1e6d7"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "dcadc2b07ec3f127a6fa0535f4cca820"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "8711ff9d641d62508024b992ce064af8"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "821c953619200e932cfd5643e26ed394"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "8885a87fb4da1978b815719b8ccffeaa"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "0500d8ac62e59f6c865227dea78f30b2"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "97c32571b8f6507396af3a6da6ae4d1f"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "51c1babaaebac92212e5f980798aa200"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "205caa9a5de2a18d1d48ea81b5992701"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "0f408ee4eeaa258bcd87f8e0f3263dbc"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "fecee924ef71a95c437fa206f20b3989"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "87f087b682ad1aee8d67510445535d2e"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "1c611f1f21cb90c0d65f0dc6fd28c47a"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "2e6e58269b1f83b5f3189bed51fc470a"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "fafe390a22aea57799cc299fd7080ae8"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "a69a293625ee318f48baea86cf69a50b"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "af172eb5b94fca18d67e2893a18f132d"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "93d076578fc7c97486be2f82a82aaba1"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "68fe12f626469c22127e0610bae6c969"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "4431ddddc4654c0f8186f52432f45054"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "737f1c5924a01a8cf592c76a072ca02e"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "859adabded9021118a69313c9aea076d"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "73b8739193caa2fc066531bb0aa584ad"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "5f66e248b024b9be7d2053727b19087a"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "9caaceb9bda431f0d366665c84e1e31a"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "b20f4e1a660c1b1fcc2c187508378202"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "e852a59bb3ce14a26eb81e67f20e6df0"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "74ba4a48b6f47c918899f70f33b30a17"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "760f2a13df57d7c2afd6f3009c900cf7"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "bedb9a7e5d7252a11089dce5701cdbf5"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "c2bf8b8a9fc191ab49924b8e8eea72af"
  },
  {
    "url": "daily/index.html",
    "revision": "36b01eeacde411466a8888994654baf8"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "dc6622ecb820990f38760bdca50c404c"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "29b545989e08cc5e66f1803de04a4b93"
  },
  {
    "url": "en/about/index.html",
    "revision": "ed5a5c2412fdb9d0eef696e5044e7953"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "6e0196f5bacebf4c906441d0de3bb88d"
  },
  {
    "url": "en/index.html",
    "revision": "0cc3fd784d5f3e45a63a52091ddfeac5"
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
    "revision": "bff39020b5a8fe52d0d46880c2c20734"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "25f336a4c329f44858fb1ab284eb5694"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "d02af8d87ed666914b7c071f4af1d502"
  },
  {
    "url": "jp/about/index.html",
    "revision": "6da80bd775d861460c440b0bfb97bfc5"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "ff9f678f411f1e265b8a12ce1ce011a0"
  },
  {
    "url": "jp/index.html",
    "revision": "80781d80e13c6a7f2ba84481c9a08459"
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
    "url": "kr/about/comment/index.html",
    "revision": "a3f11774eea1c12fdd9a3bb5dc13c283"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "dd7e51c7401f7bcb1f8828075684e43e"
  },
  {
    "url": "kr/about/index.html",
    "revision": "4605d5a2c6d457c6d6cf7fece49779b4"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "34986f0cc3855bc9b91e9651c716d24e"
  },
  {
    "url": "kr/index.html",
    "revision": "e5b4456a649ffbfd81b1ce975a6eb454"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/links/index.html",
    "revision": "ab523c3bc292e85402928561b8181d83"
  },
  {
    "url": "more/music/index.html",
    "revision": "6967bc0f89fa80bf313d7a9e078fffed"
  },
  {
    "url": "more/photo/index.html",
    "revision": "a75bf18cdafdb8550e6fb2e539b3ea17"
  },
  {
    "url": "more/video/index.html",
    "revision": "99235491d6abb302368ad17b123a36d5"
  },
  {
    "url": "post/index.html",
    "revision": "4a0ebbad9c4b18417a4e334b48244b31"
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
