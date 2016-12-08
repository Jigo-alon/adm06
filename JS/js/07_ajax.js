(function (d, w) {
	'use strict';

	var READY_STATE_COMPLETE = 4,
		OK = 200,
		NOT_FOUND = 404,
		ajax = new XMLHttpRequest(),
		preload = d.querySelector('#preload'),
		country = d.querySelector('#country'),
		linksMenu = d.querySelectorAll('.menu a');

	function countryInfo() {
		//console.log(ajax);

		preload.innerHTML = '<i class="fa  fa-refresh  fa-spin  fa-5x"></i>';

		if ( ajax.readyState === READY_STATE_COMPLETE && ajax.status === OK ) {

			console.log(ajax);
			preload.innerHTML = '';
			country.innerHTML = ajax.response;

		} else if( ajax.status === NOT_FOUND ) {

			console.log(ajax);
			preload.innerHTML = '';
			country.innerHTML = '<h3>El servidor NO responde. Error N°' + ajax.status + ': <mark>' + ajax.statusText + '</mark></h3>';

		}
	}

	function ajaxRequest(e) {
		e.preventDefault();
		//alert('funciona');

		ajax.open('GET', e.target.href, true);
		ajax.onreadystatechange = countryInfo;
		ajax.setRequestHeader('Content-Type', 'text/html');
		ajax.send();
	}

	w.onload = function () {
		/*
		for (var n = 0; n > linksMenu.length; n++) {
			linksMenu[n].onclick = ajaxRequest;
		}
		*/

		linksMenu.forEach(function (link) {
			link.onclick = ajaxRequest;
		});
	}
})(document, window);