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
    "revision": "19d3ad541c3485a2b7205d3397daca97"
  },
  {
    "url": "archives/index.html",
    "revision": "3feeac90fd5aa54e56ff0ef638b63f13"
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
    "url": "assets/js/10.b40d16ee.js",
    "revision": "9c04019e928ae11e2e7cf1505b6371bf"
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
    "url": "assets/js/app.b18e6d68.js",
    "revision": "ca495cc0ff6bf02a7f94dc26b958edfb"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "5e8828ddf35a63d9f7c5c336eb72420c"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "2ea110ff92fe4cce12ffd73d817757fe"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "eee28afeb595002ede09046ffae431fe"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "d83ad284409aa77df26ed0a28ea68daa"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "80f4f6d375d3fda6f7ae807e729c23d1"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "38f924b6b298cee92ec77f4a16181ec4"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "4d2b81e0d41d882471092f09b981a0cf"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "2b6dca5d55e2ae111d2ec05e8d10847f"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "127c8842162a6670e94ad7c9db1ccd0d"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "ca243f39e9d14baf594535f54e3078fc"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "6372f57d3d8e8ca82189e8ba98f5ab78"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "12825a4b9ba2c98c02eed5293ff420a5"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "57dc7aabdd753c2e9a14f35ee4fb0e60"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "76f18859fb4d470f673d74651d183a8d"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "1dda984d485aded1cd6fcbf85eabb158"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "caed7a5a588f0e54e5dde0dd104413be"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "ad9fd783cc9dd6a2de16a524d0e6ab1a"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "a3dc9a96cce192f9c7ee9bb7ba7c651a"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "6360c8b40f094c3327959abdd89a007d"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "474e4e5c16cd82e7b93320f592aa9043"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "0790aac10fed26f9276207b9408d05d1"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "d6f35412d2c8117a8a12f27a8012ae31"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "e28f6d0de3916c1af4e23c12d7296fd2"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "85102f5bd3434ec1b16732226e0883bf"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "d10438dd3c6dff59b0f441e91d0a96dd"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "c4670444c9740f02216eef793e197415"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "105c2a1d513466f317a8b9274ac5b266"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "7ec6d3e0fc39ecd74fd1ca23d6732518"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "26fec20c07b388bb7d6bc560dfc4db2a"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "a46bff5a310a337f2666fe3db0455c26"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "c5eee161f6e8b6892945a44e63cb47b5"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "129015986c57f5c83e5739e33d02351d"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "3977b672eae379d6bf68714543fa754b"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "bc6d90f27e405ffc460a4c0b7f78ee5e"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "5a89faefaaca2c58a0029ac3ee1241a0"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "1a7f3da6d24fe1fccefc9a0608eb739f"
  },
  {
    "url": "daily/2021/04/23.html",
    "revision": "e90dd04562612717aa0b40732c37a00d"
  },
  {
    "url": "daily/2021/04/24.html",
    "revision": "ff8e766557d2afb792f0baf96234666e"
  },
  {
    "url": "daily/2021/04/25.html",
    "revision": "fbf3a621b0065d7390ded39ab1e14b42"
  },
  {
    "url": "daily/2021/04/26.html",
    "revision": "f99e1d1f6967ddf47dec67b05f5f4687"
  },
  {
    "url": "daily/2021/04/27.html",
    "revision": "7e9510b2ba186386963caa46e2b9beb6"
  },
  {
    "url": "daily/2021/04/28.html",
    "revision": "62264db75899b5b1f718ae768e1d1be4"
  },
  {
    "url": "daily/index.html",
    "revision": "f8f7d97c6f9aada5bbb990cfeaded4a5"
  },
  {
    "url": "en/index.html",
    "revision": "b5c4494d6a4808d6e2ae68122b5d0807"
  },
  {
    "url": "en/more/about.html",
    "revision": "cce054dbbe6e5a9184c7467a02c22b5b"
  },
  {
    "url": "en/more/comment.html",
    "revision": "6baf4dcf91c0ba500a62ed34c0b7ca0f"
  },
  {
    "url": "en/more/contact.html",
    "revision": "cfc90fba01cba100e6dda47e8e6ad676"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "4f69441df425842455a6b05ed4d7958c"
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
    "revision": "639e38ecb3f013d72b9168594f21674e"
  },
  {
    "url": "jp/index.html",
    "revision": "674b9ceef983c8ec0568c6727c02287d"
  },
  {
    "url": "jp/more/about.html",
    "revision": "4bcc8bd7669530b7e5be146e4bbabdaa"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "b04a87801d77bb283202a56ba36259e3"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "a3e793e3682e45dbf75066854e6393f0"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "9ec398bf54df5bbd3cd65e35c7b991c9"
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
    "revision": "ffd336ee949d1b401ed385cd00ff9f5e"
  },
  {
    "url": "kr/more/about.html",
    "revision": "64f756bf2188843a7c0295129f88b3ef"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "48dc8b5b987e316330e0c72999bb84a0"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "50b4547317b1d7f3be1ce6db256da61b"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "4e306ecb4fa7dc8e58e07fd6e45c6001"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "210b758ddbcc258888e3f5a278b06aaf"
  },
  {
    "url": "more/comment.html",
    "revision": "ca32489b5a16bc82cc9686c43207e92e"
  },
  {
    "url": "more/contact.html",
    "revision": "0075abaeffcce1c2fee228022fbff2f8"
  },
  {
    "url": "more/sponsor.html",
    "revision": "96721c7b72f8b70c31d94b526262f1e3"
  },
  {
    "url": "post/index.html",
    "revision": "7e678ed95646dd3a3eba19e447fe180c"
  },
  {
    "url": "video/index.html",
    "revision": "c6d413de75d59deeb06fee3fa98eaecf"
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
