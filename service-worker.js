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
    "revision": "64ea50e045dd1d7e625b970c2510268d"
  },
  {
    "url": "archives/index.html",
    "revision": "b427d8dc812b961d79d39940a46c1201"
  },
  {
    "url": "assets/css/0.styles.462a0374.css",
    "revision": "1c8bc785d83f0db8aa4859a6455f5a85"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9f903ec2.js",
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
    "url": "assets/js/app.15aa6e0e.js",
    "revision": "4d1a3beb64d68405086c13c89fb46adf"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "6f0a205ab891977dbdaf1b9890a4b565"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "a4ddee1c8d56635108289273c545a152"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "86efe36335c85bd5b43c59c421e4d644"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "c91ef54cd0edcead4adfb49f937fdc61"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "f405f1baf5ceb1c4cbcb5ae9f67cc2db"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "c84ab622c0012b90b4a88a97d5346463"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "018a5508adb1fda9e74ce948c14d9d16"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "ab945af2b7959c50b6d8b06a6d8c6536"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "c978922b22dfbc08803072ec94c75920"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "737a6bdaadd09aca1cea8f562f26cf4b"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "fd87071deb4e60062b8391f76d181886"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "99c66879c04c0e61f0421acea1e877e6"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "f2807d5e05c6aeba13286761de11d0e4"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "67903113f5629e1b39f37e1fdc145432"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "cee2b68d555027b6f5f60e1eced8702e"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "a63a15f1939a99bc7398ca0546b382c1"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "1fec49911455ab5318083c8152994116"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "862c16eae24b8b6aecc534f899f2311c"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "4c6f79fd9f796307efa86e53a0fefd8f"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "9c2a72da600b229662907c51a33f6e05"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "e398ed1db398ed5407ea604ac3bd1b9d"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "afebddeb5f907b47ceb1fe9015214cde"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "592903f2124cfd6e79acbabd4fba19bc"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "c8a640939c24ae752471889c6b287fe9"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "1078f23c7a2e34ae02414c8ac9fa2496"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "d23dcbf5312b8bbc0c8e53c1de0833b2"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "f694f1205c4c7b290e69064bbf569a88"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "1528e3ac2352e0dab50bd871708ddd8c"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "8c4acd16712f7345227a6d2b9c3fe282"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "9f2f658a9d3139f70ca673323b8e9b39"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "875ec8cba12306381edb3bcadabb6418"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "e3cde8a3e064a5dafb38efa8e22203a7"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "6fa2544f0c94362617415b58931fadd6"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "ebd946e5c2d2a788087842bb12fc9c2c"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "16722d066317e69c278b1c84976a92dd"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "e68a02702049803b58b28eac328e9634"
  },
  {
    "url": "daily/2021/04/23.html",
    "revision": "26f51e9566f75aac232c5283584eaa64"
  },
  {
    "url": "daily/2021/04/24.html",
    "revision": "95b05e41449252dd82ecd2f292be6daf"
  },
  {
    "url": "daily/2021/04/25.html",
    "revision": "939b4c420b7947e831433741ea0f8c5f"
  },
  {
    "url": "daily/2021/04/26.html",
    "revision": "09ffb7f374803993cbbf524e6938ddb7"
  },
  {
    "url": "daily/2021/04/27.html",
    "revision": "50d3dde0e42d2e9924fe39574ce48d5d"
  },
  {
    "url": "daily/index.html",
    "revision": "1faf5951ee82479c88fb5193acdf7a11"
  },
  {
    "url": "en/index.html",
    "revision": "403f5e8211245073a1fe213f98173624"
  },
  {
    "url": "en/more/about.html",
    "revision": "67e65a638dedb6b3eb3de3b72b2ff027"
  },
  {
    "url": "en/more/comment.html",
    "revision": "7e1e777f3f593ddca02a113b537a0968"
  },
  {
    "url": "en/more/contact.html",
    "revision": "0cd1fa40f564ebb01ed4dd418ac3921e"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "97c14fc0510609df72513b1de17496c8"
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
    "revision": "baa30e56aa504b2105fc11b5db122a82"
  },
  {
    "url": "jp/index.html",
    "revision": "516b872df7f14103676daf804fdbb997"
  },
  {
    "url": "jp/more/about.html",
    "revision": "d85899cd91875bd58e4c327090b54c1c"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "292a91231a79ebe14169b3a9e1e38cab"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "b8d1c063943425736aa71f7d2c8c33c4"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "f4826f14966740aef881bc0f3e3bf041"
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
    "revision": "bb319b5cd7bba6093b276f50b7ed2ab3"
  },
  {
    "url": "kr/more/about.html",
    "revision": "a106c4ceb8a103178bdb77749a8517f1"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "48ff0e1782825e0944413ce6d170976d"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "5bd874386bc6149951a2daefd7289a96"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "eb759a0828068ee3297736355760e338"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "73647c149b4205bd3a28fdbbefbb00f2"
  },
  {
    "url": "more/comment.html",
    "revision": "c968a742b4c286756bbc16411c04e3df"
  },
  {
    "url": "more/contact.html",
    "revision": "8def4a14a499a849d194166cb744c9cb"
  },
  {
    "url": "more/sponsor.html",
    "revision": "a8e24ec41c454ee08f19da67fe836de8"
  },
  {
    "url": "post/index.html",
    "revision": "4a4e7a432a8f2a5e549a763f752eaa3e"
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
