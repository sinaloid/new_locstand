/*
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/06/02
 */
var VectorCanvas=function(d,b,c){this.mode=window.SVGAngle?"svg":"vml";this.params=c;if(this.mode==="svg"){this.createSvgNode=function(e){return document.createElementNS(this.svgns,e)}}else{try{if(!document.namespaces.rvml){document.namespaces.add("rvml","urn:schemas-microsoft-com:vml")}this.createVmlNode=function(e){return document.createElement("<rvml:"+e+' class="rvml">')}}catch(a){this.createVmlNode=function(e){return document.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)")}if(this.mode==="svg"){this.canvas=this.createSvgNode("svg")}else{this.canvas=this.createVmlNode("group");this.canvas.style.position="absolute"}this.setSize(d,b)};VectorCanvas.prototype={svgns:"http://www.w3.org/2000/svg",mode:"svg",width:0,height:0,canvas:null};var ColorScale=function(a,d,c,b){if(a){this.setColors(a)}if(d){this.setNormalizeFunction(d)}if(c){this.setMin(c)}if(c){this.setMax(b)}};ColorScale.prototype={colors:[]};var JQVMap=function(f){f=f||{};var c=this;var d=JQVMap.maps[f.map];var e;if(!d){throw new Error('Invalid "'+f.map+'" map parameter. Please make sure you have loaded this map file in your HTML.')}this.selectedRegions=[];this.multiSelectRegion=f.multiSelectRegion;this.container=f.container;this.defaultWidth=d.width;this.defaultHeight=d.height;this.color=f.color;this.selectedColor=f.selectedColor;this.hoverColor=f.hoverColor;this.hoverColors=f.hoverColors;this.hoverOpacity=f.hoverOpacity;this.setBackgroundColor(f.backgroundColor);this.width=f.container.width();this.height=f.container.height();this.resize();jQuery(window).resize(function(){var j=f.container.width();var i=f.container.height();if(j&&i){c.width=j;c.height=i;c.resize();c.canvas.setSize(c.width,c.height);c.applyTransform();var k=jQuery.Event("resize.jqvmap");jQuery(f.container).trigger(k,[j,i]);if(e){jQuery(".jqvmap-pin").remove();c.pinHandlers=false;c.placePins(e.pins,e.mode)}}});this.canvas=new VectorCanvas(this.width,this.height,f);f.container.append(this.canvas.canvas);this.makeDraggable();this.rootGroup=this.canvas.createGroup(true);this.index=JQVMap.mapIndex;this.label=jQuery("<div/>").addClass("jqvmap-label").appendTo(jQuery("body")).hide();if(f.enableZoom){jQuery("<div/>").addClass("jqvmap-zoomin").text("+").appendTo(f.container);jQuery("<div/>").addClass("jqvmap-zoomout").html("&#x2212;").appendTo(f.container)}c.countries=[];for(var b in d.paths){var g=this.canvas.createPath({path:d.paths[b].path});g.setFill(this.color);g.id=c.getCountryId(b);c.countries[b]=g;if(this.canvas.mode==="svg"){g.setAttribute("class","jqvmap-region")}else{jQuery(g).addClass("jqvmap-region")}jQuery(this.rootGroup).append(g)}jQuery(f.container).delegate(this.canvas.mode==="svg"?"path":"shape","mouseover mouseout",function(k){var j=k.target,i=k.target.id.split("_").pop(),l=jQuery.Event("labelShow.jqvmap"),m=jQuery.Event("regionMouseOver.jqvmap");i=i.toLowerCase();if(k.type==="mouseover"){jQuery(f.container).trigger(m,[i,d.paths[i].name]);if(!m.isDefaultPrevented()){c.highlight(i,j)}if(f.showTooltip){c.label.text(d.paths[i].name);jQuery(f.container).trigger(l,[c.label,i]);if(!l.isDefaultPrevented()){c.label.show();c.labelWidth=c.label.width();c.labelHeight=c.label.height()}}}else{c.unhighlight(i,j);c.label.hide();jQuery(f.container).trigger("regionMouseOut.jqvmap",[i,d.paths[i].name])}});jQuery(f.container).delegate(this.canvas.mode==="svg"?"path":"shape","click",function(l){var m=l.target;var i=l.target.id.split("_").pop();var k=jQuery.Event("regionClick.jqvmap");i=i.toLowerCase();jQuery(f.container).trigger(k,[i,d.paths[i].name]);if(!f.multiSelectRegion&&!k.isDefaultPrevented()){for(var j in d.paths){c.countries[j].currentFillColor=c.countries[j].getOriginalFill();c.countries[j].setFill(c.countries[j].getOriginalFill())}}if(!k.isDefaultPrevented()){if(c.isSelected(i)){c.deselect(i,m)}else{c.select(i,m)}}});if(f.showTooltip){f.container.mousemove(function(i){if(c.label.is(":visible")){var j=i.pageX-15-c.labelWidth;var k=i.pageY-15-c.labelHeight;if(j<0){j=i.pageX+15}if(k<0){k=i.pageY+15}c.label.css({left:j,top:k})}})}this.setColors(f.colors);this.canvas.canvas.appendChild(this.rootGroup);this.applyTransform();this.colorScale=new ColorScale(f.scaleColors,f.normalizeFunction,f.valueMin,f.valueMax);if(f.values){this.values=f.values;this.setValues(f.values)}if(f.selectedRegions){if(f.selectedRegions instanceof Array){for(var a in f.selectedRegions){this.select(f.selectedRegions[a].toLowerCase())}}else{this.select(f.selectedRegions.toLowerCase())}}this.bindZoomButtons();if(f.pins){e={pins:f.pins,mode:f.pinMode};this.pinHandlers=false;this.placePins(f.pins,f.pinMode)}if(f.showLabels){this.pinHandlers=false;var h={};for(b in c.countries){if(typeof c.countries[b]!=="function"){if(!f.pins||!f.pins[b]){h[b]=b.toUpperCase()}}}e={pins:h,mode:"content"};this.placePins(h,"content")}JQVMap.mapIndex++};JQVMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,countries:{},countriesColors:{},countriesData:{},zoomStep:1.4,zoomMaxStep:4,zoomCurStep:1};JQVMap.xlink="http://www.w3.org/1999/xlink";JQVMap.mapIndex=1;JQVMap.maps={};(function(){var b={colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,enableZoom:1,showTooltip:1,borderColor:1,borderWidth:1,borderOpacity:1,selectedRegions:1,multiSelectRegion:1};var a={onLabelShow:"labelShow",onLoad:"load",onRegionOver:"regionMouseOver",onRegionOut:"regionMouseOut",onRegionClick:"regionClick",onRegionSelect:"regionSelect",onRegionDeselect:"regionDeselect",onResize:"resize"};jQuery.fn.vectorMap=function(h){var c={map:"world_en",backgroundColor:"#a5bfdd",color:"#f4f3f0",hoverColor:"#c9dfaf",hoverColors:{},selectedColor:"#c9dfaf",scaleColors:["#b6d6ff","#005ace"],normalizeFunction:"linear",enableZoom:true,showTooltip:true,borderColor:"#818181",borderWidth:1,borderOpacity:0.25,selectedRegions:null,multiSelectRegion:false},g=this.data("mapObject");if(h==="addMap"){JQVMap.maps[arguments[1]]=arguments[2]}else{if(h==="set"&&b[arguments[1]]){g["set"+arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1)].apply(g,Array.prototype.slice.call(arguments,2))}else{if(typeof h==="string"&&typeof g[h]==="function"){return g[h].apply(g,Array.prototype.slice.call(arguments,1))}else{jQuery.extend(c,h);c.container=this;this.css({position:"relative",overflow:"hidden"});g=new JQVMap(c);this.data("mapObject",g);this.unbind(".jqvmap");for(var d in a){if(c[d]){this.bind(a[d]+".jqvmap",c[d])}}var f=jQuery.Event("load.jqvmap");jQuery(c.container).trigger(f,g);return g}}}}})(jQuery);ColorScale.arrayToRgb=function(a){var e="#";var b;for(var c=0;c<a.length;c++){b=a[c].toString(16);e+=b.length===1?"0"+b:b}return e};ColorScale.prototype.getColor=function(h){if(typeof this.normalize==="function"){h=this.normalize(h)}var g=[];var d=0;var f;for(var e=0;e<this.colors.length-1;e++){f=this.vectorLength(this.vectorSubtract(this.colors[e+1],this.colors[e]));g.push(f);d+=f}var a=(this.maxValue-this.minValue)/d;for(e=0;e<g.length;e++){g[e]*=a}e=0;h-=this.minValue;while(h-g[e]>=0){h-=g[e];e++}var b;if(e===this.colors.length-1){b=this.vectorToNum(this.colors[e]).toString(16)}else{b=(this.vectorToNum(this.vectorAdd(this.colors[e],this.vectorMult(this.vectorSubtract(this.colors[e+1],this.colors[e]),(h)/(g[e]))))).toString(16)}while(b.length<6){b="0"+b}return"#"+b};ColorScale.rgbToArray=function(a){a=a.substr(1);return[parseInt(a.substr(0,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(4,2),16)]};ColorScale.prototype.setColors=function(a){for(var b=0;b<a.length;b++){a[b]=ColorScale.rgbToArray(a[b])}this.colors=a};ColorScale.prototype.setMax=function(a){this.clearMaxValue=a;if(typeof this.normalize==="function"){this.maxValue=this.normalize(a)}else{this.maxValue=a}};ColorScale.prototype.setMin=function(a){this.clearMinValue=a;if(typeof this.normalize==="function"){this.minValue=this.normalize(a)}else{this.minValue=a}};ColorScale.prototype.setNormalizeFunction=function(a){if(a==="polynomial"){this.normalize=function(b){return Math.pow(b,0.2)}}else{if(a==="linear"){delete this.normalize}else{this.normalize=a}}this.setMin(this.clearMinValue);this.setMax(this.clearMaxValue)};ColorScale.prototype.vectorAdd=function(c,d){var b=[];for(var a=0;a<c.length;a++){b[a]=c[a]+d[a]}return b};ColorScale.prototype.vectorLength=function(c){var b=0;for(var a=0;a<c.length;a++){b+=c[a]*c[a]}return Math.sqrt(b)};ColorScale.prototype.vectorMult=function(d,b){var c=[];for(var a=0;a<d.length;a++){c[a]=d[a]*b}return c};ColorScale.prototype.vectorSubtract=function(c,d){var b=[];for(var a=0;a<c.length;a++){b[a]=c[a]-d[a]}return b};ColorScale.prototype.vectorToNum=function(c){var b=0;for(var a=0;a<c.length;a++){b+=Math.round(c[a])*Math.pow(256,c.length-a-1)}return b};JQVMap.prototype.applyTransform=function(){var a,b,c,d;if(this.defaultWidth*this.scale<=this.width){a=(this.width-this.defaultWidth*this.scale)/(2*this.scale);c=(this.width-this.defaultWidth*this.scale)/(2*this.scale)}else{a=0;c=(this.width-this.defaultWidth*this.scale)/this.scale}if(this.defaultHeight*this.scale<=this.height){b=(this.height-this.defaultHeight*this.scale)/(2*this.scale);d=(this.height-this.defaultHeight*this.scale)/(2*this.scale)}else{b=0;d=(this.height-this.defaultHeight*this.scale)/this.scale}if(this.transY>b){this.transY=b}else{if(this.transY<d){this.transY=d}}if(this.transX>a){this.transX=a}else{if(this.transX<c){this.transX=c}}this.canvas.applyTransformParams(this.scale,this.transX,this.transY)};JQVMap.prototype.bindZoomButtons=function(){var a=this;this.container.find(".jqvmap-zoomin").click(function(){a.zoomIn()});this.container.find(".jqvmap-zoomout").click(function(){a.zoomOut()})};JQVMap.prototype.deselect=function(a,c){a=a.toLowerCase();c=c||jQuery("#"+this.getCountryId(a))[0];if(this.isSelected(a)){this.selectedRegions.splice(this.selectIndex(a),1);jQuery(this.container).trigger("regionDeselect.jqvmap",[a]);c.currentFillColor=c.getOriginalFill();c.setFill(c.getOriginalFill())}else{for(var b in this.countries){this.selectedRegions.splice(this.selectedRegions.indexOf(b),1);this.countries[b].currentFillColor=this.color;this.countries[b].setFill(this.color)}}};JQVMap.prototype.getCountryId=function(a){return"jqvmap"+this.index+"_"+a};JQVMap.prototype.getPin=function(a){var b=jQuery("#"+this.getPinId(a));return b.html()};JQVMap.prototype.getPinId=function(a){return this.getCountryId(a)+"_pin"};JQVMap.prototype.getPins=function(){var a=this.container.find(".jqvmap-pin");var b={};jQuery.each(a,function(d,f){f=jQuery(f);var c=f.attr("for").toLowerCase();var e=f.html();b[c]=e});return JSON.stringify(b)};JQVMap.prototype.highlight=function(a,b){b=b||jQuery("#"+this.getCountryId(a))[0];if(this.hoverOpacity){b.setOpacity(this.hoverOpacity)}else{if(this.hoverColors&&(a in this.hoverColors)){b.currentFillColor=b.getFill()+"";b.setFill(this.hoverColors[a])}else{if(this.hoverColor){b.currentFillColor=b.getFill()+"";b.setFill(this.hoverColor)}}}};JQVMap.prototype.isSelected=function(a){return this.selectIndex(a)>=0};JQVMap.prototype.makeDraggable=function(){var b=false;var c,d;var e=this;e.isMoving=false;e.isMovingTimeout=false;var a;var f;var g;var h;var i;var j;var k;this.container.mousemove(function(l){if(b){e.transX-=(c-l.pageX)/e.scale;e.transY-=(d-l.pageY)/e.scale;e.applyTransform();c=l.pageX;d=l.pageY;e.isMoving=true;if(e.isMovingTimeout){clearTimeout(e.isMovingTimeout)}e.container.trigger("drag")}return false}).mousedown(function(l){b=true;c=l.pageX;d=l.pageY;return false}).mouseup(function(){b=false;clearTimeout(e.isMovingTimeout);e.isMovingTimeout=setTimeout(function(){e.isMoving=false},100);return false}).mouseout(function(){if(b&&e.isMoving){clearTimeout(e.isMovingTimeout);e.isMovingTimeout=setTimeout(function(){b=false;e.isMoving=false},100);return false}});jQuery(this.container).bind("touchmove",function(l){var m;var n;var o=l.originalEvent.touches;var p;var q;if(o.length===1){if(a===1){if(j===o[0].pageX&&k===o[0].pageY){return}p=e.transX;q=e.transY;e.transX-=(j-o[0].pageX)/e.scale;e.transY-=(k-o[0].pageY)/e.scale;e.applyTransform();if(p!==e.transX||q!==e.transY){l.preventDefault()}e.isMoving=true;if(e.isMovingTimeout){clearTimeout(e.isMovingTimeout)}}j=o[0].pageX;k=o[0].pageY}else{if(o.length===2){if(a===2){n=Math.sqrt(Math.pow(o[0].pageX-o[1].pageX,2)+Math.pow(o[0].pageY-o[1].pageY,2))/h;e.setScale(i*n,f,g);l.preventDefault()}else{m=jQuery(e.container).offset();if(o[0].pageX>o[1].pageX){f=o[1].pageX+(o[0].pageX-o[1].pageX)/2}else{f=o[0].pageX+(o[1].pageX-o[0].pageX)/2}if(o[0].pageY>o[1].pageY){g=o[1].pageY+(o[0].pageY-o[1].pageY)/2}else{g=o[0].pageY+(o[1].pageY-o[0].pageY)/2}f-=m.left;g-=m.top;i=e.scale;h=Math.sqrt(Math.pow(o[0].pageX-o[1].pageX,2)+Math.pow(o[0].pageY-o[1].pageY,2))}}}a=o.length});jQuery(this.container).bind("touchstart",function(){a=0});jQuery(this.container).bind("touchend",function(){a=0})};JQVMap.prototype.placePins=function(c,b){var a=this;if(!b||(b!=="content"&&b!=="id")){b="content"}if(b==="content"){jQuery.each(c,function(f,g){if(jQuery("#"+a.getCountryId(f)).length===0){return}var h=a.getPinId(f);var e=jQuery("#"+h);if(e.length>0){e.remove()}a.container.append('<div id="'+h+'" for="'+f+'" class="jqvmap-pin" style="position:absolute">'+g+"</div>")})}else{jQuery.each(c,function(f,g){if(jQuery("#"+a.getCountryId(f)).length===0){return}var h=a.getPinId(f);var e=jQuery("#"+h);if(e.length>0){e.remove()}a.container.append('<div id="'+h+'" for="'+f+'" class="jqvmap-pin" style="position:absolute"></div>');e.append(jQuery("#"+g))})}this.positionPins();if(!this.pinHandlers){this.pinHandlers=true;var d=function(){a.positionPins()};this.container.bind("zoomIn",d).bind("zoomOut",d).bind("drag",d)}};JQVMap.prototype.positionPins=function(){var a=this;var b=this.container.find(".jqvmap-pin");jQuery.each(b,function(g,k){k=jQuery(k);var e=a.getCountryId(k.attr("for").toLowerCase());var f=jQuery("#"+e);var c=f[0].getBBox();var m=a.scale;var l=a.canvas.rootGroup.getBoundingClientRect();var h=a.container[0].getBoundingClientRect();var d={left:l.left-h.left,top:l.top-h.top};var i=(c.x*m)+((c.width*m)/2);var j=(c.y*m)+((c.height*m)/2);k.css({left:d.left+i-(k.width()/2),top:d.top+j-(k.height()/2)})})};JQVMap.prototype.removePin=function(a){a=a.toLowerCase();jQuery("#"+this.getPinId(a)).remove()};JQVMap.prototype.removePins=function(){this.container.find(".jqvmap-pin").remove()};JQVMap.prototype.reset=function(){for(var a in this.countries){this.countries[a].setFill(this.color)}this.scale=this.baseScale;this.transX=this.baseTransX;this.transY=this.baseTransY;this.applyTransform();this.zoomCurStep=1};JQVMap.prototype.resize=function(){var a=this.baseScale;if(this.width/this.height>this.defaultWidth/this.defaultHeight){this.baseScale=this.height/this.defaultHeight;this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)}else{this.baseScale=this.width/this.defaultWidth;this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)}this.scale*=this.baseScale/a;this.transX*=this.baseScale/a;this.transY*=this.baseScale/a};JQVMap.prototype.select=function(a,b){a=a.toLowerCase();b=b||jQuery("#"+this.getCountryId(a))[0];if(!this.isSelected(a)){if(this.multiSelectRegion){this.selectedRegions.push(a)}else{this.selectedRegions=[a]}jQuery(this.container).trigger("regionSelect.jqvmap",[a]);if(this.selectedColor&&b){b.currentFillColor=this.selectedColor;b.setFill(this.selectedColor)}}};JQVMap.prototype.selectIndex=function(a){a=a.toLowerCase();for(var b=0;b<this.selectedRegions.length;b++){if(a===this.selectedRegions[b]){return b}}return -1};JQVMap.prototype.setBackgroundColor=function(a){this.container.css("background-color",a)};JQVMap.prototype.setColors=function(d,b){if(typeof d==="string"){this.countries[d].setFill(b);this.countries[d].setAttribute("original",b)}else{var c=d;for(var a in c){if(this.countries[a]){this.countries[a].setFill(c[a]);this.countries[a].setAttribute("original",c[a])}}}};JQVMap.prototype.setNormalizeFunction=function(a){this.colorScale.setNormalizeFunction(a);if(this.values){this.setValues(this.values)}};JQVMap.prototype.setScale=function(a){this.scale=a;this.applyTransform()};JQVMap.prototype.setScaleColors=function(a){this.colorScale.setColors(a);if(this.values){this.setValues(this.values)}};JQVMap.prototype.setValues=function(f){var c=0,d=Number.MAX_VALUE,e;for(var a in f){a=a.toLowerCase();e=parseFloat(f[a]);if(isNaN(e)){continue}if(e>c){c=f[a]}if(e<d){d=e}}if(d===c){c++}this.colorScale.setMin(d);this.colorScale.setMax(c);var b={};for(a in f){a=a.toLowerCase();e=parseFloat(f[a]);b[a]=isNaN(e)?this.color:this.colorScale.getColor(e)}this.setColors(b);this.values=f};JQVMap.prototype.unhighlight=function(a,b){a=a.toLowerCase();b=b||jQuery("#"+this.getCountryId(a))[0];b.setOpacity(1);if(b.currentFillColor){b.setFill(b.currentFillColor)}};JQVMap.prototype.zoomIn=function(){var b=this;var c=(jQuery("#zoom").innerHeight()-6*2-15*2-3*2-7-6)/(this.zoomMaxStep-this.zoomCurStep);if(b.zoomCurStep<b.zoomMaxStep){b.transX-=(b.width/b.scale-b.width/(b.scale*b.zoomStep))/2;b.transY-=(b.height/b.scale-b.height/(b.scale*b.zoomStep))/2;b.setScale(b.scale*b.zoomStep);b.zoomCurStep++;var a=jQuery("#zoomSlider");a.css("top",parseInt(a.css("top"),10)-c);b.container.trigger("zoomIn")}};JQVMap.prototype.zoomOut=function(){var b=this;var c=(jQuery("#zoom").innerHeight()-6*2-15*2-3*2-7-6)/(this.zoomMaxStep-this.zoomCurStep);if(b.zoomCurStep>1){b.transX+=(b.width/(b.scale/b.zoomStep)-b.width/b.scale)/2;b.transY+=(b.height/(b.scale/b.zoomStep)-b.height/b.scale)/2;b.setScale(b.scale/b.zoomStep);b.zoomCurStep--;var a=jQuery("#zoomSlider");a.css("top",parseInt(a.css("top"),10)+c);b.container.trigger("zoomOut")}};VectorCanvas.prototype.applyTransformParams=function(a,b,c){if(this.mode==="svg"){this.rootGroup.setAttribute("transform","scale("+a+") translate("+b+", "+c+")")}else{this.rootGroup.coordorigin=(this.width-b)+","+(this.height-c);this.rootGroup.coordsize=this.width/a+","+this.height/a}};VectorCanvas.prototype.createGroup=function(a){var b;if(this.mode==="svg"){b=this.createSvgNode("g")}else{b=this.createVmlNode("group");b.style.width=this.width+"px";b.style.height=this.height+"px";b.style.left="0px";b.style.top="0px";b.coordorigin="0 0";b.coordsize=this.width+" "+this.height}if(a){this.rootGroup=b}return b};VectorCanvas.prototype.createPath=function(a){var c;if(this.mode==="svg"){c=this.createSvgNode("path");c.setAttribute("d",a.path);if(this.params.borderColor!==null){c.setAttribute("stroke",this.params.borderColor)}if(this.params.borderWidth>0){c.setAttribute("stroke-width",this.params.borderWidth);c.setAttribute("stroke-linecap","round");c.setAttribute("stroke-linejoin","round")}if(this.params.borderOpacity>0){c.setAttribute("stroke-opacity",this.params.borderOpacity)}c.setFill=function(e){this.setAttribute("fill",e);if(this.getAttribute("original")===null){this.setAttribute("original",e)}};c.getFill=function(){return this.getAttribute("fill")};c.getOriginalFill=function(){return this.getAttribute("original")};c.setOpacity=function(e){this.setAttribute("fill-opacity",e)}}else{c=this.createVmlNode("shape");c.coordorigin="0 0";c.coordsize=this.width+" "+this.height;c.style.width=this.width+"px";c.style.height=this.height+"px";c.fillcolor=JQVMap.defaultFillColor;c.stroked=false;c.path=VectorCanvas.pathSvgToVml(a.path);var d=this.createVmlNode("skew");d.on=true;d.matrix="0.01,0,0,0.01,0,0";d.offset="0,0";c.appendChild(d);var b=this.createVmlNode("fill");c.appendChild(b);c.setFill=function(e){this.getElementsByTagName("fill")[0].color=e;if(this.getAttribute("original")===null){this.setAttribute("original",e)}};c.getFill=function(){return this.getElementsByTagName("fill")[0].color};c.getOriginalFill=function(){return this.getAttribute("original")};c.setOpacity=function(e){this.getElementsByTagName("fill")[0].opacity=parseInt(e*100,10)+"%"}}return c};VectorCanvas.prototype.pathSvgToVml=function(e){var f="";var c=0,d=0,a,b;return e.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g,function(m,k,g){g=g.replace(/(\d)-/g,"$1,-").replace(/\s+/g,",").split(",");if(!g[0]){g.shift()}for(var h=0,j=g.length;h<j;h++){g[h]=Math.round(100*g[h])}switch(k){case"m":c+=g[0];d+=g[1];f="t"+g.join(",");break;case"M":c=g[0];d=g[1];f="m"+g.join(",");break;case"l":c+=g[0];d+=g[1];f="r"+g.join(",");break;case"L":c=g[0];d=g[1];f="l"+g.join(",");break;case"h":c+=g[0];f="r"+g[0]+",0";break;case"H":c=g[0];f="l"+c+","+d;break;case"v":d+=g[0];f="r0,"+g[0];break;case"V":d=g[0];f="l"+c+","+d;break;case"c":a=c+g[g.length-4];b=d+g[g.length-3];c+=g[g.length-2];d+=g[g.length-1];f="v"+g.join(",");break;case"C":a=g[g.length-4];b=g[g.length-3];c=g[g.length-2];d=g[g.length-1];f="c"+g.join(",");break;case"s":g.unshift(d-b);g.unshift(c-a);a=c+g[g.length-4];b=d+g[g.length-3];c+=g[g.length-2];d+=g[g.length-1];f="v"+g.join(",");break;case"S":g.unshift(d+d-b);g.unshift(c+c-a);a=g[g.length-4];b=g[g.length-3];c=g[g.length-2];d=g[g.length-1];f="c"+g.join(",");break;default:break}return f}).replace(/z/g,"")};VectorCanvas.prototype.setSize=function(e,a){if(this.mode==="svg"){this.canvas.setAttribute("width",e);this.canvas.setAttribute("height",a)}else{this.canvas.style.width=e+"px";this.canvas.style.height=a+"px";this.canvas.coordsize=e+" "+a;this.canvas.coordorigin="0 0";if(this.rootGroup){var d=this.rootGroup.getElementsByTagName("shape");for(var b=0,c=d.length;b<c;b++){d[b].coordsize=e+" "+a;d[b].style.width=e+"px";d[b].style.height=a+"px"}this.rootGroup.coordsize=e+" "+a;this.rootGroup.style.width=e+"px";this.rootGroup.style.height=a+"px"}}this.width=e;this.height=a};