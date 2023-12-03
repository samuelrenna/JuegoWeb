function PaletaSprites (datosSprites) {

    this.rutaImagen = datosSprites.image;

    this.anchoImagen = parseInt ( datosSprites.imagewidth );
    this.altoImagen = parseInt ( datosSprites.imageheight );

    this.anchoSprites = parseInt ( datosSprites.tilewidth );
    this.altoSprites = parseInt ( datosSprites.tileheight );

    this.primerSpriteSobreUno = parseInt(datosSprites.firstgid);

    this.anchoImagenMedidoenSprites = this.anchoImagen / this.anchoSprites;
    this.altoImagenMedidoenSprites = this.altoImagen / this.altoSprites;
    this.totalSprites = this.anchoImagenMedidoenSprites * this.altoImagenMedidoenSprites;

    this.sprites = [];
    
    for ( s=0; s < this.totalSprites; s++ ){
        const idActualSobreZero = this.primerSpriteSobreUno - 1 + s;
        this.sprites.push(new Sprites(this.rutaImagen, idActualSobreZero, this.obtenerPosicionDesdeIdSprite(idActualSobreZero)));
    }
}

    PaletaSprites.prototype.obtenerPosicionDesdeIdSprite = function(idSpriteSobreZero){
    const y = Math.floor(idSpriteSobreSero / this.anchoImagenMedidoenSprites);
    const x = idSprite % this.anchoImagenMedidoenSprites; // % nos devuelve el resto de la divicion para saber la posicion X

        return new Punto ( x * this.anchoSprites, y * this.altoSprites );
}