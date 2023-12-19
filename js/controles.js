    const controles = {
        arriba : false,
        abajo: false,
        izquierda: false,
        derecha: false,
    actualizar: function (){
        if (teclado.teclaPulsada(controlTeclado.arriba)) {
            controles.arriba = true;
            console.log("arriba");
        }
        if (teclado.teclaPulsada(controlTeclado.abajo)) {
            controles.abajo = true;
            console.log("abajo");
        }
        if (teclado.teclaPulsada(controlTeclado.izquierda)) {
            controles.izquierda = true;
            console.log("izquierda");
        }
        if (teclado.teclaPulsada(controlTeclado.derecha)) {
            controles.derecha = true;
            console.log("derecha");
        }
    },
    reiniciar: function() {
        controles.arriba = false;
        controles.abajo = false;
        controles.izquierda = false;
        controles.derecha = false;
        
    }
};