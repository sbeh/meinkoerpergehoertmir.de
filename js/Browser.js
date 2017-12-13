'use strict'

function getBrowserId () {

    var
        aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx;    
}
    
//document.addEventListener("DOMContentLoaded", getBrowserId(), true)
var kk = getBrowserId();
if (kk === 1) {
    var meinevariable = document.getElementsByClassName('article__left--item');
    console.log(meinevariable.length());
    //for( var z=0 ; z < meinevariable.length ; z++){
      //  console.log(z);
   // meinevariable.remove('article__left--item');
   // meinevariable.add('useragent__firefox--item');
        //}
    }
