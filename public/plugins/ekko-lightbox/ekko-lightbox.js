/*
 * Lightbox for Bootstrap by @ashleydw
 * https://github.com/ashleydw/lightbox
 *
 * License: https://github.com/ashleydw/lightbox/blob/master/LICENSE
 */
+function(a){var c=(function(){function e(j,h){for(var g=0;g<h.length;g++){var f=h[g];f.enumerable=f.enumerable||false;f.configurable=true;if("value" in f){f.writable=true}Object.defineProperty(j,f.key,f)}}return function(f,g,h){if(g){e(f.prototype,g)}if(h){e(f,h)}return f}})();function b(f,e){if(!(f instanceof e)){throw new TypeError("Cannot call a class as a function")}}var d=(function(e){var i="ekkoLightbox";var g=e.fn[i];var f={title:"",footer:"",maxWidth:9999,maxHeight:9999,showArrows:true,wrapping:true,type:null,alwaysShowClose:false,loadingMessage:'<div class="ekko-lightbox-loader"><div><div></div><div></div></div></div>',leftArrow:"<span>&#10094;</span>",rightArrow:"<span>&#10095;</span>",strings:{close:"Close",fail:"Failed to load image:",type:"Could not detect remote target type. Force the type using data-type"},doc:document,onShow:function o(){},onShown:function p(){},onHide:function m(){},onHidden:function k(){},onNavigate:function n(){},onContentLoaded:function j(){}};var h=(function(){c(T,null,[{key:"Default",get:function S(){return f}}]);function T(Z,ad){var aa=this;b(this,T);this._config=e.extend({},f,ad);this._$modalArrows=null;this._galleryIndex=0;this._galleryName=null;this._padding=null;this._border=null;this._titleIsShown=false;this._footerIsShown=false;this._wantedWidth=0;this._wantedHeight=0;this._touchstartX=0;this._touchendX=0;this._modalId="ekkoLightbox-"+Math.floor(Math.random()*1000+1);this._$element=Z instanceof jQuery?Z:e(Z);this._isBootstrap3=e.fn.modal.Constructor.VERSION[0]==3;var ag='<h4 class="modal-title">'+(this._config.title||"&nbsp;")+"</h4>";var ac='<button type="button" class="close" data-dismiss="modal" aria-label="'+this._config.strings.close+'"><span aria-hidden="true">&times;</span></button>';var ah='<div class="modal-header'+(this._config.title||this._config.alwaysShowClose?"":" hide")+'">'+(this._isBootstrap3?ac+ag:ag+ac)+"</div>";var af='<div class="modal-footer'+(this._config.footer?"":" hide")+'">'+(this._config.footer||"&nbsp;")+"</div>";var ab='<div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div>';var ae='<div class="modal-dialog" role="document"><div class="modal-content">'+ah+ab+af+"</div></div>";e(this._config.doc.body).append('<div id="'+this._modalId+'" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">'+ae+"</div>");this._$modal=e("#"+this._modalId,this._config.doc);this._$modalDialog=this._$modal.find(".modal-dialog").first();this._$modalContent=this._$modal.find(".modal-content").first();this._$modalBody=this._$modal.find(".modal-body").first();this._$modalHeader=this._$modal.find(".modal-header").first();this._$modalFooter=this._$modal.find(".modal-footer").first();this._$lightboxContainer=this._$modalBody.find(".ekko-lightbox-container").first();this._$lightboxBodyOne=this._$lightboxContainer.find("> div:first-child").first();this._$lightboxBodyTwo=this._$lightboxContainer.find("> div:last-child").first();this._border=this._calculateBorders();this._padding=this._calculatePadding();this._galleryName=this._$element.data("gallery");if(this._galleryName){this._$galleryItems=e(document.body).find('*[data-gallery="'+this._galleryName+'"]');this._galleryIndex=this._$galleryItems.index(this._$element);e(document).on("keydown.ekkoLightbox",this._navigationalBinder.bind(this));if(this._config.showArrows&&this._$galleryItems.length>1){this._$lightboxContainer.append('<div class="ekko-lightbox-nav-overlay"><a href="#">'+this._config.leftArrow+'</a><a href="#">'+this._config.rightArrow+"</a></div>");this._$modalArrows=this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay").first();this._$lightboxContainer.on("click","a:first-child",function(ai){ai.preventDefault();return aa.navigateLeft()});this._$lightboxContainer.on("click","a:last-child",function(ai){ai.preventDefault();return aa.navigateRight()});this.updateNavigation()}}this._$modal.on("show.bs.modal",this._config.onShow.bind(this)).on("shown.bs.modal",function(){aa._toggleLoading(true);aa._handle();return aa._config.onShown.call(aa)}).on("hide.bs.modal",this._config.onHide.bind(this)).on("hidden.bs.modal",function(){if(aa._galleryName){e(document).off("keydown.ekkoLightbox");e(window).off("resize.ekkoLightbox")}aa._$modal.remove();return aa._config.onHidden.call(aa)}).modal(this._config);e(window).on("resize.ekkoLightbox",function(){aa._resize(aa._wantedWidth,aa._wantedHeight)});this._$lightboxContainer.on("touchstart",function(){aa._touchstartX=event.changedTouches[0].screenX}).on("touchend",function(){aa._touchendX=event.changedTouches[0].screenX;aa._swipeGesure()})}c(T,[{key:"element",value:function R(){return this._$element}},{key:"modal",value:function U(){return this._$modal}},{key:"navigateTo",value:function X(Z){if(Z<0||Z>this._$galleryItems.length-1){return this}this._galleryIndex=Z;this.updateNavigation();this._$element=e(this._$galleryItems.get(this._galleryIndex));this._handle()}},{key:"navigateLeft",value:function V(){if(!this._$galleryItems){return}if(this._$galleryItems.length===1){return}if(this._galleryIndex===0){if(this._config.wrapping){this._galleryIndex=this._$galleryItems.length-1}else{return}}else{this._galleryIndex--}this._config.onNavigate.call(this,"left",this._galleryIndex);return this.navigateTo(this._galleryIndex)}},{key:"navigateRight",value:function W(){if(!this._$galleryItems){return}if(this._$galleryItems.length===1){return}if(this._galleryIndex===this._$galleryItems.length-1){if(this._config.wrapping){this._galleryIndex=0}else{return}}else{this._galleryIndex++}this._config.onNavigate.call(this,"right",this._galleryIndex);return this.navigateTo(this._galleryIndex)}},{key:"updateNavigation",value:function Y(){if(!this._config.wrapping){var Z=this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay");if(this._galleryIndex===0){Z.find("a:first-child").addClass("disabled")}else{Z.find("a:first-child").removeClass("disabled")}if(this._galleryIndex===this._$galleryItems.length-1){Z.find("a:last-child").addClass("disabled")}else{Z.find("a:last-child").removeClass("disabled")}}}},{key:"close",value:function Q(){return this._$modal.modal("hide")}},{key:"_navigationalBinder",value:function D(Z){Z=Z||window.event;if(Z.keyCode===39){return this.navigateRight()}if(Z.keyCode===37){return this.navigateLeft()}}},{key:"_detectRemoteType",value:function t(Z,aa){aa=aa||false;if(!aa&&this._isImage(Z)){aa="image"}if(!aa&&this._getYoutubeId(Z)){aa="youtube"}if(!aa&&this._getVimeoId(Z)){aa="vimeo"}if(!aa&&this._getInstagramId(Z)){aa="instagram"}if(!aa||["image","youtube","vimeo","instagram","video","url"].indexOf(aa)<0){aa="url"}return aa}},{key:"_isImage",value:function A(Z){return Z&&Z.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)}},{key:"_containerToUse",value:function s(){var ab=this;var aa=this._$lightboxBodyTwo;var Z=this._$lightboxBodyOne;if(this._$lightboxBodyTwo.hasClass("in")){aa=this._$lightboxBodyOne;Z=this._$lightboxBodyTwo}Z.removeClass("in show");setTimeout(function(){if(!ab._$lightboxBodyTwo.hasClass("in")){ab._$lightboxBodyTwo.empty()}if(!ab._$lightboxBodyOne.hasClass("in")){ab._$lightboxBodyOne.empty()}},500);aa.addClass("in show");return aa}},{key:"_handle",value:function y(){var Z=this._containerToUse();this._updateTitleAndFooter();var aa=this._$element.attr("data-remote")||this._$element.attr("href");var ab=this._detectRemoteType(aa,this._$element.attr("data-type")||false);if(["image","youtube","vimeo","instagram","video","url"].indexOf(ab)<0){return this._error(this._config.strings.type)}switch(ab){case"image":this._preloadImage(aa,Z);this._preloadImageByIndex(this._galleryIndex,3);break;case"youtube":this._showYoutubeVideo(aa,Z);break;case"vimeo":this._showVimeoVideo(this._getVimeoId(aa),Z);break;case"instagram":this._showInstagramVideo(this._getInstagramId(aa),Z);break;case"video":this._showHtml5Video(aa,Z);break;default:this._loadRemoteContent(aa,Z);break}return this}},{key:"_getYoutubeId",value:function x(aa){if(!aa){return false}var Z=aa.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return Z&&Z[2].length===11?Z[2]:false}},{key:"_getVimeoId",value:function w(Z){return Z&&Z.indexOf("vimeo")>0?Z:false}},{key:"_getInstagramId",value:function v(Z){return Z&&Z.indexOf("instagram")>0?Z:false}},{key:"_toggleLoading",value:function N(Z){Z=Z||false;if(Z){this._$modalDialog.css("display","none");this._$modal.removeClass("in show");e(".modal-backdrop").append(this._config.loadingMessage)}else{this._$modalDialog.css("display","block");this._$modal.addClass("in show");e(".modal-backdrop").find(".ekko-lightbox-loader").remove()}return this}},{key:"_calculateBorders",value:function q(){return{top:this._totalCssByAttribute("border-top-width"),right:this._totalCssByAttribute("border-right-width"),bottom:this._totalCssByAttribute("border-bottom-width"),left:this._totalCssByAttribute("border-left-width")}}},{key:"_calculatePadding",value:function r(){return{top:this._totalCssByAttribute("padding-top"),right:this._totalCssByAttribute("padding-right"),bottom:this._totalCssByAttribute("padding-bottom"),left:this._totalCssByAttribute("padding-left")}}},{key:"_totalCssByAttribute",value:function O(Z){return parseInt(this._$modalDialog.css(Z),10)+parseInt(this._$modalContent.css(Z),10)+parseInt(this._$modalBody.css(Z),10)}},{key:"_updateTitleAndFooter",value:function P(){var aa=this._$element.data("title")||"";var Z=this._$element.data("footer")||"";this._titleIsShown=false;if(aa||this._config.alwaysShowClose){this._titleIsShown=true;this._$modalHeader.css("display","").find(".modal-title").html(aa||"&nbsp;")}else{this._$modalHeader.css("display","none")}this._footerIsShown=false;if(Z){this._footerIsShown=true;this._$modalFooter.css("display","").html(Z)}else{this._$modalFooter.css("display","none")}return this}},{key:"_showYoutubeVideo",value:function L(ad,Z){var ab=this._getYoutubeId(ad);var ac=ad.indexOf("&")>0?ad.substr(ad.indexOf("&")):"";var ae=this._$element.data("width")||560;var aa=this._$element.data("height")||ae/(560/315);return this._showVideoIframe("//www.youtube.com/embed/"+ab+"?badge=0&autoplay=1&html5=1"+ac,ae,aa,Z)}},{key:"_showVimeoVideo",value:function K(ab,Z){var ac=this._$element.data("width")||500;var aa=this._$element.data("height")||ac/(560/315);return this._showVideoIframe(ab+"?autoplay=1",ac,aa,Z)}},{key:"_showInstagramVideo",value:function I(ab,Z){var ac=this._$element.data("width")||612;var aa=ac+80;ab=ab.substr(-1)!=="/"?ab+"/":ab;Z.html('<iframe width="'+ac+'" height="'+aa+'" src="'+ab+'embed/" frameborder="0" allowfullscreen></iframe>');this._resize(ac,aa);this._config.onContentLoaded.call(this);if(this._$modalArrows){this._$modalArrows.css("display","none")}this._toggleLoading(false);return this}},{key:"_showVideoIframe",value:function J(ab,ac,aa,Z){aa=aa||ac;Z.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="'+ac+'" height="'+aa+'" src="'+ab+'" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>');this._resize(ac,aa);this._config.onContentLoaded.call(this);if(this._$modalArrows){this._$modalArrows.css("display","none")}this._toggleLoading(false);return this}},{key:"_showHtml5Video",value:function H(ab,Z){var ac=this._$element.data("width")||560;var aa=this._$element.data("height")||ac/(560/315);Z.html('<div class="embed-responsive embed-responsive-16by9"><video width="'+ac+'" height="'+aa+'" src="'+ab+'" preload="auto" autoplay controls class="embed-responsive-item"></video></div>');this._resize(ac,aa);this._config.onContentLoaded.call(this);if(this._$modalArrows){this._$modalArrows.css("display","none")}this._toggleLoading(false);return this}},{key:"_loadRemoteContent",value:function C(ad,Z){var aa=this;var ae=this._$element.data("width")||560;var ac=this._$element.data("height")||560;var ab=this._$element.data("disableExternalCheck")||false;this._toggleLoading(false);if(!ab&&!this._isExternal(ad)){Z.load(ad,e.proxy(function(){return aa._$element.trigger("loaded.bs.modal");l}))}else{Z.html('<iframe src="'+ad+'" frameborder="0" allowfullscreen></iframe>');this._config.onContentLoaded.call(this)}if(this._$modalArrows){this._$modalArrows.css("display","none")}this._resize(ae,ac);return this}},{key:"_isExternal",value:function z(aa){var Z=aa.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);if(typeof Z[1]==="string"&&Z[1].length>0&&Z[1].toLowerCase()!==location.protocol){return true}if(typeof Z[2]==="string"&&Z[2].length>0&&Z[2].replace(new RegExp(":("+({"http:":80,"https:":443})[location.protocol]+")?$"),"")!==location.host){return true}return false}},{key:"_error",value:function u(Z){console.error(Z);this._containerToUse().html(Z);this._resize(300,300);return this}},{key:"_preloadImageByIndex",value:function F(ac,aa){if(!this._$galleryItems){return}var Z=e(this._$galleryItems.get(ac),false);if(typeof Z=="undefined"){return}var ab=Z.attr("data-remote")||Z.attr("href");if(Z.attr("data-type")==="image"||this._isImage(ab)){this._preloadImage(ab,false)}if(aa>0){return this._preloadImageByIndex(ac+1,aa-1)}}},{key:"_preloadImage",value:function E(ac,Z){var aa=this;Z=Z||false;var ab=new Image();if(Z){(function(){var ad=setTimeout(function(){Z.append(aa._config.loadingMessage)},200);ab.onload=function(){if(ad){clearTimeout(ad)}ad=null;var ae=e("<img />");ae.attr("src",ab.src);ae.addClass("img-fluid");ae.css("width","100%");Z.html(ae);if(aa._$modalArrows){aa._$modalArrows.css("display","")}aa._resize(ab.width,ab.height);aa._toggleLoading(false);return aa._config.onContentLoaded.call(aa)};ab.onerror=function(){aa._toggleLoading(false);return aa._error(aa._config.strings.fail+("  "+ac))}})()}ab.src=ac;return ab}},{key:"_swipeGesure",value:function M(){if(this._touchendX<this._touchstartX){return this.navigateRight()}if(this._touchendX>this._touchstartX){return this.navigateLeft()}}},{key:"_resize",value:function G(al,af){af=af||al;this._wantedWidth=al;this._wantedHeight=af;var ag=al/af;var am=this._padding.left+this._padding.right+this._border.left+this._border.right;var Z=this._config.doc.body.clientWidth>575?20:0;var ab=this._config.doc.body.clientWidth>575?0:20;var aj=Math.min(al+am,this._config.doc.body.clientWidth-Z,this._config.maxWidth);if(al+am>aj){af=(aj-am-ab)/ag;al=aj}else{al=al+am}var ae=0,ad=0;if(this._footerIsShown){ad=this._$modalFooter.outerHeight(true)||55}if(this._titleIsShown){ae=this._$modalHeader.outerHeight(true)||67}var aa=this._padding.top+this._padding.bottom+this._border.bottom+this._border.top;var ah=parseFloat(this._$modalDialog.css("margin-top"))+parseFloat(this._$modalDialog.css("margin-bottom"));var ai=Math.min(af,e(window).height()-aa-ah-ae-ad,this._config.maxHeight-aa-ae-ad);if(af>ai){al=Math.ceil(ai*ag)+am}this._$lightboxContainer.css("height",ai);this._$modalDialog.css("flex",1).css("maxWidth",al);var ak=this._$modal.data("bs.modal");if(ak){try{ak._handleUpdate()}catch(ac){ak.handleUpdate()}}return this}}],[{key:"_jQueryInterface",value:function B(aa){var Z=this;aa=aa||{};return this.each(function(){var ab=e(Z);var ac=e.extend({},T.Default,ab.data(),typeof aa==="object"&&aa);new T(Z,ac)})}}]);return T})();e.fn[i]=h._jQueryInterface;e.fn[i].Constructor=h;e.fn[i].noConflict=function(){e.fn[i]=g;return h._jQueryInterface};return h})(jQuery)}(jQuery);