<?php
//limpiador de cache


$fecha = new DateTime(); //para tomar momento temporal y nos ayudara a crear parametros para mantener los acrchivos siempre cargados como nuevos

$funtesJavascript = array(
    "js/Rectangulos.js",
    "js/Sprite.js",
    "js/Tile.js",
    "js/CapaMapaTiles.js",
    "js/PaletaSprite.js",
    "js/listadoEstados.js",
    "js/ajax.js",
    "js/EstadoMapamundi.js",
    "js/maquinaEstados.js",
    "js/Punto.js",
    "js/Mapa.js",
    "js/teclado.js",
    "js/mando.js",
    "js/dimensiones.js",
    "js/buclePrincipal.js",
    "js/inicio.js"

);

foreach ($funtesJavascript as $fuente) {
    echo '<script src="' . $fuente . '?' . $fecha -> getTimestamp() . '"></script>';
    echo nl2br("\n");
}

?>
