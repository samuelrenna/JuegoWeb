function Sprite(ruta, idSobreZero, posicionEnHoja ) {
    const elementosRuta = ruta.split("/");
    this.rutaHojaOrigen = "img/" + elementosRuta[elementosRuta.lenght-1];
    this.idSobreZero = idSobreZero ;
    this.posicionEnHoja = posicionEnHoja ;
    }