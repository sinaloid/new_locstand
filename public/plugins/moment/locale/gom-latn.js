(function(b,a){typeof exports==="object"&&typeof module!=="undefined"&&typeof require==="function"?a(require("../moment")):typeof define==="function"&&define.amd?define(["../moment"],a):a(b.moment)}(this,(function(b){function c(g,h,f,e){var d={s:["thodde secondanim","thodde second"],ss:[g+" secondanim",g+" second"],m:["eka mintan","ek minute"],mm:[g+" mintanim",g+" mintam"],h:["eka voran","ek vor"],hh:[g+" voranim",g+" voram"],d:["eka disan","ek dis"],dd:[g+" disanim",g+" dis"],M:["eka mhoinean","ek mhoino"],MM:[g+" mhoineanim",g+" mhoine"],y:["eka vorsan","ek voros"],yy:[g+" vorsanim",g+" vorsam"]};return h?d[f][0]:d[f][1]}var a=b.defineLocale("gom-latn",{months:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:true,weekdays:"Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Ieta to] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fatlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:c,ss:c,m:c,mm:c,h:c,hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(d,e){switch(e){case"D":return d+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return d}},week:{dow:1,doy:4},meridiemParse:/rati|sokalli|donparam|sanje/,meridiemHour:function(d,e){if(d===12){d=0}if(e==="rati"){return d<4?d:d+12}else{if(e==="sokalli"){return d}else{if(e==="donparam"){return d>12?d:d+12}else{if(e==="sanje"){return d+12}}}}},meridiem:function(d,f,e){if(d<4){return"rati"}else{if(d<12){return"sokalli"}else{if(d<16){return"donparam"}else{if(d<20){return"sanje"}else{return"rati"}}}}}});return a})));