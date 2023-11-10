/* Bootstrap 4 styling wrapper for FixedHeader
 * ©2018 SpryMedia Ltd - datatables.net/license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery","datatables.net-bs4","datatables.net-fixedheader"],function(b){return a(b,window,document)})}else{if(typeof exports==="object"){module.exports=function(c,b){if(!c){c=window}if(!b||!b.fn.dataTable){b=require("datatables.net-bs4")(c,b).$}if(!b.fn.dataTable.FixedHeader){require("datatables.net-fixedheader")(c,b)}return a(b,c,c.document)}}else{a(jQuery,window,document)}}}(function(a,d,b,c){return a.fn.dataTable}));