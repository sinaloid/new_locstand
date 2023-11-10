/* DataTables Bootstrap 4 integration
 * ©2011-2017 SpryMedia Ltd - datatables.net/license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery","datatables.net"],function(b){return a(b,window,document)})}else{if(typeof exports==="object"){module.exports=function(c,b){if(!c){c=window}if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$}return a(b,c,c.document)}}else{a(jQuery,window,document)}}}(function(a,e,c,d){var b=a.fn.dataTable;a.extend(true,b.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",renderer:"bootstrap"});a.extend(b.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap4",sFilterInput:"form-control form-control-sm",sLengthSelect:"custom-select custom-select-sm form-control form-control-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});b.ext.renderer.pageButton.bootstrap=function(u,p,q,l,s,t){var g=new b.Api(u);var m=u.oClasses;var r=u.oLanguage.oPaginate;var h=u.oLanguage.oAria.paginate||{};var k,j,n=0;var i=function(y,w){var z,A,B,v;var x=function(C){C.preventDefault();if(!a(C.currentTarget).hasClass("disabled")&&g.page()!=C.data.action){g.page(C.data.action).draw("page")}};for(z=0,A=w.length;z<A;z++){v=w[z];if(a.isArray(v)){i(y,v)}else{k="";j="";switch(v){case"ellipsis":k="&#x2026;";j="disabled";break;case"first":k=r.sFirst;j=v+(s>0?"":" disabled");break;case"previous":k=r.sPrevious;j=v+(s>0?"":" disabled");break;case"next":k=r.sNext;j=v+(s<t-1?"":" disabled");break;case"last":k=r.sLast;j=v+(s<t-1?"":" disabled");break;default:k=v+1;j=s===v?"active":"";break}if(k){B=a("<li>",{"class":m.sPageButton+" "+j,id:q===0&&typeof v==="string"?u.sTableId+"_"+v:null}).append(a("<a>",{href:"#","aria-controls":u.sTableId,"aria-label":h[v],"data-dt-idx":n,tabindex:u.iTabIndex,"class":"page-link"}).html(k)).appendTo(y);u.oApi._fnBindAction(B,{action:v},x);n++}}}};var f;try{f=a(p).find(c.activeElement).data("dt-idx")}catch(o){}i(a(p).empty().html('<ul class="pagination"/>').children("ul"),l);if(f!==d){a(p).find("[data-dt-idx="+f+"]").focus()}};return b}));