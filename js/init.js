function loadScript(url)
{
    var script = document.createElement('script');
    script.src = url;

    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
}

loadScript('js/replace.js');
loadScript('js/state_navigation.js');