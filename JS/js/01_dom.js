(function () {
	'use strict';

	//Analisis del código HTML del Home de Bextlán - bextlan.com
	document.getElementsByTagName('li');
	document.getElementsByTagName('li').length;
	document.getElementsByTagName('li')[3];

	document.getElementsByClassName('menu');
	document.getElementsByClassName('menu').length;
	document.getElementsByClassName('menu')[1];

	document.getElementById('subscription');

	document.getElementsByName('email');

	document.querySelectorAll('li');
	document.querySelectorAll('li').length;
	document.querySelector('li');

	document.querySelectorAll('.menu');
	document.querySelectorAll('.menu li');
	document.querySelector('.menu li');

	document.querySelector('#subscription');
	document.querySelectorAll('#subscription');

	document.querySelectorAll('[name="email"]');
	document.querySelectorAll('[href]');
})();

(function (d) {
	'use strict';

	var lista = d.querySelector('#lista');

	console.log(
		lista,
		lista.parentNode,
		lista.parentElement,
		lista.childNodes,
		lista.children,
		lista.firstChild,
		lista.firstElementChild,
		lista.lastChild,
		lista.lastElementChild,
		lista.previousSibling,		lista.previousElementSibling,
		lista.nextSibling,
		lista.nextElementSibling
	);
})(document);
