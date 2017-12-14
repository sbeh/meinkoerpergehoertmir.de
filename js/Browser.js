'use strict'

 console.log('3:  browser');

window.onload = function () {
     var kk = getBrowserId();
 console.log('weooeoe:' + kk);
     if (kk === 1) {
      if(document.getElementsByTagName('article') !== undefined){
        console.log('nichts');
      }else{
          console.log('zeile 8:  ' +  document.getElementsByTagName('article'));
             //document.getElementsByTagName('article').classList.remove("articel__left--item");
              // console.log(document.getElementsByTagName('article').size());
             document.getElementsByTagName("article").classList.add("useragent__firefox--item");
       }
     }

}

function getBrowserId () {
    var
        aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx;
}



//if (kk === 1) {
  //  var meinevariable = document.getElementsByClassName('article__left--item');
    //console.log(Object.meinevariable);
    //console.log('///////////'+meinevariable+'//////////////');
    
    //var z=0;
    //if(typeof meinevariable[z] !== undefined){
        //console.log('kkk'+z);
        //z++;
   // } 
 
    
    
    //for( var z=0 ; z < meinevariable ; z++){
      //  console.log('ksssnmnmsnmssnm'+z);
   // meinevariable.remove('article__left--item');
   // meinevariable.add('useragent__firefox--item');
     //   }
   // }
