// ==UserScript==
// @name        YoutubeVideoResizer
// @namespace   myDVPC
// @include     https://www.youtube.com/watch?*
// @version     0.21
// @grant GM_registerMenuCommand
// @grant GM_log
// @run-at document-end

// ==/UserScript==

function init(){
  player = document.getElementById("player-api");
  video = document.getElementsByClassName("video-stream html5-main-video")[0];
  
  storageOldValues = [];
  storageNames = [];
  storageNewValues = [];  
  changedValues = false;
  
  //The button
  GM_registerMenuCommand("Resize video",changeStyle);
}

function addToStorage(name,value){
  storageOldValues[storageOldValues.length]=eval(name);
  storageNewValues[storageNewValues.length]=value;
  storageNames[storageNames.length]=name;
  }

//On the button click
function changeStyle(){
  //Save old & new values
  if (storageOldValues.length==storageNewValues.length&&storageNewValues.length==storageNames.length){
     for(var i=0;i<storageNames.length;i++){              
       if(changedValues){
         eval(storageNames[i]+"=\""+storageOldValues[i]+"\"");
       } else {
         eval(storageNames[i]+"=\""+storageNewValues[i]+"\"");
       }       
     }
    
    //Flip the flag after operation
    if(changedValues){
      changedValues=false;
    } else {
      changedValues=true;
    }
  }
}

//Styles to be changed
function valuesToChange(){
	addToStorage("player.style.position","fixed");
	addToStorage("player.style.width","99%");
	addToStorage("player.style.left","0px");
	addToStorage("player.style.marginLeft","0px");
	addToStorage("player.style.height","50%");
	addToStorage("video.style.width","100%");
	addToStorage("video.style.height","100%");
  };

//On the page load
init();
valuesToChange();
