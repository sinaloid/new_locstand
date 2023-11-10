(function(a){var d=10;var e=0.95;function b(w){var f=null,z=null,v=null,s=null,g=null,h=null,y=false,j=null;var p=[];w.hooks.processOptions.push(function(D,C){if(C.series.pie.show){C.grid.show=false;if(C.series.pie.label.show=="auto"){if(C.legend.show){C.series.pie.label.show=false}else{C.series.pie.label.show=true}}if(C.series.pie.radius=="auto"){if(C.series.pie.label.show){C.series.pie.radius=3/4}else{C.series.pie.radius=1}}if(C.series.pie.tilt>1){C.series.pie.tilt=1}else{if(C.series.pie.tilt<0){C.series.pie.tilt=0}}}});w.hooks.bindEvents.push(function(E,C){var D=E.getOptions();if(D.series.pie.show){if(D.grid.hoverable){C.unbind("mousemove").mousemove(u)}if(D.grid.clickable){C.unbind("click").click(t)}}});w.hooks.processDatapoints.push(function(F,G,C,D){var E=F.getOptions();if(E.series.pie.show){x(F,G,C,D)}});w.hooks.drawOverlay.push(function(E,C){var D=E.getOptions();if(D.series.pie.show){m(E,C)}});w.hooks.draw.push(function(E,C){var D=E.getOptions();if(D.series.pie.show){k(E,C)}});function x(D,E,C){if(!y){y=true;f=D.getCanvas();z=a(f).parent();v=D.getOptions();D.setData(i(D.getData()))}}function i(E){var I=0,D=0,H=0,C=v.series.pie.combine.color,G=[];for(var F=0;F<E.length;++F){var J=E[F].data;if(a.isArray(J)&&J.length==1){J=J[0]}if(a.isArray(J)){if(!isNaN(parseFloat(J[1]))&&isFinite(J[1])){J[1]=+J[1]}else{J[1]=0}}else{if(!isNaN(parseFloat(J))&&isFinite(J)){J=[1,+J]}else{J=[1,0]}}E[F].data=[J]}for(var F=0;F<E.length;++F){I+=E[F].data[0][1]}for(var F=0;F<E.length;++F){var J=E[F].data[0][1];if(J/I<=v.series.pie.combine.threshold){D+=J;H++;if(!C){C=E[F].color}}}for(var F=0;F<E.length;++F){var J=E[F].data[0][1];if(H<2||J/I>v.series.pie.combine.threshold){G.push({data:[[1,J]],color:E[F].color,label:E[F].label,angle:J*Math.PI*2/I,percent:J/(I/100)})}}if(H>1){G.push({data:[[1,D]],color:C,label:v.series.pie.combine.label,angle:D*Math.PI*2/I,percent:D/(I/100)})}return G}function k(K,J){if(!z){return}var E=K.getPlaceholder().width(),D=K.getPlaceholder().height(),I=z.children().filter(".legend").children().width()||0;j=J;y=false;s=Math.min(E,D/v.series.pie.tilt)/2;h=D/2+v.series.pie.offset.top;g=E/2;if(v.series.pie.offset.left=="auto"){if(v.legend.position.match("w")){g+=I/2}else{g-=I/2}if(g<s){g=s}else{if(g>E-s){g=E-s}}}else{g+=v.series.pie.offset.left}var L=K.getData(),C=0;do{if(C>0){s*=e}C+=1;F();if(v.series.pie.tilt<=0.8){H()}}while(!G()&&C<d);if(C>=d){F();z.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")}if(K.setSeries&&K.insertLegend){K.setSeries(L);K.insertLegend()}function F(){j.clearRect(0,0,E,D);z.children().filter(".pieLabel, .pieLabelBackground").remove()}function H(){var Q=v.series.pie.shadow.left;var R=v.series.pie.shadow.top;var N=10;var M=v.series.pie.shadow.alpha;var P=v.series.pie.radius>1?v.series.pie.radius:s*v.series.pie.radius;if(P>=E/2-Q||P*v.series.pie.tilt>=D/2-R||P<=N){return}j.save();j.translate(Q,R);j.globalAlpha=M;j.fillStyle="#000";j.translate(g,h);j.scale(1,v.series.pie.tilt);for(var O=1;O<=N;O++){j.beginPath();j.arc(0,0,P,0,Math.PI*2,false);j.fill();P-=O}j.restore()}function G(){var R=Math.PI*v.series.pie.startAngle;var Q=v.series.pie.radius>1?v.series.pie.radius:s*v.series.pie.radius;j.save();j.translate(g,h);j.scale(1,v.series.pie.tilt);j.save();var M=R;for(var P=0;P<L.length;++P){L[P].startAngle=M;O(L[P].angle,L[P].color,true)}j.restore();if(v.series.pie.stroke.width>0){j.save();j.lineWidth=v.series.pie.stroke.width;M=R;for(var P=0;P<L.length;++P){O(L[P].angle,v.series.pie.stroke.color,false)}j.restore()}l(j);j.restore();if(v.series.pie.label.show){return N()}else{return true}function O(S,T,U){if(S<=0||isNaN(S)){return}if(U){j.fillStyle=T}else{j.strokeStyle=T;j.lineJoin="round"}j.beginPath();if(Math.abs(S-Math.PI*2)>1e-09){j.moveTo(0,0)}j.arc(0,0,Q,M,M+S/2,false);j.arc(0,0,Q,M+S/2,M+S,false);j.closePath();M+=S;if(U){j.fill()}else{j.stroke()}}function N(){var S=R;var V=v.series.pie.label.radius>1?v.series.pie.label.radius:s*v.series.pie.label.radius;for(var U=0;U<L.length;++U){if(L[U].percent>=v.series.pie.label.threshold*100){if(!T(L[U],S,U)){return false}}S+=L[U].angle}return true;function T(ag,ah,Z){if(ag.data[0][1]==0){return true}var ad=v.legend.labelFormatter,ai,ae=v.series.pie.label.formatter;if(ad){ai=ad(ag.label,ag)}else{ai=ag.label}if(ae){ai=ae(ai,ag)}var X=((ah+ag.angle)+ah)/2;var aj=g+Math.round(Math.cos(X)*V);var ak=h+Math.round(Math.sin(X)*V)*v.series.pie.tilt;var Y="<span class='pieLabel' id='pieLabel"+Z+"' style='position:absolute;top:"+ak+"px;left:"+aj+"px;'>"+ai+"</span>";z.append(Y);var aa=z.children("#pieLabel"+Z);var ac=(ak-aa.height()/2);var ab=(aj-aa.width()/2);aa.css("top",ac);aa.css("left",ab);if(0-ac>0||0-ab>0||D-(ac+aa.height())<0||E-(ab+aa.width())<0){return false}if(v.series.pie.label.background.opacity!=0){var W=v.series.pie.label.background.color;if(W==null){W=ag.color}var af="top:"+ac+"px;left:"+ab+"px;";a("<div class='pieLabelBackground' style='position:absolute;width:"+aa.width()+"px;height:"+aa.height()+"px;"+af+"background-color:"+W+";'></div>").css("opacity",v.series.pie.label.background.opacity).insertBefore(aa)}return true}}}}function l(D){if(v.series.pie.innerRadius>0){D.save();var C=v.series.pie.innerRadius>1?v.series.pie.innerRadius:s*v.series.pie.innerRadius;D.globalCompositeOperation="destination-out";D.beginPath();D.fillStyle=v.series.pie.stroke.color;D.arc(0,0,C,0,Math.PI*2,false);D.fill();D.closePath();D.restore();D.save();D.beginPath();D.strokeStyle=v.series.pie.stroke.color;D.arc(0,0,C,0,Math.PI*2,false);D.stroke();D.closePath();D.restore()}}function r(G,H){for(var C=false,D=-1,F=G.length,E=F-1;++D<F;E=D){((G[D][1]<=H[1]&&H[1]<G[E][1])||(G[E][1]<=H[1]&&H[1]<G[D][1]))&&(H[0]<(G[E][0]-G[D][0])*(H[1]-G[D][1])/(G[E][1]-G[D][1])+G[D][0])&&(C=!C)}return C}function n(F,G){var U=w.getData(),H=w.getOptions(),S=H.series.pie.radius>1?H.series.pie.radius:s*H.series.pie.radius,V,W;for(var E=0;E<U.length;++E){var T=U[E];if(T.pie.show){j.save();j.beginPath();j.moveTo(0,0);j.arc(0,0,S,T.startAngle,T.startAngle+T.angle/2,false);j.arc(0,0,S,T.startAngle+T.angle/2,T.startAngle+T.angle,false);j.closePath();V=F-g;W=G-h;if(j.isPointInPath){if(j.isPointInPath(F-g,G-h)){j.restore();return{datapoint:[T.percent,T.data],dataIndex:0,series:T,seriesIndex:E}}}else{var I=S*Math.cos(T.startAngle),J=S*Math.sin(T.startAngle),K=S*Math.cos(T.startAngle+T.angle/4),L=S*Math.sin(T.startAngle+T.angle/4),M=S*Math.cos(T.startAngle+T.angle/2),N=S*Math.sin(T.startAngle+T.angle/2),O=S*Math.cos(T.startAngle+T.angle/1.5),P=S*Math.sin(T.startAngle+T.angle/1.5),Q=S*Math.cos(T.startAngle+T.angle),R=S*Math.sin(T.startAngle+T.angle),D=[[0,0],[I,J],[K,L],[M,N],[O,P],[Q,R]],C=[V,W];if(r(D,C)){j.restore();return{datapoint:[T.percent,T.data],dataIndex:0,series:T,seriesIndex:E}}}j.restore()}}return null}function u(C){A("plothover",C)}function t(C){A("plotclick",C)}function A(F,E){var J=w.offset();var C=parseInt(E.pageX-J.left);var D=parseInt(E.pageY-J.top);var I=n(C,D);if(v.grid.autoHighlight){for(var H=0;H<p.length;++H){var G=p[H];if(G.auto==F&&!(I&&G.series==I.series)){B(G.series)}}}if(I){o(I.series,F)}var K={pageX:E.pageX,pageY:E.pageY};z.trigger(F,[K,I])}function o(E,C){var D=q(E);if(D==-1){p.push({series:E,auto:C});w.triggerRedrawOverlay()}else{if(!C){p[D].auto=false}}}function B(D){if(D==null){p=[];w.triggerRedrawOverlay()}var C=q(D);if(C!=-1){p.splice(C,1);w.triggerRedrawOverlay()}}function q(E){for(var D=0;D<p.length;++D){var C=p[D];if(C.series==E){return D}}return -1}function m(G,E){var F=G.getOptions();var H=F.series.pie.radius>1?F.series.pie.radius:s*F.series.pie.radius;E.save();E.translate(g,h);E.scale(1,F.series.pie.tilt);for(var D=0;D<p.length;++D){C(p[D].series)}l(E);E.restore();function C(I){if(I.angle<=0||isNaN(I.angle)){return}E.fillStyle="rgba(255, 255, 255, "+F.series.pie.highlight.opacity+")";E.beginPath();if(Math.abs(I.angle-Math.PI*2)>1e-09){E.moveTo(0,0)}E.arc(0,0,H,I.startAngle,I.startAngle+I.angle/2,false);E.arc(0,0,H,I.startAngle+I.angle/2,I.startAngle+I.angle,false);E.closePath();E.fill()}}}var c={series:{pie:{show:false,radius:"auto",innerRadius:0,startAngle:3/2,tilt:1,shadow:{left:5,top:15,alpha:0.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(f,g){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+g.color+";'>"+f+"<br/>"+Math.round(g.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:0.5}}}};a.plot.plugins.push({init:b,options:c,name:"pie",version:"1.1"})})(jQuery);