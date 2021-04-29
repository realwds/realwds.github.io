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
    "revision": "c9d2984ff22ec1640f188972a27854a8"
  },
  {
    "url": "about/comment/index.html",
    "revision": "ed161bb85dd5d2026e76f09b9edcd257"
  },
  {
    "url": "about/contact/index.html",
    "revision": "b9e691964136bbb8e37a47812eaf2294"
  },
  {
    "url": "about/index.html",
    "revision": "96090304211bf9a5249297553958c7b1"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "5e4e9d034f96491a59df356c5e72c4a4"
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
    "url": "assets/js/31.de129657.js",
    "revision": "26e59b34031637126d3d7e24bb80ad70"
  },
  {
    "url": "assets/js/32.f29422a5.js",
    "revision": "d550523b8831b6c71bde8ec146d95215"
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
    "url": "assets/js/app.3bb62b07.js",
    "revision": "075b3d064eb5510f8ed1140c96dc29b3"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "a4aaac37f2d0ccfd46494ffbfe5e6468"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "4dd1402262773fabcff02d3917f9feaf"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "03d0b465849c3bf7fc50284777505a42"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "118b6ef603241e60c2ec3e3db088b029"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "7d04ebf5d0c3d68309faad6c90015543"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "e5f0dad55b07c0342062bda7f47f944c"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "38f8e1af59c31c4861de9cf0a6d03499"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "9d29c7f74e5de81e52b96d95a047ad0f"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "db5ea409e9116bca9ba5e62bc6d7f340"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "bb0ac3b71fdc60fe70c216166910596c"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "132db36a0f10ec70a94d87d90567aa58"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "f6485047a56cef09e0d06aee1b4b19b8"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "b8ae406b5025d60d9b31ee30052c6f18"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "6cf7b207f4dbc0efaf9d224f35de8a3d"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "6793561d85b1565f04cb8ddc12619a06"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "0c7dad15bbabd8265e0426ca990ec58f"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "3ad93c2905d297796845eba640b0b76d"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "650ff1c261013f11ced26042573adf32"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "80e5e7c8e518fa95d3c92a2185688117"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "9aae46bf498db454a70bdc6cf18f4e99"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "d6d7bbd63f574e07a94657545c9d3502"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "6d7fba24fec1fed96303e82cd8853bfe"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "929fb3f9c8b80008449866b3df388523"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "b6ad32528fb8b790e86b6531a2feee19"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "693760237c62c4f34a8ec0bf1b729ef5"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "e5cb041d40d25d67d3b0afb6d8f27804"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "d055f80c05fe276838c0a4091205d66f"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "d2a7ab0312a83818d3e74b9b958981b0"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "03471433d14da4d2e7c1012e7aff6838"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "f13db4c52c9ee21e39c49ee3fd606b4e"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "aa502b9888127ee489a378589e7a371f"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "0b99787db49851b9188dcb345c0601ee"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "d0614da31f4e3f7bb8b229c00d5a593f"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "e5f3dbe397399420f507e053f5765178"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "f5ccb7dce06bc408722268472dd31798"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "a392eaa808b12abe540dc09f7e4c9c64"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "ab7b0981931400a7d239160de138f20a"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "3477efff32bcf9b17fb9f765ca2e3c20"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "26124a47b68ce685702c44b88541e4ad"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "c8ea91d9f4d0c62bcd50912045359d82"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "a534ad9ebbbdc1aaccb0ca0702f688ec"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "1a4c97ce7132007a732099422c1265dd"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "98e91499561b3cd2864550c87532bba5"
  },
  {
    "url": "daily/index.html",
    "revision": "88f42fd933f5a146c85f777dae4a62d8"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "6c2819e4cc33b5f7d9da9953dfb29710"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "0d4ba062567bf0e357ecafa2cb4f239c"
  },
  {
    "url": "en/about/index.html",
    "revision": "e38d27146ae48f1460195e42e5d35774"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "ed15ea13e5b6f9bc1fec3c5a24a9ad2c"
  },
  {
    "url": "en/index.html",
    "revision": "c4eb01ee3199e496ca80245f04c4c2ae"
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
    "revision": "9917efa259bf47da39418854dd5eb530"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "78ae7d342984f291f28d89142545efc9"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "208bef15b5f6482d0726147c751c1f1a"
  },
  {
    "url": "jp/about/index.html",
    "revision": "cef1c4d23e32f36bed30f9b69c88716d"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "2aba9f9657a1916cd6260bebf49d9651"
  },
  {
    "url": "jp/index.html",
    "revision": "0eb744a5535def375c327b09c5531568"
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
    "revision": "0bbe98c524d3be26999a4ef77483eb64"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "f0774281b45c3e0d1597c5927c80afca"
  },
  {
    "url": "kr/about/index.html",
    "revision": "c369400060663cd232743e47625de7a0"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "4663cb7a11d829daf2629accb548c020"
  },
  {
    "url": "kr/index.html",
    "revision": "2214637b1f2dfd4c173aa2844eba0b5a"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/links/index.html",
    "revision": "54b87c3d4a78e495e96e12f8f9a013cb"
  },
  {
    "url": "more/music/index.html",
    "revision": "15ca4d9ea1113f6ad834519ed94219ab"
  },
  {
    "url": "more/photo/index.html",
    "revision": "e03cf4847ef87682c253c5cc0d5cc31d"
  },
  {
    "url": "more/video/index.html",
    "revision": "666646bcca71e8209cffd6f617f391ec"
  },
  {
    "url": "post/index.html",
    "revision": "0649b87c9c7bd5b94ccc6f5e664cbc59"
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
