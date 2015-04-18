// ==UserScript==
// @name        HideGoogleLeftSidebar
// @namespace   myDVPC
// @include     http://www.google.com/search*
// @include     https://www.google.com/search*
// @version     0.2
// @grant       none
// @run-at      document-end
// ==/UserScript==

function AddStyle(Style){
  var style = document.createElement('style');
  style.type = "text/css";
  style.innerHTML = Style;
  document.getElementsByTagName('body')[0].appendChild(style);  
};

function changeStyle(){
  var elementCol = document.getElementById("center_col");
  elementCol.style.marginLeft="0px";
  
}
  

AddStyle("#leftnav{display:none;}"+"\n"
         +"#center_col{margin-left:0px;}");
changeStyle();