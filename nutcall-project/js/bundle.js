!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}},function(e,t,n){
/*!*
 * ВНИМАНИЕ! Этот файл генерируется автоматически.
 * Любые изменения этого файла будут потеряны при следующей компиляции.
 */
n(2),n(4),n(5),n(6),n(7),n(8)},function(e,t,n){n(3)()},function(e,t,n){var r,o;o=this,void 0===(r=function(){return o.svg4everybody=function(){
/*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
function e(e,t,n){if(n){var r=document.createDocumentFragment(),o=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");o&&t.setAttribute("viewBox",o);for(var i=n.cloneNode(!0);i.childNodes.length;)r.appendChild(i.firstChild);e.appendChild(r)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=t._cachedDocument;n||((n=t._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map((function(r){var o=t._cachedTarget[r.id];o||(o=t._cachedTarget[r.id]=n.getElementById(r.id)),e(r.parent,r.svg,o)}))}},t.onreadystatechange()}function n(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return function(r){var o,i=Object(r),a=window.top!==window.self;o="polyfill"in i?i.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&a;var s={},l=window.requestAnimationFrame||setTimeout,d=document.getElementsByTagName("use"),u=0;o&&function r(){for(var a=0;a<d.length;){var c=d[a],f=c.parentNode,m=n(f),b=c.getAttribute("xlink:href")||c.getAttribute("href");if(!b&&i.attributeName&&(b=c.getAttribute(i.attributeName)),m&&b){if(o)if(!i.validate||i.validate(b,m,c)){f.removeChild(c);var p=b.split("#"),v=p.shift(),h=p.join("#");if(v.length){var y=s[v];y||((y=s[v]=new XMLHttpRequest).open("GET",v),y.send(),y._embeds=[]),y._embeds.push({parent:f,svg:m,id:h}),t(y)}else e(f,m,document.getElementById(h))}else++a,++u}else++a}(!d.length||d.length-u>0)&&l(r,67)}()}}()}.apply(t,[]))||(e.exports=r)},function(e,t,n){n(0)((function(){jQuery(".bem-content__persons__bem-link").each((function(){var e=$(this).text().split(" ");$(this).html(e.reduce((function(e,t){var n=t.length>9?t.substr(0,6)+"...":t;return"".concat(e).concat(n,"<br>")}),""))}))}))},function(e,t,n){n(0)((function(){var e=jQuery(".bem-header"),t=(jQuery(".bem-header__fixed"),jQuery(".bem-header__new-user")),n=jQuery(window).scrollTop(),r="down";jQuery(window).width()<="768"&&t.addClass("bem-circle-block bem-circle-block_size_mid"),jQuery(window).scroll((function(){"down"==(r=jQuery(window).scrollTop()-n>=0?"down":"up")&&(jQuery(window).scrollTop()>="440"&&jQuery(window).width()>"768"||jQuery(window).scrollTop()>="250"&&jQuery(window).width()<="768")&&(e.addClass("bem-header__fixed"),e.css("margin-top","0"),jQuery(window).width()>"768"&&t.addClass("bem-button")),"up"==r&&(jQuery(window).scrollTop()<"440"&&jQuery(window).width()>"768"||jQuery(window).scrollTop()<"250"&&jQuery(window).width()<="768")&&e.css("margin-top","-56px"),jQuery(window).scrollTop()<=100&&(e.removeClass("bem-header__fixed"),t.removeClass("bem-button")),n=jQuery(window).scrollTop()}))}))},function(e,t,n){n(0)((function(){$(".bem-select").each((function(){var e=$(this),t=e.find("option"),n=t.length;t.filter(":selected");e.hide(),e.wrap('<div class="bem-select"></div>'),$("<div>",{class:"bem-select__gap",text:t.eq(0).text()}).insertAfter(e);var r=e.next(".bem-select__gap");r.find(".caret");$("<ul>",{class:"bem-select__list"}).insertAfter(r);for(var o=r.next(".bem-select__list"),i=0;i<n;i++)$("<li>",{class:"bem-select__item",html:$("<span>",{text:t.eq(i).text()})}).attr("data-value",t.eq(i).val()).appendTo(o);var a=o.find("li");o.slideUp(0),r.on("click",(function(){return $(this).hasClass("on")?($(this).removeClass("on"),o.slideUp(500)):($(this).addClass("on"),o.slideDown(500),a.on("click",(function(){var e=$(this).data("value");$("select").val(e).attr("selected","selected"),r.text($(this).find("span").text()),o.slideUp(500),r.removeClass("on")}))),!1}))}))}))},function(e,t,n){n(0)((function(){var e=jQuery(".bem-user-profile"),t=jQuery(".bem-user-profile__list");e.click((function(){return jQuery(window).width()<="768"?(t.css({right:0}),jQuery(".bem-header").toggleClass("bem-disabled"),jQuery("body").css("overflow","hidden")):t.toggleClass("bem-user-profile_show"),!1}))}))},function(e,t,n){n(0)((function(){jQuery(document).on("click",(function(){jQuery(".bem-user-profile__list").attr("style",""),jQuery("body").attr("style",""),jQuery(".bem-header").removeClass("bem-disabled"),jQuery(".bem-user-profile__list").removeClass("bem-user-profile_show"),jQuery(".bem-select__gap").removeClass("on"),jQuery(".bem-select__list").slideUp(500)}))}))}]);