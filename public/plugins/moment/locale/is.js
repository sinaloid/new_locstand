(function(b,a){typeof exports==="object"&&typeof module!=="undefined"&&typeof require==="function"?a(require("../moment")):typeof define==="function"&&define.amd?define(["../moment"],a):a(b.moment)}(this,(function(b){function c(e){if(e%100===11){return true}else{if(e%10===1){return false}}return true}function d(g,i,f,e){var h=g+" ";switch(f){case"s":return i||e?"nokkrar sekúndur":"nokkrum sekúndum";case"ss":if(c(g)){return h+(i||e?"sekúndur":"sekúndum")}return h+"sekúnda";case"m":return i?"mínúta":"mínútu";case"mm":if(c(g)){return h+(i||e?"mínútur":"mínútum")}else{if(i){return h+"mínúta"}}return h+"mínútu";case"hh":if(c(g)){return h+(i||e?"klukkustundir":"klukkustundum")}return h+"klukkustund";case"d":if(i){return"dagur"}return e?"dag":"degi";case"dd":if(c(g)){if(i){return h+"dagar"}return h+(e?"daga":"dögum")}else{if(i){return h+"dagur"}}return h+(e?"dag":"degi");case"M":if(i){return"mánuður"}return e?"mánuð":"mánuði";case"MM":if(c(g)){if(i){return h+"mánuðir"}return h+(e?"mánuði":"mánuðum")}else{if(i){return h+"mánuður"}}return h+(e?"mánuð":"mánuði");case"y":return i||e?"ár":"ári";case"yy":if(c(g)){return h+(i||e?"ár":"árum")}return h+(i||e?"ár":"ári")}}var a=b.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:d,ss:d,m:d,mm:d,h:"klukkustund",hh:d,d:d,dd:d,M:d,MM:d,y:d,yy:d},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return a})));