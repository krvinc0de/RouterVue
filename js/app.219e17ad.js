(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],s=0,b=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6714683b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"e33c4241"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){l=b[u],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],d.parentNode.removeChild(d),n(a)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var b=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",b.name="ChunkLoadError",b.type=r,b.request=c,n[1](b)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b01":function(e,t,n){"use strict";var r=n("7a23"),c={class:"milky"};function o(e,t,n,o,a,u){return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["e"])("h1",c,Object(r["y"])(n.texto),1)])}var a={props:{texto:String}},u=(n("ec1a"),n("6b0d")),i=n.n(u);t["a"]=i()(a,[["render",o],["__scopeId","data-v-ccb1f8b4"]])},"2dd7":function(e,t,n){"use strict";n("d556")},"30eb":function(e,t,n){"use strict";n("4827")},4827:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["f"])("Home"),a=Object(r["f"])(" | "),u=Object(r["f"])("About"),i=Object(r["f"])(" | "),l=Object(r["f"])("Blog");function s(e,t){var n=Object(r["w"])("router-link"),s=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",c,[Object(r["g"])(n,{to:"/"},{default:Object(r["B"])((function(){return[o]})),_:1}),a,Object(r["g"])(n,{to:"/about"},{default:Object(r["B"])((function(){return[u]})),_:1}),i,Object(r["g"])(n,{to:"/Blog"},{default:Object(r["B"])((function(){return[l]})),_:1})]),Object(r["g"])(s)],64)}n("aad8");var b=n("6b0d"),d=n.n(b);const f={};var p=d()(f,[["render",s]]),j=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),O=n("6feb"),m=n.n(O),v=function(e){return Object(r["s"])("data-v-624191b9"),e=e(),Object(r["q"])(),e},g={class:"home"},h=v((function(){return Object(r["e"])("img",{class:"img",src:m.a},null,-1)}));function y(e,t,n,c,o,a){var u=Object(r["w"])("Titulo"),i=Object(r["w"])("subtitulo");return Object(r["p"])(),Object(r["d"])("div",g,[Object(r["g"])(u,{texto:"Hola"}),h,Object(r["g"])(i)])}var w=n("1b01"),x=function(e){return Object(r["s"])("data-v-505fa50a"),e=e(),Object(r["q"])(),e},B={class:"text-center"},_=x((function(){return Object(r["e"])("span",null,"Kevin Oswaldo Velazquez Medina",-1)})),k=x((function(){return Object(r["e"])("br",null,null,-1)})),A=x((function(){return Object(r["e"])("span",null,"Universidad tecnologica de salamanca",-1)})),T=x((function(){return Object(r["e"])("br",null,null,-1)})),P=x((function(){return Object(r["e"])("span",null,"Tecnologias de la informacion; Area desarrollo de software",-1)})),S=[_,k,A,T,P];function E(e,t){return Object(r["p"])(),Object(r["d"])("div",B,S)}n("30eb");const C={};var H=d()(C,[["render",E],["__scopeId","data-v-505fa50a"]]),q={name:"Home",components:{Titulo:w["a"],Subtitulo:H}},L=(n("2dd7"),d()(q,[["render",y],["__scopeId","data-v-624191b9"]])),M=Object(r["e"])("br",null,null,-1);function N(e,t,n,c,o,a){var u=Object(r["w"])("Titulo"),i=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])(u,{texto:"Blog de lorem"}),M,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.arrayBlog,(function(e){return Object(r["p"])(),Object(r["d"])("div",{key:e.id},[Object(r["g"])(i,{to:"/Blog/".concat(e.id)},{default:Object(r["B"])((function(){return[Object(r["f"])(Object(r["y"])(e.title),1)]})),_:2},1032,["to"])])})),128))])}var I=n("1da1"),R=(n("96cf"),{components:{Titulo:w["a"]},data:function(){return{arrayBlog:[]}},methods:{consumirApi:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/posts");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.arrayBlog=r,console.log(r),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},created:function(){this.consumirApi()}}),D=d()(R,[["render",N]]),z={class:"container"},J={class:"card",style:{width:"18rem"}},K=Object(r["e"])("img",{src:m.a,class:"card-img-top",alt:"..."},null,-1),U={class:"card-body"},$=Object(r["e"])("h5",{class:"card-title"},"Titulo",-1),F={class:"card-text"},V=Object(r["e"])("span",null,"Descripcion",-1),G={class:"list-group list-group-flush"},Q={class:"list-group-item"},W={class:"card-body"},X=Object(r["f"])("Atras"),Y=Object(r["f"])(" | "),Z=Object(r["f"])("Atras con router link");function ee(e,t,n,c,o,a){var u=Object(r["w"])("Titulo"),i=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])(u,{texto:"Hola"}),Object(r["e"])("h2",null,"Parametro: "+Object(r["y"])(e.$route.params.id),1),Object(r["e"])("div",z,[Object(r["e"])("div",J,[K,Object(r["e"])("div",U,[$,Object(r["e"])("p",F,Object(r["y"])(o.articulo.title),1)]),V,Object(r["e"])("ul",G,[Object(r["e"])("li",Q,Object(r["y"])(o.articulo.body),1)]),Object(r["e"])("div",W,[Object(r["g"])(i,{to:"/Blog",class:"btn btn-danger"},{default:Object(r["B"])((function(){return[X]})),_:1}),Y,Object(r["g"])(i,{to:"/Blog",class:"btn btn-danger"},{default:Object(r["B"])((function(){return[Z]})),_:1})])])])])}var te={components:{Titulo:w["a"]},data:function(){return{articulo:{}}},methods:{consumirArticulo:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/posts/".concat(e.$route.params.id));case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.articulo=r,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},created:function(){this.consumirArticulo()}},ne=d()(te,[["render",ee]]),re=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/Blog",name:"Blog",component:D},{path:"/Blog/:id",name:"Articulo",component:ne}],ce=Object(j["a"])({history:Object(j["b"])("/"),routes:re}),oe=ce;Object(r["c"])(p).use(oe).mount("#app")},"5f07":function(e,t,n){},"6feb":function(e,t,n){e.exports=n.p+"img/llama.6b53b697.png"},"75f9":function(e,t,n){},aad8:function(e,t,n){"use strict";n("5f07")},d556:function(e,t,n){},ec1a:function(e,t,n){"use strict";n("75f9")}});
//# sourceMappingURL=app.219e17ad.js.map