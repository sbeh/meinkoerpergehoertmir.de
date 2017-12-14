'use strict'

var meinArray = new Array('Element 1', 'Element 2', 'Element 3');
    
// gibt die aktuelle Länge (3) aus
console.log(meinArray.length);


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
    console.log(Object.keys(meinevariable[0]));
    console.log(meinevariable);
    //for( var z=0 ; z < meinevariable ; z++){
      //  console.log('ksssnmnmsnmssnm'+z);
   // meinevariable.remove('article__left--item');
   // meinevariable.add('useragent__firefox--item');
     //   }
    }

