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
    "revision": "e220b21707985780c0961d1125a51ac6"
  },
  {
    "url": "about/comment/index.html",
    "revision": "5cb6ea32fffe0dc19e6ebfe52d731ced"
  },
  {
    "url": "about/contact/index.html",
    "revision": "e0fc0608bebd5b93bacfcf1e75bd4b04"
  },
  {
    "url": "about/index.html",
    "revision": "b43c92d1e987270964eba00767215924"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "7b8072f677ed36e667c61e7e8f214d8f"
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
    "url": "assets/js/10.708d11e0.js",
    "revision": "628a5b960e04f1a30100ab801da2ab71"
  },
  {
    "url": "assets/js/11.535a677a.js",
    "revision": "7c8a79cb4e06100f250eb01a3e34baec"
  },
  {
    "url": "assets/js/12.16e16c6d.js",
    "revision": "d8ad43607f09136442dae33831ee72d6"
  },
  {
    "url": "assets/js/13.5c76441a.js",
    "revision": "d55a344b1c621c6eca72182e4d219729"
  },
  {
    "url": "assets/js/14.9cff3987.js",
    "revision": "06089db8df8eff7f5bf18496d342399d"
  },
  {
    "url": "assets/js/15.16943991.js",
    "revision": "a9768922b6d389fb31f751c05028e681"
  },
  {
    "url": "assets/js/16.cf526b81.js",
    "revision": "6dc857ca8578813de80dbf73e7c7a99a"
  },
  {
    "url": "assets/js/17.703fa464.js",
    "revision": "5d3f8e2e58f3adf399216196c31ac174"
  },
  {
    "url": "assets/js/18.2dbd1fff.js",
    "revision": "13b12bfad46e425047e7cc69d70ef1f1"
  },
  {
    "url": "assets/js/19.7a1b1d32.js",
    "revision": "b1a9126a3d2669df1b19ad5c4fc61ff7"
  },
  {
    "url": "assets/js/2.7fea9552.js",
    "revision": "51908e444defb14f31bdf44bd1c4f476"
  },
  {
    "url": "assets/js/20.d3a23411.js",
    "revision": "1e2d608582d48ac737cb3230cff05b0c"
  },
  {
    "url": "assets/js/21.5b943e37.js",
    "revision": "34967ab3da30bca45829c20ac31ac1ea"
  },
  {
    "url": "assets/js/22.5b8cf937.js",
    "revision": "0113e6b245c45c9038eb1496e3b3cf76"
  },
  {
    "url": "assets/js/23.c4fa8497.js",
    "revision": "4739960a6dafa5312d8739031f32ae29"
  },
  {
    "url": "assets/js/24.77257110.js",
    "revision": "85bdaa3dd7178a702c7f56c910369dd6"
  },
  {
    "url": "assets/js/25.3d7ce340.js",
    "revision": "4529746764aa5e326d700935c4e96c6e"
  },
  {
    "url": "assets/js/26.9777bad0.js",
    "revision": "3a1141867eb2883f2b71b2e654b7a4c5"
  },
  {
    "url": "assets/js/27.ba076f68.js",
    "revision": "1c80105c593fe2834a9d702f800e9a3c"
  },
  {
    "url": "assets/js/28.fe4c4ed3.js",
    "revision": "d367dffa2fbc2e57b5cd6fd2180f666c"
  },
  {
    "url": "assets/js/29.0029fc6f.js",
    "revision": "bd16513290dcd705dce6625f05962381"
  },
  {
    "url": "assets/js/3.bf419bb0.js",
    "revision": "43ba47ed1fe028aedf7ea8454914812a"
  },
  {
    "url": "assets/js/30.b2949598.js",
    "revision": "e2fbf3b6e7255126fdf1449d0e3e65f1"
  },
  {
    "url": "assets/js/31.de129657.js",
    "revision": "26e59b34031637126d3d7e24bb80ad70"
  },
  {
    "url": "assets/js/32.d7b082e8.js",
    "revision": "b0080ee110843f1b66b2b650d05d56a1"
  },
  {
    "url": "assets/js/33.e9e1a90b.js",
    "revision": "5e17379c037dadd8f76f5e019cde8005"
  },
  {
    "url": "assets/js/34.d158c0ae.js",
    "revision": "74ae5fb2753255a4710beff690314aae"
  },
  {
    "url": "assets/js/35.0dc71d7c.js",
    "revision": "c6e9497603927c17b172a25997fd69a2"
  },
  {
    "url": "assets/js/36.efba6018.js",
    "revision": "61030d74061f12892db668941356081b"
  },
  {
    "url": "assets/js/37.02c188ea.js",
    "revision": "d23a329eb937aa3a4f8a73747608bec6"
  },
  {
    "url": "assets/js/38.cfec00a5.js",
    "revision": "dea7a402feae9fde7d0666b1595a74f9"
  },
  {
    "url": "assets/js/39.73f66224.js",
    "revision": "95f0156ef306a0302f4763af941ecaa3"
  },
  {
    "url": "assets/js/4.b55749a7.js",
    "revision": "8b98c89946e9928e6fedccdbbf75030b"
  },
  {
    "url": "assets/js/40.723d74cb.js",
    "revision": "7ce517c8037c8eec48c84935bc8fd6dd"
  },
  {
    "url": "assets/js/41.abfa9e16.js",
    "revision": "d9f26180680da576d4876845b782f3f8"
  },
  {
    "url": "assets/js/42.b22b5919.js",
    "revision": "4ed62c30137774ae690c9599c556f46b"
  },
  {
    "url": "assets/js/43.8c880e2c.js",
    "revision": "8c0333774fd35225a38042e7c83ed037"
  },
  {
    "url": "assets/js/44.0fb15f24.js",
    "revision": "9dae0ad04e99052a9aba41205798f5b2"
  },
  {
    "url": "assets/js/45.c94399f2.js",
    "revision": "7aefa62f3db80d642f88ce3688358a4f"
  },
  {
    "url": "assets/js/46.e843ebc7.js",
    "revision": "ca0916d5c4700b94780072f2c18b2402"
  },
  {
    "url": "assets/js/47.cf9ba85f.js",
    "revision": "1ffa9a050235e56b146b011fc28c3a14"
  },
  {
    "url": "assets/js/48.8c93b06c.js",
    "revision": "e361bac7ab9efeb63cde68a6f1ce5186"
  },
  {
    "url": "assets/js/49.1a8c788d.js",
    "revision": "ee0b1c585ec00338f1841913b4eae9fb"
  },
  {
    "url": "assets/js/5.fe2e99e4.js",
    "revision": "cad3fe39f8ee24fa54a05f169ddf2999"
  },
  {
    "url": "assets/js/50.be686b77.js",
    "revision": "053d408f89bbb7e1af2d4bcdbb96f1ba"
  },
  {
    "url": "assets/js/51.84e72c1b.js",
    "revision": "df0a577f6e38db7c53431ffe90f925dd"
  },
  {
    "url": "assets/js/52.eba3a996.js",
    "revision": "fc571096c6dc8d65187328c4eed95025"
  },
  {
    "url": "assets/js/53.b0252d99.js",
    "revision": "ae8e561c7e3467a0c5c2ffeb73618135"
  },
  {
    "url": "assets/js/54.99d151fc.js",
    "revision": "df754df62c5d2d64b43f50a33610abfd"
  },
  {
    "url": "assets/js/55.7bdbf644.js",
    "revision": "4d9212fb45c2dafd119f285394c76cb7"
  },
  {
    "url": "assets/js/56.3cc9b8bb.js",
    "revision": "c9072e8686a3586e56f081ef1f86e0b6"
  },
  {
    "url": "assets/js/57.9a8c7d6f.js",
    "revision": "9e0db526ac94c2a93e15fd3b7aa81841"
  },
  {
    "url": "assets/js/58.2a9e4b0d.js",
    "revision": "3edffee9d2585a511c337c3f270d5396"
  },
  {
    "url": "assets/js/59.7b8a69d4.js",
    "revision": "b61cac788de50612f287f92c7adf088e"
  },
  {
    "url": "assets/js/6.5b5df7b5.js",
    "revision": "c10d19284ac6188b297d49c832ed6234"
  },
  {
    "url": "assets/js/60.c0e29c1a.js",
    "revision": "ea46e34f951ef7d65956b1c7900f6e97"
  },
  {
    "url": "assets/js/61.3085f83e.js",
    "revision": "61c66b95d641032682469c3834b0c351"
  },
  {
    "url": "assets/js/62.0be3bde9.js",
    "revision": "7df4827980f72d3a84c5a423423b7ce6"
  },
  {
    "url": "assets/js/63.aba746e3.js",
    "revision": "ceca6677dab8ec0d0d0e508bbf2c96a3"
  },
  {
    "url": "assets/js/64.ab5ebe87.js",
    "revision": "108925ea09ad9de40201aa9eddd1e0a9"
  },
  {
    "url": "assets/js/65.0ebb1e65.js",
    "revision": "087111420b1ea3f3be65359456bd0ee1"
  },
  {
    "url": "assets/js/66.0bb2b7f1.js",
    "revision": "663169387dc56cfd334c13434f788a0a"
  },
  {
    "url": "assets/js/67.86f67fc0.js",
    "revision": "eaae877551a1fdd9b139ddefa3afca50"
  },
  {
    "url": "assets/js/68.16c8ade2.js",
    "revision": "78aacd916a5b66eb8d5c684276878c5a"
  },
  {
    "url": "assets/js/69.db32b131.js",
    "revision": "233a9604cc30fbb948828707c7672af0"
  },
  {
    "url": "assets/js/7.298e3b38.js",
    "revision": "cf078858e2119fbf80c11b91b0741de0"
  },
  {
    "url": "assets/js/70.1989319f.js",
    "revision": "fd392d82bef3542fbc6413320969cee2"
  },
  {
    "url": "assets/js/71.9fbc9d62.js",
    "revision": "01fa7b0785d9fd6e9fda974dd4c0a3c7"
  },
  {
    "url": "assets/js/72.a2cd0a59.js",
    "revision": "b9164c111b0371edc606d2a9f81af61f"
  },
  {
    "url": "assets/js/73.1114a13b.js",
    "revision": "c923118bb0de3a1c7533757989de9b98"
  },
  {
    "url": "assets/js/74.8ba8b38f.js",
    "revision": "c59a81468013115abb89d8927d67d8e6"
  },
  {
    "url": "assets/js/75.ef2d44f6.js",
    "revision": "076e45b2cb41b0659dd1d5980c50d678"
  },
  {
    "url": "assets/js/76.e4272f80.js",
    "revision": "801dee29f13c70bc3d0ee8e450689d1f"
  },
  {
    "url": "assets/js/77.097af393.js",
    "revision": "2d8f586eda9a95c2860ce01c4fbebe13"
  },
  {
    "url": "assets/js/78.daa53bd0.js",
    "revision": "7568b2baabf343d0c674a472b258323e"
  },
  {
    "url": "assets/js/79.7aee4eaf.js",
    "revision": "46b6284980dbe216ee8abb1a0f69116f"
  },
  {
    "url": "assets/js/8.766bd8cc.js",
    "revision": "ba025b41f39586dd057fd4dbfdf4caab"
  },
  {
    "url": "assets/js/80.9071a9fb.js",
    "revision": "ecefee11be1317af7fe22d6b7e0788dd"
  },
  {
    "url": "assets/js/81.a6aa4edb.js",
    "revision": "9a8fd21b94ea6fb8d0ab6ab22d86b2a1"
  },
  {
    "url": "assets/js/9.fd7ebb5b.js",
    "revision": "670c657280069557268c0f299823ef74"
  },
  {
    "url": "assets/js/app.c00613f3.js",
    "revision": "3503a2683decf0aed0706b72e2e6f661"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "3c9df9eae9f5c2a05ef14786a33baed1"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "f8146c280f645689e836ac4532923183"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "040b555aaec3a006370bac77a47490c6"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "a019153cee9fbcb8210851a75add6615"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "0d52730c2dc727866a4963963dd4890f"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "ec47ba7fc115658b06fb310f83d068db"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "63eeba02146cf27a9bffc0204b65102b"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "f887fb75e0a6cca19f488b3ac35b4269"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "c2316f3e9513d563c6fbff1909f6d0cd"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "715e22aac6e21cddb41738a17ff2d889"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "857c8ddf6a5c5ef035a233114002e0c5"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "b9cda7f68ccac3cb028800c3ca703506"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "61c56de424d0dfb54a1ac81d9820a645"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "677e4944ee3a47d7f449befea289da98"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "c05d7eb3d7a83a87636732269ca10913"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "fdfa579a7c44a30b9337370e24f15c33"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "86201d0faa2c1620c754b83f95e71667"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "4bb7883cd2552575a23c5860fda00533"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "3ae69267e25ac10eef274a413dbb4767"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "ad0cf731e253caf91c06956f8e7589f9"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "1c978466a81b8fa6f247a3bf50e2e43b"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "c1670fe97b99196f8bfefd048581f9a4"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "f171e068e184b75c50074ccc5a102c6a"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "6c5ad3bcf4200c532f16abd105559e94"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "77b74487d35343c6a3b7a91321a4d27c"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "8accd0e86b15d3f6278fb5d4e7a2edf1"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "67054e1f9f4321a51c9752232a42c17c"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "fab4e637616a1e63fc0d3203259f28dd"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "fb55d500f1d48c4104bff1d74f3d8609"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "975064b26134fcf315504a7073689932"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "53193283264f5a180d73cb55af2dc3ac"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "c73f898b6c8f52b46a228bdbed940a95"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "0d5af1d648ffbba9e194a86aa08b0cf3"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "e56575031ecdc7de06fb83d81de3b4b1"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "19d30ab0bba2124d6ac40c8a1c82546c"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "36b5cd6064de32100deae7efe50330bb"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "b33a9e531885a4da808ddc43bf7cb48a"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "bac5deb8b9946a0b68858fde7e5ab7de"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "065dfe76f85748a77ea2ab6326742d85"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "dc382dad479517148abc6bb95dd4e1bc"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "14811e2f43b3a0d519b421f0932e142c"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "3a47a8f957dd63a8d69b13a5b8a7d13f"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "49d92abd19f22e70458c64a9e7c432f5"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "3903c4796d0495951dd069dcf3a2dff9"
  },
  {
    "url": "daily/index.html",
    "revision": "7912b5110b9ee1a37bce3c7864312831"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "3a2ca4d57d149244b1bf5a64a777f92a"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "abbfd15cb8928d3e406c9cc6bc701544"
  },
  {
    "url": "en/about/index.html",
    "revision": "8b28bfbcc6d0c1e5021f533b0fc51bcf"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "070e1d7dc9400e099d54abf40c857aa9"
  },
  {
    "url": "en/index.html",
    "revision": "a1c9a0fea3e02836f7e358743700ba28"
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
    "revision": "a26f2bba0b3be220ad287554d1a3f787"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "f1330f118d60a9bb5d6662ddd2ae6035"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "c48a8beef3f9ee5292a596a25dab60fe"
  },
  {
    "url": "jp/about/index.html",
    "revision": "10618ac4f0c143e4e02aa082974dbcd9"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "26d8eb2b547bc0095d71786462ff7b70"
  },
  {
    "url": "jp/index.html",
    "revision": "28ea09a8a03ad454773485a1aaa879f9"
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
    "revision": "c79394b47c5c6fc6ae765cb188e3be4e"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "6e4bbec394a8ba26a3c4ece829399864"
  },
  {
    "url": "kr/about/index.html",
    "revision": "afbe8fa6a891b8fd610175a78d87b227"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "e62982f3c100a6a413fec044e4f1e99f"
  },
  {
    "url": "kr/index.html",
    "revision": "efb8c3f50464123d69e2bdd75550c675"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "456f00700689433d2b9cd62f28680405"
  },
  {
    "url": "more/music/index.html",
    "revision": "217be8a0ed82093e1065f831c69b8752"
  },
  {
    "url": "more/photo/index.html",
    "revision": "737fe9c703001d56713651c9c3a48c57"
  },
  {
    "url": "more/video/index.html",
    "revision": "1aae3b24e3a3891bc7ab79f96a441490"
  },
  {
    "url": "post/index.html",
    "revision": "02399d87273cb773b355ee4a9afbedbc"
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
