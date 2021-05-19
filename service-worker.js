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
    "revision": "edf02d7c4de2cdce31f4ec55ce8579ea"
  },
  {
    "url": "about/comment/index.html",
    "revision": "0f640829dc3af1bcdabc380f1ca87feb"
  },
  {
    "url": "about/contact/index.html",
    "revision": "4d42fdb095f29a054d3310772e675738"
  },
  {
    "url": "about/index.html",
    "revision": "f06a00afc4e68b6f753f086e2f6445be"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "52883a2b3df48bcb1a3bb2c759fcc77a"
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
    "url": "assets/js/10.f844800a.js",
    "revision": "5a9bf2e4e62aeed53bd9a62177ee5c1e"
  },
  {
    "url": "assets/js/11.566baf84.js",
    "revision": "46cc4f0b3e4c2178490a5e5b4b7a4214"
  },
  {
    "url": "assets/js/12.5fac6462.js",
    "revision": "eb06e4811597a58b8419f35cb98aabaa"
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
    "url": "assets/js/4.99fab4df.js",
    "revision": "ed733c1f1a3787944aff5fcc1cd4e419"
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
    "url": "assets/js/6.cd2e7af2.js",
    "revision": "087e6869426ed71f5c2cc29d7d6d1eb9"
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
    "url": "assets/js/78.45f534d8.js",
    "revision": "7e700572b5f0b46bf62de4858ebbc501"
  },
  {
    "url": "assets/js/79.0cc458cd.js",
    "revision": "8bb72a9aa5f08d5022e32542ff28738b"
  },
  {
    "url": "assets/js/8.766bd8cc.js",
    "revision": "ba025b41f39586dd057fd4dbfdf4caab"
  },
  {
    "url": "assets/js/80.0cef85e1.js",
    "revision": "c7dca3a23d33f1554812192be9288ef6"
  },
  {
    "url": "assets/js/81.0c3b9751.js",
    "revision": "c4d318ea212fc6c73f2076be084f875f"
  },
  {
    "url": "assets/js/82.c00db65b.js",
    "revision": "141476cf3102ac440500bc3bd23f9fab"
  },
  {
    "url": "assets/js/83.cbcb5d10.js",
    "revision": "bd30f2d91299fa9f35ecec41956a9d3c"
  },
  {
    "url": "assets/js/84.5d2d12b4.js",
    "revision": "509bd4e57006b055f5a143f27905e3c3"
  },
  {
    "url": "assets/js/85.2946153e.js",
    "revision": "0f0036d5a729d7727c9a9f35fa9eb40e"
  },
  {
    "url": "assets/js/86.8de2a656.js",
    "revision": "7d1fe3e0bbdfca7cb92c05f8d05a9fab"
  },
  {
    "url": "assets/js/87.652fcc1c.js",
    "revision": "cf93642cbb59da664cbd6d765a9c3ab6"
  },
  {
    "url": "assets/js/88.ff4b2223.js",
    "revision": "33268b9c2a4478e64ff22492c5f546c5"
  },
  {
    "url": "assets/js/89.eaa1a5d5.js",
    "revision": "c041f42bf31b689bd39ec53c2e73f5f1"
  },
  {
    "url": "assets/js/9.619ea1e1.js",
    "revision": "a364177c4cc73fd237b4cfa960ccf131"
  },
  {
    "url": "assets/js/90.5b06ddf8.js",
    "revision": "599945d5aed530375b259a54a71a7720"
  },
  {
    "url": "assets/js/91.c56eb94a.js",
    "revision": "148ace4f4492e93e10d049ac56577a30"
  },
  {
    "url": "assets/js/92.69702232.js",
    "revision": "35412e111bf09eb4b7299e8250946fcb"
  },
  {
    "url": "assets/js/93.fbab6178.js",
    "revision": "243b2c914ea692b78ca591aea570c8a5"
  },
  {
    "url": "assets/js/94.b29a87c7.js",
    "revision": "1483faa0e43437cedf0377a21c7fb321"
  },
  {
    "url": "assets/js/app.ecb2c948.js",
    "revision": "f5921b30a7834cf9a2435433761db37c"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "a8c32ea71b3111c01a4fce996c570077"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "14df2ef0a082e168690461182b68c0c2"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "2e392f8c2551cc0a478564fa4f278954"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "f6a2f63b028815f32cc90775ec129d88"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "77191fcfca359d5eebb053e3136fc9ec"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "c7b7831ea6fe38e2a434ecab31e78a8d"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "56ec308f40cc7e184a09d9e9e9d4ccaa"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "34b76e43ecf5a0ca29bef852046b34ca"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "2362421e00b69f6134059f37a3cfbeca"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "280108a7742851bae2f73a29182b9e90"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "1eff0a311156ad5316d1e575955bd625"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "859fa251b7cfe42796a267f419e53f6b"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "bc9e3432f24d3976eaf7fb5eb96a4cde"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "6c8d1c5e01988f5c6c04c4d2678f9ac3"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "aefdb0fe077352566f87a63f8f7bbb2a"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "b8a955bcaeab5fe1ee36386839f92ad4"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "43bb710dbe49960d5da6315696ebd57a"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "3df52453e724e3a4c2befba00d38b20d"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "93f8fb93cbcc356f511fd5413d3d3f86"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "d4901e68499154fc2a66aafbfd1742c7"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "e423cd7beea429d5ead8656e6eccdd3b"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "05138662f8b38db8d5171da917529bb5"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "fcffeda5272facc03b4b567228d90216"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "19abb8d922c5791bb987ce9b8000a987"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "c5db55544ca41045154b2ab0e1d486cb"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "18c93d5f1270fedf9a6ca45081a4a50a"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "b682cecd9f7405fe3fe0c5cd3b4ce517"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "af1e2faa91b1d452f8fd58b08e1ceabf"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "7549916614be2983e9c958ddee289510"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "f708f74b57a2afa21f0144b3d7b06f8b"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "8779afcb6d2307bcb95445495598b719"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "7f15698c18c6bb366dbbce04e48d0242"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "44babc20d4a67158c5d2db437a6314bf"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "369f1438c0ffca454f6085fc8dffbaae"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "52bf53c47b8387fd7e50eb5b69199dae"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "0f90b9f611dc563b45c5fe6c6914189f"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "8c668036215000472d501f413deff42c"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "a2eaaddc504a8a84ffd94bd65a28ad5a"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "3a73fc3d2190d1324f496d58b8d601c1"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "5d6056aae8a4834af851e286f90669e7"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "aad1da658ad3a56b5ed83ef458c9ac5e"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "56c9d6270ba017eb9aa841c6b0119eb8"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "43f00cdf5f23beb6ac779a71fccd683f"
  },
  {
    "url": "daily/2021/05/06/index.html",
    "revision": "5ce88d6725debdb27d4939e750ba03a3"
  },
  {
    "url": "daily/2021/05/07/index.html",
    "revision": "7e3388965e4895275d4dfef1adadb1cf"
  },
  {
    "url": "daily/2021/05/08/index.html",
    "revision": "2b2370b57e18a46ecbe5ccca907c926d"
  },
  {
    "url": "daily/2021/05/09/index.html",
    "revision": "50ba4a5f4a8b214270708930c74bd5c2"
  },
  {
    "url": "daily/2021/05/10/index.html",
    "revision": "71b7cbb3b666a29eef7e8390fc6d05ca"
  },
  {
    "url": "daily/2021/05/11/index.html",
    "revision": "a91830d055f7bee872877c3d7a23494a"
  },
  {
    "url": "daily/2021/05/12/index.html",
    "revision": "0358aeb775c55d023932cfc3fa048c27"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "f9889c375b32d6389c16ff9a3cd3a6f4"
  },
  {
    "url": "daily/2021/05/14/index.html",
    "revision": "59b0fa218b49ae37e9b7cdcad2016e84"
  },
  {
    "url": "daily/2021/05/15/index.html",
    "revision": "0c97a95ecc29cd43f6792d763b3226f3"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "a3e0718adbddf2cddceb1e5c30d869f5"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "839b062f8dea98b8757e299579ff4daa"
  },
  {
    "url": "daily/2021/05/18/index.html",
    "revision": "eb6cdd41adbeac066d6c7d28fafb1c21"
  },
  {
    "url": "daily/2021/05/19/index.html",
    "revision": "9e1e7acca799ddf2bbf587b034e35bdb"
  },
  {
    "url": "daily/index.html",
    "revision": "bd1e7b5cc9504221113e408ac449fad4"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "ee8188dfaf27d7211582e37b7a94af4a"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "60cc34cc69220d5b99d91a58eb945f8b"
  },
  {
    "url": "en/about/index.html",
    "revision": "4dc63edcc3ac0670e02dc66541640511"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "22f9a56b103295cea720dad992407967"
  },
  {
    "url": "en/index.html",
    "revision": "8d3e9e7ee3bde8699d9af8f34d605a1a"
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
    "revision": "ab925075f2c8724908233828b0156cff"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "bc029678bce2956f76b985f6c3eab7f9"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "b5f2a3c1c6329c44aac6634c16bb7ec7"
  },
  {
    "url": "jp/about/index.html",
    "revision": "a917b4212dfd8fcf45beca9e7afa7505"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "277c0eea8472154beb656cc783f2b6df"
  },
  {
    "url": "jp/index.html",
    "revision": "ab4a05e8d186c10cbf2f126ee3cb57d2"
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
    "revision": "352631d37fd353e0db4e2533fc81a696"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "1d37ccfe6920e0517f3f030b53237634"
  },
  {
    "url": "kr/about/index.html",
    "revision": "d57980212c19dc7c2276ca730b43df5e"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "88bd9719187c23c8353f908d498c15f8"
  },
  {
    "url": "kr/index.html",
    "revision": "a87aefeb7ea0e30fc8fce7d7d1db6028"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "e46109dc1f0f310a0a5c7958f5d3c4a2"
  },
  {
    "url": "more/music/index.html",
    "revision": "7ebd68f4b32d35b2629c5f5b3a98ab11"
  },
  {
    "url": "more/photo/index.html",
    "revision": "e216e56dd9dcb480be8e041ce7fcf7e5"
  },
  {
    "url": "more/video/index.html",
    "revision": "312d4eb70ebb01a0f7f06e6d347c2263"
  },
  {
    "url": "post/index.html",
    "revision": "b4d32c905d02e4299ba1de8788a830d5"
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
