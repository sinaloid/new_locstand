(function(a){var f={canvas:true};var g,c,b;var d=Object.prototype.hasOwnProperty;function e(j,i){var h=i.Canvas;if(g==null){c=h.prototype.getTextInfo,b=h.prototype.addText,g=h.prototype.render}h.prototype.render=function(){if(!j.getOptions().canvas){return g.call(this)}var l=this.context,k=this._textCache;l.save();l.textBaseline="middle";for(var r in k){if(d.call(k,r)){var q=k[r];for(var x in q){if(d.call(q,x)){var w=q[x],y=true;for(var p in w){if(d.call(w,p)){var n=w[p],v=n.positions,t=n.lines;if(y){l.fillStyle=n.font.color;l.font=n.font.definition;y=false}for(var m=0,u;u=v[m];m++){if(u.active){for(var o=0,s;s=u.lines[o];o++){l.fillText(t[o].text,s[0],s[1])}}else{v.splice(m--,1)}}if(v.length==0){delete w[p]}}}}}}}l.restore()};h.prototype.getTextInfo=function(q,w,n,k,y){if(!j.getOptions().canvas){return c.call(this,q,w,n,k,y)}var x,r,v,p;w=""+w;if(typeof n==="object"){x=n.style+" "+n.variant+" "+n.weight+" "+n.size+"px "+n.family}else{x=n}r=this._textCache[q];if(r==null){r=this._textCache[q]={}}v=r[x];if(v==null){v=r[x]={}}p=v[w];if(p==null){var l=this.context;if(typeof n!=="object"){var m=a("<div>&nbsp;</div>").css("position","absolute").addClass(typeof n==="string"?n:null).appendTo(this.getTextLayer(q));n={lineHeight:m.height(),style:m.css("font-style"),variant:m.css("font-variant"),weight:m.css("font-weight"),family:m.css("font-family"),color:m.css("color")};n.size=m.css("line-height",1).height();m.remove()}x=n.style+" "+n.variant+" "+n.weight+" "+n.size+"px "+n.family;p=v[w]={width:0,height:0,positions:[],lines:[],font:{definition:x,color:n.color}};l.save();l.font=x;var s=(w+"").replace(/<br ?\/?>|\r\n|\r/g,"\n").split("\n");for(var o=0;o<s.length;++o){var t=s[o],u=l.measureText(t);p.width=Math.max(u.width,p.width);p.height+=n.lineHeight;p.lines.push({text:t,width:u.width,height:n.lineHeight})}l.restore()}return p};h.prototype.addText=function(p,z,A,u,l,k,w,m,v){if(!j.getOptions().canvas){return b.call(this,p,z,A,u,l,k,w,m,v)}var o=this.getTextInfo(p,u,l,k,w),t=o.positions,r=o.lines;A+=o.height/r.length/2;if(v=="middle"){A=Math.round(A-o.height/2)}else{if(v=="bottom"){A=Math.round(A-o.height)}else{A=Math.round(A)}}if(!!(window.opera&&window.opera.version().split(".")[0]<12)){A-=2}for(var n=0,s;s=t[n];n++){if(s.x==z&&s.y==A){s.active=true;return}}s={active:true,lines:[],x:z,y:A};t.push(s);for(var n=0,q;q=r[n];n++){if(m=="center"){s.lines.push([Math.round(z-q.width/2),A])}else{if(m=="right"){s.lines.push([Math.round(z-q.width),A])}else{s.lines.push([Math.round(z),A])}}A+=q.height}}}a.plot.plugins.push({init:e,options:f,name:"canvas",version:"1.0"})})(jQuery);