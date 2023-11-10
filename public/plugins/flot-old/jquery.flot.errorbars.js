(function(a){var g={series:{points:{errorbars:null,xerr:{err:"x",show:null,asymmetric:null,upperCap:null,lowerCap:null,color:null,radius:null},yerr:{err:"y",show:null,asymmetric:null,upperCap:null,lowerCap:null,color:null,radius:null}}}};function i(n,o,j,k){if(!o.points.errorbars){return}var m=[{x:true,number:true,required:true},{y:true,number:true,required:true}];var l=o.points.errorbars;if(l=="x"||l=="xy"){if(o.points.xerr.asymmetric){m.push({x:true,number:true,required:true});m.push({x:true,number:true,required:true})}else{m.push({x:true,number:true,required:true})}}if(l=="y"||l=="xy"){if(o.points.yerr.asymmetric){m.push({y:true,number:true,required:true});m.push({y:true,number:true,required:true})}else{m.push({y:true,number:true,required:true})}}k.format=m}function h(r,p){var q=r.datapoints.points;var l=null,m=null,n=null,o=null;var s=r.points.xerr,t=r.points.yerr;var j=r.points.errorbars;if(j=="x"||j=="xy"){if(s.asymmetric){l=q[p+2];m=q[p+3];if(j=="xy"){if(t.asymmetric){n=q[p+4];o=q[p+5]}else{n=q[p+4]}}}else{l=q[p+2];if(j=="xy"){if(t.asymmetric){n=q[p+3];o=q[p+4]}else{n=q[p+3]}}}}else{if(j=="y"){if(t.asymmetric){n=q[p+2];o=q[p+3]}else{n=q[p+2]}}}if(m==null){m=l}if(o==null){o=n}var k=[l,m,n,o];if(!s.show){k[0]=null;k[1]=null}if(!t.show){k[2]=null;k[3]=null}return k}function e(A,k,E){var B=E.datapoints.points,C=E.datapoints.pointsize,j=[E.xaxis,E.yaxis],D=E.points.radius,o=[E.points.xerr,E.points.yerr];var r=false;if(j[0].p2c(j[0].max)<j[0].p2c(j[0].min)){r=true;var G=o[0].lowerCap;o[0].lowerCap=o[0].upperCap;o[0].upperCap=G}var t=false;if(j[1].p2c(j[1].min)<j[1].p2c(j[1].max)){t=true;var G=o[1].lowerCap;o[1].lowerCap=o[1].upperCap;o[1].upperCap=G}for(var q=0;q<E.datapoints.points.length;q+=C){var p=h(E,q);for(var n=0;n<o.length;n++){var z=[j[n].min,j[n].max];if(p[n*o.length]){var J=B[q],K=B[q+1];var H=[J,K][n]+p[n*o.length+1],u=[J,K][n]-p[n*o.length];if(o[n].err=="x"){if(K>j[1].max||K<j[1].min||H<j[0].min||u>j[0].max){continue}}if(o[n].err=="y"){if(J>j[0].max||J<j[0].min||H<j[1].min||u>j[1].max){continue}}var m=true,l=true;if(H>z[1]){m=false;H=z[1]}if(u<z[0]){l=false;u=z[0]}if((o[n].err=="x"&&r)||(o[n].err=="y"&&t)){var G=u;u=H;H=G;G=l;l=m;m=G;G=z[0];z[0]=z[1];z[1]=G}J=j[0].p2c(J),K=j[1].p2c(K),H=j[n].p2c(H);u=j[n].p2c(u);z[0]=j[n].p2c(z[0]);z[1]=j[n].p2c(z[1]);var v=o[n].lineWidth?o[n].lineWidth:E.points.lineWidth,F=E.points.shadowSize!=null?E.points.shadowSize:E.shadowSize;if(v>0&&F>0){var I=F/2;k.lineWidth=I;k.strokeStyle="rgba(0,0,0,0.1)";c(k,o[n],J,K,H,u,m,l,D,I+I/2,z);k.strokeStyle="rgba(0,0,0,0.2)";c(k,o[n],J,K,H,u,m,l,D,I/2,z)}k.strokeStyle=o[n].color?o[n].color:E.color;k.lineWidth=v;c(k,o[n],J,K,H,u,m,l,D,0,z)}}}}function c(j,m,s,t,r,n,l,k,q,p,o){t+=p;r+=p;n+=p;if(m.err=="x"){if(r>s+q){d(j,[[r,t],[Math.max(s+q,o[0]),t]])}else{l=false}if(n<s-q){d(j,[[Math.min(s-q,o[1]),t],[n,t]])}else{k=false}}else{if(r<t-q){d(j,[[s,r],[s,Math.min(t-q,o[0])]])}else{l=false}if(n>t+q){d(j,[[s,Math.max(t+q,o[1])],[s,n]])}else{k=false}}q=m.radius!=null?m.radius:q;if(l){if(m.upperCap=="-"){if(m.err=="x"){d(j,[[r,t-q],[r,t+q]])}else{d(j,[[s-q,r],[s+q,r]])}}else{if(a.isFunction(m.upperCap)){if(m.err=="x"){m.upperCap(j,r,t,q)}else{m.upperCap(j,s,r,q)}}}}if(k){if(m.lowerCap=="-"){if(m.err=="x"){d(j,[[n,t-q],[n,t+q]])}else{d(j,[[s-q,n],[s+q,n]])}}else{if(a.isFunction(m.lowerCap)){if(m.err=="x"){m.lowerCap(j,n,t,q)}else{m.lowerCap(j,s,n,q)}}}}}function d(j,l){j.beginPath();j.moveTo(l[0][0],l[0][1]);for(var k=1;k<l.length;k++){j.lineTo(l[k][0],l[k][1])}j.stroke()}function b(k,j){var l=k.getPlotOffset();j.save();j.translate(l.left,l.top);a.each(k.getData(),function(m,n){if(n.points.errorbars&&(n.points.xerr.show||n.points.yerr.show)){e(k,j,n)}});j.restore()}function f(j){j.hooks.processRawData.push(i);j.hooks.draw.push(b)}a.plot.plugins.push({init:f,options:g,name:"errorbars",version:"1.0"})})(jQuery);