
function verstecken() {
	
	var status  = document.getElementById('nav');
	status.classList.remove('nav__status'); 
	status.classList.add('nav__status--hidden'); 	
	
	var statusverstecken  = document.getElementById('nav_verstecken');	
	statusverstecken.classList.remove('button__verstecken');
	statusverstecken.classList.add('button__verstecken--hidden');	
	
	var statusanzeigen  = document.getElementById('nav_anzeigen');	
	statusanzeigen.classList.remove('button__anzeigen--hidden');
	statusanzeigen.classList.add('button__anzeigen');
 }



function anzeigen() {
	
	var status  = document.getElementById('nav');
	status.classList.remove('nav__status--hidden'); 
	status.classList.add('nav__status');  	

	var statusverstecken  = document.getElementById('nav_verstecken');	
	statusverstecken.classList.remove('button__verstecken--hidden');
	statusverstecken.classList.add('button__verstecken');	
	
	var statusanzeigen  = document.getElementById('nav_anzeigen');	
	statusanzeigen.classList.remove('button__anzeigen');
	statusanzeigen.classList.add('button__anzeigen--hidden');
 }
