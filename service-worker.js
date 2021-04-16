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
    "revision": "ffedec39743fce8eb26830c604be7b64"
  },
  {
    "url": "assets/css/0.styles.75689f97.css",
    "revision": "f3886c1117ac0bb8dcc98a66e9c64c2d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c8008b17.js",
    "revision": "c7de94eb444b5d5291ee9ab284b36bc4"
  },
  {
    "url": "assets/js/11.c1380479.js",
    "revision": "acd56bef00f0040e47f1d2d3c18e4192"
  },
  {
    "url": "assets/js/12.5e9e8cd7.js",
    "revision": "712d764ada01e816e600ac416c45f483"
  },
  {
    "url": "assets/js/13.97b489bd.js",
    "revision": "4314979569f879f995b24007d124e6a6"
  },
  {
    "url": "assets/js/14.172867b7.js",
    "revision": "2990bca9daeb60a8b2ce9f5fd064e30f"
  },
  {
    "url": "assets/js/15.a940312e.js",
    "revision": "06268ff74087e0b55b334b7895dbb355"
  },
  {
    "url": "assets/js/16.680c6caa.js",
    "revision": "7df60ab867b34bc9c77be00ee55bb9db"
  },
  {
    "url": "assets/js/17.53c93057.js",
    "revision": "237d60e3beab438d9167c31b075ca6c7"
  },
  {
    "url": "assets/js/18.1b35ae0c.js",
    "revision": "42aff11c5e1b5d07f630c57654101473"
  },
  {
    "url": "assets/js/19.71255129.js",
    "revision": "bf431997733b9836c1f1ee9f7bcca455"
  },
  {
    "url": "assets/js/2.0512f5a2.js",
    "revision": "0e34270c698167f1b92e8db22eb7a62e"
  },
  {
    "url": "assets/js/20.a0363276.js",
    "revision": "98eb07b1d3d5f37e96d7fa4cbbff6d4b"
  },
  {
    "url": "assets/js/21.384e7ee2.js",
    "revision": "8ece789eaa7df1dbeb2c354bbe9b2c8f"
  },
  {
    "url": "assets/js/22.6aebfa16.js",
    "revision": "00d5f9e1d1e466bc15f19a2372527e9e"
  },
  {
    "url": "assets/js/23.1e60a715.js",
    "revision": "dfa0d1c72368729d1beb12ab15ada006"
  },
  {
    "url": "assets/js/24.b5618c58.js",
    "revision": "882e32d238c75b1caffc43a2185e5e10"
  },
  {
    "url": "assets/js/25.cc87118e.js",
    "revision": "0f1c1aa70437aeb3a45b33927a2e3dcf"
  },
  {
    "url": "assets/js/26.928b795e.js",
    "revision": "bf6d49a3ded81abf4d343de7c309c6ea"
  },
  {
    "url": "assets/js/27.efbd5856.js",
    "revision": "9da6c9990909e4c7fa72262ad2792722"
  },
  {
    "url": "assets/js/28.56371c73.js",
    "revision": "5664b33b35cd838134bf819d60c2890b"
  },
  {
    "url": "assets/js/29.e4988037.js",
    "revision": "7d6a6ad84304b10e0197f97c3ca7de97"
  },
  {
    "url": "assets/js/3.1a406340.js",
    "revision": "0c7d40fec7572f6a9d7389e0285c76a9"
  },
  {
    "url": "assets/js/30.bb08e49e.js",
    "revision": "66466c31f8be5049c6e4ec0c879b013b"
  },
  {
    "url": "assets/js/31.bfd8dcd6.js",
    "revision": "11ed301cda73469d66e9e32797a05782"
  },
  {
    "url": "assets/js/32.f659610c.js",
    "revision": "1198b9bac1d96965297d99384961652f"
  },
  {
    "url": "assets/js/33.4565b368.js",
    "revision": "2b5099a6168ab1bafeb4e4ab3f83aff0"
  },
  {
    "url": "assets/js/34.71ac6915.js",
    "revision": "c33a3d7e9d6a811bbe88198600567ac8"
  },
  {
    "url": "assets/js/35.64fa167d.js",
    "revision": "03d3d4a03d73efe06f27a7aee275798c"
  },
  {
    "url": "assets/js/36.d23cd873.js",
    "revision": "fdd198c505ade1514f43141412d32c2e"
  },
  {
    "url": "assets/js/37.2b11322b.js",
    "revision": "a1ff5941f70e23861f0fba295f0735d6"
  },
  {
    "url": "assets/js/38.cab61121.js",
    "revision": "f1d640dba2d2239c6f70dd4086ba94c2"
  },
  {
    "url": "assets/js/39.133e81b8.js",
    "revision": "456db60731e79469494c13fe16f439df"
  },
  {
    "url": "assets/js/4.95deaba3.js",
    "revision": "a843fbd9f6b7bdb1bee3426c531bbd7c"
  },
  {
    "url": "assets/js/40.723bad5c.js",
    "revision": "65fb4b2f6e70eb70282efe62d9caa8f2"
  },
  {
    "url": "assets/js/41.c4c45145.js",
    "revision": "b72e179cba80df9968823f14d5bfd9a5"
  },
  {
    "url": "assets/js/42.d5aac07a.js",
    "revision": "2f1a8fb61859b188da35e01db3ebfe18"
  },
  {
    "url": "assets/js/43.65a1fa3f.js",
    "revision": "5221a547a8589f0e03f6e84dd8904c93"
  },
  {
    "url": "assets/js/44.2fafeb3f.js",
    "revision": "1d2cbc0e7dfb288ad00983b05a74a5d7"
  },
  {
    "url": "assets/js/45.a450d656.js",
    "revision": "bd26c5f892b1635c32febfbdd3252705"
  },
  {
    "url": "assets/js/46.3c2e1ca5.js",
    "revision": "2100953da57eee37be16775e7f334de3"
  },
  {
    "url": "assets/js/47.f37136f6.js",
    "revision": "2643ab377f9554811b64329e77b9a101"
  },
  {
    "url": "assets/js/5.f4c20fb7.js",
    "revision": "2f8623e2abdf740e0271a26c7d14fd94"
  },
  {
    "url": "assets/js/6.21f49b60.js",
    "revision": "e0292dc0c415f06ecca8d4a5a48c7088"
  },
  {
    "url": "assets/js/7.ac7120a8.js",
    "revision": "8ed87ea074d2abba291048df0e79d09d"
  },
  {
    "url": "assets/js/8.f9edbe5d.js",
    "revision": "3b8690102f071bceabb6a4133d1659b9"
  },
  {
    "url": "assets/js/9.ac75840c.js",
    "revision": "2fc542a288ac47bc15fce7289e0e2ca9"
  },
  {
    "url": "assets/js/app.82a0d04a.js",
    "revision": "097b05c0a353baa1ecbef5c9977561bf"
  },
  {
    "url": "daily/2021/03/22.html",
    "revision": "a416942223acaec93b9a6b12312ae6aa"
  },
  {
    "url": "daily/2021/03/23.html",
    "revision": "bd768f270cf63f68b5ad95182997b2b6"
  },
  {
    "url": "daily/2021/03/24.html",
    "revision": "328a38e7bfb781cea40559f0c6452fe3"
  },
  {
    "url": "daily/2021/03/25.html",
    "revision": "19ea062528b6085aee48e8b08d30442c"
  },
  {
    "url": "daily/2021/03/26.html",
    "revision": "63280876d654238a3845cd795e1980d4"
  },
  {
    "url": "daily/2021/03/27.html",
    "revision": "560c2f48265c0a7490016ae1d91724f4"
  },
  {
    "url": "daily/2021/03/28.html",
    "revision": "9a102158eb4787b4f1bd1c2ae1aef28a"
  },
  {
    "url": "daily/2021/03/29.html",
    "revision": "554a0e198cdf7d5bfb4980321ae5d290"
  },
  {
    "url": "daily/2021/03/30.html",
    "revision": "d6adc4bf0d1f6d6aa2deab7e5a4898f7"
  },
  {
    "url": "daily/2021/04/12.html",
    "revision": "64f6a97c26d6a6ac332d652bea60c432"
  },
  {
    "url": "daily/2021/04/13.html",
    "revision": "da199a2daf3cf8004c2c199c6992ad66"
  },
  {
    "url": "daily/2021/04/14.html",
    "revision": "a26d73e94a4b5bd9f180f401f922a524"
  },
  {
    "url": "daily/2021/04/15.html",
    "revision": "1ddf794efc47c23cf1a526fbdfae8c41"
  },
  {
    "url": "daily/2021/04/16.html",
    "revision": "62cd397d0d47a6d13ff024bd41d3374b"
  },
  {
    "url": "daily/2021/04/17.html",
    "revision": "7a0ca59ac6c744396fb10b2b3572d79d"
  },
  {
    "url": "daily/2021/04/18.html",
    "revision": "7958a7d1acc7361dc1bec13ebd852afa"
  },
  {
    "url": "daily/index.html",
    "revision": "810a0bcb257bc76143e03a7c7be2e9fd"
  },
  {
    "url": "en/index.html",
    "revision": "e42a3f2972fd6f375fcc2fd75b4c094c"
  },
  {
    "url": "en/more/about.html",
    "revision": "eb7938889690c33f9ce6b7ffa33e0e4f"
  },
  {
    "url": "en/more/comment.html",
    "revision": "0542620caaa49446f2d93eb28d749f6e"
  },
  {
    "url": "en/more/contact.html",
    "revision": "ff4f8764c212cf9f96a5b3f9e4a0d01e"
  },
  {
    "url": "en/more/sponsor.html",
    "revision": "5f1c7fa683748fe43946c57885df1ef3"
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
    "url": "img/home.png",
    "revision": "814566ef9f01d8c1d5d29cdca790e7a0"
  },
  {
    "url": "index.html",
    "revision": "a3f4ee0d1a7e70c653a84ac24744bec0"
  },
  {
    "url": "jp/index.html",
    "revision": "dbb2696c305300bf1475924af113df07"
  },
  {
    "url": "jp/more/about.html",
    "revision": "d8708500bed80868d914302e61273f62"
  },
  {
    "url": "jp/more/comment.html",
    "revision": "251961ff8aed71464a88eb1788e09c88"
  },
  {
    "url": "jp/more/contact.html",
    "revision": "c343fcc9477454b5db242ab0a6ba77bf"
  },
  {
    "url": "jp/more/sponsor.html",
    "revision": "2944cf80b113f5ca2ffafac9b138035b"
  },
  {
    "url": "kr/index.html",
    "revision": "ef58ad184616c84cd5cee2ca01979e18"
  },
  {
    "url": "kr/more/about.html",
    "revision": "de117e2b730a818a2b41d8d820ebd1fe"
  },
  {
    "url": "kr/more/comment.html",
    "revision": "341d6eecea55e01b308f665a6abee1d9"
  },
  {
    "url": "kr/more/contact.html",
    "revision": "36a49a9dc31c24448e4ed812d8567b53"
  },
  {
    "url": "kr/more/sponsor.html",
    "revision": "d2e069321ea47214ffffbbd2b31ca1f2"
  },
  {
    "url": "logo.png",
    "revision": "e901813588e7209ca65e0b332c2927bd"
  },
  {
    "url": "more/about.html",
    "revision": "f104f6cd842d8ceb3b9cb222f114ef20"
  },
  {
    "url": "more/comment.html",
    "revision": "8fdaf6b8de4ab4cee73766a5d6caab7a"
  },
  {
    "url": "more/contact.html",
    "revision": "76f553982e2e9e70bda38e6a95266308"
  },
  {
    "url": "more/sponsor.html",
    "revision": "a92ea3def42420c14d56cf3170d4cc32"
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
