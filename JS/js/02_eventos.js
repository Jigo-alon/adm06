
//una función que manejadora de evento, sólo puede recibir como parámetro el evento que se ejecuta
function rojo(evento) {
	document.body.style.backgroundColor = 'red';
	document.body.style.color = 'white';
	console.log(evento);
}

(function (d) {
	'use strict';

	var btnVerde = d.querySelector('#verde'),
		btnAzul = d.querySelector('#azul'),
		btnReset = d.querySelector('#resetear'),
		btns = d.querySelectorAll('button');

	function verde(e) {
		d.body.style.backgroundColor = 'green';
		d.body.style.color = 'white';
		console.log(e);

		e.target.textContent = 'He pulsado el botón';
		e.target.style.fontSize = '300%';
		e.target.style.backgroundColor = 'black';
		e.target.style.color = 'white';
	}

	function azul(e) {
		var el = e.target;

		d.body.style.backgroundColor = 'blue';
		d.body.style.color = 'white';
		console.log(e);

		el.style.fontSize = '200%';
		el.style.backgroundColor = 'skyblue';
	}

	//Manejador de eventos semántico
	btnVerde.onclick = verde;

	//Manejador de eventos múltiple
	btnAzul.addEventListener('click', azul);

	btnReset.addEventListener('click', function () {
		d.body.style.backgroundColor = '';
		d.body.style.color = '';

		for (var n = 0; n < btns.length; n++) {
			btns[n].style.fontSize = '';
			btns[n].style.color = '';
			btns[n].style.backgroundColor = '';
			btns[n].textContent = btns[n].id;
		}

		btnAzul.removeEventListener('click', azul);
	});
})(document);

(function (d, w) {
	'use strict';

	var fecha = new Date(),
		hora = fecha.getHours(),
		saludo = d.querySelector('#saludo'),
		hojaCSS = d.createElement('link'),
		reloj = d.querySelector('#reloj'),
		fechaFormato = fecha.toLocaleTimeString(),
		btnIniciarReloj = d.querySelector('#iniciar-reloj'),
		btnIniciarAlarma = d.querySelector('#iniciar-alarma'),
		btnDetenerReloj = d.querySelector('#detener-reloj'),
		btnDetenerAlarma = d.querySelector('#detener-alarma'),
		alarma = d.createElement('audio'),
		temporizadorReloj,
		temporizadorAlarma;

	function saludar() {
		//alert('Se ha ejecutado la función saludar');
		/*
			No me jodas 0-5
			Buenos días 6-11
			Buenas tardes 12-18 
			Buenas noches 19-23
		*/

		//if ( hora < 6 ) {
		if ( hora <= 5 ) {
			saludo.innerHTML = '<h3>No me jodas!!!</h3>';
			hojaCSS.href = './css/duermete.css';
		} else if ( hora >= 6 && hora <= 11 ) {
			saludo.innerHTML = '<h3>Buenos Días</h3>';
			hojaCSS.href = './css/dia.css';
		} else if ( hora >= 12 && hora <= 18 ) {
			saludo.innerHTML = '<h3>Buenas Tardes</h3>';
			hojaCSS.href = './css/tarde.css';
		} else {
			saludo.innerHTML = '<h3>Buenas Noches</h3>';
			hojaCSS.href = './css/noche.css';
		}

		hojaCSS.rel = 'stylesheet';
		d.head.appendChild(hojaCSS);
	}

	w.onload = saludar;

	reloj.style.fontSize = '500%';
	reloj.innerHTML = fechaFormato;

	alarma.src = './audio/alarma.mp3';
	alarma.controls = true;
	d.body.appendChild(alarma);

	btnIniciarReloj.addEventListener('click', function () {
		temporizadorReloj = setInterval(function () {
			reloj.innerHTML = new Date().toLocaleTimeString();
		}, 1000);
	});

	btnIniciarAlarma.addEventListener('click', function () {
		temporizadorAlarma = setTimeout(function () {
			alarma.play();
		}, 3000);
	});

	btnDetenerReloj.addEventListener('click', function () {
		clearInterval(temporizadorReloj);
	});

	btnDetenerAlarma.addEventListener('click', function () {
		clearTimeout(temporizadorAlarma);
	});
})(document, window);