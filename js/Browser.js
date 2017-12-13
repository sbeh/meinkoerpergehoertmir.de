function getBrowserId () {

    var
        aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx

}
console.log('kk');
var intKey = getBrowserId();
console.log(intKey);
if (intKey === 1) {
    var meinevariable = document.querySelector("article");
    meinevariable.className += "test";
}
