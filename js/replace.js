function replaceElem(elem)
{
    //var elem = document.getElementById(id);
    var x = new XMLHttpRequest();
	x.onreadystatechange = function () {
		if (x.readyState === XMLHttpRequest.DONE && x.status === 200)
            elem.outerHTML = x.response;
	}
	x.open('GET', 'module/' + elem.textContent + '.php');
	x.send();
}

document.addEventListener('load', function() {
    for(var elem of document.getElementsByTagName('replace'))
        replaceElem(elem);
}, true);