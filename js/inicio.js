//ctrl + f5 limpia cache
//aca ejecutaremos todo 
//namespace espacio de nombres


document.addEventListener("DOMContentLoaded", function(){
    inicio.iniciarjuego();
},false );

const inicio = {
    iniciarjuego: function(){
        console.log("Juego iniciado");
        dimensiones.iniciar();
        let r = new Rectangulo(10, 10, 100, 100);
        buclePrincipal.iterar();
    }
};
