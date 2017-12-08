'use strict'

function replaceElem(elem)
{
    var x = new XMLHttpRequest()
	x.onreadystatechange = function () {
		if (x.readyState === XMLHttpRequest.DONE && x.status === 200) {
            elem.outerHTML = x.response
            handleReplace()
        }
	}
	x.open('GET', 'module/' + elem.textContent + '.html')
	x.send()
}

function handleReplace() {
    for(var elem of document.getElementsByTagName('replace'))
        replaceElem(elem)
}

document.addEventListener('load', handleReplace, true)