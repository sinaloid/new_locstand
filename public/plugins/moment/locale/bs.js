(function(b,a){typeof exports==="object"&&typeof module!=="undefined"&&typeof require==="function"?a(require("../moment")):typeof define==="function"&&define.amd?define(["../moment"],a):a(b.moment)}(this,(function(b){function c(e,g,d){var f=e+" ";switch(d){case"ss":if(e===1){f+="sekunda"}else{if(e===2||e===3||e===4){f+="sekunde"}else{f+="sekundi"}}return f;case"m":return g?"jedna minuta":"jedne minute";case"mm":if(e===1){f+="minuta"}else{if(e===2||e===3||e===4){f+="minute"}else{f+="minuta"}}return f;case"h":return g?"jedan sat":"jednog sata";case"hh":if(e===1){f+="sat"}else{if(e===2||e===3||e===4){f+="sata"}else{f+="sati"}}return f;case"dd":if(e===1){f+="dan"}else{f+="dana"}return f;case"MM":if(e===1){f+="mjesec"}else{if(e===2||e===3||e===4){f+="mjeseca"}else{f+="mjeseci"}}return f;case"yy":if(e===1){f+="godina"}else{if(e===2||e===3||e===4){f+="godine"}else{f+="godina"}}return f}}var a=b.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:true,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:c,m:c,mm:c,h:c,hh:c,d:"dan",dd:c,M:"mjesec",MM:c,y:"godinu",yy:c},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return a})));