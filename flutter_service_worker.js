'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "fde6bfb39fec918bde8a257101d1e20b",
"icons/Icon-192.png": "8e92d489349175b335924ab7d070bc58",
"manifest.json": "e84cba138f51768270bb5792659b7aba",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"favicon.gif": "a3056c5fcb21b3978ca806ee80c559ef",
"assets/AssetManifest.bin": "9495c852158bf4b53a81fb80feadcb1d",
"assets/AssetManifest.json": "0577e30369eda75e25cdc43acb2b593f",
"assets/AssetManifest.bin.json": "70ceb8950b54f2a7938a41e500746e4d",
"assets/NOTICES": "d8ed9691dfa6d4038c55b94fc7302457",
"assets/assets/animations/a.json": "5b289d28b4f421b370f6cd5c7b43ff55",
"assets/assets/animations/3.json": "13005d3449adcf4394026d27c724cad6",
"assets/assets/vectors/logo.svg": "69b31bb058e615e2b7a6e1536b856857",
"assets/assets/vectors/upwork.png": "5719defdc9db290e8e0d466c47c58c55",
"assets/assets/vectors/java.png": "19ed2428dffd33fe2b4f436b37d1d62b",
"assets/assets/vectors/flutter.png": "77ea4ed7e7da281f4bcc339adedb2f67",
"assets/assets/vectors/logo.png": "2cac7303a214eb0ef8126eafa9d6c1e4",
"assets/assets/vectors/blob.svg": "6e76a5b509cc9b30833cbc439ff2fb6c",
"assets/assets/vectors/android.png": "3e263dc6ada70943f24ee173c9429129",
"assets/assets/vectors/code.svg": "b75e8ae6287cd518487ba7499c13462c",
"assets/assets/vectors/django.png": "c47627db4052fa207fcc505852259e7d",
"assets/assets/vectors/github.png": "abbc5db5b3315d2bf2362e30eb9401c7",
"assets/assets/vectors/instagram.png": "6fee368d224c18198389e5ac1a2ff18b",
"assets/assets/vectors/medium.png": "ce47b48ecdaf6c56785a709ab8b6b045",
"assets/assets/vectors/linkedin.png": "e4c101b73e3e23002202ae7b5ec7f190",
"assets/assets/vectors/btn.svg": "94bac5235312090a57316581850fea36",
"assets/assets/vectors/icon1.svg": "5cdcc2121dc19b14c81f42d4247dbb9b",
"assets/assets/images/personImage.png": "9cae13050c4d6bc3fdc3e0a03506811b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "7302127062b4ee88192cc4005b629717",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"main.dart.js": "30e27690ff6fb9d9aef572894fdfe8fd",
"version.json": "2a4bdd3370ee966319e180d97d91e050",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.html": "b70e53a7c3c65d9f0427aba8d5a9f367",
"/": "b70e53a7c3c65d9f0427aba8d5a9f367",
".git/config": "18396f68e4e868e043f2967e30ad48d3",
".git/COMMIT_EDITMSG": "39d2b1ae41c609d04d9bbcde036940d8",
".git/refs/remotes/origin/main": "927a5ca7f8737ec4adb6db37f424cda3",
".git/refs/heads/main": "a79e01afaf756861f3af1fba6c0c4420",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/09/41563d494d74081281e0abc6da294aa6592a29": "fb600295d1b31ec65b57dd664a420379",
".git/objects/09/2915c2fb5d662df5e7aa4fc81eb22fec2c8ade": "412c2ba5bcc7a07cd7baf6b06e65f8f2",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/43/798f884118f1d1e228fe55963db883450e41c2": "8f78d3d7317faabf3e516f9491aa7d42",
".git/objects/47/cdbbca2a026b0ef73574e42c2938ed449117a0": "a47c57007113c91fed9fbcb6803fc4b7",
".git/objects/61/c85011adc23781e1eb76b4d623e88ca8e94d18": "55211beeb3feedccc556e25848fa83a4",
".git/objects/15/d3fbe3190072a17dc730260a760ba6613d2b0e": "1bdf43e36162c5846d3aac45107f68f7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/9048e299e809ff1c47c42716bde73588c320da": "83384d24f24eddeca2ca09921a292bf5",
".git/objects/0e/a46e81ce15ccb1767a51aaf061963ad528efeb": "4e571e4a27c5bd49c4ce8009bdcac524",
".git/objects/7f/90cfef869f625c5fa349eb523f97693d2abb77": "b5bbba305539f2fa4150f34b540c79e6",
".git/objects/a9/172ca13021a2c1b793118999ff0c3b71382603": "0016bdac4e06eaa6a35b4d1eda051e47",
".git/objects/22/935fc8cc6fa631388f4b0a51ddbc8fa51000a9": "b1e26e7efa0d28ec84bc625cceee59b1",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/a9ce66b8a7b46c12d615d2dd169de790e32ddc": "bf8ec4bc7ee7de60503b75440fadd9b1",
".git/objects/f4/c46148771db69afa8ef8fee7a3d0a7ee571397": "e391aca91a6496d03f41a233fb9dff23",
".git/objects/36/dfd966affccddbddfeb5dcb3a6d3dfaa5e1afb": "52f5c29ad3835d726963221b1f6af2d8",
".git/objects/a2/5179e585cc1bcf1481686f198f248dd07d2149": "ef183d36b5660f86fea4721d02b9cf95",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/83/0d087aa2897d6928fcc0197c69aa812eb3e950": "6b2d2838468a709e63e6531f840bab1b",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/2d/832fdc38a78ed37b13fd22d95c29ebeea4e30d": "42babcdde14d6b99f80e2ff64b03183c",
".git/objects/2d/716922c0c8a40f975303da7dc344cb0ff2b63b": "f2dc4826cb088034e8734575394c7858",
".git/objects/ed/05befcef625b03f10321c190478fad2754e7c4": "57aced734bc19ba050715f82823dee49",
".git/objects/a8/5c20afcae5f2d92c68c7cc81c28461079ed976": "4acbb544fa66ddb28af904a40f507841",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/33/46a18d0a3bd4b1064fd467332f761b630d41bf": "7ba49fb94bffee5d8a8a16d02cb56e77",
".git/objects/33/b0bc8b2ae62bdb0007ab0235f8bfdcf9281c8c": "ccbb7e79dae5bcdcf67f5399b9a21249",
".git/objects/90/07ee742d2f2d3099d4fd8ed81de3c952c074bc": "999575721b70b95f378bc1569c356d10",
".git/objects/cb/3746893025ae702edcbe6d900b6a9687a15949": "8e082043cff8ff3352c9fae29b5141ba",
".git/objects/cb/af79e10e1ae18d8440fa57171983f87f428fc6": "9247d6bf0c719c0ff7a535cd3db039e1",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/9d/c23954146a6e971f31d15d4176601aa40095bc": "776a9e9dbdc27331cedb262ead2493ff",
".git/objects/59/0af12dc43eac27b5802dc7c376c94fbfa46c3d": "d770adb7fef222fb163efd8fa33f9d04",
".git/objects/bf/6129a764d07e1e728b273226d0e38133cf382e": "ce8dafd0f2891f51f1081c2c5632fe26",
".git/objects/42/920d4f57867d49177af1b92d6583ca0b05cce4": "25fd0d8bc896b6fbfce6caaa1dae6246",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/14/e3b2771a45e665edcf631b76ae914aa6fed8aa": "47160e9abff33951e4f12befddfbd9c2",
".git/objects/e4/3aaba6ffd273693c4a9d4e9efaf803bca2a5ac": "8d4d952715fdc3d8787d232a30668fc9",
".git/objects/db/85da1b94f5a7664187901cda663263e92df251": "7dfd017ecaf4bbf53cee4621eba33fb1",
".git/objects/17/29c73bc9e0658f417cc1bf10997d0badfdf98d": "1a8331ad103317364815b89a4c85706f",
".git/objects/f6/e22df0e9668c1056ae9e235e1e753e30e82a37": "e2cab2bd83ada250c9c5d23b2aac5591",
".git/objects/1b/6c1f6b2161012d50a46b3d27b6068ab388bafa": "7cad50a044664bab78f777b1e5651987",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/74/02e61d61ea5401d73add1cf8b4a449bbcb3970": "68c61a941a477d06afc3de8f5c4d42f0",
".git/objects/52/e4ca403edbee1fea46e9ea42961c772f8c45d8": "c70408404477121a974cdeab20351aa8",
".git/objects/97/a11a8bdedf1420537fd7189436e9eb5226890f": "c88882a204dfca50a39b88fba4291c31",
".git/objects/46/ba36a3d9d694082e2022c93189dfec26ba0773": "d3233aae3bed4fc23178872f7719154b",
".git/objects/46/6e987d499aacccd527402553f616e6afe9ab06": "06c9431b35a8ef2d7dc844774cc1ebf4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f81de2ed6bb58f5b1206f273586567687093aa": "d08ffbbbd6c8dc73e662679aa2303d2d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/ef1baf356334c29e037dfb3b704252c51800fb": "0536a22421b129da2c1aafde3ea01a5f",
".git/objects/77/6c7d223f342ad3a0ec497ca5f0b673f783b8fc": "e019dbb42feba1ea1996cfa59132b8a3",
".git/objects/ae/c6b611e2a733e7f7b05c03993ce7db1cd8c4e4": "1df826cba9d4ff8a3c7d71e118a9859d",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3a/3c12cebdec15472d0ddfc9cb240e3ff00ffc96": "48e5d94df6e12f66638513cd5ee64357",
".git/objects/3a/45b7ff2d16c89973098c99fe13f315d30dd973": "b4a39a86ac42015641138235dbe44d18",
".git/objects/ec/cdfd03ecfd3f558e42ab633d01e92892348c2a": "e528ca0bfde0d00c0afad26e3f6a3711",
".git/objects/54/a57c6541a502eeff12b81caa3e764e72bfc9ab": "3ac54defc9cd7805c81311a0df44a232",
".git/objects/ad/ddbea84991ab859c404c58c0dcd6a15fddfe23": "c82e9520c41167392e74ea822e39f4f7",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/36922bb19f90252c233ea0240368bc7eb43a9c": "99127322521dfdc4bda263bfcbe64664",
".git/objects/6a/6497defd5eb526476c8fb94b399b6bc6160029": "77df91b240394ea0bfd5362d17ac1d11",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/21/b38e275559af303ec2b83ba50c5de4c098e210": "61108d6d6473a9f99de5af22cefd1c5a",
".git/objects/78/c53925fe706fdcb22d27894c18adc923521ac3": "d65fda3ee117d712d5bb1dfa9085b3db",
".git/objects/78/0c1809ff188cad469f2288f1ee942907ec7070": "6e5d134759f4940553538283d96a00cb",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/b6302afc3557c59ef42594e014ccc0f8c62d8f": "935be7db9e850e9df5751292ed457954",
".git/objects/c0/9e651b8f2b136fd1211af68bf6ebe701edc1fa": "1135bf2b58cc5e17d4f6b0166c71ec97",
".git/objects/c0/bd2c3614e6efbd622474654546542319e95fcf": "0873ab12d74b5b0eaf540b8242996734",
".git/objects/c0/46b995ebf34da81f9a43da1f96c49378250c95": "a59d3057f1009f2380c059a41342385c",
".git/objects/16/33bccff2157acf803c0bd3916d30141fd7dee2": "bfc48599153ad41af45ad1ccfab2f268",
".git/objects/cc/934736dfaa072dbd3cb127c46202dbd60eb5b1": "6c20fdcf346a85a844d1f26e233b9013",
".git/objects/cc/76a46a280b3b81f6208064d1913cd91efc27fd": "3b5b36700096362127a99ef4e1c15cbc",
".git/objects/aa/2062d5cac4a6dd7a052f4b16ba8526c6f589bb": "56f94f6f0910224554c4cc97570d7dc2",
".git/objects/73/cf86419903e879b6c7b33352d0ae4ba8c5f7eb": "129c353e69b8f5e7ab2d5a208d0e49a4",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/ab/91c28c75033bb37aa9b265f4e55494a60971a4": "8f06993e226c9d14cf35f753b591fc70",
".git/objects/e9/a864552170ee24f76459efa62ecb645d7a7fb3": "e1f8652a6972be4ebbd5f87e4df31530",
".git/objects/e9/c72cbab2009add88dab5c330ea9ff525c3f9fc": "8220f87f9dc3ad00ee6b3e9717ea98dd",
".git/objects/eb/e41c23c069275ec609dc9449cc49102e35abe2": "dd554cbc813ad6b357c27db87cbaa1ba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/99/5416ca9cb0acaa23e92c35664958badd8c771e": "e770d1964ba5985573965fee9296f451",
".git/objects/b3/eab228ae8e9edc786d13e6b4db671549dc7c6e": "90654248150c0e6a835cab1833df9caa",
".git/objects/89/5c0bbbd55a2b413c0f873c474d02e98c3f6e3c": "dd5eeecf163722a2f6be71e109889bf3",
".git/objects/89/6a0cadeecdb34c154c7f7c452a24f23848944d": "704bf119c213cc71fa379b56af630332",
".git/objects/35/74ace16c816d9cd75825e1b57a309a308926ee": "e953f9f7b8113004d1d42a3fae7a73d0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/30/3f0e015a306987260a6bce822548a429dab7f6": "327139d05c94f00bb9c630cc97ec3566",
".git/objects/30/0ba5ed978bb736899454795f392893c00a0d5b": "7d1833d219a62b1f14f2831ea5113b5c",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/ff/5a37718e2587ab1957c5532e02fcf2aeee790c": "4e0b74936151d2f9d27ed0d9f35c30dd",
".git/objects/67/e471cf8fa2e57d7678529062c17a10d7f072d1": "e1bf738e390a7bb86d7e697182c075f1",
".git/objects/40/43e18e7dee3a47c3586168f4ca4fb51058c4a2": "58b1eeab021cbe791a9bbc10394f5a51",
".git/objects/40/bd754dfb4d6c1b0ef9a1fc5c465b6319a8ffb4": "c9d5db13d86234ca8078f2ea3a2df259",
".git/objects/40/28e93d22e9a11c79b6c98f8e3551ce1ed2b677": "f6934169e6d61711b504f5e18d63859f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/63/eb5a1dec95b4c0c6f13cd41d7e5ce706105ec7": "f161d18c183d3a976469e9bb24de024b",
".git/objects/8d/0837a60c9df3cfde6391a8937542c57bcfcd49": "de76a73a99da04b6f81c76fc3c19b169",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/d8/b8627adeda4b6325fbeeb0c7b5e84d78ede0c4": "b278f36a8e8e8edf6a66b6b1d8bb9aeb",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/473f304ec18eed1f3033b455d3c329f2963f8f": "5ad8159686e8d369efd430b5c3c4a2d4",
".git/objects/c3/fea52267872a9ee177b918f72f0ad4ff44928d": "7748a68e671c7f560a694be5142fb150",
".git/objects/c3/4861a9aef0a56ec74b5ff388e335ab80614d42": "2481a748c4a1bd59ce00ef84d27b56e6",
".git/objects/4d/2c59a5a6ac429507a3a99e2d7bb57035b1abb7": "81760c25ee160665f0116dbeba1b5351",
".git/objects/76/c39a402481e026e32ca41d97746334f2f0bb14": "36f3dca55d5faa32d720b7381d27fae9",
".git/objects/02/bcd2900cb8fb883128175440a5119d8fed2ffa": "96d428740da148ab819e0ae9572370e9",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/12/c67036f5aa150bde160d34563990101cdd6dfc": "2252297af486e5e29999da90cd5e8c24",
".git/objects/a4/7498b176efa1372a27f0a2545f2256345268ef": "8f70fcaf050ad4bef9936bb98364dee6",
".git/objects/a4/b6b22abc4ddaea68edbb7f64d176faaef8db63": "28567c91c0a2648803b9b0eb580054a2",
".git/objects/6d/d2218460ee3830c08035e393480be3b6127b45": "f2fef9ff0cd9203eb6188840ce2d0937",
".git/objects/c8/7c0f401bd270366519867d67f00febc1813977": "80015283645583ae91fd24165883844c",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/4a9ae04b6e7ae20b74669798fffb20e5a693ca": "b7dfe99fffbad9ba165d2a73cf17786b",
".git/objects/07/dc7aa54c2d60c37ada776b71f08b261fb68703": "e962269271bdb2dfcf46b96f65490620",
".git/objects/88/85746e8ffd56e56b50df756242537783e1210b": "420b8f5f372d455b6b310193f7f80bcf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9e/c8a68e8adf80682baa27bfc889a9e7ab42c27d": "2f70e93aef5ed74b87d2e2f3ded3c642",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/3e/d8e102dfd595c1cb9cdbf135e5f89c43f53d00": "ba9f51bf98b425973b88b1aeee4b117f",
".git/objects/3e/82e0e940699b5325b3cbcde4aa9307b0a272df": "6dd3cd40222438d2cd9d2f808107a044",
".git/objects/6c/127d9c64ffb16115588608042036a3c9732ee1": "d0efdccc3a7f7fce021566d5e0439d48",
".git/objects/5b/0fc38bb1ae8558bd40b8fe2f75845c63cb9e34": "fa579a5ec334f1c05a1939a1f5fc36d6",
".git/objects/5b/b256cf6a1b56db1f777d968245657b65278dce": "c43d6d9aceb2492b2c76106f6f48297e",
".git/objects/5b/e764f845e9c195d1b8b7bc8af830991deb341f": "ee7834f5ae72c55ce237d5a5f344bba8",
".git/objects/80/6b87785730991b0f1b78f7dfbfcf369f5f4903": "dbe335e02d2ffd20469d152c3367b133",
".git/objects/d6/99cccb64f6ed96946736d91739629bb218258d": "f4d8b222a52e5c9194a4a1430d1d56cf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/44/3f7dd9ece1f35953b11ed99d7caa185f547de2": "bde5b27ae9a364a65c5ea2ec5d2b9250",
".git/objects/e0/33067e3cfa1cd931894bf8b89905fd947e1a98": "ce5e747dc7e8a382802254e51b8d291e",
".git/objects/e0/4e35f0865f82528a51e513d6fe36dfed4a6dca": "0d0edb376e6d07ebddec82d29c5e2348",
".git/objects/a7/1079f414c8c57f1aea7352320651a718fd6178": "3b2b289744c3059d3a1b50105967d30a",
".git/objects/6f/95c4c4cc56bc05331761a3cfc00aa308b3831d": "95f4f4dbc407333fae70332c561fc45e",
".git/objects/6f/48d9a2fa6fedae9b642cd505e1c9e5967ed5ef": "d33249ad3c7899dacbfbce4c6897edb0",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/45/87d1a50672193f8190476a91a1299ed89436dd": "8c9699753d6442d0d2ecdfab12f731cf",
".git/objects/45/22724aea98c07e86a1d4614de9c651cd6d7f03": "2c153a1b729bb77ca68dbb8a0396f46c",
".git/objects/0d/bb6e730e1ec185dc87ae75acda950a359c0ebf": "14a73a206eddb093c4e23fabbb8a1b1c",
".git/objects/a6/3430db19264ff8d9383f642ad41dd353027ce8": "97ec00a6586c2d65053f6866934bb13b",
".git/objects/a6/18b9ae8ddf82c4ce403e3286f3c171d469017c": "5c505d37c082b73234650d776835b69d",
".git/objects/32/469000b9284eb12c0f2c5af7f621d57f57e800": "001034d786557fa096d03fae313977dd",
".git/objects/1d/9d94de0ee84972ece3c2e26934738086e0f491": "5c01c47d3bdac5ca9a125f618703ec09",
".git/objects/66/845d50bc10e48ab3f573fd2ace4a0adcc07805": "faebbc86baa1cc010b789bcd0fcda855",
".git/objects/f8/2b9b25417756025021d0eac9165246e488b7cc": "ccbdc45c7dd473f6bd6e3a425d64a430",
".git/objects/68/82d65666ebc4dbb2254847952d631175e9d7ba": "2881ef725f66c69fa4164646b2f1110b",
".git/objects/68/3c04292bf9324e1da198dab34c13799e9e2397": "890ca55790ed86598b0c20fff0d9355a",
".git/objects/68/da8ccdb1515d0e7214727b08debebedfb006a5": "34cdd9f84111434ea90fd8fb3aeb498d",
".git/objects/df/e2c1edd837ba2f805a36f115f64fe79704f99d": "d362f410df51fb2dc7b1ecd8b6e27e09",
".git/objects/df/8d91960970558004dc8932b8b1754b6c47b762": "39a3116316e2231b5e709e0b6d16c3e7",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/3f/b9a2f0c53dbaa74988d94efe1c72b3d7d87732": "e44104ff7d56e353feec2f1117b4cd5e",
".git/objects/3f/0205006e9f74ee19126f54221c105593cc10bb": "62fdf16f8107c4ef927b088e6d450552",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/95/4a36d37886a74b073b3841cffd2cbfdf6008bd": "960182661cd3775daa8c9518db8726e3",
".git/objects/95/74020bab017c5f2b580df56e3430adca13e24a": "a95dd679557bbb25417b9ea3e86fa40a",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/4e/fcd9f2a4ea35c4fb85389491eba8520343c06f": "258eca789fab175e9f6be0701614b19a",
".git/objects/86/c9e699679b1f98a92631f25bbffacb14992e69": "892a89629e11a298b48cca23746021d6",
".git/objects/86/0d81e005a0056685f501ca51cf69ca81f21da2": "7e6fdbde62dbdfdc77960a74edfec982",
".git/objects/86/ce9bd459c1118cdc99df6a6dd28a6d700c57fd": "8caddc6cef3cbdd7022b3d753fe28289",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "b73502ad4718e86530b8b6800f5ffc26",
".git/FETCH_HEAD": "9b95fdd646980cde145dc3614503b9b4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "66a89121c6acb991090456d2fbef3ce5",
".git/logs/refs/heads/main": "abb46ee820cc7c2d8eaa461136d834bc",
".git/logs/HEAD": "abb46ee820cc7c2d8eaa461136d834bc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
