//ctrl + f5 limpia cache
//aca ejecutaremos todo 
//namespace espacio de nombres
// aca va todo lo que vamos a iniciar o sea para que funcione


document.addEventListener("DOMContentLoaded", function(){
    inicio.iniciarjuego();
},false );

const inicio = {
    iniciarjuego: function(){
        console.log("Juego iniciado");
        alert ("podras ver los FPS y APS en la consola");
        alert ("si clikeas en la parte de los rectangulos de colores y usas el teclado podras ver en la consola lo que pulsas");
        alert ("podras ver los rectangulos de colores totalmente aleatorios que simulan lo que pasara con el mapa");
        teclado.iniciar();
        dimensiones.iniciar();
        inicio.recargaTiles();
        buclePrincipal.iterar();
    },
    // en este for anidado es mejor usar let ya que con const nos rompio el codigo pero solo en la declaracion de X Y
    recargaTiles: function() {
        document.getElementById("juego").innerHTML = "";
        for ( let y = 0; y < dimensiones.obtenerTilesVerticales(); y++) {
            for( let x = 0; x < dimensiones.obtenerTilesHorizontales(); x++) {
                const r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles);
            }
        }

    }
};
