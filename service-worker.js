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
    "revision": "aefdf5396cf8f0f310090c74650d86c1"
  },
  {
    "url": "assets/css/0.styles.115186a0.css",
    "revision": "6e3cdf904dc30d351b259cdedc690c1f"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/1.39950c06.jpg",
    "revision": "39950c064804e226fff8f155ea9a6f42"
  },
  {
    "url": "assets/img/bg-1.40f9e2fd.png",
    "revision": "40f9e2fd22a2e0b81f72278c483b90fb"
  },
  {
    "url": "assets/img/bg-2.e584a701.jpg",
    "revision": "e584a7016fd27a91abd4fa8f57a583c7"
  },
  {
    "url": "assets/img/bg-5.18dec9de.jpg",
    "revision": "18dec9dea47bd769b846d8a01a5a8cbc"
  },
  {
    "url": "assets/img/bg.jpg",
    "revision": "268ee36df5aab9a2dcdb988a9e22a782"
  },
  {
    "url": "assets/img/bj.4c3a4621.jpg",
    "revision": "4c3a46211eb3498998bcf50bc0b2433b"
  },
  {
    "url": "assets/img/border-box.1872b25a.jpg",
    "revision": "1872b25aae2afc8e77c58103a67ce0da"
  },
  {
    "url": "assets/img/content-box.71e21bd8.jpg",
    "revision": "71e21bd836d494c1df3c8010e4e477cf"
  },
  {
    "url": "assets/img/element.a2d6779c.png",
    "revision": "a2d6779c92c22d5af85ed3ebe8c32823"
  },
  {
    "url": "assets/img/gitee1.455c65f0.png",
    "revision": "455c65f0e2466c356f1819650e66ee8b"
  },
  {
    "url": "assets/img/gitee11.bfb7e19d.png",
    "revision": "bfb7e19da9b55f067e9fe5e1ced4421d"
  },
  {
    "url": "assets/img/gitee12.2f210bf5.png",
    "revision": "2f210bf50549547021f8cc0fd0575a42"
  },
  {
    "url": "assets/img/gitee2.89c9701a.png",
    "revision": "89c9701aad96b9ade73c650742df8cab"
  },
  {
    "url": "assets/img/github.64813642.png",
    "revision": "6481364205c4779ca833ddee6016d409"
  },
  {
    "url": "assets/img/h.276d6dd7.jpg",
    "revision": "276d6dd7b9bd4480ff1b2a06bb42860e"
  },
  {
    "url": "assets/img/html5.19829bcc.jpg",
    "revision": "19829bcc670e7b24eedfcabfb0c23080"
  },
  {
    "url": "assets/img/j.54b9a18f.jpg",
    "revision": "54b9a18f9a8d0c4cd49bdb1aa8f172fe"
  },
  {
    "url": "assets/img/level.861c1b94.png",
    "revision": "861c1b9492e47937764635a462f6b4c6"
  },
  {
    "url": "assets/img/lufei.5fe3de8f.png",
    "revision": "5fe3de8feecae4232a302a19a6641cf0"
  },
  {
    "url": "assets/img/onepiec.ee0a57d3.jpg",
    "revision": "ee0a57d3f581cd7caa578bb26fa2b0b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dd5b0d5c.js",
    "revision": "0ed780f79646155464202e167b837fc7"
  },
  {
    "url": "assets/js/11.9ce787b6.js",
    "revision": "5c8129c14b431de437b292c3a9cc4ece"
  },
  {
    "url": "assets/js/12.da2c37f1.js",
    "revision": "8fc375c3714e793cb0f47f1bbfb79886"
  },
  {
    "url": "assets/js/13.1c3f1e9b.js",
    "revision": "fa05de2b543adc64956763f85112a5cc"
  },
  {
    "url": "assets/js/14.6158d390.js",
    "revision": "5c1325571922e4a8bdac92c831fe51b7"
  },
  {
    "url": "assets/js/15.68ddbb2e.js",
    "revision": "913a85248a38cc0b9fec8d1cc6dc2cd6"
  },
  {
    "url": "assets/js/16.d8ad0c13.js",
    "revision": "35fad018845bb065a9b77703660d0c99"
  },
  {
    "url": "assets/js/17.8cf95da2.js",
    "revision": "e3589b800bdae0bf590cffb83a2e7be0"
  },
  {
    "url": "assets/js/18.6f058a12.js",
    "revision": "01069352ac50274be2587204418076f0"
  },
  {
    "url": "assets/js/19.72eb8c3a.js",
    "revision": "264161326cd515bd18804924196c193a"
  },
  {
    "url": "assets/js/2.eaa6962f.js",
    "revision": "f348e20b206bab4f13e0da43dc14934c"
  },
  {
    "url": "assets/js/20.94edc310.js",
    "revision": "dcfc1f1dd694623fc0d74f021f98a117"
  },
  {
    "url": "assets/js/21.07eaa780.js",
    "revision": "d32f75eee1129173e133feb9f9a447fd"
  },
  {
    "url": "assets/js/22.4cacda75.js",
    "revision": "24933d2d020b6d086995f52fafe285f6"
  },
  {
    "url": "assets/js/23.d7832a3b.js",
    "revision": "91ea857ad8a7c8701bcd7101b1725a46"
  },
  {
    "url": "assets/js/24.164e1dff.js",
    "revision": "34e5382192e3f5fb8ed91987a7df42a3"
  },
  {
    "url": "assets/js/25.51c264a0.js",
    "revision": "7c364abfa77092dc5911dc08d0290a49"
  },
  {
    "url": "assets/js/26.1b4878d8.js",
    "revision": "c4c62dca24f8ea0c541a64fdecbfa615"
  },
  {
    "url": "assets/js/27.9a90f7a9.js",
    "revision": "ddfdf9af932700f3a1f34d882e912666"
  },
  {
    "url": "assets/js/28.c62ee302.js",
    "revision": "79b1f416fb8caba8b95074d8291e4bc9"
  },
  {
    "url": "assets/js/29.c0333f10.js",
    "revision": "23f054f972e17255dd58b19d6044c997"
  },
  {
    "url": "assets/js/3.6a04f8e5.js",
    "revision": "f1c7e3761a188a922d576f6597d80b6f"
  },
  {
    "url": "assets/js/30.ce44255c.js",
    "revision": "4dd799bc51f12ccca54f403706b7e4c6"
  },
  {
    "url": "assets/js/31.f9584780.js",
    "revision": "cc21d4928c3e2fb8dd72dfcc2346162b"
  },
  {
    "url": "assets/js/32.001990f0.js",
    "revision": "2a9d6d396fd7c4a602218b70abb4d6d7"
  },
  {
    "url": "assets/js/33.8c193a33.js",
    "revision": "54523ad3928e2ba3044213470f9024ea"
  },
  {
    "url": "assets/js/34.7b07e4bc.js",
    "revision": "c316257e64c7280b23899466e80adfc2"
  },
  {
    "url": "assets/js/35.91b44533.js",
    "revision": "85538a12de7e2c6416682168ce96f96d"
  },
  {
    "url": "assets/js/36.e45a31c9.js",
    "revision": "0812eeba709c82f2fef31d3ae5fbaa04"
  },
  {
    "url": "assets/js/37.da16238d.js",
    "revision": "1091e4d9af372978bc4b85458479c0a4"
  },
  {
    "url": "assets/js/38.129e50cd.js",
    "revision": "71edc722006d6f505eb222f5a39001dd"
  },
  {
    "url": "assets/js/39.c5f85d31.js",
    "revision": "1340db9fcdb5d06486527d1e4f6471c2"
  },
  {
    "url": "assets/js/4.d9c8d112.js",
    "revision": "368b6642dfb367a74447abd27e364494"
  },
  {
    "url": "assets/js/40.cb7d24f1.js",
    "revision": "6fcebf73543fac6452dd793c72d8082b"
  },
  {
    "url": "assets/js/41.9d17cbef.js",
    "revision": "22cef448249f03ad594ee1973ba1facf"
  },
  {
    "url": "assets/js/42.da829395.js",
    "revision": "3601efb1e81c5c51554eae97f3dba99c"
  },
  {
    "url": "assets/js/43.3a1506a9.js",
    "revision": "fb994f1cd3ae05b578e1585935ff41d1"
  },
  {
    "url": "assets/js/44.64db7f83.js",
    "revision": "fb41290391f982d8e7e5bdf4a3e5b709"
  },
  {
    "url": "assets/js/45.cb61388d.js",
    "revision": "ec834ae2b12118a01ad91349f0260474"
  },
  {
    "url": "assets/js/46.8736b444.js",
    "revision": "7eb204527f61a4f4138aff5b560490eb"
  },
  {
    "url": "assets/js/47.eada21ff.js",
    "revision": "db5acf341d4cf84724743c9fdee0e5fc"
  },
  {
    "url": "assets/js/48.7d6271e9.js",
    "revision": "9e197076cde0e17ad67707666d7d052b"
  },
  {
    "url": "assets/js/49.7bbacdf2.js",
    "revision": "efd8bc7750d5c821c4f9696d3f7669b4"
  },
  {
    "url": "assets/js/5.e7f0337f.js",
    "revision": "78394541c17ea6f8ec6256b7f7bb3bca"
  },
  {
    "url": "assets/js/50.d8710609.js",
    "revision": "dcddda3fc4378cc4a36a7fd07e13b8cb"
  },
  {
    "url": "assets/js/51.1d5cafa9.js",
    "revision": "fe4be1301625455cae3628fca3b403a1"
  },
  {
    "url": "assets/js/52.6cda17de.js",
    "revision": "70c090d6b93388008c6d5b0ab50b5f83"
  },
  {
    "url": "assets/js/53.efa40e25.js",
    "revision": "83d369651ca1fd9439fcf1c63a95a57e"
  },
  {
    "url": "assets/js/54.4065cdd9.js",
    "revision": "f15b84e5e48d082a5eeba02518493257"
  },
  {
    "url": "assets/js/55.c4ccee5c.js",
    "revision": "0b539150ff933754234a9055834d37d0"
  },
  {
    "url": "assets/js/56.e847f86b.js",
    "revision": "33330578ffe7c08673b1915fa650bee8"
  },
  {
    "url": "assets/js/57.5aeb1df6.js",
    "revision": "825a5e4c09cf5295ea69ee5bde56ab07"
  },
  {
    "url": "assets/js/58.bcb2f432.js",
    "revision": "4255adbf767b8aff75f0ecab0975947d"
  },
  {
    "url": "assets/js/59.88bf8696.js",
    "revision": "ce487f261deb6a2df14b70044df46a18"
  },
  {
    "url": "assets/js/6.e3d61555.js",
    "revision": "ca1c2b382332f83de1e3f0fe7609c617"
  },
  {
    "url": "assets/js/60.74b7977d.js",
    "revision": "5a96bdfd3e3d045cfc65c97cfa616895"
  },
  {
    "url": "assets/js/7.986b18dd.js",
    "revision": "7386f29bdf2ed07a4d33ba7f4cb4a674"
  },
  {
    "url": "assets/js/8.8b4acbac.js",
    "revision": "1a09753ef692af7d3b4ca7558440dcc8"
  },
  {
    "url": "assets/js/9.90268275.js",
    "revision": "19038fb538152a006fbc06198b4d1ee4"
  },
  {
    "url": "assets/js/app.f773030b.js",
    "revision": "9ec54ea747ed3e5539222b1f75cae95b"
  },
  {
    "url": "assets/login/bg-1.png",
    "revision": "40f9e2fd22a2e0b81f72278c483b90fb"
  },
  {
    "url": "assets/login/bg-2.jpg",
    "revision": "e584a7016fd27a91abd4fa8f57a583c7"
  },
  {
    "url": "assets/login/bg-4.jpg",
    "revision": "a6a6e532aa7ff3dc55cda622755b0b7e"
  },
  {
    "url": "assets/login/bg-5.jpg",
    "revision": "18dec9dea47bd769b846d8a01a5a8cbc"
  },
  {
    "url": "assets/login/bj.jpg",
    "revision": "4c3a46211eb3498998bcf50bc0b2433b"
  },
  {
    "url": "css/1-语法与引用.html",
    "revision": "edb2f64ef5cb024223666c4ead920b32"
  },
  {
    "url": "css/10-浮动.html",
    "revision": "d22580db8af313e1a6d147f439dc40c4"
  },
  {
    "url": "css/11-bfc.html",
    "revision": "5c8c1d990404dfea4dcfc31a18ce5d54"
  },
  {
    "url": "css/12-0选择器.html",
    "revision": "a4f4de96c10a471ab31347ba84f9a0ce"
  },
  {
    "url": "css/12-1基本选择器.html",
    "revision": "2e209e2b987a52c6f8f78617b35e5fee"
  },
  {
    "url": "css/12-2层次选择器.html",
    "revision": "f5d95a080c1fcf0f54222108afe482b8"
  },
  {
    "url": "css/2-文字样式.html",
    "revision": "6b6d8fbc34ed29b8a96685ddf4835773"
  },
  {
    "url": "css/3-背景.html",
    "revision": "5abe223ccd8902cdfd225993bd8bfdf6"
  },
  {
    "url": "css/4-尺寸.html",
    "revision": "5d99c23e25b303e358f1bd8bbd63d3e4"
  },
  {
    "url": "css/5-边框.html",
    "revision": "10b53545f1cfa36796fa83226eb3f28b"
  },
  {
    "url": "css/6-边距.html",
    "revision": "01ec0ab22a6c4cd386a7643e26f9f45a"
  },
  {
    "url": "css/7-显示隐藏.html",
    "revision": "eb01f616c0d3ea7aed922610e3240e40"
  },
  {
    "url": "css/8-盒子模型.html",
    "revision": "4cf57046d14701441838321a3f35da92"
  },
  {
    "url": "css/9-定位.html",
    "revision": "6b177c1b27fddc8a7b212e37bb980e19"
  },
  {
    "url": "css/index.html",
    "revision": "2630494c428a9a2c479e7fc6dabc6a67"
  },
  {
    "url": "css/lesson17.html",
    "revision": "a0102c8bbdb43b2dd03fda938535ca97"
  },
  {
    "url": "css/lesson3_3_1.html",
    "revision": "0c2662cea46515b563e3e663e1c096de"
  },
  {
    "url": "css/lesson3_3_2.html",
    "revision": "421e980bf3d1cdea5efb16eade91dfc4"
  },
  {
    "url": "css/lesson3_3_3.html",
    "revision": "c7d524891f0080f52c686c5cfcc2a943"
  },
  {
    "url": "css/lesson3_3_4.html",
    "revision": "ede1368000ec24b6a23961f4dda0ef6f"
  },
  {
    "url": "css/lesson3_3_5.html",
    "revision": "13cf912b3daedaaabf76a24ba9a49886"
  },
  {
    "url": "css/lesson3_3_6.html",
    "revision": "2ba7dd10ab67760b74a48883f6531d96"
  },
  {
    "url": "css/lesson3_3.html",
    "revision": "568f307388d81cdc109a9fa214682cf1"
  },
  {
    "url": "css/lesson3_4.html",
    "revision": "41f0b5129b5b3f4afbd2198317b02191"
  },
  {
    "url": "css/lesson3_5.html",
    "revision": "56f8cebaa1975a4f48c5e7a713dadf7a"
  },
  {
    "url": "html/0-HTML学习资料.html",
    "revision": "aa9c43e14e124d75da66dc8910010908"
  },
  {
    "url": "html/1-开发工具.html",
    "revision": "6afed785e108c2c61911e1547e6d89ec"
  },
  {
    "url": "html/10-表单标签.html",
    "revision": "bd1e8aa470c7f82da713149b55597626"
  },
  {
    "url": "html/11-icon.html",
    "revision": "96108456e7b0a3acf0a58b1c069397d5"
  },
  {
    "url": "html/12-元素分类.html",
    "revision": "3fd87c6b3ed30c80cc916163319a37d2"
  },
  {
    "url": "html/13-html5.html",
    "revision": "ca73367a622a8c18f7a430184396dfeb"
  },
  {
    "url": "html/14-a标签小妙用.html",
    "revision": "2f4483e3629061b0479488b78ede4da1"
  },
  {
    "url": "html/15-其他功能标签.html",
    "revision": "2efb392073d7434328140c1021f7470a"
  },
  {
    "url": "html/16-标签嵌套.html",
    "revision": "cd06d00d95329ecd190fc021f7a04529"
  },
  {
    "url": "html/17-html学习测试.html",
    "revision": "16a78c82e651dba6ee43ec4bd3fb1002"
  },
  {
    "url": "html/2-html介绍和结构分析.html",
    "revision": "e4ef0ad5d9c809a5dc395d87c42a9051"
  },
  {
    "url": "html/3-常用标签.html",
    "revision": "8fd431acd1c949b48ddbcf07b8d07a27"
  },
  {
    "url": "html/4-文件的路径.html",
    "revision": "bd0c686bad24091ad4371d40b0c0da0c"
  },
  {
    "url": "html/5-图片音频视频.html",
    "revision": "374088fa276f5194b20995c1c800e207"
  },
  {
    "url": "html/6-实体字符.html",
    "revision": "9bfbfa00e2a64d6b540f2863f328aa85"
  },
  {
    "url": "html/7-列表.html",
    "revision": "f9a290124e5ed08e10b56c993bf6a5c5"
  },
  {
    "url": "html/8-html5.html",
    "revision": "837dd413fae585655d0774418bab0fba"
  },
  {
    "url": "html/8-表格.html",
    "revision": "f2241adde09ac347c2bc0e104d7c312f"
  },
  {
    "url": "html/9-内嵌框架.html",
    "revision": "871a3763843d3b1c13c610aa3ab58012"
  },
  {
    "url": "html/index.html",
    "revision": "3ce91bacb18c4580216a5ba2d5946089"
  },
  {
    "url": "index.html",
    "revision": "3bfb5864021886b3aa72be4c18b8d833"
  },
  {
    "url": "js/index.html",
    "revision": "46e33f9fc5b12f64b2054c8ba7f936ad"
  },
  {
    "url": "logo.jpg",
    "revision": "74b19f515c3bc1c1196f076290c2450b"
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
