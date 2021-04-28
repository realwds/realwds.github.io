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
    "revision": "cc3eec654c9be3fb9605c487bf1d2253"
  },
  {
    "url": "assets/css/0.styles.eb2ed522.css",
    "revision": "786539ada5dfeb3640f2d55dbfb5689e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.72056cb0.js",
    "revision": "13c2d78cc8099e45620d7314cd5ebc22"
  },
  {
    "url": "assets/js/11.f6df438d.js",
    "revision": "b8eaf516bd50c65ea33386f49aebe4e6"
  },
  {
    "url": "assets/js/12.22671ba9.js",
    "revision": "13d68829c81040eeae51f492fb464f85"
  },
  {
    "url": "assets/js/13.de145762.js",
    "revision": "16c772c75ba4dfea5cb6733e3882212a"
  },
  {
    "url": "assets/js/14.923457f0.js",
    "revision": "616ec1bc8c9d3105f8c0c2dbe708d5db"
  },
  {
    "url": "assets/js/15.f9eaac75.js",
    "revision": "8ac8eec92161bcb9445e20ecee8d49ed"
  },
  {
    "url": "assets/js/16.c4b6efa3.js",
    "revision": "aa39c3a7149aec777432a11d9e68f8f8"
  },
  {
    "url": "assets/js/17.ee9e5567.js",
    "revision": "6e0f0683b46b06631dd81094d049a806"
  },
  {
    "url": "assets/js/18.1392973f.js",
    "revision": "453dcaff3689d59cb7a9b202506fd735"
  },
  {
    "url": "assets/js/19.270411d1.js",
    "revision": "eb6a412100db35cee223e5a16200c092"
  },
  {
    "url": "assets/js/2.a222a0f8.js",
    "revision": "f9704148fe61f8a994c512cd74898f26"
  },
  {
    "url": "assets/js/20.3c4ff879.js",
    "revision": "d45ef49f3fa1474fca81da715909431c"
  },
  {
    "url": "assets/js/21.420fdce9.js",
    "revision": "37363b410ce2e30cc04245891b9d4f02"
  },
  {
    "url": "assets/js/22.c7373f96.js",
    "revision": "2e4865ea2d1bbdc91358f423478260c5"
  },
  {
    "url": "assets/js/23.38caaad4.js",
    "revision": "5a6f3844420c5eec53ef387708f2a03e"
  },
  {
    "url": "assets/js/24.772126eb.js",
    "revision": "73d69024f674bf348bbe58e80f95cb5d"
  },
  {
    "url": "assets/js/25.6237c64b.js",
    "revision": "958e97b141565f7585a5c0ca1feb5d09"
  },
  {
    "url": "assets/js/26.4f559ad6.js",
    "revision": "02c80b07d4338e8217574e3ee1c7e41d"
  },
  {
    "url": "assets/js/27.649a25f7.js",
    "revision": "14b4dcf0238e82553bd8b1e9ded2af5f"
  },
  {
    "url": "assets/js/28.5245e258.js",
    "revision": "b8969c868d056bea23e9701482363f15"
  },
  {
    "url": "assets/js/29.b457c436.js",
    "revision": "4672a5306162e257a0a5137acbb6f43e"
  },
  {
    "url": "assets/js/3.74dabfce.js",
    "revision": "bc187323a43e819d235b1dfadb7c5883"
  },
  {
    "url": "assets/js/30.ee704fbe.js",
    "revision": "0215d36238d8d0c69ac3521a2fad8fc6"
  },
  {
    "url": "assets/js/31.7a4d1e67.js",
    "revision": "b6732c7a491f3beb5869034edc950f38"
  },
  {
    "url": "assets/js/32.da550337.js",
    "revision": "295ca82beba08790ff48d2d4a5d5b385"
  },
  {
    "url": "assets/js/33.b37e9dd5.js",
    "revision": "f28d2035d9d43b495a02026388cbe1fc"
  },
  {
    "url": "assets/js/34.d064c832.js",
    "revision": "76a429a4020ba5b01d900b868ed51901"
  },
  {
    "url": "assets/js/35.ef8ae0de.js",
    "revision": "71da9c03f7900398efe3739a6e797712"
  },
  {
    "url": "assets/js/36.83a57f7c.js",
    "revision": "1ef65a6262e5292018086b2177348d5a"
  },
  {
    "url": "assets/js/37.d860011d.js",
    "revision": "92eb55b28ec67892d8856c39372e4120"
  },
  {
    "url": "assets/js/38.9be9d0c8.js",
    "revision": "ad39f636d89ba43a8862bbb5f2dcdcf2"
  },
  {
    "url": "assets/js/39.c373a5af.js",
    "revision": "4e5a9e12f5c4d1e53adcc31aa8a8c2c1"
  },
  {
    "url": "assets/js/4.a27e0ae9.js",
    "revision": "a50379e0b424917f758a4dcba4fb5129"
  },
  {
    "url": "assets/js/40.a1ed1dc8.js",
    "revision": "23a7ca3f2a2ecf90a2f19e10d852add9"
  },
  {
    "url": "assets/js/41.1419f50a.js",
    "revision": "c93b79b82fb4170310a6e7eef040483a"
  },
  {
    "url": "assets/js/42.3d9d1522.js",
    "revision": "86bfce45f55d3b0c20bcdfd02c93cb63"
  },
  {
    "url": "assets/js/43.fa9c9de9.js",
    "revision": "cdee078c2e3d754653945b4d8a5605aa"
  },
  {
    "url": "assets/js/44.04443faf.js",
    "revision": "19012fb87d3cd5e74b2bb2d6220d14fc"
  },
  {
    "url": "assets/js/45.f23ee63b.js",
    "revision": "d95017be0a28e63116e9693f72daeba2"
  },
  {
    "url": "assets/js/46.de723b11.js",
    "revision": "170a7c9343c8fcbb03c70b7d3e016de1"
  },
  {
    "url": "assets/js/47.f09bb13a.js",
    "revision": "e988f45b070bbc0beba3559dcbff49ea"
  },
  {
    "url": "assets/js/48.7539f8b5.js",
    "revision": "48c7d0620db64695545e582211c33190"
  },
  {
    "url": "assets/js/49.3e9a8572.js",
    "revision": "b1698319cc0452e120ee89b88442713e"
  },
  {
    "url": "assets/js/5.24bdd476.js",
    "revision": "6b2ce137c7146462d825b97523add964"
  },
  {
    "url": "assets/js/50.9ad224bd.js",
    "revision": "29fbf1308f9682e52f945d39ef0862d0"
  },
  {
    "url": "assets/js/51.d01e80e4.js",
    "revision": "30def78cc2d7becd51e7ebb6ecfe8374"
  },
  {
    "url": "assets/js/52.d5302057.js",
    "revision": "539fe477fe8b1bb6f161be2b7a4752b0"
  },
  {
    "url": "assets/js/53.23fb0151.js",
    "revision": "0ffd27f51f1c145902cfbcf8c75025bb"
  },
  {
    "url": "assets/js/54.634a21bf.js",
    "revision": "a109ce75f370d39a48dbfbe0d5934b68"
  },
  {
    "url": "assets/js/55.c1cdb74f.js",
    "revision": "4119e1d7e53c723479334f3164ece4bd"
  },
  {
    "url": "assets/js/56.b9193bca.js",
    "revision": "d224f8d05ae3885ae0d1b48f9362b2e8"
  },
  {
    "url": "assets/js/57.f8e8424f.js",
    "revision": "e46384ac4c0719206a6e5131215444d4"
  },
  {
    "url": "assets/js/58.cb6027a9.js",
    "revision": "a01fa1ad0e334ed14131a2baf66b1e39"
  },
  {
    "url": "assets/js/59.377a0f7b.js",
    "revision": "e4ad0047d1926263bebc851cded9df21"
  },
  {
    "url": "assets/js/6.170a9c96.js",
    "revision": "c75aa1ed89ab19749c90e5a396fcca2f"
  },
  {
    "url": "assets/js/60.ce81da78.js",
    "revision": "e63c578f96649f1670b850df4a5e0423"
  },
  {
    "url": "assets/js/61.5f5be34c.js",
    "revision": "1229057c323c12bec207a0b20945c5b9"
  },
  {
    "url": "assets/js/62.f0068068.js",
    "revision": "c8f06a31eeb6a13a3ecfdb963d5ee63b"
  },
  {
    "url": "assets/js/63.46925dd7.js",
    "revision": "d9b093292bbfbe2a30c1b513397dff99"
  },
  {
    "url": "assets/js/64.353542b3.js",
    "revision": "ac80acb2c8bcc99944fc46e1da28e597"
  },
  {
    "url": "assets/js/65.9b0ae035.js",
    "revision": "4456bb15cbfc855e3727bcc9ebda3346"
  },
  {
    "url": "assets/js/66.259cb1bf.js",
    "revision": "3bde8b42a270e91e8d3a34b338ad8447"
  },
  {
    "url": "assets/js/67.72f292d4.js",
    "revision": "f0ef79d4650ae054e675d22c29bd4d2d"
  },
  {
    "url": "assets/js/68.bc1199ef.js",
    "revision": "ec58a89b55ac63473c47c9bf327cce5d"
  },
  {
    "url": "assets/js/69.da1f3095.js",
    "revision": "606c347ce755130e304412486432bde0"
  },
  {
    "url": "assets/js/7.df674344.js",
    "revision": "f23d61cc7b91f90057209d5af5d93efc"
  },
  {
    "url": "assets/js/70.3da7a42c.js",
    "revision": "9e1bf19a9bd290a3a132b4fcde06e3ac"
  },
  {
    "url": "assets/js/71.6738afb6.js",
    "revision": "e1924510682fce9c4cd8e4d75a5ce37b"
  },
  {
    "url": "assets/js/72.bf1d87be.js",
    "revision": "51e17513ab61bcc2a6d2656002977af1"
  },
  {
    "url": "assets/js/73.78788bb0.js",
    "revision": "2076a547f6ff333e31b5f3416db8c77c"
  },
  {
    "url": "assets/js/74.6183325b.js",
    "revision": "6603c8814c24715c6983e234e7126345"
  },
  {
    "url": "assets/js/75.08c0a85c.js",
    "revision": "0dccdb1608b8cb68ee558b04adbba1b3"
  },
  {
    "url": "assets/js/76.5f938d45.js",
    "revision": "ce01c42601604932705daed3ef3cf086"
  },
  {
    "url": "assets/js/77.8ec1adc3.js",
    "revision": "bc18301fe72551797a77bd260ccac805"
  },
  {
    "url": "assets/js/8.e606332f.js",
    "revision": "b66e83c73f6de125101b2c76a65df941"
  },
  {
    "url": "assets/js/9.1b49c1cf.js",
    "revision": "c97bc97cec0ff09409c1c953acdd18ad"
  },
  {
    "url": "assets/js/app.10bb15d7.js",
    "revision": "75dcba2230a159c8f11c816e37678d74"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01.html",
    "revision": "140884f41fc74b8f45860ed64237ee58"
  },
  {
    "url": "daily/2021/02/02.html",
    "revision": "4407dd8c30939608a58821a7ce4dd8f6"
  },
  {
    "url": "daily/2021/02/03.html",
    "revision": "6d751fb4b3d46061607eaa3729010cd6"
  },
  {
    "url": "daily/2021/02/04.html",
    "revision": "218b3abd02a9723f500329b0159146ed"
  },
  {
    "url": "daily/2021/02/05.html",
    "revision": "2a734abccc53ea6cc4d2f1e2dba50871"
  },
  {
    "url": "daily/2021/02/06.html",
    "revision": "1457a737d2a32aa9ac099099efc23798"
  },
  {
    "url": "daily/2021/02/07.html",
    "revision": "9ec4791607ce5f87eaaae2a7117d1dec"
  },
  {
    "url": "daily/2021/02/08.html",
    "revision": "50a0682b43b78f54bdfb9b8adf248348"
  },
  {
    "url": "daily/2021/02/09.html",
    "revision": "88aebef67c174aae83fcb92dc0c1af15"
  },
  {
    "url": "daily/2021/02/10.html",
    "revision": "f01aace71d7a735527718be3595beff8"
  },
  {
    "url": "daily/2021/02/11.html",
    "revision": "02b52ded170ce4eda4b408711891a0d4"
  },
  {
    "url": "daily/2021/02/12.html",
    "revision": "64547ad763c9aa8443eec3ff5e6b89f3"
  },
  {
    "url": "daily/2021/02/13.html",
    "revision": "b765c7516cecc54d5edcd7dec7524cb3"
  },
  {
    "url": "daily/2021/02/14.html",
    "revision": "de5314a86567da86f0f14565ee33a729"
  },
  {
    "url": "daily/2021/03/20.html",
    "revision": "0fb4d3090885996b8026454ca6b44f4e"
  },
  {
    "url": "daily/2021/03/21.html",
    "revision": "c2da8e9b30d3ddc5a44bbb6f58eee55e"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "b82758c8edf0dd1dc4bfd2662dfe160b"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "c926f7488fdc8a3d74faf8111bb781d6"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "5335efdc01368ebc830ba3118d3c1735"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "86b9c7aa2903908083b133e99d878561"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "e76dec64871a4ac20eff586c524eb09b"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "f09d33cafb960013e630c2af8fcd3737"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "4224bdf65ed28503dec9cbe43daad030"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "470196c688010a93a59d718beff7f282"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "007395a6fe5c7d3ba6c919840f675568"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "47e7322a7ec99987d572b41196f68857"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "b30acb77c5bfb2ad77a00ca41f06361d"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "a8c5f4bbfcfa0ccd800ae61818d588bb"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "6e1555688c4fe16a42a4855bb165af37"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "56f7d0fe191e6c7c0c3dc9337636be11"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "7d57d32ba3d57ceb4b1a5aaa89498c9e"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "2e91e8d0aafbaad2392306e9a52b5a23"
  },
  {
    "url": "daily/2021/04/19.html",
    "revision": "cba7f6763b2417c06594b2aea9c40e3f"
  },
  {
    "url": "daily/2021/04/20.html",
    "revision": "3822feaf40a8bc12bd21e41a0e6efefc"
  },
  {
    "url": "daily/2021/04/21.html",
    "revision": "97e8875e66eaa204ec331da2ae5ba200"
  },
  {
    "url": "daily/2021/04/22.html",
    "revision": "769ea4c88e7541edadc072ce0534d053"
  },
  {
    "url": "daily/2021/04/23.html",
    "revision": "7e180e1b6c532c4e4e8fb475387202c6"
  },
  {
    "url": "daily/2021/04/24.html",
    "revision": "2828d9861e275ffbc5d1b08eec36a4c0"
  },
  {
    "url": "daily/2021/04/25.html",
    "revision": "4dffb0c663f415e6a58027e1a68e03c6"
  },
  {
    "url": "daily/2021/04/26.html",
    "revision": "9c257cb5a7b26f69645c264974215370"
  },
  {
    "url": "daily/2021/04/27.html",
    "revision": "0e24185b7c29a3d3440454dd8b2fa1ac"
  },
  {
    "url": "daily/2021/04/28.html",
    "revision": "591ff337d63180e10e5d762ad6837dfe"
  },
  {
    "url": "daily/index.html",
    "revision": "c0154c6e6ba336f033767235f988ab70"
  },
  {
    "url": "en/index.html",
    "revision": "77b4ee428866f0a737c65c20df42d9c4"
  },
  {
    "url": "en/more/about.html",
    "revision": "fc4c926004f6dea125525c672dbe5e1f"
  },
  {
    "url": "en/more/comment.html",
    "revision": "f16d2bf445a6d3cbbe71babbed58cbd9"
  },
  {
    "url": "en/more/contact.html",
    "revision": "e10768cb53503f59c374545015983432"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "c4d413bd46372f3178b577d978d19e54"
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
    "revision": "9bb213a6ade4dbf6611a09d9546be712"
  },
  {
    "url": "jp/index.html",
    "revision": "bba2f5f1a0b3b17913ae432a8d390d2f"
  },
  {
    "url": "jp/more/about.html",
    "revision": "a716e0d27111ea8e0c3298c305f2f256"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "9ed741ce552238eb9a0130619aa49810"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "44babc111a62f741f47c7d5894113cf4"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "f7e88062f58e0c2a69a09445f3a32906"
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
    "revision": "d1dc8ad98def7f54a5a3a46c96a358cb"
  },
  {
    "url": "kr/more/about.html",
    "revision": "2cc85f0b7bc3d0e118000fa0c2bb1d00"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "b7f41a9622762a39efe65a5eb7a0fcc1"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "9a254992c898279097ee299529438457"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "e3db9979a542abf4f2e01a24c03057de"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "8fc3ba0f8e29d631d9c20b4bbebf61a6"
  },
  {
    "url": "more/comment.html",
    "revision": "469589c401b4f2ab48befb96b2a84461"
  },
  {
    "url": "more/contact.html",
    "revision": "dc6ac37a9d4b55fa1ffdc5ccf1af858d"
  },
  {
    "url": "more/sponsor.html",
    "revision": "6e5dbcb106445f5546291add57dcab78"
  },
  {
    "url": "post/index.html",
    "revision": "560a8e35454ae6184983548bb1be1e92"
  },
  {
    "url": "tools/index.html",
    "revision": "a42283479b3e5a3d0bc890572cfc7b2c"
  },
  {
    "url": "video/index.html",
    "revision": "8827efe0ba3002d86b6fb8409aa47318"
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
