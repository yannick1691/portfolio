/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["android-icon-144x144.png","d3890b88bfb6b5d8c3bad1fae196f16c"],["android-icon-192x192.png","0ebb217c3d9db0d3a34a85cf278bfd06"],["android-icon-36x36.png","6471a0d0685f903619cf487070e095b6"],["android-icon-48x48.png","beac9fbf17d14334f204ac121a900cee"],["android-icon-72x72.png","f77c23ee9d705fab6408516280ff49f9"],["android-icon-96x96.png","53b4565cd6a9299ffee68c9ce91fe712"],["apple-icon-114x114.png","ee56b77d261c7e9b47dae4ae4c949536"],["apple-icon-120x120.png","1deb609e79825c88b1efba041da25b26"],["apple-icon-144x144.png","d3890b88bfb6b5d8c3bad1fae196f16c"],["apple-icon-152x152.png","13d2ca641d840cabd2bf283864c66194"],["apple-icon-180x180.png","e9646ff4eadbfefd5a5a1d889607935d"],["apple-icon-57x57.png","f360d896df54b996266651b079006e80"],["apple-icon-60x60.png","c08896d517a4f17ac5258e12e52ecdb2"],["apple-icon-72x72.png","f77c23ee9d705fab6408516280ff49f9"],["apple-icon-76x76.png","8ceb7f9510123f472a3ec68081d091c8"],["apple-icon-precomposed.png","6c0d121b4d6b8336db5dec34b1e6973e"],["apple-icon.png","6c0d121b4d6b8336db5dec34b1e6973e"],["browserconfig.xml","653d077300a12f09a69caeea7a8947f8"],["css/style.css","241fc05528400bbd4cb5b4192a672c5c"],["css/style2.css","f076b57105127865579798fdb0916c33"],["facebook-cards/bergo.jpg","7f81e8813e8694c042f6f6162f4ae607"],["facebook-cards/bordderwijze.jpg","91a6120ad93c6a9c0d6749d38c7c848e"],["facebook-cards/fotoreeks.jpg","2121f4cb5f45179f91ee27f3386cdca9"],["facebook-cards/hiphopwarfare.jpg","d28fec60a8855429d1d2b531613b557e"],["facebook-cards/home.jpg","a69a5519ee0f1b061e5e246295470bc3"],["facebook-cards/jobsfuture.jpg","b269a8fd824f773c420fc1703b8333e5"],["facebook-cards/jquery.jpg","bfc09ffd4be15627a0203aa60ecdf507"],["facebook-cards/onsgenoegen.jpg","df1bea0cd3858b40d85859f09cc342e3"],["facebook-cards/uva.jpg","14487c7ae6a5d3463fada634d792094d"],["facebook-cards/webgem.jpg","a87f5efccc88f716fd1d4de3446cced1"],["favicon-16x16.png","77264e39b9be3d97dcacf1f2c00038a7"],["favicon-32x32.png","958182a2630eb92996171a18d678f9b0"],["favicon-96x96.png","53b4565cd6a9299ffee68c9ce91fe712"],["favicon.ico","03251687f8bc24220dfa3c1a8bb36cd5"],["fotografie.html","4e854ffc31c0d2c86b9e748450f538e0"],["fotoreeks.html","a955a22d442d1df00ca1c7db2c099b10"],["hiphopwarfare.html","282702a52c42ca1240e3c43965084859"],["index.html","b22213b0bd4e89831c5374d430db4092"],["javascript30.html","bdf82558ee135bece9eb87f46955fbf1"],["jobs-future.html","3c009a1a9b485388ebacdf56139a6ba4"],["jquery.html","5d57034234949795c1f60e33df310a6b"],["js/script-fotografie.js","020b8598db7b1a50487ed7931116b8f8"],["js/script.js","b8441e6cec47f70f16cd0fbbff4c886e"],["launch-icons/launcher-icon.png","ce727df8c1a9992e5977e79d6c07c911"],["launch-icons/launcher-icon.svg","062ff4da6a77bfdbaf4c9e959b89ff9b"],["launch-icons/launcher-icon512.png","f79b10e37692b10c9359fe8d9eb0edd5"],["launch-icons/launcher-icon900.png","45bf740d41af1ae039061db02cc85b3c"],["launch-icons/launcher-iconhdpi.png","0cc158ace799ef16a0f22007de4797df"],["launch-icons/launcher-iconmdpi.png","3b78821edb98d7084f12e21fc158bd1e"],["launch-icons/launcher-iconxhdpi.png","1e4ff26f228283f178d7b3d82f20ed25"],["launch-icons/launcher-iconxxhdpi.png","0c29a0ac19005f6d3c8f377bd662fdea"],["launch-icons/launcher-iconxxxhdpi.png","46bc80793ac56b0ccf84f952979f55d6"],["launch-icons/launcher-iconxxxxhdpi.png","d37a6e37e800c02f43a20bac60828f42"],["letterplein.1.html","a3869e9a565a36bb08fbff32e16049b2"],["letterplein.html","a3869e9a565a36bb08fbff32e16049b2"],["links/img/UX.svg","d200e246abb9d51d3ea8e29c8dbc787c"],["links/img/background.svg","3df3a26debebc7b92af4401274c0bdf1"],["links/img/coderen.svg","632fed8697baf74fa0ca094fda11868e"],["links/img/cross.svg","fdc03709c01ef2185b674aca01a3a874"],["links/img/deskop-1.svg","b6e9f3358e7e31f80bc29e7a23036508"],["links/img/home/about-me.jpg","436e370426ca7c9a32f2fb6f09b60887"],["links/img/home/about-me@0,5x.jpg","47e4ebdd73fe515935414cc133f78d95"],["links/img/home/about-me@2x.jpg","134aaa13d3b986684f5bf840d51739eb"],["links/img/home/hero@0,25x.jpg","a67bcdd040748a1ec7074fd59f11d2a9"],["links/img/home/hero@0,5x.jpg","8cf196b132670b35b5d4824dd50aed63"],["links/img/home/hero@1x.jpg","b3d5d060128098135a00782b1f718a11"],["links/img/home/mockups/mockup-fotoreeks.jpg","cbed9ad283e068c66c94c1b090b7ec49"],["links/img/home/mockups/mockup-fotoreeks@0,5x.jpg","98d612c94710aa07f7b17d914b2db5e5"],["links/img/home/mockups/mockup-fotoreeks@0,75x.jpg","5797ae1ca921de0a2a023a9677ec5761"],["links/img/home/mockups/mockup-fotoreeks@2x.jpg","3f886607819f247f559a3de4af4102f8"],["links/img/home/mockups/mockup-hiphopwarfare.jpg","4352d4c33ce7b67edea3e01c8b9ae4d5"],["links/img/home/mockups/mockup-hiphopwarfare@0,5x.jpg","01d56b2f0f54b607504b5bc5d3646ec9"],["links/img/home/mockups/mockup-hiphopwarfare@0,75x.jpg","3f6dd6221e9601b3e822a046cd991286"],["links/img/home/mockups/mockup-hiphopwarfare@2x.jpg","a930d333f3b008bf30d61821bf6ba823"],["links/img/home/mockups/mockup-jobsoffuture.jpg","8bcb0cbafda12b98131e574366c21922"],["links/img/home/mockups/mockup-jobsoffuture@0,5x.jpg","64fd61cc9364eef429f017b31c82b98b"],["links/img/home/mockups/mockup-jobsoffuture@0,75x.jpg","07ca86240e41f8744ef883012a864da5"],["links/img/home/mockups/mockup-jobsoffuture@2x.jpg","e392791969b1d155ee09160fff02a8c0"],["links/img/home/mockups/mockup-jquery.jpg","080687301d01c2005955c624c6016e5a"],["links/img/home/mockups/mockup-jquery@0,5x.jpg","8fc27a4b577e54a43d44a9d54618551f"],["links/img/home/mockups/mockup-jquery@0,75x.jpg","c66c56d7d35e9719ada06b453daf3db6"],["links/img/home/mockups/mockup-jquery@2x.jpg","8fccc865225f1e88cc6a558e389e5e1e"],["links/img/home/mockups/mockup-letterplein.jpg","59aa97edbc1baf5a360280882671cf93"],["links/img/home/mockups/mockup-letterplein@0,5x.jpg","17ebaeae26f2538aff702128d814ead9"],["links/img/home/mockups/mockup-letterplein@0,75x.jpg","6907def89477804b97be3b34198b5a82"],["links/img/home/mockups/mockup-letterplein@2x.jpg","ac9121548f1a021bbbf30d2fb67e0920"],["links/img/home/mockups/mockup-nieuwsbrief.jpg","2edd9ee1062a37d4522c69b15e5d5eb8"],["links/img/home/mockups/mockup-nieuwsbrief@0,5x.jpg","7af35189154861930502fc4cfd9f7d40"],["links/img/home/mockups/mockup-nieuwsbrief@0,75x.jpg","893d091044aa3ded03d02fa962b5c579"],["links/img/home/mockups/mockup-nieuwsbrief@2x.jpg","c34af793499bb6f072210a75b672c7d4"],["links/img/home/mockups/mockup-pman.jpg","7460ad1101ba716868785bd4d377aec6"],["links/img/home/mockups/mockup-pman@0,5x.jpg","2450d74b4ab5e77228599ad944045f50"],["links/img/home/mockups/mockup-pman@0,75x.jpg","9f667ef549357a27e615330dee0bd9e0"],["links/img/home/mockups/mockup-pman@2x.jpg","adea8e7934c365a1e6a242a0208b2627"],["links/img/home/mockups/mockup-stadalsspel.jpg","92cc43c19b18badb04143834cfe95b68"],["links/img/home/mockups/mockup-stadalsspel@0,5x.jpg","503622e3c75d1975fe9d343f705ad936"],["links/img/home/mockups/mockup-stadalsspel@0,75x.jpg","ceda971b9fae7658b00115e1dc963e22"],["links/img/home/mockups/mockup-stadalsspel@2x.jpg","f05a6663dfa5b9219166d937674f499b"],["links/img/home/mockups/mockup-startup.jpg","457c9456aec99e3c30e21874e2a55416"],["links/img/home/mockups/mockup-startup@0,5x.jpg","e1325f08281d2599f3d74c8d4b85d001"],["links/img/home/mockups/mockup-startup@0,75x.jpg","deb69c09400eb931851640ea067f869c"],["links/img/home/mockups/mockup-startup@2x.jpg","ccd2f5f266c4a4fd890d0997ee6158af"],["links/img/home/mockups/mockup-uva.jpg","613bd42d308d9c83435daa54a49d3a67"],["links/img/home/mockups/mockup-uva@0,5x.jpg","1e0eb1e8e72c284e9f7cb0d31568531b"],["links/img/home/mockups/mockup-uva@0,75x.jpg","4db283549cbd6b696115b1399441d4ee"],["links/img/home/mockups/mockup-uva@2x.jpg","18011a5b461d10aead6d5a415c76ec31"],["links/img/home/mockups/mockup-webgem.jpg","8da6ef38756fee86795b8b5e51d23264"],["links/img/home/mockups/mockup-webgem@0,5x.jpg","930c802d615f905546111dc3bb70d189"],["links/img/home/mockups/mockup-webgem@0,75x.jpg","c1a07c827be168766e70463dc0931736"],["links/img/home/mockups/mockup-webgem@2x.jpg","090faf958b44b2198ecb03ff5d98569c"],["links/img/home/mockups/mockup-werkopdracht.jpg","d8cf2e30aa0502e0cc855287c8f4af17"],["links/img/home/mockups/mockup-werkopdracht@0,5x.jpg","c7879904a7eb99e174250c53182019be"],["links/img/home/mockups/mockup-werkopdracht@0,75x.jpg","61b9802961b5ca356c77c400149ff6f5"],["links/img/home/mockups/mockup-werkopdracht@2x.jpg","98f4281375537421f9479afb6a468971"],["links/img/linkedIn.svg","017cada786e0494b03d4e1428877954c"],["links/img/logo.svg","a69daf20276f885a24eb7e8344f04239"],["links/img/mail.svg","d88e52d6aaa7a3841eac180b1901618f"],["links/img/phone.svg","87224a619619a654660c10d93b1be3fc"],["links/img/projecten/bergo/design-bergo1.jpg","1dc89099cf105fc3fe9461d51ebcb869"],["links/img/projecten/bergo/design-bergo2.jpg","3ea22b603f2244b5e0e3cff9edd038ac"],["links/img/projecten/bergo/design-bergo3.jpg","b2ab9d11dbea9eea0a02c1ec53475234"],["links/img/projecten/bergo/showcase-bergo2.jpg","b91571b08f13fbb3ba7b26c6d6723343"],["links/img/projecten/bergo/wireframes.jpg","9d7eacbf366058179a9554e322885d71"],["links/img/projecten/fotoreeks/reeks-foto-1.jpg","c813fa9c2a3fb84c504514dcd89530cd"],["links/img/projecten/fotoreeks/reeks-foto-1@0,25x.jpg","1389f7e00e87f1980384bce5ee6fb0a7"],["links/img/projecten/fotoreeks/reeks-foto-1@0,5x.jpg","797446f0dfc65d24e228352ea67f1fef"],["links/img/projecten/fotoreeks/reeks-foto-1@0,75x.jpg","563e3a75fefd719f22e2596df5197b1a"],["links/img/projecten/fotoreeks/reeks-foto-1@2x.jpg","3b7d4f45e48a746281b623b1ed7bcd2f"],["links/img/projecten/fotoreeks/reeks-foto-2.jpg","6ecb3701e4631a3518c22752e7d54fb4"],["links/img/projecten/fotoreeks/reeks-foto-2@0,25x.jpg","2b4b1612ec9698665e96117dbc8be848"],["links/img/projecten/fotoreeks/reeks-foto-2@0,5x.jpg","8756ebdcf8e2b95ffaff4a4853ddee44"],["links/img/projecten/fotoreeks/reeks-foto-2@0,75x.jpg","f1ba1a51ec35bfbad70f47ea7961c233"],["links/img/projecten/fotoreeks/reeks-foto-2@2x.jpg","6ae654cba6cb2efddd7904a3fe1c1dc4"],["links/img/projecten/fotoreeks/reeks-foto-3.jpg","1be8d99d9bbf204ab19b16e70952ae1c"],["links/img/projecten/fotoreeks/reeks-foto-3@0,25x.jpg","348f37aac7e7dbdab7b627b92f1d1bb6"],["links/img/projecten/fotoreeks/reeks-foto-3@0,5x.jpg","3e6f4133e872c9235375d6c946070de4"],["links/img/projecten/fotoreeks/reeks-foto-3@0,75x.jpg","80330bd0b85008d6a732c11a28820687"],["links/img/projecten/fotoreeks/reeks-foto-3@2x.jpg","0186da4023503634a653e063f096a28e"],["links/img/projecten/fotoreeks/showcase-bottom.jpg","ab259f1ce5e514030973a06287c7f5a5"],["links/img/projecten/fotoreeks/showcase.jpg","a2b9adefc96507259a5286e1c42ff60f"],["links/img/projecten/hiphopwarfare/facebook.jpg","c13b298a4837acd64b753cad18493f61"],["links/img/projecten/hiphopwarfare/showcase.jpg","293675486515be771a3681202a5300af"],["links/img/projecten/hiphopwarfare/stickers.jpg","f3cb9672def93b85509618364ca9ea65"],["links/img/projecten/jotf/design-1.jpg","ddaff7b91f919e539d81a2bfde7c61f1"],["links/img/projecten/jotf/design-2.jpg","550e45a7e4f356e11535741da260c8d7"],["links/img/projecten/jotf/design-3.jpg","9a0b6058c01d9fe4f250185723798727"],["links/img/projecten/jotf/moodboord.jpg","0614630664d343786c4962cc1b593a66"],["links/img/projecten/jotf/showcase.jpg","9b1c792c2e86cc1d3b2c8d7a5c3e00ed"],["links/img/projecten/jquery/showcase.jpg","ec87ca6fe50131211545041e33a194da"],["links/img/projecten/nieuwsbrief/showcase.jpg","49136d999bd96284d5f436f9d6711d5b"],["links/img/projecten/onsgenoegen/werk-opdracht-des1.png","6409c8624bd20ecf29b29a8c680379af"],["links/img/projecten/onsgenoegen/werk-opdracht-des2.jpg","0125003544b1bb4b8d5115e004fb62fd"],["links/img/projecten/onsgenoegen/werk-opdracht-des3.jpg","378b23582ca3d58b41ab632d0714f14f"],["links/img/projecten/onsgenoegen/werken-opdracht.jpg","03800627e50fe72410571902ef09d1ba"],["links/img/projecten/onsgenoegen/werken-opdracht2.jpg","6da502d7f900eb6a899c9be1b028bfe0"],["links/img/projecten/onsgenoegen/wireframe-process-onsgenoegen.jpg","71995a311a06faf72066b21e1a436452"],["links/img/projecten/projectmanagement/bordderwijze.jpg","37e0431a20c465afb9407948a92548d9"],["links/img/projecten/projectmanagement/login.jpg","1ccbc3f4250d41c1df8bff12ac58ee9e"],["links/img/projecten/startup/design-1.jpg","ea5ceecfa539d49db871e31dfa8bd5b8"],["links/img/projecten/startup/design-2.jpg","aa666e8bae4b482efd5ee185e6166fc5"],["links/img/projecten/startup/design-3.jpg","d9e99a372b615e89b55b31c47dd412c8"],["links/img/projecten/startup/showcase.jpg","6126199647263d2e03cb3b1179eff3eb"],["links/img/projecten/startup/wireframes.jpg","0232f6da9de960d75cea6660c7fadfca"],["links/img/projecten/uva/screen1.png","3091ebed1ef7062923fc8f0d37fd47e9"],["links/img/projecten/uva/screen2.gif","b6b28084928558da09455fe725c51f74"],["links/img/projecten/uva/screen3.gif","4b02aafc79e2fb6627194f5a4d5a50a4"],["links/img/projecten/uva/showcase-uva.jpg","9f28b20a41af02868bc812c6cc3d6d21"],["links/img/projecten/webgem/logo-sketch-webgem.jpg","17f06be1a66df07133302dbedee38a7c"],["links/img/projecten/webgem/showcase.jpg","6b3f89e4434dbc303486dbb1bd63444f"],["links/img/responsive-des-anim.svg","d1200507afec5735ae1c61b73f057e16"],["links/img/thumbs/buurt-boerderij-thumb.jpg","01964b5d20b6979ed7c38844e078a175"],["links/img/thumbs/buurt-boerderij-thumb@0,5x.jpg","d151d78915339eb067a797035de8aa17"],["links/img/thumbs/buurt-boerderij-thumb@0,75x.jpg","7c5c20f8ce326bd0164328a173690af4"],["links/img/thumbs/buurt-boerderij-thumb@2x.jpg","5b5b702edd58e6925282240374e1dc58"],["links/img/thumbs/over-mij-thumb.jpg","e1041b1a74d09040409381fb2e3ba77f"],["links/img/thumbs/over-mij-thumb@0,5x.jpg","aa30632975eee5224f019014b8243071"],["links/img/thumbs/over-mij-thumb@0,75x.jpg","a53704b9dfb69ed90c7b467e2e8677ca"],["links/img/thumbs/over-mij-thumb@2x.jpg","bfe6adba03efb81fddac03a48f4d001d"],["links/img/thumbs/vaardigheden-thumb.jpg","5c117263dc54f9bed785eb57b3c47aea"],["links/img/thumbs/vaardigheden-thumb@0,5x.jpg","c48bc04c5684ed41e5651d725b3803bb"],["links/img/thumbs/vaardigheden-thumb@0,75x.jpg","0c86c31e0c526002fd2fe0c99d3bc4b2"],["links/img/thumbs/vaardigheden-thumb@2x.jpg","fa9d3301a1990a00edce1e9536f65925"],["links/img/top.svg","2e2700d1099cc541c5887efe9277834c"],["links/img/twitter.svg","9b9c8fb33a743789d23a22ed7c0c48ae"],["links/pdf/cv.pdf","c75fff72ce73011c7b39c11fe71c2507"],["links/reeks/css/style.css","cbb077d4f88a8480deb15cea5b860dd9"],["links/reeks/index.html","92101d8bba0791fcb95733dadb11bacb"],["manifest.json","bac883343b3addbe3cc4f636c4195a18"],["ms-icon-144x144.png","d3890b88bfb6b5d8c3bad1fae196f16c"],["ms-icon-150x150.png","e2dece3f5c6168a2e32a0ccccc5527c7"],["ms-icon-310x310.png","847e390ec8bd483b7039547899f4a576"],["ms-icon-70x70.png","38f1a0463be1274b9882288607177390"],["nieuwsbrief.html","a296176ddb062ed56aecd4ab915330ea"],["ons-genoegen.html","ec9846152fc399f61c0a9fcd803da8f1"],["photography.html","8e53ee975ebb971c7ee4b1cf239cbba5"],["popupled.html","d14b859137d732c76a6eca1d89a79d69"],["projectmanagement.html","3cff29682c777576c232e011917fb102"],["robots.txt","8ec8ca95c9a1aa7871aab296eb280ec7"],["stedenproject.html","21b374d3af41fd0350dae2310a1853e3"],["uva.html","8e53ee975ebb971c7ee4b1cf239cbba5"],["webgem.html","2d3a77db6fdb4e756d829cabd5e03045"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {

      // Force the SW to transition from installing -> active state
      return self.skipWaiting();

    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {

      return self.clients.claim();

    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







