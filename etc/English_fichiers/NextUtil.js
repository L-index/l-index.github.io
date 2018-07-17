module({"css!/build/withme/NextUtil.css":"css!/asset/d41d8cd98f00b204/build/withme/NextUtil.css"},function(t){t=function(){function t(t,e,i){return(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t}var e="function"==typeof Float32Array;return function(i,r,n,o){if(!(0<=i&&1>=i&&0<=n&&1>=n))throw Error("bezier x values must be in [0, 1] range");var s=e?new Float32Array(11):Array(11);if(i!==r||n!==o)for(var a=0;11>a;++a)s[a]=t(.1*a,i,n);return function(e){if(i===r&&n===o)return e;if(0===e)return 0;if(1===e)return 1;for(var a=0,l=1;10!==l&&s[l]<=e;++l)a+=.1;l=a+(e-s[--l])/(s[l+1]-s[l])*.1;var u=3*(1-3*n+3*i)*l*l+2*(3*n-6*i)*l+3*i;if(.001<=u){for(a=0;4>a&&0!==(u=3*(1-3*n+3*i)*l*l+2*(3*n-6*i)*l+3*i);++a){var h=t(l,i,n)-e;l=l-h/u}e=l}else if(0===u)e=l;else{l=a,a=a+.1;var c=0;do{0<(u=t(h=l+(a-l)/2,i,n)-e)?a=h:l=h}while(1e-7<Math.abs(u)&&10>++c);e=h}return t(e,r,o)}}}();var e,i,r,n,o=function(t){return function(e){return function(){e.call(this,arguments[t-1])}}},s={startsWith:function(t,e,i){return t.substr(i||0,e.length)===e},endsWith:function(t,e,i){return("number"!=typeof i||!isFinite(i)||Math.floor(i)!==i||i>t.length)&&(i=t.length),i-=e.length,-1!==(t=t.indexOf(e,i))&&t===i},unicodeChars:RegExp("\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][̀-ͯ︠-︣⃐-⃰]?|[̀-ͯ︠-︣⃐-⃰]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[︎️]?(?:[̀-ͯ︠-︣⃐-⃰]|\ud83c[\udffb-\udfff])?(?:‍(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[︎️]?(?:[̀-ͯ︠-︣⃐-⃰]|\ud83c[\udffb-\udfff])?)*","g"),length:function(t){if("string"!=typeof t)throw Error("ERROR: Must supply a string to check the length");return null===t||0===t.length?0:t.match(this.unicodeChars).length},substring:function(t,e,i){if("string"!=typeof t||"number"!=typeof e||"number"!=typeof i)throw Error("ERROR: An error has occured, please check that you have supplied a string, starting number and ending number.");if(i<e)throw Error("ERROR: The ending number must be larger than the starting number");return t.match(this.unicodeChars).slice(e,i).join("")}},a={VK_BACKSPACE:8,VK_TAB:9,VK_ENTER:13,VK_CONTROL:17,VK_ESC:27,VK_SPACE:32,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_COMMA:188,wasPressed:function(t,e){return _.contains(e,t.keyCode)},is:function(t,e){if(!(e in this))throw Error("invalid key code: "+e);return t.keyCode===this[e]},getAlphaNumericChar:function(t){return(47<(t=t.keyCode)&&58>t||64<t||91>t)&&!(95<t&&106>t)&&(47<t&&58>t?t-48+"":64<t||91>t?String.fromCharCode(t).toLowerCase():95<t&&106>t?t-96+"":void 0)}};return function(t){return _.extend(t,{mirrorModelChange:function(e){return t.nthArg(2).call(this,t.hbEscape(e))}})}({nthArg:o,hbEscape:function(t){return function(e){this.$(t).html(Handlebars.Utils.escapeExpression(e))}},string:s,Keys:a,DomHelper:(e={StringUtil:s,Keys:a},i="top top-right right bottom-right bottom bottom-left left top-left".split(" "),r="Please use one of: "+JSON.stringify(i),n={TRANSITIONEVENT:"transitionend webkitTransitionEnd otransitionend oTransitionEnd MSTransitionEnd",ANIMATIONEVENT:"animationend webkitAnimationEnd oanimationend oAnimationEnd MSAnimationEnd",__toDegree:function(t){if(!_.isString(t)&&!_.isNumber(t))throw Error("direction must be a string or number, got: "+JSON.stringify(t)+". "+r);if(_.isNumber(t))return t;if(-1!==t.indexOf("deg"))return parseInt(t,10);var e=_.indexOf(i,t);if(-1===e)throw Error(JSON.stringify(t)+" is an unknown direction. "+r);return 45*e},__toCssRect:function(t){if(t!==window&&t!==document||(t=$("body")),_.isArray(t))return 4===t.length?{left:t[0],top:t[1],width:t[2],height:t[3]}:{left:t[0],top:t[1],width:0,height:0};if(t.jquery||t.nodeType)return{left:(t=$(t)[0].getBoundingClientRect()).left,top:t.top,width:t.width,height:t.height};if(_.isObject(t))return _.isNumber(t.width)?{left:t.left,top:t.top,width:t.width,height:t.height}:{left:t.left,top:t.top,width:0,height:0};throw Error("__toCssRect called with ",t,", expected a valid rectangle")},__getRelationalPoint:function(t){var e;e=this.__toDegree(t.at);var i=this.__toCssRect(t.of);t=t.margin||0,i.left-=t,i.top-=t,i.width+=2*t,i.height+=2*t;var r,n=i.left+i.width/2;return t=i.top+i.height/2,r=e-90,e=n+Math.floor(i.width*Math.cos(r*Math.PI/180)),t+=Math.floor(i.height*Math.sin(r*Math.PI/180)),{left:Math.min(Math.max(e,i.left),i.left+i.width),top:Math.min(Math.max(t,i.top),i.top+i.height)}},trackDoubleclick:function(t){return this.__doubleclickHelper({selector:t.selector,doubleclickName:t.name,doubleclickHandler:t.handler})},trackClickOrDouble:function(t){return IMVU.requireProperty(t,"clickName"),IMVU.requireProperty(t,"clickHandler"),this.__doubleclickHelper(t)},__doubleclickHelper:function(t){var e=IMVU.requireProperty(t,"selector"),i=IMVU.requireProperty(t,"doubleclickName"),r=IMVU.requireProperty(t,"doubleclickHandler"),n=IMVU.optionalProperty(t,"clickName",null),o=IMVU.optionalProperty(t,"clickHandler",null),s=null;return{type:"click",selector:e,name:"watching_for_click",handler:function(t){var a=t.currentTarget,l=this.__serviceProvider.get("timer").getTime();s&&s.time>=l-500&&s.target===a?(r.call(this,t),this.__recordEvent("dblclick",{name:i,selector:e}),s.timeout&&this.__serviceProvider.get("timer").clearTimeout(s.timeout),s=null):(s={time:l,target:a},o&&(s.timeout=this.__serviceProvider.get("timer").setTimeout(function(){o.call(this,t),this.__recordEvent("click",{name:n,selector:e}),s=null}.bind(this,t),500)))}}},__toDirection:function(t){for(;0>t;)t+=360;for(;360<=t;)t-=360;return i[Math.floor(t/45)]},__getOppositeDirection:function(t){return this.__toDirection(this.__toDegree(t)+180)},__getAttachmentRect:function(t){var e=this.__getRelationalPoint(t),i=this.__getRelationalPoint({at:this.__getOppositeDirection(t.at),of:t.me});return _.extend(this.__toCssRect(t.me),{left:e.left-i.left,top:e.top-i.top})},__attach:function(t){return this.__toCssRect($(t.me).css(this.__getAttachmentRect(t)))},onTransitionEnd:function(t,e,i){var r=function(){i&&t.off(this.TRANSITIONEVENT,r),e()};t.on(this.TRANSITIONEVENT,r)},onAnimationEnd:function(t,e){t.on(this.ANIMATIONEVENT,e)},DEFAULT_TEMPORARY_CLASS_DURATION:333,applyTemporaryClass:function(t,e,i,r){var o=$(e);o.hasClass(i)||(o.addClass(i),t.setTimeout(function(){o.removeClass(i)},r||n.DEFAULT_TEMPORARY_CLASS_DURATION))},radioClass:function(t,e){var i=$(t);return i.addClass(e).siblings().removeClass(e),i},dismissAllDismissibles:function(){$("[data-dismissible]").each(function(t,e){$(e).trigger("dismiss")})},__dismissibleClickHandler:function(t){var e=$(t.target);e.parents(".tooltip").length||$("[data-dismissible]").each(function(i,r){var n=$(r),o=e.closest(n.data("openerEl"));n.attr("data-nodismissonclickinsider")||n[0]===e[0]||$.contains(n[0],t.target)||o.length||n.trigger("dismiss")})},__dismissibleKeyupHandler:function(t){t.keyCode===e.Keys.VK_ESC&&$("[data-dismissible]").each(function(t,e){$(e).trigger("dismiss")})},dismissibleSetUp:function(){document.addEventListener("click",this.__dismissibleClickHandler,!0),$(document).keyup(this.__dismissibleKeyupHandler)},dismissibleTearDown:function(){document.removeEventListener("click",this.__dismissibleClickHandler,!0),$(document).off("keyup",this.__dismissibleKeyupHandler)},dismissible:function(t){var e=$(t.openerEl),i=$(IMVU.requireProperty(t,"dismissibleEl")),r=IMVU.requireProperty(t,"dismissHandler");i.attr("data-dismissible","true").on("dismiss",function(t){return r(t),!1}),e.length&&i.data("openerEl",e)},enhanceTextarea:function(t,i,r){if(i){var n=$("<div/>").addClass("textarea-limit");t.after(n),t.parent().addClass("textarea-container")}var o=t.height(),s=t.outerHeight()-t.height(),a=t.val(),l=function(){var l=t.val();i&&(e.StringUtil.length(l)>i&&(l=e.StringUtil.length(a)===i?a:l.substr(0,i),t.val(l)),n.text(Math.max(0,i-e.StringUtil.length(l)))),t.css({height:o});var u=Math.max(o,t[0].scrollHeight-s);r?t.height(Math.min(r-s,u)):t.height(u),a=l};l(),t.on("input refresh",l)},truncateMultilineText:function(t,e,i){if(i=i||t.parent().height(),t.css("height","auto"),t.height()>i){var r=parseInt(t.css("line-height"),10);t.css("height",Math.floor(i-i%r)),e.show()}},squarify:function(t){var e=$(t.me),i=$(t.within),r=Math.min(i.width(),i.height());r&&(0<t.shrink&&(r=0<r-t.shrink?r-t.shrink:0),i=r,t.isHalfWidth&&(i/=2),e.width(i).height(r))}}),BezierEasing:t})});