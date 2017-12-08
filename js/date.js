'use strict'


function berechne() {


    var jetzt = new Date()
    console.log(jetzt)
    var jahr = jetzt.getFullYear()
    console.log(jahr)
    var text = '&copy' + jahr +' theaterp&auml;dagogische werkstatt gGmbH' 
    console.log(text)
    document.getElementById("ausgabe").innerHTML = text
    
}

document.addEventListener("DOMContentLoaded", berechne, true)