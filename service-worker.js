if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,i,c)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return r;case"module":return a;default:return s(e)}}))).then((s=>{const e=c(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["./workbox-3da7ccbc"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/balloon.css",revision:"912ebca1783e8fd82de43b1bb7c54c18"},{url:"assets/cursors/drag.png",revision:"2d3f8295f1fd96c909566d6e1d4a97ef"},{url:"assets/cursors/erase.png",revision:"9dbef6e2d96ba0332c515105c588aef5"},{url:"assets/cursors/ink.png",revision:"8fe9e7e7f6867c770ddb8b6a45c36cb6"},{url:"assets/cursors/label.png",revision:"fd25338761c79a72697ea1395fb68cd3"},{url:"assets/cursors/loop.png",revision:"efb680318270c28324beb5ec63b7ec39"},{url:"assets/cursors/pan.png",revision:"bcc46afdc54938da703c804529b0dfba"},{url:"assets/desktop.css",revision:"8ddc3999a0747d89ebd08e97286cdc41"},{url:"assets/fs.css",revision:"0d8b55e2eaa54e03b495f621574c82e9"},{url:"assets/icons/controls.png",revision:"967b555b75fefe044d1b3cf3f56d72e7"},{url:"assets/icons/drag.png",revision:"cfb5ab3221c471e63521d89f4041d5f7"},{url:"assets/icons/erase.png",revision:"baa27f3271e5bab904e8b31a9c154592"},{url:"assets/icons/ink.png",revision:"acf76b1582d5829c6c9cb09b452163f8"},{url:"assets/icons/label.png",revision:"3a8fd40757ef1aee3b13936be0d57af2"},{url:"assets/icons/lock.png",revision:"f314564d745d04411c2547125951e106"},{url:"assets/icons/logo.svg",revision:"5c4728f7d804eda88de250b4a9a288d4"},{url:"assets/icons/loop.png",revision:"9a16fb93c2c2caaaefa1e3c78315f562"},{url:"assets/icons/pan.png",revision:"f32a225d977279dbafe4088c481bf7eb"},{url:"assets/icons/separator.png",revision:"b36ce1e0d5a8154d40cf1ab305c24cc3"},{url:"assets/icons/speed_fast.png",revision:"0cbe52ab6c253c8866c114a6967b9116"},{url:"assets/icons/speed_slow.png",revision:"68d6d4ad05406672c6b26d93c3e7d263"},{url:"assets/loopy.css",revision:"d82feb4ed815ab5a5d67be3a7e5e0dd4"},{url:"assets/nicons/clone.svg",revision:"a713e767e96b81890bac3b5737fb8ce7"},{url:"assets/nicons/drag.svg",revision:"55748e1c723d8f5b924b56b771aa893d"},{url:"assets/nicons/erase.svg",revision:"d9878905d63319c25183e5112975136b"},{url:"assets/nicons/fs.svg",revision:"bd9da8be4e8c090ecfae124e4ebd4f5e"},{url:"assets/nicons/ink.svg",revision:"61519b6f0ecb0f6ccc3905576f82ee29"},{url:"assets/nicons/label.svg",revision:"c03edab224803a50e401304461b26281"},{url:"assets/nicons/lock.svg",revision:"3808519831e099cef81e2a18307b116e"},{url:"assets/nicons/loop.svg",revision:"4983e6f86a920dbe7b446f78e66a5490"},{url:"assets/nicons/mode.svg",revision:"436dbde452cf3ad01ddeb0f1631bf2c0"},{url:"assets/nicons/nicons.svg",revision:"68583ee1571d9ccc3c80df0397fd7fe0"},{url:"assets/nicons/pan.svg",revision:"1f6b3d7c1cae127b7e9a7259c1b5fc43"},{url:"assets/nicons/separator.svg",revision:"65704cceaefc768f5cbe76aa1348ff41"},{url:"assets/report.css",revision:"1778308504cd6340f11b4d0e84327a22"},{url:"assets/sliders/color.png",revision:"31bfd04d87f8ee03f63a6c60242fafed"},{url:"assets/sliders/delay.png",revision:"eb0189c9c1eaa73c0f13b109ebd5d7de"},{url:"assets/sliders/initial.png",revision:"058580b4015a25126cab053e63eb0f6a"},{url:"assets/sliders/slider_pointer.png",revision:"2f01bfb8f14c8e3348894a83993bcf06"},{url:"assets/sliders/strength.png",revision:"a580955e62f436ca6ec44e4e6d3efc51"},{url:"assets/sliders/strength_original.png",revision:"230f5e1c9fdbf426a9a907d54208e0e4"},{url:"assets/tablet.css",revision:"b53eb74bba3cd11ebbc16eea8125ac32"},{url:"assets/transitions.css",revision:"2441c630e886e7e2b9324497e49c08dc"},{url:"favicon.png",revision:"d4952748ad58eb1df9ea17d8152c5c29"},{url:"index.html",revision:"002ef57f8dc08084055214f0f9812637"},{url:"main.js",revision:"d6e6531d70fe7c74d9ff3c661b7e9f8d"},{url:"main.js.LICENSE.txt",revision:"3c50c48abea6228c3c29b8a91a8cd3cf"},{url:"report/index.html",revision:"1db6bb0bd823d122c09d36bd0a4ae1b9"}],{}),s.cleanupOutdatedCaches()}));
