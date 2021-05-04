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
    "revision": "f9bc291141d6345ff2be7574e7fa5e46"
  },
  {
    "url": "about/comment/index.html",
    "revision": "584a2393608a190a9291f8d8efed27ff"
  },
  {
    "url": "about/contact/index.html",
    "revision": "1121219615df2f1c2d5e4234a896753a"
  },
  {
    "url": "about/index.html",
    "revision": "26fe62e03c0b9ad146d5d28cb444a481"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "dd9cabd7364d3e46cc314a682890c354"
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
    "url": "assets/js/10.9eb40324.js",
    "revision": "74aacdf9ef1d1fd9845de03d8f0dbf76"
  },
  {
    "url": "assets/js/11.b18318d3.js",
    "revision": "4ae60833e089c6404b4976a0481d350d"
  },
  {
    "url": "assets/js/12.3e69a87a.js",
    "revision": "2ba12f51a27f21febc419682177b76cb"
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
    "url": "assets/js/2.d85e2974.js",
    "revision": "83b68b67536886478dfe4ec2918598c9"
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
    "url": "assets/js/4.b9d68b4a.js",
    "revision": "fe7a4a99350575b85140fa4e4300cb0e"
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
    "url": "assets/js/6.f9c212fd.js",
    "revision": "779a8fa354398aa42de80b34d3984010"
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
    "url": "assets/js/64.ceb4077f.js",
    "revision": "b0cba9adb2f6fed3e4df6b7915ec7867"
  },
  {
    "url": "assets/js/65.9d6f2220.js",
    "revision": "7e488f32568dcef3880702d6e068d567"
  },
  {
    "url": "assets/js/66.117d0a46.js",
    "revision": "e6703bc0f4bef69ad999ea2f0d90d532"
  },
  {
    "url": "assets/js/67.868fd9f9.js",
    "revision": "d82218c7f3de4148ed62d12e5e046431"
  },
  {
    "url": "assets/js/68.895a0b6c.js",
    "revision": "2550f3cae0bdd90f0fffd2e54d94eb68"
  },
  {
    "url": "assets/js/69.daaeae96.js",
    "revision": "8a07084e8b3a8c851a8ba497f8993d34"
  },
  {
    "url": "assets/js/7.298e3b38.js",
    "revision": "cf078858e2119fbf80c11b91b0741de0"
  },
  {
    "url": "assets/js/70.520fb06c.js",
    "revision": "4567b7bd01e89df6b9a7c63bb9193fbe"
  },
  {
    "url": "assets/js/71.233b17bb.js",
    "revision": "0ae7be6871a5c6c3ee2a7357c4d69fad"
  },
  {
    "url": "assets/js/72.8cee7ab2.js",
    "revision": "4f003e67c215df5e590c6aa5e025af0b"
  },
  {
    "url": "assets/js/73.e9f708d6.js",
    "revision": "2e9fb60370693b675c40eed92d74d13a"
  },
  {
    "url": "assets/js/74.73838f1b.js",
    "revision": "c5341823b0c7df84ad037baac9c87b58"
  },
  {
    "url": "assets/js/75.d4c7579a.js",
    "revision": "6fdf0e38158a764f68e6bf6f89b7c104"
  },
  {
    "url": "assets/js/76.d7447333.js",
    "revision": "bca7d280777cd2ee9168b4937db0e2a0"
  },
  {
    "url": "assets/js/77.18d42150.js",
    "revision": "a6f0638bbd2df5a02b76c3178cfba32b"
  },
  {
    "url": "assets/js/78.04a5ee58.js",
    "revision": "7678edd8b7dde3c80b6a4e22221e91e3"
  },
  {
    "url": "assets/js/79.f731e055.js",
    "revision": "67884b6bf4fb0fd8c0582d253a3032a2"
  },
  {
    "url": "assets/js/8.766bd8cc.js",
    "revision": "ba025b41f39586dd057fd4dbfdf4caab"
  },
  {
    "url": "assets/js/80.2e739b9e.js",
    "revision": "43c118aca874c6cb3684c0dc071a1204"
  },
  {
    "url": "assets/js/9.fd7ebb5b.js",
    "revision": "670c657280069557268c0f299823ef74"
  },
  {
    "url": "assets/js/app.63da6592.js",
    "revision": "464e35640cd589adc4080f1bf58a9e13"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "d8e4b61473e68291b7830b343ba13af4"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "9a5a2899742dce18b15e5c42f946f1a2"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "7dc9f706eeec0d6263348b542ce13a8d"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "d79b9218d4db68c851f18b9cf7f601c4"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "8cdf00d8571d391cea5a7252bdfdce43"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "147a0720bdafd25780731ce232e2f978"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "65aee485ae433c81e8b2847799c08c5a"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "53d8120e58bb68c3566cc5a940259732"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "66465e656d77e00a3715f5812402d320"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "75fc712f8ec67b737bd2873c0f59967d"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "ff5dd5a648c551b1819fca3d9dbe1889"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "aa4a7f7c97aa126cd75b030b7c871308"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "0f44b36e70d98c531c4ff3b44511969e"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "c1b7f04ec61f23fcfa68da1cb89c70df"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "2a8fd31f7e2ec31f70d60c4e11e5c8eb"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "e0b955f338c7c569b1a51fc1cdcc74e2"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "380b1d60ab1ec5536b6666aa4ea70ba9"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "6c21f13106874cfe21f907814471781a"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "e52bd5a1cebbf7977ce6d44b12cfc9db"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "dd83eaee0c212de677f985b5e8aaa955"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "76dfcc95688c47592c86145fab8d9382"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "29cb8c7158476a9e3a64f15c5c4327d9"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "6517dce87f43c1bfcd63b80d493dcb94"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "a423d140829616a42b9b67b1e1224a36"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "e55f0e361d6fc1e2dd40c86a653e8f23"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "4326d22f0dcedbb8f8a555103316e9ef"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "b79ea13cf9dfd9c2b974e921bdaa296a"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "11cad604ed50bf94f62b2130a666c7cb"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "af54c4af12ac61caeb67fef57c007bc5"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "56e3a68328dc454cd72ab397ed58c3b5"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "b3a06ceaed969783036fb8eb89217788"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "24566cf6ad2e007b23b7ca29fbacc04d"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "6896e45efa9418ccce6d9462b5e233b8"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "e23c855b834c12d448195c3f3e710df5"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "56c01b81e0b4e4940c2d2dbe0f5cd9ea"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "31cae82fa83c00558f8b128373276b2a"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "75b25cd11566a874b7e1bfce8ed3eebb"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "5af65210fb39bec2e4810a179703f355"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "8bccb71516a8192f43457e79e8e93bfe"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "01e0e7f4103dd84c5c1f0f09d275d1c9"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "2e495f12d406e7f2691a3c45207f583f"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "4f129fe60c043287a18388daa0309fd5"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "48df7850e39b5b5b5a9b9a924385d55a"
  },
  {
    "url": "daily/index.html",
    "revision": "76f030d762951c155776ad0bd0877ffe"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "da7f894a035e1d907f362d981312255e"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "e190ec202559e42f4dea57a3a03c5387"
  },
  {
    "url": "en/about/index.html",
    "revision": "ef908351920c8b08fa724cb6533c739f"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "84b4a4093ca3b933f35296e7d945b8b7"
  },
  {
    "url": "en/index.html",
    "revision": "f2e707072a73e94956101cd2e91b8eb6"
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
    "revision": "560a1272abfcd0ce2bbd3167bd505d71"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "923ac3d4b02b4391fa6a5cb94102395a"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "538f18316fe30e1097caf31fc7df3bc7"
  },
  {
    "url": "jp/about/index.html",
    "revision": "a642a42f143bc650a295f684bda64161"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "3109335f8422f4e7b6f4b6e480cf3431"
  },
  {
    "url": "jp/index.html",
    "revision": "e20c551f466cdfc78d4ad9ea275bb902"
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
    "revision": "00e0e2aea32cee7a3236c950be864a03"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "9800f40a5e5d43450907bf28289c012d"
  },
  {
    "url": "kr/about/index.html",
    "revision": "cb173c6241c0a1cbbfd9af005e9ff6aa"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "80a2ff6faa3e9059b6454b9b3d8bf796"
  },
  {
    "url": "kr/index.html",
    "revision": "8db5f5280f28961c27d855c931de1b10"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/links/index.html",
    "revision": "ae2c3ad9abac418411b96cd284844d7a"
  },
  {
    "url": "more/music/index.html",
    "revision": "14e30e7337b421afb8b0b5124a7b29da"
  },
  {
    "url": "more/photo/index.html",
    "revision": "b49c1fa9354e5770971e5a2fb009593f"
  },
  {
    "url": "more/video/index.html",
    "revision": "31c1f123bd6ce98f57e4fb539f9e99fb"
  },
  {
    "url": "post/index.html",
    "revision": "130071b9decaf9355c31ea6636d3378c"
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
