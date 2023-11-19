//ctrl + f5 limpia cache
//aca ejecutaremos todo 
//namespace espacio de nombres


document.addEventListener("DOMContentLoaded", function(){
    inicio.iniciarjuego();
},false );

const inicio = {
    iniciarjuego: function(){
        console.log("Juego iniciado");
        teclado.iniciar();
        dimensiones.iniciar();
        inicio.recargaTiles();
        buclePrincipal.iterar();
    },
    recargaTiles: function() {
        document.getElementById("juego").innerHTML = "";
        for ( let y = 0; y < dimensiones.obtenerTilesVerticales(); y++) {
            for( let x = 0; x < dimensiones.obtenerTilesHorizontales(); x++) {
                const r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles);
            }
        }

    }
};
