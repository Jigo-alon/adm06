(function (d, w) {
	'use strict';

	var validateInputs = d.querySelectorAll('.validate'),
		expRegName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
		expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	/*console.log(
		d.forms,
		d.forms[0],
		d.forms[1]
	);*/
	function validateMessage( expression, input ) {
		if ( expression ) {
			input.nextElementSibling.innerHTML = input.title + ' no es válido';
			input.nextElementSibling.classList.remove('fade-out');
			input.nextElementSibling.classList.add('fade-in');
			input.classList.remove('valid');
			input.classList.add('invalid');
			input.focus();
		} else {
			input.classList.remove('invalid');
			input.classList.add('valid');
			input.nextElementSibling.classList.remove('fade-in');
			input.nextElementSibling.classList.add('fade-out');
		}
	}

	function validateForm(e) {
		console.log(e);
		var input = e.target;

		switch ( input.name ) {
			case 'nombre': {
				validateMessage( !expRegName.exec( e.target.value ), e.target );
				break;
			}

			case 'email': {
				validateMessage( !expRegEmail.exec( e.target.value ), e.target );
				break;
			}

			default: {
				validateMessage( !e.target.value, e.target );
				break;
			}
		}
	}

	function sendForm(e) {
		var form = e.target,
			preload = form.querySelector('.preload'),
			message = form.querySelector('.message');

		e.preventDefault();

		console.log(e);

		preload.classList.remove('hidden');

		setTimeout(function () {
			preload.classList.add('hidden');
			message.classList.remove('hidden');	
			
			setTimeout(function () {
				form.reset();
				message.classList.add('hidden');
			}, 3000);	
		}, 3000);
	}

	for (var n = 0; n < d.forms.length; n++) {
		d.forms[n].onsubmit = sendForm;
	}

	for (var n = 0; n < validateInputs.length; n++) {
		validateInputs[n].onblur = validateForm;
	};
})(document, window);