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
    "revision": "ab4dcf69f7f1644606f5014b2fe70805"
  },
  {
    "url": "about/comment/index.html",
    "revision": "14353f0f74015974d396bd5c21c0bb1a"
  },
  {
    "url": "about/contact/index.html",
    "revision": "e28e771743adb96ec28025f14071efd4"
  },
  {
    "url": "about/index.html",
    "revision": "7d67458aa3301e0e35d6079bab9e0e31"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "752b1640e4143831d03db62e2c1e418a"
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
    "url": "assets/js/10.7f450f64.js",
    "revision": "6211ed72bf56b91ffbbc747531fdf0c1"
  },
  {
    "url": "assets/js/100.16eaf269.js",
    "revision": "850298fc6aa980ffca47a1ec5cc5afcb"
  },
  {
    "url": "assets/js/101.e240bd12.js",
    "revision": "e7c4e5a96d5cddd9a81817df88cd7488"
  },
  {
    "url": "assets/js/102.2a3ab4e9.js",
    "revision": "285f7e7a7c3a21b99c8654ad53b7d85a"
  },
  {
    "url": "assets/js/103.97e5c517.js",
    "revision": "50abbfd9dc887d0d0128c649466cc2bd"
  },
  {
    "url": "assets/js/104.79b36005.js",
    "revision": "05c042cb044b6491ad1b58fd9d344f35"
  },
  {
    "url": "assets/js/11.045cd737.js",
    "revision": "01e539340623be14d8fc2774ca5a9d38"
  },
  {
    "url": "assets/js/12.9552f0eb.js",
    "revision": "d287d26c5d7bd43b5140ea0c20d44b77"
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
    "url": "assets/js/4.d03289b5.js",
    "revision": "0c75e513e85fcb71035a9270a4f3ee12"
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
    "url": "assets/js/6.e3cfcdd7.js",
    "revision": "ce5013ac3c67a9f298f632ab33936f8d"
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
    "url": "assets/js/78.1cb435aa.js",
    "revision": "c658dce3ff44c47795d3b04284973b42"
  },
  {
    "url": "assets/js/79.3e21533d.js",
    "revision": "5b27c487817aeaa885d2ab3b7e1cce6b"
  },
  {
    "url": "assets/js/8.766bd8cc.js",
    "revision": "ba025b41f39586dd057fd4dbfdf4caab"
  },
  {
    "url": "assets/js/80.891ea681.js",
    "revision": "a30a7248beddbc38b3b5f5d240d85c69"
  },
  {
    "url": "assets/js/81.53ff299b.js",
    "revision": "dc0181683667c30041dcf72e56c63c19"
  },
  {
    "url": "assets/js/82.e227e44f.js",
    "revision": "7007f7b8a94a128efd63c6170d3f76aa"
  },
  {
    "url": "assets/js/83.7f781605.js",
    "revision": "83c9478e7dc0a6c94d82a45e87ef3d9d"
  },
  {
    "url": "assets/js/84.42bb4107.js",
    "revision": "36caaa3aeeed08d85c73d8e2e2514634"
  },
  {
    "url": "assets/js/85.c33b1d6b.js",
    "revision": "359bbbf68d57f957507cbbcdf3182289"
  },
  {
    "url": "assets/js/86.632d4943.js",
    "revision": "7b4b91cbdcfeef8fa7cc9c1993b9415f"
  },
  {
    "url": "assets/js/87.2a7fd805.js",
    "revision": "92627971e96b2302b25e9e57d1b12740"
  },
  {
    "url": "assets/js/88.182a2a4e.js",
    "revision": "2af863e5a7b8b3628079987268ae4bd7"
  },
  {
    "url": "assets/js/89.cc056154.js",
    "revision": "2c4901c3b44f57f5e03f0d961e427798"
  },
  {
    "url": "assets/js/9.619ea1e1.js",
    "revision": "a364177c4cc73fd237b4cfa960ccf131"
  },
  {
    "url": "assets/js/90.ca9a357a.js",
    "revision": "7896616e69e5fe415f2f8198c116972f"
  },
  {
    "url": "assets/js/91.00d1f47a.js",
    "revision": "d022aae8f29d4c15bbd65085ff875a1e"
  },
  {
    "url": "assets/js/92.e725589d.js",
    "revision": "85e714ff389fe4523c6e6b645c715332"
  },
  {
    "url": "assets/js/93.2d28b5fb.js",
    "revision": "36fafbdaa6c16d2dc6d87ce620421080"
  },
  {
    "url": "assets/js/94.b5769b54.js",
    "revision": "b0cbad4367e116a6b5b3eac439fa7085"
  },
  {
    "url": "assets/js/95.dff2ea1c.js",
    "revision": "d7d309db30f348771e082bebe2facf67"
  },
  {
    "url": "assets/js/96.900f9bbf.js",
    "revision": "db0c453d18737f02892828597c5a6b48"
  },
  {
    "url": "assets/js/97.a0ab2e9b.js",
    "revision": "f20517c992177d827e9d9f656bf1dafb"
  },
  {
    "url": "assets/js/98.c56da32e.js",
    "revision": "91279fd6669c94868c77e2f9de9fdea3"
  },
  {
    "url": "assets/js/99.ef779560.js",
    "revision": "e5eca718f92d541d825f931368c9f994"
  },
  {
    "url": "assets/js/app.c25316b7.js",
    "revision": "79173325a598e8f03528df5265709e32"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "fc5b2af1e5999d24c2e4545755628605"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "39f733ec7e0d554ca15d1d759e65f289"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "7fac5678b699e609df893055cb8081d8"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "be15281cb11aff3449e792efd85d46e2"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "68f9022bd0789299bd6c76b5caa5fd07"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "8ea9ff105b9ca94b1217478d8bb47929"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "fc645828dedbed1513b1911a6efb5ee0"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "069e1c74e3f6855d926e73f90f2ad401"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "3e3cab209d1d37a4479a33ec5b9e1adf"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "d6ed14ba16ebaef05ee8f0299aa6a23b"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "3cb53034dddf1443126f521fe944ff4b"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "19602fffd591bfad191c23d5563b8aa6"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "7abc3abd43e4eff8459659cc1a414c9b"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "e92e39d18c5c5055773bdb13f98fe78d"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "54a509176b9668b8978f7b15de0f4b9f"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "bd6c1b6682b0cfca0a0e4f64f7ff2f28"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "c8fea9df75f7d36ddf301614b9a01aee"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "4a31883a938a7aed352da0f28e391462"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "4bc0758891e9870beae154ff01f28ea1"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "6e6b3bbedc6d05de003876fabe2fc532"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "d90c0b3ad2bd18c7fd0acd48e5f57d82"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "9da02cdea81a0e4ec537df54cf248087"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "fd5f24e2311f92500688b13cebd59c55"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "9e2e6a18d894fb06d3841a3c453a9583"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "b639379ac48cc94cec88175b4178435c"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "f621a61f603860496b597ae210666397"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "9966aa53b189951b44aa746ebf86afc4"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "2538fa77c773ad675686dab6142bb3b7"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "cdb51111e5b1c70cfc4a272d45bbccc6"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "dd5d5b30da138ffa64a876772e837945"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "db7ac10fdf84a64cc3ab1972bda0986e"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "63a3c05a0bffddd2aa3f513e38564531"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "3bba7beba19639001696aabb2f5547a4"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "ec5715abe0ca43f8955ca00d11f63578"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "a7ed6140b25867babe2e9193ae681dbd"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "6bb21d01ed6036e70f6234e6fa55f5ff"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "08de95d61cbd42ca8523e00cb09327cf"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "2cd9d49acd072b48a42318b2deda746c"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "d81a4d9479369a63d1f339b0cbcffd27"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "e573aa1e937e62a6bde4b25cfc4bbb2a"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "93a8d23732e9a0de7e786ac9b1132b8d"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "723cc31b6abfa346608a1abe1d1ed31d"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "2b3e8eb60dffa110203cbc9da9ac9ea8"
  },
  {
    "url": "daily/2021/05/06/index.html",
    "revision": "cf1cfb9e1a23b6030046b49d1240490e"
  },
  {
    "url": "daily/2021/05/07/index.html",
    "revision": "01aceb172a4254c32087d2f175d25c03"
  },
  {
    "url": "daily/2021/05/08/index.html",
    "revision": "b9c2b2ec1cc42cf1ffdbde3cdc9ab793"
  },
  {
    "url": "daily/2021/05/09/index.html",
    "revision": "3af4e6a33d82033c2b08f7855cee271c"
  },
  {
    "url": "daily/2021/05/10/index.html",
    "revision": "6d3419cd5ca6d12d55fd6ca6bb3167fe"
  },
  {
    "url": "daily/2021/05/11/index.html",
    "revision": "1051b52f08e512bec3dc6f511d41c1ba"
  },
  {
    "url": "daily/2021/05/12/index.html",
    "revision": "3f6d6cc27dc66578cffb174ce1ccfd0a"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "e65685db63b344363e0f686e3fccf553"
  },
  {
    "url": "daily/2021/05/14/index.html",
    "revision": "a634a5633eedd6b3aaffdb3a1399d02d"
  },
  {
    "url": "daily/2021/05/15/index.html",
    "revision": "2171f33aec3a96310f91c7f559d880b6"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "459c46ef5104cc25f8f02a0ec2a8cfef"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "e5012cdfbe0eaeef42b3563ae5d01f59"
  },
  {
    "url": "daily/2021/05/18/index.html",
    "revision": "6b6c78abcc7d84233be8cc50b091e03c"
  },
  {
    "url": "daily/2021/05/19/index.html",
    "revision": "d2c0751a1530ba89947a8b71075aedb3"
  },
  {
    "url": "daily/2021/05/20/index.html",
    "revision": "5a282744c8567c516fcf05758aeea900"
  },
  {
    "url": "daily/2021/05/21/index.html",
    "revision": "2d528e15ad60b60cb284b98e827bda04"
  },
  {
    "url": "daily/2021/05/22/index.html",
    "revision": "5d5f7ebc737f0a03b739593fb8113684"
  },
  {
    "url": "daily/2021/05/23/index.html",
    "revision": "7d3563852a0138d4b19c0ff3d695e42a"
  },
  {
    "url": "daily/2021/05/24/index.html",
    "revision": "e679c86fe6c0271782a13f36c98d8cae"
  },
  {
    "url": "daily/2021/05/25/index.html",
    "revision": "c2920d754783694232f9daa46e4973ff"
  },
  {
    "url": "daily/2021/05/26/index.html",
    "revision": "99f9402679af36b0e4fb45f51c5475a1"
  },
  {
    "url": "daily/2021/05/27/index.html",
    "revision": "88f5da79385590a95d5f7ba48f439272"
  },
  {
    "url": "daily/2021/05/28/index.html",
    "revision": "6bf8120ac5cfc8a2d31de347ac91a5ec"
  },
  {
    "url": "daily/2021/05/29/index.html",
    "revision": "edd308a2a950e05d1ef363da4f2ebf89"
  },
  {
    "url": "daily/index.html",
    "revision": "ead166732a3a91cf3121b63de20d0516"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "e3bbff9f69419315346bd9ff3e7ba5a3"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "3820d4ec59aefe4ff0293497f9856f14"
  },
  {
    "url": "en/about/index.html",
    "revision": "875607f1fa8fe6db2e24be71186329e8"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "ab37da691cf27d8c1d73af9cf9b87ef4"
  },
  {
    "url": "en/index.html",
    "revision": "7583fa63bce1d5626e78a88d3120de92"
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
    "revision": "795da0ae7e48a1e3f240342818e62a7d"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "8eb90f2677600b8566791087c9e214be"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "93a4251e711a4ff4be4f8f4c463bb789"
  },
  {
    "url": "jp/about/index.html",
    "revision": "8ea5db7d3d4ea5490432e19dd608c6b5"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "37448cd5d7af8112dde3dbab7b758502"
  },
  {
    "url": "jp/index.html",
    "revision": "2814f8a2ed5840a72edb390a02e3ed97"
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
    "revision": "5c1a34389c5d7b0cf2edebe16302d30b"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "fc240f239390b5a1a2df3f931e639e5d"
  },
  {
    "url": "kr/about/index.html",
    "revision": "16eddda83f1a64b0d52436521e7a141a"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "7bb16ce135010a35484ac995370c374f"
  },
  {
    "url": "kr/index.html",
    "revision": "461b05233902221a365feb24f1ced218"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "39c3e3198afc8fe5b37de72a5137452f"
  },
  {
    "url": "more/music/index.html",
    "revision": "0b0212be8832d1057820204ad1cb04be"
  },
  {
    "url": "more/photo/index.html",
    "revision": "7b689f607b479555c699b5bea3214f39"
  },
  {
    "url": "more/video/index.html",
    "revision": "c5ca26486835d7d9a69dc72cd4c76d06"
  },
  {
    "url": "post/index.html",
    "revision": "6c6fea570621df9532a2d0acbec61a1b"
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
