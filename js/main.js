function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var n;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(n="Object"===(n={}.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}document.addEventListener("DOMContentLoaded",function(){function B(){0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(o=n&&n.offsetWidth,a=i&&i.offsetWidth,r=c&&c.offsetWidth);var e=document.getElementById("nav"),t=window.innerWidth<768||o+a+r>e.offsetWidth-120;t?e.classList.add("hide-menu"):e.classList.remove("hide-menu")}var n=document.getElementById("site-name"),o=n&&n.offsetWidth,i=document.querySelector("#menus .menus_items"),a=i&&i.offsetWidth,c=document.querySelector("#search-button"),r=c&&c.offsetWidth;function s(e){function t(e){e.each(function(e,t){var t=$(t),n=t.attr("data-lazy-src")||t.attr("src"),o=t.attr("alt")||"";t.wrap('<a href="'.concat(n,'" data-fancybox="group" data-caption="').concat(o,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.fancybox.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.fancybox.js),function(){t($(e))})):t($(e))}function _(){var n="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img"):[],o=0<n.length,i=document.querySelectorAll("#article-container .justified-gallery"),a=0<i.length;(a||o)&&btf.isJqueryLoad(function(){var e,t;a&&(e=i,t=$(e),(e=t.find("img")).unwrap(),e.length&&e.each(function(e,t){$(t).attr("data-lazy-src")&&$(t).attr("src",$(t).attr("data-lazy-src")),$(t).wrap("<div></div>")}),d?btf.initJustifiedGallery(t):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js),function(){btf.initJustifiedGallery(t)}),d=!0)),o&&s(n)})}function C(){var o,i,a,c,r,s=document.getElementById("rightside"),l=window.innerHeight+56;document.body.scrollHeight<=l?s.style.cssText="opacity: 1; transform: translateX(-38px)":(i=!(o=0),a=document.getElementById("page-header"),c="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow,window.addEventListener("scroll",btf.throttle(function(e){var t,n=window.scrollY||document.documentElement.scrollTop;t=o<n,56<(o=n)?(t?(a.classList.contains("nav-visible")&&a.classList.remove("nav-visible"),r&&!0===i&&(chatBtnHide(),i=!1)):(a.classList.contains("nav-visible")||a.classList.add("nav-visible"),c&&!1===i&&(chatBtnShow(),i=!0)),a.classList.add("nav-fixed"),"0"===window.getComputedStyle(s).getPropertyValue("opacity")&&(s.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===n&&a.classList.remove("nav-fixed","nav-visible"),s.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=l&&(s.style.cssText="opacity: 1; transform: translateX(-38px)")},200)))}function T(){var e=document.getElementById("card-toc"),c=e.getElementsByClassName("toc-content")[0],r=c.querySelectorAll(".toc-link"),i=document.getElementById("article-container"),n=(window.addEventListener("scroll",btf.throttle(function(e){var t=window.scrollY||document.documentElement.scrollTop;n(t),a(t)},100)),function(e){var t=i.clientHeight,n=document.documentElement.clientHeight,o=i.offsetTop,t=n<t?t-n:document.documentElement.scrollHeight-n,n=Math.round(100*((e-o)/t));c.setAttribute("progress-percentage",100<n?100:n<=0?0:n)}),s=GLOBAL_CONFIG.isanchor,t=function(){e.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"},o=function(){e.style.animation="toc-close .2s",setTimeout(function(){e.style.cssText="opacity:''; animation: ''; right: ''"},100)},l=(document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(e).getPropertyValue("opacity")?t:o)()}),c.addEventListener("click",function(e){e.preventDefault();e=e.target.classList.contains("toc-link")?e.target:e.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&o()}),i.querySelectorAll("h1,h2,h3,h4,h5,h6")),d="",a=function(n){if(0===r.length||0===n)return!1;var e,o="",i="";if(l.forEach(function(e,t){n>btf.getEleTop(e)-80&&(o="#"+encodeURI(e.getAttribute("id")),i=t)}),d!==i)if(s&&(e=o,window.history.replaceState)&&e!==window.location.hash&&(e=e||location.pathname,window.history.replaceState({},"",e)),""===o)c.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")}),d=i;else{d=i,c.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")});for(var a=r[i],t=(a.classList.add("active"),setTimeout(function(){var e,t;e=(e=a).getBoundingClientRect().top,t=c.scrollTop,e>document.documentElement.clientHeight-100&&(c.scrollTop=t+150),e<100&&(c.scrollTop=t-150)},0),a.parentNode);!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}}}function k(e){e.forEach(function(e){var t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}var l,d=!1,t=function(){var t=document.body,n=(t.classList.add("read-mode"),document.createElement("button"));n.type="button",n.className="fas fa-sign-out-alt exit-readmode",t.appendChild(n),n.addEventListener("click",function e(){t.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",e)})},u=function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200)},f=function(){document.getElementById("rightside-config-hide").classList.toggle("show")},m=function(){btf.scrollToDest(0,500)},h=function(){var e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")},g=function(e){var t=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),n="";if(e){if(20<=t)return;n=t+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||B(!0)}else{if(t<=10)return;n=t-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&B(!0)}saveToLocal.set("global-font-size",n,2)},N=(document.getElementById("rightside").addEventListener("click",function(e){switch(e.target.id||e.target.parentNode.id){case"go-up":m();break;case"rightside_config":f();break;case"readmode":t();break;case"darkmode":u();break;case"hide-aside-btn":h();break;case"font-plus":g(!0);break;case"font-minus":g()}}),function(){document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){var t,n,o,i=this.parentNode;i.classList.contains("active")||(t=i.parentNode.nextElementSibling,(o=btf.siblings(i,".active")[0])&&o.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(t.children).forEach(function(e){e.id===n?e.classList.add("active"):e.classList.remove("active")}),0<(o=t.querySelectorAll("#".concat(n," .justified-gallery"))).length&&btf.initJustifiedGallery(o))})})}),x=function(){document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})};window.refreshFn=function(){var e,t,n,o,i,a,c,r,s,l,d,u,f,m,h,g,y,p,b,L,v,E,A,S,w,I;function O(){r.style.overflow="",r.style.paddingRight="",btf.fadeOut(c,.5),a.classList.remove("open")}function G(e,t,n){var o,i=document.createDocumentFragment();l&&((o=document.createElement("div")).className="highlight-tools ".concat(h),o.innerHTML=f+e+m,o.addEventListener("click",b),i.appendChild(o)),s&&t.offsetHeight>s+30&&((e=document.createElement("div")).className="code-expand-btn",e.innerHTML='<i class="fas fa-angle-double-down"></i>',e.addEventListener("click",L),i.appendChild(e)),"hl"===n?t.insertBefore(i,t.firstChild):t.parentNode.insertBefore(i,t)}B(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&T(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(n=GLOBAL_CONFIG.noticeOutdate,(o=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=n.limitDay)&&((t=document.createElement("div")).className="post-outdate-notice",t.textContent=n.messagePrev+" "+o+" "+n.messageNext,o=document.getElementById("article-container"),"top"===n.position?o.insertBefore(t,o.firstChild):o.appendChild(t)),GLOBAL_CONFIG.relativeDate.post&&k(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&k(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(n=document.getElementById("runtimeshow"))&&(o=n.getAttribute("data-publishDate"),n.innerText=btf.diffDate(o)+" "+GLOBAL_CONFIG.runtime),(t=document.getElementById("last-push-date"))&&(e=t.getAttribute("data-lastPushDate"),t.innerText=btf.diffDate(e,!0)),(e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();this.classList.toggle("expand");e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})})),i=document.getElementById("toggle-menu"),a=document.getElementById("sidebar-menus"),c=document.getElementById("menu-mask"),r=document.body,i.addEventListener("click",function(){btf.sidebarPaddingR(),r.style.overflow="hidden",btf.fadeIn(c,.5),a.classList.add("open")}),c.addEventListener("click",function(e){a.classList.contains("open")&&O()}),window.addEventListener("resize",function(e){btf.isHidden(i)&&a.classList.contains("open")&&O()}),GLOBAL_CONFIG_SITE.isHome&&(v=document.getElementById("scroll-down"))&&v.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),(v=GLOBAL_CONFIG.highlight)&&(S=v.highlightCopy,I=v.highlightLang,A=GLOBAL_CONFIG_SITE.isHighlightShrink,s=v.highlightHeightLimit,l=S||I||void 0!==A,d="highlighjs"===v.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),l||s)&&d.length&&(u="prismjs"===v.plugin,h=!(m=f="")===A?"closed":"",void 0!==A&&(f='<i class="fas fa-angle-down expand '.concat(h,'"></i>')),S&&(m='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),g=function(e,t){var n;document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((n=t.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,n.style.opacity=1,setTimeout(function(){n.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport},y=function(e){var t=e.parentNode,n=(t.classList.add("copy-true"),window.getSelection()),o=document.createRange(),o=(u?o.selectNodeContents(t.querySelectorAll("pre code")[0]):o.selectNodeContents(t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o),n.toString());g(o,e.lastChild),n.removeAllRanges(),t.classList.remove("copy-true")},p=function(e){var t=_toConsumableArray(e.parentNode.children).slice(1);e.firstChild.classList.toggle("closed"),btf.isHidden(t[t.length-1])?t.forEach(function(e){e.style.display="block"}):t.forEach(function(e){e.style.display="none"})},b=function(e){e=e.target.classList;e.contains("expand")?p(this):e.contains("copy-button")&&y(this)},L=function(){this.classList.toggle("expand-done")},I?u?d.forEach(function(e){var t=e.getAttribute("data-language")?e.getAttribute("data-language"):"Code",t='<div class="code-lang">'.concat(t,"</div>");btf.wrap(e,"figure","","highlight"),G(t,e)}):d.forEach(function(e){var t=e.getAttribute("class").split(" ")[1];G('<div class="code-lang">'.concat(t="plain"!==t&&void 0!==t?t:"Code","</div>"),e,"hl")}):u?d.forEach(function(e){btf.wrap(e,"figure","","highlight"),G("",e)}):d.forEach(function(e){G("",e,"hl")})),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(e){var t,n=e.parentNode;n.parentNode.classList.contains("justified-gallery")||((t=document.createElement("div")).className="img-alt is-center",t.textContent=e.getAttribute("alt"),n.insertBefore(t,e.nextSibling))}),_(),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(E=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(e){var t="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";E.update({background:t})}),C(),(A=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&A.forEach(function(e){btf.wrap(e,"div","","table-wrap")}),(S=document.querySelectorAll("#article-container .hide-button")).length&&S.forEach(function(e){e.addEventListener("click",function(e){var t=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<t.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(t.querySelectorAll(".justified-gallery"))})}),N(),x(),w=!1,(I=document.querySelector("#comment-switch > .switch-btn"))&&I.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){btf.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"}),w||"function"!=typeof loadOtherComment||(w=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",B),window.addEventListener("orientationchange",function(){setTimeout(B(!0),100)}),document.querySelectorAll("#sidebar-menus .expand").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide");var e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})}),window.addEventListener("touchmove",function(e){document.querySelectorAll("#nav .menus_item_child").forEach(function(e){btf.isHidden(e)||(e.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(l=GLOBAL_CONFIG.copyright,document.body.oncopy=function(e){e.preventDefault();var t=window.getSelection(0).toString(),t=t.length>l.limitCount?t+"\n\n\n"+l.languages.author+"\n"+l.languages.link+window.location.href+"\n"+l.languages.source+"\n"+l.languages.info:t;return(e.clipboardData?e:window).clipboardData.setData("text",t)})});