var a=['getCacheKeyForURL','Plugin','skipWaiting','strategies','document','put','setCacheNameDetails','info','https://','[PWA]\x20service\x20worker\x20starting\x20up.','then','event','expiration','google','routing','json','[PWA]\x20catch\x20handler\x20default\x20for\x20event:','test','precaching','core','method','destination','apis.com/','precache','exception','{}.constructor(\x22return\x20this\x22)(\x20)','respondWith','GET','length','navigate','bind','clientsClaim','POST','NetworkFirst','origin','apply','console','[PWA]\x20returning\x20','stringify','return\x20(function()\x20','table','pwa-by-shop-sheriff','request','zencoutoure-pages-cache','match','trace','runtime','toString','mode','zencoutoure','\x20for\x20route:\x20','-cdn/releases/','log','same-origin','error','only-if-cached','url','__proto__','fetch','prototype','/lang','registerRoute','workbox'];(function(b,c){var d=function(e){while(--e){b['push'](b['shift']());}};d(++c);}(a,0x144));var b=function(c,d){c=c-0x19e;var e=a[c];return e;};var C=b,f=function(){var o=!![];return function(p,q){var r=o?function(){var z=b;if(q){var s=q[z(0x1b8)](p,arguments);return q=null,s;}}:function(){};return o=![],r;};}(),g=f(this,function(){var B=b,o=function(){var A=b,x;try{x=Function(A(0x1bc)+A(0x1ae)+');')();}catch(y){x=window;}return x;},p=o(),q=p[B(0x1b9)]=p['console']||{},r=[B(0x1c9),'warn',B(0x1db),B(0x1cb),B(0x1ad),B(0x1bd),B(0x1c2)];for(var s=0x0;s<r[B(0x1b1)];s++){var t=f['constructor'][B(0x1d0)][B(0x1b3)](f),u=r[s],v=q[u]||t;t[B(0x1ce)]=f[B(0x1b3)](f),t[B(0x1c4)]=v['toString'][B(0x1b3)](v),q[u]=t;}});g();'use strict';console[C(0x1c9)](C(0x19e)),importScripts(C(0x1dc)+'storage'+'.'+C(0x1a2)+C(0x1ab)+C(0x1d3)+C(0x1c8)+'4'+'.0.0/'+C(0x1d3)+'-sw.js');var h=workbox;h['setConfig']({'debug':![]});var i=C(0x1a8),j=C(0x1da);const k='/a/pwa/zencoutoure/offline',l=C(0x1be);workbox['core'][C(0x1da)]({'prefix':C(0x1c6),'suffix':'v1','precache':C(0x1ac),'runtime':C(0x1c3)});const m=C(0x1d1);self['addEventListener'](C(0x1cf),function(o){var D=C;const {request:p,request:{url:q,method:r}}=o;if(q['match'](m)){if(r===D(0x1b5))return p[D(0x1a4)]()[D(0x19f)](function(s){var E=D;caches['open'](m)[E(0x19f)](function(t){var F=E;t[F(0x1d9)](m,new Response(JSON[F(0x1bb)](s)));});}),new Response('{}');else o[D(0x1af)](caches['open'](m)[D(0x19f)](function(s){var G=D;return s[G(0x1c1)](m)[G(0x19f)](function(t){return t||new Response('{}');;})||new Response('{}');}));}else return o;}),h['routing'][C(0x1d2)](/\/(\?utm.*)?$/,new h['strategies'][(C(0x1b6))]());const n=[];h[C(0x1a7)]['precacheAndRoute'](n),workbox[C(0x1a8)][C(0x1d6)](),workbox[C(0x1a8)][C(0x1b4)](),h[C(0x1a3)][C(0x1d2)](function(o){var H=C,p=o['event'],q=new URL(p[H(0x1bf)]['url']);if(p[H(0x1bf)][H(0x1c5)]!==H(0x1b2))return![];if(p[H(0x1bf)]['cache']==='only-if-cached'&&p['request'][H(0x1c5)]!==H(0x1ca))return![];if(location[H(0x1b7)]!==q['origin'])return![];if(p[H(0x1bf)][H(0x1a9)]!==H(0x1b0))return![];if(![]){const s=/(\/pages|\/collections|\/products|\/blogs|\/search)/[H(0x1a6)](p[H(0x1bf)][H(0x1cd)]);if(s)return console[H(0x1c9)]('[PWA]\x20route\x20blacklisted\x20by\x20regexp\x20undefined.\x20return\x20false'),![];}const r=/(\/pages|\/collections|\/products|\/blogs|\/search)/['test'](p[H(0x1bf)]['url']);return console['log'](H(0x1ba),r,H(0x1c7),p[H(0x1bf)][H(0x1cd)]),r;},new h[(C(0x1d7))][(C(0x1b6))]({'cacheName':C(0x1c0),'plugins':[new h[(C(0x1a1))][(C(0x1d5))]({'purgeOnQuotaError':!![],'maxAgeSeconds':0x15180,'maxEntries':0x64}),new h['cacheableResponse']['Plugin']({'statuses':[0xc8]})]})),workbox[C(0x1a3)][C(0x1d2)](function(o){var I=C,p=o[I(0x1a0)],q=new URL(p['request'][I(0x1cd)]);if(p['request'][I(0x1c5)]!==I(0x1b2))return![];if(p[I(0x1bf)]['cache']==='only-if-cached'&&p['request']['mode']!=='same-origin')return![];if(location['origin']!==q['origin'])return![];if(p['request'][I(0x1a9)]!==I(0x1b0))return![];const r=/(\/cart)/['test'](p[I(0x1bf)]['url']);return console[I(0x1c9)]('[PWA]\x20returning\x20',r,I(0x1c7),p[I(0x1bf)][I(0x1cd)]),r;},new workbox['strategies'][(C(0x1b6))]()),workbox[C(0x1a3)][C(0x1d2)](function(o){var J=C,p=o[J(0x1a0)],q=new URL(p[J(0x1bf)][J(0x1cd)]);if(p['request'][J(0x1c5)]!=='navigate')return![];if(p[J(0x1bf)]['cache']===J(0x1cc)&&p[J(0x1bf)][J(0x1c5)]!==J(0x1ca))return![];if(location[J(0x1b7)]!==q[J(0x1b7)])return![];if(p[J(0x1bf)]['method']!==J(0x1b0))return![];const r=/(\/checkout)/[J(0x1a6)](p[J(0x1bf)][J(0x1cd)]);return console[J(0x1c9)](J(0x1ba),r,J(0x1c7),p[J(0x1bf)][J(0x1cd)]),r;},new workbox[(C(0x1d7))][(C(0x1b6))]()),h[C(0x1a3)]['setCatchHandler'](({event:o})=>{var K=C;let p;switch(o[K(0x1bf)][K(0x1aa)]){case K(0x1d8):console[K(0x1c9)]('[PWA]\x20catch\x20handler\x20for\x20event:',o),p=h[K(0x1a7)][K(0x1d4)]('/a/pwa/zencoutoure/offline');return caches[K(0x1c1)](p);break;default:console[K(0x1c9)](K(0x1a5),o);return Response['error']();}});