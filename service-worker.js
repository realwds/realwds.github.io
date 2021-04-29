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
    "revision": "758e081f09e27ccb11d378c55c0b783d"
  },
  {
    "url": "about/comment/index.html",
    "revision": "74732da67fe9059ad6f93ff03a6fedec"
  },
  {
    "url": "about/contact/index.html",
    "revision": "cc14f7969d1d7bcd35df7ed53d82e2ba"
  },
  {
    "url": "about/index.html",
    "revision": "fb8643d02f6ff48404f59617a670e972"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "68edba92ceb15248d132bbbe8b52e10d"
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
    "url": "assets/js/app.5053d3c5.js",
    "revision": "a724c25a112ea5046862f4f236af57a4"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "3578a83256c95a862fea236fcf2fdded"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "3d6bda0c20b1d7693f93fd2d599a80b2"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "c82a6de43defaa62b8a75e00ccad878a"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "643446f05a0bc8f0d6f492bccf2a8535"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "d82c357f9773462679a56c9933b991bf"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "2be47e7786ac5484e37cc2765671fb25"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "c737f6aa3a4cff74c49f827981e862c8"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "7969fd4414d434ddfff0a0e41b4a34c2"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "1be1e38034c34679e27bf93c3e29e9b7"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "4472675127f9e28dbbc7f08ee493e847"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "5e3a73213d00cae57838acb15a736951"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "0de901263124cbb49ad9e45e84a609e7"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "ff7a832a5addee5692f8583710845a3c"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "fc28f10581ddf4600b6648cc8fc5fa3f"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "07bfc1607b2a379e9fa7523f84cba40b"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "64f90e71ad2853a64c712ec6afd3863d"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "4a7a7d1baac12d01c3d1b152dc8df5c6"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "d6dee789a719431630b7e78a2ea62e99"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "644dd025744d9cd33be454dba838c8d3"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "c333f1790ffc7cf1f39e936b269e7d66"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "3626c4d2b3922b6ebe30808793c543ed"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "3f5f22cbac5e0698228d369938a20cab"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "54c80c3dea85b3df386d5c332a0471f7"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "b501d3e10a748ef5328210dd3af79f0e"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "9ed1b80f1532be8415ce449c1b3963a6"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "853ddd541237ecb71fd230431420d48d"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "01833571866bf219ab49d62aebcd9165"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "b67ab82697e303d32b827f7755ff4ecf"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "4b86d232a8941ed2c021cc3ad06d22f7"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "75ece7d0dc8f79f872be25e0e63213bc"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "05bcac1a413bc5f6059a26911238a982"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "dcdac16d24c7fc26b7d7032fd97bbabb"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "a444f4bead1966aa5f250bf3492f343e"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "e3d97fa1063ed90331c8f6aa91931da6"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "ad820c617f8d3af61467d7bd2de4fd62"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "da8265589b0015cd1484a8f58550bd5f"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "5fa1fffcbd47bd2013a74eb77edc413d"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "082ff3ea2fd3f1a03fe7b5d1731c3ca9"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "c891fc9f5748addec19e373ba68285a2"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "25b8f7f3d324ab281986566704d30529"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "baa6fb330938cdc787e99c94996606c3"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "123b0c3f6430773f7e4481bcb783156a"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "cc8d0e64fa9fccd317e65f47d38757ce"
  },
  {
    "url": "daily/index.html",
    "revision": "4cbcf8399faf8a99ee9bb6404dd4fac6"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "26981376bdfded52c4e58ae1ea51990c"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "f09e78bbeae4bf9a3f3bd75e7bcdf42e"
  },
  {
    "url": "en/about/index.html",
    "revision": "75dfad768a58925cddfc87e90e39854d"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "44b026831182f98822e1aae910105ed4"
  },
  {
    "url": "en/index.html",
    "revision": "799f13ca60f1902b3e6c66412175ff5b"
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
    "revision": "404b7c8dd162dc5ded79a75bdbf2867e"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "0f4643f7ccce15890bfdc201d0f8911f"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "deae630c99a7d0207bde83c439f1a0df"
  },
  {
    "url": "jp/about/index.html",
    "revision": "f8a3ab4cc8b0049ce6d6a010ef97ca12"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "e2cc5cf8cec5943095978f9c370c9906"
  },
  {
    "url": "jp/index.html",
    "revision": "8ba5ece46a375857a8056a12b857cf0d"
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
    "revision": "be5b0365d1c4928526052cddadb32fec"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "f22c0f1bc5b7bc5724e663a41bbd85e4"
  },
  {
    "url": "kr/about/index.html",
    "revision": "852870db8d742d813d570b0df537f1d2"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "3fdb02cd221e2b6a3444aef6ec68f3ef"
  },
  {
    "url": "kr/index.html",
    "revision": "27b3a8e8dab76c6b67f0fac2c3094545"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/links/index.html",
    "revision": "da4dc61324d15735a48eb6f34be29097"
  },
  {
    "url": "more/music/index.html",
    "revision": "e74882d4c0fd90a913785a2b41adb584"
  },
  {
    "url": "more/photo/index.html",
    "revision": "046981810e832e104e4a1dc3c92159c4"
  },
  {
    "url": "more/video/index.html",
    "revision": "eea28dca41a8627bbbdbbbaae88cd132"
  },
  {
    "url": "post/index.html",
    "revision": "6cba45965104f9b37f0f60b32c71351f"
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
