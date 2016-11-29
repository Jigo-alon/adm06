(function (d, w) {
	'use strict';

	var anchoViewport = d.querySelector('#ancho-viewport'),
		altoViewport = d.querySelector('#alto-viewport'),
		anchoWindow = d.querySelector('#ancho-window'),
		altoWindow = d.querySelector('#alto-window'),
		scrollHorizontal = d.querySelector('#scroll-horizontal'),
		scrollVertical = d.querySelector('#scroll-vertical'),
		screenHorizontal = d.querySelector('#screen-horizontal'),
		screenVertical = d.querySelector('#screen-vertical'),
		btnAbrir = d.querySelector('#abrir'),
		btnCerrar = d.querySelector('#cerrar'),
		btnImprimir = d.querySelector('#imprimir'),
		btnMoverScrollOrigen = d.querySelector('#mover-scroll-origen'),
		btnMoverScrollPosicion = d.querySelector('#mover-scroll-posicion'),
		btnNumero = d.querySelector('#numero');

	function propiedadesPantalla() {
		anchoViewport.innerHTML = w.innerWidth;
		altoViewport.innerHTML = w.innerHeight;
		anchoWindow.innerHTML = w.outerWidth;
		altoWindow.innerHTML = w.outerHeight;
		scrollHorizontal.innerHTML = w.scrollX;
		scrollVertical.innerHTML = w.scrollY;
		screenHorizontal.innerHTML = w.screenX;
		screenVertical.innerHTML = w.screenY;
	}

	function parImpar() {
		//alert('Ingresa un número');
		//confirm('Ingresa un número');
		//prompt('Ingresa un número');

		var numero = prompt('Ingresa un número'),
			modulo = numero % 2,
			textoPar = 'El número: ' + numero + ' es Par',
			textoImpar = 'El número: ' + numero + ' es Impar',
			ternario;
		/*
			= Asignación
			== Comparación de valor  -  igual a
			=== Comparación de valor y tipo de dato  -  idéntico a
		
			if ( condición ) {
				true
			} else {
				false
			}

			operador ternario
			variable = (condición) ? verdadero : falso;
		*/

		if ( isNaN(numero) || numero === '' ) {
			alert('No me engañes "' + numero + '" no es un número');
		} else {
			//ternario = ( modulo === 1 ) ? textoImpar : textoPar; 
			ternario = ( modulo === 0 ) ? textoPar : textoImpar;
			alert(ternario);
		}
		console.log( typeof numero );
	}

	w.onload = propiedadesPantalla;
	w.onresize = propiedadesPantalla;
	w.onscroll = propiedadesPantalla;

	btnNumero.onclick = parImpar;

	btnAbrir.onclick = function () {
		//open();
		//open('http://google.com.mx');
		open('publicidad.html');
	}

	btnCerrar.onclick = function () {
		close();
	}

	btnImprimir.onclick = function () {
		print();
	}

	btnMoverScrollOrigen.onclick = function () {
		scrollTo(10, 20);
	}

	btnMoverScrollPosicion.onclick = function () {
		scrollBy(10, 20);
	}
})(document, window);