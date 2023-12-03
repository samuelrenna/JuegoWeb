function CapaMapaTiles (datosCapa, indiceZ, anchoDeLosTiles, altoDeLosTiles, paletaSprites){

    this.anchoEnTiles = parseInt(datosCapa.width);
    this.altoEnTiles = parseInt(datosCapa.height);
    this.x = parseInt(datosCapa.x);
    this.y = parseInt(datosCapa.y);
    this.z = indiceZ;
    this.tiles = [];

    for (y=0; y < this.altoEnTiles; y++){
        for (x=0; x < this.anchoEnTiles; x++) {
            const idSpriteActualSobreUno = datosCapa.data[x + y * this.anchoEnTiles];
            if (idSpriteActualSobreUno === 0) {
                this.tiles.push(null);
            } else {
                const spriteActual = this.encontrarSpriteEnPaletaPorId(idSpriteActualSobreUno - 1, paletasSprites);

                this.tiles.push (new Tile(x, y, indiceZ, anchoDeLosTiles, altoDeLosTiles, spriteActual));
            }
        }
    }
}
CapaMapaTiles.prototype.encontrarSpriteEnPaletaPorId = function (idSpriteSobreZero, paletasSprites) {
for (s = 0 ; s < paletasSprites.lenght; s++){
    if (idSpriteSobreZero >= paletasSprites[s].primerSpriteSobreUno - 1 && idSpriteSobreZero < paletasSprites[s].totalSprites + paletasSprites[s].primerSpriteSobreUno + 1){
        return paletasSprites[s].sprite[Math.abs(paletasSprites[s].primerSpriteSobreUno - 1 - idSpriteSobreZero)];//math.abs obtener absoluto de un numero ayuda a impedir numero negativos
        }
    }
    throw "EL ID SOBRE ZERO " + idSpriteSobreZero + " DEL SPRITES NO EXISTE EN NINGUNA PALETA";
}