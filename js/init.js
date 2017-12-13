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

var match = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
var ver = match ? parseInt(match[1]) : 0;
console.log(ver);
