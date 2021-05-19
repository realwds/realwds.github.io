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
    "revision": "9dd17287f4ba2544a8c07f31f503b743"
  },
  {
    "url": "about/comment/index.html",
    "revision": "ae693fbea5ec95d303e0bc781d75f81b"
  },
  {
    "url": "about/contact/index.html",
    "revision": "7f18e099f6605a4e63a0678c076fdb8c"
  },
  {
    "url": "about/index.html",
    "revision": "7719fecb22f9b89b4e2c64bb42e53ddd"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "7935568b73b01e76b2c8b5cfdcd739d5"
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
    "url": "assets/js/10.7032dab9.js",
    "revision": "a6dfb4e7fe03be4cf5ab5cd2a9fce481"
  },
  {
    "url": "assets/js/11.b12273db.js",
    "revision": "02d6bcc2d1649efeba123d48744a145c"
  },
  {
    "url": "assets/js/12.492f1bdf.js",
    "revision": "a2212d2402ea1cf242f561321b0fa263"
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
    "url": "assets/js/25.3d7ce340.js",
    "revision": "4529746764aa5e326d700935c4e96c6e"
  },
  {
    "url": "assets/js/26.57aa04a2.js",
    "revision": "09fac8022b6acd88036cc1c504e1b206"
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
    "url": "assets/js/4.08596dcc.js",
    "revision": "0775c4894749814cafc856d2ebb34791"
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
    "url": "assets/js/6.5e5938b7.js",
    "revision": "de0355cb3bcb577c9ca8b7e5207d8870"
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
    "url": "assets/js/64.ab5ebe87.js",
    "revision": "108925ea09ad9de40201aa9eddd1e0a9"
  },
  {
    "url": "assets/js/65.b59e12ce.js",
    "revision": "6dffd05df5704eaf8626ab5bdd9be9f3"
  },
  {
    "url": "assets/js/66.430d9a79.js",
    "revision": "897c60dba12f277e03a315107776c05d"
  },
  {
    "url": "assets/js/67.39c646ab.js",
    "revision": "e6a8c308c2ee3f085f26a912e9c7b5f2"
  },
  {
    "url": "assets/js/68.c3dd1629.js",
    "revision": "2a123ddbdc3962fadcfa8f3b10a308c9"
  },
  {
    "url": "assets/js/69.3e939e82.js",
    "revision": "888efe51c341d9ff56446b0b0d8576f9"
  },
  {
    "url": "assets/js/7.298e3b38.js",
    "revision": "cf078858e2119fbf80c11b91b0741de0"
  },
  {
    "url": "assets/js/70.c0f85d72.js",
    "revision": "7694bf48be4762591d527d40e858d6b4"
  },
  {
    "url": "assets/js/71.9ea6a319.js",
    "revision": "7458fba6faeaa3524cfcef51a1ee0c25"
  },
  {
    "url": "assets/js/72.20119d23.js",
    "revision": "df8cf221f898eca29f8fe166379cde7d"
  },
  {
    "url": "assets/js/73.7532f78d.js",
    "revision": "238d8b164b588462d0dd1afc2cbe8eb8"
  },
  {
    "url": "assets/js/74.35f0b80c.js",
    "revision": "9539d808c17fd109c730c1da073752ec"
  },
  {
    "url": "assets/js/75.a1790a08.js",
    "revision": "f59ff6485aae812024888c6dfea60fc3"
  },
  {
    "url": "assets/js/76.963551b5.js",
    "revision": "2f95c875ee5b59bddf5e3858a9f7d680"
  },
  {
    "url": "assets/js/77.d37a2a80.js",
    "revision": "dd3b2a77daad7ee4d2822ccb1209fc48"
  },
  {
    "url": "assets/js/78.0369da94.js",
    "revision": "a5a0cf0722bd961ed35dd5494aa36810"
  },
  {
    "url": "assets/js/79.722a3668.js",
    "revision": "61a71627d57bdd9fef0eadcd7c2a2e0f"
  },
  {
    "url": "assets/js/8.766bd8cc.js",
    "revision": "ba025b41f39586dd057fd4dbfdf4caab"
  },
  {
    "url": "assets/js/80.2f72575a.js",
    "revision": "29573b9a1b5614a4903cb52ada46f78f"
  },
  {
    "url": "assets/js/81.5daa4d25.js",
    "revision": "b16a6e1a8ea5fa96a2cf5b530253e7c4"
  },
  {
    "url": "assets/js/82.fec2ab15.js",
    "revision": "fa2fe0ebcdfadcd72c2220d8b1a18966"
  },
  {
    "url": "assets/js/83.6564bec8.js",
    "revision": "f339c2e427b169265c9e4a67bfb22cb4"
  },
  {
    "url": "assets/js/84.6ea1741e.js",
    "revision": "14e3037b6b839d3a9f5c7214e99f0885"
  },
  {
    "url": "assets/js/85.a2bedc59.js",
    "revision": "0642cade0daf845e758a5d68bfa2db7f"
  },
  {
    "url": "assets/js/9.ad6aab9f.js",
    "revision": "f0f12739e4794209698010e1ee8a684d"
  },
  {
    "url": "assets/js/app.247b7587.js",
    "revision": "78ed278946dcfc7dd973f851a6cc36d3"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "3b6501f0229cd49f9a44ed4c65756390"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "962f8290ec164eb39d56011c49c561cf"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "9d3a6224eb84359c6c6c3763c3e7407b"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "6bd129aaa132bc286980bff15ee54c70"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "d63ea3dc419e0004b08b55a5f35bff3e"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "a4eb802533822138f50af76566729b62"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "a3dbdd8c14f319421e19ad8bd1a926be"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "f3de10b9fc80b9582341b0334dcae0ba"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "2a606c38d72005cfe782e247c4dd1729"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "2012192867382b1153f44201f377d0ac"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "24de2f9096e7f67af4131cf35163ac16"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "77f70731beaff0e3032ceb7509927ba3"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "76c68c2a4e232c148590839aa5e8614e"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "49cee1c6b9f13476dec1d146ad2e2c82"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "a7767f217cd04796abf760a425e793f4"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "621dd45ad99462a8229c5ef7a77a9e12"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "2c77a7709bda9db82bc2cdfe7305f584"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "e488b133c71907167be9f48ebff90690"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "72725a8231e3e2807c3bbc89c0a2dd03"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "6f353d32f4839cc7a64565fe045c1157"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "dea50318fce2f2fda77469d37fdf27fc"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "110331aba9f598440cb6f2988241a913"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "e96fe24c52b853845a9ce8fd2b1dd96f"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "4c6f660338bf60d522e91f41ff84552a"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "f6ab4ff91f70e2c3c273764a4e058089"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "239889a4eb3dacefc39e275419b3d17a"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "540e12a6d0e78387415ff8e609758c7a"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "dd5fc62a659a7e7d0c0772550251aee8"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "8550d0d746047209986fdf8561280957"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "33070629aa472500021ff436632d1a3e"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "9667351036f55127e5be1552dd57de0b"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "9cc6083304f39206de3848d2bd18f72d"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "796d7157ff30fae36e5d7240e554080b"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "902c0204095e392da3f46d306cd4cafe"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "f044c8461ca60f1ee7723744fd4a4d07"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "d3daece599134acc2021c9c4a9b56e28"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "0747a820cd9ed153c04b3a6886a0102f"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "1f8027f0fe8436488bb5bd4a527dd19e"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "18911a252cbc0f45d82c0d174125cc49"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "0e63ee3d0b8dca071fbaddd9b2041cfc"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "1ab390489a0e79384fbb116ff26acd08"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "89459cb7fd0c2e30e721d03fddf8935c"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "b826d47792259b8347c5d5808c16c117"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "93f0a906b6daf28e55a1be9fac7df551"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "76dad6ad502362ecca09b7cd162f2b4d"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "6bf640f1ad4acdd0b54882532efc2dc7"
  },
  {
    "url": "daily/2021/05/18/index.html",
    "revision": "94169f3a5c20f0436a84669a09f539c6"
  },
  {
    "url": "daily/2021/05/19/index.html",
    "revision": "9f2586714cf5d88e48688f548001b598"
  },
  {
    "url": "daily/index.html",
    "revision": "33e9b13c3f0a20a908456439b74fc7c0"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "a1a6715f01df125cf564072801cf4f96"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "47bdc394f1363a2012656873c1cc09c5"
  },
  {
    "url": "en/about/index.html",
    "revision": "8ce4eb53842bd8dc86410697ecd80e6e"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "774f8090cc874370b20085d7ecb4b384"
  },
  {
    "url": "en/index.html",
    "revision": "4bc462ad11417f11bfe3ee7ea80655ca"
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
    "revision": "906f48306bd419daa96d7bd62b581380"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "ab5b11f3974efb5bf3c1b00d75604241"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "d036323137fc65ca0f66f79cb1a705f4"
  },
  {
    "url": "jp/about/index.html",
    "revision": "9a7575c0aaa0bbfc9140a043427b8780"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "7816dcb057dd7b08a72f92379ff417e3"
  },
  {
    "url": "jp/index.html",
    "revision": "47db1f4990662f288f646bbe65f3b4ac"
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
    "revision": "fbcd935936cb76e38c82efe680044c0e"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "070ebe2693d718c35544fde000a82d9a"
  },
  {
    "url": "kr/about/index.html",
    "revision": "3fd84a990ad7518ab59d1b974e7ae2a5"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "1399f81b223bd20141d5c60ed8227bdf"
  },
  {
    "url": "kr/index.html",
    "revision": "fdf414e2c0b33e082d6a8aa82a265e89"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "d1539868d77d0ac6e66172f89b3c83a4"
  },
  {
    "url": "more/music/index.html",
    "revision": "acbbdbb51cfaea9200af1e047ebea5a3"
  },
  {
    "url": "more/photo/index.html",
    "revision": "265dcf540c8ce7d4689afabd5c4995a1"
  },
  {
    "url": "more/video/index.html",
    "revision": "6d2385cbca6e2434c3940cf7ceebec12"
  },
  {
    "url": "post/index.html",
    "revision": "e2138c6c91231ac9f341b38966586984"
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
