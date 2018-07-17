module({"css!/build/withme/SmartBanner.css":"css!/asset/d41d8cd98f00b204/build/withme/SmartBanner.css"},function(t){return(s=function(t){this.origHtmlMargin=parseFloat($("html").css("margin-top")),this.options=$.extend({},$.smartbanner.defaults,t),t=navigator.standalone;var s=navigator.userAgent;if(this.options.force?this.type=this.options.force:null!==s.match(/Windows Phone/i)&&null!==s.match(/Edge|Touch/i)?this.type="windows":null!==s.match(/iPhone|iPod/i)||s.match(/iPad/)&&this.options.iOSUniversalApp?null!==s.match(/Safari/i)&&(null!==s.match(/CriOS/i)||6>window.Number(s.substr(s.indexOf("OS ")+3,3).replace("_",".")))&&(this.type="ios"):s.match(/\bSilk\/(.*\bMobile Safari\b)?/)||s.match(/\bKF\w/)||s.match("Kindle Fire")?this.type="kindle":null!==s.match(/Android/i)&&(this.type="android"),this.type&&!(t||this.getCookie("sb-closed")||this.getCookie("sb-installed"))&&(this.scale="auto"==this.options.scale?$(window).width()/window.screen.width:this.options.scale,1>this.scale&&(this.scale=1),0!==(t=$("android"==this.type?'meta[name="google-play-app"]':"ios"==this.type?'meta[name="apple-itunes-app"]':"kindle"==this.type?'meta[name="kindle-fire-app"]':'meta[name="msApplication-ID"]')).length)){if("windows"==this.type)this.appId=$('meta[name="msApplication-PackageFamilyName"]').attr("content");else{if(!(s=/app-id=([^\s,]+)/.exec(t.attr("content"))))return;this.appId=s[1]}this.title=this.options.title?this.options.title:t.data("title")||$("title").text().replace(/\s*[|\-\u00b7].*$/,""),this.author=this.options.author?this.options.author:t.data("author")||($('meta[name="author"]').length?$('meta[name="author"]').attr("content"):window.location.hostname),this.iconUrl=t.data("icon-url"),this.price=t.data("price"),this.options.onInstall="function"==typeof this.options.onInstall?this.options.onInstall:function(){},this.options.onClose="function"==typeof this.options.onClose?this.options.onClose:function(){},this.create(),this.show(),this.listen()}}).prototype={constructor:s,create:function(){var t,s=this.options.url?this.options.url:("windows"==this.type?"ms-windows-store:navigate?appid=":"android"==this.type?"market://details?id=":"kindle"==this.type?"amzn://apps/android?asin=":"https://itunes.apple.com/"+this.options.appStoreLanguage+"/app/id")+this.appId,i=(n=this.price||this.options.price)?n+" - "+("android"==this.type?this.options.inGooglePlay:"kindle"==this.type?this.options.inAmazonAppStore:"ios"==this.type?this.options.inAppStore:this.options.inWindowsStore):"",n=null===this.options.iconGloss?"ios"==this.type:this.options.iconGloss;"android"==this.type&&this.options.GooglePlayParams&&(s=s+"&referrer="+this.options.GooglePlayParams),s='<div id="smartbanner" class="'+this.type+'"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+this.title+"</strong><span>"+this.author+"</span><span>"+i+'</span></div><a href="'+s+'" class="sb-button"><span>'+this.options.button+"</span></a></div></div>",this.options.layer?$(this.options.appendToSelector).append(s):$(this.options.appendToSelector).prepend(s),this.options.stateSelector||(this.options.stateSelector=$("#smartbanner")),this.options.icon?t=this.options.icon:this.iconUrl?t=this.iconUrl:0<$('link[rel="apple-touch-icon-precomposed"]').length?(t=$('link[rel="apple-touch-icon-precomposed"]').attr("href"),null===this.options.iconGloss&&(n=!1)):0<$('link[rel="apple-touch-icon"]').length?t=$('link[rel="apple-touch-icon"]').attr("href"):0<$('meta[name="msApplication-TileImage"]').length?t=$('meta[name="msApplication-TileImage"]').attr("content"):0<$('meta[name="msapplication-TileImage"]').length&&(t=$('meta[name="msapplication-TileImage"]').attr("content")),t?($("#smartbanner .sb-icon").css("background-image","url("+t+")"),n&&$("#smartbanner .sb-icon").addClass("gloss")):$("#smartbanner").addClass("no-icon"),this.bannerHeight=$("#smartbanner").outerHeight()+2,1<this.scale&&($("#smartbanner").css("top",parseFloat($("#smartbanner").css("top"))*this.scale).css("height",parseFloat($("#smartbanner").css("height"))*this.scale).hide(),$("#smartbanner .sb-container").css("-webkit-transform","scale("+this.scale+")").css("-msie-transform","scale("+this.scale+")").css("-moz-transform","scale("+this.scale+")").css("width",$(window).width()/this.scale)),$("#smartbanner").css("position",this.options.layer?"fixed":"static")},listen:function(){$("#smartbanner .sb-close").on("click",$.proxy(this.close,this)),$("#smartbanner .sb-button").on("click",$.proxy(this.install,this))},show:function(t){var s=$("#smartbanner");s.stop(),this.options.layer?(s.animate({top:0,display:"block"},this.options.speedIn).add(this.options.stateSelector).addClass("smartbanner-shown").show(),$(this.pushSelector).animate({paddingTop:this.origHtmlMargin+this.bannerHeight*this.scale},this.options.speedIn,"swing",t)):$.support.transition?(s.animate({top:0},this.options.speedIn).add(this.options.stateSelector).addClass("smartbanner-shown"),$(this.pushSelector).addClass("sb-animation").one($.support.transition.end,function(){$("html").removeClass("sb-animation"),t&&t()}).emulateTransitionEnd(this.options.speedIn).css("margin-top",this.origHtmlMargin+this.bannerHeight*this.scale)):s.slideDown(this.options.speedIn).add(this.options.stateSelector).addClass("smartbanner-shown")},hide:function(t){var s=$("#smartbanner");s.stop(),this.options.layer?(s.animate({top:-1*this.bannerHeight*this.scale,display:"block"},this.options.speedIn).add(this.options.stateSelector).removeClass("smartbanner-shown"),$(this.pushSelector).animate({paddingTop:this.origHtmlMargin},this.options.speedIn,"swing",t)):$.support.transition?("android"!==this.type?s.css("top",-1*this.bannerHeight*this.scale).add(this.options.stateSelector).removeClass("smartbanner-shown"):s.css({display:"none"}).add(this.options.stateSelector).removeClass("smartbanner-shown"),$(this.pushSelector).addClass("sb-animation").one($.support.transition.end,function(){$("html").removeClass("sb-animation"),t&&t()}).emulateTransitionEnd(this.options.speedOut).css("margin-top",this.origHtmlMargin)):s.slideUp(this.options.speedOut).add(this.options.stateSelector).removeClass("smartbanner-shown")},close:function(t){t.preventDefault(),this.hide(),this.setCookie("sb-closed","true",this.options.daysHidden),this.options.onClose(t)},install:function(t){this.options.hideOnInstall&&this.hide(),this.setCookie("sb-installed","true",this.options.daysReminder),this.options.onInstall(t)},setCookie:function(t,s,i){var n=new Date;n.setDate(n.getDate()+i),s=encodeURI(s)+(null===i?"":"; expires="+n.toUTCString()),document.cookie=t+"="+s+"; path=/;"},getCookie:function(t){var s,i,n,e=document.cookie.split(";");for(s=0;s<e.length;s++)if(i=e[s].substr(0,e[s].indexOf("=")),n=e[s].substr(e[s].indexOf("=")+1),(i=i.replace(/^\s+|\s+$/g,""))==t)return decodeURI(n);return null},switchType:function(){var t=this;this.hide(function(){t.type="android"==t.type?"ios":"android";var s=$("android"==t.type?'meta[name="google-play-app"]':'meta[name="apple-itunes-app"]').attr("content");t.appId=/app-id=([^\s,]+)/.exec(s)[1],$("#smartbanner").detach(),t.create(),t.show()})}},$.smartbanner=function(t){var i=$(window),n=i.data("smartbanner");n||i.data("smartbanner",n=new s("object"==typeof t&&t)),"string"==typeof t&&n[t]()},$.smartbanner.defaults={title:null,author:null,price:"FREE",appStoreLanguage:"us",inAppStore:"On the App Store",inGooglePlay:"In Google Play",inAmazonAppStore:"In the Amazon Appstore",inWindowsStore:"In the Windows Store",GooglePlayParams:null,icon:null,iconGloss:null,button:"VIEW",url:null,scale:"auto",speedIn:300,speedOut:400,daysHidden:15,daysReminder:90,force:null,hideOnInstall:!0,layer:!1,iOSUniversalApp:!0,appendToSelector:"body",pushSelector:"html"},$.smartbanner.Constructor=s,void(void 0===$.support.transition&&($.fn.emulateTransitionEnd=function(t){var s=!1,i=this;return $(this).one($.support.transition.end,function(){s=!0}),setTimeout(function(){s||$(i).trigger($.support.transition.end)},t),this},$(function(){var t,s=$.support;t:{t=document.createElement("smartbanner");var i,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(i in n)if(void 0!==t.style[i]){t={end:n[i]};break t}t=!1}s.transition=t})));var s});