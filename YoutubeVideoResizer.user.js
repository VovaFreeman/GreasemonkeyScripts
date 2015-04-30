// ==UserScript==
// @name        YoutubeVideoResizer
// @namespace   myDVPC
// @include     https://www.youtube.com/watch?*
// @version     0.22
// @grant GM_registerMenuCommand
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

function addToStorage(){
  for(var i=0;i<arguments.length;i++){
    //start from 0
    if ((i%2)==0){
      storageNames[storageNames.length]=arguments[i];      
      storageOldValues[storageOldValues.length]=eval(arguments[i]);
    } else {
      storageNewValues[storageNewValues.length]=arguments[i];
    }
  }
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

//On the page load
init();
//Styles to be changed
addToStorage(
  "player.style.position","fixed",
  "player.style.width","99%",
  "player.style.left","0px",
  "player.style.marginLeft","0px",
  "player.style.height","50%",
  "video.style.width","100%",
  "video.style.height","100%"
);
