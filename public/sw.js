if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise(async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()})),i.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},i=(i,c)=>{Promise.all(i.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(i)};self.define=(i,n,a)=>{c[i]||(c[i]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+i.slice(1)};return Promise.all(n.map(i=>{switch(i){case"exports":return c;case"module":return r;default:return e(i)}})).then(e=>{const i=a(...e);return c.default||(c.default=i),c})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"9jUn2FtIdrtxhVJptQGZd"},{url:"/_next/static/9jUn2FtIdrtxhVJptQGZd/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/9jUn2FtIdrtxhVJptQGZd/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/9jUn2FtIdrtxhVJptQGZd/pages/_app.js",revision:"4fd4c92295f5670e743b160c6fc2867d"},{url:"/_next/static/9jUn2FtIdrtxhVJptQGZd/pages/_error.js",revision:"28537065789c48a8fdabff7cd54fb2be"},{url:"/_next/static/9jUn2FtIdrtxhVJptQGZd/pages/index.js",revision:"1db04ca3bb0142934889ce8ae1de92b2"},{url:"/_next/static/chunks/commons.34684228d50c6c140f9e.js",revision:"fd98fd4056e9cfdcae900925ff8eaa58"},{url:"/_next/static/chunks/framework.619a4f70c1d4d3a29cbc.js",revision:"8e6204793e3d11a8bedf359bfb6e110d"},{url:"/_next/static/css/6f53ce4ea04187a496a6.css",revision:"460ac7a40e3792efff81e6264c1e2f6a"},{url:"/_next/static/media/hero.e24bf3cb5206343a56042c2b06c1c2bf.jpg",revision:"515ea5998aae5c8c8061fb33c57b92e0"},{url:"/_next/static/runtime/main-123e4016bc26dfb9f91f.js",revision:"6dd87bb6f0c777fd2ff1b87043c57324"},{url:"/_next/static/runtime/polyfills-db3eeaf8fbc6db3a50d4.js",revision:"cf3e362240114c40790b57c8ebecab35"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/about_me.png",revision:"cc7392603e207b2a1cdd67d1b08160fd"},{url:"/apple-icon-114x114.png",revision:"2f60854cf22ef63777a4802743a9e7b9"},{url:"/apple-icon-120x120.png",revision:"6bfbd6ec9a91648d1bcd096036d81a03"},{url:"/apple-icon-144x144.png",revision:"87d0133e1f18010032164beabf7662e2"},{url:"/apple-icon-152x152.png",revision:"791c932686939faefd611f98fda7d385"},{url:"/apple-icon-180x180.png",revision:"7edf7920d50d7032043708b325d172cc"},{url:"/apple-icon-57x57.png",revision:"47f85dab9105618ca5cdfcf943068bd5"},{url:"/apple-icon-60x60.png",revision:"8f8b2b3d2ede174d2cc3854a1fd1201f"},{url:"/apple-icon-72x72.png",revision:"4b6af7caffdd57a40cd9f1b5f046d171"},{url:"/apple-icon-76x76.png",revision:"56319432c68c90ad99a453ab2e67c8bc"},{url:"/apple-icon.png",revision:"3ee824ca3ff337278edd5155ea9923c1"},{url:"/developer_activity.png",revision:"7ec183440badc1e42cc7c560cee65428"},{url:"/developer_activity.svg",revision:"a5536adbce162bd0ea5db5d912f455e6"},{url:"/drf.png",revision:"0f963936cd2efcf5adfd97acf020de02"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon-96x96.png",revision:"4903eb1430037599667b0bbdf9c74ec5"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/hero.jpg",revision:"212f6054847e0bc80fc5932ac97a26d5"},{url:"/images/bt-next.png",revision:"66461c876f4cd2d5f930c50d926cdf36"},{url:"/images/bt-next@2x.png",revision:"97bdf43b85eb6303ac2434afa6e60a91"},{url:"/images/bt-prev.png",revision:"c063a065b7c3a7034a3ca99e4d48deb2"},{url:"/images/bt-prev@2x.png",revision:"574d160b2d228d70da2647c0bc9ec4d4"},{url:"/images/icons/icon-128x128.png",revision:"0de6c93efc230714e0b8d342e5a52c16"},{url:"/images/icons/icon-144x144.png",revision:"a2262f4a0a9608c63eee9a8fea26fc7a"},{url:"/images/icons/icon-152x152.png",revision:"be2b7ff6eeff8c3f1cc28e2e37efbced"},{url:"/images/icons/icon-192x192.png",revision:"1cddc56ed678cdcb70c759b3e519e85c"},{url:"/images/icons/icon-384x384.png",revision:"e7d4b306a0b2fbb6fe2c6f40b6cb12c8"},{url:"/images/icons/icon-512x512.png",revision:"cd224428dc1de61e0e88be59736cb301"},{url:"/images/icons/icon-72x72.png",revision:"7d57d7b8afe495bd5a6f97308d0f14e1"},{url:"/images/icons/icon-96x96.png",revision:"0189bac56d916b77b0bc735724ba5172"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/onasanya_tunde.jpg",revision:"925e690001fa605c0caf270d497fe778"},{url:"/portfolio_images/afrivent.png",revision:"7ef981fe4ab319dfb85ecf7b3647e722"},{url:"/portfolio_images/covidnewsng-netlify-app.png",revision:"88a52aae5225c1b55e983e7fa1be9435"},{url:"/portfolio_images/devconnectz-netlify-app.png",revision:"7efa58a2017eecde60a48809c1bb3664"},{url:"/portfolio_images/docufix.png",revision:"21d7d787646beb993c0962cd41f636cb"},{url:"/portfolio_images/rates-exchanger-now-sh.png",revision:"b2e1b1b31c71e6b19e87e1d95c233831"},{url:"/web_developer.png",revision:"9f4ef62be45230a94ca2df3597869189"},{url:"/web_developer.svg",revision:"73807d02f811450401c47d3e7af9c101"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));