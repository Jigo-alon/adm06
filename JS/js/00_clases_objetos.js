//comentario de una linea

/*
	Comentario de
	múltiples
	líneas
*/

//función anónima auto ejecutable
(function (d, w, n) {
	//activar modo estricto de JS para compatibilidades futuras
	'use strict';

	//alert(d);
	//console.log(d, w, n);

	//Objeto literal
	var perro = {
		nombre : 'kEnAi',
		edad : 4,
		raza : 'Criollo',
		genero : 'Macho',
		esterilizado : true,
		ladrar : function () {
			alert('guau guau!!!');
		},
		comer : function (comida) {
			//concatenación
			alert(this.nombre + ' come ' + comida);
		},
		aparecer : function (imagen) {
			d.write('<img src="' + imagen + '">');
		}
	};

	console.log(
		perro,
		perro.nombre,
		perro.edad,
		perro.raza,
		perro.genero,
		perro.esterilizado
	);

	perro.ladrar();
	perro.comer('croquetas');
	perro.comer('tacos');
	perro.aparecer('https://camo.githubusercontent.com/b77a181ad750ac763cf3effac9857e6373000b41/687474703a2f2f626578746c616e2e636f6d2f696d672f706172612d637572736f732f6b656e61692e6a7067');

	//Prototipo Object
	var perro2 = new Object();
	perro2.nombre = 'Firulais';
	perro2.edad = 2;
	perro2.raza = 'Dálmata';
	perro2.genero = 'Macho';
	perro2.esterilizado = false;
	perro2.ladrar = function () {
		alert('guau guau!!!');
	};
	perro2.comer = function (comida) {
		alert(this.nombre + ' come ' + comida);
	};
	perro2.aparecer = function (imagen) {
		d.write('<img src="' + imagen +'">');
	};

	console.log(
		perro2,
		perro2.nombre,
		perro2.edad,
		perro2.raza,
		perro2.genero,
		perro2.esterilizado
	);

	perro2.ladrar();
	perro2.comer('zapatos');
	perro2.aparecer('https://s-media-cache-ak0.pinimg.com/736x/2e/5a/55/2e5a55c1010a99160a1acede7b05691b.jpg');

	//Función Constructora
	function Perro(nombre, edad, raza, genero, esterilizado) {
		//atributos
		this.nombre = nombre;
		this.edad = edad;
		this.raza = raza;
		this.genero = genero;
		this.esterilizado = esterilizado;

		//métodos
		this.ladrar = function () {
			alert('guau guau!!!');
		}

		this.comer = function (comida) {
			alert(this.nombre + ' come ' + comida);
		}

		this.aparecer = function (imagen) {
			d.write('<img src="' + imagen +'">');
		}
	}

	var perro3 = new Perro('Lazy', 10, 'Gran Danés', 'Macho', false),
		perro3_1 = new Perro('Lola', 7, 'Border Collie', 'Hembra', true);

	console.log(
		perro3,
		perro3.nombre,
		perro3_1,
		perro3_1.nombre
	);

	perro3.ladrar();
	perro3.comer('tacos');
	perro3.aparecer('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dogge_Odin.jpg/245px-Dogge_Odin.jpg');
	perro3_1.ladrar();
	perro3_1.comer('croquetas');
	perro3_1.aparecer('http://cdn1-www.dogtime.com/assets/uploads/gallery/border-collie-dog-breed-pictures/1-facethreequarters.jpg');

	//Clases (apartir de ES6)
	class Dog {
		//El constructor es un método especial que se ejecuta en el momento de instanciar la clase
		constructor(nombre, edad, raza, genero, esterilizado) {
			this.nombre = nombre;
			this.edad = edad;
			this.raza = raza;
			this.genero = genero;
			this.esterilizado = esterilizado;
		}

		ladrar() {
			alert('guau guau!!!');
		}

		comer(comida) {
			alert(this.nombre + ' come ' + comida);
		}

		aparecer(imagen) {
			d.write('<img src="' + imagen +'">');
		}
	}

	var perro4 = new Dog('Cachito', 3, 'Chihuahua', 'Macho', false);

	console.log(
		perro4.raza,
		perro4
	);

	perro4.ladrar();
	perro4.comer('huesos');
	perro4.aparecer('http://files.123inventatuweb.com/acens191453/image/chihuahua-corralet.jpg');

})(document, window, navigator);

//Scope o alcance de las variables
//console.log(d, w, n);
//console.log(document, window, navigator);
