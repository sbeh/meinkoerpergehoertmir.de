'use strict'


window.load = function () {
     var kk = getBrowserId();
 
     if (kk === 1) {
             document.getElementsByTagName('article').remove("articel__left--item");
               console.log(item.size());
             document.getElementsByTagName('article').add('useragent__firefox--item');
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
