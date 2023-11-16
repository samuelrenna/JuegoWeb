// responsive funcion para obtener dimensiones de la ventana
//namespace espacio de nombres

let dimensiones = {
    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,

    iniciar: function() {
        window.addEventListener("resize", function(eventoTamañoPantalla) {
            dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            console.log("Ancho : " + dimensiones.ancho + " Alto: " + dimensiones.alto);
        });
    }
};

