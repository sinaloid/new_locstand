(function(a){if(typeof define==="function"&&define.amd){define(["jquery","../jquery.validate"],a)}else{if(typeof module==="object"&&module.exports){module.exports=a(require("jquery"))}else{a(jQuery)}}}(function(a){a.extend(a.validator.messages,{required:"Bu xana mütləq doldurulmalıdır.",remote:"Zəhmət olmasa, düzgün məna daxil edin.",email:"Zəhmət olmasa, düzgün elektron poçt daxil edin.",url:"Zəhmət olmasa, düzgün URL daxil edin.",date:"Zəhmət olmasa, düzgün tarix daxil edin.",dateISO:"Zəhmət olmasa, düzgün ISO formatlı tarix daxil edin.",number:"Zəhmət olmasa, düzgün rəqəm daxil edin.",digits:"Zəhmət olmasa, yalnız rəqəm daxil edin.",creditcard:"Zəhmət olmasa, düzgün kredit kart nömrəsini daxil edin.",equalTo:"Zəhmət olmasa, eyni mənanı bir daha daxil edin.",extension:"Zəhmət olmasa, düzgün genişlənməyə malik faylı seçin.",maxlength:a.validator.format("Zəhmət olmasa, {0} simvoldan çox olmayaraq daxil edin."),minlength:a.validator.format("Zəhmət olmasa, {0} simvoldan az olmayaraq daxil edin."),rangelength:a.validator.format("Zəhmət olmasa, {0} - {1} aralığında uzunluğa malik simvol daxil edin."),range:a.validator.format("Zəhmət olmasa, {0} - {1} aralığında rəqəm daxil edin."),max:a.validator.format("Zəhmət olmasa, {0} və ondan kiçik rəqəm daxil edin."),min:a.validator.format("Zəhmət olmasa, {0} və ondan böyük rəqəm daxil edin")});return a}));