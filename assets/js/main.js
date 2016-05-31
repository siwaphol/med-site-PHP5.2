
/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bX(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bV.length;while(e--){b=bV[e]+c;if(b in a)return b}return d}function bY(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function bZ(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bY(c)&&(e[f]=p._data(c,"olddisplay",cb(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b$(a,b,c){var d=bO.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function b_(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bU[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bU[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bU[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bU[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bU[e]+"Width"))||0));return f}function ca(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bP.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+b_(a,b,c||(f?"border":"content"),e)+"px"}function cb(a){if(bR[a])return bR[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bR[a]=c,c}function ch(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||cd.test(a)?d(a,e):ch(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ch(a+"["+e+"]",b[e],c,d);else d(a,b)}function cy(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cz(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cu;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cz(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cz(a,c,d,e,"*",g)),h}function cA(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cB(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cC(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cK(){try{return new a.XMLHttpRequest}catch(b){}}function cL(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cT(){return setTimeout(function(){cM=b},0),cM=p.now()}function cU(a,b){p.each(b,function(b,c){var d=(cS[b]||[]).concat(cS["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cV(a,b,c){var d,e=0,f=0,g=cR.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cM||cT(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cM||cT(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cW(k,j.opts.specialEasing);for(;e<g;e++){d=cR[e].call(j,a,k,j.opts);if(d)return d}return cU(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cW(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cX(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bY(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cb(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cO.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cY(a,b,c,d,e){return new cY.prototype.init(a,b,c,d,e)}function cZ(a,b){var c,d={height:a},e=0;for(;e<4;e+=2-b)c=bU[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function c_(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=r.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete"||e.readyState!=="loading"&&e.addEventListener)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){p.isFunction(c)&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.shift(),e=p._queueHooks(a,b),f=function(){p.dequeue(a,b)};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),delete e.stop,d.call(a,f,e)),!c.length&&e&&e.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)(d=p._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=[].slice.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click")){g=p(this),g.context=this;for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){i={},k=[],g[0]=f;for(d=0;d<q;d++)l=o[d],m=l.selector,i[m]===b&&(i[m]=g.is(m)),i[m]&&k.push(l);k.length&&u.push({elem:f,matches:k})}}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){j=u[d],c.currentTarget=j.elem;for(e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++){l=j.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,h=((p.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,r),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{ready:{setup:p.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bd(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)Z(a,b[e],c,d)}function be(a,b,c,d,e,f){var g,h=$.setFilters[b.toLowerCase()];return h||Z.error(b),(a||!(g=e))&&bd(a||"*",d,g=[],e),g.length>0?h(g,c,f):[]}function bf(a,c,d,e,f){var g,h,i,j,k,l,m,n,p=0,q=f.length,s=L.POS,t=new RegExp("^"+s.source+"(?!"+r+")","i"),u=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(g[a]=b)};for(;p<q;p++){s.exec(""),a=f[p],j=[],i=0,k=e;while(g=s.exec(a)){n=s.lastIndex=g.index+g[0].length;if(n>i){m=a.slice(i,g.index),i=n,l=[c],B.test(m)&&(k&&(l=k),k=e);if(h=H.test(m))m=m.slice(0,-5).replace(B,"$&*");g.length>1&&g[0].replace(t,u),k=be(m,g[1],g[2],l,k,h)}}k?(j=j.concat(k),(m=a.slice(i))&&m!==")"?B.test(m)?bd(m,j,d,e):Z(m,c,d,e?e.concat(k):k):o.apply(d,j)):Z(a,c,d,e)}return q===1?d:Z.uniqueSort(d)}function bg(a,b,c){var d,e,f,g=[],i=0,j=D.exec(a),k=!j.pop()&&!j.pop(),l=k&&a.match(C)||[""],m=$.preFilter,n=$.filter,o=!c&&b!==h;for(;(e=l[i])!=null&&k;i++){g.push(d=[]),o&&(e=" "+e);while(e){k=!1;if(j=B.exec(e))e=e.slice(j[0].length),k=d.push({part:j.pop().replace(A," "),captures:j});for(f in n)(j=L[f].exec(e))&&(!m[f]||(j=m[f](j,b,c)))&&(e=e.slice(j.shift().length),k=d.push({part:f,captures:j}));if(!k)break}}return k||Z.error(a),g}function bh(a,b,e){var f=b.dir,g=m++;return a||(a=function(a){return a===e}),b.first?function(b,c){while(b=b[f])if(b.nodeType===1)return a(b,c)&&b}:function(b,e){var h,i=g+"."+d,j=i+"."+c;while(b=b[f])if(b.nodeType===1){if((h=b[q])===j)return b.sizset;if(typeof h=="string"&&h.indexOf(i)===0){if(b.sizset)return b}else{b[q]=j;if(a(b,e))return b.sizset=!0,b;b.sizset=!1}}}}function bi(a,b){return a?function(c,d){var e=b(c,d);return e&&a(e===!0?c:e,d)}:b}function bj(a,b,c){var d,e,f=0;for(;d=a[f];f++)$.relative[d.part]?e=bh(e,$.relative[d.part],b):(d.captures.push(b,c),e=bi(e,$.filter[d.part].apply(null,d.captures)));return e}function bk(a){return function(b,c){var d,e=0;for(;d=a[e];e++)if(d(b,c))return!0;return!1}}var c,d,e,f,g,h=a.document,i=h.documentElement,j="undefined",k=!1,l=!0,m=0,n=[].slice,o=[].push,q=("sizcache"+Math.random()).replace(".",""),r="[\\x20\\t\\r\\n\\f]",s="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",t=s.replace("w","w#"),u="([*^$|!~]?=)",v="\\["+r+"*("+s+")"+r+"*(?:"+u+r+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+t+")|)|)"+r+"*\\]",w=":("+s+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",y=r+"*([\\x20\\t\\r\\n\\f>+~])"+r+"*",z="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+v+"|"+w.replace(2,7)+"|[^\\\\(),])+",A=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),B=new RegExp("^"+y),C=new RegExp(z+"?(?="+r+"*,|$)","g"),D=new RegExp("^(?:(?!,)(?:(?:^|,)"+r+"*"+z+")*?|"+r+"*(.*?))(\\)|$)"),E=new RegExp(z.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+y,"g"),F=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,G=/[\x20\t\r\n\f]*[+~]/,H=/:not\($/,I=/h\d/i,J=/input|select|textarea|button/i,K=/\\(?!\\)/g,L={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),NAME:new RegExp("^\\[name=['\"]?("+s+")['\"]?\\]"),TAG:new RegExp("^("+s.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+v),PSEUDO:new RegExp("^"+w),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+r+"*[>+~]|"+x,"i")},M={},N=[],O={},P=[],Q=function(a){return a.sizzleFilter=!0,a},R=function(a){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===a}},S=function(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}},T=function(a){var b=!1,c=h.createElement("div");try{b=a(c)}catch(d){}return c=null,b},U=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),V=T(function(a){a.id=q+0,a.innerHTML="<a name='"+q+"'></a><div name='"+q+"'></div>",i.insertBefore(a,i.firstChild);var b=h.getElementsByName&&h.getElementsByName(q).length===2+h.getElementsByName(q+0).length;return g=!h.getElementById(q),i.removeChild(a),b}),W=T(function(a){return a.appendChild(h.createComment("")),a.getElementsByTagName("*").length===0}),X=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==j&&a.firstChild.getAttribute("href")==="#"}),Y=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||a.getElementsByClassName("e").length===0?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length!==1)}),Z=function(a,b,c,d){c=c||[],b=b||h;var e,f,g,i,j=b.nodeType;if(j!==1&&j!==9)return[];if(!a||typeof a!="string")return c;g=ba(b);if(!g&&!d)if(e=F.exec(a))if(i=e[1]){if(j===9){f=b.getElementById(i);if(!f||!f.parentNode)return c;if(f.id===i)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(i))&&bb(b,f)&&f.id===i)return c.push(f),c}else{if(e[2])return o.apply(c,n.call(b.getElementsByTagName(a),0)),c;if((i=e[3])&&Y&&b.getElementsByClassName)return o.apply(c,n.call(b.getElementsByClassName(i),0)),c}return bm(a,b,c,d,g)},$=Z.selectors={cacheLength:50,match:L,order:["ID","TAG"],attrHandle:{},createPseudo:Q,find:{ID:g?function(a,b,c){if(typeof b.getElementById!==j&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==j&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==j&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:W?function(a,b){if(typeof b.getElementsByTagName!==j)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(K,""),a[3]=(a[4]||a[5]||"").replace(K,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||Z.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&Z.error(a[0]),a},PSEUDO:function(a){var b,c=a[4];return L.CHILD.test(a[0])?null:(c&&(b=D.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1)),a.splice(2,3,c||a[3]),a)}},filter:{ID:g?function(a){return a=a.replace(K,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(K,""),function(b){var c=typeof b.getAttributeNode!==j&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(K,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=M[a];return b||(b=M[a]=new RegExp("(^|"+r+")"+a+"("+r+"|$)"),N.push(a),N.length>$.cacheLength&&delete M[N.shift()]),function(a){return b.test(a.className||typeof a.getAttribute!==j&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=Z.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return Z.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=m++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[q]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[q]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e=$.pseudos[a]||$.pseudos[a.toLowerCase()];return e||Z.error("unsupported pseudo: "+a),e.sizzleFilter?e(b,c,d):e}},pseudos:{not:Q(function(a,b,c){var d=bl(a.replace(A,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!$.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:Q(function(a){return function(b){return(b.textContent||b.innerText||bc(b)).indexOf(a)>-1}}),has:Q(function(a){return function(b){return Z(a,b).length>0}}),header:function(a){return I.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:R("radio"),checkbox:R("checkbox"),file:R("file"),password:R("password"),image:R("image"),submit:S("submit"),reset:S("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return J.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}};$.setFilters.nth=$.setFilters.eq,$.filters=$.pseudos,X||($.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}}),V&&($.order.push("NAME"),$.find.NAME=function(a,b){if(typeof b.getElementsByName!==j)return b.getElementsByName(a)}),Y&&($.order.splice(1,0,"CLASS"),$.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==j&&!c)return b.getElementsByClassName(a)});try{n.call(i.childNodes,0)[0].nodeType}catch(_){n=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}var ba=Z.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},bb=Z.contains=i.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc=Z.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=bc(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=bc(b);return c};Z.attr=function(a,b){var c,d=ba(a);return d||(b=b.toLowerCase()),$.attrHandle[b]?$.attrHandle[b](a):U||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},Z.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},[0,0].sort(function(){return l=0}),i.compareDocumentPosition?e=function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:(e=function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],g=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return f(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)g.unshift(j),j=j.parentNode;c=e.length,d=g.length;for(var l=0;l<c&&l<d;l++)if(e[l]!==g[l])return f(e[l],g[l]);return l===c?f(a,g[l],-1):f(e[l],b,1)},f=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),Z.uniqueSort=function(a){var b,c=1;if(e){k=l,a.sort(e);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1)}return a};var bl=Z.compile=function(a,b,c){var d,e,f,g=O[a];if(g&&g.context===b)return g;e=bg(a,b,c);for(f=0;d=e[f];f++)e[f]=bj(d,b,c);return g=O[a]=bk(e),g.context=b,g.runs=g.dirruns=0,P.push(a),P.length>$.cacheLength&&delete O[P.shift()],g};Z.matches=function(a,b){return Z(a,null,null,b)},Z.matchesSelector=function(a,b){return Z(b,null,null,[a]).length>0};var bm=function(a,b,e,f,g){a=a.replace(A,"$1");var h,i,j,k,l,m,p,q,r,s=a.match(C),t=a.match(E),u=b.nodeType;if(L.POS.test(a))return bf(a,b,e,f,s);if(f)h=n.call(f,0);else if(s&&s.length===1){if(t.length>1&&u===9&&!g&&(s=L.ID.exec(t[0]))){b=$.find.ID(s[1],b,g)[0];if(!b)return e;a=a.slice(t.shift().length)}q=(s=G.exec(t[0]))&&!s.index&&b.parentNode||b,r=t.pop(),m=r.split(":not")[0];for(j=0,k=$.order.length;j<k;j++){p=$.order[j];if(s=L[p].exec(m)){h=$.find[p]((s[1]||"").replace(K,""),q,g);if(h==null)continue;m===r&&(a=a.slice(0,a.length-r.length)+m.replace(L[p],""),a||o.apply(e,n.call(h,0)));break}}}if(a){i=bl(a,b,g),d=i.dirruns++,h==null&&(h=$.find.TAG("*",G.test(a)&&b.parentNode||b));for(j=0;l=h[j];j++)c=i.runs++,i(l,b)&&e.push(l)}return e};h.querySelectorAll&&function(){var a,b=bm,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=i.matchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+r+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+r+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bm=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return o.apply(f,n.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j=d.getAttribute("id"),k=j||q,l=G.test(a)&&d.parentNode||d;j?k=k.replace(c,"\\$&"):d.setAttribute("id",k);try{return o.apply(f,n.call(l.querySelectorAll(a.replace(C,"[id='"+k+"'] $&")),0)),f}catch(i){}finally{j||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push($.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),Z.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!ba(b)&&!f.test(c)&&(!e||!e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&b.document.nodeType!==11)return h}catch(i){}return Z(c,null,null,[b]).length>0})}(),Z.attr=p.attr,p.find=Z,p.expr=Z.selectors,p.expr[":"]=p.expr.pseudos,p.unique=Z.uniqueSort,p.text=Z.getText,p.isXMLDoc=Z.isXML,p.contains=Z.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=(c[0]||c).ownerDocument||c[0]||c,typeof c.createDocumentFragment=="undefined"&&(c=e),a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=0,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(g=b===e&&bA;(h=a[s])!=null;s++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{g=g||bk(b),l=l||g.appendChild(b.createElement("div")),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(f=n.length-1;f>=0;--f)p.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l=g.lastChild}h.nodeType?t.push(h):t=p.merge(t,h)}l&&(g.removeChild(l),h=l=g=null);if(!p.support.appendChecked)for(s=0;(h=t[s])!=null;s++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(s=0;(h=t[s])!=null;s++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[s+1,0].concat(r)),s+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^margin/,bO=new RegExp("^("+q+")(.*)$","i"),bP=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bQ=new RegExp("^([-+])=("+q+")","i"),bR={},bS={position:"absolute",visibility:"hidden",display:"block"},bT={letterSpacing:0,fontWeight:400,lineHeight:1},bU=["Top","Right","Bottom","Left"],bV=["Webkit","O","Moz","ms"],bW=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return bZ(this,!0)},hide:function(){return bZ(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bW.apply(this,arguments):this.each(function(){(c?a:bY(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bX(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bQ.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bX(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bT&&(f=bT[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(a,b){var c,d,e,f,g=getComputedStyle(a,null),h=a.style;return g&&(c=g[b],c===""&&!p.contains(a.ownerDocument.documentElement,a)&&(c=p.style(a,b)),bP.test(c)&&bN.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=c,c=g.width,h.width=d,h.minWidth=e,h.maxWidth=f)),c}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bP.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0||bH(a,"display")!=="none"?ca(a,b,d):p.swap(a,bS,function(){return ca(a,b,d)})},set:function(a,c,d){return b$(a,c,d?b_(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bP.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bU[d]+b]=e[d]||e[d-2]||e[0];return f}},bN.test(a)||(p.cssHooks[a+b].set=b$)});var cc=/%20/g,cd=/\[\]$/,ce=/\r?\n/g,cf=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,cg=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cg.test(this.nodeName)||cf.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(ce,"\r\n")}}):{name:b.name,value:c.replace(ce,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ch(d,a[d],c,f);return e.join("&").replace(cc,"+")};var ci,cj,ck=/#.*$/,cl=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cm=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,cn=/^(?:GET|HEAD)$/,co=/^\/\//,cp=/\?/,cq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cr=/([?&])_=[^&]*/,cs=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,ct=p.fn.load,cu={},cv={},cw=["*/"]+["*"];try{ci=f.href}catch(cx){ci=e.createElement("a"),ci.href="",ci=ci.href}cj=cs.exec(ci.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&ct)return ct.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cq,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cA(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cA(a,b),a},ajaxSettings:{url:ci,isLocal:cm.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cw},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cy(cu),ajaxTransport:cy(cv),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cB(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cC(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cl.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(ck,"").replace(co,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=cs.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==cj[1]&&i[2]==cj[2]&&(i[3]||(i[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cz(cu,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!cn.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cp.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cr,"$1_="+z);l.url=A+(A===l.url?(cp.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cw+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cz(cv,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cD=[],cE=/\?/,cF=/(=)\?(?=&|$)|\?\?/,cG=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cD.pop()||p.expando+"_"+cG++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cF.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cF.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cF,"$1"+f):m?c.data=i.replace(cF,"$1"+f):k&&(c.url+=(cE.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cD.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cH,cI=a.ActiveXObject?function(){for(var a in cH)cH[a](0,1)}:!1,cJ=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cK()||cL()}:cK,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cI&&delete cH[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cJ,cI&&(cH||(cH={},p(a).unload(cI)),cH[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cM,cN,cO=/^(?:toggle|show|hide)$/,cP=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cQ=/queueHooks$/,cR=[cX],cS={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cP.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cV,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cS[c]=cS[c]||[],cS[c].unshift(b)},prefilter:function(a,b){b?cR.unshift(a):cR.push(a)}}),p.Tween=cY,cY.prototype={constructor:cY,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cY.propHooks[this.prop];return a&&a.get?a.get(this):cY.propHooks._default.get(this)},run:function(a){var b,c=cY.propHooks[this.prop];return this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration),this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cY.propHooks._default.set(this),this}},cY.prototype.init.prototype=cY.prototype,cY.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cY.propHooks.scrollTop=cY.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(cZ(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bY).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cV(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cQ.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:cZ("show"),slideUp:cZ("hide"),slideToggle:cZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cY.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cN&&(cN=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cN),cN=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c$=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=c_(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c$.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c$.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=c_(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);

/*!
 Lo-Dash 1.0.0-rc.3 lodash.com/license
 Underscore.js 1.4.3 underscorejs.org/LICENSE
*/
;(function(e,t){function n(e){if(e&&typeof e=="object"&&e.__wrapped__)return e;if(!(this instanceof n))return new n(e);this.__wrapped__=e}function r(e,t,n){t||(t=0);var r=e.length,i=r-t>=(n||tt);if(i)for(var s={},n=t-1;++n<r;){var o=e[n]+"";(Et.call(s,o)?s[o]:s[o]=[]).push(e[n])}return function(n){if(i){var r=n+"";return Et.call(s,r)&&-1<R(s[r],n)}return-1<R(e,n,t)}}function i(e){return e.charCodeAt(0)}function s(e,t){var n=e.b,r=t.b,e=e.a,t=t.a;if(e!==t){if(e>t||typeof e=="undefined")return 1;if(
e<t||typeof t=="undefined")return-1}return n<r?-1:1}function o(e,t,n){function r(){var u=arguments,a=s?this:t;return i||(e=t[o]),n.length&&(u=u.length?n.concat(p(u)):n),this instanceof r?(h.prototype=e.prototype,a=new h,h.prototype=null,u=e.apply(a,u),x(u)?u:a):e.apply(a,u)}var i=S(e),s=!n,o=t;return s&&(n=t),i||(t=e),r}function u(e,t,n){return e?typeof e!="function"?function(t){return t[e]}:typeof t!="undefined"?n?function(n,r,i,s){return e.call(t,n,r,i,s)}:function(n,r,i){return e.call(t,n,r,i)
}:e:V}function a(){for(var e={b:"",c:"",e:Xt,f:Wt,g:"",h:Jt,i:Gt,j:mt,k:"",l:!0},t,n=0;t=arguments[n];n++)for(var r in t)e[r]=t[r];t=e.a,e.d=/^[^,]+/.exec(t)[0],n=Function,r="var i,l="+e.d+",t="+e.d+";if(!"+e.d+")return t;"+e.k+";",e.b?(r+="var m=l.length;i=-1;if(typeof m=='number'){",e.i&&(r+="if(k(l)){l=l.split('')}"),r+="while(++i<m){"+e.b+"}}else {"):e.h&&(r+="var m=l.length;i=-1;if(m&&j(l)){while(++i<m){i+='';"+e.g+"}}else {"),e.e||(r+="var u=typeof l=='function'&&s.call(l,'prototype');");if(
e.f&&e.l)r+="var q=-1,r=p[typeof l]?n(l):[],m=r.length;while(++q<m){i=r[q];",e.e||(r+="if(!(u&&i=='prototype')){"),r+=e.g+"",e.e||(r+="}");else{r+="for(i in l){";if(!e.e||e.l)r+="if(",e.e||(r+="!(u&&i=='prototype')"),!e.e&&e.l&&(r+="&&"),e.l&&(r+="h.call(l,i)"),r+="){";r+=e.g+";";if(!e.e||e.l)r+="}"}r+="}";if(e.e){r+="var f=l.constructor;";for(var i=0;7>i;i++)r+="i='"+e.j[i]+"';if(","constructor"==e.j[i]&&(r+="!(f&&f.prototype===l)&&"),r+="h.call(l,i)){"+e.g+"}"}if(e.b||e.h)r+="}";return r+=e.c+";return t"
,n("e,h,j,k,p,n,s","return function("+t+"){"+r+"}")(u,Et,v,N,nn,At,xt)}function f(e){return"\\"+rn[e]}function l(e){return hn[e]}function c(e){return typeof e.toString!="function"&&typeof (e+"")=="string"}function h(){}function p(e,t,n){t||(t=0),typeof n=="undefined"&&(n=e?e.length:0);for(var r=-1,n=n-t||0,i=Array(0>n?0:n);++r<n;)i[r]=e[t+r];return i}function d(e){return pn[e]}function v(e){return Tt.call(e)==Dt}function m(e){var t=!1;if(!e||typeof e!="object"||v(e))return t;var n=e.constructor;return!
S(n)&&(!Yt||!c(e))||n instanceof n?Vt?(ln(e,function(e,n,r){return t=!Et.call(r,n),!1}),!1===t):(ln(e,function(e,n){t=n}),!1===t||Et.call(e,t)):t}function g(e){var t=[];return cn(e,function(e,n){t.push(n)}),t}function y(e,t,n,r,i){if(null==e)return e;n&&(t=!1);if(n=x(e)){var s=Tt.call(e);if(!en[s]||Yt&&c(e))return e;var o=vn(e)}if(!n||!t)return n?o?p(e):fn({},e):e;n=tn[s];switch(s){case Ht:case Bt:return new n(+e);case jt:case qt:return new n(e);case It:return n(e.source,at.exec(e))}r||(r=[]),i||
(i=[]);for(s=r.length;s--;)if(r[s]==e)return i[s];var u=o?n(e.length):{};return r.push(e),i.push(u),(o?_:cn)(e,function(e,n){u[n]=y(e,t,null,r,i)}),o&&(Et.call(e,"index")&&(u.index=e.index),Et.call(e,"input")&&(u.input=e.input)),u}function b(e){var t=[];return ln(e,function(e,n){S(e)&&t.push(n)}),t.sort()}function w(e){var t={};return cn(e,function(e,n){t[e]=n}),t}function E(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;var i=Tt.call(e),s=Tt.call(t);i==Dt&&(i=Ft),s==Dt&&
(s=Ft);if(i!=s)return!1;switch(i){case Ht:case Bt:return+e==+t;case jt:return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case It:case qt:return e==t+""}s=i==Pt;if(!s){if(e.__wrapped__||t.__wrapped__)return E(e.__wrapped__||e,t.__wrapped__||t);if(i!=Ft||Yt&&(c(e)||c(t)))return!1;var i=!Kt&&v(e)?Object:e.constructor,o=!Kt&&v(t)?Object:t.constructor;if(i!=o&&(!S(i)||!(i instanceof i&&S(o)&&o instanceof o)))return!1}n||(n=[]),r||(r=[]);for(i=n.length;i--;)if(n[i]==e)return r[i]==t;var u=!0,a=0;n.push(e),r.push(
t);if(s){a=e.length;if(u=a==t.length)for(;a--&&(u=E(e[a],t[a],n,r)););return u}return ln(e,function(e,i,s){if(Et.call(s,i))return a++,u=Et.call(t,i)&&E(e,t[i],n,r)}),u&&ln(t,function(e,t,n){if(Et.call(n,t))return u=-1<--a}),u}function S(e){return typeof e=="function"}function x(e){return e?nn[typeof e]:!1}function T(e){return typeof e=="number"||Tt.call(e)==jt}function N(e){return typeof e=="string"||Tt.call(e)==qt}function C(e,t,n){var r=arguments,i=0,s=2,o=r[3],u=r[4];n!==et&&(o=[],u=[],typeof 
n!="number"&&(s=r.length));for(;++i<s;)cn(r[i],function(t,n){var r,i,s;if(t&&((i=vn(t))||mn(t))){for(var a=o.length;a--;)if(r=o[a]==t)break;r?e[n]=u[a]:(o.push(t),u.push(s=(s=e[n],i)?vn(s)?s:[]:mn(s)?s:{}),e[n]=C(s,t,et,o,u))}else t!=null&&(e[n]=t)});return e}function k(e){var t=[];return cn(e,function(e){t.push(e)}),t}function L(e,t,n){var r=-1,i=e?e.length:0,s=!1,n=(0>n?Ot(0,i+n):n)||0;return typeof i=="number"?s=-1<(N(e)?e.indexOf(t,n):R(e,t,n)):an(e,function(e){if(++r>=n)return!(s=e===t)}),s}
function A(e,t,n){var r=!0,t=u(t,n);if(vn(e))for(var n=-1,i=e.length;++n<i&&(r=!!t(e[n],n,e)););else an(e,function(e,n,i){return r=!!t(e,n,i)});return r}function O(e,t,n){var r=[],t=u(t,n);if(vn(e))for(var n=-1,i=e.length;++n<i;){var s=e[n];t(s,n,e)&&r.push(s)}else an(e,function(e,n,i){t(e,n,i)&&r.push(e)});return r}function M(e,t,n){var r,t=u(t,n);return _(e,function(e,n,i){if(t(e,n,i))return r=e,!1}),r}function _(e,t,n){if(t&&typeof n=="undefined"&&vn(e))for(var n=-1,r=e.length;++n<r&&!1!==t(e[
n],n,e););else an(e,t,n);return e}function D(e,t,n){var r=-1,i=e?e.length:0,s=Array(typeof i=="number"?i:0),t=u(t,n);if(vn(e))for(;++r<i;)s[r]=t(e[r],r,e);else an(e,function(e,n,i){s[++r]=t(e,n,i)});return s}function P(e,t,n){var r=-Infinity,s=-1,o=e?e.length:0,a=r;if(t||!vn(e))t=!t&&N(e)?i:u(t,n),an(e,function(e,n,i){n=t(e,n,i),n>r&&(r=n,a=e)});else for(;++s<o;)e[s]>a&&(a=e[s]);return a}function H(e,t){return D(e,t+"")}function B(e,t,n,r){var i=3>arguments.length,t=u(t,r,et);if(vn(e)){var s=-1,o=
e.length;for(i&&(n=e[++s]);++s<o;)n=t(n,e[s],s,e)}else an(e,function(e,r,s){n=i?(i=!1,e):t(n,e,r,s)});return n}function j(e,t,n,r){var i=e,s=e?e.length:0,o=3>arguments.length;if(typeof s!="number")var a=gn(e),s=a.length;else Gt&&N(e)&&(i=e.split(""));return t=u(t,r,et),_(e,function(e,r,u){r=a?a[--s]:--s,n=o?(o=!1,i[r]):t(n,i[r],r,u)}),n}function F(e,t,n){var r,t=u(t,n);if(vn(e))for(var n=-1,i=e.length;++n<i&&!(r=t(e[n],n,e)););else an(e,function(e,n,i){return!(r=t(e,n,i))});return!!r}function I(e
,t,n){if(e){var r=e.length;return null==t||n?e[0]:p(e,0,Mt(Ot(0,t),r))}}function q(e,t){for(var n=-1,r=e?e.length:0,i=[];++n<r;){var s=e[n];vn(s)?St.apply(i,t?s:q(s)):i.push(s)}return i}function R(e,t,n){var r=-1,i=e?e.length:0;if(typeof n=="number")r=(0>n?Ot(0,i+n):n||0)-1;else if(n)return r=z(e,t),e[r]===t?r:-1;for(;++r<i;)if(e[r]===t)return r;return-1}function U(e,t,n){return p(e,null==t||n?1:Ot(0,t))}function z(e,t,n,r){for(var i=0,s=e?e.length:i,n=n?u(n,r):V,t=n(t);i<s;)r=i+s>>>1,n(e[r])<t?i=
r+1:s=r;return i}function W(e,t,n,r){var i=-1,s=e?e.length:0,o=[],a=o;typeof t=="function"&&(r=n,n=t,t=!1);var f=!t&&75<=s;if(f)var l={};n&&(a=[],n=u(n,r));for(;++i<s;){var r=e[i],c=n?n(r,i,e):r;if(f)var h=c+"",h=Et.call(l,h)?!(a=l[h]):a=l[h]=[];if(t?!i||a[a.length-1]!==c:h||0>R(a,c))(n||f)&&a.push(c),o.push(r)}return o}function X(e,t){return zt||Nt&&2<arguments.length?Nt.call.apply(Nt,arguments):o(e,t,p(arguments,2))}function V(e){return e}function $(e){_(b(e),function(t){var r=n[t]=e[t];n.prototype
[t]=function(){var e=[this.__wrapped__];return St.apply(e,arguments),e=r.apply(n,e),new n(e)}})}function J(){return this.__wrapped__}var K=typeof exports=="object"&&exports,Q=typeof global=="object"&&global;Q.global===Q&&(e=Q);var G=[],Y=new function(){},Z=0,et=Y,tt=30,nt=e._,rt=/[-?+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/,it=/&(?:amp|lt|gt|quot|#x27);/g,st=/\b__p\+='';/g,ot=/\b(__p\+=)''\+/g,ut=/(__e\(.*?\)|\b__t\))\+'';/g,at=/\w*$/,ft=/(?:__e|__t=)\(\s*(?![\d\s"']|this\.)/g
,lt=RegExp("^"+(Y.valueOf+"").replace(/[.*+?^=!:${}()|[\]\/\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),ct=/\$\{((?:(?=\\?)\\?[\s\S])*?)}/g,ht=/<%=([\s\S]+?)%>/g,pt=/($^)/,dt=/[&<>"']/g,vt=/['\n\r\t\u2028\u2029\\]/g,mt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),gt=Math.ceil,yt=G.concat,bt=Math.floor,wt=lt.test(wt=Object.getPrototypeOf)&&wt,Et=Y.hasOwnProperty,St=G.push,xt=Y.propertyIsEnumerable,Tt=Y.toString,Nt=lt.test(Nt=
p.bind)&&Nt,Ct=lt.test(Ct=Array.isArray)&&Ct,kt=e.isFinite,Lt=e.isNaN,At=lt.test(At=Object.keys)&&At,Ot=Math.max,Mt=Math.min,_t=Math.random,Dt="[object Arguments]",Pt="[object Array]",Ht="[object Boolean]",Bt="[object Date]",jt="[object Number]",Ft="[object Object]",It="[object RegExp]",qt="[object String]",Rt=!!e.attachEvent,Ut=Nt&&!/\n|true/.test(Nt+Rt),zt=Nt&&!Ut,Wt=At&&(Rt||Ut),Xt,Vt,$t=($t={0:1,length:1},G.splice.call($t,0,1),$t[0]),Jt=!0;(function(){function e(){this.x=1}var t=[];e.prototype=
{valueOf:1,y:1};for(var n in new e)t.push(n);for(n in arguments)Jt=!n;Xt=!/valueOf/.test(t),Vt="x"!=t[0]})(1);var Kt=arguments.constructor==Object,Qt=!v(arguments),Gt="xx"!="x"[0]+Object("x")[0];try{var Yt=("[object Object]",Tt.call(document)==Ft)}catch(Zt){}var en={"[object Function]":!1};en[Dt]=en[Pt]=en[Ht]=en[Bt]=en[jt]=en[Ft]=en[It]=en[qt]=!0;var tn={};tn[Pt]=Array,tn[Ht]=Boolean,tn[Bt]=Date,tn[Ft]=Object,tn[jt]=Number,tn[It]=RegExp,tn[qt]=String;var nn={"boolean":!1,"function":!0,object:!0,
number:!1,string:!1,"undefined":!1},rn={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"};n.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:ht,variable:""};var sn={a:"o,v,g",k:"for(var a=1,b=typeof g=='number'?2:arguments.length;a<b;a++){if((l=arguments[a])){",g:"t[i]=l[i]",c:"}}"},on={a:"d,c,w",k:"c=c&&typeof w=='undefined'?c:e(c,w)",b:"if(c(l[i],i,d)===false)return t",g:"if(c(l[i],i,d)===false)return t"},un={b:null},an=a(on),fn=a(sn
);Qt&&(v=function(e){return e?Et.call(e,"callee"):!1});var ln=a(on,un,{l:!1}),cn=a(on,un),hn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"},pn=w(hn),dn=a(sn,{g:"if(t[i]==null)"+sn.g}),vn=Ct||function(e){return Kt&&e instanceof Array||Tt.call(e)==Pt};S(/x/)&&(S=function(e){return e instanceof Function||"[object Function]"==Tt.call(e)});var mn=wt?function(e){if(!e||typeof e!="object")return!1;var t=e.valueOf,n=typeof t=="function"&&(n=wt(t))&&wt(n);return n?e==n||wt(e)==n&&!v(e):m(e)
}:m,gn=At?function(e){return typeof e=="function"&&xt.call(e,"prototype")?g(e):x(e)?At(e):[]}:g;n.after=function(e,t){return 1>e?t():function(){if(1>--e)return t.apply(this,arguments)}},n.assign=fn,n.bind=X,n.bindAll=function(e){for(var t=arguments,n=1<t.length?0:(t=b(e),-1),r=t.length;++n<r;){var i=t[n];e[i]=X(e[i],e)}return e},n.bindKey=function(e,t){return o(e,t,p(arguments,2))},n.compact=function(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r},n.compose=function(
){var e=arguments;return function(){for(var t=arguments,n=e.length;n--;)t=[e[n].apply(this,t)];return t[0]}},n.countBy=function(e,t,n){var r={},t=u(t,n);return _(e,function(e,n,i){n=t(e,n,i),Et.call(r,n)?r[n]++:r[n]=1}),r},n.debounce=function(e,t,n){function r(){u=null,n||(s=e.apply(o,i))}var i,s,o,u;return function(){var a=n&&!u;return i=arguments,o=this,clearTimeout(u),u=setTimeout(r,t),a&&(s=e.apply(o,i)),s}},n.defaults=dn,n.defer=function(e){var n=p(arguments,1);return setTimeout(function(){e
.apply(t,n)},1)},n.delay=function(e,n){var r=p(arguments,2);return setTimeout(function(){e.apply(t,r)},n)},n.difference=function(e){for(var t=-1,n=e?e.length:0,i=yt.apply(G,arguments),i=r(i,n),s=[];++t<n;){var o=e[t];i(o)||s.push(o)}return s},n.filter=O,n.flatten=q,n.forEach=_,n.forIn=ln,n.forOwn=cn,n.functions=b,n.groupBy=function(e,t,n){var r={},t=u(t,n);return _(e,function(e,n,i){n=t(e,n,i),(Et.call(r,n)?r[n]:r[n]=[]).push(e)}),r},n.initial=function(e,t,n){if(!e)return[];var r=e.length;return p
(e,0,Mt(Ot(0,r-(null==t||n?1:t||0)),r))},n.intersection=function(e){var t=arguments,n=t.length,i={0:{}},s=-1,o=e?e.length:0,u=100<=o,a=[],f=a;e:for(;++s<o;){var l=e[s];if(u)var c=l+"",c=Et.call(i[0],c)?!(f=i[0][c]):f=i[0][c]=[];if(c||0>R(f,l)){u&&f.push(l);for(var h=n;--h;)if(!(i[h]||(i[h]=r(t[h],0,100)))(l))continue e;a.push(l)}}return a},n.invert=w,n.invoke=function(e,t){var n=p(arguments,2),r=typeof t=="function",i=[];return _(e,function(e){i.push((r?t:e[t]).apply(e,n))}),i},n.keys=gn,n.map=D,
n.max=P,n.memoize=function(e,t){var n={};return function(){var r=t?t.apply(this,arguments):arguments[0];return Et.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}},n.merge=C,n.min=function(e,t,n){var r=Infinity,s=-1,o=e?e.length:0,a=r;if(t||!vn(e))t=!t&&N(e)?i:u(t,n),an(e,function(e,n,i){n=t(e,n,i),n<r&&(r=n,a=e)});else for(;++s<o;)e[s]<a&&(a=e[s]);return a},n.object=function(e,t){for(var n=-1,r=e?e.length:0,i={};++n<r;){var s=e[n];t?i[s]=t[n]:i[s[0]]=s[1]}return i},n.omit=function(e,t,n){var r=typeof 
t=="function",i={};if(r)t=u(t,n);else var s=yt.apply(G,arguments);return ln(e,function(e,n,o){if(r?!t(e,n,o):0>R(s,n,1))i[n]=e}),i},n.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},n.pairs=function(e){var t=[];return cn(e,function(e,n){t.push([n,e])}),t},n.partial=function(e){return o(e,p(arguments,1))},n.pick=function(e,t,n){var r={};if(typeof t!="function")for(var i=0,s=yt.apply(G,arguments),o=s.length;++i<o;){var a=s[i];a in e&&(r[a]=e[a])}
else t=u(t,n),ln(e,function(e,n,i){t(e,n,i)&&(r[n]=e)});return r},n.pluck=H,n.range=function(e,t,n){e=+e||0,n=+n||1,null==t&&(t=e,e=0);for(var r=-1,t=Ot(0,gt((t-e)/n)),i=Array(t);++r<t;)i[r]=e,e+=n;return i},n.reject=function(e,t,n){return t=u(t,n),O(e,function(e,n,r){return!t(e,n,r)})},n.rest=U,n.shuffle=function(e){var t=-1,n=Array(e?e.length:0);return _(e,function(e){var r=bt(_t()*(++t+1));n[t]=n[r],n[r]=e}),n},n.sortBy=function(e,t,n){var r=[],t=u(t,n);_(e,function(e,n,i){r.push({a:t(e,n,i),b
:n,c:e})}),e=r.length;for(r.sort(s);e--;)r[e]=r[e].c;return r},n.tap=function(e,t){return t(e),e},n.throttle=function(e,t){function n(){u=new Date,o=null,i=e.apply(s,r)}var r,i,s,o,u=0;return function(){var a=new Date,f=t-(a-u);return r=arguments,s=this,0>=f?(clearTimeout(o),o=null,u=a,i=e.apply(s,r)):o||(o=setTimeout(n,f)),i}},n.times=function(e,t,n){for(var e=+e||0,r=-1,i=Array(e);++r<e;)i[r]=t.call(n,r);return i},n.toArray=function(e){return typeof (e?e.length:0)=="number"?Gt&&N(e)?e.split("")
:p(e):k(e)},n.union=function(){return W(yt.apply(G,arguments))},n.uniq=W,n.values=k,n.where=function(e,t){var n=gn(t);return O(e,function(e){for(var r=n.length;r--;){var i=e[n[r]]===t[n[r]];if(!i)break}return!!i})},n.without=function(e){for(var t=-1,n=e?e.length:0,i=r(arguments,1,20),s=[];++t<n;){var o=e[t];i(o)||s.push(o)}return s},n.wrap=function(e,t){return function(){var n=[e];return St.apply(n,arguments),t.apply(this,n)}},n.zip=function(e){for(var t=-1,n=e?P(H(arguments,"length")):0,r=Array(
n);++t<n;)r[t]=H(arguments,t);return r},n.collect=D,n.drop=U,n.each=_,n.extend=fn,n.methods=b,n.select=O,n.tail=U,n.unique=W,$(n),n.clone=y,n.cloneDeep=function(e){return y(e,!0)},n.contains=L,n.escape=function(e){return null==e?"":(e+"").replace(dt,l)},n.every=A,n.find=M,n.has=function(e,t){return e?Et.call(e,t):!1},n.identity=V,n.indexOf=R,n.isArguments=v,n.isArray=vn,n.isBoolean=function(e){return!0===e||!1===e||Tt.call(e)==Ht},n.isDate=function(e){return e instanceof Date||Tt.call(e)==Bt},n.isElement=
function(e){return e?1===e.nodeType:!1},n.isEmpty=function(e){var t=!0;if(!e)return t;var n=Tt.call(e),r=e.length;return n==Pt||n==qt||n==Dt||Qt&&v(e)||n==Ft&&typeof r=="number"&&S(e.splice)?!r:(cn(e,function(){return t=!1}),t)},n.isEqual=E,n.isFinite=function(e){return kt(e)&&!Lt(parseFloat(e))},n.isFunction=S,n.isNaN=function(e){return T(e)&&e!=+e},n.isNull=function(e){return null===e},n.isNumber=T,n.isObject=x,n.isPlainObject=mn,n.isRegExp=function(e){return e instanceof RegExp||Tt.call(e)==It
},n.isString=N,n.isUndefined=function(e){return typeof e=="undefined"},n.lastIndexOf=function(e,t,n){var r=e?e.length:0;for(typeof n=="number"&&(r=(0>n?Ot(0,r+n):Mt(n,r-1))+1);r--;)if(e[r]===t)return r;return-1},n.mixin=$,n.noConflict=function(){return e._=nt,this},n.random=function(e,t){return null==e&&null==t&&(t=1),e=+e||0,null==t&&(t=e,e=0),e+bt(_t()*((+t||0)-e+1))},n.reduce=B,n.reduceRight=j,n.result=function(e,t){var n=e?e[t]:null;return S(n)?e[t]():n},n.size=function(e){var t=e?e.length:0;
return typeof t=="number"?t:gn(e).length},n.some=F,n.sortedIndex=z,n.template=function(e,t,r){e||(e=""),r||(r={});var i,s,o=n.templateSettings,u=0,a=r.interpolate||o.interpolate||pt,l="__p+='",c=r.variable||o.variable,h=c;e.replace(RegExp((r.escape||o.escape||pt).source+"|"+a.source+"|"+(a===ht?ct:pt).source+"|"+(r.evaluate||o.evaluate||pt).source+"|$","g"),function(t,n,r,s,o,a){return r||(r=s),l+=e.slice(u,a).replace(vt,f),n&&(l+="'+__e("+n+")+'"),o&&(l+="';"+o+";__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"
),i||(i=o||rt.test(n||r)),u=a+t.length,t}),l+="';\n",h||(c="obj",i?l="with("+c+"){"+l+"}":(r=RegExp("(\\(\\s*)"+c+"\\."+c+"\\b","g"),l=l.replace(ft,"$&"+c+".").replace(r,"$1__d"))),l=(i?l.replace(st,""):l).replace(ot,"$1").replace(ut,"$1;"),l="function("+c+"){"+(h?"":c+"||("+c+"={});")+"var __t,__p='',__e=_.escape"+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":(h?"":",__d="+c+"."+c+"||"+c)+";")+l+"return __p}";try{s=Function("_","return "+l)(n)}catch(p){throw p.source=
l,p}return t?s(t):(s.source=l,s)},n.unescape=function(e){return null==e?"":(e+"").replace(it,d)},n.uniqueId=function(e){return(null==e?"":e+"")+ ++Z},n.all=A,n.any=F,n.detect=M,n.foldl=B,n.foldr=j,n.include=L,n.inject=B,cn(n,function(e,t){n.prototype[t]||(n.prototype[t]=function(){var t=[this.__wrapped__];return St.apply(t,arguments),e.apply(n,t)})}),n.first=I,n.last=function(e,t,n){if(e){var r=e.length;return null==t||n?e[r-1]:p(e,Ot(0,r-t))}},n.take=I,n.head=I,cn(n,function(e,t){n.prototype[t]||
(n.prototype[t]=function(t,r){var i=e(this.__wrapped__,t,r);return null==t||r?i:new n(i)})}),n.VERSION="1.0.0-rc.3",n.prototype.toString=function(){return this.__wrapped__+""},n.prototype.value=J,n.prototype.valueOf=J,an(["join","pop","shift"],function(e){var t=G[e];n.prototype[e]=function(){return t.apply(this.__wrapped__,arguments)}}),an(["push","reverse","sort","unshift"],function(e){var t=G[e];n.prototype[e]=function(){return t.apply(this.__wrapped__,arguments),this}}),an(["concat","slice","splice"
],function(e){var t=G[e];n.prototype[e]=function(){var e=t.apply(this.__wrapped__,arguments);return new n(e)}}),$t&&an(["pop","shift","splice"],function(e){var t=G[e],r="splice"==e;n.prototype[e]=function(){var e=this.__wrapped__,i=t.apply(e,arguments);return 0===e.length&&delete e[0],r?new n(i):i}}),typeof define=="function"&&typeof define.amd=="object"&&define.amd?(e._=n,define('lodash',[],function(){return n})):K?typeof module=="object"&&module&&module.exports==K?(module.exports=n)._=n:K._=n:e._=n})(this);
// Backbone.js 0.9.10

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var n=this,B=n.Backbone,h=[],C=h.push,u=h.slice,D=h.splice,g;g="undefined"!==typeof exports?exports:n.Backbone={};g.VERSION="0.9.10";var f=n._;!f&&"undefined"!==typeof require&&(f=require("underscore"));g.$=n.jQuery||n.Zepto||n.ender;g.noConflict=function(){n.Backbone=B;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var v=/\s+/,q=function(a,b,c,d){if(!c)return!0;if("object"===typeof c)for(var e in c)a[b].apply(a,[e,c[e]].concat(d));else if(v.test(c)){c=c.split(v);e=0;for(var f=c.length;e<
f;e++)a[b].apply(a,[c[e]].concat(d))}else return!0},w=function(a,b){var c,d=-1,e=a.length;switch(b.length){case 0:for(;++d<e;)(c=a[d]).callback.call(c.ctx);break;case 1:for(;++d<e;)(c=a[d]).callback.call(c.ctx,b[0]);break;case 2:for(;++d<e;)(c=a[d]).callback.call(c.ctx,b[0],b[1]);break;case 3:for(;++d<e;)(c=a[d]).callback.call(c.ctx,b[0],b[1],b[2]);break;default:for(;++d<e;)(c=a[d]).callback.apply(c.ctx,b)}},h=g.Events={on:function(a,b,c){if(!q(this,"on",a,[b,c])||!b)return this;this._events||(this._events=
{});(this._events[a]||(this._events[a]=[])).push({callback:b,context:c,ctx:c||this});return this},once:function(a,b,c){if(!q(this,"once",a,[b,c])||!b)return this;var d=this,e=f.once(function(){d.off(a,e);b.apply(this,arguments)});e._callback=b;this.on(a,e,c);return this},off:function(a,b,c){var d,e,t,g,j,l,k,h;if(!this._events||!q(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;g=a?[a]:f.keys(this._events);j=0;for(l=g.length;j<l;j++)if(a=g[j],d=this._events[a]){t=[];if(b||
c){k=0;for(h=d.length;k<h;k++)e=d[k],(b&&b!==e.callback&&b!==e.callback._callback||c&&c!==e.context)&&t.push(e)}this._events[a]=t}return this},trigger:function(a){if(!this._events)return this;var b=u.call(arguments,1);if(!q(this,"trigger",a,b))return this;var c=this._events[a],d=this._events.all;c&&w(c,b);d&&w(d,arguments);return this},listenTo:function(a,b,c){var d=this._listeners||(this._listeners={}),e=a._listenerId||(a._listenerId=f.uniqueId("l"));d[e]=a;a.on(b,"object"===typeof b?this:c,this);
return this},stopListening:function(a,b,c){var d=this._listeners;if(d){if(a)a.off(b,"object"===typeof b?this:c,this),!b&&!c&&delete d[a._listenerId];else{"object"===typeof b&&(c=this);for(var e in d)d[e].off(b,c,this);this._listeners={}}return this}}};h.bind=h.on;h.unbind=h.off;f.extend(g,h);var r=g.Model=function(a,b){var c,d=a||{};this.cid=f.uniqueId("c");this.attributes={};b&&b.collection&&(this.collection=b.collection);b&&b.parse&&(d=this.parse(d,b)||{});if(c=f.result(this,"defaults"))d=f.defaults({},
d,c);this.set(d,b);this.changed={};this.initialize.apply(this,arguments)};f.extend(r.prototype,h,{changed:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},sync:function(){return g.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return f.escape(this.get(a))},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e,g,p,j,l,k;if(null==a)return this;"object"===typeof a?(e=a,c=b):(e={})[a]=b;c||(c={});
if(!this._validate(e,c))return!1;g=c.unset;p=c.silent;a=[];j=this._changing;this._changing=!0;j||(this._previousAttributes=f.clone(this.attributes),this.changed={});k=this.attributes;l=this._previousAttributes;this.idAttribute in e&&(this.id=e[this.idAttribute]);for(d in e)b=e[d],f.isEqual(k[d],b)||a.push(d),f.isEqual(l[d],b)?delete this.changed[d]:this.changed[d]=b,g?delete k[d]:k[d]=b;if(!p){a.length&&(this._pending=!0);b=0;for(d=a.length;b<d;b++)this.trigger("change:"+a[b],this,k[a[b]],c)}if(j)return this;
if(!p)for(;this._pending;)this._pending=!1,this.trigger("change",this,c);this._changing=this._pending=!1;return this},unset:function(a,b){return this.set(a,void 0,f.extend({},b,{unset:!0}))},clear:function(a){var b={},c;for(c in this.attributes)b[c]=void 0;return this.set(b,f.extend({},a,{unset:!0}))},hasChanged:function(a){return null==a?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._changing?
this._previousAttributes:this.attributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return null==a||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=a.success;a.success=function(a,d,e){if(!a.set(a.parse(d,e),e))return!1;b&&b(a,d,e)};return this.sync("read",this,a)},save:function(a,b,c){var d,e,g=this.attributes;
null==a||"object"===typeof a?(d=a,c=b):(d={})[a]=b;if(d&&(!c||!c.wait)&&!this.set(d,c))return!1;c=f.extend({validate:!0},c);if(!this._validate(d,c))return!1;d&&c.wait&&(this.attributes=f.extend({},g,d));void 0===c.parse&&(c.parse=!0);e=c.success;c.success=function(a,b,c){a.attributes=g;var k=a.parse(b,c);c.wait&&(k=f.extend(d||{},k));if(f.isObject(k)&&!a.set(k,c))return!1;e&&e(a,b,c)};a=this.isNew()?"create":c.patch?"patch":"update";"patch"===a&&(c.attrs=d);a=this.sync(a,this,c);d&&c.wait&&(this.attributes=
g);return a},destroy:function(a){a=a?f.clone(a):{};var b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};a.success=function(a,b,e){(e.wait||a.isNew())&&d();c&&c(a,b,e)};if(this.isNew())return a.success(this,null,a),!1;var e=this.sync("delete",this,a);a.wait||d();return e},url:function(){var a=f.result(this,"urlRoot")||f.result(this.collection,"url")||x();return this.isNew()?a:a+("/"===a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},
isNew:function(){return null==this.id},isValid:function(a){return!this.validate||!this.validate(this.attributes,a)},_validate:function(a,b){if(!b.validate||!this.validate)return!0;a=f.extend({},this.attributes,a);var c=this.validationError=this.validate(a,b)||null;if(!c)return!0;this.trigger("invalid",this,c,b||{});return!1}});var s=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);void 0!==b.comparator&&(this.comparator=b.comparator);this.models=[];this._reset();this.initialize.apply(this,
arguments);a&&this.reset(a,f.extend({silent:!0},b))};f.extend(s.prototype,h,{model:r,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return g.sync.apply(this,arguments)},add:function(a,b){a=f.isArray(a)?a.slice():[a];b||(b={});var c,d,e,g,p,j,l,k,h,m;l=[];k=b.at;h=this.comparator&&null==k&&!1!=b.sort;m=f.isString(this.comparator)?this.comparator:null;c=0;for(d=a.length;c<d;c++)(e=this._prepareModel(g=a[c],b))?(p=this.get(e))?b.merge&&(p.set(g===
e?e.attributes:g,b),h&&(!j&&p.hasChanged(m))&&(j=!0)):(l.push(e),e.on("all",this._onModelEvent,this),this._byId[e.cid]=e,null!=e.id&&(this._byId[e.id]=e)):this.trigger("invalid",this,g,b);l.length&&(h&&(j=!0),this.length+=l.length,null!=k?D.apply(this.models,[k,0].concat(l)):C.apply(this.models,l));j&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=l.length;c<d;c++)(e=l[c]).trigger("add",e,this,b);j&&this.trigger("sort",this,b);return this},remove:function(a,b){a=f.isArray(a)?a.slice():[a];
b||(b={});var c,d,e,g;c=0;for(d=a.length;c<d;c++)if(g=this.get(a[c]))delete this._byId[g.id],delete this._byId[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:this.length},b));return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},
b));return a},shift:function(a){var b=this.at(0);this.remove(b,a);return b},slice:function(a,b){return this.models.slice(a,b)},get:function(a){if(null!=a)return this._idAttr||(this._idAttr=this.model.prototype.idAttribute),this._byId[a.id||a.cid||a[this._idAttr]||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){if(!this.comparator)throw Error("Cannot sort a set without a comparator");
a||(a={});f.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(f.bind(this.comparator,this));a.silent||this.trigger("sort",this,a);return this},pluck:function(a){return f.invoke(this.models,"get",a)},update:function(a,b){b=f.extend({add:!0,merge:!0,remove:!0},b);b.parse&&(a=this.parse(a,b));var c,d,e,g,h=[],j=[],l={};f.isArray(a)||(a=a?[a]:[]);if(b.add&&!b.remove)return this.add(a,b);d=0;for(e=a.length;d<e;d++)c=a[d],g=this.get(c),
b.remove&&g&&(l[g.cid]=!0),(b.add&&!g||b.merge&&g)&&h.push(c);if(b.remove){d=0;for(e=this.models.length;d<e;d++)c=this.models[d],l[c.cid]||j.push(c)}j.length&&this.remove(j,b);h.length&&this.add(h,b);return this},reset:function(a,b){b||(b={});b.parse&&(a=this.parse(a,b));for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);b.previousModels=this.models.slice();this._reset();a&&this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=
a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=a.success;a.success=function(a,d,e){a[e.update?"update":"reset"](d,e);b&&b(a,d,e)};return this.sync("read",this,a)},create:function(a,b){b=b?f.clone(b):{};if(!(a=this._prepareModel(a,b)))return!1;b.wait||this.add(a,b);var c=this,d=b.success;b.success=function(a,b,f){f.wait&&c.add(a,f);d&&d(a,b,f)};a.save(null,b);return a},parse:function(a){return a},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models.length=
0;this._byId={}},_prepareModel:function(a,b){if(a instanceof r)return a.collection||(a.collection=this),a;b||(b={});b.collection=this;var c=new this.model(a,b);return!c._validate(a,b)?!1:c},_removeReference:function(a){this===a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"===a||"remove"===a)&&c!==this||("destroy"===a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],null!=b.id&&(this._byId[b.id]=
b)),this.trigger.apply(this,arguments))},sortedIndex:function(a,b,c){b||(b=this.comparator);var d=f.isFunction(b)?b:function(a){return a.get(b)};return f.sortedIndex(this.models,a,d,c)}});f.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without indexOf shuffle lastIndexOf isEmpty chain".split(" "),function(a){s.prototype[a]=function(){var b=
u.call(arguments);b.unshift(this.models);return f[a].apply(f,b)}});f.each(["groupBy","countBy","sortBy"],function(a){s.prototype[a]=function(b,c){var d=f.isFunction(b)?b:function(a){return a.get(b)};return f[a](this.models,d,c)}});var y=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},E=/\((.*?)\)/g,F=/(\(\?)?:\w+/g,G=/\*\w+/g,H=/[\-{}\[\]+?.,\\\^$|#\s]/g;f.extend(y.prototype,h,{initialize:function(){},route:function(a,b,c){f.isRegExp(a)||
(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));this.trigger("route",b,d);g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b);return this},_bindRoutes:function(){if(this.routes)for(var a,b=f.keys(this.routes);null!=(a=b.pop());)this.route(a,this.routes[a])},_routeToRegExp:function(a){a=a.replace(H,"\\$&").replace(E,"(?:$1)?").replace(F,
function(a,c){return c?a:"([^/]+)"}).replace(G,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl");"undefined"!==typeof window&&(this.location=window.location,this.history=window.history)},z=/^[#\/]|\s+$/g,I=/^\/+|\/+$/g,J=/msie [\w.]+/,K=/\/$/;m.started=!1;f.extend(m.prototype,h,{interval:50,getHash:function(a){return(a=(a||this).location.href.match(/#(.*)$/))?a[1]:""},getFragment:function(a,
b){if(null==a)if(this._hasPushState||!this._wantsHashChange||b){a=this.location.pathname;var c=this.root.replace(K,"");a.indexOf(c)||(a=a.substr(c.length))}else a=this.getHash();return a.replace(z,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this.root=this.options.root;this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.options.pushState||
!this.history||!this.history.pushState);a=this.getFragment();var b=document.documentMode,b=J.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b);this.root=("/"+this.root+"/").replace(I,"/");b&&this._wantsHashChange&&(this.iframe=g.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a));if(this._hasPushState)g.$(window).on("popstate",this.checkUrl);else if(this._wantsHashChange&&"onhashchange"in window&&!b)g.$(window).on("hashchange",this.checkUrl);
else this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=a;a=this.location;b=a.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._wantsPushState&&(this._hasPushState&&b&&a.hash)&&(this.fragment=this.getHash().replace(z,""),this.history.replaceState({},document.title,
this.root+this.fragment+a.search));if(!this.options.silent)return this.loadUrl()},stop:function(){g.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a===this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},
loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};a=this.getFragment(a||"");if(this.fragment!==a){this.fragment=a;var c=this.root+a;if(this._hasPushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else if(this._wantsHashChange)this._updateHash(this.location,a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&
(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace));else return this.location.assign(c);b.trigger&&this.loadUrl(a)}},_updateHash:function(a,b,c){c?(c=a.href.replace(/(javascript:|#).*$/,""),a.replace(c+"#"+b)):a.hash="#"+b}});g.history=new m;var A=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},L=/^(\S+)\s*(.*)$/,M="model collection el id attributes className tagName events".split(" ");
f.extend(A.prototype,h,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof g.$?a:g.$(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=f.result(this,"events"))){this.undelegateEvents();for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);
if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(L),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);if(""===d)this.$el.on(e,c);else this.$el.on(e,d,c)}}},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},f.result(this,"options"),a));f.extend(this,f.pick(a,M));this.options=a},_ensureElement:function(){if(this.el)this.setElement(f.result(this,"el"),!1);else{var a=f.extend({},f.result(this,"attributes"));
this.id&&(a.id=f.result(this,"id"));this.className&&(a["class"]=f.result(this,"className"));a=g.$("<"+f.result(this,"tagName")+">").attr(a);this.setElement(a,!1)}}});var N={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=N[a];f.defaults(c||(c={}),{emulateHTTP:g.emulateHTTP,emulateJSON:g.emulateJSON});var e={type:d,dataType:"json"};c.url||(e.url=f.result(b,"url")||x());if(null==c.data&&b&&("create"===a||"update"===a||"patch"===a))e.contentType="application/json",
e.data=JSON.stringify(c.attrs||b.toJSON(c));c.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(c.emulateHTTP&&("PUT"===d||"DELETE"===d||"PATCH"===d)){e.type="POST";c.emulateJSON&&(e.data._method=d);var h=c.beforeSend;c.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d);if(h)return h.apply(this,arguments)}}"GET"!==e.type&&!c.emulateJSON&&(e.processData=!1);var m=c.success;c.success=function(a){m&&m(b,a,c);b.trigger("sync",b,a,c)};
var j=c.error;c.error=function(a){j&&j(b,a,c);b.trigger("error",b,a,c)};a=c.xhr=g.ajax(f.extend(e,c));b.trigger("request",b,a,c);return a};g.ajax=function(){return g.$.ajax.apply(g.$,arguments)};r.extend=s.extend=y.extend=A.extend=m.extend=function(a,b){var c=this,d;d=a&&f.has(a,"constructor")?a.constructor:function(){return c.apply(this,arguments)};f.extend(d,c,b);var e=function(){this.constructor=d};e.prototype=c.prototype;d.prototype=new e;a&&f.extend(d.prototype,a);d.__super__=c.prototype;return d};
var x=function(){throw Error('A "url" property or function must be specified');}}).call(this);

define("backbone", ["jquery","lodash"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Backbone;
    };
}(this)));

define('i18n',{"browse":{"filter":{"affiliations":{"label":"All Profiles","labelFaculty":"Faculty and Teaching Staff","labelGraduateStudents":"Graduate Students","labelPostdocs":"Postdocs","labelStaff":"Staff"},"lastName":{"label":"Last Name"}},"page":{"title":"Browse {0}"}},"collapsible":{"labelAll":"All {0} ({1})","labelViewFullDescription":"View Full Description"},"error":{"404":{"header":"Page Not Found","instructions":"The page you requested cannot be found. You may have used an out-dated link or typed the address (URL) incorrectly. If you entered the URL manually, please check your spelling and try again.","page":{"title":"Page Not Found"}},"500":{"header":"Oops, Something Went Wrong","instructions":"The page you requested cannot be retrieved at this time due to an internal error. Our developers have been sent a notification of this error and should have it resolved shortly.","page":{"title":"Oops"}},"labelOtherResources":"Other Resources"},"header":{"labelCAPNetworkProfiles":"CAP Profiles","labelStanford":"Stanford | Profiles","labelStanfordMedicine":"Stanford Medicine","labelStanfordSchoolOfMedicine":"Stanford School of Medicine","labelStanfordUniversity":"Stanford University","metaDescription":{"home":"CAP Network is a virtual workspace to support collaboration among faculty, graduate students, postdocs and staff. Combining a profile directory with a social networking backend, CAP makes it easy for you to work closely with colleagues and track the projects that matter most to you - all in a private, secure environment.","profile":"{0} is on CAP Network. CAP Network is a virtual workspace, to support collaboration among faculty, graduate students, postdocs and staff."}},"home":{"information":{"findBy":{"content":"Our search looks at the entire content of someone&#8217;s profile. So whether you are looking for John Hennessy, or Computer Architecture, or a publication about &#8220;distributed shared memory&#8221;, you&#8217;ll find people related to your search.","label":"Find By Name or Topic"},"keepCurrent":{"content":"With special tabs for Bio, Research & Scholarship, Teaching, Professional, and Publications, you have a place to share your knowledge, skills, and accomplishments. Sign in at the top to update your profile.","label":"Keep Your Bio Current"},"searchAll":{"content":"Search faculty, staff, graduate students, and postdocs in one place and filter your results to easily find people.  This beta release includes most Stanford people.  Future releases will cover all Stanford organizations.","label":"Search Stanford People"}},"page":{"title":"Home"},"search":{"label":"Search or Browse Profiles","labelPhone":"Search Profiles"}},"profile":{"bio":{"contacts":{"labelClincal":"Clinical","labelFax":"Fax:","labelTel":"Tel:"},"headerAcademicAppointments":"Academic Appointments","headerAcademicAppointmentsAlternate":"Institute Affiliations","headerAdministrativeAppointments":"Administrative Appointments","headerBio":"Bio","headerBioScienceProgramAffiliates":"BioScience Program Affiliations","headerClerkships":"Clerkships","headerClinicalCare":"Physician Care Narrative","headerClinicalFocus":"Clinical Focus","headerClinicalTrials":"Clinical Trials","headerCommunityAndInternationalWork":"Community and International Work","headerContactInfo":"Contact","headerCurrentRoleAtStanford":"Current Role at Stanford","headerHonorsAndAwards":"Honors & Awards","headerLinks":"Links","headerMembershipOrganizations":"Membership Organizations","headerPatents":"Patents","headerPersonalInterests":"Personal Interests","headerProfessionalEducation":"Professional Education","headerProfessionalEducationAlternate":"Education & Certifications","headerProfessionalOrganizations":"Boards, Advisory Committees, Professional Organizations","headerProfessionalOrganizationsAlternate":"Professional Affiliations and Activities","headerProjects":"Projects","headerServiceWork":"Service, Volunteer and Community Work","headerStanfordAdvisors":"Stanford Advisors","headerSupervisors":"Supervisors","label":"Bio"},"masthead":{"labelEmail":"Email Profile","labelPrint":"Print Profile","stanfordOnly":{"description":"View internal Stanford version of this profile. Requires login with a SUNet ID.","label":"Stanford-Only Profile"}},"professional":{"headerProfessionalInterests":"Professional Interests","headerWorkExperience":"Work Experience","label":"Professional"},"publications":{"headerAllPublications":"All Publications","headerBooks":"Books and Book Chapters","headerConferenceProceedings":"Conference Proceedings","headerFeaturedPublications":"Featured Publications","headerJournalArticles":"Journal Articles","headerPresentations":"Presentations","headerPublications":"Publications ({0})","headerPublicationsByTopic":"Publication Topics For This Person","headerSimilarProfiles":"Profiles With Related Publications","label":"Publications","labelAbstract":"Abstract","labelBackToSummary":"Back To Summary","labelDOI":"DOI","labelPubMed":"PubMedID","labelViewDetailsFor":"View details for","labelWebOfScience":"Web of Science ID","similarProfiles":{"labelClinicalFocus":"Clinical Focus","labelResearchInterests":"Research Interests"},"totalLabel":"Total Publications"},"research":{"headerClinicalTrials":"Clinical Trials","headerCurrentClinicalInterests":"Current Clinical Interests","headerCurrentResearch":"Current Research and Scholarly Interests","headerIndustryRelationships":"Industry Relationships","headerLabAffiliations":"Lab Affiliations","headerProjects":"Projects","headerResearchProjects":"Research Projects","label":"Research & Scholarship","projects":{"labelCollaborators":"Collaborators","labelMoreInformation":"For More Information"}},"shared":{"clinicalTrials":{"moreInformation":"For more information, please contact  ","notRecruiting":"Stanford is currently not accepting patients for this trial."},"labelAllAdvisees":"All Advisees","labelAllAuthors":"All Authors","labelCollaborators":"Collaborators","labelHide":"Hide","labelInvestigators":"Stanford Investigators","labelLeadSponsor":"Lead Sponsor","labelLess":"Less","labelMore":"More","labelMoreInformation":"For More Information","labelNotRecruiting":"Not Recruiting","labelRecruiting":"Recruiting","labelViewFullDetails":"View full details"},"teaching":{"courses":{"labelIndependentStudies":"Independent Studies","labelPriorYearCourses":"Prior Year Courses"},"headerCourses":"Courses","headerGraduateAndFellowshipPrograms":"Graduate and Fellowship Programs","headerPostdoctoralAdvisees":"Postdoctoral Advisees","headerStanfordAdvisees":"Stanford Advisees","label":"Teaching","labelSeeAlso":"See Also"}},"searchResults":{"filters":{"label":"Show Only","similarProfiles":{"label":"Similarly Spelled Names"}},"headerExact":"Exact name matches for {0}","headerKeyword":"Profiles that include {0}","list":{"buttonFirst":"First","buttonLast":"Last","buttonNext":"Next","buttonPrevious":"Previous","buttonResultsPerPage":"{0} Results / Page","buttonResultsPerPagePhone":"{0} / Page","buttonViewAll":"View All","labelJumpToPage":"Jump To Page","labelRange":"{0}/{1}","labelShowOneResult":"Showing {0} of {1} Results","labelShowResults":"Showing {0}-{1} of {2} Results"},"noResults":{"label":"No results found for {0}"},"page":{"title":"Search for {0}"},"searching":{"label":"Searching for {0}"},"stanfordOnly":{"description":"View internal Stanford version of these results. Requires login with a SUNet ID.","label":"View Stanford-Only Results"}},"shared":{"browse":{"labelAdministration":"Administration","labelInstitutes":"Institutes","labelSchools":"Schools"},"email":{"body":"I would like to share the profile of {0} with you. {1}","subject":"{0}''s Profile","subjectAlternate":"{0}'' Profile"},"labelBrowse":"Browse","labelLoadingMessage":"Retrieving Data","labelProfiles":"Profiles","labelSignIn":"Sign In","labelStanfordOnly":"Stanford-Only","page":{"title":"Stanford Medicine Profiles"},"search":{"button":"Search","placeholder":"Search by name or topic..."},"stanfordOnly":{"description":"to Stanford-only CAP Network to edit your profile, connect with colleagues or view internal versions of profiles.  Requires a SUNet ID."}}});
 // Backbone.Marionette, v1.0.0-rc3
 // Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
 // Distributed under MIT license
 // http://github.com/marionettejs/backbone.marionette


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */


Backbone.ChildViewContainer=function(e,t){var n=function(e){this._views={},this._indexByModel={},this._indexByCollection={},this._indexByCustom={},this._updateLength(),this._addInitialViews(e)};t.extend(n.prototype,{add:function(e,t){var n=e.cid;this._views[n]=e,e.model&&(this._indexByModel[e.model.cid]=n),e.collection&&(this._indexByCollection[e.collection.cid]=n),t&&(this._indexByCustom[t]=n),this._updateLength()},findByModel:function(e){var t=this._indexByModel[e.cid];return this.findByCid(t)},findByCollection:function(e){var t=this._indexByCollection[e.cid];return this.findByCid(t)},findByCustom:function(e){var t=this._indexByCustom[e];return this.findByCid(t)},findByIndex:function(e){return t.values(this._views)[e]},findByCid:function(e){return this._views[e]},remove:function(e){var t=e.cid;e.model&&delete this._indexByModel[e.model.cid],e.collection&&delete this._indexByCollection[e.collection.cid];var n;for(var r in this._indexByCustom)if(this._indexByCustom.hasOwnProperty(r)&&this._indexByCustom[r]===t){n=r;break}n&&delete this._indexByCustom[n],delete this._views[t],this._updateLength()},call:function(e,t){t=Array.prototype.slice.call(arguments,1),this.apply(e,t)},apply:function(e,n){var r;n=n||[],t.each(this._views,function(r,i){t.isFunction(r[e])&&r[e].apply(r,n)})},_updateLength:function(){this.length=t.size(this._views)},_addInitialViews:function(e){if(!e)return;var t,n,r=e.length;for(n=0;n<r;n++)t=e[n],this.add(t)}});var r=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];return t.each(r,function(e){n.prototype[e]=function(){var n=t.values(this._views),r=[n].concat(t.toArray(arguments));return t[e].apply(t,r)}}),n}(Backbone,_),Backbone.Wreqr=function(e,t,n){"option strict";var r={};return r.Handlers=function(e,t){var n=function(){this._handlers={}};return n.extend=e.Model.extend,t.extend(n.prototype,{addHandler:function(e,t,n){var r={callback:t,context:n};this._handlers[e]=r},getHandler:function(e){var t=this._handlers[e];if(!t)throw new Error("Handler not found for '"+e+"'");return function(){var e=Array.prototype.slice.apply(arguments);return t.callback.apply(t.context,e)}},removeHandler:function(e){delete this._handlers[e]},removeAllHandlers:function(){this._handlers={}}}),n}(e,n),r.Commands=function(e){return e.Handlers.extend({execute:function(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);this.getHandler(e).apply(this,t)}})}(r),r.RequestResponse=function(e){return e.Handlers.extend({request:function(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return this.getHandler(e).apply(this,t)}})}(r),r.EventAggregator=function(e,t){function r(e,r,i,s,o){return o=o||e,n.call(e,r,i,t.bind(s,o))}function i(){}var n=e.Events.listenTo;return t.extend(i.prototype,e.Events,{listenTo:function(e,t,n,i){return r(this,e,t,n,i)}}),i.extend=e.Model.extend,i}(e,n),r}(Backbone,Backbone.Marionette,_);var Marionette=function(e,t,n){var r={};e.Marionette=r;var i=Array.prototype.slice;return r.extend=e.Model.extend,r.getOption=function(e,t){if(!e||!t)return;var n;return e.options&&e.options[t]?n=e.options[t]:n=e[t],n},r.createObject=function(){function t(){}var e;return typeof Object.create=="function"?e=Object.create:e=function(e){t.prototype=e;var n=new t;return t.prototype=null,n},e}(),r.triggerMethod=function(){var e=Array.prototype.slice.apply(arguments),n=e[0],r=n.split(":"),i,s,o="on";for(var u=0;u<r.length;u++)i=r[u],s=i.charAt(0).toUpperCase(),o+=s+i.slice(1);this.trigger.apply(this,e);if(t.isFunction(this[o]))return e.shift(),this[o].apply(this,e)},r.MonitorDOMRefresh=function(){function e(e){e._isShown=!0,r(e)}function n(e){e._isRendered=!0,r(e)}function r(e){e._isShown&&e._isRendered&&t.isFunction(e.triggerMethod)&&e.triggerMethod("dom:refresh")}return function(t){t.listenTo(t,"show",function(){e(t)}),t.listenTo(t,"render",function(){n(t)})}}(),function(e,t,n){var r=e.Events.listenTo;t.addEventBinder=function(t){!t.on&&!t.off&&!t.listenTo&&!t.stopListening&&n.extend(t,e.Events),t.listenTo=function(e,t,i,s){return s=s||this,r.call(this,e,t,n.bind(i,s))}}}(e,r,t),r.EventAggregator=e.Wreqr.EventAggregator.extend({constructor:function(){r.addEventBinder(this);var t=Array.prototype.slice.apply(arguments);e.Wreqr.EventAggregator.prototype.constructor.apply(this,t)}}),function(e){function n(e,n,r,i){var s=i.split(/\s+/);t.each(s,function(t){var i=e[t];if(!i)throw new Error("Method '"+t+"' was configured as an event handler, but does not exist.");e.listenTo(n,r,i,e)})}function r(e,t,n,r){e.listenTo(t,n,r,e)}function i(e,n,r,i){var s=i.split(/\s+/);t.each(s,function(t){var i=e[i];e.stopListening(n,r,i,e)})}function s(e,t,n,r){e.stopListening(t,n,r,e)}function o(e,n,r,i,s){if(!n||!r)return;t.isFunction(r)&&(r=r.call(e)),t.each(r,function(r,o){t.isFunction(r)?i(e,n,o,r):s(e,n,o,r)})}e.bindEntityEvents=function(e,t,i){o(e,t,i,r,n)},e.unbindEntityEvents=function(e,t,n){o(e,t,n,s,i)}}(r),r.Callbacks=function(){this._deferred=n.Deferred(),this._callbacks=[]},t.extend(r.Callbacks.prototype,{add:function(e,t){this._callbacks.push({cb:e,ctx:t}),this._deferred.done(function(n,r){t&&(n=t),e.call(n,r)})},run:function(e,t){this._deferred.resolve(t,e)},reset:function(){var e=this,r=this._callbacks;this._deferred=n.Deferred(),this._callbacks=[],t.each(r,function(t){e.add(t.cb,t.ctx)})}}),r.Controller=function(e){this.triggerMethod=r.triggerMethod,this.options=e||{},r.addEventBinder(this),t.isFunction(this.initialize)&&this.initialize(this.options)},r.Controller.extend=r.extend,t.extend(r.Controller.prototype,e.Events,{close:function(){this.stopListening(),this.triggerMethod("close"),this.unbind()}}),r.Region=function(e){this.options=e||{},r.addEventBinder(this),this.el=r.getOption(this,"el");if(!this.el){var t=new Error("An 'el' must be specified for a region.");throw t.name="NoElError",t}if(this.initialize){var n=Array.prototype.slice.apply(arguments);this.initialize.apply(this,n)}},t.extend(r.Region,{buildRegion:function(e,t){var n=typeof e=="string",r=typeof e.selector=="string",i=typeof e.regionType=="undefined",s=typeof e=="function";if(!s&&!n&&!r)throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");var o,u;n&&(o=e),e.selector&&(o=e.selector),s&&(u=e),!s&&i&&(u=t),e.regionType&&(u=e.regionType);var a=new u({el:o});return a}}),t.extend(r.Region.prototype,e.Events,{show:function(e){this.ensureEl(),this.close(),e.render(),this.open(e),r.triggerMethod.call(e,"show"),r.triggerMethod.call(this,"show",e),this.currentView=e},ensureEl:function(){if(!this.$el||this.$el.length===0)this.$el=this.getEl(this.el)},getEl:function(e){return n(e)},open:function(e){this.$el.empty().append(e.el)},close:function(){var e=this.currentView;if(!e||e.isClosed)return;e.close&&e.close(),r.triggerMethod.call(this,"close"),delete this.currentView},attachView:function(e){this.currentView=e},reset:function(){this.close(),delete this.$el}}),r.Region.extend=r.extend,r.TemplateCache=function(e){this.templateId=e},t.extend(r.TemplateCache,{templateCaches:{},get:function(e){var t=this,n=this.templateCaches[e];return n||(n=new r.TemplateCache(e),this.templateCaches[e]=n),n.load()},clear:function(){var e,t=Array.prototype.slice.apply(arguments),n=t.length;if(n>0)for(e=0;e<n;e++)delete this.templateCaches[t[e]];else this.templateCaches={}}}),t.extend(r.TemplateCache.prototype,{load:function(){var e=this;if(this.compiledTemplate)return this.compiledTemplate;var t=this.loadTemplate(this.templateId);return this.compiledTemplate=this.compileTemplate(t),this.compiledTemplate},loadTemplate:function(e){var t=n(e).html();if(!t||t.length===0){var r="Could not find template: '"+e+"'",i=new Error(r);throw i.name="NoTemplateError",i}return t},compileTemplate:function(e){return t.template(e)}}),r.Renderer={render:function(e,t){var n=typeof e=="function"?e:r.TemplateCache.get(e),i=n(t);return i}},r.View=e.View.extend({constructor:function(){t.bindAll(this,"render"),r.addEventBinder(this);var n=Array.prototype.slice.apply(arguments);e.View.prototype.constructor.apply(this,n),r.MonitorDOMRefresh(this),this.listenTo(this,"show",this.onShowCalled,this)},triggerMethod:r.triggerMethod,getTemplate:function(){return r.getOption(this,"template")},mixinTemplateHelpers:function(e){e=e||{};var n=this.templateHelpers;return t.isFunction(n)&&(n=n.call(this)),t.extend(e,n)},configureTriggers:function(){if(!this.triggers)return;var e=this,n={},r=t.result(this,"triggers");return t.each(r,function(t,r){n[r]=function(n){n&&n.preventDefault&&n.preventDefault(),n&&n.stopPropagation&&n.stopPropagation();var r={view:this,model:this.model,collection:this.collection};e.trigger(t,r)}}),n},delegateEvents:function(e){this._delegateDOMEvents(e),r.bindEntityEvents(this,this.model,r.getOption(this,"modelEvents")),r.bindEntityEvents(this,this.collection,r.getOption(this,"collectionEvents"))},_delegateDOMEvents:function(n){n=n||this.events,t.isFunction(n)&&(n=n.call(this));var r={},i=this.configureTriggers();t.extend(r,n,i),e.View.prototype.delegateEvents.call(this,r)},undelegateEvents:function(){var t=Array.prototype.slice.call(arguments);e.View.prototype.undelegateEvents.apply(this,t),r.unbindEntityEvents(this,this.model,r.getOption(this,"modelEvents")),r.unbindEntityEvents(this,this.collection,r.getOption(this,"collectionEvents"))},onShowCalled:function(){},close:function(){if(this.isClosed)return;var e=this.triggerMethod("before:close");if(e===!1)return;this.isClosed=!0,this.triggerMethod("close"),this.remove()},bindUIElements:function(){if(!this.ui)return;var e=this;this.uiBindings||(this.uiBindings=t.result(this,"ui")),this.ui={},t.each(t.keys(this.uiBindings),function(t){var n=e.uiBindings[t];e.ui[t]=e.$(n)})}}),r.ItemView=r.View.extend({constructor:function(){var e=Array.prototype.slice.apply(arguments);r.View.prototype.constructor.apply(this,e)},serializeData:function(){var e={};return this.model?e=this.model.toJSON():this.collection&&(e={items:this.collection.toJSON()}),e},render:function(){this.isClosed=!1,this.triggerMethod("before:render",this),this.triggerMethod("item:before:render",this);var e=this.serializeData();e=this.mixinTemplateHelpers(e);var t=this.getTemplate(),n=r.Renderer.render(t,e);return this.$el.html(n),this.bindUIElements(),this.triggerMethod("render",this),this.triggerMethod("item:rendered",this),this},close:function(){if(this.isClosed)return;this.triggerMethod("item:before:close");var e=Array.prototype.slice.apply(arguments);r.View.prototype.close.apply(this,e),this.triggerMethod("item:closed")}}),r.CollectionView=r.View.extend({itemViewEventPrefix:"itemview",constructor:function(e){this._initChildViewStorage();var t=Array.prototype.slice.apply(arguments);r.View.prototype.constructor.apply(this,t),this._initialEvents()},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this.addChildView,this),this.listenTo(this.collection,"remove",this.removeItemView,this),this.listenTo(this.collection,"reset",this.render,this))},addChildView:function(e,t,n){this.closeEmptyView();var r=this.getItemView(e),i=this.collection.indexOf(e);this.addItemView(e,r,i)},onShowCalled:function(){this.children.each(function(e){r.triggerMethod.call(e,"show")})},triggerBeforeRender:function(){this.triggerMethod("before:render",this),this.triggerMethod("collection:before:render",this)},triggerRendered:function(){this.triggerMethod("render",this),this.triggerMethod("collection:rendered",this)},render:function(){return this.isClosed=!1,this.triggerBeforeRender(),this.closeEmptyView(),this.closeChildren(),this.collection&&this.collection.length>0?this.showCollection():this.showEmptyView(),this.triggerRendered(),this},showCollection:function(){var e=this,t;this.collection.each(function(n,r){t=e.getItemView(n),e.addItemView(n,t,r)})},showEmptyView:function(){var t=r.getOption(this,"emptyView");if(t&&!this._showingEmptyView){this._showingEmptyView=!0;var n=new e.Model;this.addItemView(n,t,0)}},closeEmptyView:function(){this._showingEmptyView&&(this.closeChildren(),delete this._showingEmptyView)},getItemView:function(e){var t=r.getOption(this,"itemView");if(!t){var n=new Error("An `itemView` must be specified");throw n.name="NoItemViewError",n}return t},addItemView:function(e,n,i){var s=this,o=r.getOption(this,"itemViewOptions");t.isFunction(o)&&(o=o.call(this,e));var u=this.buildItemView(e,n,o);this.addChildViewEventForwarding(u),this.triggerMethod("before:item:added",u),this.children.add(u),this._isShown&&r.triggerMethod.call(u,"show");var a=this.renderItemView(u,i);this.triggerMethod("after:item:added",u)},addChildViewEventForwarding:function(e){var t=r.getOption(this,"itemViewEventPrefix");this.listenTo(e,"all",function(){var n=i.call(arguments);n[0]=t+":"+n[0],n.splice(1,0,e),r.triggerMethod.apply(this,n)},this)},renderItemView:function(e,t){e.render(),this.appendHtml(this,e,t)},buildItemView:function(e,n,r){var i=t.extend({model:e},r),s=new n(i);return s},removeItemView:function(e){var t=this.children.findByModel(e);this.removeChildView(t)},removeChildView:function(e){e&&(this.stopListening(e),e.close&&e.close(),this.children.remove(e)),(!this.collection||this.collection.length===0)&&this.showEmptyView(),this.triggerMethod("item:removed",e)},appendHtml:function(e,t,n){e.$el.append(t.el)},_initChildViewStorage:function(){this.children=new e.ChildViewContainer},close:function(){if(this.isClosed)return;this.triggerMethod("collection:before:close"),this.closeChildren(),this.triggerMethod("collection:closed");var e=Array.prototype.slice.apply(arguments);r.View.prototype.close.apply(this,e)},closeChildren:function(){this.children.each(function(e){this.removeChildView(e)},this),this._initChildViewStorage()}}),r.CompositeView=r.CollectionView.extend({constructor:function(e){var t=Array.prototype.slice.apply(arguments);r.CollectionView.apply(this,t),this.itemView=this.getItemView()},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this.addChildView,this),this.listenTo(this.collection,"remove",this.removeItemView,this),this.listenTo(this.collection,"reset",this.renderCollection,this))},getItemView:function(e){var t=r.getOption(this,"itemView")||this.constructor;if(!t){var n=new Error("An `itemView` must be specified");throw n.name="NoItemViewError",n}return t},serializeData:function(){var e={};return this.model&&(e=this.model.toJSON()),e},render:function(){this.isClosed=!1,this.resetItemViewContainer();var e=this.renderModel();return this.$el.html(e),this.bindUIElements(),this.triggerMethod("composite:model:rendered"),this.renderCollection(),this.triggerMethod("composite:rendered"),this},renderCollection:function(){var e=Array.prototype.slice.apply(arguments);r.CollectionView.prototype.render.apply(this,e),this.triggerMethod("composite:collection:rendered")},renderModel:function(){var e={};e=this.serializeData(),e=this.mixinTemplateHelpers(e);var t=this.getTemplate();return r.Renderer.render(t,e)},appendHtml:function(e,t){var n=this.getItemViewContainer(e);n.append(t.el)},getItemViewContainer:function(e){if("$itemViewContainer"in e)return e.$itemViewContainer;var n;if(e.itemViewContainer){var r=t.result(e,"itemViewContainer");n=e.$(r);if(n.length<=0){var i=new Error("The specified `itemViewContainer` was not found: "+e.itemViewContainer);throw i.name="ItemViewContainerMissingError",i}}else n=e.$el;return e.$itemViewContainer=n,n},resetItemViewContainer:function(){this.$itemViewContainer&&delete this.$itemViewContainer}}),r.Layout=r.ItemView.extend({regionType:r.Region,constructor:function(){this._firstRender=!0,this.initializeRegions();var e=Array.prototype.slice.apply(arguments);r.ItemView.apply(this,e)},render:function(){this._firstRender?this._firstRender=!1:(this.closeRegions(),this.reInitializeRegions());var e=Array.prototype.slice.apply(arguments),t=r.ItemView.prototype.render.apply(this,e);return t},close:function(){if(this.isClosed)return;this.closeRegions(),this.destroyRegions();var e=Array.prototype.slice.apply(arguments);r.ItemView.prototype.close.apply(this,e)},initializeRegions:function(){this.regionManagers||(this.regionManagers={});var e=this,n=this.regions||{};t.each(n,function(t,n){var i=r.Region.buildRegion(t,e.regionType);i.getEl=function(t){return e.$(t)},e.regionManagers[n]=i,e[n]=i})},reInitializeRegions:function(){this.regionManagers&&t.size(this.regionManagers)===0?this.initializeRegions():t.each(this.regionManagers,function(e){e.reset()})},closeRegions:function(){var e=this;t.each(this.regionManagers,function(e,t){e.close()})},destroyRegions:function(){var e=this;t.each(this.regionManagers,function(t,n){delete e[n]}),this.regionManagers={}}}),r.AppRouter=e.Router.extend({constructor:function(t){var n=Array.prototype.slice.apply(arguments);e.Router.prototype.constructor.apply(this,n),this.options=t;if(this.appRoutes){var i=r.getOption(this,"controller");this.processAppRoutes(i,this.appRoutes)}},processAppRoutes:function(e,n){var r,i,s,o,u,a=[],f=this;for(s in n)n.hasOwnProperty(s)&&a.unshift([s,n[s]]);o=a.length;for(u=0;u<o;u++){s=a[u][0],i=a[u][1],r=e[i];if(!r){var l="Method '"+i+"' was not found on the controller",c=new Error(l);throw c.name="NoMethodError",c}r=t.bind(r,e),f.route(s,i,r)}}}),r.Application=function(n){this.initCallbacks=new r.Callbacks,this.vent=new r.EventAggregator,this.commands=new e.Wreqr.Commands,this.reqres=new e.Wreqr.RequestResponse,this.submodules={},t.extend(this,n),r.addEventBinder(this),this.triggerMethod=r.triggerMethod},t.extend(r.Application.prototype,e.Events,{execute:function(){var e=Array.prototype.slice.apply(arguments);this.commands.execute.apply(this.commands,e)},request:function(){var e=Array.prototype.slice.apply(arguments);return this.reqres.request.apply(this.reqres,e)},addInitializer:function(e){this.initCallbacks.add(e)},start:function(e){this.triggerMethod("initialize:before",e),this.initCallbacks.run(e,this),this.triggerMethod("initialize:after",e),this.triggerMethod("start",e)},addRegions:function(e){var n=this;t.each(e,function(e,t){var i=r.Region.buildRegion(e,r.Region);n[t]=i})},removeRegion:function(e){this[e].close(),delete this[e]},module:function(e,t){var n=i.call(arguments);return n.unshift(this),r.Module.create.apply(r.Module,n)}}),r.Application.extend=r.extend,r.Module=function(e,t){this.moduleName=e,this.submodules={},this._setupInitializersAndFinalizers(),this.app=t,this.startWithParent=!0,r.addEventBinder(this),this.triggerMethod=r.triggerMethod},t.extend(r.Module.prototype,e.Events,{addInitializer:function(e){this._initializerCallbacks.add(e)},addFinalizer:function(e){this._finalizerCallbacks.add(e)},start:function(e){if(this._isInitialized)return;t.each(this.submodules,function(t){var n=!0;n=t.startWithParent,n&&t.start(e)}),this.triggerMethod("before:start",e),this._initializerCallbacks.run(e,this),this._isInitialized=!0,this.triggerMethod("start",e)},stop:function(){if(!this._isInitialized)return;this._isInitialized=!1,r.triggerMethod.call(this,"before:stop"),t.each(this.submodules,function(e){e.stop()}),this._finalizerCallbacks.run(),this._initializerCallbacks.reset(),this._finalizerCallbacks.reset(),r.triggerMethod.call(this,"stop")},addDefinition:function(e,t){this._runModuleDefinition(e,t)},_runModuleDefinition:function(i,s){if(!i)return;var o=t.flatten([this,this.app,e,r,n,t,s]);i.apply(this,o)},_setupInitializersAndFinalizers:function(){this._initializerCallbacks=new r.Callbacks,this._finalizerCallbacks=new r.Callbacks}}),t.extend(r.Module,{create:function(e,n,r){var s=this,o=e,u=i.apply(arguments);u.splice(0,3),n=n.split(".");var a=n.length,f=[];return f[a-1]=r,t.each(n,function(t,n){var r=o;o=s._getModule(r,t,e),s._addModuleDefinition(r,o,f[n],u)}),o},_getModule:function(e,t,n,i,s){var o=e[t];return o||(o=new r.Module(t,n),e[t]=o,e.submodules[t]=o),o},_addModuleDefinition:function(e,n,r,i){var s,o;t.isFunction(r)?(s=r,o=!0):t.isObject(r)?(s=r.define,o=r.startWithParent):o=!0,s&&n.addDefinition(s,i);var u=n.startWithParent;n.startWithParent=n.startWithParent&&o,n.startWithParent&&!n.startWithParentIsConfigured&&(n.startWithParentIsConfigured=!0,e.addInitializer(function(e){n.startWithParent&&n.start(e)}))}}),r}(Backbone,_,$||window.jQuery||window.Zepto||window.ender);
define("marionette", ["backbone"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Backbone.Marionette;
    };
}(this)));

(function() {

  define('vent',['marionette'], function(Marionette) {
    
    return new Marionette.EventAggregator();
  });

}).call(this);

define('hogan',['require','exports','module'],function(require, exports, module){

// wrapped Hogan.js into an AMD module and also added pragmas to remove
// compiler after build if it isn't needed. Source code wasn't touched
// besides that.


// START WRAPPED CODE
// ===========================================================================


/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */



var Hogan = {};

(function (Hogan, useArrayBuffer) {
  Hogan.Template = function (renderFunc, text, compiler, options) {
    this.r = renderFunc || this.r;
    this.c = compiler;
    this.options = options;
    this.text = text || '';
    this.buf = (useArrayBuffer) ? [] : '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // tries to find a partial in the curent scope and render it
    rp: function(name, context, partials, indent) {
      var partial = partials[name];

      if (!partial) {
        return '';
      }

      if (this.c && typeof partial == 'string') {
        partial = this.c.compile(partial, this.options);
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ls(val, ctx, partials, inverted, start, end, tags);
      }

      pass = (val === '') || !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        return ctx[ctx.length - 1];
      }

      for (var i = 1; i < names.length; i++) {
        if (val && typeof val == 'object' && names[i] in val) {
          cx = val;
          val = val[names[i]];
        } else {
          val = '';
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.lv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        if (v && typeof v == 'object' && key in v) {
          val = v[key];
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.lv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ho: function(val, cx, partials, text, tags) {
      var compiler = this.c;
      var options = this.options;
      options.delimiters = tags;
      var text = val.call(cx, text);
      text = (text == null) ? String(text) : text.toString();
      this.b(compiler.compile(text, options).render(cx, partials));
      return false;
    },

    // template result buffering
    b: (useArrayBuffer) ? function(s) { this.buf.push(s); } :
                          function(s) { this.buf += s; },
    fl: (useArrayBuffer) ? function() { var r = this.buf.join(''); this.buf = []; return r; } :
                           function() { var r = this.buf; this.buf = ''; return r; },

    // lambda replace section
    ls: function(val, ctx, partials, inverted, start, end, tags) {
      var cx = ctx[ctx.length - 1],
          t = null;

      if (!inverted && this.c && val.length > 0) {
        return this.ho(val, cx, partials, this.text.substring(start, end), tags);
      }

      t = val.call(cx);

      if (typeof t == 'function') {
        if (inverted) {
          return true;
        } else if (this.c) {
          return this.ho(t, cx, partials, this.text.substring(start, end), tags);
        }
      }

      return t;
    },

    // lambda replace variable
    lv: function(val, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = val.call(cx);

      if (typeof result == 'function') {
        result = coerceToString(result.call(cx));
        if (this.c && ~result.indexOf("{\u007B")) {
          return this.c.compile(result, this.options).render(cx, partials);
        }
      }

      return coerceToString(result);
    }

  };

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos =/\'/g,
      rQuot = /\"/g,
      hChars =/[&<>\"\']/;


  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp,'&amp;')
        .replace(rLt,'&lt;')
        .replace(rGt,'&gt;')
        .replace(rApos,'&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})(typeof exports !== 'undefined' ? exports : Hogan);





(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      tagTypes = {
        '#': 1, '^': 2, '/': 3,  '!': 4, '>': 5,
        '<': 6, '=': 7, '_v': 8, '{': 9, '&': 10
      };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push(new String(buf));
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['_v']) ||
          (!tokens[j].tag && tokens[j].match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (!tokens[j].tag) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = tagTypes[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - ctag.length : i + otag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        token = null;

    while (tokens.length > 0) {
      token = tokens.shift();
      if (token.tag == '#' || token.tag == '^' || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
        instructions.push(token);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else {
        instructions.push(token);
      }
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  Hogan.generate = function (tree, text, options) {
    var code = 'var _=this;_.b(i=i||"");' + walk(tree) + 'return _.fl();';
    if (options.asString) {
      return 'function(c,p,i){' + code + ';}';
    }

    return new Hogan.Template(new Function('c', 'p', 'i', code), text, Hogan, options);
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function walk(tree) {
    var code = '';
    for (var i = 0, l = tree.length; i < l; i++) {
      var tag = tree[i].tag;
      if (tag == '#') {
        code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n),
                        tree[i].i, tree[i].end, tree[i].otag + " " + tree[i].ctag);
      } else if (tag == '^') {
        code += invertedSection(tree[i].nodes, tree[i].n,
                                chooseMethod(tree[i].n));
      } else if (tag == '<' || tag == '>') {
        code += partial(tree[i]);
      } else if (tag == '{' || tag == '&') {
        code += tripleStache(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '\n') {
        code += text('"\\n"' + (tree.length-1 == i ? '' : ' + i'));
      } else if (tag == '_v') {
        code += variable(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag === undefined) {
        code += text('"' + esc(tree[i]) + '"');
      }
    }
    return code;
  }

  function section(nodes, id, method, start, end, tags) {
    return 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),' +
           'c,p,0,' + start + ',' + end + ',"' + tags + '")){' +
           '_.rs(c,p,' +
           'function(c,p,_){' +
           walk(nodes) +
           '});c.pop();}';
  }

  function invertedSection(nodes, id, method) {
    return 'if(!_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0,"")){' +
           walk(nodes) +
           '};';
  }

  function partial(tok) {
    return '_.b(_.rp("' +  esc(tok.n) + '",c,p,"' + (tok.indent || '') + '"));';
  }

  function tripleStache(id, method) {
    return '_.b(_.t(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function variable(id, method) {
    return '_.b(_.v(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function text(id) {
    return '_.b(' + id + ');';
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  },

  Hogan.cache = {};

  Hogan.compile = function(text, options) {
    // options
    //
    // asString: false (default)
    //
    // sectionTags: [{o: '_foo', c: 'foo'}]
    // An array of object with o and c fields that indicate names for custom
    // section tags. The example above allows parsing of {{_foo}}{{/foo}}.
    //
    // delimiters: A string that overrides the default delimiters.
    // Example: "<% %>"
    //
    options = options || {};

    var key = text + '||' + !!options.asString;

    var t = this.cache[key];

    if (t) {
      return t;
    }

    t = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = t;
  };
})(typeof exports !== 'undefined' ? exports : Hogan);



// END WRAPPED CODE
// ===========================================================================
});

/**
 * @license RequireJS text 2.0.0 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint */
/*global require: false, XMLHttpRequest: false, ActiveXObject: false,
  define: false, window: false, process: false, Packages: false,
  java: false, location: false */

define('text',['module'], function (module) {
    

    var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = [],
        masterConfig = module.config(),
        text, fs;

    text = {
        version: '2.0.0',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r");
        },

        createXhr: function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i++) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var strip = false, index = name.indexOf("."),
                modName = name.substring(0, index),
                ext = name.substring(index + 1, name.length);

            index = ext.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = ext.substring(index + 1, ext.length);
                strip = strip === "strip";
                ext = ext.substring(0, index);
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var match = text.xdRegExp.exec(url),
                uProtocol, uHostName, uPort;
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName === hostname) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName + '.' + parsed.ext,
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                nonStripName = parsed.moduleName + '.' + parsed.ext,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + '.' +
                                     parsed.ext) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (typeof process !== "undefined" &&
             process.versions &&
             !!process.versions.node) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback) {
            var file = fs.readFileSync(url, 'utf8');
            //Remove BOM (Byte Mark Order) from utf8 files if it is there.
            if (file.indexOf('\uFEFF') === 0) {
                file = file.substring(1);
            }
            callback(file);
        };
    } else if (text.createXhr()) {
        text.get = function (url, callback, errback) {
            var xhr = text.createXhr();
            xhr.open('GET', url, true);

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        errback(err);
                    } else {
                        callback(xhr.responseText);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (typeof Packages !== 'undefined') {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                stringBuffer, line,
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                stringBuffer.append(line);

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    }

    return text;
});

/**@license
 * RequireJS Hogan Plugin | v0.2.1 (2013/02/08)
 * Author: Miller Medeiros | MIT License
 */
define('hgn',['hogan', 'text'], function (hogan, text) {

    var DEFAULT_EXTENSION = '.mustache';

    var _buildMap = {};
    var _buildTemplateText = 'define("{{pluginName}}!{{moduleName}}", ["hogan"], function(hogan){'+
                             '  var tmpl = new hogan.Template({{{fn}}}, "", hogan);'+
                             // need to use apply to bind the proper scope.
                             '  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;'+
                             '});\n';
    var _buildTemplate;


    function load(name, req, onLoad, config){
        var hgnConfig = config.hgn || {};
        var fileName = name;
        fileName += hgnConfig && hgnConfig.templateExtension != null? hgnConfig.templateExtension : DEFAULT_EXTENSION;

        // load text files with text plugin
        text.get(req.toUrl(fileName), function(data){
            var compilationOptions = hgnConfig.compilationOptions? mixIn({}, hgnConfig.compilationOptions) : {};

            if (config.isBuild) {
                // store compiled function if build
                // and should always be a string
                compilationOptions.asString = true;
                _buildMap[name] = hogan.compile(data, compilationOptions);
            }

            // maybe it's required by some other plugin during build
            // so return the compiled template even during build
            var template = hogan.compile(data, compilationOptions);
            var render = bind(template.render, template);
            // add text property for debugging if needed.
            // it's important to notice that this value won't be available
            // after build.
            render.text = template.text;
            render.template = template;
            // return just the render method so it's easier to use
            onLoad( render );
        });
    }

    function bind(fn, context) {
        return function(){
            return fn.apply(context, arguments);
        };
    }

    function mixIn(target, source) {
        var key;
        for (key in source){
            if ( Object.prototype.hasOwnProperty.call(source, key) ) {
                target[key] = source[key];
            }
        }
        return target;
    }

    function write(pluginName, moduleName, writeModule){
        if(moduleName in _buildMap){
            if (! _buildTemplate) {
                // using templates to generate compiled templates, so meta :P
                _buildTemplate = hogan.compile( _buildTemplateText );
            }
            var fn = _buildMap[moduleName];
            writeModule( _buildTemplate.render({
                pluginName : pluginName,
                moduleName : moduleName,
                fn : fn
            }) );
        }
    }

    return {
        load : load,
        write : write
    };

});

define("hgn!views/../../templates/shared/autocomplete_item", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"autocomplete-item\">");_.b("\n" + i);_.b("  <span class=\"name\">");_.b(_.t(_.f("name",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("  <span class=\"description\">");_.b(_.v(_.f("description",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/shared/search", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<form class=\"navbar-search \" method=\"get\" action=\"");_.b(_.v(_.d("config.baseUrl",c,p,0)));_.b("/search\">");_.b("\n" + i);_.b("  <input class=\"search-query\" type=\"text\" name=\"q\" placeholder=\"");_.b(_.v(_.d("i18n.shared.search.placeholder",c,p,0)));_.b("\" autocomplete=\"off\" />");_.b("\n" + i);_.b("  <button class=\"icon-search\" type=\"submit\" name=\"search\" title=\"");_.b(_.v(_.d("i18n.shared.search.button",c,p,0)));_.b("\"></button>");_.b("\n" + i);_.b("</form>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

/* =============================================================
 * bootstrap-typeahead.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

   // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.container = this.options.container || document.body
    this.width = $(this.container).width()
    this.$menu = $(this.options.menu).appendTo(document.body)
    this.source = this.options.source
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').data('value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.offset(), {
        height: this.$element[0].offsetHeight
      })
      //console.log( $(this.container).width() );
      this.$menu.css({
        top: pos.top + pos.height
      , left: pos.left
      , width: $(this.container).width() +"px"
      })

      this.$menu.show()
      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).data('value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      // items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      //if ($.browser.webkit || $.browser.msie) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      //}

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = !~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , blur: function (e) {
      var that = this
      setTimeout(function () { that.hide() }, 150)
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
    }

  , mouseenter: function (e) {
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /*   TYPEAHEAD DATA-API
  * ================== */

  $(function () {
    $('body').on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
      var $this = $(this)
      if ($this.data('typeahead')) return
      e.preventDefault()
      $this.typeahead($this.data())
    })
  })

}(window.jQuery);

define("bootstrap-typeahead", ["jquery"], function(){});

(function() {

  define('views/shared/search',['backbone', 'marionette', 'vent', 'hgn!../../../templates/shared/autocomplete_item', 'hgn!../../../templates/shared/search', 'bootstrap-typeahead'], function(Backbone, Marionette, vent, AutoCompleteItemTemplate, SearchTemplate) {
    
    return Marionette.ItemView.extend({
      events: {
        'click button[name="search"]': 'doSearch',
        'keyup input[name=q]': 'doSearch'
      },
      doSearch: function(evt) {
        if (evt) {
          evt.preventDefault();
        }
        return vent.trigger('post:search', this.ui.input.val());
      },
      onRender: function() {
        var autoCompleteUrl, model, that;
        autoCompleteUrl = this.model.get('config').capApiUrl + '/search/autocomplete';
        model = new Backbone.Model();
        that = this;
        return this.$('input.search-query').typeahead({
          source: function(query, process) {
            return model.fetch({
              xhrFields: {
                withCredentials: true
              },
              url: autoCompleteUrl,
              data: {
                q: query
              },
              success: function(model, status, xhr) {
                return process(model.get('data').autoCompleteItems);
              }
            });
          },
          matcher: function(item) {
            return item;
          },
          sorter: function(item) {
            return item;
          },
          updater: function(item) {
            if (item || !that.doSearch()) {
              return Backbone.history.navigate(item.url, {
                trigger: true
              });
            }
          },
          highlighter: function(item) {
            var query;
            query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
            item.name = item.name.replace(new RegExp('(' + query + ')', 'ig'), function($1, match) {
              return '<strong>' + match + '</strong>';
            });
            return AutoCompleteItemTemplate(item);
          },
          items: 10,
          minLength: 2,
          container: this.el,
          item: '<li><a data-menu></a></li>'
        });
      },
      template: SearchTemplate,
      ui: {
        input: 'input[name="q"]'
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/header", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"navbar-inner\">");_.b("\n" + i);_.b("  <div class=\"container\">");_.b("\n" + i);_.b("    <div class=\"row-fluid\">");_.b("\n" + i);_.b("      <span id=\"sidebarTrigger\">");_.b("\n" + i);_.b("        <a class=\"btn btn-navbar visible-phone pull-right\">");_.b("\n" + i);_.b("          <i class=\"icon-reorder\"></i>");_.b("\n" + i);_.b("        </a>");_.b("\n" + i);_.b("      </span>");_.b("\n" + i);_.b("\n" + i);_.b("      <a class=\"brand\" href=\"");_.b(_.v(_.d("config.baseUrl",c,p,0)));_.b("\">");_.b("\n" + i);_.b("        <span class=\"stanford-logo\" title=\"");_.b(_.v(_.d("i18n.header.labelStanfordSchoolOfMedicine",c,p,0)));_.b("\">");_.b(_.v(_.d("i18n.header.labelStanfordSchoolOfMedicine",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("        <span class=\"cap-network-logo\">");_.b(_.v(_.d("i18n.header.labelCAPNetworkProfiles",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("      </a>");_.b("\n" + i);_.b("      ");_.b("\n" + i);_.b("      <div class=\"nav-sidebar hidden-phone\">");_.b("\n" + i);_.b("        <div id=\"searchHeaderContent\">");_.b("\n" + i);_.b(_.rp("shared/search",c,p,"          "));_.b("        </div>");_.b("\n" + i);_.b("\n" + i);_.b("        <ul class=\"nav pull-right intranet-link use-link-icons\">");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"");_.b(_.v(_.d("config.baseUrl",c,p,0)));_.b("/browse\" class=\"browse-link \">Browse</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li class=\"divider-vertical\"></li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"#\" id=\"stanfordOnlyUrl\" rel=\"nofollow\">");_.b("\n" + i);_.b("              <i class=\"icon-som-grey\"></i>");_.b("\n" + i);_.b("              <span>");_.b(_.v(_.d("i18n.searchResults.stanfordOnly.label",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("              <i class=\"icon-arrow-right\"></i>");_.b("\n" + i);_.b("            </a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("        </ul>");_.b("\n" + i);_.b("      </div>      ");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");_.b("\n");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/header_minimal", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"navbar-inner\">");_.b("\n" + i);_.b("  <div class=\"container\">");_.b("\n" + i);_.b("    <div class=\"row-fluid\">");_.b("\n" + i);_.b("      <a class=\"brand\" href=\"");_.b(_.v(_.d("config.baseUrl",c,p,0)));_.b("\">");_.b("\n" + i);_.b("        <span class=\"stanford-logo\" title=\"");_.b(_.v(_.d("i18n.header.labelStanfordSchoolOfMedicine",c,p,0)));_.b("\">");_.b(_.v(_.d("i18n.header.labelStanfordSchoolOfMedicine",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("        <span class=\"cap-network-logo\">");_.b(_.v(_.d("i18n.header.labelCAPNetworkProfiles",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("      </a>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");_.b("\n");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/shared/stanford_only_tooltip", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");if(_.s(_.f("link",c,p,1),c,p,0,11,84,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<a href=\"");_.b(_.v(_.d(".",c,p,0)));_.b("\" class=\"sign-in-link\">");_.b(_.v(_.d("i18n.shared.labelSignIn",c,p,0)));_.b("</a> ");});c.pop();}_.b(_.v(_.f("description",c,p,0)));return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/header',['marionette', 'vent', 'views/shared/search', 'hgn!../../templates/header', 'hgn!../../templates/header_minimal', 'hgn!../../templates/shared/stanford_only_tooltip'], function(Marionette, vent, SearchView, HeaderTemplate, HeaderMinimalTemplate, StanfordOnlyTooltipTemplate) {
    
    return Marionette.Layout.extend({
      events: {
        'click #sidebarTrigger a': 'slideRight'
      },
      onBeforeClose: function() {
        this.$('a[data-toggle=tooltip]').popover('hide');
        vent.off('action:header:hideSearch');
        return vent.off('action:header:showSearch');
      },
      initialize: function() {
        var that;
        that = this;
        vent.on('action:header:hideSearch', function() {
          return that.search.close();
        });
        return vent.on('action:header:showSearch', function() {
          return that.search.show(new SearchView({
            model: that.model,
            isBannerSearch: true
          }));
        });
      },
      regions: {
        search: '#searchHeaderContent'
      },
      slideRight: function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        return vent.trigger('action:slideRight');
      },
      onRender: function() {
        var $link, i18n;
        i18n = this.model.get('i18n');
        this.parseStanfordOnlyUrl();
        this.search.show(new SearchView({
          model: this.model,
          isBannerSearch: true
        }));
        $link = this.$('a[data-toggle=tooltip]');
        return $link.popover({
          trigger: 'hover',
          placement: 'in bottom',
          content: function() {
            return StanfordOnlyTooltipTemplate({
              i18n: i18n,
              link: $link.attr('href'),
              description: i18n.shared.stanfordOnly.description
            });
          }
        });
      },
      template: function(data) {
        var pathname;
        pathname = Backbone.history.location.pathname;
        if (pathname.slice(-1) === '/' && (pathname.split('/').length - 1) <= 2) {
          return HeaderMinimalTemplate(data);
        } else {
          return HeaderTemplate(data);
        }
      },
      parseStanfordOnlyUrl: function() {
        var stanfordOnlyData;
        stanfordOnlyData = this.model.get('stanfordOnlyData');
        if (stanfordOnlyData !== null) {
          this.$('#stanfordOnlyUrl').attr('href', stanfordOnlyData.link.href).attr('class', stanfordOnlyData.link.className).attr('rel', stanfordOnlyData.link.rel);
          return this.$('#stanfordOnlyUrl span').html(stanfordOnlyData.i18n.searchResults.stanfordOnly.label);
        }
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/home/layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<section class=\"banner\">");_.b("\n" + i);_.b("  <div class=\"container\">");_.b("\n" + i);_.b("    <div class=\"masthead\">");_.b("\n" + i);_.b("      <h1>");_.b("\n" + i);_.b("        <span class=\"hidden-phone\">");_.b(_.v(_.d("i18n.home.search.label",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("        <span class=\"hidden-desktop hidden-tablet\">");_.b(_.v(_.d("i18n.home.search.labelPhone",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("        <span class=\"sr-only\">at ");_.b(_.v(_.d("i18n.header.labelStanfordSchoolOfMedicine",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("      </h1>");_.b("\n" + i);_.b("      <div id=\"searchContent\">");_.b("\n" + i);_.b(_.rp("shared/search",c,p,"        "));_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>  ");_.b("\n" + i);_.b("</section>");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("<!--");_.b("\n" + i);_.b("<h2>");_.b(_.v(_.d("i18n.home.information.searchAll.label",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("<p>");_.b(_.t(_.d("i18n.home.information.searchAll.content",c,p,0)));_.b("</p>");_.b("\n" + i);_.b("-->");_.b("\n" + i);_.b("\n" + i);_.b("<section class=\"information\">");_.b("\n" + i);_.b(_.rp("home/information/layout",c,p,"  "));_.b("</section>");_.b("\n" + i);_.b("\n" + i);_.b("<!--section class=\"overview\">");_.b("\n" + i);_.b("  <h3>Overview</h3>");_.b("\n" + i);_.b("  <figure>");_.b("\n" + i);_.b("    <img src=\"images/home-overview.png\" width=\"862\" height=\"427\" />");_.b("\n" + i);_.b("  </figure>");_.b("\n" + i);_.b("  <a class=\"pull-right goto-link\" href=\"#\">See new profiles <i class=\"icon-arrow-right\"></i></a>");_.b("\n" + i);_.b("</section-->");_.b("\n" + i);_.b("\n" + i);_.b("<section class=\"demographics\">");_.b("\n" + i);_.b("  <h3>Who's Using CAP?</h3>");_.b("\n" + i);_.b("  <figure class=\"loading\">Loading...</figure>");_.b("\n" + i);_.b("</section>");_.b("\n" + i);_.b("\n" + i);_.b("<section class=\"nobel-laureates\">");_.b("\n" + i);_.b(_.rp("home/nobel",c,p,"  "));_.b("</section>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/home/information/layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("  <nav class=\"navbar\">");_.b("\n" + i);_.b("    <div class=\"navbar-inner\">");_.b("\n" + i);_.b("      <div class=\"container\">");_.b("\n" + i);_.b("        <!-- .btn-navbar is used as the toggle for collapsed navbar content -->");_.b("\n" + i);_.b("        <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">");_.b("\n" + i);_.b("          <span class=\"nav-label\">Selected Tab Here</span>");_.b("\n" + i);_.b("          <span class=\"icon-chevron-down\"></span>");_.b("\n" + i);_.b("        </a>");_.b("\n" + i);_.b("\n" + i);_.b("        <!-- Everything you want hidden at 940px or less, place within here -->");_.b("\n" + i);_.b("        <div class=\"nav-collapse collapse\">");_.b("\n" + i);_.b("          <ul class=\"nav carousel-indicators \">");_.b("\n" + i);_.b("            <li data-target=\"#featuresCarousel\" data-slide-to=\"0\" class=\"active\"><a href=\"#\">Explore</a></li>");_.b("\n" + i);_.b("            <li data-target=\"#featuresCarousel\" data-slide-to=\"1\"><a href=\"#\">Faculty</a></li>");_.b("\n" + i);_.b("            <li data-target=\"#featuresCarousel\" data-slide-to=\"2\"><a href=\"#\">Postdocs</a></li>");_.b("\n" + i);_.b("            <li data-target=\"#featuresCarousel\" data-slide-to=\"3\"><a href=\"#\">Students</a></li>");_.b("\n" + i);_.b("            <li data-target=\"#featuresCarousel\" data-slide-to=\"4\"><a href=\"#\">Staff</a></li>");_.b("\n" + i);_.b("            <li data-target=\"#featuresCarousel\" data-slide-to=\"5\"><a href=\"#\">Departments</a></li>");_.b("\n" + i);_.b("          </ul>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </nav>");_.b("\n" + i);_.b("\n" + i);_.b("  <div id=\"featuresCarousel\" class=\"carousel slide\" data-interval=\"15000\">");_.b("\n" + i);_.b("\n" + i);_.b("    <!-- Carousel items -->");_.b("\n" + i);_.b("    <div class=\"carousel-inner\">");_.b("\n" + i);_.b("\n" + i);_.b("      <!-- Explore -->");_.b("\n" + i);_.b("      <section class=\"active item explore \">");_.b("\n" + i);_.b("        <h4 class=\"span8\">Explore CAP Network</h4>");_.b("\n" + i);_.b("        <div class=\"span6\">");_.b("\n" + i);_.b("          <aside class=\"color-bars \">");_.b("\n" + i);_.b("            <figure class=\"color-scheme-user bg-icon-user span2\">");_.b("\n" + i);_.b("              <a href=\"browse\" title=\"Browse Profiles\"><span class=\"label\">Profiles</span> ");_.b(_.v(_.d("information.overall.profiles",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-pub bg-icon-pub span3\">");_.b("\n" + i);_.b("              <a href=\"browse\" title=\"Browse Publications\"><span class=\"label\">Publications</span> ");_.b(_.v(_.d("information.overall.publications",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-org bg-icon-org org span2\">");_.b("\n" + i);_.b("              <a href=\"browse\" title=\"Browse Departments &amp; Divisions\"><span class=\"label\">Departments &amp;&nbsp;Divisions</span> ");_.b(_.v(_.d("information.overall.departmentsAndDivisions",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("              <a href=\"browse\" title=\"Browse Programs\"><span class=\"label\">Programs</span> ");_.b(_.v(_.d("information.overall.programs",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-search bg-icon-search span3\">");_.b("\n" + i);_.b("              <a href=\"browse\" title=\"Browse Profiles &amp; Topics Searched\"><span class=\"label\">Profiles &amp; Topics Searched</span> ");_.b(_.v(_.d("information.overall.profilesAndTopicsSearched",c,p,0)));_.b("*</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("          </aside>");_.b("\n" + i);_.b("\n" + i);_.b("          <!--aside id=\"trendingProfiles\" class=\"users everyone \">");_.b("\n" + i);_.b("            <h4>Trending Profiles</h4>");_.b("\n" + i);_.b("            <ul>");_.b("\n" + i);_.b("              <li><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("            </ul>");_.b("\n" + i);_.b("          </aside-->");_.b("\n" + i);_.b("\n" + i);_.b("          <aside class=\"alpha-chooser-wrap bg-icon-user \">");_.b("\n" + i);_.b("            <h4>Profiles A&nbsp;-&nbsp;Z</h4>");_.b("\n" + i);_.b("            <div class=\"alpha-chooser \"></div>");_.b("\n" + i);_.b("          </aside>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("\n" + i);_.b("        <aside class=\"intranet-blurb bg-icon-arrow-right span3\">");_.b("\n" + i);_.b("          <h4><i class=\"icon-som-shield\"></i> Stanford-only view</h4>");_.b("\n" + i);_.b("          <ul class=\"unstyled\">");_.b("\n" + i);_.b("            <li>Find Mentors</li>");_.b("\n" + i);_.b("            <li>Find Research Opportunities</li>");_.b("\n" + i);_.b("            <li>Connect with Colleagues</li>");_.b("\n" + i);_.b("            <li>Explore Clinical Trials</li>");_.b("\n" + i);_.b("            <li>More&hellip;</li>");_.b("\n" + i);_.b("          </ul>");_.b("\n" + i);_.b("          <a class=\"btn btn-large btn-block\" href=\"");_.b(_.v(_.d("config.capClassicSignInUrl",c,p,0)));_.b("\" data-bypass>login <i class=\"icon-arrow-right\"></i></a>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("      </section>");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("      <!-- Faculty -->");_.b("\n" + i);_.b("      <section class=\"item faculty \">");_.b("\n" + i);_.b("        <h4 class=\"span8\">Explore Faculty</h4>");_.b("\n" + i);_.b("        <div class=\"span10\">");_.b("\n" + i);_.b("          <aside class=\"color-bars \">");_.b("\n" + i);_.b("            <figure class=\"color-scheme-user bg-icon-user span2\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capFaculty\" title=\"Browse Profiles\"><span class=\"label\">Profiles</span> ");_.b(_.v(_.d("information.faculty.profiles",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-pub bg-icon-pub span3\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capFaculty\" title=\"Browse Publications\"><span class=\"label\">Publications</span> ");_.b(_.v(_.d("information.faculty.publications",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-user user-new bg-icon-user span2\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capFaculty\" title=\"Browse New Profiles\"><span class=\"label\">New Profiles</span> ");_.b(_.v(_.d("information.faculty.newProfiles",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-pub pub-new bg-icon-pub span3\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capFaculty\" title=\"Browse New Publications\"><span class=\"label\">New Publications</span> ");_.b(_.v(_.d("information.faculty.newPublications",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("          </aside>");_.b("\n" + i);_.b("\n" + i);_.b("          <!--aside id=\"trendingFacultyProfiles\" class=\"carousel-1 slide users \">");_.b("\n" + i);_.b("            <h4>Trending Faculty Profiles</h4>");_.b("\n" + i);_.b("            <ul class=\"carousel-inner\">");_.b("\n" + i);_.b("              <li class=\"active item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("            </ul>");_.b("\n" + i);_.b("          </aside-->");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("\n" + i);_.b("        <aside class=\"alpha-chooser-wrap bg-icon-user span6\">");_.b("\n" + i);_.b("          <h4>Profiles A&nbsp;-&nbsp;Z</h4>");_.b("\n" + i);_.b("          <div class=\"alpha-chooser \"></div>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("\n" + i);_.b("        <aside class=\"login bg-icon-arrow-right span3\">");_.b("\n" + i);_.b("          <a href=\"/profiles/auth/frdActionServlet?choiceId=showFacByName&amp;tab=fac\" title=\"Click to login to CAP\" data-bypass><i class=\"icon-som-shield\"></i>Stanford-only view <span>login <i class=\"icon-arrow-right\"></i></span></a>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("      </section>");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("      <!-- Postdocs -->");_.b("\n" + i);_.b("      <section class=\"item postdocs \">");_.b("\n" + i);_.b("        <h4 class=\"span8\">Explore Postdocs</h4>");_.b("\n" + i);_.b("        <div class=\"span10\">");_.b("\n" + i);_.b("          <aside class=\"color-bars \">");_.b("\n" + i);_.b("            <figure class=\"color-scheme-user bg-icon-user span2\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capPostdoc\" title=\"Browse Profiles\"><span class=\"label\">Profiles</span> ");_.b(_.v(_.d("information.postdocs.profiles",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-pub bg-icon-pub span3\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capPostdoc\" title=\"Browse Publications\"><span class=\"label\">Publications</span> ");_.b(_.v(_.d("information.postdocs.publications",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-user user-new bg-icon-user span2\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capPostdoc\" title=\"Browse New Profiles\"><span class=\"label\">New Profiles</span> ");_.b(_.v(_.d("information.postdocs.newProfiles",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-pub pub-new bg-icon-pub span3\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capPostdoc\" title=\"Browse New Publications\"><span class=\"label\">New Publications</span> ");_.b(_.v(_.d("information.postdocs.newPublications",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("          </aside>");_.b("\n" + i);_.b("\n" + i);_.b("          <!--aside id=\"trendingPostdocProfiles\" class=\"carousel-1 slide users \">");_.b("\n" + i);_.b("            <h4>Trending Postdoc Profiles</h4>");_.b("\n" + i);_.b("            <ul class=\"carousel-inner\">");_.b("\n" + i);_.b("              <li class=\"active item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("            </ul>");_.b("\n" + i);_.b("          </aside-->");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("\n" + i);_.b("        <aside class=\"alpha-chooser-wrap bg-icon-user span6\">");_.b("\n" + i);_.b("          <h4>Profiles A&nbsp;-&nbsp;Z</h4>");_.b("\n" + i);_.b("          <div class=\"alpha-chooser \"></div>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("\n" + i);_.b("        <aside class=\"login bg-icon-arrow-right span3\">");_.b("\n" + i);_.b("          <a href=\"/profiles/auth/frdActionServlet?choiceId=showFacByName&amp;tab=pdoc\" title=\"Click to login to CAP\" data-bypass><i class=\"icon-som-shield\"></i>Stanford-only view <span>login <i class=\"icon-arrow-right\"></i></span></a>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("      </section>");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("      <!-- Students -->");_.b("\n" + i);_.b("      <section class=\"item students \">");_.b("\n" + i);_.b("        <h4 class=\"span8\">Explore Students</h4>");_.b("\n" + i);_.b("        <div class=\"span10\">");_.b("\n" + i);_.b("          <aside class=\"color-bars \">");_.b("\n" + i);_.b("            <figure class=\"color-scheme-user bg-icon-user info-set user span5\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capMdStudent\" title=\"Browse Student Profiles\">");_.b(_.v(_.d("information.students.profiles.total",c,p,0)));_.b(" <span class=\"label\">Profiles</span></a>");_.b("\n" + i);_.b("              <a class=\"sum\" href=\"browse?affiliations=capMdStudent\" title=\"Browse New Students\">");_.b(_.v(_.d("information.students.profiles.new",c,p,0)));_.b(" <span class=\"label\">New</span></a>");_.b("\n" + i);_.b("              <a class=\"sum\" href=\"browse?affiliations=capMdStudent\" title=\"Browse Masters Students\">");_.b(_.v(_.d("information.students.profiles.masters",c,p,0)));_.b(" <span class=\"label\">Masters</span></a>");_.b("\n" + i);_.b("              <a class=\"sum\" href=\"browse?affiliations=capMdStudent\" title=\"Browse MD Students\">");_.b(_.v(_.d("information.students.profiles.md",c,p,0)));_.b(" <span class=\"label\">MD</span></a>");_.b("\n" + i);_.b("              <a class=\"sum\" href=\"browse?affiliations=capMdStudent\" title=\"Browse PhD Students\">");_.b(_.v(_.d("information.students.profiles.phd",c,p,0)));_.b(" <span class=\"label\">PhD</span></a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-pub bg-icon-pub info-set pub span5\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capMdStudent\" title=\"Browse Publications\">");_.b(_.v(_.d("information.students.publications.total",c,p,0)));_.b(" <span class=\"label\">Publications</span></a>");_.b("\n" + i);_.b("              <a class=\"sum\" href=\"browse?affiliations=capMdStudent\" title=\"Browse New Publications\">");_.b(_.v(_.d("information.students.publications.new",c,p,0)));_.b(" <span class=\"label\">New</span></a>");_.b("\n" + i);_.b("              <a class=\"sum\" href=\"browse?affiliations=capMdStudent\" title=\"Browse Masters Publications\">");_.b(_.v(_.d("information.students.publications.masters",c,p,0)));_.b(" <span class=\"label\">Masters</span></a>");_.b("\n" + i);_.b("              <a class=\"sum\" href=\"browse?affiliations=capMdStudent\" title=\"Browse MD Publications\">");_.b(_.v(_.d("information.students.publications.md",c,p,0)));_.b(" <span class=\"label\">MD</span></a>");_.b("\n" + i);_.b("              <a class=\"sum\" href=\"browse?affiliations=capMdStudent\" title=\"Browse PhD Publications\">");_.b(_.v(_.d("information.students.publications.phd",c,p,0)));_.b(" <span class=\"label\">PhD</span></a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("          </aside>");_.b("\n" + i);_.b("\n" + i);_.b("          <!--aside id=\"trendingStudentProfiles\" class=\"carousel-1 slide users  \">");_.b("\n" + i);_.b("            <h4>Trending Student Profiles</h4>");_.b("\n" + i);_.b("            <ul class=\"carousel-inner\">");_.b("\n" + i);_.b("              <li class=\"active item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("            </ul>");_.b("\n" + i);_.b("          </aside-->");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("\n" + i);_.b("        <aside class=\"alpha-chooser-wrap bg-icon-user span6\">");_.b("\n" + i);_.b("          <h4>Profiles A&nbsp;-&nbsp;Z</h4>");_.b("\n" + i);_.b("          <div class=\"alpha-chooser \"></div>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("\n" + i);_.b("        <aside class=\"login bg-icon-arrow-right span3\">");_.b("\n" + i);_.b("          <a href=\"/profiles/auth/frdActionServlet?choiceId=showFacByName&amp;tab=students\" title=\"Click to login to CAP\" data-bypass><i class=\"icon-som-shield\"></i>Stanford-only view <span>login <i class=\"icon-arrow-right\"></i></span></a>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("      </section>");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("      <!-- Staff -->");_.b("\n" + i);_.b("      <section class=\"item staff \">");_.b("\n" + i);_.b("        <h4 class=\"span8\">Explore Staff</h4>");_.b("\n" + i);_.b("        <div class=\"span10\">");_.b("\n" + i);_.b("          <aside class=\"color-bars \">");_.b("\n" + i);_.b("            <figure class=\"color-scheme-user bg-icon-user span2\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capStaff\" title=\"Browse Profiles\"><span class=\"label\">Profiles</span> ");_.b(_.v(_.d("information.staff.profiles",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-pub bg-icon-pub span3\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capStaff\" title=\"Browse Publications\"><span class=\"label\">Publications</span> ");_.b(_.v(_.d("information.staff.publications",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-user user-new bg-icon-user span2\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capStaff\" title=\"Browse New Profiles\"><span class=\"label\">New Profiles</span> ");_.b(_.v(_.d("information.staff.newProfiles",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("            <figure class=\"color-scheme-project bg-icon-project span3\">");_.b("\n" + i);_.b("              <a href=\"browse?affiliations=capStaff\" title=\"Browse Projects\"><span class=\"label\">Projects</span> ");_.b(_.v(_.d("information.staff.projects",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </figure>");_.b("\n" + i);_.b("          </aside>");_.b("\n" + i);_.b("\n" + i);_.b("          <!--aside id=\"trendingStaffProfiles\" class=\"carousel-1 slide users \">");_.b("\n" + i);_.b("            <h4>Trending Staff Profiles</h4>");_.b("\n" + i);_.b("            <ul class=\"carousel-inner\">");_.b("\n" + i);_.b("              <li class=\"active item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("              <li class=\"item-1\"><a href=\"#\"><img src=\"images/userprofile.jsp\" class=\"img-rounded\"></a></li>");_.b("\n" + i);_.b("            </ul>");_.b("\n" + i);_.b("          </aside-->");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("\n" + i);_.b("        <aside class=\"alpha-chooser-wrap bg-icon-user span6\">");_.b("\n" + i);_.b("          <h4>Profiles A&nbsp;-&nbsp;Z</h4>");_.b("\n" + i);_.b("          <div class=\"alpha-chooser \"></div>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("\n" + i);_.b("        <aside class=\"login bg-icon-arrow-right span3\">");_.b("\n" + i);_.b("          <a href=\"/profiles/auth/frdActionServlet?choiceId=showFacByName&amp;tab=staff\" title=\"Click to login to CAP\" data-bypass><i class=\"icon-som-shield\"></i>Stanford-only view <span>login <i class=\"icon-arrow-right\"></i></span></a>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("      </section>");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("      <!-- Departments -->");_.b("\n" + i);_.b("      <section class=\"item departments-programs \">");_.b("\n" + i);_.b("        <aside class=\"departments span6 \">");_.b("\n" + i);_.b("          <h4 class=\"bg-icon-org\">Departments &amp; Divisions</h4>");_.b("\n" + i);_.b("          <button type=\"button\" class=\"btn btn-expand-all\"><i class=\"icon-plus-sign-alt\"></i> Expand All</button>");_.b("\n" + i);_.b("          <div class=\"scroll\">");_.b("\n" + i);_.b("            <!--");_.b("\n" + i);if(_.s(_.d("departments.hasValues",c,p,1),c,p,0,16503,16546,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <ul class=\"tree\">");_.b("\n");});c.pop();}_.b("\n" + i);if(_.s(_.d("departments.values",c,p,1),c,p,0,16613,16679,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("home/information/dept_list_item",c,p,"              "));});c.pop();}_.b("\n" + i);if(_.s(_.d("departments.hasValues",c,p,1),c,p,0,16746,16777,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            </ul>");_.b("\n");});c.pop();}_.b("            -->");_.b("\n" + i);_.b("\n" + i);_.b("<ul class=\"tree\">");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/anesthesiology-perioperative-and-pain-medicine\">Anesthesiology, Perioperative and Pain Medicine</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/biochemistry\">Biochemistry</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/biochemistry/stanford-genome-technology-center\">Stanford Genome Technology Center</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/cardiothoracic-surgery\">Cardiothoracic Surgery</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/cardiothoracic-surgery/adult-cardiac-surgery\">Adult Cardiac Surgery</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/cardiothoracic-surgery/pediatric-cardiac-surgery\">Pediatric Cardiac Surgery</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/cardiothoracic-surgery/thoracic-surgery\">Thoracic Surgery</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/cardiovascular-institute\">Cardiovascular Institute</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/chemical-and-systems-biology\">Chemical and Systems Biology</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/child-health-research-institute\">Child Health Research Institute</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/comparative-medicine\">Comparative Medicine</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/deans-office\">Dean's Office</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/deans-office/academic-affairs\">Academic Affairs</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/deans-office/center-for-biomedical-ethics\">Center for Biomedical Ethics</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/deans-office/center-for-molecular-and-genetic-medicine\">Center for Molecular and Genetic Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/deans-office/communications-public-affairs\">Communications &amp; Public Affairs</a></li>");_.b("\n" + i);_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps\">Educational Programs and Services (EPS)</a>");_.b("\n" + i);_.b("        <input type=\"checkbox\" />");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/biomaterials-and-advanced-drug-delivery-bioadd-service-center\">Biomaterials and Advanced Drug Delivery (BioADD) Service Center</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/center-of-excellence-coe-of-diversity-in-medical-education\">Center of Excellence (COE) of Diversity in Medical Education</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/continuing-medical-education-cme\">Continuing Medical Education (CME)</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/graduate-student-support\">Graduate Student Support</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/immersive-simulation-learning\">Immersive &amp; Simulation Learning</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/lane-library-knowledge-management-center\">Lane Library &amp; Knowledge Management Center</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/medical-scholars-program\">Medical Scholars Program</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse/?org=school-of-medicine/deans-office/educational-programs-and-services-eps/medical-scientist-training-program-mstp\">Medical Scientist Training Program (MSTP)</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/office-of-community-health-och\">Office of Community Health (OCH)</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/office-of-medical-education-ome\">Office of Medical Education (OME)</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/office-of-postdoctoral-affairs-opa\">Office of Postdoctoral Affairs (OPA)</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/educational-programs-and-services-eps/operations\">Operations</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("        </ul>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      ");_.b("\n" + i);_.b("\n" + i);_.b("      ");_.b("\n" + i);_.b("      ");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"browse?org=school-of-medicine/deans-office/finance-administration\">Finance &amp; Administration</a>");_.b("\n" + i);_.b("        <input type=\"checkbox\" />");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/finance-administration/facilities-planning\">Facilities Planning</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/finance-administration/fiscal-affairs\">Fiscal Affairs</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/finance-administration/health-safety\">Health &amp; Safety</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/finance-administration/human-resources\">Human Resources</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/finance-administration/operations\">Operations</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li >");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/finance-administration/planning-budgeting\">Planning &amp; Budgeting</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/finance-administration/research-management-group\">Research Management Group</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("        </ul>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"browse?org=school-of-medicine/deans-office/information-resources-and-technology-irt\">Information Resources and Technology (IRT)</a>");_.b("\n" + i);_.b("        <input type=\"checkbox\" />");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);_.b("          <li><a href=\"browse?org=school-of-medicine/deans-office/information-resources-and-technology-irt/it-services\">IT Services</a></li>");_.b("\n" + i);_.b("        </ul>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/deans-office/institutional-planning\">Institutional Planning</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/deans-office/medical-center-development\">Medical Center Development</a></li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"browse?org=school-of-medicine/deans-office/multidisciplinary-research-program\">Multidisciplinary Research Program (MDRP)</a>");_.b("\n" + i);_.b("        <input type=\"checkbox\" />");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);_.b("          <li><a href=\"browse?org=school-of-medicine/deans-office/multidisciplinary-research-program/biodesign-program\">Biodesign Program</a></li>");_.b("\n" + i);_.b("        </ul>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"browse?org=school-of-medicine/deans-office/senior-associate-dean-for-research\">Senior Associate Dean for Research</a>");_.b("\n" + i);_.b("        <input type=\"checkbox\" />");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);_.b("          <li><a href=\"browse?org=school-of-medicine/deans-office/senior-associate-dean-for-research/clinical-translational-research-unit\">Clinical Translational Research Unit</a></li>");_.b("\n" + i);_.b("          <li class=\"\">");_.b("\n" + i);_.b("            <a href=\"browse?org=school-of-medicine/deans-office/senior-associate-dean-for-research/operations\">Operations</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li><a href=\"browse?org=school-of-medicine/deans-office/senior-associate-dean-for-research/spectrum\">SPECTRUM</a></li>");_.b("\n" + i);_.b("        </ul>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  ");_.b("\n" + i);_.b("  ");_.b("\n" + i);_.b("  ");_.b("\n" + i);_.b("  ");_.b("\n" + i);_.b("  ");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/dermatology\">Dermatology</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/developmental-biology\">Developmental Biology</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  ");_.b("\n" + i);_.b("  ");_.b("\n" + i);_.b("        ");_.b("\n" + i);_.b("      ");_.b("\n" + i);_.b(" <li><a href=\"browse?org=school-of-medicine/emergency-medicine\">Emergency Medicine</a></li>");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/genetics\">Genetics</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/health-research-and-policy\">Health Research &amp; Policy</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/health-research-and-policy/biostatistics\">Biostatistics</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/health-research-and-policy/epidemiology\">Epidemiology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/health-research-and-policy/health-services-research\">Health Services Research</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/institute-for-immunity-transplantaion-and-infection\">Institute for Immunity, Transplantaion and Infection</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"browse?org=school-of-medicine/institute-for-immunity-transplantation-and-infection/immunology-idp\">Immunology IDP</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("      <a href=\"browse?org=school-of-medicine/institute-for-stem-cell-biology-and-regenerative-medicine\">Institute for Stem Cell Biology and Regenerative Medicine</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/medicine\">Medicine</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/biomedical-informatics-research\">Biomedical Informatics Research</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/blood-marrow-transplantation\">Blood &amp; Marrow Transplantation</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/cardiovascular-medicine\">Cardiovascular Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/clinical-pharmacology\">Clinical Pharmacology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/endocrinology-gerontology-metabolism\">Endocrinology, Gerontology, &amp; Metabolism</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/family-community-medicine\">Family &amp; Community Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/gastroenterology-hepatology\">Gastroenterology &amp; Hepatology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/general-medical-disciplines\">General Medical Disciplines</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/hematology\">Hematology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/immunology-rheumatology\">Immunology &amp; Rheumatology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/infectious-diseases\">Infectious Diseases</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/med/hip/bewell\">Med/HIP/BeWell</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/med/schrwsd\">Med/SCHRW&amp;SD</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/nephrology\">Nephrology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/oncology\">Oncology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/primary-care-outcomes-research\">Primary Care Outcomes Research</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/pulmonary-critical-care-medicine\">Pulmonary &amp; Critical Care Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/stanford-prevention-research-center\">Stanford Prevention Research Center</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/vaden-health-center\">Vaden Health Center</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/medical-student-education\">Medical Student Education</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medical-student-education/immersive-simulation-lrng\">Immersive &amp; Simulation Lrng</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/medicine\">Medicine</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/biomedical-informatics-research\">Biomedical Informatics Research</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/blood-marrow-transplantation\">Blood &amp; Marrow Transplantation</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/cardiovascular-medicine\">Cardiovascular Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/clinical-pharmacology\">Clinical Pharmacology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/endocrinology-gerontology-metabolism\">Endocrinology, Gerontology, &amp; Metabolism</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/family-community-medicine\">Family &amp; Community Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/gastroenterology-hepatology\">Gastroenterology &amp; Hepatology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/general-medical-disciplines\">General Medical Disciplines</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/hematology\">Hematology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/immunology-rheumatology\">Immunology &amp; Rheumatology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/infectious-diseases\">Infectious Diseases</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/med/hip/bewell\">Med/HIP/BeWell</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/med/schrwsd\">Med/SCHRW&amp;SD</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/nephrology\">Nephrology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/oncology\">Oncology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/primary-care-outcomes-research\">Primary Care Outcomes Research</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/pulmonary-critical-care-medicine\">Pulmonary &amp; Critical Care Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/stanford-prevention-research-center\">Stanford Prevention Research Center</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/medicine/vaden-health-center\">Vaden Health Center</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/microbiology-immunology\">Microbiology &amp; Immunology</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/microbiology-immunology/baxter-laboratory\">Baxter Laboratory</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/molecular-cellular-physiology\">Molecular &amp; Cellular Physiology</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/neurobiology\">Neurobiology</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/neurology-neurological-sciences\">Neurology &amp; Neurological Sciences</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/neurosciences-institute\">Neurosciences Institute</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/neurosciences-institute/neurosciences-idp\">Neurosciences IDP</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/neurosurgery\">Neurosurgery</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/obstetrics-gynecology\">Obstetrics &amp; Gynecology</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/obstetrics-gynecology/general\">General</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/obstetrics-gynecology/gynecologic-oncology\">Gynecologic Oncology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/obstetrics-gynecology/maternal-fetal-medicine\">Maternal Fetal Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/obstetrics-gynecology/obstetrics-gynecology-institutes\">Obstetrics &amp; Gynecology - Institutes</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/obstetrics-gynecology/reproductive-biology\">Reproductive Biology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/obstetrics-gynecology/reproductive-endocrinology-infertility\">Reproductive Endocrinology &amp; Infertility</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/ophthalmology\">Ophthalmology</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/orthopaedic-surgery\">Orthopaedic Surgery</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/orthopaedic-surgery/orthopedics\">Orthopedics</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/orthopaedic-surgery/sports-medicine\">Sports Medicine</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/otolaryngology-head-and-neck-surgery\">Otolaryngology (Head and Neck Surgery)</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/pathology\">Pathology</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pathology/blood-center\">Blood Center</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pathology/pathology-stem-cell-institute\">Pathology Stem Cell Institute</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/pediatrics\">Pediatrics</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/adolescent-medicine\">Adolescent Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/cancer-Biology\">Cancer Biology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/cardiology\">Cardiology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/center-for-biomedical-ethics\">Center for Biomedical Ethics</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/critical-care\">Critical Care</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/endocrinology-diabetes\">Endocrinology and Diabetes</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/gastroenterology\">Gastroenterology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/general-pediatrics\">General Pediatrics</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/hematology-oncology\">Hematology &amp; Oncology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/human-gene-therapy\">Human Gene Therapy</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/immunology-allergy\">Immunology and Allergy</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/infectious-diseases\">Infectious Diseases</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/medical-genetics\">Medical Genetics</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/neonatal-developmental-medicine\">Neonatal and Developmental Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/nephrology\">Nephrology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/pulmonary-medicine\">Pulmonary Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/rheumatology\">Rheumatology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/stem-cell-transplantation\">Stem Cell Transplantation</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/systems-medicine\">Systems Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/pediatrics/wall-center-for-pulmonary-vascular-disease\">Wall Center for Pulmonary Vascular Disease</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences\">Psychiatry &amp; Behavioral Science</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/behavioral-medicine\">Behavioral Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/center-for-interdisciplinary-brain-sciences-research\">Center for Interdisciplinary Brain Sciences Research</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/child-and-adolescent-psychiatry\">Child and Adolescent Psychiatry</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/neurosciences\">Neurosciences</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/psychiatry/neuroscience/msls\">Psychiatry/Neuroscience/MSLS</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/psychopharmacology\">Psychopharmacology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/psychosocial\">Psychosocial</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/stanford-center-for-sleep-sciences-and-medicine\">Stanford Center for Sleep Sciences and Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/stanford/va-aging-clinical-research-center\">Stanford/VA Aging Clinical Research Center</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/stanford/va-alzheimers-clinical-research-center\">Stanford/VA Alzheimer's Clinical Research Center</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/psychiatry-and-behavioral-sciences/vaden-health-center\">Vaden Health Center</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/radiation-oncology\">Radiation Oncology</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/radiation-oncology/radiation-and-cancer-biology\">Radiation and Cancer Biology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/radiation-oncology/radiation-physics\">Radiation Physics</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/radiation-oncology/radiation-therapy\">Radiation Therapy</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/radiology\">Radiology</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/radiology/diagnostic-radiology\">Diagnostic Radiology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/radiology/lucas-center-mrsic\">Lucas Center (MRSIC)</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/radiology/nuclear-medicine\">Nuclear Medicine</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/radiology/pediatric-radiology\">Pediatric Radiology</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/school-of-medicine-centers\">School of Medicine</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/school-of-medicine-centers/stanford-center-for-clinical-informatics\">Stanford Center for Clinical Informatics</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/stanford-cancer-institute\">Stanford Cancer Institute</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/stanford-cancer-institute/cancer-biology\">Cancer Biology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/stanford-cancer-institute/cancer-biology-interdepartmental-program\">Cancer Biology Interdepartmental Program</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/stanford-cancer-institute/cancer-imaging-early-detection\">Cancer Imaging and Early Detection</a></li>");_.b("\n" + i);_.b("       <li><a href=\"browse?org=school-of-medicine/stanford-cancer-institute/cancer-stem-cells\">Cancer Stem Cells</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/stanford-cancer-institute/immunology-immunotherapy-of-cancer\">Immunology and Immunotherapy of Cancer</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/stanford-cancer-institute/lymphoma-leukemia\">Lymphoma and Leukemia</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/stanford-cancer-institute/population-sciences\">Population Sciences</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/stanford-cancer-institute/radiation-biology\">Radiation Biology</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/stanford-cancer-institute/transgenic-service-center\">Transgenic Service Center</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/stanford-cancer-institute/translational-oncology\">Translational Oncology</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li><a href=\"browse?org=independent-labs-institutes-and-centers-dean-of-research/stanford-chem-h\">Stanford ChEM-H</a></li>");_.b("\n" + i);_.b("  <li><a href=\"browse?org=school-of-medicine/cardiovascular-institute/cvi\">Cardiovascular Institute</a></li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=independent-labs-institutes-and-centers-dean-of-research/stanford-neurosciences-institute\">Stanford Neurosciences Institute</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/structural-biology\">Structural Biology</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/structural-biology/biophysics-idp\">Biophysics IDP</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/surgery\">Surgery</a>");_.b("\n" + i);_.b("    <input type=\"checkbox\" />");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/surgery/anatomy\">Anatomy</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/surgery/general-surgery\">General Surgery</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/surgery/multi-organ-transplantation\">Multi-Organ Transplantation</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/surgery/pediatric-surgery\">Pediatric Surgery</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/surgery/plastic-reconstructive-surgery\">Plastic &amp; Reconstructive Surgery</a></li>");_.b("\n" + i);_.b("      <li><a href=\"browse?org=school-of-medicine/surgery/vascular-surgery\">Vascular Surgery</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <a href=\"browse?org=school-of-medicine/urology\">Urology</a>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("</ul>");_.b("\n" + i);_.b("\n" + i);_.b("          </div>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("\n" + i);_.b("        <aside class=\"programs span3 \">");_.b("\n" + i);_.b("          <h4 class=\"bg-icon-org\">Programs</h4>");_.b("\n" + i);_.b("          <div class=\"scroll\">");_.b("\n" + i);_.b("\n" + i);_.b(" <ul>");_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <h5>Masters Programs</h5>");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=RBSA&amp;tab=ms\">Bioengineering</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VLHW&amp;tab=ms\">Biomedical Informatics</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VLHY&amp;tab=ms\">Epidemiology</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VLHT&amp;tab=ms\">Health Services Research</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VAAA&amp;tab=ms\">Masters of Medicine</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <h5>MD Scholarly Concentration</h5>");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <h6>Foundations</h6>");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=BENG&amp;tab=md\">Bioengineering</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=BEMH&amp;tab=md\">Biomedical Ethics &amp; Medical Humanities</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=CR&amp;tab=md\">Clinical Research</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=CH&amp;tab=md\">Community Health</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=HSPR&amp;tab=md\">Health Services &amp; Policy Research</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            Informatics &amp; Data-Driven Medicine");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=MBM&amp;tab=md\">Molecular Basis of Medicine</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("        </ul>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <h6>Applications</h6>");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            Cancer Biology");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=CVP&amp;tab=md\">Cardiovascular-Pulmonary Sciences</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=IH&amp;tab=md\">Global Health</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=IMM&amp;tab=md\">Immunology</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=NBC&amp;tab=md\">Neuroscience, Behavior, and Cognition</a>");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("          <li>");_.b("\n" + i);_.b("            Women's Health");_.b("\n" + i);_.b("          </li>");_.b("\n" + i);_.b("        </ul>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("\n" + i);_.b("  <li>");_.b("\n" + i);_.b("    <h5>Phd Programs</h5>");_.b("\n" + i);_.b("    <ul>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VVIC&amp;tab=phd\">Biochemistry</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=RBSA&amp;tab=phd\">Bioengineering</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=QAUF&amp;tab=phd\">Biology (School of Humanities and Sciences)</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VLHW&amp;tab=phd\">Biomedical Informatics</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VLHZ&amp;tab=phd\">Biophysics (IDP)</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VLEP&amp;tab=phd\">Cancer Biology Interdepartmental Program</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=XAEY&amp;tab=phd\">Chemical and Systems Biology</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VYYI&amp;tab=phd\">Developmental Biology</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=WAZC&amp;tab=phd\">Genetics</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VLEY&amp;tab=phd\">Immunology Interdepartmental Program</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=WYTG&amp;tab=phd\">Microbiology &amp; Immunology</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=WZPW&amp;tab=phd\">Molecular &amp; Cellular Physiology</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=VLFH&amp;tab=phd\">Neurosciences</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("      <li>");_.b("\n" + i);_.b("        <a href=\"frdActionServlet?choiceId=showFacByProgram&amp;program=XTQA&amp;tab=phd\">Structural Biology</a>");_.b("\n" + i);_.b("      </li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </li>");_.b("\n" + i);_.b("</ul>");_.b("\n" + i);_.b("          </div>");_.b("\n" + i);_.b("        </aside>");_.b("\n" + i);_.b("      </section>");_.b("\n" + i);_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("\n" + i);_.b("    <!-- Carousel nav -->");_.b("\n" + i);_.b("    <a class=\"carousel-control left\" href=\"#featuresCarousel\" data-slide=\"prev\">&lsaquo;</a>");_.b("\n" + i);_.b("    <a class=\"carousel-control right\" href=\"#featuresCarousel\" data-slide=\"next\">&rsaquo;</a>");_.b("\n" + i);_.b("  </div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('logger',['vent'], function(vent) {
    

    var mode;
    mode = 'development';
    vent.on('log:' + mode, function(msg) {
      if (console && console.log) {
        return console.log(msg);
      } else {
        return alert(msg);
      }
    });
    return {
      debug: function(msg) {
        return vent.trigger('log:development', msg);
      },
      error: function(msg) {
        return vent.trigger('log:development log:staging log:production', msg);
      },
      info: function(msg) {
        return vent.trigger('log:development log:staging', msg);
      }
    };
  });

}).call(this);

define("hgn!views/../../templates/shared/alphachooser", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("    <a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=a\">a</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=b\">b</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=c\">c</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=d\">d</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=e\">e</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=f\">f</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=g\">g</a>");_.b("\n" + i);_.b("    <a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=h\">h</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=i\">i</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=j\">j</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=k\">k</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=l\">l</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=m\">m</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=n\">n</a>");_.b("\n" + i);_.b("    <a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=o\">o</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=p\">p</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=q\">q</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=r\">r</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=s\">s</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=t\">t</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=u\">u</a>");_.b("\n" + i);_.b("    <a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=v\">v</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=w\">w</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=x\">x</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=y\">y</a><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=z\">z</a>");_.b("\n" + i);_.b("    <a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("=all\" class=\"all\">All <i class=\"icon-arrow-right\"></i></a>");_.b("\n" + i);_.b("    <!--");_.b("\n" + i);_.b("	<select class=\"alpha-chooser\">");_.b("\n" + i);_.b("		<option selected=\"selected\">View profiles with:</option>");_.b("\n" + i);_.b("		<option value=\"a\">a</option><option value=\"b\">b</option><option value=\"c\">c</option><option value=\"d\">d</option><option value=\"e\">e</option><option value=\"f\">f</option><option value=\"g\">g</option>");_.b("\n" + i);_.b("		<option value=\"h\">h</option><option value=\"i\">i</option><option value=\"j\">j</option><option value=\"k\">k</option><option value=\"l\">l</option><option value=\"m\">m</option><option value=\"n\">n</option>");_.b("\n" + i);_.b("		<option value=\"o\">o</option><option value=\"p\">p</option><option value=\"q\">q</option><option value=\"r\">r</option><option value=\"s\">s</option><option value=\"t\">t</option><option value=\"u\">u</option>");_.b("\n" + i);_.b("		<option value=\"v\">v</option><option value=\"w\">w</option><option value=\"x\">x</option><option value=\"y\">y</option><option value=\"z\">z</option>");_.b("\n" + i);_.b("		<option value=\"all\" >All <i class=\"icon-arrow-right\"></i></option>");_.b("\n" + i);_.b("	</select>");_.b("\n" + i);_.b("    -->");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/shared/alphachooser',['logger', 'marionette', 'hgn!../../../templates/shared/alphachooser', 'vent'], function(logger, Marionette, alphachooserTemplate, vent) {
    
    return Marionette.ItemView.extend({
      template: function(model) {
        if (model.baseUrl.indexOf('?') === -1) {
          model.baseUrl += '?';
        }
        if (model.baseUrl.indexOf('=') !== -1) {
          model.baseUrl += '&';
        }
        model.url = model.baseUrl + model.alphaVarName;
        return alphachooserTemplate(model);
      }
    });
  });

}).call(this);

(function() {

  define('utils',{
    uniqID: function(length) {
      var chars, id, x, _i;
      chars = '_0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
      if (!length) {
        length = Math.floor(Math.random() * charstoformid.length);
      }
      id = '';
      for (x = _i = 0; 0 <= length ? _i <= length : _i >= length; x = 0 <= length ? ++_i : --_i) {
        id += chars[Math.floor(Math.random() * chars.length)];
      }
      return id;
    },
    enhanceByUnwrappingExtraElement: function($target) {
      var children, classes, nodeName;
      nodeName = $target[0].nodeName;
      children = $target.children(nodeName);
      classes = children.attr('class');
      $target.addClass(classes);
      return children.children().unwrap();
    },
    enhanceWithCollapsibleNarrative: function($container, label, elementsToWrap, dataType) {
      var $actionIcon, $collapsibleEl, $collapsibleLink, dataTargetValue;
      $collapsibleEl = $('<div></div>').attr('data-collapsible', dataType).addClass('collapse indented-collapsible-section');
      $collapsibleEl.append(elementsToWrap);
      dataTargetValue = '[data-collapsible=' + dataType + ']';
      $collapsibleLink = $('<a data-bypass></a>').attr({
        'data-toggle': 'collapse',
        'data-target': dataTargetValue
      });
      $actionIcon = $('<i class="icon-caret-right"></i>');
      $collapsibleLink.append($actionIcon).append($('<span>' + label + '</span>'));
      $collapsibleEl.on('show', function(evt) {
        return $actionIcon.attr('class', 'icon-caret-down');
      });
      $collapsibleEl.on('hide', function(evt) {
        return $actionIcon.attr('class', 'icon-caret-right');
      });
      return $container.append($collapsibleLink, $collapsibleEl);
    },
    enhanceWithCollapsibleListing: function($container, label, dataType, i18n, length) {
      var $actionIcon, $collapsibleEl, $collapsibleLink, $collapsibleUl, allLabel, dataTargetValue;
      if (length > 9) {
        allLabel = i18n.collapsible.labelAll.replace('{0}', label).replace('{1}', length);
        $collapsibleUl = $('<ul></ul>').addClass($container.attr('class'));
        $collapsibleUl.append($container.children().slice(5));
        dataTargetValue = '[data-collapsible=' + dataType + ']';
        $collapsibleLink = $('<a data-bypass></a>').attr({
          'data-toggle': 'collapse',
          'data-target': dataTargetValue
        });
        $actionIcon = $('<i class="icon-caret-right"></i>');
        $collapsibleLink.append($actionIcon).append($('<span>' + allLabel + '</span>'));
        $collapsibleEl = $('<div></div>').attr('data-collapsible', dataType).addClass('collapse');
        $collapsibleEl.append($collapsibleUl);
        $collapsibleEl.on('show', function(evt) {
          return $actionIcon.attr('class', 'icon-caret-up');
        });
        $collapsibleEl.on('hide', function(evt) {
          return $actionIcon.attr('class', 'icon-caret-right');
        });
        return $container.after($collapsibleEl, $collapsibleLink);
      }
    },
    enhanceWithCollapsibleContentSection: function(linkElement, elementsToWrap, label, indented) {
      var $actionIcon, $collapsibleEl, $collapsibleLink, classes;
      classes = indented ? 'collapse indented-collapsible-section' : 'collapse';
      $collapsibleEl = $('<div></div>').attr('data-collapsible', label).addClass(classes);
      $collapsibleEl.append(elementsToWrap);
      $collapsibleLink = linkElement.attr({
        'data-toggle': 'collapse',
        'data-target': '[data-collapsible=' + label + ']'
      });
      $actionIcon = $('<i class="icon-caret-right"></i>');
      $collapsibleLink.prepend($actionIcon);
      $collapsibleEl.on('show', function(evt) {
        return $actionIcon.attr('class', 'icon-caret-down');
      });
      $collapsibleEl.on('hide', function(evt) {
        return $actionIcon.attr('class', 'icon-caret-right');
      });
      return $collapsibleLink.after($collapsibleEl);
    },
    clearBadPhotos: function() {
      return $('img[src=""]').each(function() {
        if ((!$(this).attr("data-src-replaced") || $(this).attr("data-src-replaced") === 0) && $(this).attr("data-empty-src")) {
          $(this).attr('data-src-replaced', '1');
          return $(this).attr('src', $(this).attr("data-empty-src"));
        }
      });
    },
    numberWithCommas: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    parseURL: function(url) {
      var a;
      a = document.createElement('a');
      a.href = url;
      return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function() {
          var el, i, ret, s, seg, _i, _len;
          ret = {};
          seg = a.search.replace(/^\?/, '').split('&');
          for (i = _i = 0, _len = seg.length; _i < _len; i = ++_i) {
            el = seg[i];
            if (seg[i]) {
              s = seg[i].split('=');
              ret[s[0]] = s[1];
            }
          }
          return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || ['', ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || ['', ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
      };
    },
    formatExternalLinks: function(context) {
      var appHost, that;
      that = this;
      appHost = this.parseURL(document.location.href).host;
      return context.$("a").each(function() {
        var host;
        host = that.parseURL($(this).attr('href')).host;
        if (host !== appHost && host.length > 0) {
          return $(this).attr('target', '_blank');
        }
      });
    }
  });

}).call(this);

/* ===================================================
 * bootstrap-transition.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  $(function () {

     // jshint ;_;


    /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
     * ======================================================= */

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);
define("bootstrap-transition", ["jquery"], function(){});

/* =============================================================
 * bootstrap-collapse.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

   // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSIBLE PLUGIN DEFINITION
  * ============================== */

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = typeof option == 'object' && option
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSIBLE DATA-API
  * ==================== */

  $(function () {
    $('body').on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
      var $this = $(this), href
        , target = $this.attr('data-target')
          || e.preventDefault()
          || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
        , option = $(target).data('collapse') ? 'toggle' : $this.data()
      $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
      $(target).collapse(option)
    })
  })

}(window.jQuery);
define("bootstrap-collapse", ["bootstrap-transition"], function(){});

/* ==========================================================
 * bootstrap-carousel.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

   // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.options = options
    this.options.slide && this.slide(this.options.slide)
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , to: function (pos) {
      var $active = this.$element.find('.item.active')
        , children = $active.parent().children()
        , activePos = children.index($active)
        , that = this

      if (pos > (children.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activePos == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activePos ? 'next' : 'prev', $(children[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle()
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e = $.Event('slide', {
            relatedTarget: $next[0]
          })

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      if ($next.hasClass('active')) return

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL DATA-API
  * ================= */

  $(function () {
    $('body').on('click.carousel.data-api', '[data-slide]', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , options = !$target.data('modal') && $.extend({}, $target.data(), $this.data())
      $target.carousel(options)
      e.preventDefault()
    })
  })

}(window.jQuery);
define("bootstrap-carousel", ["jquery"], function(){});

(function() {

  define('views/home/information/layout',['marionette', 'hgn!../../../../templates/home/information/layout', 'vent', 'views/shared/alphachooser', 'utils', 'bootstrap-collapse', 'bootstrap-carousel'], function(Marionette, informationLayoutTemplate, vent, AlphachooserView, utils) {
    
    return Marionette.Layout.extend({
      initialize: function() {
        return _.bindAll(this, 'render', 'updateMenuItem');
      },
      onRender: function() {
        var acModel, all, faculty, i18n, postdocs, staff, students;
        i18n = this.model.get('i18n');
        acModel = Backbone.Model.extend({
          defaults: {
            alphaVarName: 'name',
            baseUrl: '../browse',
            url: ''
          }
        });
        all = new acModel({
          baseUrl: 'browse'
        });
        faculty = new acModel({
          baseUrl: 'browse?affiliations=capFaculty'
        });
        postdocs = new acModel({
          baseUrl: 'browse?affiliations=capPostdoc'
        });
        students = new acModel({
          baseUrl: 'browse?affiliations=capMdStudent'
        });
        staff = new acModel({
          baseUrl: 'browse?affiliations=capStaff'
        });
        this.allAlphachooser.show(new AlphachooserView({
          model: all
        }));
        this.facultyAlphachooser.show(new AlphachooserView({
          model: faculty
        }));
        this.postdocsAlphachooser.show(new AlphachooserView({
          model: postdocs
        }));
        this.studentsAlphachooser.show(new AlphachooserView({
          model: students
        }));
        this.staffAlphachooser.show(new AlphachooserView({
          model: staff
        }));
        return this.updateSelectedMenuItemDropdown();
      },
      onShow: function() {
        var thi$;
        thi$ = this.$;
        this.$('#featuresCarousel').carousel({
          interval: 15000,
          pause: "hover"
        });
        this.$('#featuresCarousel').addClass("initialized");
        this.$('#featuresCarousel').click(function(e) {
          return $(this).carousel('pause');
        });
        this.$('.departments .btn-expand-all').click(function(e) {
          var checkBoxes;
          checkBoxes = $(e.target).parent().find("ul.tree input:checkbox");
          checkBoxes.attr("checked", !checkBoxes.attr("checked"));
          if ($(e.target).parents(".lt-ie9").length > 0) {
            checkBoxes.change();
          }
        });
        setTimeout(function() {
          $('.lt-ie9 ul.tree input:checkbox').each(function() {
            $(this).parent().addClass("input");
            $(this).parent().find("ul > li:last-child").addClass("last-child");
          });
          return $('.lt-ie9 ul.tree input:checkbox').bind("change", function(e) {
            $(e.target).parent().toggleClass('checked', $(e.target).attr("checked") === 'checked');
          });
        }, 1000);
        return utils.formatExternalLinks(this);
      },
      regions: {
        allAlphachooser: ".explore .alpha-chooser-wrap .alpha-chooser",
        facultyAlphachooser: ".faculty .alpha-chooser-wrap .alpha-chooser",
        postdocsAlphachooser: ".postdocs .alpha-chooser-wrap .alpha-chooser",
        studentsAlphachooser: ".students .alpha-chooser-wrap .alpha-chooser",
        staffAlphachooser: ".staff .alpha-chooser-wrap .alpha-chooser"
      },
      template: function(data) {
        return informationLayoutTemplate(data);
      },
      events: {
        "slid #featuresCarousel": 'updateMenuItem',
        "click .nav.carousel-indicators a": function(e) {
          var $target, index;
          e.preventDefault();
          e.stopImmediatePropagation();
          this.$('.carousel-indicators li').removeClass("active");
          this.$(e.target).parent().addClass("active");
          if (this.$(".navbar .nav-collapse").hasClass("in")) {
            this.$(".navbar .nav-collapse").collapse('hide');
          }
          index = this.$(e.target).parent().attr("data-slide-to");
          $target = this.$(this.$(e.target).parent().attr("data-target"));
          return $target.data('carousel').pause().to(index);
        },
        "click a.carousel-control": function(e) {
          e.preventDefault();
          e.stopPropagation();
          if ($(e.target).hasClass("right")) {
            return this.$('#featuresCarousel').carousel('next');
          } else {
            return this.$('#featuresCarousel').carousel('prev');
          }
        }
      },
      updateMenuItem: function(e) {
        var self;
        self = this;
        e.preventDefault();
        e.stopImmediatePropagation();
        this.$('.carousel-indicators li').removeClass("active");
        this.$('#featuresCarousel .carousel-inner > .item').each(function(index, item) {
          if (self.$(item).hasClass("active")) {
            return self.$('.carousel-indicators li[data-slide-to=' + index + ']').addClass("active");
          }
        });
        this.updateSelectedMenuItemDropdown();
        if (this.$(".navbar .nav-collapse").hasClass("in")) {
          return this.$(".navbar .nav-collapse").collapse('hide');
        }
      },
      updateSelectedMenuItemDropdown: function(e) {
        return this.$(".navbar .btn-navbar .nav-label").html(this.$('.carousel-indicators li.active a').text());
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/home/nobel", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("  <h3>Stanford Medicine's Nobel Laureates</h3>");_.b("\n" + i);_.b("  <figure>");_.b("\n" + i);_.b("      ");if(_.s(_.f("hasNobelLaureates",c,p,1),c,p,0,88,92,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<ul>");});c.pop();}_.b("\n" + i);_.b("\n" + i);if(_.s(_.f("nobelLaureates",c,p,1),c,p,0,145,637,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <li>");_.b("\n" + i);_.b("          <div class=\"mini-profile media\">");_.b("\n" + i);_.b("            <a href=\"");_.b(_.v(_.f("profileUrl",c,p,0)));_.b("\">");_.b("\n" + i);_.b("              <img class=\"pull-left\" src=\"");_.b(_.v(_.d("photos.square.url",c,p,0)));_.b("\" alt=\"");_.b(_.v(_.f("displayName",c,p,0)));_.b("\" />");_.b("\n" + i);_.b("            </a>");_.b("\n" + i);_.b("            <div class=\"media-body\">");_.b("\n" + i);_.b("              <a href=\"");_.b(_.v(_.f("profileUrl",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                <h4>");_.b(_.v(_.f("displayName",c,p,0)));_.b(" - <span class=\"award\">");_.b(_.v(_.f("awardName",c,p,0)));_.b("</span></h4>");_.b("\n" + i);_.b("                <h5>");_.b(_.v(_.f("shortTitle",c,p,0)));_.b("</h5>");_.b("\n" + i);_.b("              </a>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("          </div>");_.b("\n" + i);_.b("        </li>");_.b("\n");});c.pop();}_.b("\n" + i);_.b("      ");if(_.s(_.f("hasNobelLaureates",c,p,1),c,p,0,690,695,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("</ul>");});c.pop();}_.b("\n" + i);_.b("  </figure>");_.b("\n" + i);_.b("  <a class=\"pull-right goto-link\" href=\"browse\">See more major award winners <i class=\"icon-arrow-right\"></i></a>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/home/nobel',['marionette', 'hgn!../../../templates/home/nobel', 'vent'], function(Marionette, nobelTemplate, vent) {
    
    return Marionette.Layout.extend({
      onRender: function() {
        var i18n;
        return i18n = this.model.get('i18n');
      },
      onShow: function() {},
      template: function(data) {
        return nobelTemplate(data);
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/home/chart", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"chart faculty-staff-container\">");_.b("\n" + i);_.b("	<ul class=\"faculty-staff-numbers chart-values\">");_.b("\n" + i);if(_.s(_.d("demographics.chartdata.facStaff",c,p,1),c,p,0,131,202,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("			<li class=\"chart-value num-users\"><span>");_.b(_.v(_.f("numUsers",c,p,0)));_.b("</span></li>");_.b("\n");});c.pop();}_.b("	</ul>");_.b("\n" + i);_.b("	<ul class=\"faculty-staff-labels chart-labels\">");_.b("\n" + i);if(_.s(_.d("demographics.chartdata.facStaff",c,p,1),c,p,0,332,390,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("			<li class=\"chart-label\"><span>");_.b(_.v(_.f("group",c,p,0)));_.b("</span></li>");_.b("\n");});c.pop();}_.b("	</ul>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<div class=\"chart students-container\">");_.b("\n" + i);_.b("	<h4>Students <span class=\"students-total-num\">");_.b(_.v(_.d("demographics.chartdata.studentsTotal",c,p,0)));_.b("</span></h4>");_.b("\n" + i);_.b("	<ul class=\"students-numbers chart-values\">");_.b("\n" + i);if(_.s(_.d("demographics.chartdata.students",c,p,1),c,p,0,662,733,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("			<li class=\"chart-value num-users\"><span>");_.b(_.v(_.f("numUsers",c,p,0)));_.b("</span></li>");_.b("\n");});c.pop();}_.b("	</ul>");_.b("\n" + i);_.b("	<ul class=\"students-labels chart-labels\">");_.b("\n" + i);if(_.s(_.d("demographics.chartdata.students",c,p,1),c,p,0,858,916,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("			<li class=\"chart-label\"><span>");_.b(_.v(_.f("group",c,p,0)));_.b("</span></li>");_.b("\n");});c.pop();}_.b("	</ul>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/home/chart',['logger', 'marionette', 'utils', 'hgn!../../../templates/home/chart', 'vent'], function(logger, Marionette, utils, chartTemplate, vent) {
    
    return Marionette.ItemView.extend({
      onRender: function() {
        return this.adjustChart();
      },
      onShow: function() {
        return this.$el.closest('figure').removeClass('loading');
      },
      template: function(data) {
        return chartTemplate(data);
      },
      adjustChart: function() {
        var barMargin, barWidth, chartWidth, dataWidth, highestFacStaffValue, highestStudentValue, numBars, paddingWidth, parentWidth, that;
        that = this;
        highestFacStaffValue = 0;
        highestStudentValue = 0;
        parentWidth = 820;
        chartWidth = 390;
        paddingWidth = chartWidth * 0.15;
        dataWidth = chartWidth * 0.85;
        this.$el.find('.chart').width((chartWidth / parentWidth * 100) + '%');
        numBars = this.$el.find('ul.faculty-staff-numbers li').length;
        barWidth = dataWidth / numBars;
        barMargin = paddingWidth / numBars;
        this.$el.find('ul.faculty-staff-numbers li').each(function(index) {
          $(this).width((barWidth / chartWidth * 100) + '%');
          $(this).css('left', ((barWidth + barMargin) / chartWidth * 100 * index) + '%');
          if (highestFacStaffValue < parseInt($(this).text())) {
            highestFacStaffValue = parseInt($(this).text());
          }
          $(this).children('span').text(utils.numberWithCommas($(this).text()));
          return $(this).addClass('faculty-staff-col-' + (index + 1));
        });
        this.$el.find('ul.faculty-staff-labels li').each(function(index) {
          $(this).width(parseInt((barWidth + barMargin) / chartWidth * 100) + '%');
          return $(this).css('left', ((barWidth + barMargin) / chartWidth * 100 * index) + '%');
        });
        numBars = this.$el.find('ul.students-numbers li').length;
        barWidth = dataWidth / numBars;
        barMargin = paddingWidth / numBars;
        this.$el.find('ul.students-numbers li').each(function(index) {
          $(this).width((barWidth / chartWidth * 100) + '%');
          $(this).css('left', ((barWidth + barMargin) / chartWidth * 100 * index) + 2 + '%');
          if (highestStudentValue < parseInt($(this).text())) {
            highestStudentValue = parseInt($(this).text());
          }
          return $(this).children('span').text(utils.numberWithCommas($(this).text()));
        });
        this.$el.find('ul.students-labels li').each(function(index) {
          $(this).width(parseInt((barWidth + barMargin) / chartWidth * 100) + '%');
          return $(this).css('left', ((barWidth + barMargin) / chartWidth * 100 * index) + '%');
        });
        this.$el.find('.students-container h4 .students-total-num').text(utils.numberWithCommas(this.$el.find('.students-container h4 .students-total-num').text()));
        this.$el.find('.faculty-staff-numbers li.num-users').each(function() {
          var height;
          height = parseInt($(this).text().replace(',', '')) / highestFacStaffValue * 400;
          if (height < 25) {
            $(this).addClass("small");
          }
          return $(this).animate({
            height: height + 'px'
          }, 700);
        });
        return this.$el.find('.students-numbers li.num-users').each(function() {
          var height;
          height = parseInt($(this).text().replace(',', '')) / highestStudentValue * 350;
          if (height < 25) {
            $(this).addClass("small");
          }
          return $(this).animate({
            height: height + 'px'
          }, 700);
        });
      }
    });
  });

}).call(this);

(function() {

  define('views/home/layout',['marionette', 'vent', 'hgn!../../../templates/home/layout', 'views/shared/search', 'views/home/information/layout', 'views/home/nobel', 'views/home/chart', 'utils'], function(Marionette, vent, HomeLayoutTemplate, SearchView, InformationLayout, NobelLayout, ChartView, utils) {
    
    return Marionette.Layout.extend({
      onRender: function() {
        var i18n;
        i18n = this.model.get('i18n');
        this.search.show(new SearchView({
          model: this.model
        }));
        this.information.show(new InformationLayout({
          model: this.model
        }));
        this.demographics.show(new ChartView({
          model: this.model
        }));
        this.nobel.show(new NobelLayout({
          model: this.model
        }));
        vent.trigger('action:updatePageTitle', i18n.shared.page.title);
        vent.trigger('action:updateMetaDescription', i18n.header.metaDescription.home);
        vent.trigger('action:updatePageIdentifier', 'home');
        return vent.trigger('action:header:hideSearch');
      },
      onShow: function() {
        return utils.formatExternalLinks(this);
      },
      regions: {
        search: "#searchContent",
        information: ".information",
        demographics: ".demographics figure",
        nobel: ".nobel-laureates"
      },
      template: HomeLayoutTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/masthead", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"container\">");_.b("\n" + i);_.b("  <div class=\"row-fluid\">");_.b("\n" + i);_.b("    <div class=\"span12\">");_.b("\n" + i);_.b("      <div class=\"image-holder\">");_.b("\n" + i);_.b("        <img src=\"");_.b(_.v(_.d("data.profilePhotos.square.url",c,p,0)));_.b("\" alt=\"");_.b(_.v(_.d("data.displayName",c,p,0)));_.b("\" data-empty-src=\"");_.b(_.v(_.d("config.baseUrl",c,p,0)));_.b("/images/profile-large-blank.png\" />");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("      <div class=\"nameAndTitle\">");_.b("\n" + i);_.b("        <h1>");_.b(_.v(_.d("data.displayName",c,p,0)));_.b("</h1>");_.b("\n" + i);_.b("        <h2>");_.b(_.t(_.d("data.longTitle.label.html",c,p,0)));_.b("</h2>");_.b("\n" + i);if(_.s(_.d("ui.primaryOrganizationName",c,p,1),c,p,0,442,503,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("          <h3>");_.b(_.v(_.d("ui.primaryOrganizationName",c,p,0)));_.b("</h3>");_.b("\n");});c.pop();}_.b("      </div>");_.b("\n" + i);_.b("      <ul class=\"unstyled\">");_.b("\n" + i);if(_.s(_.d("ui.pdfUrl",c,p,1),c,p,0,602,877,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("          <li>");_.b("\n" + i);_.b("            <a href=\"");_.b(_.v(_.d("ui.pdfUrl",c,p,0)));_.b("\" target=\"_blank\" rel=\"nofollow\">");_.b("\n" + i);_.b("              <span class=\"icon-background\">");_.b("\n" + i);_.b("                <i class=\"icon-print\"></i>");_.b("\n" + i);_.b("              </span>");_.b(_.v(_.d("i18n.profile.masthead.labelPrint",c,p,0)));_.b("\n" + i);_.b("            </a>");_.b("\n" + i);_.b("          </li>");_.b("\n");});c.pop();}_.b("        <li>");_.b("\n" + i);_.b("          <a href=\"mailto:?subject=");_.b(_.v(_.d("ui.emailSubject",c,p,0)));_.b("&amp;body=");_.b(_.v(_.d("ui.emailBody",c,p,0)));_.b("\" rel=\"nofollow\" data-bypass>");_.b("\n" + i);_.b("            <span class=\"icon-background\">");_.b("\n" + i);_.b("              <i class=\"icon-envelope-alt\"></i>");_.b("\n" + i);_.b("            </span>");_.b(_.v(_.d("i18n.profile.masthead.labelEmail",c,p,0)));_.b("\n" + i);_.b("          </a>");_.b("\n" + i);_.b("        </li>");_.b("\n" + i);_.b("      </ul>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

/* ===========================================================
 * bootstrap-tooltip.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

   // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (this.options.trigger != 'manual') {
        eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .appendTo(inside ? this.$element : document.body)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .css(tp)
          .addClass(placement)
          .addClass('in');
        
        this.adjustHorizontallyForViewport($tip, tp, pos);
      }
    }
  , adjustHorizontallyForViewport: function($tip, tp, pos) {
	  var popoverLeft = $tip.offset().left,
	      popoverRightEdge = popoverLeft + $tip.width(),
	      windowWidth = $(window).width(),
	      $parent =  $tip.parent(),
	      parentRightEdge = $parent.offset().left + $parent.outerWidth(),
	      centerOffset = windowWidth - parentRightEdge;
	    
	  if (popoverRightEdge > windowWidth) {
	    var adjustment = (popoverRightEdge - windowWidth) + 10,
	       newPopoverLeft = tp.left - adjustment,
	       $arrow = $('.arrow', $tip),
	       popoverArrowLeft = ($tip.width() + 10) - (centerOffset + (pos.left + pos.width / 2));
	      
	    $tip.css('left', newPopoverLeft);
	    $arrow.css('left', popoverArrowLeft);
	 }
  }
  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).remove()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.remove()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.remove()

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function () {
      this[this.tip().hasClass('in') ? 'hide' : 'show']()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover'
  , title: ''
  , delay: 0
  , html: true
  }

}(window.jQuery);

define("bootstrap-tooltip", ["jquery"], function(){});

(function() {

  define('views/profile/masthead',['marionette', 'utils', 'hgn!../../../templates/profile/masthead', 'hgn!../../../templates/shared/stanford_only_tooltip', 'bootstrap-tooltip'], function(Marionette, utils, MastheadTemplate, StanfordOnlyTooltipTemplate) {
    
    return Marionette.ItemView.extend({
      template: MastheadTemplate,
      onBeforeClose: function() {
        return this.$('a[data-toggle=tooltip]').popover('hide');
      },
      onRender: function() {
        var i18n, ui;
        ui = this.model.get('ui');
        i18n = this.model.get('i18n');
        utils.clearBadPhotos();
        return this.$('a[data-toggle=tooltip]').popover({
          trigger: 'hover',
          placement: 'in bottom',
          content: function() {
            return StanfordOnlyTooltipTemplate({
              i18n: i18n,
              description: i18n.profile.masthead.stanfordOnly.description
            });
          }
        });
      }
    });
  });

}).call(this);

(function() {

  define('models/list_item',['backbone'], function(Backbone) {
    
    return Backbone.Model.extend();
  });

}).call(this);

(function() {

  define('collections/list_items',['backbone', 'models/list_item'], function(Backbone, ListItem) {
    
    return Backbone.Collection.extend({
      model: ListItem
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/bio/contact_info_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerContactInfo",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"unstyled section-listing use-link-icons\">");_.b("\n" + i);if(_.s(_.d("data.primaryContact",c,p,1),c,p,0,137,712,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li>");_.b("\n" + i);_.b("      <div class=\"contact-info primary\">");_.b("\n" + i);if(_.s(_.f("label",c,p,1),c,p,0,208,254,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("          <label>");_.b(_.v(_.f("label",c,p,0)));_.b("</label>");_.b("\n");});c.pop();}_.b("        <a href=\"mailto:");_.b(_.v(_.f("email",c,p,0)));_.b("\" class=\"email\" rel=\"nofollow\" data-bypass>");_.b(_.v(_.f("email",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("        <ul class=\"unstyled phone-number\">");_.b("\n" + i);if(_.s(_.f("phoneNumbers",c,p,1),c,p,0,433,527,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li><span>");_.b(_.v(_.d("i18n.profile.bio.contacts.labelTel",c,p,0)));_.b(" ");_.b(_.v(_.d(".",c,p,0)));_.b("</span></li>");_.b("\n");});c.pop();}_.b("        </ul>");_.b("\n" + i);if(_.s(_.f("fax",c,p,1),c,p,0,579,674,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("          <span class=\"fax\">");_.b(_.v(_.d("i18n.profile.bio.contacts.labelFax",c,p,0)));_.b(" ");_.b(_.v(_.f("fax",c,p,0)));_.b("</span>");_.b("\n");});c.pop();}_.b("      </div>  ");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}if(_.s(_.d("data.alternateContact",c,p,1),c,p,0,769,1392,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li>");_.b("\n" + i);_.b("      <div class=\"contact-info alternate\">");_.b("\n" + i);_.b("        <label>");_.b(_.v(_.f("label",c,p,0)));_.b("</label>");_.b("\n" + i);_.b("        <span class=\"name\">");_.b(_.v(_.f("name",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("        <span class=\"title\">");_.b(_.v(_.f("title",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("        <a href=\"mailto:");_.b(_.v(_.f("email",c,p,0)));_.b("\" class=\"email\" rel=\"nofollow\" data-bypass>");_.b(_.v(_.f("email",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("        <ul class=\"unstyled phone-number\">");_.b("\n" + i);if(_.s(_.f("phoneNumbers",c,p,1),c,p,0,1115,1209,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li><span>");_.b(_.v(_.d("i18n.profile.bio.contacts.labelTel",c,p,0)));_.b(" ");_.b(_.v(_.d(".",c,p,0)));_.b("</span></li>");_.b("\n");});c.pop();}_.b("        </ul>");_.b("\n" + i);if(_.s(_.f("fax",c,p,1),c,p,0,1261,1356,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("          <span class=\"fax\">");_.b(_.v(_.d("i18n.profile.bio.contacts.labelFax",c,p,0)));_.b(" ");_.b(_.v(_.f("fax",c,p,0)));_.b("</span>");_.b("\n");});c.pop();}_.b("      </div>");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}if(_.s(_.d("data.clinicalContacts",c,p,1),c,p,0,1451,2153,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li>");_.b("\n" + i);_.b("      <div class=\"contact-info clinical\">");_.b("\n" + i);_.b("        <label>");_.b(_.v(_.d("i18n.profile.bio.contacts.labelClincal",c,p,0)));_.b("</label>");_.b("\n" + i);_.b("        <span class=\"office-name\">");_.b(_.v(_.f("officeName",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("        <span class=\"address\">");_.b(_.v(_.f("address",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("        <span class=\"address2\">");_.b(_.v(_.f("address2",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("        <span class=\"location\">");_.b(_.v(_.f("city",c,p,0)));_.b(", ");_.b(_.v(_.f("state",c,p,0)));_.b(_.v(_.f("zip",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("        <ul class=\"unstyled phone-number\">");_.b("\n" + i);if(_.s(_.f("phoneNumbers",c,p,1),c,p,0,1876,1970,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li><span>");_.b(_.v(_.d("i18n.profile.bio.contacts.labelTel",c,p,0)));_.b(" ");_.b(_.v(_.d(".",c,p,0)));_.b("</span></li>");_.b("\n");});c.pop();}_.b("        </ul>");_.b("\n" + i);if(_.s(_.f("fax",c,p,1),c,p,0,2022,2117,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("          <span class=\"fax\">");_.b(_.v(_.d("i18n.profile.bio.contacts.labelFax",c,p,0)));_.b(" ");_.b(_.v(_.f("fax",c,p,0)));_.b("</span>");_.b("\n");});c.pop();}_.b("      </div>");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/bio/contact_info_section',['marionette', 'hgn!../../../../templates/profile/bio/contact_info_section'], function(Marionette, ContactInfoTemplate) {
    
    return Marionette.ItemView.extend({
      applyBadge: function($target, icon) {
        var $container;
        $container = $target.wrap('<div></div>').parent();
        return $container.prepend($('<span class="icon-background"><i class="' + icon + '"></i></span>'));
      },
      onRender: function() {
        this.applyBadge(this.$('.contact-info.primary, .contact-info.alternate'), 'icon-user');
        return this.applyBadge(this.$('.contact-info.clinical'), 'icon-stethoscope');
      },
      template: ContactInfoTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/bio/clinical_focus_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerClinicalFocus",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.clinicalFocus",c,p,1),c,p,0,114,151,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li><span>");_.b(_.v(_.d(".",c,p,0)));_.b("</span></li>");_.b("\n");});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/bio/clinical_focus_section',['i18n', 'marionette', 'hgn!../../../../templates/profile/bio/clinical_focus_section'], function(i18n, Marionette, ClinicalFocusTemplate) {
    
    return Marionette.ItemView.extend({
      onRender: function() {
        var $actionIcon, $collapsibleLink, $collapsibleUl, $container, MINIMUM_DISPLAY, THRESHOLD, allLabel, dataTargetValue, label, listItemLength, listType;
        THRESHOLD = this.options.threshold || 9;
        MINIMUM_DISPLAY = this.options.maxDisplay || 5;
        label = i18n.profile.bio.headerClinicalFocus;
        listType = 'clinical-focus';
        $container = this.$('ul.section-listing');
        listItemLength = $container.children().length;
        if (listItemLength > THRESHOLD && label && listType) {
          allLabel = i18n.collapsible.labelAll.replace('{0}', label).replace('{1}', listItemLength);
          $collapsibleUl = $('<ul></ul>').addClass($container.attr('class'));
          $collapsibleUl.append($container.children().slice(MINIMUM_DISPLAY));
          dataTargetValue = '[data-collapsible=' + listType + ']';
          $collapsibleLink = $('<a data-bypass></a>').attr({
            'data-toggle': 'collapse',
            'data-target': dataTargetValue
          });
          $actionIcon = $('<i class="icon-caret-right"></i>');
          $collapsibleLink.append($actionIcon).append(allLabel);
          this.$collapsibleEl = $('<div></div>').attr('data-collapsible', listType).addClass('collapse');
          this.$collapsibleEl.append($collapsibleUl);
          this.$collapsibleEl.on('show.collaspibleList', function(evt) {
            return $actionIcon.attr('class', 'icon-caret-up');
          });
          this.$collapsibleEl.on('hide.collaspibleList', function(evt) {
            return $actionIcon.attr('class', 'icon-caret-right');
          });
          return $container.after(this.$collapsibleEl, $collapsibleLink);
        }
      },
      template: ClinicalFocusTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/shared/external_link_item", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<li class=\"external-link\"><a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("\" class=\"");_.b(_.v(_.f("type",c,p,0)));_.b("\" target=\"_blank\" data-bypass>");_.b(_.t(_.d("label.text",c,p,0)));_.b("</a></li>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/shared/external_link_list_item',['lodash', 'marionette', 'utils', 'hgn!../../../../templates/profile/shared/external_link_item'], function(_, Marionette, utils, ExternalLinkItemTemplate) {
    
    return Marionette.ItemView.extend({
      onRender: function() {
        return utils.enhanceByUnwrappingExtraElement(this.$el);
      },
      tagName: 'li',
      template: ExternalLinkItemTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/bio/links_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerLinks",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"unstyled section-listing use-link-icons\">");_.b("\n" + i);if(_.s(_.d("data.documents",c,p,1),c,p,0,126,472,"{{ }}")){_.rs(c,p,function(c,p,_){if(_.s(_.d("data.documents.cv",c,p,1),c,p,0,155,207,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/external_link_item",c,p,"      "));});c.pop();}if(_.s(_.d("data.documents.nihBiosketch",c,p,1),c,p,0,270,322,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/external_link_item",c,p,"      "));});c.pop();}if(_.s(_.d("data.documents.resume",c,p,1),c,p,0,389,441,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/external_link_item",c,p,"      "));});c.pop();}});c.pop();}if(_.s(_.d("data.internetLinks",c,p,1),c,p,0,521,569,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/external_link_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/bio/links_section',['marionette', 'views/profile/shared/external_link_list_item', 'hgn!../../../../templates/profile/bio/links_section'], function(Marionette, ExternalLinkListItemView, LinksTemplate) {
    
    return Marionette.CompositeView.extend({
      appendHtml: function(collectionView, itemView, index) {
        var container, item, itemData, url;
        container = collectionView.$(collectionView.itemViewContainer);
        itemData = itemView.model;
        item = $(itemView.el);
        if (itemData.get('contentType')) {
          item.prepend($('<span class="icon-background"><i class="icon-download-alt"></i></span>'));
        } else {
          url = itemData.get('url');
          if (_.contains(url, 'twitter.com')) {
            item.prepend($('<span class="icon-background twitter"><i class="icon-twitter"></i></span>'));
          } else if (_.contains(url, 'linkedin.com')) {
            item.prepend($('<span class="icon-background linkedin"><i class="icon-linkedin"></i></span>'));
          } else {
            item.prepend($('<span class="icon-background"><i class="icon-link"></i></span>'));
          }
        }
        return container.append(item);
      },
      itemView: ExternalLinkListItemView,
      itemViewContainer: 'ul',
      template: LinksTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/shared/section_list_item", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<li class=\"section-list-item\">");_.b("\n" + i);_.b("  <div class=\"description\">");_.b(_.t(_.d("label.html",c,p,0)));_.b("</div>");_.b("\n" + i);if(_.s(_.f("detail",c,p,1),c,p,0,98,144,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <div class=\"detail\">");_.b(_.t(_.f("html",c,p,0)));_.b("</div>");_.b("\n");});c.pop();}_.b("</li>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/shared/section_list_item',['lodash', 'i18n', 'marionette', 'utils', 'hgn!../../../../templates/profile/shared/section_list_item', 'bootstrap-collapse'], function(_, i18n, Marionette, utils, SectionListItemTemplate) {
    
    return Marionette.ItemView.extend({
      onRender: function() {
        var $detail, $link, href;
        utils.enhanceByUnwrappingExtraElement(this.$el);
        $link = this.$('a');
        href = $link.attr('href');
        if (href && !_.contains(href.toLowerCase(), 'stanford.edu')) {
          $link.attr('target', '_blank');
        }
        $detail = this.$('.detail');
        if ($detail.size() > 0) {
          return utils.enhanceWithCollapsibleContentSection(this.$('div.description'), [this.$('.detail')], 'detail' + this.model.cid);
        } else {
          return this.$('div.description').parent().addClass('bulleted');
        }
      },
      tagName: 'li',
      template: SectionListItemTemplate
    });
  });

}).call(this);

(function() {

  define('views/profile/shared/section_listing',['i18n', 'marionette', 'views/profile/shared/section_list_item', 'utils'], function(i18n, Marionette, SectionListItemView, utils) {
    
    return Marionette.CompositeView.extend({
      itemView: SectionListItemView,
      itemViewContainer: 'ul.section-listing',
      onRender: function() {
        var MINIMUM_DISPLAY, THRESHOLD, label, listType;
        THRESHOLD = this.options.threshold || 9;
        MINIMUM_DISPLAY = this.options.maxDisplay || 5;
        label = this.options.sectionHeader;
        return listType = this.options.sectionListType;
      },
      onBeforeClose: function() {
        if (this.$collapsibleEl) {
          return this.$collapsibleEl.off('.collaspibleList');
        }
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/shared/collaborator_list", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h4>");_.b(_.v(_.d("i18n.profile.shared.labelLeadSponsor",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("<ul class=\"section-listing lead-sponsor\">");_.b("\n" + i);_.b("  <li><span>");_.b(_.v(_.d("sponsors.leadSponsor.agency",c,p,0)));_.b("</span></li>");_.b("\n" + i);_.b("</ul>");_.b("\n" + i);if(_.s(_.f("hasCollaborators",c,p,1),c,p,0,181,398,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  <h4>");_.b(_.v(_.d("i18n.profile.shared.labelCollaborators",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("  <ul class=\"section-listing collaborators\">");_.b("\n" + i);if(_.s(_.d("sponsors.collaborator",c,p,1),c,p,0,315,361,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <li><span>");_.b(_.v(_.f("agency",c,p,0)));_.b("</span></li>");_.b("\n");});c.pop();}_.b("  </ul>");_.b("\n");});c.pop();}return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/shared/section_collaborator_listing',['lodash', 'marionette', 'utils', 'hgn!../../../../templates/profile/shared/collaborator_list'], function(_, Marionette, utils, CollaboratorListTemplate) {
    
    return Marionette.ItemView.extend({
      onRender: function() {
        return utils.enhanceByUnwrappingExtraElement(this.$el);
      },
      template: function(data) {
        var hasCollaborators;
        hasCollaborators = data.sponsors.collaborator && data.sponsors.collaborator.length > 0;
        return CollaboratorListTemplate(_.extend({}, data, {
          hasCollaborators: hasCollaborators
        }));
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/shared/investigator_list", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h4>");_.b(_.v(_.d("i18n.profile.shared.labelInvestigators",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("ui.similarProfiles",c,p,1),c,p,0,110,175,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li><a href=\"");_.b(_.v(_.f("profileUrl",c,p,0)));_.b("\">");_.b(_.v(_.f("displayName",c,p,0)));_.b("</a></li>");_.b("\n");});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/shared/section_investigator_listing',['marionette', 'utils', 'hgn!../../../../templates/profile/shared/investigator_list'], function(Marionette, utils, InvestigatorListTemplate) {
    
    return Marionette.ItemView.extend({
      onRender: function() {
        return utils.enhanceByUnwrappingExtraElement(this.$el);
      },
      template: InvestigatorListTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/shared/clinical_trial_list_item", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<li class=\"clinical-trial\">");_.b("\n" + i);_.b("  <span class=\"title\">");_.b(_.v(_.f("studyTitle",c,p,0)));_.b("</span>");_.b("\n" + i);if(_.s(_.f("recruiting",c,p,1),c,p,0,93,185,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <strong class=\"recruiting-status\">");_.b(_.v(_.d("i18n.profile.shared.labelRecruiting",c,p,0)));_.b("</strong>");_.b("\n");});c.pop();}if(!_.s(_.f("recruiting",c,p,1),c,p,1,0,0,"")){_.b("    <strong class=\"recruiting-status\">");_.b(_.v(_.d("i18n.profile.shared.labelNotRecruiting",c,p,0)));_.b("</strong>");_.b("\n");};_.b("  <div class=\"more-info detail\">");_.b("\n" + i);_.b("    <p>");_.b(_.v(_.f("briefSummary",c,p,0)));_.b("</p>");_.b("\n" + i);if(!_.s(_.f("recruiting",c,p,1),c,p,1,0,0,"")){_.b("      <p>");_.b("\n" + i);_.b("        <strong>");_.b(_.v(_.d("i18n.profile.shared.clinicalTrials.notRecruiting",c,p,0)));_.b("</strong>");_.b("\n" + i);if(_.s(_.f("hasContactInfo",c,p,1),c,p,0,539,675,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("          <span>");_.b(_.v(_.d("i18n.profile.shared.clinicalTrials.moreInformation",c,p,0)));_.b(" ");_.b(_.v(_.f("contactName",c,p,0)));_.b(", ");_.b(_.v(_.f("formattedContactPhoneNumber",c,p,0)));_.b(".");_.b("\n");});c.pop();}_.b("      </p>");_.b("\n");};_.b("    <div class=\"collaborators\"></div>");_.b("\n" + i);_.b("    <div class=\"investigators\"></div>");_.b("\n" + i);_.b("    <p style=\"margin-top: 1em;\">");_.b("\n" + i);_.b("      <a href=\"");_.b(_.v(_.f("clinicalTrialUrl",c,p,0)));_.b("\" target=\"_blank\"><i class=\"icon-external-link\"></i> ");_.b(_.v(_.d("i18n.profile.shared.labelViewFullDetails",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("    </p>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</li>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/shared/clinical_trial_list_item',['lodash', 'backbone', 'collections/list_items', 'i18n', 'marionette', 'views/profile/shared/section_collaborator_listing', 'views/profile/shared/section_investigator_listing', 'utils', 'hgn!../../../../templates/profile/shared/clinical_trial_list_item', 'hgn!../../../../templates/profile/shared/investigator_list'], function(_, Backbone, ListItems, i18n, Marionette, CollaboratorListingView, InvestigatorListingView, utils, ClinicalTrialListItemTemplate, InvestigatorListTemplate) {
    var clinicalStudy, profiles;
    clinicalStudy = new Backbone.Model();
    profiles = new Backbone.Model();
    

    return Marionette.Layout.extend({
      initialize: function() {
        return this.missingFullDetail = true;
      },
      onRender: function() {
        var id, that;
        utils.enhanceByUnwrappingExtraElement(this.$el);
        id = this.model.get('id');
        utils.enhanceWithCollapsibleNarrative(this.$el, i18n.profile.shared.labelMore, this.$('.more-info'), 'clinical-trial' + id);
        that = this;
        return this.$('.indented-collapsible-section').on('show', function(evt) {
          if (that.missingFullDetail) {
            clinicalStudy.fetch({
              xhrFields: {
                withCredentials: true
              },
              url: that.model.get('trialsApiUrl'),
              success: function() {
                var collaborators;
                collaborators = clinicalStudy.get('sponsors').collaborator;
                return that.collaborators.show(new CollaboratorListingView({
                  model: clinicalStudy
                }));
              }
            });
            profiles.fetch({
              xhrFields: {
                withCredentials: true
              },
              url: that.model.get('investigatorApiUrl'),
              success: function() {
                var profileItems;
                profileItems = profiles.get('ui').similarProfiles;
                if (profileItems.length > 0) {
                  return that.investigators.show(new InvestigatorListingView({
                    model: profiles
                  }));
                }
              }
            });
            that.missingFullDetail = false;
            return $(this).collapse('show');
          }
        });
      },
      regions: {
        collaborators: '.collaborators',
        investigators: '.investigators'
      },
      tagName: 'li',
      template: function(data) {
        return ClinicalTrialListItemTemplate(_.extend({}, data, {
          i18n: i18n
        }));
      }
    });
  });

}).call(this);

(function() {

  define('views/profile/shared/section_clinical_trials_listing',['views/profile/shared/section_listing', 'views/profile/shared/clinical_trial_list_item'], function(SectionListingView, ClinicalTrialListItemView) {
    
    return SectionListingView.extend({
      itemView: ClinicalTrialListItemView
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/bio/academic_appointments_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("ui.headerAcademicAppointments",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.titles",c,p,1),c,p,0,100,147,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/administrative_appointments_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerAdministrativeAppointments",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.administrativeAppointments",c,p,1),c,p,0,140,187,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/bio_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerBio",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<p>");_.b(_.t(_.d("data.bio.html",c,p,0)));_.b("</p>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/clinical_care_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerClinicalCare",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<p>");_.b(_.t(_.d("data.clinicalCare.html",c,p,0)));_.b("</p>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/clerkships_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerClerkships",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.clerkships",c,p,1),c,p,0,108,155,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/clinical_trials_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerClinicalTrials",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("ui.clinicalTrialResults.trials",c,p,1),c,p,0,127,181,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/clinical_trial_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/community_and_international_work_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerCommunityAndInternationalWork",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"unstyled section-listing\">");_.b("\n" + i);if(_.s(_.d("data.communityAndInternationalWork",c,p,1),c,p,0,155,202,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/current_role_at_stanford_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerCurrentRoleAtStanford",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<p>");_.b(_.t(_.d("data.currentRoleAtStanford",c,p,0)));_.b("</p>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/honors_and_awards_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerHonorsAndAwards",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.honorsAndAwards",c,p,1),c,p,0,118,165,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/membership_organizations_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerMembershipOrganizations",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.membershipOrganizations",c,p,1),c,p,0,134,181,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/patents_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerPatents",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.patents",c,p,1),c,p,0,102,149,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/personal_interests_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerPersonalInterests",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<p>");_.b(_.t(_.d("data.personalInterests.html",c,p,0)));_.b("</p>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/professional_education_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("ui.headerProfessionalEducation",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.education",c,p,1),c,p,0,104,151,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/professional_organizations_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("ui.headerProfessionalOrganizations",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.professionalOrganizations",c,p,1),c,p,0,124,171,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/projects_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerProjects",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"unstyled section-listing\">");_.b("\n" + i);if(_.s(_.d("data.projects",c,p,1),c,p,0,113,160,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/service_work_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerServiceWork",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"unstyled section-listing\">");_.b("\n" + i);if(_.s(_.d("data.serviceWork",c,p,1),c,p,0,119,166,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/stanford_advisors_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerStanfordAdvisors",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.stanfordAdvisors",c,p,1),c,p,0,120,167,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/supervisors_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.bio.headerSupervisors",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.supervisors",c,p,1),c,p,0,110,157,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/bio/layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h2>");_.b(_.v(_.d("i18n.profile.bio.label",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"row-fluid\">");_.b("\n" + i);_.b("  <div class=\"span8 page-content\">");_.b("\n" + i);if(_.s(_.d("ui.showBio",c,p,1),c,p,0,119,228,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"bioContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/bio_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b(" ");_.b("\n" + i);if(_.s(_.d("ui.showClinicalCare",c,p,1),c,p,0,279,407,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"clinicalCareContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/clinical_care_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("       ");_.b("\n" + i);if(_.s(_.d("ui.showCurrentRoleAtStanford",c,p,1),c,p,0,481,629,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"currentRoleAtStanfordContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/current_role_at_stanford_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showClinicalFocus",c,p,1),c,p,0,701,831,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"clinicalFocusContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/clinical_focus_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showAcademicAppointments",c,p,1),c,p,0,902,1046,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"academicAppointmentsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/academic_appointments_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showAdministrativeAppointments",c,p,1),c,p,0,1130,1286,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"administrativeAppointmentsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/administrative_appointments_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showSupervisors",c,p,1),c,p,0,1361,1490,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"supervisorsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/supervisors_section",c,p,"        "));_.b("      </div>    ");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showHonorsAndAwards",c,p,1),c,p,0,1554,1689,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"honorsAndAwardsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/honors_and_awards_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showProfessionalOrganizationsOnBio",c,p,1),c,p,0,1772,1926,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"professionalOrganizationsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/professional_organizations_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showMembershipOrganizations",c,p,1),c,p,0,2017,2167,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"membershipOrganizationsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/membership_organizations_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showProfessionalEducation",c,p,1),c,p,0,2249,2395,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"professionalEducationContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/professional_education_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showClerkships",c,p,1),c,p,0,2464,2587,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"clerkshipsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/clerkships_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showStanfordAdvisors",c,p,1),c,p,0,2651,2787,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"stanfordAdvisorsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/stanford_advisors_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showProjectsOnBio",c,p,1),c,p,0,2854,2973,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"projectsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/projects_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showClinicalTrialsOnBio",c,p,1),c,p,0,3043,3175,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"clinicalTrialsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/clinical_trials_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showCommunityAndInternationalWork",c,p,1),c,p,0,3261,3425,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"communityAndInternationalWorkContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/community_and_international_work_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showServiceWork",c,p,1),c,p,0,3503,3629,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"serviceWorkContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/service_work_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showPatents",c,p,1),c,p,0,3685,3802,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"patentsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/patents_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showPersonalInterests",c,p,1),c,p,0,3864,4002,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"personalInterestsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/bio/personal_interests_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("  </div>");_.b("\n" + i);_.b("  <div class=\"span4 side-bar\">");_.b("\n" + i);if(_.s(_.d("ui.showContactInfo",c,p,1),c,p,0,4103,4255,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"contactInfoContent\" class=\"content-section contact-info bg-icon-user\">");_.b("\n" + i);_.b(_.rp("profile/bio/contact_info_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showLinks",c,p,1),c,p,0,4309,4441,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"linksContent\" class=\"content-section links bg-icon-link\">");_.b("\n" + i);_.b(_.rp("profile/bio/links_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/bio/layout',['lodash', 'backbone', 'marionette', 'collections/list_items', 'views/profile/bio/contact_info_section', 'views/profile/bio/clinical_focus_section', 'views/profile/bio/links_section', 'views/profile/shared/section_listing', 'views/profile/shared/section_clinical_trials_listing', 'hgn!../../../../templates/profile/bio/academic_appointments_section', 'hgn!../../../../templates/profile/bio/administrative_appointments_section', 'hgn!../../../../templates/profile/bio/bio_section', 'hgn!../../../../templates/profile/bio/clinical_care_section', 'hgn!../../../../templates/profile/bio/clerkships_section', 'hgn!../../../../templates/profile/bio/clinical_trials_section', 'hgn!../../../../templates/profile/bio/community_and_international_work_section', 'hgn!../../../../templates/profile/bio/current_role_at_stanford_section', 'hgn!../../../../templates/profile/bio/honors_and_awards_section', 'hgn!../../../../templates/profile/bio/membership_organizations_section', 'hgn!../../../../templates/profile/bio/patents_section', 'hgn!../../../../templates/profile/bio/personal_interests_section', 'hgn!../../../../templates/profile/bio/professional_education_section', 'hgn!../../../../templates/profile/bio/professional_organizations_section', 'hgn!../../../../templates/profile/bio/projects_section', 'hgn!../../../../templates/profile/bio/service_work_section', 'hgn!../../../../templates/profile/bio/stanford_advisors_section', 'hgn!../../../../templates/profile/bio/supervisors_section', 'hgn!../../../../templates/profile/bio/layout', 'utils'], function(_, Backbone, Marionette, ListItems, ContactInfoView, ClinicalFocusView, LinksView, SectionListingView, SectionClinicalTrialsListingView, AcademicAppointmentsTemplate, AdministrativeAppointmentsTemplate, BioTemplate, ClinicalCareTemplate, ClerkshipsTemplate, ClinicalTrialsTemplate, CommunityAndInternationalWorkTemplate, CurrentRoleAtStanfordTemplate, HonorsAndAwardsTemplate, MembershipOrganizationsTemplate, PatentsTemplate, PersonalInterestsTemplate, ProfessionalEducationTemplate, ProfessionalOrganizationsTemplate, ProjectsTemplate, ServiceWorkTemplate, StanfordAdvisorsTemplate, SupervisorsTemplate, LayoutTemplate, utils) {
    
    return Marionette.Layout.extend({
      onRender: function() {
        var data, i18n, links, ui;
        data = this.model.get('data');
        ui = this.model.get('ui');
        i18n = this.model.get('i18n');
        if (ui.showAcademicAppointments) {
          this.academicAppointments.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.titles),
            sectionHeader: i18n.profile.bio.headerAcademicAppointments,
            sectionListType: 'academic-appointments',
            template: AcademicAppointmentsTemplate
          }));
        }
        if (ui.showAdministrativeAppointments) {
          this.administrativeAppointments.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.administrativeAppointments),
            sectionHeader: i18n.profile.bio.headerAdministrativeAppointments,
            sectionListType: 'administrative-appointments',
            template: AdministrativeAppointmentsTemplate
          }));
        }
        if (ui.showBio) {
          this.bio.show(new Marionette.ItemView({
            model: this.model,
            template: BioTemplate
          }));
        }
        if (ui.showClinicalCare) {
          this.clinicalCare.show(new Marionette.ItemView({
            model: this.model,
            template: ClinicalCareTemplate
          }));
        }
        if (ui.showClerkships) {
          this.clerkships.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.clerkships),
            sectionHeader: i18n.profile.bio.headerClerkships,
            sectionListType: 'clerkships',
            template: ClerkshipsTemplate
          }));
        }
        if (ui.showClinicalFocus) {
          this.clinicalFocus.show(new ClinicalFocusView({
            model: this.model
          }));
        }
        if (ui.showClinicalTrialsOnBio) {
          this.clinicalTrials.show(new SectionClinicalTrialsListingView({
            model: this.model,
            collection: new ListItems(ui.clinicalTrialResults.trials),
            sectionHeader: i18n.profile.bio.headerClinicalTrials,
            sectionListType: 'clinical-trials',
            template: ClinicalTrialsTemplate
          }));
        }
        if (ui.showCommunityAndInternationalWork) {
          this.communityAndInternationalWork.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.communityAndInternationalWork),
            sectionHeader: i18n.profile.bio.headerCommunityAndInternationalWork,
            sectionListType: 'community-and-international-work',
            template: CommunityAndInternationalWorkTemplate
          }));
        }
        if (ui.showContactInfo) {
          this.contactInfo.show(new ContactInfoView({
            model: this.model
          }));
        }
        if (ui.showCurrentRoleAtStanford) {
          this.currentRoleAtStanford.show(new Marionette.ItemView({
            model: this.model,
            template: CurrentRoleAtStanfordTemplate
          }));
        }
        if (ui.showHonorsAndAwards) {
          this.honorsAndAwards.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.honorsAndAwards),
            sectionHeader: i18n.profile.bio.headerHonorsAndAwards,
            sectionListType: 'honors-and-awards',
            template: HonorsAndAwardsTemplate
          }));
        }
        if (ui.showLinks) {
          links = [];
          if (data.documents) {
            if (data.documents.cv) {
              links.push(data.documents.cv);
            }
            if (data.documents.nihBiosketch) {
              links.push(data.documents.nihBiosketch);
            }
            if (data.documents.resume) {
              links.push(data.documents.resume);
            }
          }
          if (data.internetLinks) {
            links = _.union(links, data.internetLinks);
          }
          this.links.show(new LinksView({
            model: this.model,
            collection: new ListItems(links)
          }));
        }
        if (ui.showMembershipOrganizations) {
          this.membershipOrganizations.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.membershipOrganizations),
            sectionHeader: i18n.profile.bio.headerMembershipOrganizations,
            sectionListType: 'membership-organizations',
            template: MembershipOrganizationsTemplate
          }));
        }
        if (ui.showPatents) {
          this.patents.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.patents),
            sectionHeader: i18n.profile.bio.headerPatents,
            sectionListType: 'patents',
            template: PatentsTemplate
          }));
        }
        if (ui.showPersonalInterests) {
          this.personalInterests.show(new Marionette.ItemView({
            model: this.model,
            template: PersonalInterestsTemplate
          }));
        }
        if (ui.showProfessionalEducation) {
          this.professionalEducation.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.education),
            sectionHeader: i18n.profile.bio.headerProfessionalEducation,
            sectionListType: 'professional-education',
            template: ProfessionalEducationTemplate
          }));
        }
        if (ui.showProfessionalOrganizationsOnBio) {
          this.professionalOrganizations.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.professionalOrganizations),
            sectionHeader: ui.headerProfessionalOrganizations,
            sectionListType: 'professional-organizations',
            template: ProfessionalOrganizationsTemplate
          }));
        }
        if (ui.showProjectsOnBio) {
          this.projects.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.projects),
            sectionHeader: i18n.profile.bio.headerProjects,
            sectionListType: 'projects-on-bio',
            template: ProjectsTemplate
          }));
        }
        if (ui.showServiceWork) {
          this.serviceWork.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.serviceWork),
            sectionHeader: i18n.profile.bio.headerServiceWork,
            sectionListType: 'service-work',
            template: ServiceWorkTemplate
          }));
        }
        if (ui.showStanfordAdvisors) {
          this.stanfordAdvisors.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.stanfordAdvisors),
            sectionHeader: i18n.profile.bio.headerStanfordAdvisors,
            sectionListType: 'stanford-advisors',
            template: StanfordAdvisorsTemplate
          }));
        }
        if (ui.showSupervisors) {
          return this.supervisors.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.supervisors),
            sectionHeader: i18n.profile.bio.headerSupervisors,
            sectionListType: 'supervisors',
            template: SupervisorsTemplate
          }));
        }
      },
      onShow: function() {
        return utils.formatExternalLinks(this);
      },
      regions: {
        academicAppointments: '#academicAppointmentsContent',
        administrativeAppointments: '#administrativeAppointmentsContent',
        bio: '#bioContent',
        bioScienceProgramAffiliations: '#bioScienceProgramAffiliationsContent',
        clerkships: '#clerkshipsContent',
        clinicalCare: '#clinicalCareContent',
        clinicalFocus: '#clinicalFocusContent',
        clinicalTrials: '#clinicalTrialsContent',
        communityAndInternationalWork: '#communityAndInternationalWorkContent',
        contactInfo: '#contactInfoContent',
        currentRoleAtStanford: '#currentRoleAtStanfordContent',
        honorsAndAwards: '#honorsAndAwardsContent',
        links: '#linksContent',
        membershipOrganizations: '#membershipOrganizationsContent',
        patents: '#patentsContent',
        personalInterests: '#personalInterestsContent',
        professionalEducation: '#professionalEducationContent',
        professionalOrganizations: '#professionalOrganizationsContent',
        projects: '#projectsContent',
        serviceWork: '#serviceWorkContent',
        stanfordAdvisors: '#stanfordAdvisorsContent',
        supervisors: '#supervisorsContent'
      },
      template: LayoutTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/professional/layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h2>");_.b(_.v(_.d("i18n.profile.professional.label",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"row-fluid\">");_.b("\n" + i);_.b("  <div class=\"span8 page-content\">");_.b("\n" + i);if(_.s(_.d("ui.showProfessionalInterests",c,p,1),c,p,0,146,301,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"professionalInterestsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/professional/professional_interests_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showWorkExperience",c,p,1),c,p,0,374,515,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"workExperienceContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/professional/work_experience_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showProfessionalAffiliationsAndActivities",c,p,1),c,p,0,604,793,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"professionalAffiliationsAndActivitiesContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/professional/professional_affiliations_and_activities_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/professional/professional_interests_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.professional.headerProfessionalInterests",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<p>");_.b(_.t(_.d("data.professionalInterests.html",c,p,0)));_.b("</p>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/professional/professional_affiliations_and_activities_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("ui.headerProfessionalOrganizations",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.professionalOrganizations",c,p,1),c,p,0,124,171,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/professional/work_experience_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.professional.headerWorkExperience",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"unstyled section-listing\">");_.b("\n" + i);if(_.s(_.d("data.workExperience",c,p,1),c,p,0,134,181,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/professional/layout',['collections/list_items', 'marionette', 'utils', 'views/profile/shared/section_listing', 'hgn!../../../../templates/profile/professional/layout', 'hgn!../../../../templates/profile/professional/professional_interests_section', 'hgn!../../../../templates/profile/professional/professional_affiliations_and_activities_section', 'hgn!../../../../templates/profile/professional/work_experience_section'], function(ListItems, Marionette, utils, SectionListingView, LayoutTemplate, ProfessionalInterestsTemplate, ProfessionalAffiliationsAndActivitiesTemplate, WorkExperienceTemplate) {
    
    return Marionette.Layout.extend({
      onRender: function() {
        var data, i18n, ui;
        data = this.model.get('data');
        i18n = this.model.get('i18n');
        ui = this.model.get('ui');
        if (ui.showProfessionalAffiliationsAndActivities) {
          this.professionalAffiliationsAndActivities.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.professionalOrganizations),
            sectionHeader: ui.headerProfessionalOrganizations,
            sectionListType: 'professional-affiliations-and-activities',
            template: ProfessionalAffiliationsAndActivitiesTemplate
          }));
        }
        if (ui.showProfessionalInterests) {
          this.professionalInterests.show(new Marionette.ItemView({
            model: this.model,
            template: ProfessionalInterestsTemplate
          }));
        }
        if (ui.showWorkExperience) {
          return this.workExperience.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.workExperience),
            sectionHeader: i18n.profile.professional.headerWorkExperience,
            sectionListType: 'work-experience',
            template: WorkExperienceTemplate
          }));
        }
      },
      onShow: function() {
        return utils.formatExternalLinks(this);
      },
      regions: {
        professionalAffiliationsAndActivities: '#professionalAffiliationsAndActivitiesContent',
        professionalInterests: '#professionalInterestsContent',
        workExperience: '#workExperienceContent'
      },
      template: LayoutTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/publications/navigator_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.publications.label",c,p,0)));_.b(" (");_.b(_.v(_.d("ui.publicationSummary.all.count",c,p,0)));_.b(")</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"unstyled section-listing use-link-icons\">");_.b("\n" + i);if(_.s(_.d("ui.publicationSummary.all",c,p,1),c,p,0,180,415,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li class=\"all\">");_.b("\n" + i);_.b("      <div class=\"icon-background\"><i class=\"icon-align-justify\"></i></div>");_.b("\n" + i);_.b("      <a data-target='all'>");_.b(_.v(_.d("i18n.profile.publications.headerAllPublications",c,p,0)));_.b(" (");_.b(_.v(_.d("ui.publicationSummary.all.count",c,p,0)));_.b(")</a>");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.publicationSummary.featured",c,p,1),c,p,0,487,735,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li class=\"featured\">");_.b("\n" + i);_.b("      <span class=\"icon-background\"><i class=\"icon-star\"></i></span>");_.b("\n" + i);_.b("      <a data-target='featured'>");_.b(_.v(_.d("i18n.profile.publications.headerFeaturedPublications",c,p,0)));_.b(" (");_.b(_.v(_.d("ui.publicationSummary.featured.count",c,p,0)));_.b(")</a>");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.publicationSummary.articles",c,p,1),c,p,0,812,1055,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li class=\"articles\">");_.b("\n" + i);_.b("      <span class=\"icon-background\"><i class=\"icon-file\"></i></span>");_.b("\n" + i);_.b("      <a data-target='articles'>");_.b(_.v(_.d("i18n.profile.publications.headerJournalArticles",c,p,0)));_.b(" (");_.b(_.v(_.d("ui.publicationSummary.articles.count",c,p,0)));_.b(")</a>");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.publicationSummary.books",c,p,1),c,p,0,1129,1353,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li class=\"books\">");_.b("\n" + i);_.b("      <span class=\"icon-background\"><i class=\"icon-book\"></i></span>");_.b("\n" + i);_.b("      <a data-target='books'>");_.b(_.v(_.d("i18n.profile.publications.headerBooks",c,p,0)));_.b(" (");_.b(_.v(_.d("ui.publicationSummary.books.count",c,p,0)));_.b(")</a>");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.publicationSummary.proceedings",c,p,1),c,p,0,1430,1688,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li class=\"proceedings\">");_.b("\n" + i);_.b("      <span class=\"icon-background\"><i class=\"icon-file\"></i></span>");_.b("\n" + i);_.b("      <a data-target='proceedings'>");_.b(_.v(_.d("i18n.profile.publications.headerConferenceProceedings",c,p,0)));_.b(" (");_.b(_.v(_.d("ui.publicationSummary.proceedings.count",c,p,0)));_.b(")</a>");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.publicationSummary.presentations",c,p,1),c,p,0,1773,2034,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li class=\"presentations\">");_.b("\n" + i);_.b("      <span class=\"icon-background\"><i class=\"icon-bar-chart\"></i></span>");_.b("\n" + i);_.b("      <a data-target='presentations'>");_.b(_.v(_.d("i18n.profile.publications.headerPresentations",c,p,0)));_.b(" (");_.b(_.v(_.d("ui.publicationSummary.presentations.count",c,p,0)));_.b(")</a>");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/publications/navigator_section',['marionette', 'utils', 'vent', 'hgn!../../../../templates/profile/publications/navigator_section'], function(Marionette, utils, vent, NavigatorTemplate) {
    
    return Marionette.ItemView.extend({
      events: {
        'click a[data-target]': 'showTargetedPublications'
      },
      tagName: 'div',
      initialize: function() {
        var that;
        that = this;
        return vent.on('publications:update:navigation', function(label) {
          return that.updateNavigation(label);
        });
      },
      onRender: function() {
        utils.enhanceByUnwrappingExtraElement(this.$el);
        return this.$el.addClass('all');
      },
      template: NavigatorTemplate,
      showTargetedPublications: function(evt) {
        var target;
        evt.preventDefault();
        target = $(evt.currentTarget).attr('data-target');
        this.updateNavigation(target);
        return vent.trigger('publications:showPublications', target);
      },
      updateNavigation: function(label) {
        return this.$el.removeClass().addClass(label);
      },
      onBeforeClose: function() {
        return vent.off('publications:update:navigation');
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/publications/pagination_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"btn-toolbar btn-block\">");_.b("\n" + i);_.b("  <div class=\"btn-group \">");_.b("\n" + i);_.b("    <a class=\"btn btn-small btn-first-page ");if(_.s(_.f("firstPage",c,p,1),c,p,0,122,130,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("disabled");});c.pop();}_.b("\">");_.b("\n" + i);_.b("      <span class=\"hidden-phone\">");_.b(_.v(_.d("i18n.searchResults.list.buttonFirst",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("      <span class=\"hidden-desktop hidden-tablet icon-double-angle-left\"></span>");_.b("\n" + i);_.b("    </a>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("  <div class=\"btn-group\">");_.b("\n" + i);_.b("    <a class=\"btn btn-small btn-previous-page ");if(_.s(_.f("firstPage",c,p,1),c,p,0,417,425,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("disabled");});c.pop();}_.b("\"><i class=\"icon-chevron-left\"></i></a>");_.b("\n" + i);_.b("    <a class=\"btn btn-small btn-page-jumper\" rel=\"popover\">");_.b(_.v(_.f("rangeLabel",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("    <a class=\"btn btn-small btn-next-page ");if(_.s(_.f("lastPage",c,p,1),c,p,0,618,626,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("disabled");});c.pop();}_.b("\"><i class=\"icon-chevron-right\"></i></a>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("  <div class=\"btn-group\">");_.b("\n" + i);_.b("    <a class=\"btn btn-small btn-last-page ");if(_.s(_.f("lastPage",c,p,1),c,p,0,774,782,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("disabled");});c.pop();}_.b("\">");_.b("\n" + i);_.b("      <span class=\"hidden-phone\">");_.b(_.v(_.d("i18n.searchResults.list.buttonLast",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("      <span class=\"hidden-desktop hidden-tablet icon-double-angle-right\"></span>");_.b("\n" + i);_.b("    </a>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("  <div class=\"btn-group\">");_.b("\n" + i);_.b("    <button class=\"btn btn-small result-per-page dropdown-toggle\" data-toggle=\"dropdown\">");_.b("\n" + i);_.b("      <span class=\"hidden-phone\">");_.b(_.v(_.f("resultPerPageLabel",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("      <span class=\"hidden-desktop hidden-tablet\">");_.b(_.v(_.f("resultPerPageLabelPhone",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("      <span class=\"icon-caret-down\"></span>");_.b("\n" + i);_.b("    </button>");_.b("\n" + i);_.b("    <ul class=\"dropdown-menu\">");_.b("\n" + i);_.b("      <li><a class=\"view-10\">10</a></li>");_.b("\n" + i);_.b("      <li><a class=\"view-20\">20</a></li>");_.b("\n" + i);_.b("      <li><a class=\"view-50\">50</a></li>");_.b("\n" + i);_.b("      <li><a class=\"view-100\">100</a></li>");_.b("\n" + i);_.b("    </ul>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/publications/pagination_section',['lodash', 'i18n', 'marionette', 'utils', 'vent', 'hgn!../../../../templates/profile/publications/pagination_section'], function(_, i18n, Marionette, utils, vent, PaginationTemplate) {
    
    return Marionette.ItemView.extend({
      events: {
        'click a.btn-first-page:not(.disabled)': 'gotoFirstPage',
        'click a.btn-last-page:not(.disabled)': 'gotoLastPage',
        'click a.btn-previous-page:not(.disabled)': 'gotoPreviousPage',
        'click a.btn-next-page:not(.disabled)': 'gotoNextPage',
        'click a.view-10': 'showPageOf10',
        'click a.view-20': 'showPageOf20',
        'click a.view-50': 'showPageOf50',
        'click a.view-100': 'showPageOf100'
      },
      initialize: function() {
        var that;
        that = this;
        return vent.on('publications:update:navigation', function(label) {
          return that.updateNavigation(label);
        });
      },
      onRender: function() {
        return utils.enhanceByUnwrappingExtraElement(this.$el);
      },
      template: function(data) {
        return PaginationTemplate(_.extend({}, data, {
          i18n: i18n
        }));
      },
      gotoFirstPage: function() {
        return this.model.set('page', 1);
      },
      gotoLastPage: function() {
        return this.model.set('page', this.model.get('lastPageIndex'));
      },
      gotoPreviousPage: function() {
        var page;
        page = this.model.get('page');
        return this.model.set('page', page - 1);
      },
      gotoNextPage: function() {
        var page;
        page = this.model.get('page');
        return this.model.set('page', page + 1);
      },
      showPageOfPageSize: function(pageSize) {
        var page, targetPageIndex;
        targetPageIndex = this.model.get('targetPageIndex');
        page = Math.ceil(targetPageIndex / pageSize);
        this.model.set('page', page);
        return this.model.set('pageSize', pageSize);
      },
      showPageOf10: function() {
        return this.showPageOfPageSize(10);
      },
      showPageOf20: function() {
        return this.showPageOfPageSize(20);
      },
      showPageOf50: function() {
        return this.showPageOfPageSize(50);
      },
      showPageOf100: function() {
        return this.showPageOfPageSize(100);
      },
      onBeforeClose: function() {
        return vent.off('publications:update:navigation');
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/publications/publication_list_item", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<li class=\"publication ");if(_.s(_.f("featured",c,p,1),c,p,0,38,46,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("featured");});c.pop();}_.b(" ");_.b(_.v(_.f("type",c,p,0)));_.b("\" id=\"pubId-");_.b(_.v(_.f("publicationId",c,p,0)));_.b("\">");_.b("\n" + i);_.b("  <cite>");_.b(_.t(_.f("capCitation",c,p,0)));_.b(_.t(_.d("label.html",c,p,0)));_.b("</cite>");_.b("\n" + i);if(_.s(_.f("detail",c,p,1),c,p,0,174,220,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <div class=\"detail\">");_.b(_.t(_.f("html",c,p,0)));_.b("</div>");_.b("\n");});c.pop();}_.b("</li>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/publications/publication_list_item',['lodash', 'i18n', 'marionette', 'utils', 'hgn!../../../../templates/profile/publications/publication_list_item'], function(_, i18n, Marionette, utils, PublicationListItemTemplate) {
    
    return Marionette.ItemView.extend({
      tagName: 'li',
      onRender: function() {
        var $link, href, that;
        utils.enhanceByUnwrappingExtraElement(this.$el);
        utils.formatExternalLinks(this);
        $link = this.$('a');
        href = $link.attr('href');
        if (href && !_.contains(href.toLowerCase(), 'stanford.edu')) {
          $link.attr('target', '_blank');
        }
        this.$('cite .authors').attr('data-toggle', 'collapsePartial');
        that = this;
        return setTimeout(function() {
          return that.$("[data-toggle=collapsePartial], [data-toggle=collapse-partial]").collapsePartial({
            lines: 2,
            strShowMore: i18n.profile.shared.labelAllAuthors,
            strShowLess: '<i class="icon-caret-left"></i>' + i18n.profile.shared.labelHide
          });
        }, 100);
      },
      template: function(data) {
        return PublicationListItemTemplate(_.extend({}, data, {
          i18n: i18n
        }));
      }
    });
  });

}).call(this);

(function() {

  define('views/profile/publications/publications_section',['i18n', 'marionette', 'views/profile/publications/publication_list_item', 'utils', 'vent'], function(i18n, Marionette, PublicationListItemView, utils, vent) {
    var MAX_SUMMARY_COUNT;
    MAX_SUMMARY_COUNT = 5;
    

    return Marionette.CompositeView.extend({
      events: {
        'click a.show-all': 'showPublications'
      },
      itemView: PublicationListItemView,
      itemViewContainer: 'ul.section-listing',
      appendHtml: function(collectionView, itemView, index) {
        var $container, $detail, $item, model;
        $container = collectionView.$(collectionView.itemViewContainer);
        $item = $(itemView.el);
        $detail = $item.find('.detail');
        if ($detail.size() > 0) {
          model = itemView.model;
          utils.enhanceWithCollapsibleNarrative($item, i18n.profile.shared.labelMore, $detail, 'publication' + model.cid);
          $detail.find('span').prepend($('<i class="icon-external-link"></i>'));
        }
        return $container.append($item);
      },
      onRender: function() {
        var $actionIcon, $itemViewContainer, $link, allLabel, label, target, totalCount;
        this.$el.addClass('content-section');
        $itemViewContainer = this.$(this.itemViewContainer);
        if (this.collection.length === MAX_SUMMARY_COUNT && $itemViewContainer) {
          totalCount = $itemViewContainer.attr('data-count');
          if (totalCount > MAX_SUMMARY_COUNT) {
            i18n = this.model.get('i18n');
            label = this.$('h3').text();
            allLabel = i18n.collapsible.labelAll.replace('{0}', label).replace('{1}', totalCount);
            if ($itemViewContainer.hasClass('featured')) {
              $actionIcon = $('<i class="icon-star"></i>');
              target = 'featured';
            }
            if ($itemViewContainer.hasClass('articles')) {
              $actionIcon = $('<i class="icon-file"></i>');
              target = 'articles';
            }
            if ($itemViewContainer.hasClass('books')) {
              $actionIcon = $('<i class="icon-book"></i>');
              target = 'books';
            }
            if ($itemViewContainer.hasClass('proceedings')) {
              $actionIcon = $('<i class="icon-file"></i>');
              target = 'proceedings';
            }
            if ($itemViewContainer.hasClass('presentations')) {
              $actionIcon = $('<i class="icon-bar-chart"></i>');
              target = 'presentations';
            }
            if ($itemViewContainer.hasClass('allpubs')) {
              $actionIcon = $('<i class="icon-align-justify"></i>');
              target = 'all';
            }
            $link = $('<a class="show-all"></a>').attr('data-target', target).append($actionIcon, allLabel);
            return this.$el.append($link);
          }
        }
      },
      showPublications: function(evt) {
        var target;
        target = $(evt.currentTarget).attr('data-target');
        vent.trigger('publications:showPublications', target);
        return vent.trigger('publications:update:navigation', target);
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/publications/similar_profiles_list_item", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<li class=\"mini-profile media\">");_.b("\n" + i);_.b("  <input type=\"radio\" name=\"similar-profiles\" id=\"similar-profiles");_.b(_.v(_.d("data.profileUrl",c,p,0)));_.b("\" />");_.b("\n" + i);_.b("  <div class=\"media-body\">");_.b("\n" + i);_.b("    <a class=\"media-img\" href=\"");_.b(_.v(_.d("data.profileUrl",c,p,0)));_.b("\">");_.b("\n" + i);_.b("      <img class=\"media-object pull-left\" src=\"");_.b(_.v(_.d("data.photos.small.url",c,p,0)));_.b("\" alt=\"");_.b(_.v(_.d("data.displayName",c,p,0)));_.b("\" />");_.b("\n" + i);_.b("    </a>");_.b("\n" + i);_.b("    <a href=\"");_.b(_.v(_.d("data.profileUrl",c,p,0)));_.b("\" class=\"media-heading\">");_.b("\n" + i);_.b("      <h4>");_.b(_.v(_.d("data.displayName",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("      <h5>");_.b(_.t(_.d("data.shortTitle",c,p,0)));_.b("</h5>");_.b("\n" + i);_.b("    </a>");_.b("\n" + i);_.b("    ");_.b("\n" + i);if(_.s(_.d("data.clinicalFocus",c,p,1),c,p,0,502,678,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <p class=\"clinical-focus\">");_.b("\n" + i);_.b("        <strong>");_.b(_.v(_.d("i18n.profile.publications.similarProfiles.labelClinicalFocus",c,p,0)));_.b("</strong>");_.b("\n" + i);_.b("        ");_.b(_.t(_.d("data.clinicalFocus",c,p,0)));_.b("\n" + i);_.b("      </p>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("data.researchInterests",c,p,1),c,p,0,742,930,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <p class=\"research-interests\">");_.b("\n" + i);_.b("        <strong>");_.b(_.v(_.d("i18n.profile.publications.similarProfiles.labelResearchInterests",c,p,0)));_.b("</strong>");_.b("\n" + i);_.b("        ");_.b(_.t(_.d("data.researchInterests",c,p,0)));_.b("\n" + i);_.b("      </p>");_.b("\n");});c.pop();}_.b("    <div class=\"link-actions\"></div>");_.b("\n" + i);_.b("    <div class=\"link-publications\">");_.b("\n" + i);_.b("      <ul>");_.b("\n" + i);if(_.s(_.d("data.publicationCount",c,p,1),c,p,0,1078,1259,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <li><a class=\"publication-count\" href=\"");_.b(_.v(_.d("data.profilePublicationUrl",c,p,0)));_.b("\"><span>");_.b(_.v(_.d("data.publicationCount",c,p,0)));_.b("</span> ");_.b(_.v(_.d("i18n.profile.publications.totalLabel",c,p,0)));_.b("</a></li>");_.b("\n");});c.pop();}_.b("      </ul>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</li>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/publications/similar_profiles_list_item',['i18n', 'marionette', 'utils', 'hgn!../../../../templates/profile/publications/similar_profiles_list_item'], function(i18n, Marionette, utils, SimilarProfilesListItemTemplate) {
    
    return Marionette.ItemView.extend({
      onRender: function() {
        var $actionIcon, $collapsibleEl, $collapsibleLink, dataTargetValue, elementsToWrap, label;
        utils.enhanceByUnwrappingExtraElement(this.$el);
        label = 'similar-profiles' + this.model.get('profileId');
        elementsToWrap = this.$('.clinical-focus, .research-interests');
        if (elementsToWrap.length > 0) {
          $collapsibleEl = $('<div></div>').attr('data-collapsible', label).addClass('collapse');
          $collapsibleEl.append(this.$('.clinical-focus, .research-interests'));
          dataTargetValue = '[data-collapsible=' + label + ']';
          $collapsibleLink = $('<a data-bypass></a>').attr({
            'data-toggle': 'collapse',
            'data-target': dataTargetValue
          });
          $actionIcon = $('<i class="icon-caret-right"></i>');
          $collapsibleLink.append($actionIcon).append(i18n.profile.shared.labelMore);
          $collapsibleEl.on('show', function(evt) {
            return $actionIcon.attr('class', 'icon-caret-up');
          });
          $collapsibleEl.on('hide', function(evt) {
            return $actionIcon.attr('class', 'icon-caret-right');
          });
          this.$('.link-actions').before($collapsibleEl).append($collapsibleLink);
        }
        return utils.clearBadPhotos();
      },
      tagName: 'li',
      template: function(data) {
        return SimilarProfilesListItemTemplate({
          data: data,
          i18n: i18n
        });
      }
    });
  });

}).call(this);

(function() {

  define('views/profile/publications/similar_profiles_section',['utils', 'views/profile/shared/section_listing', 'views/profile/publications/similar_profiles_list_item'], function(utils, SectionListingView, SimilarProfilesListItemView) {
    
    return SectionListingView.extend({
      itemView: SimilarProfilesListItemView,
      onRender: function() {
        SectionListingView.prototype.onRender.apply(this, arguments);
        return setTimeout(function() {
          if ($(".lt-ie9").length > 0) {
            $('#similarProfilesContent input:radio').each(function() {
              $(this).parent().addClass("input");
              $(this).parent().find("ul > li:last-child").addClass("last-child");
            });
            $('#similarProfilesContent input:radio').bind("change", function(e) {
              $("#similarProfilesContent li").removeClass('checked');
              $(e.target).parent().toggleClass('checked', $(e.target).attr("checked") === 'checked');
            });
            $("#similarProfilesContent label img").live("click", function() {
              $("input[id='" + $(this).parents("label").attr("for") + "']").focus().click().change().blur();
            });
            return;
          }
          $('#similarProfilesContent input:radio').bind("change", function(e) {
            $("#similarProfilesContent label").removeClass('checked');
            $("label[for='" + $(e.target).attr("id") + "']").addClass('checked');
          });
          return utils.clearBadPhotos();
        }, 1000);
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/publications/layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h2>");_.b(_.v(_.d("i18n.profile.publications.label",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"row-fluid\">");_.b("\n" + i);_.b("  <div class=\"span8 page-content\">");_.b("\n" + i);_.b("    <div id=\"featuredPublicationsContent\"></div>");_.b("\n" + i);_.b("    <div id=\"allPublicationsContent\">");_.b("\n" + i);if(_.s(_.d("ui.publicationSummary.all",c,p,1),c,p,0,232,304,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/publications/all_publications_section",c,p,"        "));});c.pop();}_.b("    </div>");_.b("\n" + i);_.b("    <div id=\"journalArticlesContent\"></div>");_.b("\n" + i);_.b("    <div id=\"booksContent\"></div>");_.b("\n" + i);_.b("    <div id=\"proceedingsContent\"></div>");_.b("\n" + i);_.b("    <div id=\"presentationsContent\"></div>");_.b("\n" + i);_.b("    <div id=\"paginationContent\"></div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("  <div class=\"span4 side-bar\">");_.b("\n" + i);_.b("    <div id=\"navigatorContent\" class=\"content-section navigator color-scheme-pub bg-icon-pub\"></div>");_.b("\n" + i);_.b("    <div id=\"similarProfilesContent\" class=\"content-section similar-profiles\"></div>");_.b("\n" + i);_.b("    <div id=\"tagCloudContent\" class=\"content-section tag-cloud\"></div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/publications/article_publications_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.publications.headerJournalArticles",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing articles\" data-count=\"");_.b(_.v(_.d("ui.publicationSummary.articles.count",c,p,0)));_.b("\">");_.b("\n" + i);if(_.s(_.d("ui.publicationSummary.articles.publications",c,p,1),c,p,0,215,272,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/publications/publication_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/publications/book_publications_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.publications.headerBooks",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing books\" data-count=\"");_.b(_.v(_.d("ui.publicationSummary.books.count",c,p,0)));_.b("\">");_.b("\n" + i);if(_.s(_.d("ui.publicationSummary.books.publications",c,p,1),c,p,0,196,253,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/publications/publication_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/publications/featured_publications_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.publications.headerFeaturedPublications",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing featured\" data-count=\"");_.b(_.v(_.d("ui.publicationSummary.featured.count",c,p,0)));_.b("\">");_.b("\n" + i);if(_.s(_.d("ui.publicationSummary.featured.publications",c,p,1),c,p,0,220,277,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/publications/publication_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/publications/presentations_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.publications.headerPresentations",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing presentations\" data-count=\"");_.b(_.v(_.d("ui.publicationSummary.presentations.count",c,p,0)));_.b("\">");_.b("\n" + i);if(_.s(_.d("ui.publicationSummary.presentations.publications",c,p,1),c,p,0,228,285,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/publications/publication_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/publications/proceeding_publications_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.publications.headerConferenceProceedings",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing proceedings\" data-count=\"");_.b(_.v(_.d("ui.publicationSummary.proceedings.count",c,p,0)));_.b("\">");_.b("\n" + i);if(_.s(_.d("ui.publicationSummary.proceedings.publications",c,p,1),c,p,0,230,287,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/publications/publication_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/publications/all_publications_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.publications.headerAllPublications",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing articles\" data-count=\"");_.b(_.v(_.d("ui.publicationSummary.all.count",c,p,0)));_.b("\">");_.b("\n" + i);if(_.s(_.d("data.publications",c,p,1),c,p,0,184,241,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/publications/publication_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/publications/tag_cloud_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.publications.headerPublicationsByTopic",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<div class=\"content-section color-scheme-tag-cloud bg-icon-tag-cloud\">");_.b("\n" + i);_.b("  <ul class=\"unstyled section-listing\">");_.b("\n" + i);if(_.s(_.d("data.publicationTags",c,p,1),c,p,0,215,374,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <li class=\"tag\">");_.b("\n" + i);_.b("        <a href=\"");_.b(_.v(_.d("config.baseUrl",c,p,0)));_.b("/search?q=");_.b(_.v(_.d("apiLabel.text",c,p,0)));_.b("\" class=\"weight");_.b(_.v(_.f("weight",c,p,0)));_.b("\">");_.b(_.v(_.d("apiLabel.text",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("      </li>");_.b("\n");});c.pop();}_.b("  </ul>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/publications/similar_profiles_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.publications.headerSimilarProfiles",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<div class=\"content-section color-scheme-user bg-icon-user\">");_.b("\n" + i);_.b("  <ul class=\"unstyled section-listing\">");_.b("\n" + i);if(_.s(_.d("ui.similarProfiles",c,p,1),c,p,0,199,265,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/publications/similar_profiles_list_item",c,p,"      "));});c.pop();}_.b("  </ul>");_.b("\n" + i);_.b("\n" + i);_.b("  <ul class=\"unstyled \">");_.b("\n" + i);if(_.s(_.d("ui.similarProfiles",c,p,1),c,p,0,354,513,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <li><label class=\"media-img\" for=\"similar-profiles");_.b(_.v(_.f("profileUrl",c,p,0)));_.b("\"><img class=\"media-object pull-left\" src=\"");_.b(_.v(_.d("photos.small.url",c,p,0)));_.b("\"/></label></li>");_.b("\n");});c.pop();}_.b("  </ul>");_.b("\n" + i);_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/publications/layout',['backbone', 'collections/list_items', 'marionette', 'views/profile/publications/navigator_section', 'views/profile/publications/pagination_section', 'views/profile/publications/publications_section', 'views/profile/publications/similar_profiles_section', 'vent', 'utils', 'hgn!../../../../templates/profile/publications/layout', 'hgn!../../../../templates/profile/publications/article_publications_section', 'hgn!../../../../templates/profile/publications/book_publications_section', 'hgn!../../../../templates/profile/publications/featured_publications_section', 'hgn!../../../../templates/profile/publications/presentations_section', 'hgn!../../../../templates/profile/publications/proceeding_publications_section', 'hgn!../../../../templates/profile/publications/all_publications_section', 'hgn!../../../../templates/profile/publications/tag_cloud_section', 'hgn!../../../../templates/profile/publications/similar_profiles_section'], function(Backbone, ListItems, Marionette, NavigatorSectionView, PaginationSectionView, PublicationsSectionView, SimilarProfilesView, vent, utils, PublicationLayoutTemplate, ArticlesTemplate, BooksTemplate, FeaturedTemplate, PresentationsTemplate, ProceedingsTemplate, AllTemplate, TagCloudTemplate, SimilarProfilesTemplate) {
    var MAX_SUMMARY_COUNT;
    MAX_SUMMARY_COUNT = 5;
    

    return Marionette.Layout.extend({
      regions: {
        featured: '#featuredPublicationsContent',
        all: '#allPublicationsContent',
        articles: '#journalArticlesContent',
        books: '#booksContent',
        proceedings: '#proceedingsContent',
        presentations: '#presentationsContent',
        navigator: '#navigatorContent',
        tagCloud: '#tagCloudContent',
        similarProfiles: '#similarProfilesContent',
        pagination: '#paginationContent'
      },
      initialize: function() {
        var that;
        this.paging = new Backbone.Model({
          all: true,
          page: 1,
          pageSize: 10
        });
        this.listenTo(this.paging, 'change', this.renderPage);
        that = this;
        return vent.on('publications:showPublications', function(target) {
          that.$el.removeClass().addClass(target);
          if (that.featured) {
            that.featured.close();
          }
          if (that.articles) {
            that.articles.close();
          }
          if (that.books) {
            that.books.close();
          }
          if (that.proceedings) {
            that.proceedings.close();
          }
          if (that.all) {
            that.all.close();
          }
          if (that.presentations) {
            that.presentations.close();
          }
          that.paging.set('all', false);
          that.paging.set('page', 1);
          that.paging.set('pageSize', 10);
          return that.showPublications(target);
        });
      },
      onRender: function() {
        var data, i18n, profiles, that, ui;
        data = this.model.get('data');
        i18n = this.model.get('i18n');
        ui = this.model.get('ui');
        data = this.model.get('data');
        this.navigator.show(new NavigatorSectionView({
          model: this.model
        }));
        if (ui.showTagCloud && window.isBannerSwapped !== true) {
          this.tagCloud.show(new Marionette.ItemView({
            model: this.model,
            template: TagCloudTemplate
          }));
        }
        this.showAllPublications(data);
        if (ui.showSimilarProfiles && this.similarProfiles && window.isBannerSwapped !== true) {
          profiles = new Backbone.Model();
          that = this;
          return profiles.fetch({
            xhrFields: {
              withCredentials: true
            },
            url: this.options.config.capApiUrl + '/profiles',
            data: {
              ids: ui.similarProfileIds
            },
            success: function() {
              return that.similarProfiles.show(new SimilarProfilesView({
                model: profiles,
                collection: new ListItems(profiles.get('ui').similarProfiles),
                sectionHeader: i18n.profile.publications.headerSimilarProfiles,
                sectionListType: 'similar-profiles',
                template: SimilarProfilesTemplate
              }));
            }
          });
        }
      },
      onShow: function() {
        return utils.formatExternalLinks(this);
      },
      template: PublicationLayoutTemplate,
      showFeaturedPublications: function(list) {
        if (list) {
          this.getPublicationView(list, true);
          if (this.paging.get('lastPageIndex') > 1) {
            return this.pagination.show(new PaginationSectionView({
              model: this.paging
            }));
          }
        }
      },
      showArticles: function(list, showAll) {
        if (list) {
          this.getPublicationView(list);
          if (showAll && this.paging.get('lastPageIndex') > 1) {
            return this.pagination.show(new PaginationSectionView({
              model: this.paging
            }));
          }
        }
      },
      showBooks: function(list, showAll) {
        if (list) {
          this.getPublicationView(list);
          if (showAll && this.paging.get('lastPageIndex') > 1) {
            return this.pagination.show(new PaginationSectionView({
              model: this.paging
            }));
          }
        }
      },
      showProceedings: function(list, showAll) {
        if (list) {
          this.getPublicationView(list);
          if (showAll && this.paging.get('lastPageIndex') > 1) {
            return this.pagination.show(new PaginationSectionView({
              model: this.paging
            }));
          }
        }
      },
      showPresentations: function(list, showAll) {
        if (list) {
          this.getPublicationView(list);
          if (showAll && this.paging.get('lastPageIndex') > 1) {
            return this.pagination.show(new PaginationSectionView({
              model: this.paging
            }));
          }
        }
      },
      showAllPublications: function(data) {
        if (data.publications.length > 0) {
          this.getPublicationView(data.publications, false, true);
          if (this.paging.get('lastPageIndex') > 1) {
            return this.pagination.show(new PaginationSectionView({
              model: this.paging
            }));
          }
        }
      },
      showPublications: function(target) {
        var data, ui;
        ui = this.model.get('ui');
        data = this.model.get('data');
        if (this.pagination) {
          this.pagination.close();
        }
        if (target === 'featured') {
          if (ui.publicationSummary.featured) {
            return this.showFeaturedPublications(ui.publicationSummary.featured.publications);
          }
        } else if (target === 'articles') {
          if (ui.publicationSummary.articles) {
            return this.showArticles(ui.publicationSummary.articles.publications, true);
          }
        } else if (target === 'books') {
          if (ui.publicationSummary.books) {
            return this.showBooks(ui.publicationSummary.books.publications, true);
          }
        } else if (target === 'proceedings') {
          if (ui.publicationSummary.proceedings) {
            return this.showProceedings(ui.publicationSummary.proceedings.publications, true);
          }
        } else if (target === 'presentations') {
          if (ui.publicationSummary.presentations) {
            return this.showPresentations(ui.publicationSummary.presentations.publications, true);
          }
        } else if (target === 'all') {
          return this.showAllPublications(data);
        } else {
          return this.showAllPublications(data);
        }
      },
      getPublicationView: function(list, onlyFeatured, all) {
        var count, docType, endIndex, i18n, lastPageIndex, mapping, page, pageSize, regionMap, sIdx, startIndex, sublist, target, that, _results;
        page = this.paging.get('page');
        pageSize = this.paging.get('pageSize');
        startIndex = (page * pageSize) - pageSize;
        endIndex = page * pageSize;
        count = list.length >= endIndex ? pageSize : list.length - startIndex;
        endIndex -= pageSize - count;
        lastPageIndex = Math.ceil(list.length / pageSize);
        i18n = this.model.get('i18n');
        this.paging.set({
          'firstPage': page === 1,
          'lastPage': page === lastPageIndex,
          'lastPageIndex': lastPageIndex,
          'targetPageIndex': startIndex + 1,
          'resultPerPageLabel': i18n.searchResults.list.buttonResultsPerPage.replace('{0}', pageSize),
          'resultPerPageLabelPhone': i18n.searchResults.list.buttonResultsPerPagePhone.replace('{0}', pageSize),
          'rangeLabel': i18n.searchResults.list.labelRange.replace('{0}', page).replace('{1}', lastPageIndex)
        }, {
          silent: true
        });
        list = list.slice(startIndex, endIndex);
        sublist = [];
        docType = 'article';
        regionMap = {
          featured: {
            region: this.featured,
            template: FeaturedTemplate
          },
          article: {
            region: this.articles,
            template: ArticlesTemplate
          },
          book: {
            region: this.books,
            template: BooksTemplate
          },
          inbook: {
            region: this.books,
            template: BooksTemplate
          },
          inproceedings: {
            region: this.proceedings,
            template: ProceedingsTemplate
          },
          presentation: {
            region: this.presentations,
            template: PresentationsTemplate
          },
          all: {
            region: this.all,
            template: AllTemplate
          }
        };
        sIdx = 0;
        if (onlyFeatured) {
          sublist = list;
          docType = 'featured';
        } else if (all) {
          sublist = list;
          docType = 'all';
        } else {
          that = this;
          $.each(list, function(idx, el) {
            if (!el.type) {
              el.type = 'presentation';
            }
            if (el.type === 'inbook') {
              el.type = 'book';
            }
            if (docType !== el.type) {
              if (sublist.length !== 0) {
                that.showRegion(regionMap[docType].region, sublist.slice(sIdx, idx + 1), regionMap[docType].template);
                delete regionMap[docType];
                sIdx = idx;
              }
              docType = el.type;
            }
            return sublist.push(el);
          });
        }
        if (sublist.length !== 0) {
          this.showRegion(regionMap[docType].region, sublist.slice(sIdx), regionMap[docType].template);
          delete regionMap[docType];
        }
        target = this.$el.attr('class');
        if (target === 'all') {
          _results = [];
          for (docType in regionMap) {
            mapping = regionMap[docType];
            _results.push((function(docType, mapping) {
              if (mapping.region) {
                return mapping.region.close();
              }
            })(docType, mapping));
          }
          return _results;
        }
      },
      showRegion: function(region, list, template) {
        return region.show(new PublicationsSectionView({
          model: this.model,
          collection: new ListItems(list),
          template: template
        }));
      },
      renderPage: function() {
        var target;
        target = this.$el.attr('class');
        return this.showPublications(target);
      },
      onBeforeClose: function() {
        return vent.off('publications:showPublications');
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/research_and_scholarship/industry_relationships_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.research.headerIndustryRelationships",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<p class=\"brief\">");_.b(_.t(_.d("data.industryRelationships.label.html",c,p,0)));_.b("</p>");_.b("\n" + i);_.b("<div class=\"detail\">");_.b(_.t(_.d("data.industryRelationships.detail.html",c,p,0)));_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/research_and_scholarship/industry_relationships_section',['marionette', 'utils', 'hgn!../../../../templates/profile/research_and_scholarship/industry_relationships_section'], function(Marionette, utils, IndustryRelationshipsTemplate) {
    
    return Marionette.ItemView.extend({
      onRender: function() {
        var i18n;
        i18n = this.model.get('i18n');
        return utils.enhanceWithCollapsibleNarrative(this.$el, i18n.collapsible.labelViewFullDescription, this.$('.detail'), 'industry-relationships');
      },
      template: IndustryRelationshipsTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/research_and_scholarship/clinical_trials_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.research.headerClinicalTrials",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("ui.clinicalTrialResults.trials",c,p,1),c,p,0,132,186,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/clinical_trial_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/research_and_scholarship/current_clinical_interests_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.research.headerCurrentClinicalInterests",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.clinicalInterests.terms",c,p,1),c,p,0,140,177,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li><span>");_.b(_.v(_.d(".",c,p,0)));_.b("</span></li>");_.b("\n");});c.pop();}_.b("</ul>");_.b("\n" + i);_.b("<p>");_.b(_.v(_.d("data.clinicalInterests.details",c,p,0)));_.b("</p>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/research_and_scholarship/current_research_and_scholarly_interests_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.research.headerCurrentResearch",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<p>");_.b(_.t(_.d("ui.currentResearchInterests",c,p,0)));_.b("</p>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/research_and_scholarship/lab_affiliations_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.research.headerLabAffiliations",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.labAffiliations",c,p,1),c,p,0,123,170,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/research_and_scholarship/layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h2>");_.b(_.v(_.d("i18n.profile.research.label",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"row-fluid\">");_.b("\n" + i);_.b("  <div class=\"span8 page-content\">");_.b("\n" + i);if(_.s(_.d("ui.showCurrentResearchAndScholarlyInterests",c,p,1),c,p,0,157,357,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"currentResearchAndScholarlyInterestsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/research_and_scholarship/current_research_and_scholarly_interests_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showCurrentClinicalInterests",c,p,1),c,p,0,455,629,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"currentClinicalInterestsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/research_and_scholarship/current_clinical_interests_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showClinicalTrialsOnResearchAndScholarship",c,p,1),c,p,0,729,906,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"clinicalTrialsContentOnResearchAndScholarship\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/research_and_scholarship/clinical_trials_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showIndustryRelationships",c,p,1),c,p,0,1003,1170,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"industryRelationshipsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/research_and_scholarship/industry_relationships_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showResearchProjects",c,p,1),c,p,0,1245,1402,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"researchProjectsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/research_and_scholarship/research_projects_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showProjectsOnResearchAndScholarship",c,p,1),c,p,0,1488,1652,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"projectsContentOnResearchAndScholarship\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/research_and_scholarship/projects_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showLabAffiliations",c,p,1),c,p,0,1737,1892,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"labAffiliationsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/research_and_scholarship/lab_affiliations_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/research_and_scholarship/projects_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.research.headerProjects",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"unstyled section-listing\">");_.b("\n" + i);if(_.s(_.d("data.projects",c,p,1),c,p,0,118,165,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/research_and_scholarship/research_projects_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.research.headerResearchProjects",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"unstyled section-listing\">");_.b("\n" + i);if(_.s(_.d("data.researchProjects",c,p,1),c,p,0,134,181,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/research_and_scholarship/layout',['collections/list_items', 'marionette', 'views/profile/shared/section_listing', 'views/profile/shared/section_clinical_trials_listing', 'views/profile/research_and_scholarship/industry_relationships_section', 'hgn!../../../../templates/profile/research_and_scholarship/clinical_trials_section', 'hgn!../../../../templates/profile/research_and_scholarship/current_clinical_interests_section', 'hgn!../../../../templates/profile/research_and_scholarship/current_research_and_scholarly_interests_section', 'hgn!../../../../templates/profile/research_and_scholarship/lab_affiliations_section', 'hgn!../../../../templates/profile/research_and_scholarship/layout', 'hgn!../../../../templates/profile/research_and_scholarship/projects_section', 'hgn!../../../../templates/profile/research_and_scholarship/research_projects_section'], function(ListItems, Marionette, SectionListingView, SectionClinicalTrialsListingView, IndustryRelationshipsView, ClinicalTrialsTemplate, CurrentClinicalInterestsTemplate, CurrentResearchAndScholarlyInterestsTemplate, LabAffiliationsTemplate, LayoutTemplate, ProjectsTemplate, ResearchProjectsTemplate) {
    
    return Marionette.Layout.extend({
      onRender: function() {
        var data, i18n, ui;
        data = this.model.get('data');
        ui = this.model.get('ui');
        i18n = this.model.get('i18n');
        if (ui.showClinicalTrialsOnResearchAndScholarship) {
          this.clinicalTrials.show(new SectionClinicalTrialsListingView({
            model: this.model,
            collection: new ListItems(ui.clinicalTrialResults.trials),
            sectionHeader: i18n.profile.research.headerClinicalTrials,
            sectionListType: 'clinical-trials',
            template: ClinicalTrialsTemplate
          }));
        }
        if (ui.showCurrentClinicalInterests) {
          this.currentClinicalInterests.show(new Marionette.ItemView({
            model: this.model,
            template: CurrentClinicalInterestsTemplate
          }));
        }
        if (ui.showCurrentResearchAndScholarlyInterests) {
          this.currentResearchAndScholarlyInterests.show(new Marionette.ItemView({
            model: this.model,
            template: CurrentResearchAndScholarlyInterestsTemplate
          }));
        }
        if (ui.showIndustryRelationships) {
          this.industryRelationships.show(new IndustryRelationshipsView({
            model: this.model
          }));
        }
        if (ui.showLabAffiliations) {
          this.labAffiliations.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.labAffiliations),
            sectionHeader: i18n.profile.research.headerLabAffiliations,
            sectionListType: 'lab-affiliations',
            template: LabAffiliationsTemplate
          }));
        }
        if (ui.showProjectsOnResearchAndScholarship) {
          this.projects.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.projects),
            sectionHeader: i18n.profile.research.headerProjects,
            sectionListType: 'projects-on-research-and-scholarship',
            template: ProjectsTemplate
          }));
        }
        if (ui.showResearchProjects) {
          return this.researchProjects.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.researchProjects),
            sectionHeader: i18n.profile.research.headerResearchProjects,
            sectionListType: 'research-projects',
            template: ResearchProjectsTemplate
          }));
        }
      },
      regions: {
        clinicalTrials: '#clinicalTrialsContentOnResearchAndScholarship',
        currentClinicalInterests: '#currentClinicalInterestsContent',
        currentResearchAndScholarlyInterests: '#currentResearchAndScholarlyInterestsContent',
        industryRelationships: '#industryRelationshipsContent',
        labAffiliations: '#labAffiliationsContent',
        projects: '#projectsContentOnResearchAndScholarship',
        researchOpportunities: '#researchOpportunitiesContent',
        researchProjects: '#researchProjectsContent'
      },
      template: LayoutTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/teaching/advisees_list_item", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<li class=\"advisees-list-item\">");_.b("\n" + i);_.b("	  <span style=\"font-weight:600\">");_.b(_.v(_.f("relation",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("		<br>");_.b("\n" + i);_.b("		<span style=\"display:block\" data-toggle=\"collapsePartial\">");_.b(_.t(_.f("adviseesHtml",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("</li>");_.b("\n");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

/*
*   CollapsePartial Plugin
*   
*   http://www.css-101.org/articles/line-clamp/line-clamp_for_non_webkit-based_browsers.php
*   https://github.com/josephschmitt/Clamp.js
*   http://css-tricks.com/line-clampin/
*/

//;define(["jquery", "jqueryui"], function ($) {
;(function( $, window, document, undefined ){
    

    // Create the defaults once
    var pluginName = "collapsePartial",
        defaults = {
            lines: "4", //['#lines to be displayed', '#px', '#em', 'auto']

            //String constants
            strShowMore: "More &hellip;",

            strShowLess: "Less &hellip;",

            //CSS Classes
            cssClassMain: "collapse-partial",

            cssClassLineClamp: "line-clamp",

            cssClassEllipsisLastline: "ellipsis-lastline",

            cssClassShowMore: "show-more",

            cssClassShowLess: "show-less",

            cssClassToggleCollapsed: "collapsed",

            // Normal line heights vary from browser to browser. The spec recommends
            // a value between 1.0 and 1.2 of the font size.
            errorThreshold: 1
        };


    // Constructor
    function Plugin( element, options ) {
        this._name = pluginName;
        this._defaults = defaults;
        this.options = $.extend( {}, defaults, options );
        this.$element = $(element);
        this.init();
    }

    Plugin.prototype = {

        partialHeight: "auto",

        windowResizeEndEvent: pluginName + ".windowResizeEnd",
        
        $content: null,
        
        $toggle: null,

        resizeTO: false,
        
        ie8: $("html").hasClass("lt-ie9") || $("body").hasClass("ie8"),
        
        init: function() {
            this.renderUi();
            this.bindUi();
            
            //console.log(this._name+":init()", lines, this.$content[0], $(this.$element[0]).height(), this.$content[0].clientHeight, this.$content[0].offsetHeight, this.$content[0].scrollHeight);
            this.lineClamp();
        },

        lineClamp: function(){
            var options = this.options,
                lines = options.lines,
                availHeight = 0, lineHeight = 0,
                isCSSValue = lines.indexOf && (lines.indexOf('px') > -1 || lines.indexOf('em') > -1);
            
            this.show();
            this.$content.removeClass( options.cssClassEllipsisLastline );
            availHeight = $(this.$element[0]).height();
            lineHeight = this.getLineHeight( this.$content[0] );
            
            //Calc height
            if (lines == 'auto') {
                //Detect from CSS
                lines = this.getMaxLines();  
            }else if (parseInt(lines,10) > 0) {
                //Specify height by number of lines 
                lines = parseInt(lines, 10); 
            }else if (isCSSValue) {
                //Use a CSS based height value
                lines = this.getMaxLines(parseInt(height, 10)); 
            }

            this.partialHeight = lines * lineHeight;
            //console.log(this.partialHeight, "<", availHeight);
            //console.log(availHeight-this.partialHeight, ">", lineHeight*0.5);

            //If content is too tall for container (and the difference is greater than half a line)...
            if (this.partialHeight < availHeight  && (availHeight-this.partialHeight > lineHeight*0.5)) {
                this.$toggle.addClass( options.cssClassEllipsisLastline );
                //this.$content.addClass( options.cssClassEllipsisLastline );
                
                this.$toggle.show();
                this.hide();
            }else{
                this.$toggle.hide();
                this.show();                
            }
        },

        renderUi: function(){
            var self = this,
                options = this.options,
                $element = this.$element;
            
            $element.addClass( options.cssClassMain );
            
            $element.wrapInner('<span class="'+options.cssClassLineClamp+'" />');
            this.$content = $element.find('.'+options.cssClassLineClamp);
            
            this.$toggle = $('<a class="toggle-button '+options.cssClassToggleCollapsed+'" data-bypass/>');
            this.$content.append( this.$toggle );
            //this.$element.append( this.$toggle );

            this.$toggle.hide();
        },
        
        bindUi: function(){
            var self = this,
                winWidth = $(window).width(),
                winHeight = $(window).height();

            // Setup event listener for the toggle button
            $(document).on('click.'+pluginName+'.data-api', '[data-toggle='+pluginName+'] a.toggle-button', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                var selector = '[data-toggle=' + pluginName +']',
                    $this = $(this).parents(selector), 
                    target = $(e.currentTarget).parents(selector) || $this.parent().attr('data-target'),
                    option = target.data("plugin_" + pluginName) ? 'toggle' : $this.data();
                
                //console.log($this, target, option);
                target[pluginName](option);
            });
            /*
            // Setup a custom event for resizeEnd event
            $(window).resize(function() {
                var winNewWidth = $(window).width(),
                    winNewHeight = $(window).height();
                
                //if(winWidth!=winNewWidth || winHeight!=winNewHeight){
                //    clearTimeout(self.resizeTO);
                //    self.resizeTO = setTimeout(function() {
                        $(this).trigger( self.windowResizeEndEvent );
                //    }, 500);
                //}
                //Update the width and height
                winWidth = winNewWidth;
                winHeight = winNewHeight;
            });
            */
            // Setup resizeEnd event listener
            $(window).on(self.windowResizeEndEvent, function(e) {
                self.lineClamp();
            });
        },

        show: function () {
            this.$element.addClass('in');
            this.$content.height("auto");
            this.$toggle.html( this.options.strShowLess ).removeClass( this.options.cssClassToggleCollapsed );
        },

        hide: function () {
            this.$element.removeClass('in');
            this.$content.height( this.partialHeight );
            this.$toggle.html( this.options.strShowMore ).addClass( this.options.cssClassToggleCollapsed );
        },

        toggle: function () {
            this[this.$element.hasClass('in') ? 'hide' : 'show']();
        },



    // UTILITY FUNCTIONS (Originally taken from https://github.com/josephschmitt/Clamp.js)

        /**
        * Return the current style for an element.
        * @param {HTMLElement} elem The element to compute.
        * @param {string} prop The style property.
        * @returns {number}
        */
        computeStyle: function(elem, prop){
            if (!window.getComputedStyle) {
                window.getComputedStyle = function(el, pseudo) {
                    this.el = el;
                    this.getPropertyValue = function(prop) {
                        var re = /(\-([a-z]){1})/g;
                        if (prop == 'float') prop = 'styleFloat';
                        if (re.test(prop)) {
                            prop = prop.replace(re, function () {
                                return arguments[2].toUpperCase();
                            });
                        }
                        return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
                    }
                    return this;
                }
            }
            return window.getComputedStyle(elem, null).getPropertyValue(prop);
        },

        /**
        * Returns the maximum number of lines of text that should be rendered based
        * on the current height of the element and the line-height of the text.
        */
        getMaxLines: function(height){
            var element = this.$element[0],
                availHeight = height || element.clientHeight,
                lineHeight = this.getLineHeight(element);

            return Math.max(Math.floor(availHeight/lineHeight), 0);
        },

        /**
        * Returns the maximum height a given element should have based on the line-
        * height of the text and the given clamp value.
        */
        getMaxHeight: function(clmp){
            var lineHeight = this.getLineHeight(this.$element[0]);
            return lineHeight * clmp;
        },

        /**
        * Returns the line-height of an element as an integer.
        */
        getLineHeight: function(elem){
            var lh = this.computeStyle(elem, 'line-height'),
                span, options = this.options;

            if (lh == 'normal') {    
                lh = parseInt(this.computeStyle(elem, 'font-size'), 10) * options.errorThreshold;
            }
            //Fallback method for IE7 & 8
            else if( lh.indexOf('px') === -1 ){
                span = $('<span class="'+options.cssClassLineClamp+' test ">&nbsp;</span>');
                elem.parentNode.appendChild( span[0] );

                lh = span.height();
                span.remove();

                lh = lh * options.errorThreshold;
            }
            return parseInt(lh, 10);
        }
    };

    // Plugin wrapper around the constructor
    $.fn[pluginName] = function ( option ) {
        return this.each(function () {
            var $this = $(this)
            , data = $this.data("plugin_" + pluginName)
            , options = $.extend({}, $.fn[pluginName].defaults, $this.data(), typeof option == 'object' && option);
            
            //This allows the use of a jquery selector to run additional methods on an already initialized plugin
            if (!data) $this.data("plugin_" + pluginName, (data = new Plugin(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

})( jQuery, window, document );
//});
define("bootstrap-collapse-partial", ["jquery"], function(){});

(function() {

  define('views/profile/teaching/advisees_list_item',['lodash', 'backbone', 'collections/list_items', 'i18n', 'marionette', 'utils', 'hgn!../../../../templates/profile/teaching/advisees_list_item', 'bootstrap-collapse-partial'], function(_, Backbone, ListItems, i18n, Marionette, utils, AdviseesListItemTemplate) {
    
    return Marionette.ItemView.extend({
      tagName: 'li',
      template: function(data) {
        return AdviseesListItemTemplate(_.extend({}, data, {
          i18n: i18n
        }));
      },
      onRender: function() {
        var that;
        utils.enhanceByUnwrappingExtraElement(this.$el);
        that = this;
        return setTimeout(function() {
          return that.$("[data-toggle=collapsePartial], [data-toggle=collapse-partial]").collapsePartial({
            lines: 2,
            strShowMore: i18n.profile.shared.labelAllAdvisees,
            strShowLess: '<i class="icon-caret-left"></i>'
          });
        }, 100);
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/teaching/advisees_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.teaching.headerStanfordAdvisees",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("ui.stanfordAdvisees",c,p,1),c,p,0,123,173,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/teaching/advisees_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/teaching/section_advisees_listing',['marionette', 'views/profile/teaching/advisees_list_item', 'hgn!../../../../templates/profile/teaching/advisees_section'], function(Marionette, AdviseesListItemView, AdviseesTemplate) {
    
    return Marionette.CompositeView.extend({
      itemView: AdviseesListItemView,
      itemViewContainer: 'ul.section-listing',
      template: AdviseesTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/teaching/courses_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("data.coursesTaught.0.academicYear",c,p,0)));_.b(" ");_.b(_.v(_.d("i18n.profile.teaching.headerCourses",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing courses\">");_.b("\n" + i);if(_.s(_.d("data.coursesTaught.0.courses",c,p,1),c,p,0,171,221,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li class=\"course\">");_.b(_.t(_.d("label.html",c,p,0)));_.b("</li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.showIndependentStudies",c,p,1),c,p,0,291,712,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li class=\"unstyled\">");_.b("\n" + i);_.b("      <a class=\"independent-studies-label\">");_.b(_.v(_.d("i18n.profile.teaching.courses.labelIndependentStudies",c,p,0)));_.b(" (");_.b(_.v(_.d("ui.independentStudiesCount",c,p,0)));_.b(")</a>");_.b("\n" + i);_.b("      <ul class=\"section-listing independent-studies\">");_.b("\n" + i);if(_.s(_.d("data.coursesTaught.0.independentStudyCourses",c,p,1),c,p,0,574,636,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("          <li class=\"course\">");_.b(_.t(_.d("label.html",c,p,0)));_.b("</li>");_.b("\n");});c.pop();}_.b("      </ul>");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.showPriorYearCourses",c,p,1),c,p,0,777,1296,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li class=\"unstyled\">");_.b("\n" + i);_.b("      <a class=\"prior-year-courses-label\">");_.b(_.v(_.d("i18n.profile.teaching.courses.labelPriorYearCourses",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("      <div class=\"prior-year-courses\">");_.b("\n" + i);if(_.s(_.d("ui.priorYearCourses",c,p,1),c,p,0,981,1244,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("          <h4>");_.b(_.v(_.f("academicYear",c,p,0)));_.b(" ");_.b(_.v(_.d("i18n.profile.teaching.headerCourses",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("          <ul class=\"section-listing courses\">");_.b("\n" + i);if(_.s(_.f("courses",c,p,1),c,p,0,1135,1205,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("              <li class=\"course\">");_.b(_.t(_.d("label.html",c,p,0)));_.b("</li>");_.b("\n");});c.pop();}_.b("          </ul>");_.b("\n");});c.pop();}_.b("      </div>");_.b("\n" + i);_.b("    </li>");_.b("\n");});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/teaching/courses_section',['marionette', 'utils', 'views/profile/shared/section_list_item', 'hgn!../../../../templates/profile/teaching/courses_section'], function(Marionette, utils, SectionListItemView, CourseTemplate) {
    
    return Marionette.CompositeView.extend({
      itemView: SectionListItemView,
      itemViewContainer: 'ul',
      onRender: function() {
        utils.enhanceWithCollapsibleContentSection(this.$('.independent-studies-label'), [this.$('.independent-studies')], 'independent-studies');
        return utils.enhanceWithCollapsibleContentSection(this.$('.prior-year-courses-label'), [this.$('.prior-year-courses')], 'prior-year-courses');
      },
      template: CourseTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/teaching/layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h2>");_.b(_.v(_.d("i18n.profile.teaching.label",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"row-fluid\">");_.b("\n" + i);_.b("  <div class=\"span8 page-content\">");_.b("\n" + i);if(_.s(_.d("ui.showCourses",c,p,1),c,p,0,128,250,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"coursesContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/teaching/courses_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showStanfordAdvisees",c,p,1),c,p,0,311,443,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"stanfordAdviseesContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/teaching/advisees_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("    ");_.b("\n" + i);if(_.s(_.d("ui.showGraduateAndFellowshipPrograms",c,p,1),c,p,0,526,695,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"graduateAndFellowshipProgramsContent\" class=\"content-section\">");_.b("\n" + i);_.b(_.rp("profile/teaching/graduate_and_fellowship_programs_section",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/teaching/postdoctoral_advisees_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.teaching.headerPostdoctoralAdvisees",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.postdoctoralAdvisees",c,p,1),c,p,0,133,180,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/profile/teaching/graduate_and_fellowship_programs_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h3>");_.b(_.v(_.d("i18n.profile.teaching.headerGraduateAndFellowshipPrograms",c,p,0)));_.b("</h3>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);if(_.s(_.d("data.graduateAndFellowshipPrograms",c,p,1),c,p,0,151,198,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("profile/shared/section_list_item",c,p,"    "));});c.pop();}_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/teaching/layout',['collections/list_items', 'marionette', 'utils', 'views/profile/shared/section_listing', 'views/profile/teaching/section_advisees_listing', 'views/profile/teaching/courses_section', 'hgn!../../../../templates/profile/teaching/layout', 'hgn!../../../../templates/profile/teaching/postdoctoral_advisees_section', 'hgn!../../../../templates/profile/teaching/graduate_and_fellowship_programs_section'], function(ListItems, Marionette, utils, SectionListingView, SectionAdviseeListingView, CoursesView, LayoutTemplate, PostdoctoralAdviseesTemplate, GraduateAndFellowshipProgramsTemplate) {
    
    return Marionette.Layout.extend({
      onRender: function() {
        var data, i18n, ui;
        data = this.model.get('data');
        ui = this.model.get('ui');
        i18n = this.model.get('i18n');
        if (ui.showCourses) {
          this.courses.show(new CoursesView({
            model: this.model,
            collection: new ListItems(data.courses)
          }));
        }
        if (ui.showGraduateAndFellowshipPrograms) {
          this.graduateAndFellowshipPrograms.show(new SectionListingView({
            model: this.model,
            collection: new ListItems(data.graduateAndFellowshipPrograms),
            sectionHeader: i18n.profile.teaching.headerGraduateAndFellowshipPrograms,
            sectionListType: 'graduate-and-fellowship-programs',
            template: GraduateAndFellowshipProgramsTemplate
          }));
        }
        if (ui.showStanfordAdvisees) {
          return this.stanfordAdvisees.show(new SectionAdviseeListingView({
            model: this.model,
            collection: new ListItems(ui.stanfordAdvisees),
            sectionHeader: i18n.profile.teaching.headerPostdoctoralAdvisees
          }));
        }
      },
      onShow: function() {
        return utils.formatExternalLinks(this);
      },
      regions: {
        courses: '#coursesContent',
        graduateAndFellowshipPrograms: '#graduateAndFellowshipProgramsContent',
        stanfordAdvisees: '#stanfordAdviseesContent'
      },
      template: LayoutTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/tabbed_layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<nav class=\"navbar\">");_.b("\n" + i);_.b("  <div class=\"navbar-inner\">");_.b("\n" + i);_.b("    <div class=\"container\">");_.b("\n" + i);_.b("     ");_.b("\n" + i);_.b("      <!-- .btn-navbar is used as the toggle for collapsed navbar content -->");_.b("\n" + i);_.b("      <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\"#tabbedLayoutContainer .nav-collapse\">");_.b("\n" + i);_.b("        <span class=\"nav-label\">Profile Tabs Menu</span>");_.b("\n" + i);_.b("        <i class=\"icon-chevron-down\"></i>");_.b("\n" + i);_.b("      </a>");_.b("\n" + i);_.b("\n" + i);_.b("      <div class=\"nav-collapse collapse\">");_.b("\n" + i);_.b("        <ul class=\"nav nav-tabs tabs");_.b(_.v(_.d("ui.tabCount",c,p,0)));_.b("\">");_.b("\n" + i);if(_.s(_.d("ui.hasBioTab",c,p,1),c,p,0,507,738,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li class=\"");if(_.s(_.d("ui.bioTabActive",c,p,1),c,p,0,553,559,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("active");});c.pop();}_.b("\">");_.b("\n" + i);_.b("              <a id=\"bioTabLink\" href=\"");_.b(_.v(_.d("ui.bioTabUrl",c,p,0)));_.b("\" class=\"no-trigger\" rel=\"nofollow\">");_.b(_.v(_.d("i18n.profile.bio.label",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.hasResearchAndScholarshipTab",c,p,1),c,p,0,806,1118,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li class=\"");if(_.s(_.d("ui.researchAndScholarshipTabActive",c,p,1),c,p,0,871,877,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("active");});c.pop();}_.b("\">");_.b("\n" + i);_.b("              <a id=\"researchAndScholarshipTabLink\" href=\"");_.b(_.v(_.d("ui.researchAndScholarshipTabUrl",c,p,0)));_.b("\" class=\"no-trigger\" rel=\"nofollow\">");_.b(_.v(_.d("i18n.profile.research.label",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.hasTeachingTab",c,p,1),c,p,0,1191,1447,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li class=\"");if(_.s(_.d("ui.teachingTabActive",c,p,1),c,p,0,1242,1248,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("active");});c.pop();}_.b("\">");_.b("\n" + i);_.b("              <a id=\"teachingTabLink\" href=\"");_.b(_.v(_.d("ui.teachingTabUrl",c,p,0)));_.b("\" class=\"no-trigger\" rel=\"nofollow\">");_.b(_.v(_.d("i18n.profile.teaching.label",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.hasProfessionalTab",c,p,1),c,p,0,1510,1786,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li class=\"");if(_.s(_.d("ui.professionalTabActive",c,p,1),c,p,0,1565,1571,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("active");});c.pop();}_.b("\">");_.b("\n" + i);_.b("              <a id=\"professionalTabLink\" href=\"");_.b(_.v(_.d("ui.professionalTabUrl",c,p,0)));_.b("\" class=\"no-trigger\" rel=\"nofollow\">");_.b(_.v(_.d("i18n.profile.professional.label",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </li>");_.b("\n");});c.pop();}if(_.s(_.d("ui.hasPublicationsTab",c,p,1),c,p,0,1853,2129,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li class=\"");if(_.s(_.d("ui.publicationsTabActive",c,p,1),c,p,0,1908,1914,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("active");});c.pop();}_.b("\">");_.b("\n" + i);_.b("              <a id=\"publicationsTabLink\" href=\"");_.b(_.v(_.d("ui.publicationsTabUrl",c,p,0)));_.b("\" class=\"no-trigger\" rel=\"nofollow\">");_.b(_.v(_.d("i18n.profile.publications.label",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </li>");_.b("\n");});c.pop();}_.b("        </ul>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("     ");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</nav>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"container breakout-phone\">");_.b("\n" + i);_.b("  <div class=\"tab-content\">");_.b("\n" + i);if(_.s(_.d("ui.hasBioTab",c,p,1),c,p,0,2309,2455,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"bio\" class=\"card tab-pane ");if(_.s(_.d("ui.bioTabActive",c,p,1),c,p,0,2373,2379,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("active");});c.pop();}_.b("\">");_.b("\n" + i);_.b(_.rp("profile/bio/layout",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}if(_.s(_.d("ui.hasResearchAndScholarshipTab",c,p,1),c,p,0,2517,2743,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"research-and-scholarship\" class=\"card tab-pane ");if(_.s(_.d("ui.researchAndScholarshipTabActive",c,p,1),c,p,0,2621,2627,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("active");});c.pop();}_.b("\">");_.b("\n" + i);_.b(_.rp("profile/research_and_scholarship/layout",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}if(_.s(_.d("ui.hasTeachingTab",c,p,1),c,p,0,2810,2976,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"teaching\" class=\"card tab-pane ");if(_.s(_.d("ui.teachingTabActive",c,p,1),c,p,0,2884,2890,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("active");});c.pop();}_.b("\">");_.b("\n" + i);_.b(_.rp("profile/teaching/layout",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}if(_.s(_.d("ui.hasProfessionalTab",c,p,1),c,p,0,3033,3215,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"professional\" class=\"card tab-pane ");if(_.s(_.d("ui.professionalTabActive",c,p,1),c,p,0,3115,3121,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("active");});c.pop();}_.b("\">");_.b("\n" + i);_.b(_.rp("profile/professional/layout",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}if(_.s(_.d("ui.hasPublicationsTab",c,p,1),c,p,0,3276,3458,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <div id=\"publications\" class=\"card tab-pane ");if(_.s(_.d("ui.publicationsTabActive",c,p,1),c,p,0,3358,3364,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("active");});c.pop();}_.b("\">");_.b("\n" + i);_.b(_.rp("profile/publications/layout",c,p,"        "));_.b("      </div>");_.b("\n");});c.pop();}_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

/* ========================================================
 * bootstrap-tab.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

   // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active a').last()[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB DATA-API
  * ============ */

  $(function () {
    $('body').on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  })

}(window.jQuery);
define("bootstrap-tab", ["jquery"], function(){});

(function() {

  define('views/profile/tabbed_layout',['lodash', 'marionette', 'views/profile/bio/layout', 'views/profile/professional/layout', 'views/profile/publications/layout', 'views/profile/research_and_scholarship/layout', 'views/profile/teaching/layout', 'hgn!../../../templates/profile/tabbed_layout', 'bootstrap-tab'], function(_, Marionette, BioLayoutTemplate, ProfessionalLayoutTemplate, PublicationsLayoutTemplate, ResearchAndScholarshipLayoutTemplate, TeachingLayoutTemplate, TabbedLayoutTemplate) {
    
    return Marionette.Layout.extend({
      onRender: function() {
        var tabsContainer, ui;
        ui = this.model.get('ui');
        tabsContainer = this.$('.nav-tabs');
        if (ui.hasBioTab) {
          this.$('a#bioTabLink').attr({
            'data-toggle': 'tab',
            'data-target': '#bio'
          });
        }
        if (ui.hasProfessionalTab) {
          this.$('a#professionalTabLink').attr({
            'data-toggle': 'tab',
            'data-target': '#professional'
          });
        }
        if (ui.hasPublicationsTab) {
          this.$('a#publicationsTabLink').attr({
            'data-toggle': 'tab',
            'data-target': '#publications'
          });
        }
        if (ui.hasResearchAndScholarshipTab) {
          this.$('a#researchAndScholarshipTabLink').attr({
            'data-toggle': 'tab',
            'data-target': '#research-and-scholarship'
          });
        }
        if (ui.hasTeachingTab) {
          this.$('a#teachingTabLink').attr({
            'data-toggle': 'tab',
            'data-target': '#teaching'
          });
        }
        tabsContainer.addClass('tabs' + ui.tabCount);
        if (ui.hasBioTab) {
          this.bioTab.show(new BioLayoutTemplate({
            model: this.model
          }));
        }
        if (ui.hasProfessionalTab) {
          this.professionalTab.show(new ProfessionalLayoutTemplate({
            model: this.model
          }));
        }
        if (ui.hasPublicationsTab) {
          this.publicationsTab.show(new PublicationsLayoutTemplate({
            model: this.model,
            config: this.options.config
          }));
        }
        if (ui.hasResearchAndScholarshipTab) {
          this.researchTab.show(new ResearchAndScholarshipLayoutTemplate({
            model: this.model
          }));
        }
        if (ui.hasTeachingTab) {
          this.teachingTab.show(new TeachingLayoutTemplate({
            model: this.model
          }));
        }
        return this.updateSelectedMenuItemDropdown();
      },
      regions: {
        bioTab: '#bio',
        researchTab: '#research-and-scholarship',
        teachingTab: '#teaching',
        professionalTab: '#professional',
        publicationsTab: '#publications'
      },
      template: TabbedLayoutTemplate,
      events: {
        "click .navbar .nav-collapse li a": 'updateMenuItem',
        'shown a[data-toggle="tab"]': 'updateAllAuthors'
      },
      updateMenuItem: function(e) {
        this.updateSelectedMenuItemDropdown(e);
        if (this.$(".navbar .nav-collapse").hasClass("in")) {
          return this.$(".navbar .nav-collapse").collapse('hide');
        }
      },
      updateSelectedMenuItemDropdown: function(e) {
        var text;
        text = e ? $(e.target).text() : this.$('.nav-collapse li.active a').text();
        return this.$(".navbar .btn-navbar .nav-label").html(text);
      },
      updateAllAuthors: function(e) {
        return $("[data-toggle=collapsePartial], [data-toggle=collapse-partial]").collapsePartial("lineClamp");
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/profile/main_layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<section id=\"mastheadContainer\" class=\"banner profile\">");_.b("\n" + i);_.b(_.rp("profile/masthead",c,p,"  "));_.b("</section>");_.b("\n" + i);_.b("<section id=\"tabbedLayoutContainer\">");_.b("\n" + i);_.b(_.rp("profile/tabbed_layout",c,p,"  "));_.b("</section>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/profile/layout',['marionette', 'utils', 'vent', 'views/profile/masthead', 'views/profile/tabbed_layout', 'hgn!../../../templates/profile/main_layout'], function(Marionette, utils, vent, MastheadView, TabbedLayoutView, MainLayoutTemplate) {
    
    return Marionette.Layout.extend({
      onRender: function() {
        var i18n, pageTitle, ui;
        i18n = this.model.get('i18n');
        ui = this.model.get('ui');
        pageTitle = this.model.get('data').displayName + ' | ' + i18n.header.labelStanfordMedicine;
        vent.trigger('action:updatePageTitle', pageTitle);
        vent.trigger('action:updateMetaDescription', i18n.header.metaDescription.profile.replace("{0}", this.model.get('data').displayName));
        vent.trigger('action:updatePageIdentifier', 'profile');
        vent.trigger('action:header:showSearch');
        this.masthead.show(new MastheadView({
          model: this.model
        }));
        if (ui.hasBioTab || ui.hasResearchAndScholarshipTab || ui.hasProfessionalTab || ui.hasTeachingTab || ui.hasPublicationsTab) {
          return this.tabbedLayout.show(new TabbedLayoutView({
            model: this.model,
            config: this.options.config
          }));
        }
      },
      onShow: function() {
        utils.clearBadPhotos();
        return utils.formatExternalLinks(this);
      },
      regions: {
        masthead: "#mastheadContainer",
        tabbedLayout: "#tabbedLayoutContainer"
      },
      template: MainLayoutTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/search_results/list_item", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<li>");_.b("\n" + i);_.b("  <div class=\"mini-profile media\">");_.b("\n" + i);_.b("    <a href=\"");_.b(_.v(_.f("profileUrl",c,p,0)));_.b("\">");_.b("\n" + i);_.b("      <img class=\"pull-left\" src=\"");_.b(_.v(_.d("photos.square.url",c,p,0)));_.b("\" alt=\"");_.b(_.v(_.f("displayName",c,p,0)));_.b("\" data-empty-src=\"");_.b(_.v(_.d("config.baseUrl",c,p,0)));_.b("/images/profile-large-blank.png\" />");_.b("\n" + i);_.b("    </a>");_.b("\n" + i);_.b("    <div class=\"media-body\">");_.b("\n" + i);_.b("      <a href=\"");_.b(_.v(_.f("profileUrl",c,p,0)));_.b("\" class=\"media-heading\">");_.b("\n" + i);_.b("        <h4>");_.b(_.v(_.f("displayName",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("        <h5>");_.b(_.t(_.f("shortTitle",c,p,0)));_.b("</h5>");_.b("\n" + i);_.b("      </a>");_.b("\n" + i);_.b("      ");_.b("\n" + i);if(_.s(_.f("matchType",c,p,1),c,p,0,430,672,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <p class=\"keyword-matches\">");_.b("\n" + i);_.b("        <span>Matches in:</span>");_.b("\n" + i);_.b("        <span class=\"keywords\">");_.b("\n" + i);if(_.s(_.f("sections",c,p,1),c,p,0,555,625,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("          <span class=\"label label-info\">");_.b(_.v(_.f("name",c,p,0)));_.b("</span>");_.b("\n");});c.pop();}_.b("        </span>");_.b("\n" + i);_.b("      </p>");_.b("\n");});c.pop();}_.b("\n" + i);_.b("      <p class=\"hidden-phone\" data-toggle=\"collapsePartial\" data-lines=\"4\">");_.b("\n" + i);_.b("        <strong class=\"title\">");_.b(_.v(_.f("descriptionHeader",c,p,0)));_.b("</strong>");_.b("\n" + i);_.b("        ");_.b(_.t(_.f("description",c,p,0)));_.b("\n" + i);_.b("      </p>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</li>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/search_results/list_item',['i18n', 'marionette', 'utils', 'hgn!../../../templates/search_results/list_item', 'bootstrap-collapse-partial'], function(i18n, Marionette, utils, ListItemTemplate) {
    
    return Marionette.ItemView.extend({
      tagName: 'li',
      template: ListItemTemplate,
      initialize: function(options) {
        return this.model.set('config', options.config);
      },
      onRender: function() {
        var that;
        utils.enhanceByUnwrappingExtraElement(this.$el);
        utils.clearBadPhotos();
        that = this;
        return setTimeout(function() {
          return that.$("[data-toggle=collapsePartial], [data-toggle=collapse-partial]").collapsePartial({
            lines: 2,
            strShowMore: '<i class="icon-caret-right"></i>' + i18n.profile.shared.labelMore,
            strShowLess: '<i class="icon-caret-up"></i>' + i18n.profile.shared.labelHide
          });
        }, 100);
      }
    });
  });

}).call(this);

/* ===========================================================
 * bootstrap-popover.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

   // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content > *')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = $e.attr('data-content')
        || (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
  })

}(window.jQuery);
define("bootstrap-popover", ["bootstrap-tooltip"], function(){});

(function() {

  define('views/search_results/list',['lodash', 'marionette', 'views/search_results/list_item', 'bootstrap-popover'], function(_, Marionette, ListItemView) {
    
    return Marionette.CompositeView.extend({
      events: {
        'click a.disabled': 'disableClick'
      },
      itemView: ListItemView,
      itemViewContainer: 'ul.list-items',
      itemViewOptions: function(model, index) {
        return {
          config: this.options.model.get("config")
        };
      },
      onBeforeClose: function() {
        return this.$('.btn-page-jumper').popover('hide');
      },
      onRender: function() {
        var data, i18n, ui;
        data = this.model.get('data');
        i18n = this.model.get('i18n');
        ui = this.model.get('ui');
        if (ui.pageUrls) {
          return this.$('.btn-page-jumper').popover({
            trigger: 'hover',
            title: i18n.searchResults.list.labelJumpToPage,
            placement: 'in top',
            content: function() {
              var result;
              result = '';
              _.forEach(ui.pageUrls, function(pageUrl, idx) {
                if (idx === ((data.page + 1) + '')) {
                  return result += '<span>' + idx + '</span>';
                } else {
                  return result += '<a href="' + pageUrl + '">' + idx + '</a>';
                }
              });
              return result;
            }
          });
        }
      },
      disableClick: function(evt) {
        evt.preventDefault();
        return evt.stopPropagation();
      }
    });
  });

}).call(this);

define("hgn!views/../../templates/search_results/filter_list_item", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"filter-group accordion-group\">");_.b("\n" + i);_.b("  <h2 class=\"accordion-heading\">");_.b("\n" + i);_.b("    <a class=\"accordian-toggle\" href=\"");_.b(_.v(_.f("targetUrl",c,p,0)));_.b("\">");_.b(_.v(_.f("label",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("  </h2>");_.b("\n" + i);_.b("  <div class=\"accordian-body\">");_.b("\n" + i);_.b("    <ul class=\"unstyled accordian-inner ");_.b(_.v(_.f("type",c,p,0)));_.b("\">");_.b("\n" + i);if(_.s(_.f("filterItems",c,p,1),c,p,0,263,2471,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <li class=\"");if(_.s(_.f("active",c,p,1),c,p,0,296,304,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("selected");});c.pop();}_.b(" ");if(_.s(_.f("hasChildren",c,p,1),c,p,0,336,344,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("children");});c.pop();}_.b("\">");_.b("\n" + i);if(_.s(_.f("active",c,p,1),c,p,0,388,443,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <i class=\"icon-arrow-left\"></i>");_.b("\n");});c.pop();}if(_.s(_.f("url",c,p,1),c,p,0,477,741,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("\">");_.b("\n" + i);if(!_.s(_.f("active",c,p,1),c,p,1,0,0,"")){if(_.s(_.f("hasChildren",c,p,1),c,p,0,573,641,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                  <i class=\"icon-caret-right\"></i>");_.b("\n");});c.pop();}};_.b("              ");_.b(_.v(_.f("label",c,p,0)));_.b("\n" + i);_.b("            </a>");_.b("\n");});c.pop();}if(!_.s(_.f("url",c,p,1),c,p,1,0,0,"")){_.b("            <span>");_.b(_.v(_.f("label",c,p,0)));_.b("</span>");_.b("\n");};if(_.s(_.f("hasChildren",c,p,1),c,p,0,859,2432,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <ul class=\"unstyled\">");_.b("\n" + i);if(_.s(_.f("children",c,p,1),c,p,0,923,2388,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                <li class=\"");if(_.s(_.f("active",c,p,1),c,p,0,964,972,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("selected");});c.pop();}_.b(" ");if(_.s(_.f("hasChildren",c,p,1),c,p,0,1004,1012,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("children");});c.pop();}_.b("\">");_.b("\n" + i);if(_.s(_.f("active",c,p,1),c,p,0,1064,1135,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                    <i class=\"icon-arrow-left\"></i>");_.b("\n");});c.pop();}if(_.s(_.f("url",c,p,1),c,p,0,1177,1513,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                    <a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("\">");_.b("\n" + i);if(!_.s(_.f("active",c,p,1),c,p,1,0,0,"")){if(_.s(_.f("hasChildren",c,p,1),c,p,0,1297,1381,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                          <i class=\"icon-caret-right\"></i>");_.b("\n");});c.pop();}};_.b("                      ");_.b(_.v(_.f("label",c,p,0)));_.b("\n" + i);_.b("                    </a>");_.b("\n");});c.pop();}if(!_.s(_.f("url",c,p,1),c,p,1,0,0,"")){_.b("                    <span>");_.b(_.v(_.f("label",c,p,0)));_.b("</span>");_.b("\n");};if(_.s(_.f("hasChildren",c,p,1),c,p,0,1663,2333,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                    <ul class=\"unstyled\">");_.b("\n" + i);if(_.s(_.f("children",c,p,1),c,p,0,1743,2273,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                        <li class=\"");if(_.s(_.f("active",c,p,1),c,p,0,1792,1800,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("selected");});c.pop();}_.b("\">");_.b("\n" + i);if(_.s(_.f("active",c,p,1),c,p,0,1855,1942,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                            <i class=\"icon-arrow-left\"></i>");_.b("\n");});c.pop();}if(_.s(_.f("url",c,p,1),c,p,0,1992,2083,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                            <a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("\">");_.b(_.v(_.f("label",c,p,0)));_.b("</a>");_.b("\n");});c.pop();}if(!_.s(_.f("url",c,p,1),c,p,1,0,0,"")){_.b("                            <span>");_.b(_.v(_.f("label",c,p,0)));_.b("</span>");_.b("\n");};_.b("                        </li>");_.b("\n");});c.pop();}_.b("                    </ul>");_.b("\n");});c.pop();}_.b("                </li>");_.b("\n");});c.pop();}_.b("            </ul>");_.b("\n");});c.pop();}_.b("        </li>");_.b("\n");});c.pop();}_.b("    </ul>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/search_results/filter_list_item',['marionette', 'utils', 'hgn!../../../templates/search_results/filter_list_item'], function(Marionette, utils, FilterListItemTemplate) {
    
    return Marionette.ItemView.extend({
      onRender: function() {
        return utils.enhanceByUnwrappingExtraElement(this.$el);
      },
      template: FilterListItemTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/search_results/filter_list", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");if(_.s(_.d("ui.showBrowse",c,p,1),c,p,0,20,79,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  <h1>");_.b(_.v(_.d("i18n.searchResults.filters.label",c,p,0)));_.b("</h1>");_.b("\n" + i);_.b("  <hr/>");_.b("\n");});c.pop();}_.b("<div id=\"filterItems\" class=\"accordian\">");_.b("\n" + i);if(_.s(_.d("ui.filterLists",c,p,1),c,p,0,164,210,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("search_results/filter_list_item",c,p,"    "));});c.pop();}_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/search_results/filter_list',['marionette', 'views/search_results/filter_list_item', 'hgn!../../../templates/search_results/filter_list'], function(Marionette, FilterListItemView, FilterListTemplate) {
    
    return Marionette.CompositeView.extend({
      itemView: FilterListItemView,
      itemViewContainer: 'div',
      template: FilterListTemplate
    });
  });

}).call(this);

define("hgn!views/../../templates/search_results/layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<section class=\"banner\">");_.b("\n" + i);_.b("  <div class=\"container\">");_.b("\n" + i);_.b("    <div class=\"row-fluid\"></div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</section>");_.b("\n" + i);_.b("<div class=\"container breakout-phone\">");_.b("\n" + i);_.b("  <div class=\"row-fluid\">");_.b("\n" + i);_.b("    <section class=\"card span8\">");_.b("\n" + i);if(_.s(_.d("ui.showBrowse",c,p,1),c,p,0,229,333,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <div id=\"browseListContent\">");_.b("\n" + i);_.b(_.rp("search_results/browse_list",c,p,"          "));_.b("        </div>");_.b("\n");});c.pop();}if(_.s(_.d("ui.showExactNameMatches",c,p,1),c,p,0,390,506,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <div id=\"exactNameMatchListContent\">");_.b("\n" + i);_.b(_.rp("search_results/exact_name_list",c,p,"          "));_.b("        </div>");_.b("\n");});c.pop();}if(_.s(_.d("ui.showKeywordMatches",c,p,1),c,p,0,571,682,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <div id=\"keywordMatchListContent\"> ");_.b("\n" + i);_.b(_.rp("search_results/keyword_list",c,p,"          "));_.b("        </div>");_.b("\n");});c.pop();}if(_.s(_.d("ui.noResultsMessage",c,p,1),c,p,0,743,844,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <div id=\"noResultsContent\">");_.b("\n" + i);_.b(_.rp("search_results/no_results",c,p,"          "));_.b("        </div>");_.b("\n");});c.pop();}_.b("    </section>");_.b("\n" + i);_.b("    <aside id=\"filterContent\" class=\"span4 hidden-phone\">");_.b("\n" + i);if(_.s(_.d("ui.showAside",c,p,1),c,p,0,969,1018,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("search_results/filter_list",c,p,"        "));});c.pop();}_.b("    </aside>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("  ");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/search_results/browse_list", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h1><span class=\"loading\">");_.b(_.t(_.d("ui.pageHeader",c,p,0)));_.b("</span></h1>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<h2 class=\"subhead\">");_.b(_.v(_.d("ui.pageSubHeader",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("<ul class=\"unstyled list-items\">");_.b("\n" + i);if(_.s(_.d("ui.browseMatches",c,p,1),c,p,0,172,211,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("search_results/list_item",c,p,"    "));});c.pop();}_.b("</ul>");_.b("\n" + i);if(_.s(_.d("ui.showPagingControls",c,p,1),c,p,0,269,2179,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  <div id=\"pagination\">");_.b("\n" + i);_.b("    <div class=\"btn-toolbar btn-block\">");_.b("\n" + i);_.b("      <div class=\"btn-group \">");_.b("\n" + i);_.b("        <a class=\"btn btn-small btn-first-page ");if(!_.s(_.d("ui.firstPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.firstPageUrl",c,p,0)));_.b("\">");_.b("\n" + i);_.b("          <span class=\"hidden-phone\">");_.b(_.v(_.d("i18n.searchResults.list.buttonFirst",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("          <span class=\"hidden-desktop hidden-tablet icon-double-angle-left\"></span>");_.b("\n" + i);_.b("        </a>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("  		<div class=\"btn-group\">");_.b("\n" + i);_.b("  			<a class=\"btn btn-small btn-previous-page ");if(!_.s(_.d("ui.previousPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.previousPageUrl",c,p,0)));_.b("\"><i class=\"icon-chevron-left\"></i></a>");_.b("\n" + i);_.b("  			<a class=\"btn btn-small btn-page-jumper\" rel=\"popover\">");_.b(_.v(_.d("ui.rangeLabel",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("        <a class=\"btn btn-small btn-next-page ");if(!_.s(_.d("ui.nextPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.nextPageUrl",c,p,0)));_.b("\"><i class=\"icon-chevron-right\"></i></a>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("      <div class=\"btn-group\">");_.b("\n" + i);_.b("      	<a class=\"btn btn-small btn-last-page ");if(!_.s(_.d("ui.lastPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.lastPageUrl",c,p,0)));_.b("\">");_.b("\n" + i);_.b("          <span class=\"hidden-phone\">");_.b(_.v(_.d("i18n.searchResults.list.buttonLast",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("          <span class=\"hidden-desktop hidden-tablet icon-double-angle-right\"></span>");_.b("\n" + i);_.b("        </a>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    	<div class=\"btn-group dropup\">");_.b("\n" + i);_.b("        <button class=\"btn btn-small dropdown-toggle\" data-toggle=\"dropdown\">");_.b("\n" + i);_.b("          <span class=\"hidden-phone\">");_.b(_.v(_.d("ui.resultsPerPage",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("          <span class=\"hidden-desktop hidden-tablet\">");_.b(_.v(_.d("ui.resultsPerPagePhone",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("          <span class=\"icon-caret-down\"></span>");_.b("\n" + i);_.b("        </button>");_.b("\n" + i);_.b("        <ul class=\"dropdown-menu\">");_.b("\n" + i);_.b("          <li><a href=\"");_.b(_.v(_.d("ui.view10PerPageUrl",c,p,0)));_.b("\">10</a></li>");_.b("\n" + i);_.b("          <li><a href=\"");_.b(_.v(_.d("ui.view20PerPageUrl",c,p,0)));_.b("\">20</a></li>");_.b("\n" + i);_.b("          <li><a href=\"");_.b(_.v(_.d("ui.view50PerPageUrl",c,p,0)));_.b("\">50</a></li>");_.b("\n" + i);_.b("          <li><a href=\"");_.b(_.v(_.d("ui.view100PerPageUrl",c,p,0)));_.b("\">100</a></li>");_.b("\n" + i);_.b("        </ul>");_.b("\n" + i);_.b("    	</div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n");});c.pop();}return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/search_results/exact_name_list", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h1><span class=\"loading\">");_.b(_.t(_.d("ui.exactPageHeader",c,p,0)));_.b("</span></h1>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<ul class=\"unstyled list-items\">");_.b("\n" + i);if(_.s(_.d("ui.exactNameMatches",c,p,1),c,p,0,132,171,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("search_results/list_item",c,p,"    "));});c.pop();}_.b("</ul>");_.b("\n" + i);if(!_.s(_.d("ui.showKeywordMatches",c,p,1),c,p,1,0,0,"")){if(_.s(_.d("ui.showPagingControls",c,p,1),c,p,0,263,1860,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <div id=\"pagination\">");_.b("\n" + i);_.b("      <div class=\"btn-toolbar btn-block\">");_.b("\n" + i);_.b("        <div class=\"btn-group \">");_.b("\n" + i);_.b("          <a class=\"btn btn-small btn-first-page ");if(!_.s(_.d("ui.firstPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.firstPageUrl",c,p,0)));_.b("\">");_.b(_.v(_.d("i18n.searchResults.list.buttonFirst",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <div class=\"btn-group\">");_.b("\n" + i);_.b("          <a class=\"btn btn-small btn-previous-page ");if(!_.s(_.d("ui.previousPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.previousPageUrl",c,p,0)));_.b("\"><i class=\"icon-chevron-left\"></i></a>");_.b("\n" + i);_.b("          <a class=\"btn btn-small btn-page-jumper\" rel=\"popover\">");_.b(_.v(_.d("ui.rangeLabel",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("          <a class=\"btn btn-small btn-next-page ");if(!_.s(_.d("ui.nextPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.nextPageUrl",c,p,0)));_.b("\"><i class=\"icon-chevron-right\"></i></a>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <div class=\"btn-group\">");_.b("\n" + i);_.b("          <a class=\"btn btn-small btn-last-page ");if(!_.s(_.d("ui.lastPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.lastPageUrl",c,p,0)));_.b("\">");_.b(_.v(_.d("i18n.searchResults.list.buttonLast",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <div class=\"btn-group\">");_.b("\n" + i);_.b("          <button class=\"btn btn-small\">");_.b(_.v(_.d("ui.resultsPerPage",c,p,0)));_.b("</button>");_.b("\n" + i);_.b("          <button class=\"btn btn-small dropdown-toggle\" data-toggle=\"dropdown\">");_.b("\n" + i);_.b("            <span class=\"caret\"></span>");_.b("\n" + i);_.b("          </button>");_.b("\n" + i);_.b("          <ul class=\"dropdown-menu\">");_.b("\n" + i);_.b("            <li><a href=\"");_.b(_.v(_.d("ui.view10PerPageUrl",c,p,0)));_.b("\">10</a></li>");_.b("\n" + i);_.b("            <li><a href=\"");_.b(_.v(_.d("ui.view20PerPageUrl",c,p,0)));_.b("\">20</a></li>");_.b("\n" + i);_.b("            <li><a href=\"");_.b(_.v(_.d("ui.view50PerPageUrl",c,p,0)));_.b("\">50</a></li>");_.b("\n" + i);_.b("            <li><a href=\"");_.b(_.v(_.d("ui.view100PerPageUrl",c,p,0)));_.b("\">100</a></li>");_.b("\n" + i);_.b("          </ul>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n");});c.pop();}};return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/search_results/keyword_list", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h1><span class=\"loading\">");_.b(_.t(_.d("ui.keywordPageHeader",c,p,0)));_.b("</span></h1>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<h2 class=\"subhead\">");_.b(_.v(_.d("ui.pageSubHeader",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("<ul class=\"unstyled list-items\">");_.b("\n" + i);if(_.s(_.d("ui.keywordMatches",c,p,1),c,p,0,180,219,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("search_results/list_item",c,p,"    "));});c.pop();}_.b("</ul>");_.b("\n" + i);if(_.s(_.d("ui.showPagingControls",c,p,1),c,p,0,278,1765,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<div id=\"pagination\">");_.b("\n" + i);_.b("  <div class=\"btn-toolbar btn-block\">");_.b("\n" + i);_.b("    <div class=\"btn-group \">");_.b("\n" + i);_.b("      <a class=\"btn btn-small btn-first-page ");if(!_.s(_.d("ui.firstPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.firstPageUrl",c,p,0)));_.b("\">");_.b(_.v(_.d("i18n.searchResults.list.buttonFirst",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"btn-group\">");_.b("\n" + i);_.b("      <a class=\"btn btn-small btn-previous-page ");if(!_.s(_.d("ui.previousPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.previousPageUrl",c,p,0)));_.b("\"><i class=\"icon-chevron-left\"></i></a>");_.b("\n" + i);_.b("      <a class=\"btn btn-small btn-page-jumper\" rel=\"popover\">");_.b(_.v(_.d("ui.rangeLabel",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("      <a class=\"btn btn-small btn-next-page ");if(!_.s(_.d("ui.nextPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.nextPageUrl",c,p,0)));_.b("\"><i class=\"icon-chevron-right\"></i></a>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"btn-group\">");_.b("\n" + i);_.b("      <a class=\"btn btn-small btn-last-page ");if(!_.s(_.d("ui.lastPageUrl",c,p,1),c,p,1,0,0,"")){_.b("disabled");};_.b("\" href=\"");_.b(_.v(_.d("ui.lastPageUrl",c,p,0)));_.b("\">");_.b(_.v(_.d("i18n.searchResults.list.buttonLast",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"btn-group\">");_.b("\n" + i);_.b("      <button class=\"btn btn-small\">");_.b(_.v(_.d("ui.resultsPerPage",c,p,0)));_.b("</button>");_.b("\n" + i);_.b("      <button class=\"btn btn-small dropdown-toggle\" data-toggle=\"dropdown\">");_.b("\n" + i);_.b("        <span class=\"caret\"></span>");_.b("\n" + i);_.b("      </button>");_.b("\n" + i);_.b("      <ul class=\"dropdown-menu\">");_.b("\n" + i);_.b("        <li><a href=\"");_.b(_.v(_.d("ui.view10PerPageUrl",c,p,0)));_.b("\">10</a></li>");_.b("\n" + i);_.b("        <li><a href=\"");_.b(_.v(_.d("ui.view20PerPageUrl",c,p,0)));_.b("\">20</a></li>");_.b("\n" + i);_.b("        <li><a href=\"");_.b(_.v(_.d("ui.view50PerPageUrl",c,p,0)));_.b("\">50</a></li>");_.b("\n" + i);_.b("        <li><a href=\"");_.b(_.v(_.d("ui.view100PerPageUrl",c,p,0)));_.b("\">100</a></li>");_.b("\n" + i);_.b("      </ul>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");_.b("\n");});c.pop();}return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!views/../../templates/search_results/no_results", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h1>");_.b(_.v(_.d("ui.noResultsMessage",c,p,0)));_.b("</h1>");_.b("\n" + i);_.b("<hr/>");_.b("\n" + i);_.b("<h2 class=\"subhead noresult\">Suggestions</h2>");_.b("\n" + i);_.b("<ul class=\"section-listing\">");_.b("\n" + i);_.b("  <li><span>Make sure all words are spelled correctly.</span></li>");_.b("\n" + i);_.b("  <li><span>Try different keywords.</span></li>");_.b("\n" + i);_.b("  <li><span>Try more general and meaningful keywords.</span></li>");_.b("\n" + i);_.b("  <li><a href=\"");_.b(_.v(_.d("data.meta.stanfordOnlyViewUrl.href",c,p,0)));_.b("\">Try searching \"");_.b(_.v(_.d("ui.query",c,p,0)));_.b("\" in Stanford-Only Results <i class=\"icon-caret-right\"></i></a></li>");_.b("\n" + i);_.b("</ul>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

(function() {

  define('views/search_results/layout',['backbone', 'marionette', 'utils', 'vent', 'views/search_results/list', 'views/search_results/filter_list', 'hgn!../../../templates/search_results/layout', 'hgn!../../../templates/search_results/browse_list', 'hgn!../../../templates/search_results/exact_name_list', 'hgn!../../../templates/search_results/keyword_list', 'hgn!../../../templates/search_results/no_results', 'hgn!../../../templates/shared/stanford_only_tooltip', 'bootstrap-popover'], function(Backbone, Marionette, utils, vent, ProfileListView, FilterListView, LayoutTemplate, BrowseListTemplate, ExactNameListTemplate, KeywordListTemplate, NoResultsTemplate, StanfordOnlyTooltipTemplate) {
    
    return Marionette.Layout.extend({
      onBeforeClose: function() {
        return this.$('a[data-toggle=tooltip]').popover('hide');
      },
      onRender: function() {
        var count, data, element, filterSection, i18n, id, index, keyword, keywords, pageTitle, person, px, section, that, ui, values, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1;
        ui = this.model.get('ui');
        i18n = this.model.get('i18n');
        pageTitle = i18n.searchResults.page.title.replace('{0}', this.options.criteria) + ' | ' + i18n.shared.page.title;
        vent.trigger('action:updatePageTitle', pageTitle);
        vent.trigger('action:updateMetaDescription', pageTitle);
        vent.trigger('action:updatePageIdentifier', 'search');
        vent.trigger('action:header:showSearch');
        window.scrollTo(0, 0);
        if (ui.noResultsMessage) {
          return this.noResults.show(new Marionette.ItemView({
            model: this.model,
            template: NoResultsTemplate
          }));
        } else {
          data = this.model.get('data');
          count = data.count;
          if (count && count === 1) {
            id = data.values[0].profileId;
            if (id && id > 0) {
              return vent.trigger('route:showProfile', id);
            }
          } else {
            if (ui.showBrowse) {
              this.browseList.show(new ProfileListView({
                model: this.model,
                collection: new Backbone.Collection(ui.browseMatches),
                template: BrowseListTemplate
              }));
            }
            if (ui.showExactNameMatches) {
              this.exactNameMatchList.show(new ProfileListView({
                model: this.model,
                collection: new Backbone.Collection(ui.exactNameMatches),
                template: ExactNameListTemplate
              }));
            }
            if (ui.showKeywordMatches) {
              keywords = [];
              filterSection = {};
              values = this.model.get("data").values;
              for (index = _i = 0, _len = values.length; _i < _len; index = ++_i) {
                element = values[index];
                if (element.matchType === "KEYWORD") {
                  _ref = ui.keywordMatches;
                  for (px = _j = 0, _len1 = _ref.length; _j < _len1; px = ++_j) {
                    person = _ref[px];
                    if (person.profileId === element.profileId) {
                      ui.keywordMatches[px].matchType = element.matchType;
                      ui.keywordMatches[px].sections = element.sections;
                    }
                  }
                  _ref1 = element.sections;
                  for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
                    section = _ref1[_k];
                    if ($.inArray(section.name, keywords) === -1) {
                      keywords.push(section.name);
                    }
                  }
                }
              }
              if (keywords.length > 0) {
                filterSection.filterItems = [];
                for (_l = 0, _len3 = keywords.length; _l < _len3; _l++) {
                  keyword = keywords[_l];
                  filterSection.filterItems.push({
                    label: keyword,
                    url: '',
                    active: false,
                    hasChildren: false
                  });
                }
                filterSection.label = "Matches in";
                filterSection.type = "keywordMatchesIn";
                ui.filterLists.push(filterSection);
              }
              this.keywordMatchList.show(new ProfileListView({
                model: this.model,
                collection: new Backbone.Collection(ui.keywordMatches),
                template: KeywordListTemplate
              }));
            }
            if (ui.showAside) {
              this.filters.show(new FilterListView({
                model: this.model,
                collection: new Backbone.Collection(ui.filterLists)
              }));
            }
            this.$('a[data-toggle=tooltip]').popover({
              trigger: 'hover',
              placement: 'in bottom',
              content: function() {
                return StanfordOnlyTooltipTemplate({
                  i18n: i18n,
                  description: i18n.searchResults.stanfordOnly.description
                });
              }
            });
            that = this;
            return setTimeout(function() {
              return that.$('#filterContent .filter-group').each(function(index) {
                return $(this).addClass('nth-child-' + (index + 1));
              });
            }, 1000);
          }
        }
      },
      onShow: function() {
        return utils.clearBadPhotos();
      },
      regions: {
        filters: '#filterContent',
        browseList: '#browseListContent',
        exactNameMatchList: '#exactNameMatchListContent',
        keywordMatchList: '#keywordMatchListContent',
        noResults: '#noResultsContent'
      },
      template: LayoutTemplate
    });
  });

}).call(this);

(function() {

  define('views/search_results/browse_layout',['vent', 'views/search_results/layout'], function(vent, LayoutView) {
    
    return LayoutView.extend({
      onRender: function() {
        var data, i18n, pageTitle;
        LayoutView.prototype.onRender.apply(this, arguments);
        data = this.model.get('data');
        i18n = this.model.get('i18n');
        pageTitle = i18n.browse.page.title.replace('{0}', data.meta.summary.orgTree.name) + ' | ' + i18n.shared.page.title;
        vent.trigger('action:updatePageTitle', pageTitle);
        vent.trigger('action:updateMetaDescription', pageTitle);
        return vent.trigger('action:updatePageIdentifier', 'browse');
      }
    });
  });

}).call(this);

define("hgn!../templates/shared/blank_state_section", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<section class=\"banner\">");_.b("\n" + i);_.b("  <div class=\"container\">");_.b("\n" + i);_.b("    <div class=\"row-fluid\"></div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</section>");_.b("\n" + i);_.b("<section class=\"blank-state\">");_.b("\n" + i);_.b("  <div class=\"container\">");_.b("\n" + i);_.b("    <div class=\"row-fluid\">");_.b("\n" + i);_.b("      <div class=\"card span12\">");_.b("\n" + i);_.b("        <h1><span class=\"loading on\">");_.b(_.v(_.f("message",c,p,0)));_.b("</span></h1>");_.b("\n" + i);_.b("        <hr/>");_.b("\n" + i);_.b("        <div class=\"loading-icon\"></div>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</section>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});

define("hgn!../templates/error_layout", ["hogan"], function(hogan){  var tmpl = new hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<section class=\"banner\">");_.b("\n" + i);_.b("  <div class=\"container\">");_.b("\n" + i);_.b("    <div class=\"row-fluid\"></div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</section>");_.b("\n" + i);_.b("<div class=\"container breakout-phone\">");_.b("\n" + i);_.b("  <div class=\"row-fluid\">");_.b("\n" + i);_.b("    <div class=\"card span12 error-page\">");_.b("\n" + i);_.b("      <section class=\"span8\">");_.b("\n" + i);_.b("        <h1>");_.b(_.v(_.f("header",c,p,0)));_.b("</h1>");_.b("\n" + i);_.b("        <p>");_.b(_.v(_.f("message",c,p,0)));_.b("</p>");_.b("\n" + i);_.b("        <!--");_.b("\n" + i);_.b("        <h2>");_.b(_.v(_.d("i18n.shared.browse.labelSchools",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("        <hr/>");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);if(_.s(_.d("config.browseOrgs.schools",c,p,1),c,p,0,437,518,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li><a tabindex=\"-1\" href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("\">");_.b(_.v(_.f("name",c,p,0)));_.b("</a></li>");_.b("\n");});c.pop();}_.b("        </ul>");_.b("\n" + i);_.b("        <h2>");_.b(_.v(_.d("i18n.shared.browse.labelInstitutes",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("        <hr/>");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);if(_.s(_.d("config.browseOrgs.institutes",c,p,1),c,p,0,695,776,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li><a tabindex=\"-1\" href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("\">");_.b(_.v(_.f("name",c,p,0)));_.b("</a></li>");_.b("\n");});c.pop();}_.b("        </ul>");_.b("\n" + i);_.b("        <h2>");_.b(_.v(_.d("i18n.shared.browse.labelAdministration",c,p,0)));_.b("</h2>");_.b("\n" + i);_.b("        <hr/>");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);if(_.s(_.d("config.browseOrgs.administrations",c,p,1),c,p,0,965,1046,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <li><a tabindex=\"-1\" href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("\">");_.b(_.v(_.f("name",c,p,0)));_.b("</a></li>");_.b("\n");});c.pop();}_.b("        </ul>");_.b("\n" + i);_.b("        <h2>Other Resources</h2>");_.b("\n" + i);_.b("        <hr/>");_.b("\n" + i);_.b("        <ul>");_.b("\n" + i);_.b("          <li><a href=\"http://search.stanford.edu/\">Stanford Search</a></li>");_.b("\n" + i);_.b("          <li><a href=\"http://www.stanford.edu/atoz\">A to Z index of Stanford websites</a></li>");_.b("\n" + i);_.b("          <li><a href=\"http://www.stanford.edu/\">Stanford University homepage</a></li>");_.b("\n" + i);_.b("        </ul>");_.b("\n" + i);_.b("        -->");_.b("\n" + i);_.b("      </section>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div> ");_.b("\n" + i);_.b("</div>");return _.fl();;}, "", hogan);  function render(){ return tmpl.render.apply(tmpl, arguments); } render.template = tmpl; return render;});


/*
select count (distinct pp.publication_id)
from
  profile_publication pp
  inner join profile_flags_vw f on pp.profile_id = f.faculty_id
WHERE
  f.is_in_medical_school = 1 AND
  pp.authorship_status = 'APPROVED' AND
--  f.is_active_faculty = 1
--    f.is_active_staff = 1
--  (f.is_active_ms_student = 1 OR f.is_active_md_student = 1 OR f.is_active_phd_student = 1)
--  f.is_active_ms_student = 1
--  f.is_active_md_student = 1
  f.is_active_postdoc = 1
;
*/


(function() {

  define('models/home',['backbone'], function(Backbone) {
    
    return Backbone.Model.extend({
      defaults: {
        information: {
          overall: {
            profiles: "4,112",
            publications: "175,556",
            departmentsAndDivisions: "200",
            programs: 149,
            profilesAndTopicsSearched: "332,457"
          },
          faculty: {
            profiles: "2,246",
            publications: "79,043",
            newProfiles: "32",
            newPublications: "2,216"
          },
          postdocs: {
            profiles: "1,279",
            publications: "4,314",
            newProfiles: "22",
            newPublications: "216"
          },
          students: {
            profiles: {
              total: "275",
              "new": "4",
              masters: "28",
              md: "135",
              phd: "154"
            },
            publications: {
              total: "898",
              "new": "12",
              masters: "149",
              md: "528",
              phd: "475"
            }
          },
          staff: {
            profiles: "395",
            publications: "2,138",
            newProfiles: "231",
            projects: "325"
          }
        },
        overview: [],
        demographics: {
          title: "Who's using CAP?",
          chartdata: {
            facStaff: [
              {
                group: 'Faculty',
                numUsers: 2246
              }, {
                group: 'Postdocs',
                numUsers: 1279
              }, {
                group: 'Staff',
                numUsers: 395
              }
            ],
            students: [
              {
                group: 'Masters',
                numUsers: 28
              }, {
                group: 'MD',
                numUsers: 135
              }, {
                group: 'PhD',
                numUsers: 154
              }
            ],
            studentsTotal: 275
          }
        },
        hasNobelLaureates: true,
        nobelLaureates: [
          {
            profileId: 4494,
            displayName: 'Michael Levitt',
            awardName: 'Chemistry (2013)',
            shortTitle: 'Robert W. and Vivian K. Cahill Professor in Cancer Research in the School of Medicine and Professor, by courtesy, of Computer Science',
            profileUrl: '/michael-levitt',
            photos: {
              small: {
                url: '//news.stanford.edu/nobel/images/art/levitt.jpg'
              },
              square: {
                url: '//news.stanford.edu/nobel/images/art/levitt.jpg'
              }
            }
          }, {
            profileId: 8533,
            displayName: 'Thomas Sudhof',
            awardName: 'Medicine (2013)',
            shortTitle: 'Avram Goldstein Professor in the School of Medicine and Professor, by courtesy, of Neurology and of Psychiatry and Behavioral Sciences',
            profileUrl: '/thomas-sudhof',
            photos: {
              small: {
                url: '//cap.stanford.edu/profiles/viewImage?profileId=8533&type=big&showNoImage=true'
              },
              square: {
                url: '//cap.stanford.edu/profiles/viewImage?profileId=8533&type=big&showNoImage=true'
              }
            }
          }, {
            profileId: 4300,
            displayName: 'Brian Kobilka',
            awardName: 'Chemistry (2012)',
            shortTitle: 'Helene Irwin Fagan Chair in Cardiology and Professor of Medicine (Cardiovascular)',
            profileUrl: '/brian-kobilka',
            photos: {
              small: {
                url: '//cap.stanford.edu/profiles/viewImage?profileId=4300&type=big&showNoImage=true'
              },
              square: {
                url: '//cap.stanford.edu/profiles/viewImage?profileId=4300&type=big&showNoImage=true'
              }
            }
          }, {
            profileId: 3989,
            displayName: 'Andrew Fire',
            awardName: 'Medicine (2006)',
            shortTitle: 'George D. Smith Professor in Molecular and Genetic Medicine and Professor of Genetics',
            profileUrl: '/andrew-fire',
            photos: {
              small: {
                url: '//upload.wikimedia.org/wikipedia/commons/7/7e/Andrew_Fire,_Stanford_University.jpg'
              },
              square: {
                url: '//upload.wikimedia.org/wikipedia/commons/7/7e/Andrew_Fire,_Stanford_University.jpg'
              }
            }
          }, {
            profileId: 4308,
            displayName: 'Roger Kornberg',
            awardName: 'Chemistry (2006)',
            shortTitle: 'Mrs. George A. Winzer Professor in Medicine',
            profileUrl: '/roger-kornberg',
            photos: {
              small: {
                url: '//cap.stanford.edu/profiles/viewImage?profileId=4308&type=big&showNoImage=true'
              },
              square: {
                url: '//cap.stanford.edu/profiles/viewImage?profileId=4308&type=big&showNoImage=true'
              }
            }
          }, {
            profileId: 6263,
            displayName: 'Paul Berg',
            awardName: 'Chemistry (1980)',
            shortTitle: 'Robert W. and Vivian K. Cahill Professor of Cancer Research, Emeritus',
            profileUrl: '/paul-berg',
            photos: {
              small: {
                url: '//cap.stanford.edu/profiles/viewImage?profileId=6263&type=big&showNoImage=true'
              },
              square: {
                url: '//cap.stanford.edu/profiles/viewImage?profileId=6263&type=big&showNoImage=true'
              }
            }
          }
        ]
      }
    });
  });

}).call(this);

(function() {

  define('app',['backbone', 'i18n', 'marionette', 'vent', 'views/header', 'views/home/layout', 'views/profile/layout', 'views/search_results/layout', 'views/search_results/browse_layout', 'hgn!../templates/shared/blank_state_section', 'hgn!../templates/error_layout', 'models/home'], function(Backbone, i18n, Marionette, vent, HeaderView, HomeLayoutView, ProfileLayoutView, SearchLayoutView, BrowseLayoutView, BlankStateTemplate, ErrorLayoutTemplate, HomeModel) {
    

    var app;
    $(document).on("click", "header a[href]:not([data-bypass]), #mainContent a[href]:not([data-bypass])", function(evt) {
      var href, protocol, trigger;
      href = $(this).attr("href");
      protocol = this.protocol + "//";
      if ((href != null ? href.slice(0, protocol.length) : void 0) !== protocol && (href != null ? href.indexOf("javascript:") : void 0) !== 0) {
        evt.preventDefault();
        trigger = $(this).hasClass('no-trigger') ? false : true;
        return Backbone.history.navigate(href, {
          trigger: trigger
        });
      }
    });
    app = new Marionette.Application();
    app.addInitializer(function(options) {
      var blankStateView, doFetch, handleError, header, headerData, isBannerSwapped, renderBrowse, renderHome, renderProfile, renderSearchResults, setBlankStateView, viewJson;
      app.addRegions({
        header: '#headerContent',
        main: '#mainContent'
      });
      headerData = new Backbone.Model({
        i18n: i18n,
        config: options
      });
      header = new HeaderView({
        model: headerData
      });
      viewJson = options.viewJson || {};
      isBannerSwapped = options.isBannerSwapped;
      blankStateView = new Marionette.ItemView({
        model: new Backbone.Model({
          message: i18n.shared.labelLoadingMessage
        }),
        template: BlankStateTemplate
      });
      doFetch = function(model, view, type, url, params) {
        model.on('request', function() {
          setBlankStateView(type, app.main);
          return vent.trigger('action:displayLoading');
        });
        model.on('sync', function() {
          app.main.show(view);
          return vent.trigger('action:updateHeaderView', model.toJSON());
        });
        model.on('error', function(model, xhr, options) {
          console.log(xhr);
          handleError(xhr.responseText);
          vent.trigger('action:updateHeaderView', null);
          return vent.trigger('action:updatePageIdentifier', 'error');
        });
        return model.fetch({
          xhrFields: {
            withCredentials: true
          },
          url: url,
          data: params,
          complete: function() {
            return $('body').removeClass('loading');
          }
        });
      };
      renderBrowse = function(params) {
        var browseView, profilePagedResult;
        profilePagedResult = new Backbone.Model(viewJson);
        browseView = new BrowseLayoutView({
          model: profilePagedResult
        });
        return doFetch(profilePagedResult, browseView, 'browse', options.capApiUrl + '/orgs/profiles', params);
      };
      renderHome = function() {
        var home, homeView;
        home = new HomeModel({
          i18n: i18n,
          config: options
        });
        homeView = new HomeLayoutView({
          model: home
        });
        app.main.show(homeView);
        return vent.trigger('action:updateHeaderView');
      };
      renderSearchResults = function(params) {
        var profilePagedResult, searchResultView;
        profilePagedResult = new Backbone.Model(viewJson);
        searchResultView = new SearchLayoutView({
          model: profilePagedResult,
          criteria: params.q
        });
        return doFetch(profilePagedResult, searchResultView, 'search', options.capApiUrl + '/search/keyword', params);
      };
      renderProfile = function(id, params) {
        var profile, profileView;
        profile = new Backbone.Model(viewJson);
        profileView = new ProfileLayoutView({
          model: profile,
          config: options
        });
        profile.on('sync', function(model) {
          var primaryAlias, profileUrl;
          primaryAlias = model.get('data').alias;
          if (primaryAlias && primaryAlias !== id) {
            profileUrl = options.baseUrl;
            if (profileUrl.lastIndexOf('/') !== (profileUrl.length - 1)) {
              profileUrl += '/';
            }
            if (options.namespace) {
              profileUrl += options.namespace + '/';
            }
            profileUrl += primaryAlias;
            return Backbone.history.navigate(profileUrl, {
              trigger: false,
              replace: true
            });
          }
        });
        return doFetch(profile, profileView, 'profile', options.capApiUrl + '/profiles/' + id, params);
      };
      vent.on('action:updatePageTitle', function(title) {
        return document.title = title;
      });
      vent.on('action:updateMetaDescription', function(description) {
        $('meta[name=description]').remove();
        return $('head').append('<meta name="description" content="' + description + '">');
      });
      vent.on('action:displayLoading', function() {
        return $('body').addClass('loading');
      });
      vent.on('action:updatePageIdentifier', function(pageId) {
        return $('body').removeClass('home browse search profile').addClass(pageId);
      });
      vent.on('action:updateHeaderView', function(viewJson) {
        var meta, stanfordOnlyData, ui;
        if (viewJson) {
          stanfordOnlyData = {
            ui: viewJson.ui,
            data: viewJson.data,
            i18n: viewJson.i18n,
            link: {
              href: '',
              className: '',
              rel: ''
            }
          };
          ui = viewJson.ui;
          meta = viewJson.data.meta;
          if (ui.intranetUrl !== null && ui.intranetUrl !== void 0) {
            stanfordOnlyData.link.href = ui.intranetUrl;
            stanfordOnlyData.link.rel = ui.intranetUrlRel;
          } else if (meta.stanfordOnlyViewUrl !== null && meta.stanfordOnlyViewUrl !== void 0) {
            stanfordOnlyData.link.href = meta.stanfordOnlyViewUrl.href;
            stanfordOnlyData.link.className = meta.stanfordOnlyViewUrl["class"];
            stanfordOnlyData.link.rel = meta.stanfordOnlyViewUrl.rel;
          }
        } else {
          stanfordOnlyData = null;
        }
        if (isBannerSwapped !== true) {
          headerData.set('stanfordOnlyData', stanfordOnlyData);
          header = new HeaderView({
            model: headerData
          });
          return app.header.show(header);
        }
      });
      vent.on('action:stanfordOnlyUrl', function(href, className, rel) {
        if (href == null) {
          href = '#';
        }
        if (className == null) {
          className = '';
        }
        if (rel == null) {
          rel = '';
        }
        $('#stanfordOnlyUrl').attr('href', href).attr('class', className).attr('rel', rel);
        return $('#stanfordOnlyUrl span').html(i18n.searchResults.stanfordOnly.label);
      });
      vent.on('action:slideRight', function() {
        return $('body').toggleClass('slideRight');
      });
      vent.on('post:search', function(query) {
        return Backbone.history.navigate(options.baseUrl + '/search?q=' + query, {
          trigger: true
        });
      });
      vent.on('redirect:showHome', function() {
        return Backbone.history.navigate(options.baseUrl, true);
      });
      vent.on('route:show404', function() {
        return document.location = options.baseUrl + '/404.html';
      });
      vent.on('route:showBrowse', function(params) {
        return renderBrowse(params);
      });
      vent.on('route:showHome', function() {
        return renderHome();
      });
      vent.on('route:showProfile', function(id, params) {
        return renderProfile(id, params);
      });
      vent.on('route:showSearchResults', function(params) {
        return renderSearchResults(params);
      });
      setBlankStateView = function(context, region) {
        if (!$('body').hasClass(context)) {
          return region.show(blankStateView);
        }
      };
      handleError = function(response) {
        if (response && response.length > 0) {
          response = JSON.parse(response);
        } else {
          response = {
            header: "Oops, Something Went Wrong!",
            pageHeader: "Oops, Something Went Wrong! [AJAX Proxy Failed]",
            message: "The page you requested cannot be retrieved at this time due to an internal error. Ours developers have been sent a notification of this error and should have it resolved shortly.",
            viewType: "error"
          };
        }
        return app.main.show(new Marionette.ItemView({
          model: new Backbone.Model(response),
          onRender: function() {
            return vent.trigger('action:updatePageIdentifier', response.viewType);
          },
          template: function(data) {
            return ErrorLayoutTemplate(data);
          }
        }));
      };
    });
    return app;
  });

}).call(this);

(function() {

  define('controller',['vent'], function(vent) {
    
    return {
      redirectHome: function() {
        return vent.trigger('redirect:showHome');
      },
      show404: function() {
        return vent.trigger('route:show404');
      },
      showBrowse: function(params) {
        return vent.trigger('route:showBrowse', params);
      },
      showBannerSwapBrowse: function(namespace, params) {
        if (namespace) {
          if (!params) {
            params = {};
          }
          params['namespace'] = namespace;
        }
        return this.showBrowse(params);
      },
      showHome: function(params) {
        return vent.trigger('route:showHome');
      },
      showProfile: function(id, params) {
        return vent.trigger('route:showProfile', id, params);
      },
      showBannerSwapProfile: function(namespace, id, params) {
        if (namespace) {
          if (!params) {
            params = {};
          }
          params['namespace'] = namespace;
        }
        return this.showProfile(id, params);
      },
      showSearchResults: function(params) {
        return vent.trigger('route:showSearchResults', params);
      },
      showBannerSwapSearchResults: function(namespace, params) {
        if (namespace) {
          if (!params) {
            params = {};
          }
          params['namespace'] = namespace;
        }
        return this.showSearchResults(params);
      },
      noOpRoute: function() {}
    };
  });

}).call(this);

(function() {

  define('ga-init',[], function() {
    window.GoogleAnalyticsObject = 'ga';
    window.ga = window.ga || function() {
      return (window.ga.q = window.ga.q || []).push(arguments);
    };
    return window.ga.l = 1 * new Date();
  });

}).call(this);

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (root, factory) {
  if (typeof exports === "object" && exports) {
    module.exports = factory; // CommonJS
  } else if (typeof define === "function" && define.amd) {
    define('mustache',factory); // AMD
  } else {
    root.Mustache = factory; // <script>
  }
}(this, (function () {

  var exports = {};

  exports.name = "mustache.js";
  exports.version = "0.7.2";
  exports.tags = ["{{", "}}"];

  exports.Scanner = Scanner;
  exports.Context = Context;
  exports.Writer = Writer;

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  function testRe(re, string) {
    return RegExp.prototype.test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRe(nonSpaceRe, string);
  }

  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  function escapeRe(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  exports.escape = escapeHtml;

  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      this.tail = this.tail.substring(match[0].length);
      this.pos += match[0].length;
      return match[0];
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var match, pos = this.tail.search(re);

    switch (pos) {
    case -1:
      match = this.tail;
      this.pos += this.tail.length;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, pos);
      this.tail = this.tail.substring(pos);
      this.pos += pos;
    }

    return match;
  };

  function Context(view, parent) {
    this.view = view;
    this.parent = parent;
    this.clearCache();
  }

  Context.make = function (view) {
    return (view instanceof Context) ? view : new Context(view);
  };

  Context.prototype.clearCache = function () {
    this._cache = {};
  };

  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  Context.prototype.lookup = function (name) {
    var value = this._cache[name];

    if (!value) {
      if (name === ".") {
        value = this.view;
      } else {
        var context = this;

        while (context) {
          if (name.indexOf(".") > 0) {
            var names = name.split("."), i = 0;

            value = context.view;

            while (value && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }

          if (value != null) {
            break;
          }

          context = context.parent;
        }
      }

      this._cache[name] = value;
    }

    if (typeof value === "function") {
      value = value.call(this.view);
    }

    return value;
  };

  function Writer() {
    this.clearCache();
  }

  Writer.prototype.clearCache = function () {
    this._cache = {};
    this._partialCache = {};
  };

  Writer.prototype.compile = function (template, tags) {
    var fn = this._cache[template];

    if (!fn) {
      var tokens = exports.parse(template, tags);
      fn = this._cache[template] = this.compileTokens(tokens, template);
    }

    return fn;
  };

  Writer.prototype.compilePartial = function (name, template, tags) {
    var fn = this.compile(template, tags);
    this._partialCache[name] = fn;
    return fn;
  };

  Writer.prototype.compileTokens = function (tokens, template) {
    var fn = compileTokens(tokens);
    var self = this;

    return function (view, partials) {
      if (partials) {
        if (typeof partials === "function") {
          self._loadPartial = partials;
        } else {
          for (var name in partials) {
            self.compilePartial(name, partials[name]);
          }
        }
      }

      return fn(self, Context.make(view), template);
    };
  };

  Writer.prototype.render = function (template, view, partials) {
    return this.compile(template)(view, partials);
  };

  Writer.prototype._section = function (name, context, text, callback) {
    var value = context.lookup(name);

    switch (typeof value) {
    case "object":
      if (isArray(value)) {
        var buffer = "";

        for (var i = 0, len = value.length; i < len; ++i) {
          buffer += callback(this, context.push(value[i]));
        }

        return buffer;
      }

      return value ? callback(this, context.push(value)) : "";
    case "function":
      var self = this;
      var scopedRender = function (template) {
        return self.render(template, context);
      };

      var result = value.call(context.view, text, scopedRender);
      return result != null ? result : "";
    default:
      if (value) {
        return callback(this, context);
      }
    }

    return "";
  };

  Writer.prototype._inverted = function (name, context, callback) {
    var value = context.lookup(name);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0)) {
      return callback(this, context);
    }

    return "";
  };

  Writer.prototype._partial = function (name, context) {
    if (!(name in this._partialCache) && this._loadPartial) {
      this.compilePartial(name, this._loadPartial(name));
    }

    var fn = this._partialCache[name];

    return fn ? fn(context) : "";
  };

  Writer.prototype._name = function (name, context) {
    var value = context.lookup(name);

    if (typeof value === "function") {
      value = value.call(context.view);
    }

    return (value == null) ? "" : String(value);
  };

  Writer.prototype._escaped = function (name, context) {
    return exports.escape(this._name(name, context));
  };

  /**
   * Low-level function that compiles the given `tokens` into a function
   * that accepts three arguments: a Writer, a Context, and the template.
   */
  function compileTokens(tokens) {
    var subRenders = {};

    function subRender(i, tokens, template) {
      if (!subRenders[i]) {
        var fn = compileTokens(tokens);
        subRenders[i] = function (writer, context) {
          return fn(writer, context, template);
        };
      }

      return subRenders[i];
    }

    return function (writer, context, template) {
      var buffer = "";
      var token, sectionText;

      for (var i = 0, len = tokens.length; i < len; ++i) {
        token = tokens[i];

        switch (token[0]) {
        case "#":
          sectionText = template.slice(token[3], token[5]);
          buffer += writer._section(token[1], context, sectionText, subRender(i, token[4], template));
          break;
        case "^":
          buffer += writer._inverted(token[1], context, subRender(i, token[4], template));
          break;
        case ">":
          buffer += writer._partial(token[1], context);
          break;
        case "&":
          buffer += writer._name(token[1], context);
          break;
        case "name":
          buffer += writer._escaped(token[1], context);
          break;
        case "text":
          buffer += token[1];
          break;
        }
      }

      return buffer;
    };
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var tree = [];
    var collector = tree;
    var sections = [];

    var token;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];
      switch (token[0]) {
      case '#':
      case '^':
        sections.push(token);
        collector.push(token);
        collector = token[4] = [];
        break;
      case '/':
        var section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : tree;
        break;
      default:
        collector.push(token);
      }
    }

    return tree;
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];
      if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        lastToken = token;
        squashedTokens.push(token);
      }
    }

    return squashedTokens;
  }

  function escapeTags(tags) {
    return [
      new RegExp(escapeRe(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRe(tags[1]))
    ];
  }

  /**
   * Breaks up the given `template` string into a tree of token objects. If
   * `tags` is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
   * course, the default is to use mustaches (i.e. Mustache.tags).
   */
  exports.parse = function (template, tags) {
    template = template || '';
    tags = tags || exports.tags;

    if (typeof tags === 'string') tags = tags.split(spaceRe);
    if (tags.length !== 2) {
      throw new Error('Invalid tags: ' + tags.join(', '));
    }

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          tokens.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr;
    while (!scanner.eos()) {
      start = scanner.pos;
      value = scanner.scanUntil(tagRes[0]);

      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(["text", chr, start, start + 1]);
          start += 1;

          if (chr === "\n") {
            stripSpace(); // Check for whitespace on the current line.
          }
        }
      }

      start = scanner.pos;

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) {
        break;
      }

      hasTag = true;
      type = scanner.scan(tagRe) || "name";

      // Skip any whitespace between tag and value.
      scanner.scan(whiteRe);

      // Extract the tag value.
      if (type === "=") {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === "{") {
        var closeRe = new RegExp("\\s*" + escapeRe("}" + tags[1]));
        value = scanner.scanUntil(closeRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = "&";
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error('Unclosed tag at ' + scanner.pos);
      }

      // Check section nesting.
      if (type === '/') {
        if (sections.length === 0) {
          throw new Error('Unopened section "' + value + '" at ' + start);
        }

        var section = sections.pop();

        if (section[1] !== value) {
          throw new Error('Unclosed section "' + section[1] + '" at ' + start);
        }
      }

      var token = [type, value, start, scanner.pos];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      } else if (type === "=") {
        // Set the tags for the next time around.
        tags = value.split(spaceRe);

        if (tags.length !== 2) {
          throw new Error('Invalid tags at ' + start + ': ' + tags.join(', '));
        }

        tagRes = escapeTags(tags);
      }
    }

    // Make sure there are no open sections when we're done.
    var section = sections.pop();
    if (section) {
      throw new Error('Unclosed section "' + section[1] + '" at ' + scanner.pos);
    }

    return nestTokens(squashTokens(tokens));
  };

  // The high-level clearCache, compile, compilePartial, and render functions
  // use this default writer.
  var _writer = new Writer();

  /**
   * Clears all cached templates and partials in the default writer.
   */
  exports.clearCache = function () {
    return _writer.clearCache();
  };

  /**
   * Compiles the given `template` to a reusable function using the default
   * writer.
   */
  exports.compile = function (template, tags) {
    return _writer.compile(template, tags);
  };

  /**
   * Compiles the partial with the given `name` and `template` to a reusable
   * function using the default writer.
   */
  exports.compilePartial = function (name, template, tags) {
    return _writer.compilePartial(name, template, tags);
  };

  /**
   * Compiles the given array of tokens (the output of a parse) to a reusable
   * function using the default writer.
   */
  exports.compileTokens = function (tokens, template) {
    return _writer.compileTokens(tokens, template);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  exports.render = function (template, view, partials) {
    return _writer.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = exports.render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  return exports;

}())));

(function(_, Backbone) {

// Require Underscore and Backbone if there's a `require` function.
// This makes `backbone.queryparam` work on the server or when using
// `browserify`.
if (typeof require !== 'undefined') {
  _ = _ || require('underscore');
  Backbone = Backbone || require('backbone');
}

var queryStringParam = /^\?(.*)/,
    optionalParam = /\((.*?)\)/g,
    namedParam    = /(\(\?)?:\w+/g,
    splatParam    = /\*\w+/g,
    escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g,
    queryStrip = /(\?.*)$/,
    fragmentStrip = /^([^\?]*)/,
    hasQueryString = /(\?)[\w-]+=/i,
    namesPattern = /[\:\*]([^\:\?\/]+)/g,
    routeStripper = /^[#\/]|\s+$/g,
    trailingSlash = /\/$/;
Backbone.Router.arrayValueSplit = '|';

var _getFragment = function(fragment, forcePushState) {
  if (fragment == null) {
    if (this._hasPushState || !this._wantsHashChange || forcePushState) {
      fragment = this.location.pathname;
      var root = this.root.replace(trailingSlash, '');
      var search = this.location.search;
      if (!fragment.indexOf(root)) fragment = fragment.substr(root.length);
      if (search) fragment += search;
    } else {
      fragment = this.getHash();
    }
  }
  return fragment.replace(routeStripper, '');
}

_.extend(Backbone.History.prototype, {
  getFragment: function(fragment, forcePushState) {
    var excludeQueryString = (this._wantsHashChange && this._wantsPushState &&
      !this._hasPushState);
    var _fragment = _getFragment.apply(this, arguments);
    if(fragment == null && !hasQueryString.test(_fragment)) {
      _fragment += this.location.search;
    } else if (excludeQueryString) {
      _fragment = _fragment.replace(queryStrip, '');
    }
    return _fragment;
  },

  // this will not perform custom query param serialization specific to the router
  // but will return a map of key/value pairs (the value is a string or array)
  getQueryParameters: function(fragment, forcePushState) {
    fragment = _getFragment.apply(this, arguments);
    // if no query string exists, this will still be the original fragment
    var queryString = fragment.replace(fragmentStrip, '');
    var match = queryString.match(queryStringParam);
    if (match) {
      queryString = match[1];
      var rtn = {};
      iterateQueryString(queryString, function(name, value) {
        if (!rtn[name]) {
          rtn[name] = value;
        } else if (_.isString(rtn[name])) {
          rtn[name] = [rtn[name], value];
        } else {
          rtn[name].push(value);
        }
      });
      return rtn;
    } else {
      // no values
      return {};
    }
  }
});

_.extend(Backbone.Router.prototype, {
  initialize: function(options) {
    this.encodedSplatParts = options && options.encodedSplatParts;
  },

  getFragment: function(fragment, forcePushState, excludeQueryString) {
    fragment = _getFragment.apply(this, arguments);
    if (excludeQueryString) {
      fragment = fragment.replace(queryStrip, '');
    }
    return fragment;
  },

  _routeToRegExp: function(route) {
    var splatMatch = (splatParam.exec(route) || {index: -1}),
        namedMatch = (namedParam.exec(route) || {index: -1}),
        paramNames = route.match(namesPattern) || [];

    route = route.replace(escapeRegExp, '\\$&')
                 .replace(optionalParam, '(?:$1)?')
                 .replace(namedParam, function(match, optional){
                   return optional ? match : '([^\\/\\?]+)';
                 })
                 .replace(splatParam, '([^\?]*?)');
    route += '([\?]{1}.*)?';
    var rtn = new RegExp('^' + route + '$');

    // use the rtn value to hold some parameter data
    if (splatMatch.index >= 0) {
      // there is a splat
      if (namedMatch >= 0) {
        // negative value will indicate there is a splat match before any named matches
        rtn.splatMatch = splatMatch.index - namedMatch.index;
      } else {
        rtn.splatMatch = -1;
      }
    }
    rtn.paramNames = _.map(paramNames, function(name) { return name.substring(1); });
    rtn.namedParameters = this.namedParameters;
  
    return rtn;
  },

  /**
   * Given a route, and a URL fragment that it matches, return the array of
   * extracted parameters.
   */
  _extractParameters: function(route, fragment) {
    var params = route.exec(fragment).slice(1),
        namedParams = {};
    if (params.length > 0 && _.isUndefined(params[params.length - 1])) {
    	// remove potential invalid data from query params match
    	params.splice(params.length - 1, 1);
    }

    // do we have an additional query string?
    var match = params.length && params[params.length-1] && params[params.length-1].match(queryStringParam);
    if (match) {
      var queryString = match[1];
      var data = {};
      if (queryString) {
        var self = this;
        iterateQueryString(queryString, function(name, value) {
          self._setParamValue(name, value, data);
        });
      }
      params[params.length-1] = data;
      _.extend(namedParams, data);
    }

    // decode params
    var length = params.length;
    if (route.splatMatch && this.encodedSplatParts) {
      if (route.splatMatch < 0) {
        // splat param is first
        return params;
      } else {
        length = length - 1;
      }
    }

    for (var i=0; i<length; i++) {
      if (_.isString(params[i])) {
        params[i] = decodeURIComponent(params[i]);
        if (route.paramNames.length >= i-1) {
          namedParams[route.paramNames[i]] = params[i];
        }
      }
    }

    return (Backbone.Router.namedParameters || route.namedParameters) ? [namedParams] : params;
  },

  /**
   * Set the parameter value on the data hash
   */
  _setParamValue: function(key, value, data) {
    // use '.' to define hash separators
    var parts = key.split('.');
    var _data = data;
    for (var i=0; i<parts.length; i++) {
      var part = parts[i];
      if (i === parts.length-1) {
        // set the value
        _data[part] = this._decodeParamValue(value, _data[part]);
      } else {
        _data = _data[part] = _data[part] || {};
      }
    }
  },

  /**
   * Decode an individual parameter value (or list of values)
   * @param value the complete value
   * @param currentValue the currently known value (or list of values)
   */
  _decodeParamValue: function(value, currentValue) {
    // '|' will indicate an array.  Array with 1 value is a=|b - multiple values can be a=b|c
    var splitChar = Backbone.Router.arrayValueSplit;
    if (value.indexOf(splitChar) >= 0) {
      var values = value.split(splitChar);
      // clean it up
      for (var i=values.length-1; i>=0; i--) {
        if (!values[i]) {
          values.splice(i, 1);
        } else {
          values[i] = decodeURIComponent(values[i]);
        }
      }
      return values;
    }
    if (!currentValue) {
      return decodeURIComponent(value);
    } else if (_.isArray(currentValue)) {
      currentValue.push(decodeURIComponent(value));
      return currentValue;
    } else {
      return [currentValue, decodeURIComponent(value)];
    }
  },

  /**
   * Return the route fragment with queryParameters serialized to query parameter string
   */
  toFragment: function(route, queryParameters) {
    if (queryParameters) {
      if (!_.isString(queryParameters)) {
        queryParameters = this._toQueryString(queryParameters);
      }
      if(queryParameters) {
        route += '?' + queryParameters;
      }
    }
    return route;
  },

  /**
   * Serialize the val hash to query parameters and return it.  Use the namePrefix to prefix all param names (for recursion)
   */
  _toQueryString: function(val, namePrefix) {
    var splitChar = Backbone.Router.arrayValueSplit;
    function encodeSplit(val) { return val.replace(splitChar, encodeURIComponent(splitChar)); }

    if (!val) return '';
    namePrefix = namePrefix || '';
    var rtn = '';
    for (var name in val) {
      var _val = val[name];
      if (_.isString(_val) || _.isNumber(_val) || _.isBoolean(_val) || _.isDate(_val)) {
        // primitive type
        _val = this._toQueryParam(_val);
        if (_.isBoolean(_val) || _.isNumber(_val) || _val) {
          rtn += (rtn ? '&' : '') + this._toQueryParamName(name, namePrefix) + '=' + encodeSplit(encodeURIComponent(_val));
        }
      } else if (_.isArray(_val)) {
        // arrays use Backbone.Router.arrayValueSplit separator
        var str = '';
        for (var i = 0; i < _val.length; i++) {
          var param = this._toQueryParam(_val[i]);
          if (_.isBoolean(param) || param) {
            str += splitChar + encodeSplit(param);
          }
        }
        if (str) {
          rtn += (rtn ? '&' : '') + this._toQueryParamName(name, namePrefix) + '=' + str;
        }
      } else {
        // dig into hash
        var result = this._toQueryString(_val, this._toQueryParamName(name, namePrefix, true));
        if (result) {
          rtn += (rtn ? '&' : '') + result;
        }
      }
    }
    return rtn;
  },

  /**
   * return the actual parameter name
   * @param name the parameter name
   * @param namePrefix the prefix to the name
   * @param createPrefix true if we're creating a name prefix, false if we're creating the name
   */
  _toQueryParamName: function(name, prefix, isPrefix) {
    return (prefix + name + (isPrefix ? '.' : ''));
  },

  /**
   * Return the string representation of the param used for the query string
   */
  _toQueryParam: function (param) {
    if (_.isNull(param) || _.isUndefined(param)) {
      return null;
    }
    return param;
  }
});

function iterateQueryString(queryString, callback) {
  var keyValues = queryString.split('&');
  _.each(keyValues, function(keyValue) {
    var i = keyValue.indexOf('=');
    var arr = [keyValue.slice(0,i), keyValue.slice(i+1)];
    if (arr.length > 1) {
      callback(arr[0], arr[1]);
    }
  });
}

})(typeof _ === 'undefined' ? null : _, typeof Backbone === 'undefined' ? null : Backbone);

define("backbone-queryparams", ["backbone"], function(){});

(function() {

  define('router',['marionette', 'backbone-queryparams'], function(Marionette) {
    

    var Router;
    return Router = Marionette.AppRouter.extend({
      appRoutes: {
        '': 'showHome',
        'browse': 'showBrowse',
        'search': 'showSearchResults',
        'cancer/researcher': 'noOpRoute',
        ':id': 'showProfile',
        '*namespace/browse': 'showBannerSwapBrowse',
        '*namespace/search': 'showBannerSwapSearchResults',
        '*namespace/:id': 'showBannerSwapProfile'
      }
    });
  });

}).call(this);

(function(_, Backbone) {
    var sync = Backbone.sync;

    Backbone.sync = function(method, model, options) {
        var lastXHR = model._lastXHR && model._lastXHR[method];

        if ((lastXHR && lastXHR.readyState != 4) && (options && options.safe !== false))
            lastXHR.abort('stale');

        if (!model._lastXHR)
            model._lastXHR = {};

        return model._lastXHR[method] = sync.apply(this, arguments);
    };
})(window._, window.Backbone);

define("backbone-safesync", ["backbone"], function(){});

/* ============================================================
 * bootstrap-dropdown.js v2.1.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

   // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        $parent.toggleClass('open')
        $this.focus()
      }

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) return $this.click()

      $items = $('[role=menu] li:not(.divider) a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    getParent($(toggle))
      .removeClass('open')
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)
    $parent.length || ($parent = $this.parent())

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(function () {
    $('html')
      .on('click.dropdown.data-api touchstart.dropdown.data-api', clearMenus)
    $('body')
      .on('click.dropdown touchstart.dropdown.data-api', '.dropdown', function (e) { /*e.stopPropagation()*/ })
      .on('click.dropdown.data-api touchstart.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
      .on('keydown.dropdown.data-api touchstart.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)
  })

}(window.jQuery);
define("bootstrap-dropdown", ["jquery"], function(){});

(function() {

  require.config({
    shim: {
      'backbone': {
        deps: ['jquery', 'lodash'],
        exports: 'Backbone'
      },
      'backbone-queryparams': {
        deps: ['backbone']
      },
      'backbone-safesync': {
        deps: ['backbone']
      },
      'bootstrap-collapse': {
        deps: ['bootstrap-transition']
      },
      'bootstrap-collapse-partial': {
        deps: ['jquery']
      },
      'bootstrap-carousel': {
        deps: ['jquery']
      },
      'bootstrap-dropdown': {
        deps: ['jquery']
      },
      'bootstrap-popover': {
        deps: ['bootstrap-tooltip']
      },
      'bootstrap-tab': {
        deps: ['jquery']
      },
      'bootstrap-tooltip': {
        deps: ['jquery']
      },
      'bootstrap-transition': {
        deps: ['jquery']
      },
      'bootstrap-typeahead': {
        deps: ['jquery']
      },
      'ga': {
        deps: ['ga-init'],
        exports: 'ga'
      },
      'marionette': {
        deps: ['backbone'],
        exports: 'Backbone.Marionette'
      }
    },
    paths: {
      'backbone': 'vendor/backbone/backbone-min',
      'backbone-queryparams': 'vendor/backbone.queryparams/backbone.queryparams',
      'backbone-safesync': 'vendor/backbone-safesync/backbone-safesync',
      'bootstrap-carousel': 'vendor/bootstrap/bootstrap-carousel',
      'bootstrap-collapse': 'vendor/bootstrap/bootstrap-collapse',
      'bootstrap-collapse-partial': 'vendor/bootstrap-extras/bootstrap-collapse-partial',
      'bootstrap-dropdown': 'vendor/bootstrap/bootstrap-dropdown',
      'bootstrap-popover': 'vendor/bootstrap/bootstrap-popover',
      'bootstrap-tab': 'vendor/bootstrap/bootstrap-tab',
      'bootstrap-tooltip': 'vendor/bootstrap-extras/bootstrap-tooltip',
      'bootstrap-transition': 'vendor/bootstrap/bootstrap-transition',
      'bootstrap-typeahead': 'vendor/bootstrap-extras/bootstrap-typeahead',
      'hgn': 'vendor/requirejs-hogan-plugin/hgn',
      'hogan': 'vendor/requirejs-hogan-plugin/hogan',
      'ga': '//www.google-analytics.com/analytics',
      'jquery': 'vendor/jquery.min',
      'lodash': 'vendor/lodash/lodash.min',
      'marionette': 'vendor/backbone.marionette/lib/backbone.marionette.min',
      'mustache': 'vendor/mustache/mustache',
      'text': 'vendor/requirejs-hogan-plugin/text'
    }
  });

  require([ 'app', 'backbone', 'controller', 'i18n', 'ga', 'marionette', 'mustache', 'router', 'backbone-safesync', 'bootstrap-collapse', 'bootstrap-dropdown'], function(appConfig, app, Backbone, controller, i18n, ga, Marionette, Mustache, Router) {
    

    var baseUrl, router;
    try {
      baseUrl = appConfig.baseUrl;
      if (appConfig.viewJson) {
        appConfig.viewJson.i18n = i18n;
        appConfig.viewJson.config = {
          baseUrl: baseUrl
        };
      }
      app.start(appConfig);
      ga('create', appConfig.googleAnalyticsId, 'stanford.edu');
      router = new Router({
        controller: controller
      });
      router.on('all', function() {
        $('body').scrollTop(1);
        return $('body').removeClass('slideRight');
      });
      $(document).on('mousedown', 'ul.typeahead', function(e) {
        return e.preventDefault();
      });
      Backbone.Model.prototype._parse = Backbone.Model.prototype.parse;
      Backbone.Model.prototype.parse = function(response, options) {
        var result;
        result = response;
        result.i18n = i18n;
        result.config = {
          baseUrl: baseUrl
        };
        return Backbone.Model.prototype._parse(result, options);
      };
      Backbone.history._navigate = Backbone.history.navigate;
      Backbone.history.navigate = function(fragment, options) {
        Backbone.history._navigate(fragment != null ? fragment.replace(baseUrl, '') : void 0, options);
        return ga('send', 'pageview');
      };
      return Backbone.history.start({
        pushState: Modernizr.history,
        hashChange: false,
        root: baseUrl,
        silent: $('body').hasClass('error')
      });
    } catch (e) {
      console.log("Error initializing backbone...");
      return console.log(e);
    }
  });

}).call(this);

define("main", function(){});
