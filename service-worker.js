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
    "revision": "ed4a7cfbddd64ebb53cacb89bf6e0b6a"
  },
  {
    "url": "about/comment/index.html",
    "revision": "44bc0b3b6e2524d23a239eb606c6533d"
  },
  {
    "url": "about/contact/index.html",
    "revision": "b60a4e811ea92b5293af969066531a20"
  },
  {
    "url": "about/index.html",
    "revision": "652924cdca218db5bd496de7aa4bdefb"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "4ad5ebdb881b6800015544d18a54d091"
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
    "url": "assets/js/74.83e17759.js",
    "revision": "e3813e68ad8b3c27b74d87d1e81ba2ff"
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
    "url": "assets/js/77.8c43e6b8.js",
    "revision": "14b5a6636347c252ffa0da35cbff8efe"
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
    "url": "assets/js/app.6c81b09c.js",
    "revision": "0db7ca7637d1562a7f101387756f4f2e"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "fac520a5f49a8f3a47add95fa719e37d"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "53a3457fdf48b68d5e6952dc4a116cd3"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "61358975d14442cd99f62ac1121a81b0"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "3678c5b6f622b358574feabfb1147646"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "b0ab8fe2d41dd9991e62cdd93b8f4d06"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "e5401139d29fffd9444cce63993fb568"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "1a3fd278a562014d028030fa13b4d365"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "7dc730977f7727f87da0e71e2ddb7d67"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "2be119af1ffc75aeaa78458f50419bf2"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "a8e7491b298b7f54bd0ac4c64a3d6fb2"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "4f3678d1726dc74f881feac4dedd5ab0"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "74ff274e98e29ddcbb2ed5de7edb0cd4"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "9a88bc5be7b5d9cb98d0e4dd170a2a74"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "d9eac1245cc9f7280cffd5b489edd03f"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "ffea49689216e3fb4e285c38a165a07e"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "f6b7f0a383fd9455a955da13eb423f3c"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "8de8fd3b8e215324a5937df874db46fa"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "3b07ce053f0e1386fe1ab2baea55c1cd"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "b224d0c1027d9c82f2336a3e848f6266"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "c63b6c239724eab384a3716a2bb2a3a3"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "bed07d3a9f3286472608a9d9f5057e35"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "3472eaa4a094caaa1a6bda4e5a342add"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "ab6964b14c9c648aef5e9eb1e25777b6"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "e8137aeeb71da3e047d5903afbb70b8a"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "bb5f571b6cb3c3d94b874ba4cc9ade88"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "82e7da502ea73c22644490f5258d82e2"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "313f5aefd39d5999f6e8caf89d020c48"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "61817d6a7081b447a6a43fad1f46987c"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "e452738827534ff7a33792038e42dadf"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "94c19e231d08b2bad21a9c28239b7b6a"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "82d0c0621822452d82c7b886f4eacbf0"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "a89bca598bd22b3f878948da49d195c8"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "ed71cc6eea7289e35c3709da8f3a8acb"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "ce9e8e47fd46b1b3e523fce55e674696"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "854c3ad323f5d509d54577003d4230e9"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "a6431fe62842a336b58cf90d390e3c19"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "027d9e0fec8237b7c9b84881d5a3da76"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "7d5b1010c12e055a5997f1ca7203b7b6"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "3adb2fee7194d67745c4385c50ba822e"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "be362058fe1d459b6a1e3e8fe389752b"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "00618d645509053be9e79c356ba7872f"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "2ea82af3c5cf823c46b8cd50f0e0070c"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "4bfe8a947856dd5b80f135316e9ef229"
  },
  {
    "url": "daily/index.html",
    "revision": "28e6a371e45d6e6c8119f5915c06de00"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "b824677c93fabb6b9056488da58fb824"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "7c7b1d885af2a77a65b04a3b3012e042"
  },
  {
    "url": "en/about/index.html",
    "revision": "8d84487f1ad8a2d3c33bcf4b86d274c9"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "1c2fd2143d84f66d3a85411524a5098b"
  },
  {
    "url": "en/index.html",
    "revision": "c2dfce6ae17930758da60f5c4511adbc"
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
    "revision": "ec34e08e9659ab41cfb80ed36b21f2b2"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "a4acfcd8e1aabe8f58c46f7163402932"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "e3bd6f3091bb5933fbc5dfa10b70b502"
  },
  {
    "url": "jp/about/index.html",
    "revision": "b16385c81642a6679111b52e25b74921"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "45e36d0fda87ec13a7ce9de3c7d1634e"
  },
  {
    "url": "jp/index.html",
    "revision": "9d16f57ea24ffe1cc1bdd887efc10f5b"
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
    "revision": "f199d85a8790c243fd057fb4d94dbd96"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "d91d1e7c383061c243c901370b082504"
  },
  {
    "url": "kr/about/index.html",
    "revision": "ee53cc84ac3d565f24ec4f714a5a390d"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "0e5b96263e5254e2a7b067f9e2c9ab03"
  },
  {
    "url": "kr/index.html",
    "revision": "2429cb5722a2c47cd7ace6a3ef58255c"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/links/index.html",
    "revision": "66809d2e26f2d07f46a794f2bdda4aa0"
  },
  {
    "url": "more/music/index.html",
    "revision": "d4a3da63f62867e6caeecd182694a1c6"
  },
  {
    "url": "more/photo/index.html",
    "revision": "b3af714b15f8c4cf631e9b8a7cceba8f"
  },
  {
    "url": "more/video/index.html",
    "revision": "bc604df729a3c1fa092fd6bc3dc305b0"
  },
  {
    "url": "post/index.html",
    "revision": "37bb1d311541775a687510418ab3e649"
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
