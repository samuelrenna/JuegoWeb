const maquinaEstados = {
    estadoActual :  null,
    iniciar : function() {
        // Cambié "maquinaEstados" por "this" para hacer referencia al objeto actual
        this.cambiarEstado(listadoEstados.MAPAMUNDI);
        //maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
    },
    cambiarEstado: function (nuevoEstado) {
        switch (nuevoEstado) {
            case listadoEstados.CARGANDO:
                break;
            case listadoEstados.MENU_INICIAL:
                break;
            case listadoEstados.MAPAMUNDI:
                    this.estadoActual = new EstadoMapamundi(listadoEstados.MAPAMUNDI);
                    //maquinaEstados.estadoActual = new EstadoMapamundi(listadoEstados.MAPAMUNDI);
                break;
            case listadoEstados.NIVEL:
                break;
        }
    },
    actualizar: function() {
        this.estadoActual.actualizar();
        //maquinaEstados.estadoActual.actualizar();

    },
    dibujar: function() {
        this.estadoActual.dibujar();
        //maquinaEstados.estadoActual.dibujar();

    }

}

