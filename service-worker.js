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
    "revision": "b0986f8688b917a8db0f163779b3d9a5"
  },
  {
    "url": "archives/index.html",
    "revision": "819e3512752ff369b45c268e26569f15"
  },
  {
    "url": "assets/css/0.styles.f345d56e.css",
    "revision": "6266a4ff63d68434fa94326f5954f30d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.87e03273.js",
    "revision": "e0ea3df99c168aa6303dfa3a6119fcf3"
  },
  {
    "url": "assets/js/11.2bbd81b2.js",
    "revision": "507d2153460dcf91d69592d9eba60c03"
  },
  {
    "url": "assets/js/12.c5dd141a.js",
    "revision": "786e4e6c4fa1b84485b39a9cc108b17f"
  },
  {
    "url": "assets/js/13.7902208e.js",
    "revision": "719ee5e502e4623f28a6539f637b5506"
  },
  {
    "url": "assets/js/14.822664fd.js",
    "revision": "4bff2477b7616d26703030b11e533802"
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
    "url": "assets/js/5.0cbc8e4c.js",
    "revision": "4aceef432fd2db6ba8da9a91ae7b6b7c"
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
    "url": "assets/js/61.6381b30b.js",
    "revision": "c76c692ce2705ba0fc2b5f70339694a6"
  },
  {
    "url": "assets/js/62.8dab1fc5.js",
    "revision": "07f1f34ad1193660c02463b18c2fe64b"
  },
  {
    "url": "assets/js/63.699845ef.js",
    "revision": "c49d4002cd5ed3dbb786150399e3df19"
  },
  {
    "url": "assets/js/64.1e0d34f5.js",
    "revision": "af928351ac5c91e84cd8c56980d9ec0c"
  },
  {
    "url": "assets/js/65.246a229e.js",
    "revision": "ca521923e49c2ff4ef50a59507b21b75"
  },
  {
    "url": "assets/js/66.2daaaba9.js",
    "revision": "bd7c34ce7cc121e1ddaf2e6c2009a913"
  },
  {
    "url": "assets/js/67.78735def.js",
    "revision": "33d4052ff3418b3743bc2e1bbaf23878"
  },
  {
    "url": "assets/js/68.8195ecd6.js",
    "revision": "e4ae41bda486d0da47d557055da08785"
  },
  {
    "url": "assets/js/69.49000d0c.js",
    "revision": "e6c8836751dfc5a38974762085b92705"
  },
  {
    "url": "assets/js/7.8bd7e04c.js",
    "revision": "efaf453ab569549f24f849f70baa90a3"
  },
  {
    "url": "assets/js/70.61b715bb.js",
    "revision": "efee5e75223c13d8ff3a805462c54db6"
  },
  {
    "url": "assets/js/71.a2fbead1.js",
    "revision": "7bd3402fefc84fdd61f3c91297018f9f"
  },
  {
    "url": "assets/js/72.1c3417f7.js",
    "revision": "4fa7a9d3f8dc51223fd10c737275de39"
  },
  {
    "url": "assets/js/73.584eb349.js",
    "revision": "ce3b4b746157a7e2289133f4b2ba5542"
  },
  {
    "url": "assets/js/74.5064214a.js",
    "revision": "4e413c5524fefb03868ab9b048da4bfe"
  },
  {
    "url": "assets/js/75.88cacb72.js",
    "revision": "ba22392e752fc5a601be25acc41449c8"
  },
  {
    "url": "assets/js/76.290127f7.js",
    "revision": "7140b3a89f4e3959e87ce2644c29ed96"
  },
  {
    "url": "assets/js/77.e2cac19f.js",
    "revision": "271e959a90e5d76e86b21634edb829ac"
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
    "url": "assets/js/app.af9e0ae4.js",
    "revision": "e5d216dbc27e63355210f30de0af8086"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "1d1069b66a1b470c56261232319bdb18"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "a26d8d1fc551ff34b22add43ae9b6cd9"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "8af80e6556f97b5f3c0a4d4d90e3e439"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "fdfe38a667970ba7c9c35ef17cb1cb3a"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "dfaad6fb1e70d2673234334ad645b2ff"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "cc1bb9e9df06012e4c019d988c59d81e"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "d04b2728b249de66b5930c792f69d4a2"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "b3a3e74d69fa3a83df33362d25be44b0"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "ad54b7ef3de78587b866b0d85723fd1b"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "3170bfa5d26cc21a078b7d8ac456c85d"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "eb2d854fd0b4a28fef51223a46921a35"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "ba770eeaa73a49b917e782ff697fdc84"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "b47d3156e4144fda1eecf191b3abbc67"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "d6514e01f33c2524860825442a96aa2f"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "55611846b644094ba620e511bed05c76"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "312656892a76ee3ec9877d3d99a2e956"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "1ebb534f7eb319274f744afdaab18f3d"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "fab2bfa85e9ff9d36dfc41886f937e75"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "2bcd6abe37c4829c0e43364388718287"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "b2910f886d41c91ec0f99d8c907fcf5b"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "fd5cf6320007e29fe1931f7e49f06b1e"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "c9acb533c43407776943352792b2b547"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "bd4dc611840b74deb446176386bafc2c"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "b1aee23b953190fa0a6dbcf5c42bfe29"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "a74656f3b0df419e77e3af0997333c5b"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "b6bee915c8fa5eb3a73473243a62e64b"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "824cd039a4244401179c695ebf342ca0"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "166931df6c73707240c352c7911c7276"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "ce1f74f75eac4769c8d0f9ea658f308d"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "8603b272848e8b4fe0dd8e6d884595f6"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "edf58001e2c539ace854e7eb76e0a386"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "22dde1ff9b9666faf827ad4ee3ce7b37"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "380621cd4cf6884e0d332fef5ef06b9b"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "266bb97dc27564ba987b485140aa0597"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "bb2b06c2a147f087f2633aaeb4561111"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "ed865ee6d89c45e7bf5c35615efa1b57"
  },
  {
    "url": "daily/2021/04/23.html",
    "revision": "b8b23c57e8422535124513bfc551801f"
  },
  {
    "url": "daily/2021/04/24.html",
    "revision": "8f7e8801a402d1656e44f4819ac41188"
  },
  {
    "url": "daily/2021/04/25.html",
    "revision": "a2c6b73b61ffb20043cda7524f8a78e0"
  },
  {
    "url": "daily/2021/04/26.html",
    "revision": "06aaa5fe16432524e73dae36fe15c45f"
  },
  {
    "url": "daily/2021/04/27.html",
    "revision": "38f4d2cbafa5ae7495dbe15b6983e264"
  },
  {
    "url": "daily/2021/04/28.html",
    "revision": "6e479a70607cf3a74a6d480046d6aa99"
  },
  {
    "url": "daily/index.html",
    "revision": "f558836a0ad57308304547679b94e82b"
  },
  {
    "url": "en/index.html",
    "revision": "2e29b2fe410daacb0ad0893167c53c8c"
  },
  {
    "url": "en/more/about.html",
    "revision": "d37ffd3d036268d32889b78c428594a7"
  },
  {
    "url": "en/more/comment.html",
    "revision": "dc5b6aa375382ca4921ded6c4ada0a40"
  },
  {
    "url": "en/more/contact.html",
    "revision": "f133072816d4d785d077b84cc0bb03be"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "5fbd52828a08e95cf8e5625ab0d8cb48"
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
    "revision": "dd51642382f57c96aefbf9bc937e4946"
  },
  {
    "url": "jp/index.html",
    "revision": "7448b5f587c4d913a175f40423aafc79"
  },
  {
    "url": "jp/more/about.html",
    "revision": "4cd606e3f32f48090bf7d3091b1ffe06"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "f355f965266c31898479280c40d294ab"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "016b68b4fce70045bb8fc6530748644c"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "63f3b54ec83307fd63ee01f344e50bcd"
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
    "revision": "ea399b75fbe6e3203525d3a6e440a321"
  },
  {
    "url": "kr/more/about.html",
    "revision": "b93c81becb59978120a9c94d1b12a6db"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "995486c632f09857e2d80a1271d13256"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "3805d8ff9e964d699de6048022d54634"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "e90b1aadf1c2e41bc7c115c523e7e988"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "66c79cf8059de8869b15f86f216a5b86"
  },
  {
    "url": "more/comment.html",
    "revision": "9fefa484c5f483c7d5b24dc7703ccc36"
  },
  {
    "url": "more/contact.html",
    "revision": "47367bcd45fc56793805636f5540d47d"
  },
  {
    "url": "more/sponsor.html",
    "revision": "a17422bb6515dbe50d5531b65eb67dc2"
  },
  {
    "url": "post/index.html",
    "revision": "ac39e405f6bd8e966e6a6a77dab62346"
  },
  {
    "url": "video/index.html",
    "revision": "03f75ffb7069c36358dd27d1bb6e67a1"
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
