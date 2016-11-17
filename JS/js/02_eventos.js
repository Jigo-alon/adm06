
//una función que nanejadora de evento, sólo puede recibir como parámetro el evento que se ejecuta
function rojo(evento) {
	document.body.style.backgroundColor = 'red';
	document.body.style.color = 'white';
	console.log(evento);
}

(function (d) {

})(document);