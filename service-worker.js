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
    "revision": "dc3cbba374e16810d268bab9c3c764b6"
  },
  {
    "url": "about/comment/index.html",
    "revision": "62a6783a200b462f1a150aa90aeae4f5"
  },
  {
    "url": "about/contact/index.html",
    "revision": "cbe03c507d9c334def99f05b6d149c30"
  },
  {
    "url": "about/index.html",
    "revision": "170dac000d08168438b5bd3e568d8d46"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "b5414491d7711ff1e43a488e79d7a2b2"
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
    "url": "assets/js/app.adbadbe6.js",
    "revision": "abd1882ab0c01786b191b3c786da67e1"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "5e072071f5263afbcab7011ef3d83542"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "2822deab2ed30b4c304dc381baa82a02"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "cc3cb206ac0878dc4a9373316b5905f7"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "7de4da715e5b62863e8c6e8427f32a19"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "455c2b7122de6ed570c1408cf7b0fe97"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "90d7130aced5ec33e771e908f8d378b8"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "3443c7adec77b7538dd5323d297cd460"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "cfde32a447505f135238c7f58c64fcdb"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "c3764bdf3a7155b9433908baf3cbacb6"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "8fd7946605d8a874a14bcb58018888f5"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "c87efd79e4271b683d7f1929186e4879"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "ec436a9616d921fc4937b2cd79c43eb1"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "d0477b77c0204c4cb5f0a948db49d598"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "08a26721ae5d5db52aacb55ea597ab03"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "57b030c032d683472d58bf367b784f78"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "652d6f4ea1f1530dcb2f20f0f9108801"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "b2b466f8ef42d52e2482f26aadafbc38"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "b33fa60b3ac5324f11db85d71234570c"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "a7faa85f8e879e22a4a69c1a707be540"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "4e41e59ca38d61e511179b7de3ff6b02"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "06c5db439b641ed75df4bc8f45dbd327"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "bb2bca3738a51d0b5ff1953d832a7c4c"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "b300fa116048bc4d4e2c8b359faf2626"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "d72103f7fa5b978bef74e8c45e2c90a1"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "bd572a33d29d3ca115cd939380a1d134"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "081752358d81be8e7bb85dc52ed42f72"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "bf0ac9024a67cc2333b391eaac11ac03"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "5c83c52263ed867d24dc3b2d6c302cea"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "f563500b400b59b742adbd41b28cd511"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "569f8e646b745d743d15859cba58a479"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "26a51af90294aeed151dea7a307148ab"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "d4bc341931c5252bc76a4a25309c2c2c"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "5937dd38bb726d01a20f30811a6832f7"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "813741ec404d8bcb1fca7336cd3387c9"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "d981a9c94c2d0307cf166cf8bf689156"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "935bfc302665b0f8dbfab3353507f4ec"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "a1cce13ad4c3c9ab0686d6fca1461f9c"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "c8695b8159e8077a972268f09d1e0fce"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "e0949bba2046cf471be7f37e5626f8c3"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "01d6f6a31ccb09227d87365e6655f37a"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "2cfcdecb4bc899fa1be818dd75c34522"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "3c4560fda1a376bc16a72b5a6968b8b8"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "cbfb865b6439979d0a15cfb61f7f1062"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "f0ff8d7f42041d38e81c837e25af824f"
  },
  {
    "url": "daily/index.html",
    "revision": "30e02526f8cc14d5da87419c62f77961"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "bc7397b7242261a308f0b0c3d7c3fd14"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "ce88537b6bbfda19fc5fbfb000a78d0f"
  },
  {
    "url": "en/about/index.html",
    "revision": "18fd0e7fd92608ef2abc28f23ac09cfb"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "89bd99fd4822b97a635fcf4586c2178b"
  },
  {
    "url": "en/index.html",
    "revision": "a0ceeeae649f80333b5346c29d5af635"
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
    "revision": "113579166f9261ee9ac1092231852249"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "df5e78956965837650becd027accc18b"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "ead47a48070ee038753c292dab7a7b4f"
  },
  {
    "url": "jp/about/index.html",
    "revision": "8a24f72169706a60d7d458cda614daef"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "e5b5a1a1a58e39fcda03023efdd83f21"
  },
  {
    "url": "jp/index.html",
    "revision": "34fcdbd8defb39c80f003bd34c49f0d2"
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
    "revision": "de6ddfc93e54ddeebde3adb15acc099c"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "bd907bb6deb1453a8d8ac965cff72f04"
  },
  {
    "url": "kr/about/index.html",
    "revision": "7d3bbe624b6298971d972063743e1f1b"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "cfa7d1f56228af27c17e9492941b740d"
  },
  {
    "url": "kr/index.html",
    "revision": "d6ae4c740d9e4e575332b9bcde623f28"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "4dae25c4d00895ddf8d3b2bb4e34d5ac"
  },
  {
    "url": "more/music/index.html",
    "revision": "b6a923f26e952921ca7e0d72ed5a8012"
  },
  {
    "url": "more/photo/index.html",
    "revision": "d91244869645f42f33517eab3940b7fb"
  },
  {
    "url": "more/video/index.html",
    "revision": "0a1c60c3bd9ad345d44ad6a0bf2be88a"
  },
  {
    "url": "post/index.html",
    "revision": "538daba0f44913114ddf6a7530ae38d9"
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
