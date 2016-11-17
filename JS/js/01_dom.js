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

	//Declarando variables
	var lista = d.querySelector('#lista'),
		li = d.createElement('li'),
		txtLi = d.createTextNode('Lista 6'),
		p1 = d.querySelector('#uno'),
		//declaración y asignación
		p2 = d.querySelector('#dos'),
		//declaración
		p3,
		container = d.querySelector('#container'),
		otroLi,
		a = d.querySelector('.link');
	/*
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
		lista.previousSibling,		
		lista.previousElementSibling,
		lista.nextSibling,
		lista.nextElementSibling
	);
	*/
	li.appendChild(txtLi);
	lista.appendChild(li);
	p3 = p2.cloneNode(true);
	container.appendChild(p3);
	lista.removeChild(lista.firstElementChild);
	otroLi = li.cloneNode(false);
	lista.insertBefore(otroLi, lista.children[0]);
	lista.replaceChild(lista.children[0], lista.children[3]);

	lista.firstChild.nodeValue = 'Hola soy el primer nodo de la lista';
	otroLi.innerText = '<b>Lista 7</b>';
	p1.innerHTML = '<b>Hola, este es el contenido del párrafo 1</b>';

	container.classList.add('round');
	container.classList.remove('section');
	container.classList.toggle('active');
	container.classList.toggle('active');

	/*
	console.log(
		container.className,
		container.classList,
		container.classList[1],
		container.classList.contains('foo'),
		container.classList.contains('fixed')
	);
	*/

	//getters
	console.log(
		container.getAttribute('id'),
		container.id,
		//container.class
		a.href,
		a.getAttribute('target'),
		a.style,
		a.style.color,
		a.style.backgroundColor,
		d.head,
		d.body,
		d.html,
		d.documentElement,
		d.documentElement.lang
	);

	//setters
	a.href = 'http://jonmircha.com';
	a.setAttribute('target', '_self');
	a.style.padding = '1rem';
	a.style.borderRadius = '.25rem';

	d.documentElement.lang = 'es-CL';

	p3.setAttribute('id','tres');
	p3.innerText = 'Párrafo 3';

	d.querySelector('title').innerText = 'Nuevo Título con JS';
	d.body.style.backgroundColor = 'skyblue';
	d.documentElement.style.fontSize = '32px';

	container.insertAdjacentHTML('beforebegin', '<div>Antes y Afuera</div>');
	container.insertAdjacentHTML('afterbegin', '<div>Al principio y Adentro</div>');
	container.insertAdjacentHTML('beforeend', '<div>Al final y Adentro</div>');
	container.insertAdjacentHTML('afterend', '<div>Después y Afuera</div>');
	container.style.backgroundColor = '#999';

	console.log( d.querySelectorAll('div') );
	//d.querySelectorAll('div').style.backgroundColor = 'rosybrown';
	// for (inicialización; condición; aumento o decremento) { }
	for ( var n=0; n < d.querySelectorAll('div').length; n++ ) {
		d.querySelectorAll('div')[n].style.backgroundColor = 'rosybrown';
		
	}
})(document);
