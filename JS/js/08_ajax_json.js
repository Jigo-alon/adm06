(function (d, w, j) {
	'use strict';

	var ajax = new XMLHttpRequest(),
		movies = d.querySelector('#movies'),
		moviesInfo,
		moviesTemplate = '';

		w.onload = function () {
			ajax.open('GET', './js/movies.json', true);

			ajax.onload = function () {
				if ( ajax.status >= 200 && ajax.status < 400 ) {

					console.log(
						ajax,
						j.stringify( ajax.responseText ),
						j.parse( ajax.responseText )
					);

					moviesInfo = j.parse( ajax.responseText );

					//template string - ES6 o ES2015
					//interpolación de variable `Hola ${nombreVariable}`
					/*
					moviesTemplate += `
						<article>
							<h2>${moviesInfo.title}</h2>
							<p><b>${moviesInfo.year}</b></p>
							<p><i>${moviesInfo.genres}</i></p>
							<img src="${moviesInfo.poster}">
						</article>
					`;
					*/

					moviesInfo['movies'].forEach(function (movie) {
						moviesTemplate += `
							<article>
								<h2>${movie.title}</h2>
								<p><b>${movie.year}</b></p>
								<p><i>${movie.genres}</i></p>
								<img src="${movie.poster}">
							</article>
						`;	
					});

				} else {
					
					moviesTemplate += '<h3>El servidor NO responde. Error N°' + ajax.status + ': <mark>' + ajax.statusText + '</mark></h3>';

				}

				movies.innerHTML = moviesTemplate;
			}

			ajax.send();
		}
})(document, window, JSON);