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
    "revision": "99c1dd3ba90b43866dcc8438f31f7893"
  },
  {
    "url": "about/comment/index.html",
    "revision": "32b581e18691c127531b357c0ff96816"
  },
  {
    "url": "about/contact/index.html",
    "revision": "7f4f309e456e3d26b1c9d149b9c397dd"
  },
  {
    "url": "about/index.html",
    "revision": "58c610d62eae2d36e8657e347d5c2109"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "05d8655bf186562e9ae52d34b1f3d8a3"
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
    "url": "assets/js/10.47b87023.js",
    "revision": "5c68121c221c8aae2651ff2c06274492"
  },
  {
    "url": "assets/js/11.2d5e63ed.js",
    "revision": "7d20530329d880ec891895bf3bb42833"
  },
  {
    "url": "assets/js/12.577da10e.js",
    "revision": "25ac17f53cb3ceb9b1b80070f2ec81e2"
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
    "url": "assets/js/3.bf419bb0.js",
    "revision": "43ba47ed1fe028aedf7ea8454914812a"
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
    "url": "assets/js/4.a7c71441.js",
    "revision": "d8a5e59fa0591f9dfcd2f2fddc5d5428"
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
    "url": "assets/js/6.32d40dc9.js",
    "revision": "212dcb5685ea6f3991b5d5fe5d641b22"
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
    "url": "assets/js/65.b59e12ce.js",
    "revision": "6dffd05df5704eaf8626ab5bdd9be9f3"
  },
  {
    "url": "assets/js/66.3e764a8c.js",
    "revision": "54fb50b4255dac2d8fbc309c46d33eef"
  },
  {
    "url": "assets/js/67.e7c47ea1.js",
    "revision": "e1576a3cecc30ef432b8432bbbbbc3c9"
  },
  {
    "url": "assets/js/68.5958731b.js",
    "revision": "84d078121e640f33f2a3c2117087f994"
  },
  {
    "url": "assets/js/69.a0c2787b.js",
    "revision": "636d91acff262d4ae595375eefdb3ff5"
  },
  {
    "url": "assets/js/7.298e3b38.js",
    "revision": "cf078858e2119fbf80c11b91b0741de0"
  },
  {
    "url": "assets/js/70.f33f1440.js",
    "revision": "ef3f965de287ebac71f3323efec3037d"
  },
  {
    "url": "assets/js/71.1671070d.js",
    "revision": "081553015044469692329dffa6fcf297"
  },
  {
    "url": "assets/js/72.73b7eeda.js",
    "revision": "dcbcc955ab6313f0f93348bef0b21dda"
  },
  {
    "url": "assets/js/73.b31f8ab5.js",
    "revision": "04029c4b74195a1eec579dc122de7f53"
  },
  {
    "url": "assets/js/74.dd3a10eb.js",
    "revision": "2f32520f74758ba8eefd0de0a6335a7e"
  },
  {
    "url": "assets/js/75.21edc660.js",
    "revision": "a00994567e929efd94a5be55b93dd291"
  },
  {
    "url": "assets/js/76.5b8359dc.js",
    "revision": "ed969d42742184052c4578caa5716fdb"
  },
  {
    "url": "assets/js/77.315d7cac.js",
    "revision": "5954f153398e65d0db33faf424126a00"
  },
  {
    "url": "assets/js/78.77b7ab81.js",
    "revision": "9c263e88cf9e946376f5087f073ac27e"
  },
  {
    "url": "assets/js/79.0112abb3.js",
    "revision": "af824bd797dedcb03f584c1879421942"
  },
  {
    "url": "assets/js/8.766bd8cc.js",
    "revision": "ba025b41f39586dd057fd4dbfdf4caab"
  },
  {
    "url": "assets/js/80.e247c5cb.js",
    "revision": "609116b5efbfb6170cbfec50a50d74dd"
  },
  {
    "url": "assets/js/81.2851886d.js",
    "revision": "8dd88cce3dde8c13eb6148202230fdcf"
  },
  {
    "url": "assets/js/82.32901a66.js",
    "revision": "017f0be5225d4742877147f4d18c2dfc"
  },
  {
    "url": "assets/js/83.758acd74.js",
    "revision": "2d7eebacd1997166719a449d880cfd06"
  },
  {
    "url": "assets/js/9.ad6aab9f.js",
    "revision": "f0f12739e4794209698010e1ee8a684d"
  },
  {
    "url": "assets/js/app.4ea2602b.js",
    "revision": "6c26ce1b4611291f94e7d587a0f15e2a"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "78293fda156d1f05c1bf3261a10f918f"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "36cead43fc376eeae8bd22c4bd4a0fcd"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "c15281017facf5b2155a1e3aeb69a6c2"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "d9c5c97ade74852cefff70009f1240a7"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "f587d3ab36c5192bba300e35f5d857e8"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "fb9e9fecb2dde102a6e85e9c67c54811"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "fa389b6cf830c03beff744d9b0e4dc09"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "91c5bf647222e212dfac9448ee5c6add"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "8c23f258accc5614572e16a890a440fd"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "8ad6d4610e238e1202a068bdb8c2ba0f"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "e9107188043657c20dd29a403bd471ff"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "4285abffa1fa23dd1307a7ebda1f61f4"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "621fcc348103123b6c970f111b8e0156"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "bfcd80efa37cfbe6ab9786e9cef3fbbd"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "b4e2355381f4ec4d30d59f551974b121"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "59ff0e4492a47e1ff0159c652cbd3994"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "3b595643dc8abf2b08b4299211f9b6f3"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "d362b68884f4d80afb856e04d541b80f"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "41ca84e3aab0e7c465933f5956844062"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "8dc33f77bb309314c57dddbc2806883b"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "c009c3839fc97b56be04fbd645b52407"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "5a5ff316485f9dfa5765eb8f4ea277ee"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "3687bd174e1f8333ee6faeddf39d81b0"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "754edf6df2f40d013cb77692a0ff2268"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "406667b83d7d2e5c5a5031780bd4272a"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "79f53ddd18aae42a4c73605843981e53"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "2575f5de8001e7392da1ebba5966e8e8"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "7b9899894cf10276111c94aa21fa04da"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "c23177f8f72963d56409c3222f0138c6"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "2d6fd5ff9681088d399cdd81bd970235"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "bf764d7633c52e00fd0b3f3ac1cff963"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "0f93799f37c57ff0809dc681d235cc4c"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "5e5120700f232653e02016012184fde5"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "575f9092e07fd4766fbaadc9650e455a"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "1fb86662969155248d1cc00649e3d7fd"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "65090ac1f7c66a48ba7f1690d84867c8"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "ca375142762b19b8c4ed7f44d6d3bedb"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "9a26a6be3f31f4dfd5b78a6e774baa55"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "e7a2548df60a1a583992a3c01a0a5d54"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "a36e6a88092f06e18d7771891e9056fb"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "8f4f6ce8103f82bc0751fada4505c0ca"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "e35c7a6a0f5789776b56a17c8d7b9e62"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "4ae47f0948e2642ff50ab85d3bad1027"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "c73c79541b22f8711c87819e1d4d6f3a"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "2313a55b91eb0d3771e7b545bfeb64c1"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "3f42b3f74b4b982e9a98760d1b7eda01"
  },
  {
    "url": "daily/index.html",
    "revision": "9feaa3217e05c371ae7fb3c8ef663272"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "d19db17c7f11e4782d4f861e3c6b7775"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "1bc18408da88801dd40d3a1f342a4521"
  },
  {
    "url": "en/about/index.html",
    "revision": "d9bd67c85ad868a7454c9e230ef6d479"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "515da5d925689df6faeb7193f3972714"
  },
  {
    "url": "en/index.html",
    "revision": "ac008e1129c282798aeb3a210d7ee393"
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
    "revision": "4bcc4436e795df7e2cf2095e2fec01b3"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "6534fbdcb3f206b7b5b7d03201316312"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "7ecfa29da44b5e3af9d887fc21a598f4"
  },
  {
    "url": "jp/about/index.html",
    "revision": "a8166f001e52c22fd36a3eabd238d1a9"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "c4a6b2b6882244e94796020dff0420c2"
  },
  {
    "url": "jp/index.html",
    "revision": "ecd3c0a1f95133d8180270cc6f7bf40b"
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
    "revision": "6c351ddbbeafa1d0350467e2524055b1"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "0e10bb3706ebf060bd246e30b2405318"
  },
  {
    "url": "kr/about/index.html",
    "revision": "ce7d7d4e20a809897c2831e4768b8f31"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "305143bf49081abe6622995c0a89247e"
  },
  {
    "url": "kr/index.html",
    "revision": "4b84e66261baf6907a74f41aa415206c"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "288e7c90d7f869a83b976b877d02095a"
  },
  {
    "url": "more/music/index.html",
    "revision": "cb85a1b8b2d1af88286a930e10d39f7c"
  },
  {
    "url": "more/photo/index.html",
    "revision": "1655c3d2a3a31247639a5580f44ba45c"
  },
  {
    "url": "more/video/index.html",
    "revision": "fa565c29c456dd555d917ec8ba9b905d"
  },
  {
    "url": "post/index.html",
    "revision": "54c0392c6d63eb460adab16101d4f60f"
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
