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
    "revision": "60a6ff86d16dec7cf7177a21cbb1bf76"
  },
  {
    "url": "about/comment/index.html",
    "revision": "84219d489997dc1c850e08d89c591c63"
  },
  {
    "url": "about/contact/index.html",
    "revision": "414c00e8b1729118dfbc2d7b787485f7"
  },
  {
    "url": "about/index.html",
    "revision": "12f4c1d61a4c4cd64d0e9667b27548e0"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "d278a5af19dcc89a5147e45f627c087d"
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
    "url": "assets/js/app.725662a3.js",
    "revision": "0cc50986b01ce92676bf33cc9dfde090"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "a739c9a22f74224700fbfddc811b7700"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "515c7d2e49f2aa14fd41750baccd1b20"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "17b1ed6510550ce9359cdd86c74e0d05"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "1957d2b78c8e601b37b8e4ab6b26c78c"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "f42d7ff934edc67281d92377093555d3"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "7d81d000f9768f662a9f36132fb75e53"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "22ac836982a0eb72a130a560a87d1970"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "4e897548f78c85569748638525fd95c5"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "88f4afa9aaf06d78f1eade4c3fd5ac9f"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "848c608ed2bc936be77d5e4a8970b4b2"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "9c6d5583e78b30c53a8b628820e96003"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "b1a5cab42f26e896a27bca291610af70"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "aea205361db49e5d395317b8d23910d9"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "6ea3c4f2d5740a035f4d61c9bb456532"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "c69f04f18e952e5e084a78c48b7097d5"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "36c2d016f54d2315d60e1233c8529a2a"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "515b307e843a9aaf3362f95a969b1e58"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "cca075c224d724c6074e5931249158fa"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "1c1a964848dc1acac489dac55f168796"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "20ece3a2c9fed3a3a2421700b0b8f08c"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "30634289e0727f0d26b5405cd0e90159"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "15f047c377906eab8519807154776253"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "dc1e94d3251a0ceddbb2184893f9a0ad"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "81d43ff4e92ee1d4bbd3dfb3a8e44efd"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "1b7d42304555e98030220c9bdbab286a"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "9f2d80bf6a1c68e5bc7112bf44eac7ef"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "c9aed3e254d402412574ea3de7d00d78"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "d1c849d847ff18249fd4caac24e730f1"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "f1a4860d12804027d897158b062221cb"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "2c4306e9dc82cd8b60b4cffe8e9bd560"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "4902b02a775c6535cbecbab6916050f3"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "f99a9f004da18594866bf8f99eec6572"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "8b336513c1b090ffb93387aee97dda56"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "f81484a3ec2c4be6dbd494d0747befae"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "6e28d3771ce68d0dd45033b675b426fe"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "855c72b078cb1d584f689c6dfe3f9046"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "6ea04adcf300999aabb76068d1a54380"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "651ed01378ab09bf6043550f35d58ffc"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "0abb8e6ed1a80300b5f4ef7d9fccd621"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "fb82eaa72aca56b3ec1ff37b920135d1"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "1aca8ef78156f5dbf21b833aa3618a17"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "9e3a96cb0c1dde0c8da78a24005f90bc"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "4258d2beee24bd0e0754ad1564c2dff1"
  },
  {
    "url": "daily/2021/05/06/index.html",
    "revision": "67cdc5c337c6dbfe3909a1c43e2d6be5"
  },
  {
    "url": "daily/2021/05/07/index.html",
    "revision": "7543f61c879450f84d23e14cd6e96303"
  },
  {
    "url": "daily/2021/05/08/index.html",
    "revision": "7c9ff7f588e91a9162726002e7fdc5e0"
  },
  {
    "url": "daily/2021/05/09/index.html",
    "revision": "5074d8de902c0e375b7dd107ad2e9012"
  },
  {
    "url": "daily/2021/05/10/index.html",
    "revision": "62f05369e0be1c5da2bb1a2ad0d1b31f"
  },
  {
    "url": "daily/2021/05/11/index.html",
    "revision": "19c02c588db4e6352dec2b82366a5084"
  },
  {
    "url": "daily/2021/05/12/index.html",
    "revision": "4aacc1bbb7e150e626e8a70133a43255"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "6c476d78988309ea976cf328cee72133"
  },
  {
    "url": "daily/2021/05/14/index.html",
    "revision": "14f0ba56213bc65d83bcc08a164ffdb5"
  },
  {
    "url": "daily/2021/05/15/index.html",
    "revision": "ce7e5b5abda717b6135bcd17b2379ec8"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "66a07ab858012906ce145514f8dacdd8"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "04795d2ca55c86d700cc761cfce3997f"
  },
  {
    "url": "daily/2021/05/18/index.html",
    "revision": "16d8d7dbe5702e4f1f1c731eb820dfbb"
  },
  {
    "url": "daily/2021/05/19/index.html",
    "revision": "c8394ad222b7030a200e2bba06be162b"
  },
  {
    "url": "daily/2021/05/20/index.html",
    "revision": "23e334d59ad7b03b3a3b9dc1aeccedab"
  },
  {
    "url": "daily/2021/05/21/index.html",
    "revision": "192260e897ae8349edcd7dbdacd55675"
  },
  {
    "url": "daily/2021/05/22/index.html",
    "revision": "eba0bcd286eb42f58720b08f42f9086a"
  },
  {
    "url": "daily/2021/05/23/index.html",
    "revision": "d85b852b816f104dde762349c34efcdd"
  },
  {
    "url": "daily/2021/05/24/index.html",
    "revision": "fbf52df98a73e09f94120364c9631fb7"
  },
  {
    "url": "daily/2021/05/25/index.html",
    "revision": "f02efa6f246d2c4d8c206e4c4121e5c3"
  },
  {
    "url": "daily/2021/05/26/index.html",
    "revision": "77c9344a5ede49994f0640a6cb28eb9f"
  },
  {
    "url": "daily/2021/05/27/index.html",
    "revision": "48b65fa106f9f3f0c92c063c6646462c"
  },
  {
    "url": "daily/2021/05/28/index.html",
    "revision": "440a998a29ab3274dffef1f93a530ac1"
  },
  {
    "url": "daily/2021/05/29/index.html",
    "revision": "6d47d733fb0061a82b745aa335458291"
  },
  {
    "url": "daily/index.html",
    "revision": "8420f4278e7454cc91f0743c3d5f844e"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "4aa4b15a30b2b61e31673e634fb18c1c"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "b91cc03590e5b000ca332860340fccaf"
  },
  {
    "url": "en/about/index.html",
    "revision": "3cc8329c81633d09d85d584d5ad12c3d"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "7cacd0b1a0e5aaa8d22ef14037b35574"
  },
  {
    "url": "en/index.html",
    "revision": "892e15ee03c09ef20824dd96c516510b"
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
    "revision": "d81b52c4eff57ce50e338e5f9f443a5e"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "817c3bbe24918b58b40e607e9a48311a"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "f28f02d61099520a6beda6744fd4932d"
  },
  {
    "url": "jp/about/index.html",
    "revision": "520a117e281f27769ecd6dfe06ff0712"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "acf9a167466cf16fe5131e6b79a493a9"
  },
  {
    "url": "jp/index.html",
    "revision": "fbf011bca8e33491f33051320fd34f03"
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
    "revision": "5a98e412af59f501fcc5c6171305db78"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "e569a58bdcf772de03c5fd4527e08ec5"
  },
  {
    "url": "kr/about/index.html",
    "revision": "e38743a124ca588abd635298c86ce48b"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "08ba78caeca6139ff944eae5b3d4adb8"
  },
  {
    "url": "kr/index.html",
    "revision": "0818048e2108560c2e4fbc95bd4e95f7"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "c73c2090f7aea01f170a2c53d288e537"
  },
  {
    "url": "more/music/index.html",
    "revision": "b52c7086b3ab708a27a047f3f5ff00ec"
  },
  {
    "url": "more/photo/index.html",
    "revision": "cfb5ad66a7da5223baaa821c23c7b189"
  },
  {
    "url": "more/video/index.html",
    "revision": "d31a9aa797aafa84a913e8a39c45dfb0"
  },
  {
    "url": "post/index.html",
    "revision": "a483a3a47b4be5c73fbb0425cafccf91"
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
