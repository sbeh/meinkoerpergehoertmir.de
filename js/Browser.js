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

var kk = getBrowserId();

if (kk === 1) {
    //var meinevariable = document.getElementsByClassName('article__left--item');
    //console.log(Object.meinevariable);
    //console.log(meinevariable);
    
    var z=0 
    for(var elem of document.getElementsByClassName('article__left--item')){
        
        console.log(elem + z);
        z++; 
    }
       
 
    
    
    //for( var z=0 ; z < meinevariable ; z++){
      //  console.log('ksssnmnmsnmssnm'+z);
   // meinevariable.remove('article__left--item');
   // meinevariable.add('useragent__firefox--item');
     //   }
    }

