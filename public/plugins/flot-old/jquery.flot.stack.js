(function(a){var c={series:{stack:null}};function b(e){function d(k,g){var j=null;for(var h=0;h<g.length;++h){if(k==g[h]){break}if(g[h].stack==k.stack){j=g[h]}}return j}function f(A,H,k){if(H.stack==null||H.stack===false){return}var x=d(H,A.getData());if(!x){return}var C=k.pointsize,B=k.points,z=x.datapoints.pointsize,y=x.datapoints.points,w=[],D,E,q,F,G,h,J=H.lines.show,o=H.bars.horizontal,I=C>2&&(o?k.format[2].x:k.format[2].y),K=J&&H.lines.steps,n=true,t=o?1:0,g=o?0:1,p=0,r=0,u,v;while(true){if(p>=B.length){break}u=w.length;if(B[p]==null){for(v=0;v<C;++v){w.push(B[p+v])}p+=C}else{if(r>=y.length){if(!J){for(v=0;v<C;++v){w.push(B[p+v])}}p+=C}else{if(y[r]==null){for(v=0;v<C;++v){w.push(null)}n=true;r+=z}else{D=B[p+t];E=B[p+g];F=y[r+t];G=y[r+g];h=0;if(D==F){for(v=0;v<C;++v){w.push(B[p+v])}w[u+g]+=G;h=G;p+=C;r+=z}else{if(D>F){if(J&&p>0&&B[p-C]!=null){q=E+(B[p-C+g]-E)*(F-D)/(B[p-C+t]-D);w.push(F);w.push(q+G);for(v=2;v<C;++v){w.push(B[p+v])}h=G}r+=z}else{if(n&&J){p+=C;continue}for(v=0;v<C;++v){w.push(B[p+v])}if(J&&r>0&&y[r-z]!=null){h=G+(y[r-z+g]-G)*(D-F)/(y[r-z+t]-F)}w[u+g]+=h;p+=C}}n=false;if(u!=w.length&&I){w[u+2]+=h}}}}if(K&&u!=w.length&&u>0&&w[u]!=null&&w[u]!=w[u-C]&&w[u+1]!=w[u-C+1]){for(v=0;v<C;++v){w[u+C+v]=w[u+v]}w[u+1]=w[u-C+1]}}k.points=w}e.hooks.processDatapoints.push(f)}a.plot.plugins.push({init:b,options:c,name:"stack",version:"1.2"})})(jQuery);