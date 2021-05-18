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
    "revision": "80cbe01f0f3d10060935700301e6f5f0"
  },
  {
    "url": "about/comment/index.html",
    "revision": "1ce65838a8d0390ccd405d1b7acbc277"
  },
  {
    "url": "about/contact/index.html",
    "revision": "be826e3bc00bc33c45db4657b23750c5"
  },
  {
    "url": "about/index.html",
    "revision": "85e32e8a8bcfac9fb0f26943b54fd199"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "19a0942e56eba84b6967f92df18c1b87"
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
    "url": "assets/js/app.860647a6.js",
    "revision": "5ac66fc1771399db8daa7010b3263c84"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "f82972c6918729b0342dac42c36ab34b"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "6c9f199540b160fb838770c14fbc7540"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "6d5d4aa2632dbe8450e68f77d2be2148"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "9de089e788963949714169bec5879168"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "11501d7666fd27b115d3f1a8f3970ebb"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "a7db92fb93dd7c2e4c396fa9d4f25efe"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "d22d77c9026377d45326bd43d06ef1be"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "e0fcd1f6011a75834c4ef2fafa5e66fb"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "cc93d4e901f2d88f4ae7847bad44077c"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "c8a8e0b08cc7b5d0aca53aef9655a596"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "ba700de8f83b928a2b6bf4459c66e57e"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "1be924ce5320b1bc6809958323bf3522"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "b8ff41b13c12ce481620e207297548d3"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "d5d69ec25917a31751cc53fd3fc9e6c0"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "a5b68385c9e42b6943f6abc4af107fe9"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "fa3ff56547c0e78a4cb16c1f187bf283"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "67b864e0174e90a2c87d9f7db1ee4bed"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "c82c2c1d6266d445c70fc78acb863807"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "9495d70d25fb6e6a36521e6de47fdae3"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "412a715a754f8778212a3bcfc7a054e4"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "4c35ccf2e3b8e8e96f76ac2918c07f2a"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "e950f1bf57aede9bfd6cc1cb497d56a1"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "82dbf147c31779b52c5e63cc2d88c5a7"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "eb5fbd5c26fc72aaf2ab6e4fb1d551ce"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "f67e4390c7694fd807860f63fafccb72"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "d72c5a9b228196e9c74467ffc4d23548"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "4b66522f4aa64fb6dced01c86ccaf060"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "7b7818077da3eb67224a68b159136c2a"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "e2ad9df4c4b4cbdd2b5f7a93296beb25"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "caef7453bd4b4989886e5140df0c9616"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "43a9274587cdf7f5ae97f93390eeccbb"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "032a2cbda064ce6b417e73cf2ec600d2"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "135f240682bbd04eb8d87904655d43d2"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "2981689025b780ae7776537712e8d748"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "b717d55596ac29327c2bf53e56e32407"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "00b73e94a42eabfc842c465df5c9d8fc"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "3b3eb593a3db0ef0aec7b357a953796f"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "0f5447124f496b6e82dcef89288fc42f"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "5fa50b937dbd5c6a89de0ec65211758b"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "a04e3e2791d9aec89b3ad71d2fe1ad4c"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "f357fbe496454396257a878f3320c676"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "c84ed4ee15282b6a6c702aba73ae30f1"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "d69a9d54f8da0946f1498193e4b80afb"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "f3a7a3404aa0a4e70f1677860330cf54"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "ec29e17731e45ea6d0201bd6a629a936"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "4eff90fe6a14c55e4c9242307cb34b9f"
  },
  {
    "url": "daily/index.html",
    "revision": "04d318e9b2252c0929948d12d8bc0d21"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "a14184ab3dcec1ddbc0c6e63778e5938"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "56462a7b7a18f8bbc4c8b29c6f376afe"
  },
  {
    "url": "en/about/index.html",
    "revision": "b13584fda99665ce66ac64a231107be7"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "2773124b331020ed578133cd4a5d0c05"
  },
  {
    "url": "en/index.html",
    "revision": "45ccb423da03670789cb4838c54afc5a"
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
    "revision": "7e544e0aea8867257411533bcb26fc11"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "caf05345cfa043cd5e0ceb03400c6dfd"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "bd159021ce1800af5804217d93200e48"
  },
  {
    "url": "jp/about/index.html",
    "revision": "d3db1ed343108185a5313dc0e2b6702d"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "cf8a10056f5184f4c29ee83c2aa8f2ec"
  },
  {
    "url": "jp/index.html",
    "revision": "1671d07dae08c2b880dbdc1cbdb259cf"
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
    "revision": "074fee63d87715637f52810b769f1df9"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "5802e65349d40ad5351470099995de3b"
  },
  {
    "url": "kr/about/index.html",
    "revision": "ad1b31aa20efef8606f4c207616088ee"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "7c0a09b0331b688876a378c1537b8381"
  },
  {
    "url": "kr/index.html",
    "revision": "f61bf3372c7ce47cd4a959daa2130112"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "5930874155c46b71112df54c447183bb"
  },
  {
    "url": "more/music/index.html",
    "revision": "333d722e14e433b150c01f1fe5357cde"
  },
  {
    "url": "more/photo/index.html",
    "revision": "a8c772ef52f44a61ed163481c5b16302"
  },
  {
    "url": "more/video/index.html",
    "revision": "e90d47488e727bf75dd83fa7deb266fd"
  },
  {
    "url": "post/index.html",
    "revision": "7c26564ff5ed9c0d4145704c5e389e2b"
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
