function loadScript(url)
{
    var script = document.createElement('script');
    script.src = url;

    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
}

loadScript('js/jquery.js');
loadScript('js/jquery.lightbox-0.5.js');
loadScript('js/replace.js');
loadScript('js/state_navigation.js');


Beispiel #2: Browsererkennung und Rückgabe eines Index.

function getBrowserId () {

    var
        aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx

}

console.log(getBrowserId());
