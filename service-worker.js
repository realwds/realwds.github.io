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
    "revision": "38835b7a96dee9e02f9256e39420dc03"
  },
  {
    "url": "about/comment/index.html",
    "revision": "16520bde25562798f4548215003743ea"
  },
  {
    "url": "about/contact/index.html",
    "revision": "f6e9b38515632da92a45d0b586c0d127"
  },
  {
    "url": "about/index.html",
    "revision": "416ac26cb7865b035d80958f3a353c2b"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "da7ac6014268e727f4a804c4d0aebdae"
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
    "url": "assets/js/105.31ecb602.js",
    "revision": "63d850adf2a4f5ac0c68dc0d3bb0e75a"
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
    "url": "assets/js/28.c82ef95a.js",
    "revision": "9b49ca23fad02adad9d9410f7e28d4f5"
  },
  {
    "url": "assets/js/29.74a3b9e3.js",
    "revision": "415200e00ec61cb4ad1106072ddc6dfe"
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
    "url": "assets/js/32.9255d24e.js",
    "revision": "9452fd772400f670a01a745d1ba59174"
  },
  {
    "url": "assets/js/33.ede555ca.js",
    "revision": "b3472f34a348090ca02c66bfaaa0e6df"
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
    "url": "assets/js/42.f773530c.js",
    "revision": "1801ca7f137e381c67d291fdf393881f"
  },
  {
    "url": "assets/js/43.0c64cb6c.js",
    "revision": "49985d9d7764586ca85a3a4fbb7acfed"
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
    "url": "assets/js/49.276768e8.js",
    "revision": "7109c998fd332c5f8512a5f62359c62c"
  },
  {
    "url": "assets/js/5.3de62106.js",
    "revision": "549b488205657f81c712423787bb18af"
  },
  {
    "url": "assets/js/50.1375595d.js",
    "revision": "f565a725cee2a413a8ea7e705d3f091a"
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
    "url": "assets/js/64.3c9bb62c.js",
    "revision": "a8dd7892bb35c80b8cc708848f8cd0d8"
  },
  {
    "url": "assets/js/65.97f37c45.js",
    "revision": "5033c5b552f4a3545753621fcf74513e"
  },
  {
    "url": "assets/js/66.5245d998.js",
    "revision": "6e257052bf108e90d897c469a70b086e"
  },
  {
    "url": "assets/js/67.79feb823.js",
    "revision": "18496e3485ef46a88995f869788126e5"
  },
  {
    "url": "assets/js/68.49dd5cc1.js",
    "revision": "1e5e146bef4cfb2f92c96ed94dddc64e"
  },
  {
    "url": "assets/js/69.9db4d3ed.js",
    "revision": "c7f63149996494bd161a26b678a44948"
  },
  {
    "url": "assets/js/7.37a712d8.js",
    "revision": "495b239f077350b9dbb54a150967ad0c"
  },
  {
    "url": "assets/js/70.594aedca.js",
    "revision": "3aa2d31649280d2ce9bb9f92fb8d788f"
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
    "url": "assets/js/84.fb7ce94f.js",
    "revision": "0447cf39b348275cb5200249637cf1db"
  },
  {
    "url": "assets/js/85.25c8bbba.js",
    "revision": "8d1d549893b1985c9183d3c4ea57d7f7"
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
    "url": "assets/js/app.a0f27ee9.js",
    "revision": "88d6245685576be4928fbc3505861fc3"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "6b8f927b1a391b0269928e55d626a143"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "82ac7695f6595dd762963af1c821ddb5"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "2b82e8d33a2a80d4744fe0d40a4c2a7f"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "389f7d4f207aa4a589ab83329ee8ce55"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "2e7d30481d2735dae54f645c200f5f1e"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "dda564ee195769c6f5a9fc39c1509504"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "cbe231557b7ec2f0c500be94240e8fa4"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "5e09a60df4ec4b4174ff769fc68b7169"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "1f17872461f26226370ebb6c3517e57c"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "b73258829f24f49da0a6c8fe69ffef4b"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "b7b49b9ea7ef2a1d52bcb2972b4c463d"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "2d0a52aade2e575a5ef1e0722ade2a33"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "6ffc8297d40c04476bd11a7cd904e5ae"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "20f6bc6dea233a0167794d8355647db7"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "142bf7ba22e5086398a4848da105a6fd"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "029073896647b7153b4a9cef466d817b"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "b3c45918c19f43115668b6aa912a7956"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "cd77dac8be013320755ea72e151bfe4c"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "37f1b54c47bac2b4b5db5fe37e7e9b0d"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "7e0784f23d4ac2b7f88fa45d8ff60bcd"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "c9fc29eefdc4db49c4b47d1d167fabe8"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "7f2be3bc66af2d41addef0d6347dd79b"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "c3620aa5d86d3a587f16714b785e1db6"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "ba54236e88d7fc3e5460e6e0da0baba2"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "5667f45000da972f15fe6576b6457b6a"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "2f7a3a12e58707d50af34e7381d4aee8"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "77308c110c749141a819fa8789ac26a9"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "f30d49399f8cd6eccfc93a035e9eb86d"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "42c8d7c14c5ce9746e02b6e3c1868ad5"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "5b0ee1275447460ec416a19ea3a3db48"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "3a53427215f1258686fdd0cc41c6b5c9"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "4dc52970c03a02a8384aee3b507c55c5"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "45109d4c2ed50af1f4e38548d044033c"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "6d9e78904ca94b35d43576ddb42d11f7"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "0dff7969a6e9d68e008190a74dfea70d"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "4cf8f62193cf086fc954d7b3e069114b"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "612fcb02b4f50ff3561bbaf9684a1855"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "a52336a80feb03b4c92601ddf55c6b2b"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "e15ccd17ff3aae1cca4d9b271fda834a"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "f81127a75e8d877dd3ad5da106d559c2"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "e1f1498fb97e8b76bf1ad27b2514d959"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "895a925e72f326ede9b2ce5dca4bccc4"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "40a1cd5ffb7e4bf43cd62ff7229dd3ee"
  },
  {
    "url": "daily/2021/05/06/index.html",
    "revision": "fcfb3e6f16fca12e28b2202874ecf1ef"
  },
  {
    "url": "daily/2021/05/07/index.html",
    "revision": "5aba9e35faaa251e4dba72e4d414f792"
  },
  {
    "url": "daily/2021/05/08/index.html",
    "revision": "9d6e0d177c4dca235009b674118aa50d"
  },
  {
    "url": "daily/2021/05/09/index.html",
    "revision": "b08f540787ed81729a1cc6f08355dc38"
  },
  {
    "url": "daily/2021/05/10/index.html",
    "revision": "210cb43ea7977da7d4f604ec1005b0b1"
  },
  {
    "url": "daily/2021/05/11/index.html",
    "revision": "945f15d5b5cb41e0c04335d32ce929c1"
  },
  {
    "url": "daily/2021/05/12/index.html",
    "revision": "31d6a060b9be3ffcc3aa396e80ced3a6"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "7ea0537cbbd5bb53c86ccd47a119edcf"
  },
  {
    "url": "daily/2021/05/14/index.html",
    "revision": "6e5eeadf9364e98b7c7a7b72fc290dee"
  },
  {
    "url": "daily/2021/05/15/index.html",
    "revision": "f8c569d606035f50361fcd0475e10a64"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "221347cca22bbda11f37b4a316df22ff"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "c1f0ffdca8d938c7e848f24d9db1681f"
  },
  {
    "url": "daily/2021/05/18/index.html",
    "revision": "4d75d29d85421621e037d74c9b3543ef"
  },
  {
    "url": "daily/2021/05/19/index.html",
    "revision": "371a8e6f3a1e0be8ce0fbccab97a3cc8"
  },
  {
    "url": "daily/2021/05/20/index.html",
    "revision": "34aede0cae1cee3c044e9bcd5491948c"
  },
  {
    "url": "daily/2021/05/21/index.html",
    "revision": "576d03bb90436b2ec98af0688468f552"
  },
  {
    "url": "daily/2021/05/22/index.html",
    "revision": "b217be69ada5c27259127a567b9ea29d"
  },
  {
    "url": "daily/2021/05/23/index.html",
    "revision": "08d7ce69168ad80a7c08529640b1921a"
  },
  {
    "url": "daily/2021/05/24/index.html",
    "revision": "5eb1be9d8d013d1fa0d362a8b0b1b38e"
  },
  {
    "url": "daily/2021/05/25/index.html",
    "revision": "c5cb99ef218e48b3f86784734b5eebcc"
  },
  {
    "url": "daily/2021/05/26/index.html",
    "revision": "29730d14102e3ab6e580ec7df8cd6fb3"
  },
  {
    "url": "daily/2021/05/27/index.html",
    "revision": "503be2a8af1df4eb22f48f9f3efc9698"
  },
  {
    "url": "daily/2021/05/28/index.html",
    "revision": "4c7778f67f5a6c9acbad9f9d5cf00168"
  },
  {
    "url": "daily/2021/05/29/index.html",
    "revision": "1aff9c14e983d726e811b58b2a47941f"
  },
  {
    "url": "daily/index.html",
    "revision": "5a1f7955b29aa4553d2a7f14328110f6"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "426020a41dfd2b2d145b99ff52a93867"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "1944bfe6f4501f95c58dc7f7d1e71dca"
  },
  {
    "url": "en/about/index.html",
    "revision": "8c41e9e85fc69c3312680bc47a408049"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "7caada638462f269e23b135340da5f20"
  },
  {
    "url": "en/index.html",
    "revision": "5e82a666cdd2bdc75767d6fad481ad24"
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
    "revision": "229c3f32f75a2aa67dd22370f21d3535"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "114e2fc5ac715975357195b2dff698c2"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "73af726365eb27ce1547aadf22eb9bed"
  },
  {
    "url": "jp/about/index.html",
    "revision": "e2024d39cdbe0b8b86a2193d16dabe86"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "cff2a9afba698e79703b4e0e0a2e2558"
  },
  {
    "url": "jp/index.html",
    "revision": "d3e8389c96133ba84a53239199cabf7d"
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
    "revision": "17868abd87eba218c9d736aba5feac46"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "6ca8bb0afaf22ddff68db47a52fc6afc"
  },
  {
    "url": "kr/about/index.html",
    "revision": "4051a6e4a5a97cb1b0e23983a04076b0"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "f778ab15b4174d8d444ffc58afe24340"
  },
  {
    "url": "kr/index.html",
    "revision": "7c4d45536a91947e2646f178bbd6b2e3"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "3030f263a931929a89583aaf15f7af71"
  },
  {
    "url": "more/music/index.html",
    "revision": "edf765e02211850f95b101c23d7ded94"
  },
  {
    "url": "more/photo/index.html",
    "revision": "2bcda3c2c6a090595b5f1cdd4b5663a2"
  },
  {
    "url": "more/video/index.html",
    "revision": "93e9833a6d44812eaea789bfc317c6ca"
  },
  {
    "url": "post/index.html",
    "revision": "4d063bb8019249b30ee3f3476f533933"
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
