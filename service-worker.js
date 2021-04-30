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
    "revision": "4459a864f9564ee8ac7895c8f52a9c2a"
  },
  {
    "url": "about/comment/index.html",
    "revision": "ca3e99e11987518a8f3712509d866c4a"
  },
  {
    "url": "about/contact/index.html",
    "revision": "3896d7e82bf4ad5f6f5776a5be38e9e4"
  },
  {
    "url": "about/index.html",
    "revision": "fbdb2294b6350de71fda8959da27f932"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "29455e485004d37fb9b8a84742a14cda"
  },
  {
    "url": "assets/css/0.styles.be43f2ac.css",
    "revision": "e385c12af99aa075206c9d1c96b9de20"
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
    "url": "assets/js/19.ac458206.js",
    "revision": "029fba9eb5132e2b677768bea0d2ff0d"
  },
  {
    "url": "assets/js/2.c709e986.js",
    "revision": "b9e04dfd3158795cc9878899e5b3c42e"
  },
  {
    "url": "assets/js/20.b39efde7.js",
    "revision": "e2cc79e4628f53fd68e4bbae6cd23af3"
  },
  {
    "url": "assets/js/21.01740cfe.js",
    "revision": "2b81e841d720f4b7bd5185f336df9e03"
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
    "url": "assets/js/51.4e2ba5c1.js",
    "revision": "9ee40d6ff74d8dcef3b02c070ffd1e83"
  },
  {
    "url": "assets/js/52.123da3a9.js",
    "revision": "156bf362bf72a78e65080d9920d86708"
  },
  {
    "url": "assets/js/53.ca534c81.js",
    "revision": "a7febb92dc0ea4fda20c50dfaeb110cc"
  },
  {
    "url": "assets/js/54.708e6e0d.js",
    "revision": "c381ce83c14a00e8419bb3a56ce217fa"
  },
  {
    "url": "assets/js/55.642e12aa.js",
    "revision": "712ae3cb19b9e484f3e7920d2cda9c37"
  },
  {
    "url": "assets/js/56.7284db4c.js",
    "revision": "94f7528da194add1742d1ac80ca56e10"
  },
  {
    "url": "assets/js/57.c7b1f5a7.js",
    "revision": "68eb2770d602dff47e82d46b1cb2c233"
  },
  {
    "url": "assets/js/58.6bcbda5b.js",
    "revision": "eebb3fe8240b676504d7f68519b39704"
  },
  {
    "url": "assets/js/59.c0812ca1.js",
    "revision": "ed1aaa3c919d908a43e979652401448b"
  },
  {
    "url": "assets/js/6.cf587644.js",
    "revision": "688a3f197a5c0c9ed205347355502816"
  },
  {
    "url": "assets/js/60.23e1ee34.js",
    "revision": "5ab27ab7af29ca385dd1c8122f53eb2f"
  },
  {
    "url": "assets/js/61.828672e7.js",
    "revision": "6c6f56e38d0c1a2d812d1ffaa29f8929"
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
    "url": "assets/js/78.2fd0202d.js",
    "revision": "6d6ca2a66987815f3e23637f5c421e6c"
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
    "url": "assets/js/9.14e6b11b.js",
    "revision": "b2cf792d00ce01d3a24a1ca772e824f0"
  },
  {
    "url": "assets/js/app.176c77ee.js",
    "revision": "cb2a88affd45fb17019c4132ce822a1e"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "097def37ef00c0d824f8d136dda05edc"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "100ea6c8999c89675e3dec7d61507014"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "fcaa37df09f2a5cd0512c205255544d1"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "60ea147de1722d699de96a2247222bf6"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "742ca4ebcc56c604427478e8f571e508"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "de615f31e8e2706e5e2674d6b7deb08e"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "3e6db116c42cb45ed67b5bb65fa569eb"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "3e8745acc0938015b5509eee7fef8a7c"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "f350791ee1aa03e5dbbd5efcd09d79df"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "db57394353f5ef5e75261891880b5ebe"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "12e9e7e04efffddc8426610f79360131"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "4bc24734fe1deb8801c1016c11e12139"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "efc8eb57401c1cc54b3534257547cfe1"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "25b4a75b0ba31881209350e633ad8145"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "e5ae8abe2f0e37029e85ebcf71b16ef2"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "a5d772ba8d809b32fc50a34a98b4f77a"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "16e9aa076aa52af165a23cf244623b70"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "cd61c953c73c591833f35f90897630aa"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "c65ca608b9ce8c14df94fa55497cf9c7"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "651a2ce9d5caa24989d34a96c88c6420"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "e0b02efad634ea7766f03993a2f6c8f6"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "b727ca66320d89ccfcab5a6b21876544"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "10189204a49980bcd9baacc7290876b3"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "1bedf801f0e9388fb0d00cbd0ee2ca61"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "7535e3d2a23ac3c640b025057709cad4"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "bc56a0cf9d0d3d07a8d6e406baf20fb3"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "e25a36b82067115f7117de985323a01e"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "732a2f1bf7815a170a9ea54cc62f9df8"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "8c7a097c0f2873f6688a314f702ff637"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "e57074d24dd6bdb9bfb4166d5c6e6156"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "975d0f488e477c0d5cd26066cfae2f33"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "31215abf5d4e5607b4cac0f4e8250536"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "db8608c3550651b63ebc57886004ff6a"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "2ff39b81f3c6275c11cc86c7e4512950"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "2e496d56de9955f6b05f5041feedb46d"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "5c950c55a6b9e528ad4fbecdd0fe4d9e"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "935788a96b197b1f9e80a22f91b0a4e9"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "e660c47231cfcac1df37d18254052179"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "3a97ab2bd6efc537787dae16e374a69f"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "885d380b7209e4f2020f6a3c75ced877"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "16e6de2ffa80a24aedb2665de70c54a3"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "6b78b1ee82e0fdeb948c17005632918c"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "2f6c6df0f99739c6060011c04abf7003"
  },
  {
    "url": "daily/index.html",
    "revision": "4f751a0396bbfd61bdd97b313d016771"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "c48c35b96d993610c4cc2a692ff2bdd0"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "2f088ec486ed1d5268710229195a6517"
  },
  {
    "url": "en/about/index.html",
    "revision": "2bf3b839371378dc949b645e3741d8fa"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "364ec9e3cfc8841d674f56228d51419f"
  },
  {
    "url": "en/index.html",
    "revision": "ea7e996fb23aa497865e803553b75ea2"
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
    "revision": "57a1c096c5182eefe2f47ffca2fb280b"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "862d9235818acac6d783ff7872853d67"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "537951cfb8ebf75ded997358b167bfff"
  },
  {
    "url": "jp/about/index.html",
    "revision": "7101651fdc970a1e233ffc865516f16b"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "59e1760fed2d9c83eedcee9e0708bf46"
  },
  {
    "url": "jp/index.html",
    "revision": "5bd2fa36cc866fc572d6f9d8622b6185"
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
    "revision": "40b08ec279540a8450919255299f0c12"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "f5e424d8813e354b2728e6a4e1693516"
  },
  {
    "url": "kr/about/index.html",
    "revision": "42ce5ff87d76808ed7b092d2aa209f17"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "7b60a95d28b4e96e4756f71f4496ea23"
  },
  {
    "url": "kr/index.html",
    "revision": "abb1b5606108ae00295c40feb2fa7678"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/links/index.html",
    "revision": "910c1b44d20de56e4d6ba1dd17848d39"
  },
  {
    "url": "more/music/index.html",
    "revision": "38f367fc6a50c417db6412ac09923404"
  },
  {
    "url": "more/photo/index.html",
    "revision": "98108af203f573f228a257bcb61f4b2a"
  },
  {
    "url": "more/video/index.html",
    "revision": "c2663a21ab8344a014d8ffc1bbd69c7e"
  },
  {
    "url": "post/index.html",
    "revision": "21e491b03ed543d18ea6a39c51ae9bf7"
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
