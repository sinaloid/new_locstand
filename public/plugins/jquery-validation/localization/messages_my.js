(function(a){if(typeof define==="function"&&define.amd){define(["jquery","../jquery.validate"],a)}else{if(typeof module==="object"&&module.exports){module.exports=a(require("jquery"))}else{a(jQuery)}}}(function(a){a.extend(a.validator.messages,{required:"Medan ini diperlukan.",remote:"Sila betulkan medan ini.",email:"Sila masukkan alamat emel yang betul.",url:"Sila masukkan URL yang betul.",date:"Sila masukkan tarikh yang betul.",dateISO:"Sila masukkan tarikh(ISO) yang betul.",number:"Sila masukkan nombor yang betul.",digits:"Sila masukkan nilai digit sahaja.",creditcard:"Sila masukkan nombor kredit kad yang betul.",equalTo:"Sila masukkan nilai yang sama semula.",extension:"Sila masukkan nilai yang telah diterima.",maxlength:a.validator.format("Sila masukkan tidak lebih dari {0} aksara."),minlength:a.validator.format("Sila masukkan sekurang-kurangnya {0} aksara."),rangelength:a.validator.format("Sila masukkan antara {0} dan {1} panjang aksara."),range:a.validator.format("Sila masukkan nilai antara {0} dan {1} aksara."),max:a.validator.format("Sila masukkan nilai yang kurang atau sama dengan {0}."),min:a.validator.format("Sila masukkan nilai yang lebih atau sama dengan {0}.")});return a}));