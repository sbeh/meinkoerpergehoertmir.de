'use strict'

function replaceElem(elem)
{
    var x = new XMLHttpRequest()
	x.onreadystatechange = function () {
		if (x.readyState === XMLHttpRequest.DONE) {
            if (x.status === 200) {
                elem.outerHTML = x.response
                handleReplace()
            } else {
                elem.outerHTML = 'Fehler! Konnte ' + elem.textContent + ' nicht ersetzen.<br>'
            }
        }
	}
	x.open('GET', 'module/' + elem.textContent + '.html')
	x.send()
}

function handleReplace() {
    var elems = document.getElementsByTagName('replace')
    for(var elem of elems)
        replaceElem(elem)
    
    if (elems.length === 0)
        replaceClasses()
}

document.addEventListener('load', handleReplace, true)