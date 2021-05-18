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
    "revision": "1422a77d79514b9270ad89c0326e2201"
  },
  {
    "url": "about/comment/index.html",
    "revision": "9fcbc3a0bb2a46c55f1123edcf0f21df"
  },
  {
    "url": "about/contact/index.html",
    "revision": "f0e4cd934100903fadfabffb90d475bf"
  },
  {
    "url": "about/index.html",
    "revision": "961b2c88a7370a1db8200b7902fd825f"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "dad1c389d7bdd10edf189f4d8e2edeb5"
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
    "url": "assets/js/38.d468d30c.js",
    "revision": "78a971bde5152735aa51981e7d924c2d"
  },
  {
    "url": "assets/js/39.8d03363a.js",
    "revision": "808063011f5d6d6d3944661f8ff040ce"
  },
  {
    "url": "assets/js/4.a7c71441.js",
    "revision": "d8a5e59fa0591f9dfcd2f2fddc5d5428"
  },
  {
    "url": "assets/js/40.7dae7552.js",
    "revision": "05f4606e25a0465eb3423453e7b47762"
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
    "url": "assets/js/9.619ea1e1.js",
    "revision": "a364177c4cc73fd237b4cfa960ccf131"
  },
  {
    "url": "assets/js/app.91682bc6.js",
    "revision": "9b42f163e6dfd64de7fd18c7266f732b"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "193a583368b9e7b2735e79882d541f41"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "0cd2718bfb8e2e02f4a13e469fc80c2e"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "7a69482ccd47c2b960601e1c8832057d"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "59edc3038dd2b411e50f8afecebe9fa0"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "6b58dd0514ed9c43b05fa801b470fda0"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "766014bc4ddca95864c31433640c098d"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "fd20ff2c8882e544b72975e430780a00"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "b62759951878e9288f929f91b3e1b746"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "2083bc8d20023d2d638f4a3bc863faf8"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "d9db3932d6a6859ce37cc6a1e1eefad6"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "2b70974125636d1e944429b573e20811"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "8a29d9d1c9eea503ecfe71d25da3b72f"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "31b95d6f1b4b2c7bb784d0554c2a46ce"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "370743d930977494dd4e47fa5359ce71"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "0b8f3fa3696c653e6f247970404f75fe"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "f94432216815cc39667b8b3a6290a5da"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "19f3fd4b793258be134e86a498f23a59"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "c8a98d9274281c5d086bbdf4bb2e3ab6"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "5f13e4b0362cfc90d8675bbfe56d03a9"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "32d7cb552bbd333167270fab534b60fb"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "1b2005576d791ccfb33aee0ff4e633d8"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "1d67588857fb40ebf80435414bcebb7d"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "c15cdc61228990758142283fe1669354"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "1430c08ec8fdbff0b4758e04eb938a99"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "04fea701ebb391549abb4289126ea14f"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "d0146d1c15ed43e99675dcf0977612d9"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "bee89ae5da00643612e8275b6c07a8bf"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "2b31f804a9dbfe6115d9fd40a77d222b"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "dd9174b1eb8d283c5354daf480f45b70"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "f730a37c274fef6ea35efc7eaa6d74ff"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "0553f106ee08f2084858d0c39df8c50c"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "20dee59d042ddafd6a64f81d5685d132"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "097f59d41f81236a14fdfdedcf2ac257"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "191822c68c1fe19c98ac7e1959da75f1"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "d79024c1f78ccf530da73b12c23efd4c"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "daf5bd826475f7e36336c9d089525e0e"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "e3c8f6abb8cc6785b97043b4d15f11be"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "085c8ec8c3d2c9e2473c405235d4aa05"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "18405d21d38f48cec46d94237520b1e4"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "a6445693cb57437502f2d93e0daccbf5"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "59f766267cb6d7b1b538db5d97109067"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "d2f129f18c96cfbd8b54d1030d7f897d"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "118b952b77f067d2b2bb3df07a6d79be"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "c7fa63ce37be8418962f36fa6a659f75"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "9fa930a7f654d5d6753ca7ce5da7a57d"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "33595efb21b5d2d009cb790897a87598"
  },
  {
    "url": "daily/index.html",
    "revision": "9acbf3e326e9a9c4c02c5fc9aabfaecd"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "fab6d1e2aa4a9482484c11301b1cd598"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "6151049e15f4b761b68bc62089969ebb"
  },
  {
    "url": "en/about/index.html",
    "revision": "044c194d61b9e269d301aa26bbdfa47b"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "0fccb61fef0da9e4c574aff52ec2adf9"
  },
  {
    "url": "en/index.html",
    "revision": "5c9edf3c422efadda3a041fd5d88d45a"
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
    "revision": "da4542168bcbefeea281a375c3a94f75"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "08486503050c752c859773737406a27a"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "79467933a9cd20308d6ce101fb4fce73"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "42a4659c50c701d2adff34c400fbcdaa"
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
    "revision": "b7623329d5d394ec3cbd09ca5cbf3efa"
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
    "revision": "4621a43cd02551b0720ca81bcb2f8d35"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "c25dc753144bcaf2eeee8a79052b9981"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "cbcf3c0964761924472c998ef129d0d9"
  },
  {
    "url": "jp/about/index.html",
    "revision": "3bb4511d3bf2c5eb4eeaa532eb4182d3"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "ea51c49f3aad6ccff4feb253d61e3258"
  },
  {
    "url": "jp/index.html",
    "revision": "d9149eb05d0e14456362c33917f98a6c"
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
    "revision": "56de1b9f8b42f22aa044242a550a980f"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "bc71f08e3968409dbbfa50e3c697c6ef"
  },
  {
    "url": "kr/about/index.html",
    "revision": "887d7d60755f68b9c6ad901629ac0d92"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "57258001cca35dc10851e5d2ca6108e2"
  },
  {
    "url": "kr/index.html",
    "revision": "f528b607ccbc27643ea4b5a7a9c7cf0e"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "d4fa0276cdf4c3b653d672f26bb26293"
  },
  {
    "url": "more/music/index.html",
    "revision": "9b953aa6f36bd9089852410b313a290c"
  },
  {
    "url": "more/photo/index.html",
    "revision": "78c0ece03a6be0ec92d5e3172949c00f"
  },
  {
    "url": "more/video/index.html",
    "revision": "8947c9a2f2a917df4a7e4d665865912c"
  },
  {
    "url": "post/index.html",
    "revision": "01478a6951bc7794894428b08c1e57a9"
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
