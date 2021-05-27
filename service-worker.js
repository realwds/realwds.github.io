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
    "revision": "f880182a1844da437c741af2ba689d69"
  },
  {
    "url": "about/comment/index.html",
    "revision": "1486cdbcf4bf826bcdc9d465b4d1e737"
  },
  {
    "url": "about/contact/index.html",
    "revision": "bc30679e272603b3968404372b9e7495"
  },
  {
    "url": "about/index.html",
    "revision": "21bba7330fddffa9c4882f76675a511b"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "a9326f946f011d4af09eb084d2c439ee"
  },
  {
    "url": "assets/css/0.styles.19c26845.css",
    "revision": "92eeee1fe7e4176b18e3dca9b0dfa64f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0b9f69f6.js",
    "revision": "e1e77e106e40fdcdea910d0615db0068"
  },
  {
    "url": "assets/js/10.c3e6c17b.js",
    "revision": "ee99d985ed13f84a4fccf218dfd544dc"
  },
  {
    "url": "assets/js/100.faef7dab.js",
    "revision": "c15ebfcd17a853b11a16a603b9b46602"
  },
  {
    "url": "assets/js/101.83c4fdad.js",
    "revision": "cc592668621d5989a575f31d0655dab9"
  },
  {
    "url": "assets/js/102.9bdd4501.js",
    "revision": "d8f68b74c5d0debf47bf2bbbd8f03b3a"
  },
  {
    "url": "assets/js/103.b5743be3.js",
    "revision": "ac2e367c482710e80055c52c74465141"
  },
  {
    "url": "assets/js/104.84f1bfa1.js",
    "revision": "2bf6f2100ceb00a82e8351a4d00ab368"
  },
  {
    "url": "assets/js/105.d01a99aa.js",
    "revision": "ac3101701c66cf7ee5ddc5181f272d18"
  },
  {
    "url": "assets/js/106.b36534ef.js",
    "revision": "23ee334916e4791fa8b4d74c715b8ad2"
  },
  {
    "url": "assets/js/107.a1c76087.js",
    "revision": "0ce4654a603ce9d8b0413ca0f4040dc9"
  },
  {
    "url": "assets/js/108.c0e62049.js",
    "revision": "83e2197d8cd6449ffa966832c0f9b9b0"
  },
  {
    "url": "assets/js/11.9659ece1.js",
    "revision": "5b98049a621f71e834bd5ca081684294"
  },
  {
    "url": "assets/js/12.a6c09925.js",
    "revision": "ea9d7e2939cce2d9762c2e8f1ec5cd64"
  },
  {
    "url": "assets/js/13.b5c4a29c.js",
    "revision": "c9ce80000afd0d92fd425aa1b0c81435"
  },
  {
    "url": "assets/js/14.725e8cc3.js",
    "revision": "5ab65d04fe531d5af17dfe0d2e5a2b17"
  },
  {
    "url": "assets/js/15.bc5d1584.js",
    "revision": "562459402bb358f76e94015221bf95cf"
  },
  {
    "url": "assets/js/16.e649e6ee.js",
    "revision": "3d80d9124037ea492778a01c66f62d7b"
  },
  {
    "url": "assets/js/17.550bf817.js",
    "revision": "97b63821d965939d9d901daf50fc0a6b"
  },
  {
    "url": "assets/js/18.fbc871e0.js",
    "revision": "128b2bbe9d5341e1aeb7725e3cedac07"
  },
  {
    "url": "assets/js/19.19e3c96d.js",
    "revision": "08f44d540d9b061ab3c78d41441dc603"
  },
  {
    "url": "assets/js/20.86c599a6.js",
    "revision": "6219f09583fe9163d065a77c5e287367"
  },
  {
    "url": "assets/js/21.9bb345ee.js",
    "revision": "1da49e724f64d679eaebb828876fe4c1"
  },
  {
    "url": "assets/js/22.16dcab21.js",
    "revision": "8791346beffac62892c5792c747ebf0d"
  },
  {
    "url": "assets/js/23.b15fc521.js",
    "revision": "d97700e500abd9f14988db85bbac968e"
  },
  {
    "url": "assets/js/24.109466ca.js",
    "revision": "06ba54b965857e084eb510d33b8385bf"
  },
  {
    "url": "assets/js/25.b3a460d1.js",
    "revision": "7525841f4348f0ca73af9b16823852bb"
  },
  {
    "url": "assets/js/26.84aee85c.js",
    "revision": "5714df820ce5e0f5a1ccc850e5a4afcd"
  },
  {
    "url": "assets/js/27.f667a6fe.js",
    "revision": "dc6691cc7f85ad79d0411e98d1f0b600"
  },
  {
    "url": "assets/js/28.8dd5d00f.js",
    "revision": "048fbda257af55a55352ba57ce9fcc7e"
  },
  {
    "url": "assets/js/29.f10847b5.js",
    "revision": "7d77c5fc616c2428bd8bb957db4cba24"
  },
  {
    "url": "assets/js/3.6b0d2dd5.js",
    "revision": "c0fffc2c70dace69ae67f1c1e675c77f"
  },
  {
    "url": "assets/js/30.ad9ff195.js",
    "revision": "bf4d8a46913ecb2ed01e2572a4cb51de"
  },
  {
    "url": "assets/js/31.62467c22.js",
    "revision": "66130e35bed2206ad08fcc84a80c7983"
  },
  {
    "url": "assets/js/32.142b740b.js",
    "revision": "ef3d12f3dc0b48b878168cfe175ddef9"
  },
  {
    "url": "assets/js/33.2d4ce92d.js",
    "revision": "aca4d5ab3f2336795480403b778f71b4"
  },
  {
    "url": "assets/js/34.a019abb8.js",
    "revision": "20b6675744e72ab9cddb9614a6a95aa5"
  },
  {
    "url": "assets/js/35.f11cb958.js",
    "revision": "1aed9abeb4336687e232565b3384d587"
  },
  {
    "url": "assets/js/36.dab52ac6.js",
    "revision": "9b2fd04989d5b7e0fc9c6f11952baa19"
  },
  {
    "url": "assets/js/37.81522425.js",
    "revision": "deece3ceda32617a45e19bccb3b642d5"
  },
  {
    "url": "assets/js/38.4fbb7921.js",
    "revision": "eb12093172bde16bdef21e2ede59aea7"
  },
  {
    "url": "assets/js/39.752cb569.js",
    "revision": "7f19a3c29f1ea64d5ab48ec91f89ba53"
  },
  {
    "url": "assets/js/4.f62c7105.js",
    "revision": "fec771e4a989ef51fd75a4146b18eabc"
  },
  {
    "url": "assets/js/40.4db316fb.js",
    "revision": "7ee664e1000c811a368f2878a509b5a2"
  },
  {
    "url": "assets/js/41.0c819fc1.js",
    "revision": "e24539fc01afa5b4a98f0694b883a4f8"
  },
  {
    "url": "assets/js/42.e9f51c03.js",
    "revision": "9df55f82990ad038054621ed594acb04"
  },
  {
    "url": "assets/js/43.77eb6b58.js",
    "revision": "93e0a248f3297ae7b7b07282ea825b4a"
  },
  {
    "url": "assets/js/44.5bee0762.js",
    "revision": "d45c67746508f30d154148771885d324"
  },
  {
    "url": "assets/js/45.c59d25da.js",
    "revision": "1add329ff78e94a6b9a718fd68e6b402"
  },
  {
    "url": "assets/js/46.bf579b22.js",
    "revision": "56bd7ad9181db13487362b993694cb18"
  },
  {
    "url": "assets/js/47.ee7ae0bc.js",
    "revision": "eaf1b54a56e72f577950b1d5bbf2ecb3"
  },
  {
    "url": "assets/js/48.7d8d4f77.js",
    "revision": "5845aaaaf24be0186a10f0df52c46fd0"
  },
  {
    "url": "assets/js/49.95ecb20f.js",
    "revision": "22e8fde1b1c895bac9f1ca82e6edcff1"
  },
  {
    "url": "assets/js/5.3de62106.js",
    "revision": "549b488205657f81c712423787bb18af"
  },
  {
    "url": "assets/js/50.a52baec5.js",
    "revision": "b4700550ac080e8ada24ff420667d3cb"
  },
  {
    "url": "assets/js/51.bff9519f.js",
    "revision": "46c5948d363cdcb32f4cdd8698f940fb"
  },
  {
    "url": "assets/js/52.1ed29b99.js",
    "revision": "e3202db3deefa0aa845bbbbc985dc779"
  },
  {
    "url": "assets/js/53.5ab8f6d4.js",
    "revision": "91d11ed2fedb3a479b81c6f3912cc7f4"
  },
  {
    "url": "assets/js/54.684a3933.js",
    "revision": "2e5ae4fe60e5ad1e125a205b1cea3844"
  },
  {
    "url": "assets/js/55.4dbf4867.js",
    "revision": "8bd7e33d049f005cc2be9977dc3869d3"
  },
  {
    "url": "assets/js/56.cb7cee52.js",
    "revision": "ff701e9c3c517be8f02a6d0d9ff05b86"
  },
  {
    "url": "assets/js/57.bdbe1198.js",
    "revision": "49dd2bbb4b49ffa01b6a44c70c5c0426"
  },
  {
    "url": "assets/js/58.e815c638.js",
    "revision": "6a61394f78e4dcecaddf073f4437f374"
  },
  {
    "url": "assets/js/59.c650a2dc.js",
    "revision": "2ac854b77244ef0ce577abf8476079a5"
  },
  {
    "url": "assets/js/6.ed981879.js",
    "revision": "d177b71d1b9b3946a8b8d4fc0e13d093"
  },
  {
    "url": "assets/js/60.cd72df15.js",
    "revision": "b3ec117382c91f7e73c872a1ed4f006e"
  },
  {
    "url": "assets/js/61.2b5021cf.js",
    "revision": "5b2c164d7e6cf5d6a0adc952ab78aa00"
  },
  {
    "url": "assets/js/62.7b109073.js",
    "revision": "8c99d22f649e17c33e27045edd9d8fc4"
  },
  {
    "url": "assets/js/63.5e6ca8a0.js",
    "revision": "cebafcc05652c774cf89b6bc40a77c79"
  },
  {
    "url": "assets/js/64.5b18c0fb.js",
    "revision": "6f0e017c5e2869476b5e02dc2548fce5"
  },
  {
    "url": "assets/js/65.cd9444ce.js",
    "revision": "895c54ce2581a006176b9eed740f3c19"
  },
  {
    "url": "assets/js/66.631aacdf.js",
    "revision": "09f20ce624603dbc68d90c9606660655"
  },
  {
    "url": "assets/js/67.7d3765f4.js",
    "revision": "787b4a44090beba522654287f7cbcdad"
  },
  {
    "url": "assets/js/68.aaef2aa8.js",
    "revision": "66d670bcdad46537b951e6ac58c9917c"
  },
  {
    "url": "assets/js/69.74b846da.js",
    "revision": "52969b41c5dc8c0eee6ea02fa619bf39"
  },
  {
    "url": "assets/js/7.37a712d8.js",
    "revision": "495b239f077350b9dbb54a150967ad0c"
  },
  {
    "url": "assets/js/70.2b4bc103.js",
    "revision": "2214963d4d4761cdd7e168f9f0494675"
  },
  {
    "url": "assets/js/71.b90e708d.js",
    "revision": "264147f30c4f48977b8dba36d7eb8e25"
  },
  {
    "url": "assets/js/72.bee358a2.js",
    "revision": "11f4656ce7c43d2cfd92fba7bf3d43c3"
  },
  {
    "url": "assets/js/73.d7e11cd8.js",
    "revision": "9d07535674ab7e0847c33bdde837d53d"
  },
  {
    "url": "assets/js/74.ca202695.js",
    "revision": "055aeaf048a50d1088860ee4240932b8"
  },
  {
    "url": "assets/js/75.ef86979d.js",
    "revision": "6e05e0a1bea46a8dce2ed43cf1bfac5f"
  },
  {
    "url": "assets/js/76.c32c3467.js",
    "revision": "26a16d86b9532e795aee3fc5158e0bb9"
  },
  {
    "url": "assets/js/77.1bff23d1.js",
    "revision": "6f51575c85e5749e43c6103689d3e5a9"
  },
  {
    "url": "assets/js/78.2ca1ec3e.js",
    "revision": "8fe7d2b4f290ac12b1bafb55473ae87f"
  },
  {
    "url": "assets/js/79.5e2533e6.js",
    "revision": "6b7cf97b4333c71fe8eeae32afff6f3e"
  },
  {
    "url": "assets/js/8.74135bcc.js",
    "revision": "9f5751da1db07136dd651fe06da01f1a"
  },
  {
    "url": "assets/js/80.64a66022.js",
    "revision": "e67d8b3fe4b7b0dab6d84275ea76922d"
  },
  {
    "url": "assets/js/81.89222204.js",
    "revision": "91e09640cc2e6e689707e65966954e86"
  },
  {
    "url": "assets/js/82.457a1565.js",
    "revision": "420b5e8ce3c404a38c2166331944b44c"
  },
  {
    "url": "assets/js/83.9a3ed986.js",
    "revision": "4c4e5c6c90c2687d7c13f532336489c4"
  },
  {
    "url": "assets/js/84.468ab8a6.js",
    "revision": "7f1b9edf8c7b4f7848ae394ee811b492"
  },
  {
    "url": "assets/js/85.76b53214.js",
    "revision": "6df364a809e5c7ccda1d730c913be09f"
  },
  {
    "url": "assets/js/86.0a82a606.js",
    "revision": "37c21475605cce524eb253605771c459"
  },
  {
    "url": "assets/js/87.27420a3d.js",
    "revision": "8c95792fb162f3e82b3a27a4696527b3"
  },
  {
    "url": "assets/js/88.7d04ab55.js",
    "revision": "d21d173d853088991e82135ec989410d"
  },
  {
    "url": "assets/js/89.f7da13d9.js",
    "revision": "7f317ff06cb6d478993cd10f8f6e1143"
  },
  {
    "url": "assets/js/9.422b8645.js",
    "revision": "3455c71086b4b499330fffb7d8a775da"
  },
  {
    "url": "assets/js/90.3f6d82c3.js",
    "revision": "98e1097660535408f0d157c5979782b0"
  },
  {
    "url": "assets/js/91.55678e1b.js",
    "revision": "31187af3cf5e12726f951600a5c5d08e"
  },
  {
    "url": "assets/js/92.a89e3969.js",
    "revision": "90ee06e4b7e5d0c81110634b0a359276"
  },
  {
    "url": "assets/js/93.774cfefb.js",
    "revision": "7cdae347ca0ef4c0ab3d1658ff0b8209"
  },
  {
    "url": "assets/js/94.80eaee43.js",
    "revision": "a83d2573f29ec6afdb21cf4618d31068"
  },
  {
    "url": "assets/js/95.dbf5aa64.js",
    "revision": "74dbff89c263fc5560b9cd81929d57ae"
  },
  {
    "url": "assets/js/96.b3097f7b.js",
    "revision": "c5fa8c95a458bfce30bdcb91b793db18"
  },
  {
    "url": "assets/js/97.1c04fd50.js",
    "revision": "afedc7e999c673e4abd4aba9a496fc72"
  },
  {
    "url": "assets/js/98.268e8f17.js",
    "revision": "425dddde5f39330981fe7b6582e6a1a9"
  },
  {
    "url": "assets/js/99.ebb7fff4.js",
    "revision": "10ec668cdc9b1187e2ae1114d9646d4d"
  },
  {
    "url": "assets/js/app.60a1d859.js",
    "revision": "33fa046425fe0bbb561d0d61d0e0e665"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "05950c918a22449e176e3a2ea4f0bfd5"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "410c95bdcc40ab9477b7b69fca3a408e"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "11f07c69ac94d90cd6b4c9323f46f94b"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "eaf93d21b684af5854862a57797ff5dc"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "bc2c40c6273a126098aa8fd7ea84ab77"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "3b684bdff56add4a0b80ee784c6c6ce0"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "e7d0c1d7eb771eb1cd96ee05079c718e"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "74a58678e27f4e7ffdd247866278d577"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "cbc2853888fba817285ee93ed519d5f6"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "4af903ee4b0752ef4692e40de79dc3aa"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "265077970345792737d84fccf629fc33"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "bdacf26bc129cfd3c1e5759bc70de003"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "aeb1b5f7b1250e6ec7f2a97f05b62f15"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "b30d0adc3acd064e812ea41aaa0d36c7"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "25f9ed4332679407b8efedc5e66502ee"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "f34d9585f525f87f95dca5a32519c54f"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "af62be3f383c3c8159dc295c51eac504"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "2d119d3571bda1719711a05e34f97663"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "550707349ff86b3bd7353be5d8194036"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "dbad72cd7146e024aa710768e6686b17"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "d9687ca80bada7ff5621ccb65fdf3067"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "e46746a712a7d4940585dc3e773433da"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "5b8118d7f0988901addea16542773766"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "0c0621640a9381f78b06398fcd39ecff"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "c4c438f7df0fd0459fe030dcd7a6a861"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "33364732bed13cdf672d577172145e7d"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "b87c8bfbe76d6db54b3e8d48f079c537"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "4e9d524284dc6451ad062a71c2b10330"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "cc8bc729bb5d8da100f745954c653cc2"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "39df140e4568d34a369a7b2126672a34"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "6fc6163a80ccc0faabc016ed210169ea"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "73b1f4ee26efa5bdd2f7542168e2817a"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "0d92ab14da1c16d66e79adc4c0351a50"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "7d64800193a34e389818da4c2dcb4971"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "e4d5498f2f8898c9c895f5dea7dc9f6c"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "23378a30058d028f5e0238b162a47bf8"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "5628512e4a83adacfc95f7010dfa0f47"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "3ef4ca9b5213ae723cd49c84e217372f"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "03bdcaa3a272be1dfe3de60346a93566"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "130a15bce3e32fb00f73893ccaa67011"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "9b86b962d447d03d8e5e5016f00efb44"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "9dfad25d4a0b903b907fa14a9fbb1d6a"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "3c6d0a328cc17fceac21d2a5fcf00411"
  },
  {
    "url": "daily/2021/05/06/index.html",
    "revision": "51908e87d7383e69c2adf2ead6fa71f0"
  },
  {
    "url": "daily/2021/05/07/index.html",
    "revision": "e8316eb292b5284afd4902a6c6e28364"
  },
  {
    "url": "daily/2021/05/08/index.html",
    "revision": "4a7e3c1bd4f1c96ab8c79fa91cfaab72"
  },
  {
    "url": "daily/2021/05/09/index.html",
    "revision": "6b5ad22a3d72ce81bf64ebcea5270258"
  },
  {
    "url": "daily/2021/05/10/index.html",
    "revision": "c95d5e637ff87774566ee356b12989e5"
  },
  {
    "url": "daily/2021/05/11/index.html",
    "revision": "659610dfc25d6a52b7d29677083a6f8e"
  },
  {
    "url": "daily/2021/05/12/index.html",
    "revision": "3180a05c3171d7e5eebb2e8840054a6b"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "153531587a78cbec7b0ef8c92fe648e2"
  },
  {
    "url": "daily/2021/05/14/index.html",
    "revision": "e18a7b074097f2e0682e33fee37c3d92"
  },
  {
    "url": "daily/2021/05/15/index.html",
    "revision": "3bcfea4debce7c4d1ef9d6b1cbaef024"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "cecb37e37ad6a4204f8484f5a58625b0"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "3f31699264bdcd5fac7c4ccdf9481312"
  },
  {
    "url": "daily/2021/05/18/index.html",
    "revision": "abd500d382c8dcc9bb8de30eaaa45764"
  },
  {
    "url": "daily/2021/05/19/index.html",
    "revision": "b9f8ea71300a91b80f2053fe58c22b38"
  },
  {
    "url": "daily/2021/05/20/index.html",
    "revision": "92a0e38086285cdf51ad4d0dcbe57c2f"
  },
  {
    "url": "daily/2021/05/21/index.html",
    "revision": "0022cffb0e9393e7ea110c0e7c99c86e"
  },
  {
    "url": "daily/2021/05/22/index.html",
    "revision": "75e80795a59be8f3d70bb08324727ce2"
  },
  {
    "url": "daily/2021/05/23/index.html",
    "revision": "962f41acf8b1c738005ec11f8e355b97"
  },
  {
    "url": "daily/2021/05/24/index.html",
    "revision": "3c864c73f6c28dae3340963465cfceed"
  },
  {
    "url": "daily/2021/05/25/index.html",
    "revision": "66d141e6cfc56051983c26084151ff40"
  },
  {
    "url": "daily/2021/05/26/index.html",
    "revision": "b2bc1aa701cbc629fe88d90b5f65406c"
  },
  {
    "url": "daily/2021/05/27/index.html",
    "revision": "8e9f248a3965a58df34691ab150534b4"
  },
  {
    "url": "daily/2021/05/28/index.html",
    "revision": "e00907e851d01896377cf9d7f7795ea0"
  },
  {
    "url": "daily/2021/05/29/index.html",
    "revision": "65059e287c1e691704884a616cfdc8b9"
  },
  {
    "url": "daily/index.html",
    "revision": "955e7fc3a89edd703a6ae174bbcdb435"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "c1a68a90c71bf7e891c99ae1c0735828"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "b12904a8dd2bc25a91f55462cee04d0f"
  },
  {
    "url": "en/about/index.html",
    "revision": "5e4366c8b81480256096e264c4ba9125"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "7d0ae1371e6064606f5b5d6412c628a0"
  },
  {
    "url": "en/index.html",
    "revision": "4f719c5a8f2f7b960951f9b79e4a6d0e"
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
    "revision": "8e8b8e42c1d42874abbac46b1d10f9e4"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "73825e66e542a26dee29887f3aa0a839"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "997617ed70e0cbdacc33630ceba20966"
  },
  {
    "url": "jp/about/index.html",
    "revision": "769134521e5bf9261ba639600f8c2c92"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "570d8c589783ce341ef15e1711bfe910"
  },
  {
    "url": "jp/index.html",
    "revision": "0e119f4f46e63e7e5c8c8be87932c987"
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
    "revision": "c8d190cba203239a087273dd005f31a1"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "673afc0b29ef18c12c97721c5ac3ba0a"
  },
  {
    "url": "kr/about/index.html",
    "revision": "0417ff44149cac0b61bec5f301f46373"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "0eff6ffe090e27b26a72e02c21b5ed12"
  },
  {
    "url": "kr/index.html",
    "revision": "974c71ece0ce4b5233f3546a6be54111"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "f3b6c25cafed8588d8a4d0b7da0fe4c8"
  },
  {
    "url": "more/music/index.html",
    "revision": "3b3a131fbe395c90db8df0826e782076"
  },
  {
    "url": "more/photo/index.html",
    "revision": "3d066ba030c15d9fc2f8b35dc0b48267"
  },
  {
    "url": "more/video/index.html",
    "revision": "f13fd84cd2ab41baf3fe40c3e247c7b5"
  },
  {
    "url": "post/index.html",
    "revision": "0b2ede947bee59dc85e5c11532791a3b"
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
