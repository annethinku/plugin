(function(){var h={},mt={},c={id:"b3a3fc356d0af38b811a0ef8d50716b8",dm:["jq22.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:1,rp:[[18503, 2]],trust:0,vcard:0,qiao:0,lxb:0,conv:0,apps:''};var p=!0,q=null,r=!1;mt.i={};mt.i.Da=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.oa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,f){var e;f.C&&(e=new Date,e.setTime(e.getTime()+f.C));document.cookie=a+"="+b+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(e?"; expires="+e.toGMTString():"")+(f.Ha?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.o={};mt.o.ba=function(a){return document.getElementById(a)};mt.o.za=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return q};
(mt.o.T=function(){function a(){if(!a.w){a.w=p;for(var b=0,f=e.length;b<f;b++)e[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(b,1);return}a()}var f=r,e=[],k;document.addEventListener?k=function(){document.removeEventListener("DOMContentLoaded",k,r);a()}:document.attachEvent&&(k=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",k),a())});(function(){if(!f)if(f=p,"complete"===document.readyState)a.w=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
k,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",k);window.attachEvent("onload",a);var e=r;try{e=window.frameElement==q}catch(m){}document.documentElement.doScroll&&e&&b()}})();return function(b){a.w?b():e.push(b)}}()).w=r;mt.event={};mt.event.d=function(a,b,f){a.attachEvent?a.attachEvent("on"+b,function(b){f.call(a,b)}):a.addEventListener&&a.addEventListener(b,f,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=f[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return a(e);case "boolean":return String(e);
default:if(e===q)return"null";if(e instanceof Array){var f=["["],n=e.length,m,d,l;for(d=0;d<n;d++)switch(l=e[d],typeof l){case "undefined":case "function":case "unknown":break;default:m&&f.push(","),f.push(mt.l.stringify(l)),m=1}f.push("]");return f.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+b(e.getMonth()+1)+"-"+b(e.getDate())+"T"+b(e.getHours())+":"+b(e.getMinutes())+":"+b(e.getSeconds())+'"';m=["{"];d=mt.l.stringify;for(n in e)if(Object.prototype.hasOwnProperty.call(e,n))switch(l=
e[n],typeof l){case "undefined":case "unknown":case "function":break;default:f&&m.push(","),f=1,m.push(d(n)+":"+d(l))}m.push("}");return m.join("")}}}();mt.lang={};mt.lang.e=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ea=function(a){return mt.lang.e(a,"Number")&&isFinite(a)};mt.lang.Ga=function(a){return mt.lang.e(a,"String")};mt.localStorage={};
mt.localStorage.A=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,b,f){var e=new Date;e.setTime(e.getTime()+f||31536E6);try{window.localStorage?(b=e.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.A()&&(mt.localStorage.f.expires=e.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,b),mt.localStorage.f.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),f=a.substring(0,b)-0;if(f&&f>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.A())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(e){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.A())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(f){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.J={};mt.J.log=function(a,b){var f=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=f;f.onload=f.onerror=f.onabort=function(){f.onload=f.onerror=f.onabort=q;f=window[e]=q;b&&b(a)};f.src=a};mt.K={};
mt.K.ga=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return a};
mt.K.ya=function(a,b,f,e,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+f+'" height="'+e+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+f+'" height="'+e+'" src="'+b+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.g=function(a,b){var f=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return f?f[3]:q};mt.url.Ba=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.da=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.N=function(a){return(a=mt.url.da(a))?a.replace(/:\d+$/,""):a};mt.url.Aa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.r={Ca:"http://tongji.baidu.com/hm-web/welcome/ico",S:"hm.baidu.com/hm.gif",W:"baidu.com",ka:"hmmd",la:"hmpl",ia:"hmkw",ha:"hmci",ma:"hmsr",m:0,j:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Fa:0,va:6E5,wa:10,xa:1024,ua:1,n:2147483647,U:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={k:{},d:function(a,f){this.k[a]=this.k[a]||[];this.k[a].push(f)},s:function(a,f){this.k[a]=this.k[a]||[];for(var e=this.k[a].length,k=0;k<e;k++)this.k[a][k](f)}};return h.p=a})();
(function(){function a(a,e){var k=document.createElement("script");k.charset="utf-8";b.e(e,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=q,e()}:k.onload=function(){e()});k.src=a;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(k,n)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?f.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?f.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||"";return a}var b=mt.localStorage,f=mt.sessionStorage;return h.L=a})();
(function(){var a=mt.o,b=h.r,f=h.load,e=h.L;h.p.d("pv-b",function(){c.rec&&a.T(function(){for(var k=0,n=c.rp.length;k<n;k++){var m=c.rp[k][0],d=c.rp[k][1],l=a.ba("hm_t_"+m);if(d&&!(2==d&&!l||l&&""!==l.innerHTML))l="",l=Math.round(Math.random()*b.n),l=4==d?"http://crs.baidu.com/hl.js?"+["siteId="+c.id,"planId="+m,"rnd="+l].join("&"):"http://crs.baidu.com/t.js?"+["siteId="+c.id,"planId="+m,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
l].join("&"),f(l)}})})})();(function(){var a=h.r,b=h.load,f=h.L;h.p.d("pv-b",function(){if(c.trust&&c.vcard){var e=a.protocol+"//trust.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+f(),"rnd="+Math.round(Math.random()*a.n)].join("&");b(e)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.B.ea()+","+h.B.ca();h.b.h()}}function b(){clearTimeout(x);var a;w&&(a="visible"==document[w]);y&&(a=!document[y]);d="undefined"==typeof a?p:a;if((!m||!l)&&d&&g)u=p,s=+new Date;else if(m&&l&&(!d||!g))u=r,t+=+new Date-s;m=d;l=g;x=setTimeout(b,100)}function f(a){var l=document,g="";if(a in l)g=a;else for(var s=["webkit","ms","moz","o"],d=0;d<s.length;d++){var b=s[d]+a.charAt(0).toUpperCase()+a.slice(1);if(b in l){g=
b;break}}return g}function e(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))g="focus"==a.type||"focusin"==a.type?p:r,b()}var k=mt.event,n=h.p,m=p,d=p,l=p,g=p,v=+new Date,s=v,t=0,u=p,w=f("visibilityState"),y=f("hidden"),x;b();(function(){var a=w.replace(/[vV]isibilityState/,"visibilitychange");k.d(document,a,b);k.d(window,"pageshow",b);k.d(window,"pagehide",b);"object"==typeof document.onfocusin?(k.d(document,"focusin",e),k.d(document,"focusout",e)):(k.d(window,"focus",e),
k.d(window,"blur",e))})();h.B={ea:function(){return+new Date-v},ca:function(){return u?+new Date-s+t:t}};n.d("pv-b",function(){k.d(window,"unload",a())});return h.B})();
(function(){function a(l){for(var g in l)if({}.hasOwnProperty.call(l,g)){var d=l[g];e.e(d,"Object")||e.e(d,"Array")?a(d):l[g]=String(d)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var f=mt.J,e=mt.lang,k=mt.l,n=h.r,m=h.p,d={O:q,q:[],z:0,P:r,init:function(){d.c=0;d.O={push:function(){d.H.apply(d,arguments)}};m.d("pv-b",function(){d.Z();d.$()});m.d("pv-d",d.aa);m.d("stag-b",function(){h.b.a.api=d.c||d.z?d.c+"_"+d.z:""});m.d("stag-d",function(){h.b.a.api=
0;d.c=0;d.z=0})},Z:function(){var a=window._hmt;if(a&&a.length)for(var g=0;g<a.length;g++){var b=a[g];switch(b[0]){case "_setAccount":1<b.length&&/^[0-9a-z]{32}$/.test(b[1])&&(d.c|=1,window._bdhm_account=b[1]);break;case "_setAutoPageview":if(1<b.length&&(b=b[1],r===b||p===b))d.c|=2,window._bdhm_autoPageview=b}}},$:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var a=window._hmt;if(a&&a.length)for(var g=0,b=a.length;g<b;g++)e.e(a[g],
"Array")&&"_trackEvent"!==a[g][0]&&"_trackRTEvent"!==a[g][0]?d.H(a[g]):d.q.push(a[g]);window._hmt=d.O}},aa:function(){if(0<d.q.length)for(var a=0,b=d.q.length;a<b;a++)d.H(d.q[a]);d.q=q},H:function(a){if(e.e(a,"Array")){var b=a[0];if(d.hasOwnProperty(b)&&e.e(d[b],"Function"))d[b](a)}},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"==a[1].charAt(0)){d.c|=4;h.b.a.et=0;h.b.a.ep="";h.b.F?(h.b.a.nv=0,h.b.a.st=4):h.b.F=p;var b=h.b.a.u,e=h.b.a.su;h.b.a.u=n.protocol+"//"+document.location.host+
a[1];d.P||(h.b.a.su=document.location.href);h.b.h();h.b.a.u=b;h.b.a.su=e}},_trackEvent:function(a){2<a.length&&(d.c|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.h())},_setCustomVar:function(a){if(!(4>a.length)){var g=a[1],e=a[4]||3;if(0<g&&6>g&&0<e&&4>e){d.z++;for(var s=(h.b.a.cv||"*").split("!"),t=s.length;t<g-1;t++)s.push("*");s[g-1]=e+"*"+b(a[2])+"*"+b(a[3]);h.b.a.cv=s.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.na("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?n.protocol+"//"+window.location.host+a[1]:a[1],d.P=p)},_trackOrder:function(b){b=b[1];e.e(b,"Object")&&(a(b),d.c|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=k.stringify(b),h.b.h())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])d.c|=32,h.b.a.et=93,h.b.a.ep=a,h.b.h()},_trackRTPageview:function(b){b=
b[1];e.e(b,"Object")&&(a(b),b=k.stringify(b),512>=encodeURIComponent(b).length&&(d.c|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.e(b,"Object")){a(b);b=encodeURIComponent(k.stringify(b));var g=function(a){var b=h.b.a.rt;d.c|=128;h.b.a.et=90;h.b.a.rt=a;h.b.h();h.b.a.rt=b},f=b.length;if(900>=f)g.call(this,b);else for(var f=Math.ceil(f/900),s="block|"+Math.round(Math.random()*n.n).toString(16)+"|"+f+"|",t=[],u=0;u<f;u++)t.push(u),t.push(b.substring(900*u,900*u+900)),g.call(this,s+t.join("|")),
t=[]}},_setUserId:function(a){a=a[1];if(e.e(a,"String")||e.e(a,"Number")){var b=h.b.D(),k="hm-"+h.b.a.v;d.R=d.R||Math.round(Math.random()*n.n);f.log("//datax.baidu.com/x.gif?si="+c.id+"&dm="+encodeURIComponent(b)+"&ac="+encodeURIComponent(a)+"&v="+k+"&li="+d.R+"&rnd="+Math.round(Math.random()*n.n))}}};d.init();h.X=d;return h.X})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.F=r,this.init())}var b=mt.url,f=mt.J,e=mt.K,k=mt.lang,n=mt.cookie,m=mt.i,d=mt.localStorage,l=mt.sessionStorage,g=h.r,v=h.p;a.prototype={G:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length},Q:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},t:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.Q(a,c.dm[d]))return p}else{var g=b.N(a);if(g&&this.G(g,c.dm[d]))return p}return r},D:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.G(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},M:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Q(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},fa:function(){if(!document.referrer)return g.j-g.m>c.vdur?1:4;var a=
r;this.t(document.referrer)&&this.t(document.location.href)?a=p:(a=b.N(document.referrer),a=this.G(a||"",document.location.hostname));return a?g.j-g.m>c.vdur?1:4:3},getData:function(a){try{return n.get(a)||l.get(a)||d.get(a)}catch(b){}},setData:function(a,b,g){try{n.set(a,b,{domain:this.D(),path:this.M(),C:g}),g?d.set(a,b,g):l.set(a,b)}catch(e){}},na:function(a){try{n.set(a,"",{domain:this.D(),path:this.M(),C:-1}),l.remove(a),d.remove(a)}catch(b){}},sa:function(){var a,b,d,e,f;g.m=this.getData("Hm_lpvt_"+
c.id)||0;13==g.m.length&&(g.m=Math.round(g.m/1E3));b=this.fa();a=4!=b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13==e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<g.j-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(g.j);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=g.j,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,g.j);d=g.j==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.t(document.location.href)&&
(""===document.referrer||this.t(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},ra:function(){for(var a=[],b=0,d=g.U.length;b<d;b++){var e=g.U[b],f=this.a[e];"undefined"!=typeof f&&""!==f&&a.push(e+"="+encodeURIComponent(f))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},ta:function(){this.sa();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=m.oa;this.a.cl=m.colorDepth+"-bit";
this.a.ln=m.language;this.a.ja=m.javaEnabled?1:0;this.a.ck=m.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=e.ga();this.a.v="1.0.83";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=b.g(a,g.ka)||"";this.a.cp=b.g(a,g.la)||"";this.a.cw=b.g(a,g.ia)||"";this.a.ci=b.g(a,g.ha)||"";this.a.cf=b.g(a,g.ma)||""},init:function(){try{this.ta(),0===this.a.nv?this.qa():this.I(".*"),h.b=this,this.Y(),
v.s("pv-b"),this.pa()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(g.protocol+"//"+g.S+"?"+b.join("&"))}},pa:function(){function a(){v.s("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.F=p,this.a.et=0,this.a.ep="",this.h(a)):a()},h:function(a){var b=this;b.a.rnd=Math.round(Math.random()*g.n);v.s("stag-b");var d=g.protocol+"//"+
g.S+"?"+b.ra();v.s("stag-d");b.V(d);f.log(d,function(d){b.I(d);k.e(a,"Function")&&a.call(b)})},Y:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(g.W)?p:r,f=b.g(a,"jn"),l=/^heatlink$|^select$/.test(f);a&&(d.test(a)&&e&&l)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",g.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,
f))},V:function(a){var b=l.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");l.set("Hm_unsent_"+c.id,b)},I:function(a){var b=l.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?l.set("Hm_unsent_"+c.id,b):l.remove("Hm_unsent_"+c.id))},qa:function(){var a=this,b=l.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),d=function(b){f.log(g.protocol+"//"+decodeURIComponent(b).replace(/^https?:\/\//,""),function(b){a.I(b)})},e=0,k=b.length;e<k;e++)d(b[e])}};return new a})();
(function(){var a=mt.o,b=mt.event,f=mt.url,e=mt.l;try{if(window.performance&&performance.timing){var k=+new Date,n=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},m=q;a.T(function(){m=+new Date});var d=function(){var a,b,d;d=n("navigation");b=n("request");d={netAll:b.start-d.start,netDns:n("domainLookup").value,netTcp:n("connect").value,srv:n("response").start-b.start,dom:performance.timing.domInteractive-performance.timing.fetchStart,
loadEvent:n("loadEvent").end-d.start};a=document.referrer;var l=q;b=q;if("www.baidu.com"===(a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[])[2])l=f.g(a,"qid"),b=f.g(a,"click_t");a=l;d.qid=a!=q?a:"";b!=q?(d.bdDom=m?m-b:0,d.bdRun=k-b):(d.bdDom=0,d.bdRun=0);h.b.a.et=87;h.b.a.ep=e.stringify(d);h.b.h()};b.d(window,"load",function(){setTimeout(d,500)})}}catch(l){}})();
(function(){if("378f3aa9b8779062c8de4dc247dd8874"===c.id){var a=function(a){if(a.item){for(var b=a.length,e=Array(b);b--;)e[b]=a[b];return e}return[].slice.call(a)},b={click:function(){for(var b=[],e=a(document.getElementsByTagName("a")),e=[].concat.apply(e,a(document.getElementsByTagName("area"))),f=/openZoosUrl\(/,k=0,m=e.length;k<m;k++)f.test(e[k].getAttribute("onclick"))&&b.push(e[k]);return b}},f=function(a,b){for(var e in a)if(a.hasOwnProperty(e)&&b.call(a,e,a[e])===r)return r},e=function(a,
b){return Object.prototype.toString.call(a)==="[object "+b+"]"};window._hmt=window._hmt||[];var k,n="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),m=function(a,b){if(k===b){window._hmt.push(["_trackPageview",n+a]);for(var f=+new Date;500>=+new Date-f;);return r}if(e(b,"Array")||e(b,"NodeList"))for(var f=0,m=b.length;f<m;f++)if(k===b[f]){window._hmt.push(["_trackPageview",n+a+"/"+(f+1)]);for(f=+new Date;500>=+new Date-f;);return r}};(function(a,b,e){a.addEventListener?a.addEventListener(b,e,p):a.attachEvent&&
a.attachEvent("on"+b,e)})(document,"click",function(a){a=a||window.event;k=a.target||a.srcElement;var l={};for(f(b,function(a,b){l[a]=e(b,"Function")?b():document.getElementById(b)});k&&k!==document&&f(l,m)!==r;)k=k.parentNode})}})();})();
