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
    "revision": "b54f0c2664b289a4c401d3782fdeb7e4"
  },
  {
    "url": "about/comment/index.html",
    "revision": "ff40b8f52f0b6719a1a72244f8b5bfff"
  },
  {
    "url": "about/contact/index.html",
    "revision": "a73d24cfc7fd5c3b8eb1fb7fdf6912c2"
  },
  {
    "url": "about/index.html",
    "revision": "22ccf4a387987c20f03ce76b2883186d"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "6b6efaaf71e4280463bc96e0adcde40c"
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
    "url": "assets/js/app.d53348e4.js",
    "revision": "de30d67d4ce8077a61b16f9b407cd527"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "339c934c02aa7b90f0684a474c6fa6a6"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "8cd99743db5d987668bb135dfefeb2e5"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "cac041313124b4cbdc7e76c912731a44"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "14fecddd625a386ce3b5871effdc0aba"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "739c18e7217543eebc88aa41d0e81eac"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "2c10052b3b5250fd73937a957accd5ca"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "aa8c9112d7e34abbde2d7eec35341f6b"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "a7d8b78785a621e8997ea35f1d3c833b"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "9741ed225367521cc094a82237b5a875"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "339ed95f5d425d1683c5db4c4a088537"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "2b63ddc66b6774e34873be6934ecb9f7"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "8c5873e7d8ef82b9161a8ea397f3a4a7"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "20efc61e4cf4356f6da5a141d13261ba"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "af015aeeb51b9c101572618364c7c80a"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "478603157a46abfb06d1928116b1593d"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "00fdd6321fc37031c490b9cf82ab0c89"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "8a3b6345c529adacdf947dfd83acb21c"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "d9280268d4e2b917e313945b2c4a2274"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "12eb8635ce1c5135001d2c0bf099cfce"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "2362ceca7fd0c96c8c4dfaea817eb004"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "c7e5b62df1750c469b20a721f2363a00"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "dbc608b3c3aafbb7000b530acbd0fef3"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "59422eb16f6b09b425fe59fdd751efcd"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "8c48290bb50e4879f8ae9ddcb26a95b6"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "16894652dcdbe457185be2202539b99c"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "f8862fac193013db94116ca0b527d35e"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "4844cccd6d8c998d851227121b52ca36"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "ec3228448882dd305449872a6198dddf"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "2224f5fc8fc82a92f0a1e55321ef3168"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "08369f193d532a3903792cfc1cd35a38"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "9e6f5d3b235558bcad54a19f044c4959"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "a8ccac07c60e81d3388a1086f2fde224"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "5cd73565df3d4c33fa378c34fbd80499"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "545332740d44957c5b7a7b8d81c2ba64"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "512d3fb8c9596543e3767c619bcbbe9c"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "3e5c955d7d671ef0d5ab5dabb1d845fc"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "6d9069ad448a06d7cc2c8868d0eb636b"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "9d6153ecfb9336b9a9d3609781822d58"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "eb8fa7b13b3628a3b04a3aeb4d1dc976"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "f7042c662c5a7f3ca70b05e2338d4c88"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "ee009e0063402f1d2b81831916d3c7b2"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "d374b4c26e274b2ad4d013d6f74e57b1"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "d2226e37583cfb9f0d37d14ff52b38ab"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "19adf6c046c86926741e5a1ac50b0504"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "127105e8c78c4d36d0ff948684fe10ba"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "100fef67adcfb6842a48f46825d97484"
  },
  {
    "url": "daily/index.html",
    "revision": "de9a870aa3000c55fc7155d684c333a1"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "30eb7b7e7c01dae8da89a88d809b7d01"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "468d97347727a4555a71fb05dcd23ccc"
  },
  {
    "url": "en/about/index.html",
    "revision": "09cee3546e201fecfb751454225258ab"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "f1f4892089eec93c6015bda23de2803a"
  },
  {
    "url": "en/index.html",
    "revision": "767ebeb276edfc18ca773b9de1cb4b1c"
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
    "revision": "54ad0f73eb15f9d5aabfc6d3ca6c7419"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "7252574a20278efb49e80f7f67f297ca"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "6bb54861f8380b5261149cfa96e0e169"
  },
  {
    "url": "jp/about/index.html",
    "revision": "362ac64511375350a1a35936b3016a13"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "7e3d776332a62abc373f4e602d0e2cc5"
  },
  {
    "url": "jp/index.html",
    "revision": "82aa62f5167ba83ca207d7d9ad18a6bd"
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
    "revision": "73a9221e452c02966cf2166d5d67652b"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "132d7619416ba6684c05abfc6cbb8b79"
  },
  {
    "url": "kr/about/index.html",
    "revision": "4c645e00f922b6a00bf049cd646dbe3b"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "e751a094d0368e5e157da181e7c99a94"
  },
  {
    "url": "kr/index.html",
    "revision": "742c87dc5ceb6442ccc4ad91ff8677c1"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "df57701c4c680b86a5de4030138dfca6"
  },
  {
    "url": "more/music/index.html",
    "revision": "eb282810018c83be576c8ca58a0524ce"
  },
  {
    "url": "more/photo/index.html",
    "revision": "e1ec23e13625ee22e55e9404bc18d441"
  },
  {
    "url": "more/video/index.html",
    "revision": "b76d7b3ce5ee2a6cb294861b6071e4de"
  },
  {
    "url": "post/index.html",
    "revision": "d240acf9376f8e890ba4e3ad8a779d93"
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
