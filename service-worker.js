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
    "revision": "5f0a846a49580348c142814c46820057"
  },
  {
    "url": "archives/index.html",
    "revision": "58d1a5c49aad75a00de0426c485f782f"
  },
  {
    "url": "assets/css/0.styles.319090ef.css",
    "revision": "64f92c6add8e8961fb849160f09f50f7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6345401a.js",
    "revision": "2c42dc50e90cdae46b1155b0cf294817"
  },
  {
    "url": "assets/js/11.fb91a4a4.js",
    "revision": "e86e8e1dbc5bff448fce74224b0f7e27"
  },
  {
    "url": "assets/js/12.681dc699.js",
    "revision": "cd79879116dfbe42dbda80585e38eda1"
  },
  {
    "url": "assets/js/13.43327230.js",
    "revision": "8f06112354b87d4a0604adbe4da78798"
  },
  {
    "url": "assets/js/14.1a6bed41.js",
    "revision": "e528e94413677d889551519a307d195c"
  },
  {
    "url": "assets/js/15.2138364c.js",
    "revision": "21003915a9d3b1fc4280e01038e3cbf8"
  },
  {
    "url": "assets/js/16.0adfb76a.js",
    "revision": "8bf9ed2d15705da17f9da38ba06ff6df"
  },
  {
    "url": "assets/js/17.11bb052e.js",
    "revision": "e10dea945493803e204df459224a5243"
  },
  {
    "url": "assets/js/18.9eb8e282.js",
    "revision": "48e90b4b51bf4279dbb2f96c344616ba"
  },
  {
    "url": "assets/js/19.b68a325a.js",
    "revision": "856161d651e92e9b7d003afb451f3d46"
  },
  {
    "url": "assets/js/2.7a48ace5.js",
    "revision": "fce95b24bab79b337ee9d10f5e9c1d9c"
  },
  {
    "url": "assets/js/20.334c8fe1.js",
    "revision": "4a479dbfd149ac75d2afae6d667b4061"
  },
  {
    "url": "assets/js/21.046e3818.js",
    "revision": "8345e7fb2b9c06edcdcbee263b92377c"
  },
  {
    "url": "assets/js/22.9a067ad2.js",
    "revision": "3614f20b8df9101b4b45e3dca606c09c"
  },
  {
    "url": "assets/js/23.f99793f0.js",
    "revision": "0413de90e6ba7492188ed70de2e2fb8f"
  },
  {
    "url": "assets/js/24.86aa4418.js",
    "revision": "136841db043bbb215bb4855a084918a2"
  },
  {
    "url": "assets/js/25.89b2ef66.js",
    "revision": "1539336a087a90165219513af064fc72"
  },
  {
    "url": "assets/js/26.b5525f22.js",
    "revision": "32f16609fc3eee1ea9526dce60dd6dfc"
  },
  {
    "url": "assets/js/27.36759183.js",
    "revision": "03e771200578bce7987b102486f7571a"
  },
  {
    "url": "assets/js/28.2a728e8b.js",
    "revision": "d38e01876524c8a7ee23ba4d016b01dc"
  },
  {
    "url": "assets/js/29.20c979f0.js",
    "revision": "a83c5876d28b2b2a7f6ee60637cd2dcb"
  },
  {
    "url": "assets/js/3.10ffaac2.js",
    "revision": "27ea4e50fd3330020c6221f9e6d2838b"
  },
  {
    "url": "assets/js/30.a0e41d86.js",
    "revision": "36edb5d6d27138ced4698a05aaf31962"
  },
  {
    "url": "assets/js/31.a2c6113e.js",
    "revision": "8f987963701b6efee1098cf4976f3c9a"
  },
  {
    "url": "assets/js/32.a0a87075.js",
    "revision": "1c712ce2bb3974752642c2c7e14195af"
  },
  {
    "url": "assets/js/33.6da658c1.js",
    "revision": "72a7080e2950b648df6ac018ee64e9a3"
  },
  {
    "url": "assets/js/34.2682d037.js",
    "revision": "21415328eb69bacf8c7abd951bf671cf"
  },
  {
    "url": "assets/js/35.dbf4d333.js",
    "revision": "2d56fbded049fe133d1c0d6f6c1d79b2"
  },
  {
    "url": "assets/js/36.34e9dca3.js",
    "revision": "2d31109626c0c63a99f17a6980b3abca"
  },
  {
    "url": "assets/js/37.506feb92.js",
    "revision": "6530b6931596e6543164b4a56cf41963"
  },
  {
    "url": "assets/js/38.5a987783.js",
    "revision": "decc4d80184dfcdce50fe4247252c192"
  },
  {
    "url": "assets/js/39.ba54f5e1.js",
    "revision": "c154f8ea4aaa6b0a45703da7e5b497d8"
  },
  {
    "url": "assets/js/4.625e0adb.js",
    "revision": "7b40d06e0926170b9f00974b6b956f5c"
  },
  {
    "url": "assets/js/40.bd7586bd.js",
    "revision": "0b1499b090c555ad3fec5fdc7046275e"
  },
  {
    "url": "assets/js/41.4d4ec93d.js",
    "revision": "4e2d464b465d3154dfd3d129e70e5681"
  },
  {
    "url": "assets/js/42.baa0a8e5.js",
    "revision": "32f81316450fd8c428270365168bb1c0"
  },
  {
    "url": "assets/js/43.052cf618.js",
    "revision": "9a587b02e3b7746e21c82478aee97ca0"
  },
  {
    "url": "assets/js/44.c063924c.js",
    "revision": "0113291a87a2f9cb51d7160313292c25"
  },
  {
    "url": "assets/js/45.b6ed0492.js",
    "revision": "5bbcffbb19f2740c95dd1ee26756fbfd"
  },
  {
    "url": "assets/js/46.1259c404.js",
    "revision": "2f731211989efbd61724223fb1e77ea9"
  },
  {
    "url": "assets/js/47.97c80686.js",
    "revision": "24caaafda49060ae010e614d68c1f36c"
  },
  {
    "url": "assets/js/48.962b96d9.js",
    "revision": "6ef4bda3f4b624823ec4b0954d5b0513"
  },
  {
    "url": "assets/js/49.465d999d.js",
    "revision": "23306d28d90590e50c27fdcd4d3d06b8"
  },
  {
    "url": "assets/js/5.4919d1f6.js",
    "revision": "f68eb9bb44989f59fbf27e1e67eba8c4"
  },
  {
    "url": "assets/js/50.2dea7997.js",
    "revision": "7ab00bfaa04ed0b2cda3723393bb8305"
  },
  {
    "url": "assets/js/51.9ca87148.js",
    "revision": "8b0b21aa65c7fbfbec04f4186871b20a"
  },
  {
    "url": "assets/js/52.7aebd57d.js",
    "revision": "834511e55481c3f1f9321043f9b28c99"
  },
  {
    "url": "assets/js/53.9f814e3a.js",
    "revision": "19da56059c13ecb4c123a202bb8c98ed"
  },
  {
    "url": "assets/js/54.ae5170ff.js",
    "revision": "b6bd569455b117effc72973792a1c109"
  },
  {
    "url": "assets/js/55.960f9974.js",
    "revision": "398ebf8eb7b6423d8b7303e3a87d5710"
  },
  {
    "url": "assets/js/56.b40fb067.js",
    "revision": "501019935a0b8aab014849105f9e83c1"
  },
  {
    "url": "assets/js/57.d4af787e.js",
    "revision": "76878ee27b90dbe944f31e7a4f1ad429"
  },
  {
    "url": "assets/js/58.d626d7e8.js",
    "revision": "d3705b5015cf3d85789f7626e68099cd"
  },
  {
    "url": "assets/js/59.950d8ec2.js",
    "revision": "e116473fc30d615b86f9fc16b70e5472"
  },
  {
    "url": "assets/js/6.fa976840.js",
    "revision": "c015beb8795f22fe175de0d1dbd58f86"
  },
  {
    "url": "assets/js/60.feb50d0a.js",
    "revision": "c099d5ea1722598efea2edfa9c5642b6"
  },
  {
    "url": "assets/js/61.b7ab3b06.js",
    "revision": "20e94f5e4879207f085f304a1f88cc22"
  },
  {
    "url": "assets/js/62.5bbd3b01.js",
    "revision": "68398bdbe360908aa5d8c36e5043004a"
  },
  {
    "url": "assets/js/63.22d330c1.js",
    "revision": "0a0d4e686ac241ef4d54019da4400cd3"
  },
  {
    "url": "assets/js/64.eba2387f.js",
    "revision": "80f092aa305cddb59298b9932bde85fb"
  },
  {
    "url": "assets/js/65.30dff955.js",
    "revision": "cb79d8c6714ce4bd0526c937d3dd4dc9"
  },
  {
    "url": "assets/js/66.ce784be1.js",
    "revision": "049c881e296626b41b7e2b6f6ea5a330"
  },
  {
    "url": "assets/js/67.15bacbb6.js",
    "revision": "1007e7220016e1a921c66ccd516c0049"
  },
  {
    "url": "assets/js/68.98b5d62a.js",
    "revision": "5450c7cc69c111748706e087817939ac"
  },
  {
    "url": "assets/js/69.807738ac.js",
    "revision": "73f7be5be740c2c1b7fea7c9a32d6858"
  },
  {
    "url": "assets/js/7.e0cad747.js",
    "revision": "9dc0888d894f6cda793b231e8f26c0ba"
  },
  {
    "url": "assets/js/70.792ce79e.js",
    "revision": "3a483f1d7b60a6a024f86404d956786f"
  },
  {
    "url": "assets/js/71.f365c619.js",
    "revision": "40ed1a3d99d1b5a776eca9d111e3f6a0"
  },
  {
    "url": "assets/js/72.cbdf5e86.js",
    "revision": "aab2773a49106baa34c5d9dd28f91ede"
  },
  {
    "url": "assets/js/73.2ca6ed2c.js",
    "revision": "28f9542f9905f072533c0db9f9e2ae41"
  },
  {
    "url": "assets/js/74.0a1f7e11.js",
    "revision": "7b250a0d16cadfac4c856811e804157a"
  },
  {
    "url": "assets/js/75.220d89d3.js",
    "revision": "5072b192c6ce672867769a144d91ec38"
  },
  {
    "url": "assets/js/8.6e7ca087.js",
    "revision": "05b46f9bc3569d7ad827cb6beb3e6133"
  },
  {
    "url": "assets/js/9.04e82f71.js",
    "revision": "cfc486530f0308aab961a067ee9b4d22"
  },
  {
    "url": "assets/js/app.5a713d77.js",
    "revision": "e5a6fb4f27e542b995d6bee0267ffaff"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "25becea686d36d8ff3b0133c65a901f8"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "11cc0878a9c1967fd58df2acb675dfae"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "230e5350b7536d7d12e8cdffa244819d"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "d48586bd5d738c5602c9ddb5e63d5a99"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "486583f9b9384d5ac713065b310236aa"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "2c790d2b8a564b54c251da3aa8569d64"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "78fde3c0ef27fb9cea6ab84dc79eaaa9"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "72b20091be729ae4a5d225b7b753e3d2"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "571b810534119c9ac44c542bf5b68751"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "6fe851ef456f8f3fc56db7d1da43f89a"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "8ea1dddfe9749c2af43634f6ecf0570a"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "913aac1d06da2a2d5033a09c7553ab70"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "f5a0ea0de461400c9f875681ddfa7c7a"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "d88f097da413d0a6d5d94f69dbec7791"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "b0f62f4a0031b55720a26d89739a5379"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "8241c60c86dfd48137bcfe8c05d7c3a7"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "a6c6044f2b9062cd3f547337469d2140"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "ee0230128b51fc881a276238145b00f6"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "e48a640454754c9ec5f581e1b62d83f4"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "dd57586611c6d4de6c9ec441ea658e98"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "aa00e342235fb4b7a05aaf65d0d704d7"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "b3595346ba854e3c28f1d260de3d0aa4"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "bfff37d456a7224aff5994ee194b4b1c"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "d61e20d9cbc0aec25e9defeb5f6e3d51"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "a3535052d793e194008aab58dc9d6b9e"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "5be278cfaad0f5198af67c625e0fc075"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "d5a749b60a976a77fb735f68465433cf"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "7a51ae99894ca42dc6c273b18f97d479"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "a2681dd7e09cb5e72fd4e9e63adffc6b"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "c63f09628736b60a204e187ade622f1f"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "8efdc786bab84c925e636b730bf7751c"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "dc7d09188201aafb84f765ca9ef1bcce"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "e841254b5b00485177c9a209dcdfbddf"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "ed92705870fc4eb1c4d27b6df74f9754"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "a21ccbfd2e2e177ba421875fd2adb14d"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "06e1e9c0a94bee6032b21da9075ca9d9"
  },
  {
    "url": "daily/2021/04/23.html",
    "revision": "c5167b808b4269884e93bd31800867b4"
  },
  {
    "url": "daily/2021/04/24.html",
    "revision": "715944a5153b518fa76a22f80b938c0a"
  },
  {
    "url": "daily/2021/04/25.html",
    "revision": "937e3f628beb6034a969dcd35e2a0e53"
  },
  {
    "url": "daily/2021/04/26.html",
    "revision": "c89461ac97bdab6ce703138ee4b772e4"
  },
  {
    "url": "daily/2021/04/27.html",
    "revision": "b563265171f0fe6343886020e9f35a64"
  },
  {
    "url": "daily/index.html",
    "revision": "2e022298956930a36b407e4f059c8fd7"
  },
  {
    "url": "en/index.html",
    "revision": "35c681258b17d79af603f0313ccf044b"
  },
  {
    "url": "en/more/about.html",
    "revision": "a7ce486e292c6e43b4cd2e58efeaf0b2"
  },
  {
    "url": "en/more/comment.html",
    "revision": "e21062ad6caf1ce5aa168dbdd266cde2"
  },
  {
    "url": "en/more/contact.html",
    "revision": "245bd311b0bd9de964a63878f2b60688"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "8fb48eff6889a1abe541f8389f1ca2f5"
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
    "url": "img/coder.jpg",
    "revision": "2336657ad4f7d24ef81956d969f87683"
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
    "revision": "0bd13ab5d25d385398547a5cb2663106"
  },
  {
    "url": "jp/index.html",
    "revision": "619420c4dec52340c4164e2bbbb29d26"
  },
  {
    "url": "jp/more/about.html",
    "revision": "8bec820aacb391bdda7f223d9295c72f"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "47a43b6dcec563365567473e1fb27756"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "8fb610c44cd6c972ca0f9f2309863166"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "e12a6232a4c4a82298ae998637a7ef60"
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
    "revision": "725b199bcff66c46dfc1dbeee20bfc3f"
  },
  {
    "url": "kr/more/about.html",
    "revision": "c20ff2ef5520a282e8ce4a6c394bc74c"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "6ee2893a00807f1ecc7a859cc224fd3b"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "5bcf708e1a48c9654ef1f6b22297d685"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "68fd703f81b182a5b8346d550e5b288b"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "4a12956dcc1e809b25276b905b3dd344"
  },
  {
    "url": "more/comment.html",
    "revision": "d2f6d27a7341e066062497b1b7d1b7c6"
  },
  {
    "url": "more/contact.html",
    "revision": "615fdc01f42a163a4bedab369476b0fb"
  },
  {
    "url": "more/sponsor.html",
    "revision": "2135021c051f902939abe0719a5e91e8"
  },
  {
    "url": "post/index.html",
    "revision": "d52d60bc29458d75421c58bedb1363bd"
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
