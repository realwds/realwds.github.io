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
    "revision": "cf5f6d862fed3ed0b73e765657d42516"
  },
  {
    "url": "about/comment/index.html",
    "revision": "bce18fa2e206be33804cdcaa0b271107"
  },
  {
    "url": "about/contact/index.html",
    "revision": "8c5b87dc9ddeedeab8c23608bd154ba1"
  },
  {
    "url": "about/index.html",
    "revision": "73c3e1551b74bce0fe4349b22c0a06b5"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "32491c17f701339f3bb15acf738a6957"
  },
  {
    "url": "assets/css/0.styles.5df24c71.css",
    "revision": "f47a91fd95f2243967a88529ca71430b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.923dca27.js",
    "revision": "b1b48e6c6213ac63ef73d09e441dcfcc"
  },
  {
    "url": "assets/js/11.e2f1e691.js",
    "revision": "2573245777d7f93f526a1b442209ca53"
  },
  {
    "url": "assets/js/12.6313e680.js",
    "revision": "2782a36b2b0cd8005104b0ba022262fc"
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
    "url": "assets/js/4.0fcaca2d.js",
    "revision": "311a2ba03d0782c6b843a794bff14077"
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
    "url": "assets/js/6.fb05c777.js",
    "revision": "34fc48e0457cff1a4fcde405f0e4ae2d"
  },
  {
    "url": "assets/js/60.94bbeabc.js",
    "revision": "306ce09b897641e8c27199d20cfc1581"
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
    "url": "assets/js/64.93b3d22f.js",
    "revision": "5b2f3d8a73f5f1c59b3d5539d3383a6a"
  },
  {
    "url": "assets/js/65.e35dd2e4.js",
    "revision": "a608e3028adb98e76b819b7bfea97f50"
  },
  {
    "url": "assets/js/66.6d7784c9.js",
    "revision": "b04966f16eeafcdfc8c5873e1e783c4b"
  },
  {
    "url": "assets/js/67.f4651de6.js",
    "revision": "987add60b1860726de4334ef8d879fd8"
  },
  {
    "url": "assets/js/68.e9384418.js",
    "revision": "9238b81881d93d9e2877763770171c83"
  },
  {
    "url": "assets/js/69.16378fcf.js",
    "revision": "4ae7575fa81ed8fde0ebb6aaf665a456"
  },
  {
    "url": "assets/js/7.298e3b38.js",
    "revision": "cf078858e2119fbf80c11b91b0741de0"
  },
  {
    "url": "assets/js/70.fe36cc93.js",
    "revision": "cd4ab730ed2f12a58c4339caebd06835"
  },
  {
    "url": "assets/js/71.c514feb0.js",
    "revision": "9c427c52d278e726ad81757ef7368adc"
  },
  {
    "url": "assets/js/72.eac8a6d2.js",
    "revision": "5a4e45c2b198edb86e988b40421597bd"
  },
  {
    "url": "assets/js/73.911a9234.js",
    "revision": "3879ef4f5e13455f3108d0dc194ab8b6"
  },
  {
    "url": "assets/js/74.0f28e073.js",
    "revision": "bf9089b7397b0d242ce128e71bba1768"
  },
  {
    "url": "assets/js/75.4f64c2d2.js",
    "revision": "73d72ef702eaace575fc7878d6699d6a"
  },
  {
    "url": "assets/js/76.d2b618c6.js",
    "revision": "9a6f8ee7d4dd68cf7949accc79651fb1"
  },
  {
    "url": "assets/js/77.227a1794.js",
    "revision": "d55704051f73dd31ba5500aa2dcb1bd7"
  },
  {
    "url": "assets/js/78.d217d893.js",
    "revision": "5d06d1360884c4faf8a69750d0011e36"
  },
  {
    "url": "assets/js/79.738dee82.js",
    "revision": "5c7d6bed5c55369398a6b2a751dd9709"
  },
  {
    "url": "assets/js/8.766bd8cc.js",
    "revision": "ba025b41f39586dd057fd4dbfdf4caab"
  },
  {
    "url": "assets/js/80.58478577.js",
    "revision": "5531ac23398a90628df879cbe2eefd07"
  },
  {
    "url": "assets/js/81.12078a69.js",
    "revision": "22fb4335e2ffcc457caf5298d053f53f"
  },
  {
    "url": "assets/js/82.b56b363b.js",
    "revision": "a744a10ba0142309793007092935f40e"
  },
  {
    "url": "assets/js/83.dad0564f.js",
    "revision": "d4a1f13f2d955109d5621a76dcd0cab5"
  },
  {
    "url": "assets/js/84.c2ee1d98.js",
    "revision": "74cfce7ab92aeffb4845ab0f2827b3af"
  },
  {
    "url": "assets/js/85.7a6cad9b.js",
    "revision": "bb00b1d03b058326535181d49d915dd6"
  },
  {
    "url": "assets/js/86.b3085794.js",
    "revision": "ca1e29282e5d25a3b46621d06598b18e"
  },
  {
    "url": "assets/js/87.232c8eb3.js",
    "revision": "5f00ef3d53e2e4d22198dcb029a28ded"
  },
  {
    "url": "assets/js/88.e764c1dc.js",
    "revision": "6830bcbc17635d8fbbc47072f8d64403"
  },
  {
    "url": "assets/js/89.e99c01a8.js",
    "revision": "eff3d399e1c0f12ed2a85f5425ccc24e"
  },
  {
    "url": "assets/js/9.619ea1e1.js",
    "revision": "a364177c4cc73fd237b4cfa960ccf131"
  },
  {
    "url": "assets/js/90.5a6351ad.js",
    "revision": "568d9caf0956d3aa6958a71edb2adaee"
  },
  {
    "url": "assets/js/91.69e519fa.js",
    "revision": "5c4cb0be9a4c7564f3927b998f5b3ac7"
  },
  {
    "url": "assets/js/92.99074973.js",
    "revision": "1ab32565d8d23210b33762292b0b949f"
  },
  {
    "url": "assets/js/93.7bb4fdab.js",
    "revision": "62262aab70a892adc75ad82a8c0be421"
  },
  {
    "url": "assets/js/94.e72bf7cc.js",
    "revision": "5b20dbb0b66229e768a630ed22d220f6"
  },
  {
    "url": "assets/js/95.c1d506e5.js",
    "revision": "2c1a3cb100e86f342e7396d052acd64c"
  },
  {
    "url": "assets/js/app.b0a40adc.js",
    "revision": "99e80ef166b8ad7fb80a4a56e9a01675"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "21b3211f4fdb0da4f99bb8e83a02f7f5"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "87f714d4c9fd7d5b8771eead37047ce2"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "8178483f01147df363087a1e7d17d7e1"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "49bf74e14be562d34c3ad0a8bc7d9700"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "ce5595b3f8740de1cb1a121a9dfd23b7"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "429e0245e71854e56dc3458e5d15c4fa"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "7cefd44ea1d871396797c8805861bdd4"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "000a3ad10d8eb61b5cfe94901d034a3e"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "9d15ed9febf1c2cb86b312f004ec87b5"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "30c6ede80662c83a54afeff8424aa571"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "742e249831a305df02bea189a1dfe974"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "628a5ab48d6fac15369f3d565c507e21"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "4615b256bbd5b4a11a1030a7688018ec"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "2513eda5bc24eac559870a2dc2dcd608"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "51a878299d9cfcd112822b783db20114"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "15bd21b11714347cd9bfb6012cdcb8f1"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "b591db377628c824940c4fa0d19f1816"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "5ddaa3d01878016c8bde9318d9599fa5"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "6b374b82a1c0386a62843602aa63a82f"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "02df7a3ebabe900674a5fe5d0bd30b24"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "46d02ba3e3762fb6745e96c38c1c7255"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "5cc5bd7b1d1dfcff4e6c86ea5bf5dbad"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "b22f0d1d9e8286e6153ee40aac5fdcf9"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "003b6821932337a4eb43d675a43ab4eb"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "661014012834ae2d1f80c4ce297afd9a"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "dda5a08ca7fdb2cb6ce8e134b9e80ddf"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "532db5af1c87dd7f223cb4a18f20db24"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "3f22e8b84c79c1f12a83099d8e47e0ea"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "0d74c31328e99310c1b51a9230ba002e"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "8b76d245ca00933c6cac426d60734740"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "34911ec9ce441d54983b6aef2c02c444"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "6abd7ea0d7a9f215be240b58b59c0b17"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "fc0166283302a4e91e435fa71d2b6628"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "47544e00b2078d01934f72458a994604"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "8a2afa8945f1e8634bfeb82d4888900c"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "6ed206556d8a70709f37f8937f4426fa"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "5e5608753789d09c986dbfd351220670"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "65f68c73ace68207830f4a6228c94b0f"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "053bbc49fb0e448cd64a081d2978fa6d"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "53c4a0807607da48214ef4a2d0147695"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "ae932a9a4fde9706a52f90df73b97ba2"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "6f551308382240e05b72267c4bd9038b"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "7ce58f6114ebd858dd73342082d1bde7"
  },
  {
    "url": "daily/2021/05/06/index.html",
    "revision": "bee7b1f58ba0901d0ff4ef89e6c9e78a"
  },
  {
    "url": "daily/2021/05/07/index.html",
    "revision": "2ecc0f16b3954ca187adff8873487957"
  },
  {
    "url": "daily/2021/05/08/index.html",
    "revision": "dc23c774d237566efa4c828ade718ddc"
  },
  {
    "url": "daily/2021/05/09/index.html",
    "revision": "4d73cc2ba0c62e7c83362578b0aad893"
  },
  {
    "url": "daily/2021/05/10/index.html",
    "revision": "41414b27afcaa1eb0d7f306046c867e6"
  },
  {
    "url": "daily/2021/05/11/index.html",
    "revision": "dde6afc804660990334d9059e8ddfe56"
  },
  {
    "url": "daily/2021/05/12/index.html",
    "revision": "725d53054a481b2152606ae6a30a7d0d"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "71aa6327f389d9096af4f42f2ae947ff"
  },
  {
    "url": "daily/2021/05/14/index.html",
    "revision": "7d40c7440f385f2dc8065e0ca3029d5c"
  },
  {
    "url": "daily/2021/05/15/index.html",
    "revision": "60fbbbf3f3863a704f401642bc2e52e2"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "822f401452a8edb27c70483339221b94"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "3c98c0969cc7e0409cbc9053a0b31580"
  },
  {
    "url": "daily/2021/05/18/index.html",
    "revision": "1a08a9496cd9104d98316bd66cd26e6a"
  },
  {
    "url": "daily/2021/05/19/index.html",
    "revision": "97f6430957caa3427a5c8f1b37ea5401"
  },
  {
    "url": "daily/2021/05/20/index.html",
    "revision": "35e55ed8ed034f6c210044f282161748"
  },
  {
    "url": "daily/index.html",
    "revision": "4b1d8fd5fff4cd29e9760d8158148b00"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "54e7c55f9fe8eb2c39579647d42d6ddd"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "aa156d2c4e4934af85c83d9db0bb8e74"
  },
  {
    "url": "en/about/index.html",
    "revision": "94b5efad648664d10d5460de65c4f116"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "50a2d96105381c120d0bc4b9e1ab1638"
  },
  {
    "url": "en/index.html",
    "revision": "a02ae766ff014e1b3d79feb54d6821ce"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "1e78a74a0a812bf56b9d461f87469f34"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "27dc7da978b75f813a954d7066227a6d"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "18e17e802ded74bee29ab0bae02a35be"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "b18a919221661a6a89a9a3a18ab289a4"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "62fb2004c4508705e9dec7ee9b98ca89"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "9ffdcc80e16886b92ae3e03a5738011a"
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
    "revision": "59ed933f3feef66d5a8503002f8083c7"
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
    "revision": "d2a7110108fb01f819713e6570df45f0"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "52f3fb9ab126264016f7cee4425761a5"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "dae02285f3c669090a9a10ca4e98e21d"
  },
  {
    "url": "jp/about/index.html",
    "revision": "a57f9c70d63c3136ca56abbcc38e496a"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "bfc706848ea8b52bbbcb140c814b8f7b"
  },
  {
    "url": "jp/index.html",
    "revision": "a95b827b7a681df7979473ef2b0e1613"
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
    "revision": "b682cea64a56e60e31ad3d71bea9fda8"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "a16cf5197ebf24e6ba0342268cb1af86"
  },
  {
    "url": "kr/about/index.html",
    "revision": "c64cff9512478b3c6fae39236f611458"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "3d2b45c24befb291e3061ff727280321"
  },
  {
    "url": "kr/index.html",
    "revision": "ba6774d45701c9dfaab275f7d492ef2d"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "fbdeedd2e3301c9cb9c5a42ab9347851"
  },
  {
    "url": "more/music/index.html",
    "revision": "32d8b120a9b63dea04bdfe67867e16f8"
  },
  {
    "url": "more/photo/index.html",
    "revision": "58f1d7c020175b519ca5c7ac6000db99"
  },
  {
    "url": "more/video/index.html",
    "revision": "9d40b385299805f6b050f2e8cbf4a188"
  },
  {
    "url": "post/index.html",
    "revision": "d4f7e51af0f5cba7a8eaee153c4cd761"
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
