(function(b,a){typeof exports==="object"&&typeof module!=="undefined"&&typeof require==="function"?a(require("../moment")):typeof define==="function"&&define.amd?define(["../moment"],a):a(b.moment)}(this,(function(a){var b="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");function e(g){return(g%10<5)&&(g%10>1)&&((~~(g/10)%10)!==1)}function f(h,j,g){var i=h+" ";switch(g){case"ss":return i+(e(h)?"sekundy":"sekund");case"m":return j?"minuta":"minutę";case"mm":return i+(e(h)?"minuty":"minut");case"h":return j?"godzina":"godzinę";case"hh":return i+(e(h)?"godziny":"godzin");case"MM":return i+(e(h)?"miesiące":"miesięcy");case"yy":return i+(e(h)?"lata":"lat")}}var d=a.defineLocale("pl",{months:function(h,g){if(!h){return b}else{if(g===""){return"("+c[h.month()]+"|"+b[h.month()]+")"}else{if(/D MMMM/.test(g)){return c[h.month()]}else{return b[h.month()]}}}},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:f,m:f,mm:f,h:f,hh:f,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:f,y:"rok",yy:f},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return d})));