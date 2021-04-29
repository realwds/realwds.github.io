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
    "revision": "4b8c19a1f80019186e4eae7cef2cdfc1"
  },
  {
    "url": "about/comment/index.html",
    "revision": "089787f9246d1045e8c0c1a9bb585e4e"
  },
  {
    "url": "about/contact/index.html",
    "revision": "929d94bf53193c688453ae151a81f8fd"
  },
  {
    "url": "about/index.html",
    "revision": "cc340569dab27716c2feb198ee5455ed"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "2e515adb1d58b148d1354d8435026f79"
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
    "url": "assets/js/app.112ede03.js",
    "revision": "d46bb65ac6f86930bcd0fe17ec565aa7"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "f6211bfe3312187bfc57167f2bdea468"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "cf51fbf6076b7051ec614331460c8ea7"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "05fa278c8d6e51b440ea6a4e26ce881c"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "7f24fa8bc4e55e6b2189ff068ec6c144"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "c5dca15fdc71eda44b84030ecf5881ef"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "c7aa7ca813f5952e03c2ecb697757b97"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "4b3fade26333610f948f75dc9be89bd3"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "955b4f560d656a065e7e5c0ae1debbc9"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "356f0701d3bdeb1a518c9fd766dabd99"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "162f7c7c1ab98edb4be2be38a60da3eb"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "aab55e088153b890ef23d3a448d9bcd5"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "7dbeab0b67a850b7bf1db6d1e9673bcc"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "62498bd8b96e9f5f7ba045e3ef686e12"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "67caf25653d9183cadb59b8c3fb830f2"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "2ccd971bf44b73a1cb8e79ea6ec3bfaa"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "e4eea749f609be07d752213c3801538a"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "d5e0cd7f2d421181397df0dc1043db7e"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "c9a4e763b9f0ec10cca41e7fce45f5ef"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "f69aa78716a29adaa4647a34fc70a7b1"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "01e245bc4e031ac9cdfdb9eb21562268"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "71aac54fccc76b43f484499ad15e5485"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "4afd909a20dca9ccd68df1dfc389ae57"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "3711adb3b35e63640657f8ca80455295"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "07e4d646404e6a7627b676736c940874"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "0835cef297c6a0170a81ae1c5a80ee15"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "4416e998f90a03429d5b4c56f158cbb1"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "47081ba590432c02a37db8c0f9f07e33"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "b8dbefc62c480b1a1589f197adeaf7d4"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "e192a40e0a12a4913a684a5eaefd2c7f"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "b3be08ae6bcd0fdf6cf959ed38c6056a"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "1ffbae9739cc9ae30da29d959324d2ba"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "5e0b17e0c08548026b9866fce742790c"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "fbb7b698d7ff126c72b7109d9f182280"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "b3298ee13ef8a2b3e58e9b5c1cb0f30c"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "900ed643b23c73800bcb021e3bd3e681"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "23bc320aa1ec1e943f79f1720a6aba2a"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "904db52172a18326fd2215e0281c37b7"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "98e4ab7dfbb21c1f1e095d50b76d82a8"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "454036e07d96d05c1f3f42fcba851ffa"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "a9651f67db99ea0c957e6a16ec182b31"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "28ba568e013b9fe62c0be87ddd7fcc5a"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "e5256d201c3634f6b8b8251de46f4166"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "aaa052afefc5aad421d037378fda9dce"
  },
  {
    "url": "daily/index.html",
    "revision": "eec768bab4dc431a6cf6dc8ecbe01cef"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "19397293824aadbf5b8e4c63918e2027"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "ae3fcf62c7bb9b6c1509533d5a7f5d7e"
  },
  {
    "url": "en/about/index.html",
    "revision": "8c0418ae004156f958662a9e74c9c52a"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "abd26f516b2a22e602f7f58c3ef4c6ea"
  },
  {
    "url": "en/index.html",
    "revision": "4f0a021cdf6f550f75254a09b3a0dc74"
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
    "revision": "073d201d78f3a860bd0fac96ab5b5a94"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "6858ae7fefbd363d90f7b19b89f4edd9"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "29eafa609c84a83a505e77ef2a45db44"
  },
  {
    "url": "jp/about/index.html",
    "revision": "11d363da6b195f5b57ddac84690f1a8f"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "0fd8be72537013e95acc21ba15261837"
  },
  {
    "url": "jp/index.html",
    "revision": "ccba8f6d2083183a09967fb48a2d59eb"
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
    "revision": "416b6473fa646879b9d53c87da4d8229"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "5a660f911cad7cb103761b2fa88ff4c9"
  },
  {
    "url": "kr/about/index.html",
    "revision": "342b36164ff981d5339691a732540318"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "b279881dc14c8ebda39a8e5d518b5352"
  },
  {
    "url": "kr/index.html",
    "revision": "ba7f8cc0fb7b93dc71e4e9f023b66498"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/links/index.html",
    "revision": "1c10cc1cad0152228d0699e5be028c17"
  },
  {
    "url": "more/music/index.html",
    "revision": "735b4b5e0e66dc6ede205b32b812aff1"
  },
  {
    "url": "more/photo/index.html",
    "revision": "b61e20094d7928b1592eee1237d197aa"
  },
  {
    "url": "more/video/index.html",
    "revision": "e81f0b50dd5614afc1a38c021adef6c4"
  },
  {
    "url": "post/index.html",
    "revision": "c2500e90770681853b6bbd6c8c3d56a1"
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
