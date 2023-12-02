/* limpiador de cache  */

<?php

$fecha = new DateTime();

$funtesJavascript = array(
    "js/ajax.js",
    "js/teclado.js",
    "js/rectangulos.js",
    "js/mando.js",
    "js/buclePrincipal.js",
    "js/dimensiones.js",
    "js/inicio.js"
);

foreach ($funtesJavascript as $fuente) {
    echo '<script src="' . $fuente . '?' . $fecha -> getTimestamp() . '"></script>';
    echo nl2br("\n");
}

?>
