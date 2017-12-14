'use strict'

 console.log('3:  browser');

window.onload = function () {
     var kk = getBrowserId();
 console.log('weooeoe:' + kk);
     if (kk === 1) {
      console.log('zeile 9:  ' + document.getElementsByTagName('article').length);
      if(document.getElementsByTagName('article')){
           console.log('zeile 11:  ' +  document.getElementsByTagName('article'));
             //document.getElementsByTagName('article').classList.remove("articel__left--item");
              // console.log(document.getElementsByTagName('article').size());
             //document.getElementsByTagName("article").classList.add("useragent__firefox--item");
       }else{console.log('nichts da'); }
     }

}

function getBrowserId () {
    var
        aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx;
}
