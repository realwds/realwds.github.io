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
    "revision": "5bf996d8d01a3fa74b70fd0cca2960ac"
  },
  {
    "url": "about/comment/index.html",
    "revision": "40d7c3752c6e9482ddbda756dbcf526f"
  },
  {
    "url": "about/contact/index.html",
    "revision": "99d858a9cf52d59891c300bf13069b78"
  },
  {
    "url": "about/index.html",
    "revision": "a2f71dc19adba179231ff79c16876a95"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "d65aa4e21364778ca93cba3a0dc5aea5"
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
    "url": "assets/js/81.6859cc6c.js",
    "revision": "e526482ee4961b644e127df8d5ad5c60"
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
    "url": "assets/js/9.fd7ebb5b.js",
    "revision": "670c657280069557268c0f299823ef74"
  },
  {
    "url": "assets/js/app.8026852a.js",
    "revision": "a2b2ec4e1cec58ef0c9c56d2732154c3"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "1ab35e95f80e53f8e49288c96b09fe67"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "36fa8a1d8d71b0dedc4fadab7af39d8c"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "56389ff3c3e15be538e7a826e22855a5"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "ff63eee838042706a0800065b49eec1a"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "da91dfad875a51f55f0f73aafa7078c8"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "879d8a4c0dc352894dec414e7159f1ea"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "89c77fe08739c0d00d8b1395e6978db1"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "4e3a3335df0224da62a62396cef35bc4"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "117c0cbaf49435aff82184976a36137f"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "d913cfaf4b8a252d261b202cb23db58d"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "1507d37dda2249e3e56b7f0a3b4b81e4"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "48c4ce40b533f4786c6998f8c264679e"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "f9a0bcc12527aa41f692ec87409f98b5"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "0bf4db72b1aff642482a7117813dcf2a"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "e83ab526e7c0c8a128c7c034bee4f086"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "c2b8069e4abe0813e93d719037f79b20"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "26931ae1db14b929354e30fc5a8b1d58"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "3d017762810a77ad25fa7b45c4dd3d58"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "e20cdbf36086e4fe4458f83fc312f335"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "3114b4467ca66b5e0ffd0aa4856ce72e"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "4aa9043e9999d80d4bfd2937171354c8"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "2c246ccfd0341a7acab566bc7ae21bf7"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "de58eb96c5d5e466a6c540a2d2923aca"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "a054ac2f0e3841efcd69b4f920e73250"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "f6e440c4d934208044e93a09b072bf20"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "af6a9f21f97ef91c3148f7bce2b8e5e8"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "6fd33ff85a72cbca5f0a85a1e33bfd63"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "6458cf4d4d8db6dee3f7ba11c4754823"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "626aae1f169581881d7204e88da8a0d7"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "b4d4c12f594aad26ae731e5dffeb53fe"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "24abeb1810855c8a311f2b5a34e6a07f"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "b601bf5508dc245d14c1809f065320d4"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "de5f2787251438bae906ee0592b1f4f6"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "89d9e9824adeed00ecf5fec5ca319582"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "beb55411c5d0283ec1ffc343d9188328"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "179b0b1d019752eb404a9faf806c0013"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "5590ccd87c1665bc8ab9fdfa42011b23"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "995d3cba9315d92576f466e5a261b907"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "93b311033f3e9ecfcf9144488b1d59e1"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "1fa583f845c31b75beca9d15316c01cd"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "5f471a7bc7ef19aa23eb604cf93833c3"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "cbacf8959ae253afdc633a7f4890646e"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "ceb202594e6fd6d6536e424b4b5cfcc6"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "2418743ffb09224ecb9a3485ac330194"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "981e6dbc6b8ae05e944a644ccc05c8e0"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "2a84d133ca18add4d9585ea3375595b8"
  },
  {
    "url": "daily/index.html",
    "revision": "e8c15b153c790ad5f63ad79418eb4643"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "72e93297987cf78bdbfe68edd60422bb"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "6c4a19ac1fc86b4df2ebd13530eb1bb8"
  },
  {
    "url": "en/about/index.html",
    "revision": "b3b4aac9bb006d58f8c79c189e88b83d"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "c38849ad668c0b4845471b79d4505b05"
  },
  {
    "url": "en/index.html",
    "revision": "32b653d46542d9f8c1b6f5351ba85390"
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
    "revision": "d27d7ab30c4c77aafd4c8c5b6fcec949"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "0d200cf0a774d187d692202c7b744a18"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "b7c7a008634c691cba65ccbfd46e9279"
  },
  {
    "url": "jp/about/index.html",
    "revision": "233b106fbecbac9110a5368a5ad757ed"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "585a803f31b7a88120a066b0069ada09"
  },
  {
    "url": "jp/index.html",
    "revision": "1c7851e4e497dfc316821d6bb4c9ceb0"
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
    "revision": "98b059ee5266238e1d30f6ce628ac1e8"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "e30bf9dc3ab41951f92477e0beb14f74"
  },
  {
    "url": "kr/about/index.html",
    "revision": "0344cb1e84fdb29bdd8db590a81f543f"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "097c54aa35bb74c1f0378ef9fb9e0218"
  },
  {
    "url": "kr/index.html",
    "revision": "c3ed654f144d4e26e3b69c158ee5410b"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "0a958e61d230a40820765ff011a04d68"
  },
  {
    "url": "more/music/index.html",
    "revision": "2b88c42c3b2d3f281296873c97dc9fb5"
  },
  {
    "url": "more/photo/index.html",
    "revision": "d4cc175f6185a1ef64cd33858f116ab8"
  },
  {
    "url": "more/video/index.html",
    "revision": "35cb30a8d2626bf95faa1273a627811e"
  },
  {
    "url": "post/index.html",
    "revision": "d1666e0d3a0df9e4ad076769b80b3c23"
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
