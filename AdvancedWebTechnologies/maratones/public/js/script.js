'use strict';

(function (d, w) {
  var tecnologia = 'Babel',
      hola = 'Hola Mundo con ' + tecnologia;

  d.addEventListener('DOMContentLoaded', function () {
    var saludo = document.createElement('h2');
    saludo.textContent = hola;
    d.body.appendChild(saludo);
    //alert(hola)
  });
})(document, window);