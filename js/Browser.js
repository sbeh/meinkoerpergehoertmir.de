'use strict'


window.onload = function () {
     var kk = getBrowserId();
 
     if (kk === 1) {
          var item = document.getElementsByClassName('articel__left--item');
          if( item ) {
             
       //var allParas = document.getElementsByClassName('section__innen');
          //var size = Object.keys(allParas);
          //var num = allParas.length;
    // console.log(allParas);
     item.remove('article__left--item');
     item.add('useragent__firefox--item');
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
