(function(b,a){typeof exports==="object"&&typeof module!=="undefined"&&typeof require==="function"?a(require("../moment")):typeof define==="function"&&define.amd?define(["../moment"],a):a(b.moment)}(this,(function(a){function b(f,h,e,d){var g=f+" ";switch(e){case"s":return h||d?"nekaj sekund":"nekaj sekundami";case"ss":if(f===1){g+=h?"sekundo":"sekundi"}else{if(f===2){g+=h||d?"sekundi":"sekundah"}else{if(f<5){g+=h||d?"sekunde":"sekundah"}else{g+="sekund"}}}return g;case"m":return h?"ena minuta":"eno minuto";case"mm":if(f===1){g+=h?"minuta":"minuto"}else{if(f===2){g+=h||d?"minuti":"minutama"}else{if(f<5){g+=h||d?"minute":"minutami"}else{g+=h||d?"minut":"minutami"}}}return g;case"h":return h?"ena ura":"eno uro";case"hh":if(f===1){g+=h?"ura":"uro"}else{if(f===2){g+=h||d?"uri":"urama"}else{if(f<5){g+=h||d?"ure":"urami"}else{g+=h||d?"ur":"urami"}}}return g;case"d":return h||d?"en dan":"enim dnem";case"dd":if(f===1){g+=h||d?"dan":"dnem"}else{if(f===2){g+=h||d?"dni":"dnevoma"}else{g+=h||d?"dni":"dnevi"}}return g;case"M":return h||d?"en mesec":"enim mesecem";case"MM":if(f===1){g+=h||d?"mesec":"mesecem"}else{if(f===2){g+=h||d?"meseca":"mesecema"}else{if(f<5){g+=h||d?"mesece":"meseci"}else{g+=h||d?"mesecev":"meseci"}}}return g;case"y":return h||d?"eno leto":"enim letom";case"yy":if(f===1){g+=h||d?"leto":"letom"}else{if(f===2){g+=h||d?"leti":"letoma"}else{if(f<5){g+=h||d?"leta":"leti"}else{g+=h||d?"let":"leti"}}}return g}}var c=a.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:true,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:b,ss:b,m:b,mm:b,h:b,hh:b,d:b,dd:b,M:b,MM:b,y:b,yy:b},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return c})));