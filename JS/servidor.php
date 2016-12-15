<?php
echo '<h1>Hola Mundo con PHP</h1>';
echo '<p>Como AJAX es asíncrono, me permite consultar el servidor sin necesidad de recargar el navegador</p>';
echo 'irfbiergfuerifbuierfh';
echo 'irfbiergfuerifbuierfh';
echo '<br>';

for ($i=1; $i < 7; $i++) { 
	echo "<h$i>ENCABEZADO de tipo $i</h$i>"; //comilla doble si interpola variables
	echo '$i'; //comilla sencilla no interpola variables
	echo '<br>';
}