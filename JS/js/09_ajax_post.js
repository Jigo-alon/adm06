(function (d) {
	'use strict';

	var READY_STATE_COMPLETE = 4,
		OK = 200,
		NOT_FOUND = 404,
		ajax = new XMLHttpRequest(),
		form = d.forms[0],
		preload = form.querySelector('.preload'),
		message = form.querySelector('.message');


	//Método GET
	//servidor.php
	//?nombre=Jonathan+Ulises+Miranda+Charles&email=jonmircha%40gmail.com&asunto=Hola&comentarios=klojoij
	//https://www.google.com.mx/search?q=navidad&oq=navidad&aqs=chrome.0.0l6.5283j0j7&sourceid=chrome&ie=UTF-8

	function sendForm(e) {
		var formElements = d.querySelectorAll('[required]'),
			formData = '';

		e.preventDefault();

		ajax.open('POST', './servidor.php', true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
		ajax.onload = function () {
			preload.classList.remove('hidden');

			if ( ajax.readyState === READY_STATE_COMPLETE ) {
				preload.classList.add('hidden');
				message.classList.remove('hidden');

				if ( ajax.status === OK ) {
					message.innerHTML = ajax.responseText;
				} else if ( ajax.status === NOT_FOUND ) {
					message.innerHTML = `<p>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></p>`;
				}
			}
		}

		ajax.send();
	}

	form.onsubmit = sendForm;
})(document);