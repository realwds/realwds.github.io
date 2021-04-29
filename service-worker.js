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
    "revision": "638db1cc447e6a3820d8e21571cd473d"
  },
  {
    "url": "assets/css/0.styles.8b6fb9c0.css",
    "revision": "408ff873f716f2cf981413b26fb98d9c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8b6609dd.js",
    "revision": "67323389e5fece226a6d4c1577f653ac"
  },
  {
    "url": "assets/js/11.220012b7.js",
    "revision": "74333a05050498bfca5a0374b92ae9ba"
  },
  {
    "url": "assets/js/12.95770c05.js",
    "revision": "e198a49fd261a58b5d1cce83220d3342"
  },
  {
    "url": "assets/js/13.3e2b03d2.js",
    "revision": "bd32bbcadcaf51e9e5ec33dd30caf396"
  },
  {
    "url": "assets/js/14.07cb3311.js",
    "revision": "d22f938af1c9588f784bcba6fe8d20c7"
  },
  {
    "url": "assets/js/15.a5ea90e3.js",
    "revision": "2d5c3335de4372a4bc5846002d088655"
  },
  {
    "url": "assets/js/16.bb41a5fb.js",
    "revision": "ece8cd5b05f71238f9cbfc1ac4ada62d"
  },
  {
    "url": "assets/js/17.a1efa862.js",
    "revision": "9995107f1b7b92c1584ef66ff9475ce3"
  },
  {
    "url": "assets/js/18.bc90cd62.js",
    "revision": "eeef8bd87e9367225c7a336be7782d43"
  },
  {
    "url": "assets/js/19.15297710.js",
    "revision": "0e94594785ed93902bdbceabf3f0434d"
  },
  {
    "url": "assets/js/2.c709e986.js",
    "revision": "b9e04dfd3158795cc9878899e5b3c42e"
  },
  {
    "url": "assets/js/20.fc64eca9.js",
    "revision": "c0d334dbf516c81956c90a64595122a5"
  },
  {
    "url": "assets/js/21.a9bd7d9b.js",
    "revision": "b07b939c234493d34788dca930109d4c"
  },
  {
    "url": "assets/js/22.e033a8aa.js",
    "revision": "87ddfb52b15ef49809be0a7b1bd744ac"
  },
  {
    "url": "assets/js/23.a7da6a1c.js",
    "revision": "75ea3f62345f3c92badc50e65f9afce8"
  },
  {
    "url": "assets/js/24.52f65bfb.js",
    "revision": "37ba8929e256a1340839436e61f031c2"
  },
  {
    "url": "assets/js/25.8e2cc086.js",
    "revision": "9ab700e79b35a3b65b0d1688f87a7ece"
  },
  {
    "url": "assets/js/26.3ed7fa77.js",
    "revision": "015dac4c1a346b1b5eb24078cf59367e"
  },
  {
    "url": "assets/js/27.def441fc.js",
    "revision": "3fba5438e77c41759c1011f5f9bcd027"
  },
  {
    "url": "assets/js/28.6bd11eaa.js",
    "revision": "e29a0ec063919aa65325071f230cf33f"
  },
  {
    "url": "assets/js/29.1b61b590.js",
    "revision": "4f1a3523f9e299af1a2e34148e9b2bbb"
  },
  {
    "url": "assets/js/3.3323ec81.js",
    "revision": "3d18914db69f8cf0dd52efe02d5c84c2"
  },
  {
    "url": "assets/js/30.39869f37.js",
    "revision": "9bb6f1c4cc1e8d7356f0543a50c57d20"
  },
  {
    "url": "assets/js/31.97324df8.js",
    "revision": "51a2d28a4b50a264d175314f60cb9aa6"
  },
  {
    "url": "assets/js/32.812cf095.js",
    "revision": "f0a786912035cdc54c4784bb934692a7"
  },
  {
    "url": "assets/js/33.2d9cb80d.js",
    "revision": "0942ac90656bba33ab41d8d45c518636"
  },
  {
    "url": "assets/js/34.3ba9d886.js",
    "revision": "e965889698bf4aa1d4a83e7eadde1036"
  },
  {
    "url": "assets/js/35.647ad4e5.js",
    "revision": "20b6d6d947ee47b3d89b4f9823104278"
  },
  {
    "url": "assets/js/36.1cf09030.js",
    "revision": "522b97a43e5573f95039f7bd6d7a5561"
  },
  {
    "url": "assets/js/37.861e5158.js",
    "revision": "5c6d22955d0e009a3bcc8d6dd9063c13"
  },
  {
    "url": "assets/js/38.dfc38d5a.js",
    "revision": "f2c9a8b794bebfc34d29bc03f7f0c574"
  },
  {
    "url": "assets/js/39.f71ad671.js",
    "revision": "bc4d98e3b5642ce53ef0e815a59956ce"
  },
  {
    "url": "assets/js/4.5b9a418c.js",
    "revision": "9b2c6afebc109a971b401fbea1d20bf5"
  },
  {
    "url": "assets/js/40.5995ea8c.js",
    "revision": "0b3d072a812b7f3e733d279486d1588e"
  },
  {
    "url": "assets/js/41.4879e4e6.js",
    "revision": "4c4fb438e6a3006308f4c6cfe605e82c"
  },
  {
    "url": "assets/js/42.0ed98711.js",
    "revision": "f1af3cc244b3bc91ce3cecdd90e8fffc"
  },
  {
    "url": "assets/js/43.6114301a.js",
    "revision": "b6b945289c1ee8b4ee8efda7f77ec1cb"
  },
  {
    "url": "assets/js/44.113fedee.js",
    "revision": "20c8740a0ed5664125b3975939745d9e"
  },
  {
    "url": "assets/js/45.1811ac3c.js",
    "revision": "452ee08e6beb91493e45a78d2488ab49"
  },
  {
    "url": "assets/js/46.9f757ceb.js",
    "revision": "3bdbf5d6ea2d138298cdb1f51226dc6e"
  },
  {
    "url": "assets/js/47.093b20a9.js",
    "revision": "23e71501513f14119c29c7f33686558c"
  },
  {
    "url": "assets/js/48.c8dd0b0d.js",
    "revision": "b9662d5429955ebf90ffccc6b59f81e6"
  },
  {
    "url": "assets/js/49.c48b0425.js",
    "revision": "420f143394d5db15eabbccbb7950be0e"
  },
  {
    "url": "assets/js/5.ed410f19.js",
    "revision": "0cd18ffbb176b40709166921fee37899"
  },
  {
    "url": "assets/js/50.65a57529.js",
    "revision": "c28f5610133060332562779a557eb396"
  },
  {
    "url": "assets/js/51.d15ff883.js",
    "revision": "e769d264f22bd1497f2732c1d5d961b4"
  },
  {
    "url": "assets/js/52.17991068.js",
    "revision": "9ed6eadb1d65edd56b312e68d5f6dd07"
  },
  {
    "url": "assets/js/53.a70b7452.js",
    "revision": "0a20d1c077052d554170bb34e6bc2f67"
  },
  {
    "url": "assets/js/54.b1feda69.js",
    "revision": "59b065f78c19de87564b4cc8de51dca4"
  },
  {
    "url": "assets/js/55.136f6a06.js",
    "revision": "b4d19cf9111a22cb241ee2972c1c33de"
  },
  {
    "url": "assets/js/56.078eecb1.js",
    "revision": "98a6dabf66cd730173673f61457d6e9c"
  },
  {
    "url": "assets/js/57.9219372d.js",
    "revision": "e70522efb2961f987448d26388c64753"
  },
  {
    "url": "assets/js/58.7f94654e.js",
    "revision": "ecb57f83248538f7703e170e608e154c"
  },
  {
    "url": "assets/js/59.76b86693.js",
    "revision": "c870f22ca12513ab81f9f2efafd1de95"
  },
  {
    "url": "assets/js/6.461dcd97.js",
    "revision": "4bae7c90b2b2ceeb294003dc54725024"
  },
  {
    "url": "assets/js/60.7da18d77.js",
    "revision": "0f066bffb82efd9091d5235873f0bc9d"
  },
  {
    "url": "assets/js/61.b23b7c8f.js",
    "revision": "605ca9648280f20178198be6d7781376"
  },
  {
    "url": "assets/js/62.2c3c1e7f.js",
    "revision": "91fad478bd82eba6396b858c4c4c8c84"
  },
  {
    "url": "assets/js/63.9091edcd.js",
    "revision": "17413603e0fe1e6ca34be01dd13c7655"
  },
  {
    "url": "assets/js/64.8dbe25b4.js",
    "revision": "1a4e9b5e9256c04c9564ca8113f76c75"
  },
  {
    "url": "assets/js/65.3edcc741.js",
    "revision": "4b4bebbafc10e4b48ff30c2ff8ca41f9"
  },
  {
    "url": "assets/js/66.23817290.js",
    "revision": "34f1328356e026ca8881efc7f86ef7b6"
  },
  {
    "url": "assets/js/67.316bdf70.js",
    "revision": "572cb94b9014face311eee218631f9f7"
  },
  {
    "url": "assets/js/68.88d39412.js",
    "revision": "9a18602d5fcadda4725ac546c3ed6f05"
  },
  {
    "url": "assets/js/69.3e7db431.js",
    "revision": "50fba0eab4c0ee75050df45b55bf215e"
  },
  {
    "url": "assets/js/7.d081b7c4.js",
    "revision": "40fd566a3f16c7ad9335465c009816b3"
  },
  {
    "url": "assets/js/70.4b43eed6.js",
    "revision": "669a0b3abc541375ea676213052da2ff"
  },
  {
    "url": "assets/js/71.3122c5af.js",
    "revision": "4f94d91778d3f9cd605b046dcfa07054"
  },
  {
    "url": "assets/js/72.5973b436.js",
    "revision": "abc466038dc33f3bca9847b339e17a83"
  },
  {
    "url": "assets/js/73.c3ecf7b4.js",
    "revision": "86a19b859c9932f02de57b21973a9a69"
  },
  {
    "url": "assets/js/74.ac9117c1.js",
    "revision": "30d6de36ad08cc5ec66f2c7ffd49eb19"
  },
  {
    "url": "assets/js/75.b6032c54.js",
    "revision": "f4c99861851763d4c11038ec52e7e5e2"
  },
  {
    "url": "assets/js/76.e0797c81.js",
    "revision": "943786e8f02c56bee9c9b00256068c6f"
  },
  {
    "url": "assets/js/77.1667bb50.js",
    "revision": "55b7166d04df89c02f86851baef5e57e"
  },
  {
    "url": "assets/js/78.d1ba8fce.js",
    "revision": "37f46a4309a96f3f9e46cfd9700c51cf"
  },
  {
    "url": "assets/js/8.c9406f72.js",
    "revision": "a6d5741ed4e20d9a540b89401e8dfa19"
  },
  {
    "url": "assets/js/9.a37d5bf4.js",
    "revision": "b17d1c5165cd8da1030bcfa8a25df3ac"
  },
  {
    "url": "assets/js/app.027b661e.js",
    "revision": "1060251506f072977996aed79adbd350"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "58b5aeef9fc8a4400d1a5e6570c70f1b"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "9b1132440d2c433c4a959e99a6ba6fb5"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "31557f9a9829694490ad0d8778f8dae1"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "e97a05d32c6b32baa1270500ba1df14b"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "46da0861ecce4f7a84664ffc08a7c88d"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "36202108e931c1d7019a982557f6b752"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "9740059c9e3f4af23250acc1ca988039"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "f668e1eb0b7644f6e79acb6b2e9a4a2d"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "0a98aa96aa7cf365daa1be23371b6f9d"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "a3a59cace910b1cf34d5099175c59836"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "ceb1d832b1edf2bf4ae2986e60b03aa9"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "a7c50455af29f7a9175890e86a449912"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "41b3d89fa0d2245aca24faf4412cce6d"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "c904bbd79ed7a60f0c16ba95e94789a7"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "82203bbfd6f94d34d0feda74613eb4fc"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "dddce0a02a477d89db806fddc4482d8d"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "a67c76def53deabbdf41422f11128db8"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "760e1f833e284362c3fed97595ef7a7e"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "14689b128c8f601a97400f41dfbe3270"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "03952695793bd9a2866b5c3f1026170b"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "3fb8aa223cf8cd3bd4c7cbe70545b412"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "f328dd93bfa9ad4753c7848e75be0137"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "009c65a018a672d00a37480c33361203"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "c73c8490b0c7e2575e98a901a98e9b5e"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "70ae789c755a5ef59ad4124328c6462c"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "c5983fc3b9a39c470dd20cd5db69ae7a"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "0a0171781ac9a882552ab78206d8fe70"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "85784aa1081e99ba7475617f3d099463"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "334e4f7988d80783fa9be9d6d681673d"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "19c55c618856569b812d90656372564c"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "77e8208ec99eccb90c790f2b4d7e3010"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "b9f2784611ea84680844ff6ab41bdad5"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "884a5429c776cc170184798ae82e9281"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "0718789303c05bd57c7ee279e41d0d32"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "2e3e71d5cce137283a7dc533577177f8"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "b622801ec631e08fee98ae7315a9f3fa"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "f28a4cdc14866625607eadc8e7e40bb9"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "95f839ccd81e1bd9080ade8a1104d5d2"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "7b42534b3981792eebb3794c90ab70d2"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "71d4281528c8341ac75de76880dc4057"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "6932deae2dbe8cd5e8a156ec1923c1e2"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "17645a3b1657d48993e6dab228f93197"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "b7dd6cd7a2c120179c7de4011ca58cf9"
  },
  {
    "url": "daily/index.html",
    "revision": "6203980670b562b9e2e6c5dbd27ef316"
  },
  {
    "url": "en/index.html",
    "revision": "eeb3bd207f9f37a102279414aff83186"
  },
  {
    "url": "en/more/about/index.html",
    "revision": "1c78377c135fc52ffba5a681731414c7"
  },
  {
    "url": "en/more/comment/index.html",
    "revision": "8b31c1f4310d96377bfc76af05946204"
  },
  {
    "url": "en/more/contact/index.html",
    "revision": "9de564bf7a695fe9183b2f3b80c8698d"
  },
  {
    "url": "en/more/sponsor/index.html",
    "revision": "4f3aa86798d424843f5d5a4a15613841"
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
    "revision": "313b8fa6fa2c12dbb5f4faf205c3b4f0"
  },
  {
    "url": "jp/index.html",
    "revision": "4d1bda08377035225a8cb9142b6f6a6e"
  },
  {
    "url": "jp/more/about/index.html",
    "revision": "dc1cd21ee39bc50f71bd1a80dad4e585"
  },
  {
    "url": "jp/more/comment/index.html",
    "revision": "725d8f25dfdcd495014e14bb1f0cdc06"
  },
  {
    "url": "jp/more/contact/index.html",
    "revision": "9b24d92e19d3ace778d32eb4f528d64a"
  },
  {
    "url": "jp/more/sponsor/index.html",
    "revision": "a6ed064734b38ed67adb05ed0d93c557"
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
    "url": "kr/index.html",
    "revision": "5ffc150b5e293fc93add2662fdc1bce7"
  },
  {
    "url": "kr/more/about/index.html",
    "revision": "9e904dcbb59bcd37cc2269d99333401e"
  },
  {
    "url": "kr/more/comment/index.html",
    "revision": "141d288143aa574165a9571ea5445342"
  },
  {
    "url": "kr/more/contact/index.html",
    "revision": "2a3d4b9c2ea83d094a323996b453c9fa"
  },
  {
    "url": "kr/more/sponsor/index.html",
    "revision": "4c9bf86aa208aa5ccb6aae1700c81c5a"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about/index.html",
    "revision": "6e51b1f0d5bf6a3e1e97734d67620d2e"
  },
  {
    "url": "more/comment/index.html",
    "revision": "68482bca2ce59587dc2940c3783acd78"
  },
  {
    "url": "more/contact/index.html",
    "revision": "c40f26727554b305d7edf15694eef4f9"
  },
  {
    "url": "more/sponsor/index.html",
    "revision": "7777dc13c03940ef27a090e706369008"
  },
  {
    "url": "post/index.html",
    "revision": "b0e01e816c5d2a0004dfddd41023cb53"
  },
  {
    "url": "tools/index.html",
    "revision": "a030d059a93eb9ef25055f0612632367"
  },
  {
    "url": "video/index.html",
    "revision": "4ea422a8b5293c405ed4db4b2e6ba9b9"
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
