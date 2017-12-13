'use strict'

function getBrowserId () {

    var
        aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    if (nIdx === 1) {
    var meinevariable = document.querySelector("article")
    meinevariable.className += "test"
    }
        
}
    
document.addEventListener("DOMContentLoaded", getBrowserId(), true)
