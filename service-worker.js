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
    "revision": "a8b3abd2c9a4df58c10835f0592970cc"
  },
  {
    "url": "about/comment/index.html",
    "revision": "fc75ec547d3ac8b2dead375e144d8160"
  },
  {
    "url": "about/contact/index.html",
    "revision": "2246593ab63f4f977b267a99c3f26022"
  },
  {
    "url": "about/index.html",
    "revision": "901c8b46cd40ce4c84035701fc35b8cb"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "d2fc8355249eb0fefd7f1469809110bc"
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
    "url": "assets/js/102.ace665f6.js",
    "revision": "e4cd786e3e629024c49e09fe41e2c012"
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
    "url": "assets/js/app.04df230e.js",
    "revision": "4f65f6d253dad354525a3749d0e552d7"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "60355a6785ac74da7125101e9ca4fd51"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "41f5c0493fe76e236d2b7687a19c3481"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "8b7e19af5f036a511d327f8206e12c54"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "a71f3d2360bf1e2f4d3b98f349a2c5b9"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "aaf85965ad851d2eeac40b0c497ba065"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "dc732238283fe5ceb95b0d761d1cfbb6"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "34707f0d8fd6bbd8e2ecb11434e97b41"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "09540e3ce0a9da196894601d2a70fa5a"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "d7d1a9dac2611ebc19f61ec106a0b862"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "33d26aadd2e68d8d238f4f10c2a35583"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "4a9bfdb52c2152e21151780b08a602ef"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "31d2c541416cf3418bfee4b3aef3783a"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "eb83ec077812593e4a7a3517d9b7d31c"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "03bf01b93289de8f663130b92fe0543c"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "6f49fe8acf2d6d4e3e510ab2912a3e73"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "c25c536cb57b936d0a59868efc134bb1"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "38714adc27c18687626996c33bf6b74b"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "457a2c37a5297963b42242365ddbd0ad"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "34baf6d5d38ebef1db09a57c906898c9"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "d613f354ad61d6490f2a93c0bd4162ee"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "d17f772c3d2210b8d21cf90b808c201e"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "985127658411a85165394556424120be"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "34fe9e62e9db609bc5e03e8512634005"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "a53d4eb45de3c3b2aca7e0229fe44592"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "130fb1ae7bab6e020bd15a6e0e31c9f7"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "3f4880787b8f187a7fef028bf0770694"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "981dda0853368348ca19c8dcb552d54b"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "55755e26ba9f4c8037e9c7937cb128c4"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "cd44c1212d983ca3f552411e7ac5e86b"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "a5450759e62aea5540817faf308b1418"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "5afe925124ae033ea4a01f00e772a52a"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "b93c77a84b1727865dc43ffa11a293ff"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "995b310d9751d4784c042f64df2cfc2a"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "43803e7344400263bd3f2f3c73c1b8e8"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "326c1b7bfcd0205431e1b4763a216b04"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "dc086a78ec0837abff08166c30a8fac9"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "4731d7e0ed77e7250b9de265f4b0b36d"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "ff05f3d53c3862eaba152621f6368f89"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "2bafdffd4eb18a9f4a84a6cbb03295d9"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "f6f15d9e42ac284caf7434b95735ba4d"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "b10344ff873323bdd1a3fc14ceb8fd19"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "674437b2068ef1ef35fd5dc12e80f4a4"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "3370ba14d42c7723aab950462b9bbe57"
  },
  {
    "url": "daily/2021/05/06/index.html",
    "revision": "b2d26029ce946935838460b59067a338"
  },
  {
    "url": "daily/2021/05/07/index.html",
    "revision": "12bc7655ac2f29b33b81be8d0a10bbdd"
  },
  {
    "url": "daily/2021/05/08/index.html",
    "revision": "22df2912216d2822fb7e187c73a9f7bc"
  },
  {
    "url": "daily/2021/05/09/index.html",
    "revision": "af5a38dc0df6575989b74300a6078b5d"
  },
  {
    "url": "daily/2021/05/10/index.html",
    "revision": "36e45e2783d556382bda088b221ce948"
  },
  {
    "url": "daily/2021/05/11/index.html",
    "revision": "700ca1c78c4d52cb3f0c85ea5da5b507"
  },
  {
    "url": "daily/2021/05/12/index.html",
    "revision": "286b4d17d044fce90e7cbd3582914843"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "c58d64765240e97a6bdd22b840530697"
  },
  {
    "url": "daily/2021/05/14/index.html",
    "revision": "9d68416061dd1342fa5b7993c3561f41"
  },
  {
    "url": "daily/2021/05/15/index.html",
    "revision": "0ffe4508ed7bf1b177274dff98cda0b5"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "d72aa8f1a4df5627ef8fb2c4d799f14e"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "edc297d9c570e220615c5d492679ce1e"
  },
  {
    "url": "daily/2021/05/18/index.html",
    "revision": "ffe03e840b90cf27d41cc27cb585c5a8"
  },
  {
    "url": "daily/2021/05/19/index.html",
    "revision": "b99cb065ad4d2b3ca036216fd7068792"
  },
  {
    "url": "daily/2021/05/20/index.html",
    "revision": "3d10250d350daafda70e5a17512a1373"
  },
  {
    "url": "daily/2021/05/21/index.html",
    "revision": "fdd33b695868a4f5258da91fa7c816a6"
  },
  {
    "url": "daily/2021/05/22/index.html",
    "revision": "b6d45cfd4e43f4641d78a95b76659b14"
  },
  {
    "url": "daily/2021/05/23/index.html",
    "revision": "be912e7f25c48381464cd8db4f0afe41"
  },
  {
    "url": "daily/2021/05/24/index.html",
    "revision": "1be167dff766e3828bd74c5f2ef4bd5f"
  },
  {
    "url": "daily/2021/05/25/index.html",
    "revision": "38e12804630e74e3bfebf935bc6e7fb0"
  },
  {
    "url": "daily/2021/05/26/index.html",
    "revision": "3d4bfe06d401ca56192b5a757458d143"
  },
  {
    "url": "daily/2021/05/27/index.html",
    "revision": "d3f99276a4293ab55d5e5a3dc5df2173"
  },
  {
    "url": "daily/2021/05/28/index.html",
    "revision": "6a81b55efbc096f7c4287922c404f449"
  },
  {
    "url": "daily/2021/05/29/index.html",
    "revision": "c50c2a764d1311efe8c0c762f8b0a2bf"
  },
  {
    "url": "daily/index.html",
    "revision": "eb042134da6b1b4103fb63169dee70a3"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "2de75bda6324dc205e4dd3b3f77ed070"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "f861c16d54a0393950daf7b64c08fe7a"
  },
  {
    "url": "en/about/index.html",
    "revision": "59782aab75f2d77292fce45f087106f4"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "76a3673d7ca34b734ed35f166fdbb845"
  },
  {
    "url": "en/index.html",
    "revision": "8a0e8b0be64e1b41250d83b3abb9eda2"
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
    "revision": "3bcfc241e4e2ae861a435cccc5365563"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "6f8b8968bf98d27f4ce0deed6360ade2"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "4afddb5a19b016815d9d390458f882d9"
  },
  {
    "url": "jp/about/index.html",
    "revision": "15376481bd419b84ff7e905991a2adaf"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "851ab2cd7eaee9a842f7b8219457455f"
  },
  {
    "url": "jp/index.html",
    "revision": "fcabb3359c0daeb6c16dce6d1ad489fb"
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
    "revision": "1800bf52f0de3ef4435993abd896b0db"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "9d948bde238ccc75f1e9bc8a330c8b7e"
  },
  {
    "url": "kr/about/index.html",
    "revision": "017d18e35c5b46b53e60c16c6e006bdf"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "f8722beecb1008e8e64c84a9194ba550"
  },
  {
    "url": "kr/index.html",
    "revision": "f5aad17ff9d6e7b794949084c0611704"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "febad1bcdf7abee4ff25769207eb59e7"
  },
  {
    "url": "more/music/index.html",
    "revision": "516adc9bc120df427b24a67910e1a203"
  },
  {
    "url": "more/photo/index.html",
    "revision": "9a25b05660a1c0fc15e42de968650791"
  },
  {
    "url": "more/video/index.html",
    "revision": "8177bd67a480713000bd61d12b5af85c"
  },
  {
    "url": "post/index.html",
    "revision": "2e373ebbeebae52346a301107d4232f1"
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
