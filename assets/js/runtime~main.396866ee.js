(()=>{"use strict";var e,a,d,c,f,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var d=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(d.exports,d,d.exports,t),d.loaded=!0,d.exports}t.m=b,t.c=r,e=[],t.O=(a,d,c,f)=>{if(!d){var b=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],f=e[i][2];for(var r=!0,o=0;o<d.length;o++)(!1&f||b>=f)&&Object.keys(t.O).every((e=>t.O[e](d[o])))?d.splice(o--,1):(r=!1,f<b&&(b=f));if(r){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[d,c,f]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);t.r(f);var b={};a=a||[null,d({}),d([]),d(d)];for(var r=2&c&&e;"object"==typeof r&&!~a.indexOf(r);r=d(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(f,b),f},t.d=(e,a)=>{for(var d in a)t.o(a,d)&&!t.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,d)=>(t.f[d](e,a),a)),[])),t.u=e=>"assets/js/"+({21:"f8bc495b",151:"9bb79678",232:"ba61fead",244:"9577a003",433:"ab5db856",447:"f5662377",497:"51f929ba",507:"d024dbb7",509:"1cf02e48",526:"428781bc",620:"308b9a60",638:"d2ddcd17",651:"a522f335",724:"dfa7ee39",746:"e3f8722a",792:"45ee61b4",829:"f6e4f4d1",851:"f9918cf0",883:"21fdcd54",960:"e563710e",1049:"6e38c96d",1050:"d5b93b7a",1055:"3297b3cf",1085:"4134c948",1152:"18fd499b",1170:"7649a115",1182:"3b4ae194",1268:"fe527d89",1311:"3dcc1811",1329:"1fe12e5e",1364:"94dee491",1438:"16aa70da",1441:"e8588730",1479:"73d5ac9d",1584:"a541e71b",1648:"ea0c7ead",1698:"86a40498",1779:"75e063e1",1859:"b894dfab",1860:"c014c349",1869:"d2c90100",1885:"56fa55db",1909:"0acaef86",1930:"1f317c5c",1935:"bde2cc75",1937:"db087f1e",1947:"b7fffa36",1976:"b137265b",2015:"02b4885c",2166:"87f14326",2214:"3713734a",2228:"c48537d7",2380:"e6a2fdcd",2421:"6c6e7898",2438:"1b09a0b8",2449:"360d90fc",2561:"e16b7fbb",2571:"e435cfaf",2648:"bae6605a",2738:"2c436210",2779:"a5c4c557",2826:"e2075008",2836:"b765d778",2856:"0ad0b70c",2880:"705221e9",2962:"f7606910",3069:"9ea385f7",3070:"334ccce4",3101:"19d1fdcc",3182:"4c004a9a",3222:"32b0f10d",3226:"8111a3e6",3299:"362e85e2",3352:"a5348ab6",3396:"e27f2ad4",3398:"6b4cd5f7",3401:"5f71e328",3464:"31f8b9db",3477:"3f87d911",3513:"864e2d1c",3582:"d33f3a16",3629:"0f51ecd2",3633:"85545b3f",3646:"df98ea43",3714:"91da0f8a",3828:"5bab44a3",3934:"e0e4f705",3950:"470f7485",3992:"57efcd46",4007:"1c3d6923",4062:"9cefbe90",4148:"f58d276b",4156:"87bfd942",4175:"e91ad947",4235:"e086eb6f",4317:"785e93cc",4320:"332063b2",4322:"4d513193",4326:"551beaed",4378:"ba8ba3ca",4406:"b5d80d3a",4431:"f4a2c2cd",4436:"7ef92a7a",4605:"ba4e0fc6",4659:"f7d3e291",4671:"18ca381c",4684:"fbce5329",4692:"ed8881ee",4712:"102221fb",4772:"9a34211c",4808:"2afc109c",4867:"566fca6d",4941:"53462cc3",5059:"62458776",5083:"3432abba",5112:"c739b0cf",5155:"34cad089",5201:"cb6f6c10",5216:"9a2de25b",5222:"cc1e9d98",5280:"947d93a6",5378:"edc272a0",5409:"9f996f20",5434:"d3b48f35",5545:"54dae700",5591:"61a82c32",5624:"0db9c1d1",5636:"69484fd9",5658:"5e695e25",5675:"2ed41215",5710:"1bf660d2",5821:"bccc07e8",5838:"cc8593dd",5839:"677a173a",6001:"327242c5",6130:"d028aa26",6145:"93ec12a4",6160:"0c82aa29",6267:"a1599ead",6278:"ff352f8e",6287:"faae8c81",6346:"4f88201c",6458:"b3a8f1f6",6568:"71f180df",6614:"41d90fa8",6644:"1353c889",6676:"c1858103",6778:"ea4a59fb",6812:"aca2760c",6940:"0bd2c974",7038:"4c66f949",7048:"651ba149",7054:"9dd8a0d2",7196:"124d3140",7220:"3c1d5034",7255:"a0dbcd97",7266:"da3a4eaa",7279:"9130b306",7288:"82cc4b38",7312:"251add18",7504:"686e2d5e",7540:"083ba1a5",7607:"b15f360d",7609:"f63f8557",7636:"11be53eb",7672:"747f5392",7715:"c71579b2",7820:"e6d56319",7918:"17896441",7953:"6db82bc9",7975:"3ec722a3",8048:"60dae6d2",8173:"e9aa1925",8185:"9f728463",8219:"ed106741",8239:"640ab4f3",8242:"64f46b7d",8250:"8ee4b081",8251:"3e198371",8252:"9e06bf79",8266:"2961fe0c",8277:"24661229",8330:"92fd19fe",8340:"6b290443",8415:"615df5c5",8481:"7affe11b",8530:"34ce6e12",8556:"5bf42636",8579:"095a3f38",8628:"04fa5783",8676:"04cf6173",8727:"4faa38a8",8772:"034a938f",8828:"24b9bdf4",8829:"3d0aa340",8841:"da3993b1",8875:"2c75c779",8895:"fc8ba707",8904:"dd4abf90",8925:"78569033",8945:"4807221e",8972:"2f52914e",9057:"658f0bb9",9107:"3a86fc6d",9179:"91b6088c",9190:"ea799005",9239:"e638acc2",9272:"d334f4c8",9317:"eca707a7",9360:"de9a9864",9392:"f063591b",9484:"2bf3d052",9488:"f15bef97",9514:"1be78505",9606:"7ec369c4",9683:"190ecd22",9768:"4a252405",9827:"ce7f4ae8",9829:"802d6584",9832:"48f1e6d5",9894:"b26a7db5",9944:"8184bea0"}[e]||e)+"."+{21:"c5b9ca1c",151:"72bcaa78",232:"734ad1fb",244:"211d0d9f",433:"171acd58",447:"bd350b96",497:"26a95002",507:"32703c00",509:"25b8f655",526:"3071c076",620:"c3306fc8",638:"3a8f41d2",651:"9299414f",724:"dd44b173",746:"899ee10a",792:"813a2efe",829:"69936fc3",851:"630683a0",883:"9be9e599",960:"7772a9fa",1049:"2328fb2e",1050:"d92f2b79",1055:"53793592",1085:"ca91af38",1152:"859436e7",1170:"03001d88",1182:"099a67d0",1268:"6003716e",1311:"ac3fa63b",1329:"ea510b34",1364:"eff3935b",1438:"86f26419",1441:"f3fd5bd5",1479:"8e33422b",1584:"1f85ef6d",1648:"7cd0f8a3",1698:"666a5a00",1779:"0e625fd9",1859:"0d18451b",1860:"fba8f574",1869:"6b825fd7",1885:"f7c86515",1909:"c45be2af",1930:"ca2dcbc6",1935:"9c025358",1937:"1d7fe13a",1947:"2fd5c587",1976:"b50a3b97",2015:"b766790e",2166:"438c12a7",2214:"4b88c7d8",2228:"7cce8b1d",2380:"3291b26a",2421:"f5ac3411",2438:"8fe6c2ee",2449:"fa9704bc",2561:"84c31216",2571:"1ced0ab1",2648:"977c01c8",2738:"a2770a0d",2779:"8b6b0002",2826:"78cd9470",2836:"b07f1fcf",2856:"ddea2cc8",2880:"ba93d75e",2962:"ca53004e",3069:"28663391",3070:"7a41b63c",3101:"25093d07",3182:"6a1b301f",3222:"9b984484",3226:"1e1de058",3299:"495399af",3352:"b635b896",3396:"dc12e861",3398:"3938c268",3401:"f20fb83b",3464:"49a5741e",3477:"9488c71b",3513:"be7885b6",3582:"ae3f1e13",3629:"5ab8454a",3633:"a86fe75b",3646:"cdadd204",3714:"4a2589b5",3828:"cc3a20b0",3934:"329cea5e",3950:"4f22aac5",3992:"b65276b4",4007:"1de65a92",4062:"ec8e6365",4148:"5df1d3a7",4156:"ab0333c8",4175:"bd4a611f",4235:"def4c136",4317:"20804713",4320:"e8efcff6",4322:"aa35d241",4326:"2f0056d9",4378:"7777f10d",4406:"038c736d",4431:"b88d2134",4436:"8ae45f37",4605:"20b7771e",4659:"56121d50",4671:"20d27d31",4684:"83ac450e",4692:"c23da0d5",4712:"9c5a65dc",4772:"7dfe94b2",4808:"e04bf175",4867:"8bcc20e8",4941:"53373891",4972:"91eead52",5059:"8cfdee47",5083:"13e6155d",5112:"c15d69d4",5155:"52c92ec3",5201:"3987ccde",5216:"ae07c939",5222:"2c9d2e32",5280:"aa8ce2f5",5378:"ffc40e06",5409:"6294a6b0",5434:"64f6e5aa",5545:"5e14a133",5591:"1d5cdf49",5624:"6ca2d24b",5636:"47253473",5658:"833faf4d",5675:"1674d7d3",5710:"b8af3707",5821:"4afc551d",5838:"cfe456cf",5839:"5fddf0dd",6001:"7a2f8686",6130:"bfb3e59e",6145:"0382c0cc",6160:"6a06a76b",6267:"dfd67c2c",6278:"12e3653a",6287:"e4b2ad69",6346:"72bf8752",6458:"32e32f20",6568:"75f2c700",6614:"e5bd6937",6644:"1a73d555",6676:"ec7bde7e",6778:"9d7a3030",6812:"77846728",6940:"d560cb36",7038:"3878fa19",7048:"ae4d8bc2",7054:"a35b9e60",7196:"2fef7a46",7220:"722238b1",7255:"10e4c8d9",7266:"ee741748",7279:"ebf60bb6",7288:"2a7241c4",7312:"fbb04b22",7504:"0e035bc4",7540:"a394f274",7607:"d27db218",7609:"d7396211",7636:"2d36ec47",7672:"282ee403",7715:"e6590e2e",7820:"614c6c90",7918:"cee560ad",7953:"a2c9a7a1",7975:"6f5ceb90",8048:"dd75837c",8173:"9bb51cad",8185:"7fad37d9",8219:"2085b1e7",8239:"4ee88471",8242:"3e7e5c06",8250:"315d1365",8251:"b1350efe",8252:"3cb6483a",8266:"b285e746",8277:"34b2f2dd",8330:"22e26056",8340:"4a0c9ad6",8415:"8f744689",8481:"d47f7f13",8530:"1785ab6b",8556:"3249eacd",8579:"0128f477",8628:"4232d97a",8676:"fc46a5e2",8727:"1f594ff1",8772:"f9c91360",8828:"7f68aa02",8829:"0bf36d4e",8841:"f04f255b",8875:"16f79a9b",8895:"60f5f256",8904:"9016a7c3",8925:"ca3a17e8",8945:"5bdf9961",8972:"8f087fc9",9057:"9b475135",9107:"ffe4fba9",9179:"7cd8127d",9190:"b0aed176",9239:"2abf181d",9272:"306fff2a",9317:"a6bcbe85",9360:"29c5c6d0",9392:"3d07d944",9484:"52b9987b",9488:"6200e134",9514:"ec9b6262",9606:"b475c280",9683:"e22981c3",9768:"0dd8535e",9827:"7b73319a",9829:"7871b872",9832:"a80b71c2",9894:"bccc0797",9944:"eb691be9"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},f="react-query-web-i18n:",t.l=(e,a,d,b)=>{if(c[e])c[e].push(a);else{var r,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+d){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+d),r.src=e),c[e]=[a];var l=(a,d)=>{r.onerror=r.onload=null,clearTimeout(s);var f=c[e];if(delete c[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/react-query-web-i18n/",t.gca=function(e){return e={17896441:"7918",24661229:"8277",62458776:"5059",78569033:"8925",f8bc495b:"21","9bb79678":"151",ba61fead:"232","9577a003":"244",ab5db856:"433",f5662377:"447","51f929ba":"497",d024dbb7:"507","1cf02e48":"509","428781bc":"526","308b9a60":"620",d2ddcd17:"638",a522f335:"651",dfa7ee39:"724",e3f8722a:"746","45ee61b4":"792",f6e4f4d1:"829",f9918cf0:"851","21fdcd54":"883",e563710e:"960","6e38c96d":"1049",d5b93b7a:"1050","3297b3cf":"1055","4134c948":"1085","18fd499b":"1152","7649a115":"1170","3b4ae194":"1182",fe527d89:"1268","3dcc1811":"1311","1fe12e5e":"1329","94dee491":"1364","16aa70da":"1438",e8588730:"1441","73d5ac9d":"1479",a541e71b:"1584",ea0c7ead:"1648","86a40498":"1698","75e063e1":"1779",b894dfab:"1859",c014c349:"1860",d2c90100:"1869","56fa55db":"1885","0acaef86":"1909","1f317c5c":"1930",bde2cc75:"1935",db087f1e:"1937",b7fffa36:"1947",b137265b:"1976","02b4885c":"2015","87f14326":"2166","3713734a":"2214",c48537d7:"2228",e6a2fdcd:"2380","6c6e7898":"2421","1b09a0b8":"2438","360d90fc":"2449",e16b7fbb:"2561",e435cfaf:"2571",bae6605a:"2648","2c436210":"2738",a5c4c557:"2779",e2075008:"2826",b765d778:"2836","0ad0b70c":"2856","705221e9":"2880",f7606910:"2962","9ea385f7":"3069","334ccce4":"3070","19d1fdcc":"3101","4c004a9a":"3182","32b0f10d":"3222","8111a3e6":"3226","362e85e2":"3299",a5348ab6:"3352",e27f2ad4:"3396","6b4cd5f7":"3398","5f71e328":"3401","31f8b9db":"3464","3f87d911":"3477","864e2d1c":"3513",d33f3a16:"3582","0f51ecd2":"3629","85545b3f":"3633",df98ea43:"3646","91da0f8a":"3714","5bab44a3":"3828",e0e4f705:"3934","470f7485":"3950","57efcd46":"3992","1c3d6923":"4007","9cefbe90":"4062",f58d276b:"4148","87bfd942":"4156",e91ad947:"4175",e086eb6f:"4235","785e93cc":"4317","332063b2":"4320","4d513193":"4322","551beaed":"4326",ba8ba3ca:"4378",b5d80d3a:"4406",f4a2c2cd:"4431","7ef92a7a":"4436",ba4e0fc6:"4605",f7d3e291:"4659","18ca381c":"4671",fbce5329:"4684",ed8881ee:"4692","102221fb":"4712","9a34211c":"4772","2afc109c":"4808","566fca6d":"4867","53462cc3":"4941","3432abba":"5083",c739b0cf:"5112","34cad089":"5155",cb6f6c10:"5201","9a2de25b":"5216",cc1e9d98:"5222","947d93a6":"5280",edc272a0:"5378","9f996f20":"5409",d3b48f35:"5434","54dae700":"5545","61a82c32":"5591","0db9c1d1":"5624","69484fd9":"5636","5e695e25":"5658","2ed41215":"5675","1bf660d2":"5710",bccc07e8:"5821",cc8593dd:"5838","677a173a":"5839","327242c5":"6001",d028aa26:"6130","93ec12a4":"6145","0c82aa29":"6160",a1599ead:"6267",ff352f8e:"6278",faae8c81:"6287","4f88201c":"6346",b3a8f1f6:"6458","71f180df":"6568","41d90fa8":"6614","1353c889":"6644",c1858103:"6676",ea4a59fb:"6778",aca2760c:"6812","0bd2c974":"6940","4c66f949":"7038","651ba149":"7048","9dd8a0d2":"7054","124d3140":"7196","3c1d5034":"7220",a0dbcd97:"7255",da3a4eaa:"7266","9130b306":"7279","82cc4b38":"7288","251add18":"7312","686e2d5e":"7504","083ba1a5":"7540",b15f360d:"7607",f63f8557:"7609","11be53eb":"7636","747f5392":"7672",c71579b2:"7715",e6d56319:"7820","6db82bc9":"7953","3ec722a3":"7975","60dae6d2":"8048",e9aa1925:"8173","9f728463":"8185",ed106741:"8219","640ab4f3":"8239","64f46b7d":"8242","8ee4b081":"8250","3e198371":"8251","9e06bf79":"8252","2961fe0c":"8266","92fd19fe":"8330","6b290443":"8340","615df5c5":"8415","7affe11b":"8481","34ce6e12":"8530","5bf42636":"8556","095a3f38":"8579","04fa5783":"8628","04cf6173":"8676","4faa38a8":"8727","034a938f":"8772","24b9bdf4":"8828","3d0aa340":"8829",da3993b1:"8841","2c75c779":"8875",fc8ba707:"8895",dd4abf90:"8904","4807221e":"8945","2f52914e":"8972","658f0bb9":"9057","3a86fc6d":"9107","91b6088c":"9179",ea799005:"9190",e638acc2:"9239",d334f4c8:"9272",eca707a7:"9317",de9a9864:"9360",f063591b:"9392","2bf3d052":"9484",f15bef97:"9488","1be78505":"9514","7ec369c4":"9606","190ecd22":"9683","4a252405":"9768",ce7f4ae8:"9827","802d6584":"9829","48f1e6d5":"9832",b26a7db5:"9894","8184bea0":"9944"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,d)=>{var c=t.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((d,f)=>c=e[a]=[d,f]));d.push(c[2]=f);var b=t.p+t.u(a),r=new Error;t.l(b,(d=>{if(t.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var f=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",r.name="ChunkLoadError",r.type=f,r.request=b,c[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,d)=>{var c,f,b=d[0],r=d[1],o=d[2],n=0;if(b.some((a=>0!==e[a]))){for(c in r)t.o(r,c)&&(t.m[c]=r[c]);if(o)var i=o(t)}for(a&&a(d);n<b.length;n++)f=b[n],t.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return t.O(i)},d=self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();