/* limpiador de cache  */

<?php

$fecha = new DateTime(); //para tomar momento temporal y nos ayudara a crear parametros para mantener los acrchivos siempre cargados como nuevos

$funtesJavascript = array(
    "js/Rectangulos.js",
    "js/Punto.js",
    "js/Sprite.js",
    "js/PaletaSprites.js",
    "js/Tile.js",
    "js/ajax.js",
    "js/teclado.js",
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
