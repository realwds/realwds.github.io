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
    "revision": "fa45912274dee9a9b16e24b60e93161b"
  },
  {
    "url": "about/comment/index.html",
    "revision": "63309b19342ae975eafe81ec9561001e"
  },
  {
    "url": "about/contact/index.html",
    "revision": "1094cfb354096660f05c27b28b69f2cd"
  },
  {
    "url": "about/index.html",
    "revision": "846c7fe585b6ccfe7a27fa90ef3bd06c"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "3bce12762a4f05df42afb2664a8ccb46"
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
    "url": "assets/js/105.32b017c0.js",
    "revision": "e74a2d1c659304335e7d865b4e16dfd1"
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
    "url": "assets/js/app.af72f953.js",
    "revision": "2c1ba629df657c226342d32c28e0c346"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "97ccb6b7de0117046214d69fe478120e"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "65cbdcf697eb4fb8e68a8fd6e499f064"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "e6c7cf09f5e94166c6d12204cc7797ca"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "b359a8bdc9b19e56fe738ac2512b8b24"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "5256c138c02915fe2f7ffb8452b11194"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "c8d7000a5c0ee93999c2b0c90b995b7e"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "6412f6e113906d420ad3544e183c9da7"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "dc7afa9d96985cef951f92a9b5199909"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "66fc2491707d43576809b49b5e8e4e56"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "2560681c0b4b4004f257b776924e9d5e"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "62bf4fcd009622c92bf0e38b2ef130cf"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "48264b8aa85c37cef6ef9400d6a0610b"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "4c303ac592be240a302376346245e674"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "9a4601eaadd351026b37bb1223ebf21d"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "2c41b4a52f771000ba193b1a8202a7b4"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "197cbe4edb7c92a2ecdacf55f8ae3c6a"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "24894f0cb217471ac7caa816b82784fb"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "40451c10ab28169f2b02dbeed358dde4"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "eb17bbeaf737e076c1f97a9e35c78e70"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "391e711009bdab0e432c31c9d35641bc"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "6826c4158363afba7794fd36b70d5826"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "768a725cf1e52d82a7718eb5241fb87a"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "98f7d5c873366386a605b1276806ae81"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "d3f473f9c338c4b751d19ed2c7254197"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "c8e8689edf8a3b08637417b7284c1d66"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "c51a9c61be58797ecdb3b33dac1c5431"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "c9aa8545b750acfe7c4f60628ee86485"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "d9b7e733d723e9df704b5e634bae4a00"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "d4790f486bce8839469a4c7db7daa48d"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "0d4e3e5d1af6ca323d24e5ec52456e47"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "026b2c154210a5ce8b1eccd856c94f99"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "f2d80ede9f53ae323b07adfbd2ed7918"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "a8075c2c9d9cbd0ad0143bb36aa3e167"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "e1a7ae53b001e5ae6faf272d7d57aa84"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "e1bfc42e5667d45466b387e14d9e5a37"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "74374d8388ddb1bc7108c6c0d3694d19"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "61d914807455a8b8dc3defafb30d45d0"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "631543850a44d43150cef6760fff578a"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "181b345db93da4197c584a37f7951eea"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "c0c8936b91bc10bde191b7061826a7d6"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "49b780553f95cb8d7604d93723df6337"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "8eb6252d32d103497ba447defc1b6fac"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "d586c5170757f37bc64bcb9a40097a78"
  },
  {
    "url": "daily/2021/05/06/index.html",
    "revision": "07b2f472692393d15bd469f68de9f8e9"
  },
  {
    "url": "daily/2021/05/07/index.html",
    "revision": "60d096c3dcfd86a2344a33ab9350a273"
  },
  {
    "url": "daily/2021/05/08/index.html",
    "revision": "243085f92addf52974c99e0cf28fb4ff"
  },
  {
    "url": "daily/2021/05/09/index.html",
    "revision": "ef8786986ee0510116152878565e465d"
  },
  {
    "url": "daily/2021/05/10/index.html",
    "revision": "12fd390e8f032de6a11f6bbcf417dbba"
  },
  {
    "url": "daily/2021/05/11/index.html",
    "revision": "f272c5e48887ba2318203c423b7edea0"
  },
  {
    "url": "daily/2021/05/12/index.html",
    "revision": "b8dea1eb67f3b95ddfd10c79de922989"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "b1e43562ca2ebf5d7f87beac105b11dd"
  },
  {
    "url": "daily/2021/05/14/index.html",
    "revision": "3966a6d03cc0aa57e3d92968c481a801"
  },
  {
    "url": "daily/2021/05/15/index.html",
    "revision": "33886262362a8b0d61f7d5cf2279400f"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "9f653b3ff949a63109e9cf21bb2d3d7c"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "676d29e0e4e6f1838cc90d97b2c36c31"
  },
  {
    "url": "daily/2021/05/18/index.html",
    "revision": "8b5954c980c923a66d53555b336e01a0"
  },
  {
    "url": "daily/2021/05/19/index.html",
    "revision": "88a0fa67d6c9a0ae2292199a265dc07e"
  },
  {
    "url": "daily/2021/05/20/index.html",
    "revision": "c59c81d93c078648e60d57d62cf2b93f"
  },
  {
    "url": "daily/2021/05/21/index.html",
    "revision": "f723aad75e4a452b62fd043ecd8d478a"
  },
  {
    "url": "daily/2021/05/22/index.html",
    "revision": "19aaed9dee9881f9975be5a5d1506052"
  },
  {
    "url": "daily/2021/05/23/index.html",
    "revision": "094b06949d211bd3099fc98fc7e1b470"
  },
  {
    "url": "daily/2021/05/24/index.html",
    "revision": "de8c9edd35ffea53bfc37f32c03ed052"
  },
  {
    "url": "daily/2021/05/25/index.html",
    "revision": "eafb5fe13a8c8f2d161af72bc34870a6"
  },
  {
    "url": "daily/2021/05/26/index.html",
    "revision": "ce0a0531142b09bd39500e7053847b44"
  },
  {
    "url": "daily/2021/05/27/index.html",
    "revision": "5904388641b8f56f08c22a0310eaded9"
  },
  {
    "url": "daily/2021/05/28/index.html",
    "revision": "a5a47d1b53d3694e54464fdbd630a614"
  },
  {
    "url": "daily/2021/05/29/index.html",
    "revision": "487b15dbe943b91c397a206ca18559c4"
  },
  {
    "url": "daily/index.html",
    "revision": "4471c7029939e8123024c7d389b135f1"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "866723ef751ef7d79d476aad876fbd34"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "864728ee14de9099f8e1b4468c5c46e5"
  },
  {
    "url": "en/about/index.html",
    "revision": "742d94b6255ac1214ce81445f43af0ca"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "4186d6c63a3e4779ba9d2508e67b0d18"
  },
  {
    "url": "en/index.html",
    "revision": "69299f60156d188072a4ce524d47d396"
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
    "revision": "6c24b4f02ff80ccfe2c499bce24950d6"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "5131342e3f3c57ac19304783d49ea2ea"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "08a0b9791ae7daf2d94ed23090dc84a6"
  },
  {
    "url": "jp/about/index.html",
    "revision": "f1dd3e3763926233736232e93aced43b"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "48446467bd76bccb540cb98a8003408f"
  },
  {
    "url": "jp/index.html",
    "revision": "3af986e60d056e632089501f6598416d"
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
    "revision": "8571fbd5a8b4d3b29861bcb1b9b093ca"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "9fc9cf5b4ea85c3d9e596036df43a2a3"
  },
  {
    "url": "kr/about/index.html",
    "revision": "5727d71eca40156cc5b3eb57a3722440"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "6db1b7ca48ecf0485f7245bb5f0fe176"
  },
  {
    "url": "kr/index.html",
    "revision": "0b43c626df88bd12f283e87ff6ccef54"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "e44ec24adfa340744064c27963c66265"
  },
  {
    "url": "more/music/index.html",
    "revision": "623e3952c791f802c6f1ff30460d1ba1"
  },
  {
    "url": "more/photo/index.html",
    "revision": "15b7271fc6ec96d4919dea9e7e46df0c"
  },
  {
    "url": "more/video/index.html",
    "revision": "3bd9a8015829d4d0cb970f1e1a407fa3"
  },
  {
    "url": "post/index.html",
    "revision": "a3584f7f7dfd1f4b705633ebc86fdaf2"
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
