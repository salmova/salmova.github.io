!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}},function(e,t,n){
/*!*
 * ВНИМАНИЕ! Этот файл генерируется автоматически.
 * Любые изменения этого файла будут потеряны при следующей компиляции.
 */
n(2),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12)},function(e,t,n){n(3)()},function(e,t,n){var r,i;i=this,void 0===(r=function(){return i.svg4everybody=function(){
/*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
function e(e,t,n){if(n){var r=document.createDocumentFragment(),i=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");i&&t.setAttribute("viewBox",i);for(var o=n.cloneNode(!0);o.childNodes.length;)r.appendChild(o.firstChild);e.appendChild(r)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=t._cachedDocument;n||((n=t._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map((function(r){var i=t._cachedTarget[r.id];i||(i=t._cachedTarget[r.id]=n.getElementById(r.id)),e(r.parent,r.svg,i)}))}},t.onreadystatechange()}function n(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return function(r){var i,o=Object(r),s=window.top!==window.self;i="polyfill"in o?o.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&s;var a={},c=window.requestAnimationFrame||setTimeout,u=document.getElementsByTagName("use"),l=0;i&&function r(){for(var s=0;s<u.length;){var d=u[s],h=d.parentNode,m=n(h),b=d.getAttribute("xlink:href")||d.getAttribute("href");if(!b&&o.attributeName&&(b=d.getAttribute(o.attributeName)),m&&b){if(i)if(!o.validate||o.validate(b,m,d)){h.removeChild(d);var f=b.split("#"),p=f.shift(),_=f.join("#");if(p.length){var v=a[p];v||((v=a[p]=new XMLHttpRequest).open("GET",p),v.send(),v._embeds=[]),v._embeds.push({parent:h,svg:m,id:_}),t(v)}else e(h,m,document.getElementById(_))}else++s,++l}else++s}(!u.length||u.length-l>0)&&c(r,67)}()}}()}.apply(t,[]))||(e.exports=r)},function(e,t,n){n(0)},function(e,t,n){n(0)((function(){jQuery(".bem-content__persons__bem-link").each((function(){var e=$(this).text().split(" ");$(this).html(e.reduce((function(e,t){var n=t.length>9?t.substr(0,6)+"...":t;return"".concat(e).concat(n,"<br>")}),""))}))}))},function(e,t,n){n(0)((function(){var e=jQuery(".bem-header"),t=(jQuery(".bem-header__fixed"),jQuery(".bem-header__new-user")),n=jQuery(window).scrollTop(),r=(parseInt(jQuery(".bem-search").outerHeight()),"down"),i=.34*jQuery(window).height()+40;jQuery(window).width()<="768"&&t.addClass("bem-circle-block bem-circle-block_size_mid"),jQuery(window).scroll((function(){r=jQuery(window).scrollTop()-n>=0?"down":"up",jQuery(".bem-search__history").removeClass("bem-search_show"),"down"==r&&(jQuery(window).scrollTop()>=i&&jQuery(window).width()>"768"||jQuery(window).scrollTop()>="200"&&jQuery(window).width()<="768")&&(e.addClass("bem-header__fixed"),jQuery(window).width()>"768"&&t.addClass("bem-button")),"up"==r&&(jQuery(window).scrollTop()<i&&jQuery(window).width()>"768"||jQuery(window).scrollTop()<"200"&&jQuery(window).width()<="768")&&(e.removeClass("bem-header__fixed"),t.removeClass("bem-button")),n=jQuery(window).scrollTop()}))}))},function(e,t,n){n(0)((function(){$(".bem-posts__input").val(""),$(document).one("focus.textarea",".bem-posts__input",(function(){baseH=this.scrollHeight})).on("input.textarea",".bem-posts__input",(function(){baseH<this.scrollHeight?$(this).height(0).height(this.scrollHeight):$(this).height(0).height(baseH-5)})),jQuery(window).width()<="768"&&$(".bem-posts__checkbox-label span").text("Анонимно")}))},function(e,t,n){n(0)((function(){jQuery(".bem-record__like").on("click",(function(){return e(this),!0}));var e=function(e){var t=parseInt($(e).children("span").html())+1;return $(e).children("span").text(t>=0?t:0),!0}}))},function(e,t,n){n(0)((function(){var e=$(".bem-search__history-caption .bem-link"),t=$(".bem-search__history-list"),n=$(".bem-search__input"),r=$(".bem-search");n.val(""),e.on("click",(function(){return t.text(""),!1})),r.on("input.input",".bem-search__input",(function(){var e=$(this).parents(".bem-search");$(e).children(".bem-search__history").addClass("bem-search_show")})),r.on("click",".bem-search__bem-button",(function(){var e=$(this).parents(".bem-search");return $(e).children(".bem-search__history").removeClass("bem-search_show"),!1}))}))},function(e,t,n){n(0)((function(){$(".bem-select").each((function(){var e=$(this),t=e.find("option"),n=t.length;t.filter(":selected");e.hide(),e.wrap('<div class="bem-select"></div>'),$("<div>",{class:"bem-select__gap",text:t.eq(0).text()}).insertAfter(e);var r=e.next(".bem-select__gap");r.find(".caret");$("<ul>",{class:"bem-select__list"}).insertAfter(r);for(var i=r.next(".bem-select__list"),o=0;o<n;o++)$("<li>",{class:"bem-select__item",html:$("<span>",{text:t.eq(o).text()})}).attr("data-value",t.eq(o).val()).appendTo(i);var s=i.find("li");i.slideUp(0),r.on("click",(function(){return $(this).hasClass("on")?($(this).removeClass("on"),i.slideUp(500)):($(this).addClass("on"),i.slideDown(500),s.on("click",(function(){var e=$(this).data("value");$("select").val(e).attr("selected","selected"),r.text($(this).find("span").text()),i.slideUp(500),r.removeClass("on")}))),!1}))}))}))},function(e,t,n){n(0)((function(){var e=jQuery(".bem-user-profile"),t=jQuery(".bem-user-profile__list");e.click((function(){return jQuery(window).width()<="768"?(jQuery(".bem-disabled").toggleClass("bem-disabled_show"),jQuery("body").css("overflow","hidden"),t.addClass("bem-user-profile_show"),t.animate({right:"0px"},1e3)):("0px"==jQuery(".bem-user-profile__list").css("right")&&jQuery(".bem-user-profile__list").animate({right:"-240px"},1e3),t.toggleClass("bem-user-profile_show")),!1})),jQuery(".bem-disabled").on("click",(function(){jQuery(".bem-user-profile__list").animate({right:"-240px"},1e3),setTimeout((function(){jQuery(".bem-user-profile__list").removeClass("bem-user-profile_show"),jQuery(".bem-disabled").removeClass("bem-disabled_show")}),1e3)}))}))},function(e,t,n){n(0)((function(){jQuery(document).on("click",(function(){jQuery(".bem-select__gap").removeClass("on"),jQuery(".bem-select__list").slideUp(500),jQuery(".bem-search__history").removeClass("bem-search_show")}))}))}]);