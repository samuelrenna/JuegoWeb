function Mapa (objetoJSON) {
    this.posicion = new Punto ( 0, 0 );
    this.posicionActualizada = new Punto( 0, 0 );

    this.anchoMedidoEnTiles = parseInt(objetoJSON.width);
    this.altoMedidoEnTiles = parseInt(objetoJSON.height);
    this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth);
    this.altoDeLosTiles = parseInt(objetoJSON.tileheight);

    this.paletasSprites = [];
    this.iniciarPaletasSprites(objetoJSON.tilesets);

    this.capasTiles = [];
    this.iniciarCapas(objetoJSON.layers);
}

Mapa.prototype.iniciarPaletasSprites = function(datosCapas) {
    for (let i = 0; i < datosCapas.length; i++) {
        this.paletasSprites.push(new PaletasSprites(datosCapas[i]));
    }
}


Mapa.prototype.iniciarCapas =  function(datosCapas) {
    for (let i = 0; i < datosCapas.length; i++) {
            switch(datosCapas[i].type){
                case "tilelayer":
                    this.capasTiles.push(new CapaMapaTiles(datosCapas[i], i, this.anchoDeLosTiles, this.altoDeLosTiles, this.paletasSprites ));
                    break;
                case "objectgroup":
                    break;
            }
        }
    }

    Mapa.prototype.iniciarRejilla = function() {
        const anchoMapaEnPixeles = this.anchoMedidoEnTiles * this.anchoDeLosTiles;
        const altoMapaEnPixeles = this.altoMedidoEnTiles * this.altoDeLosTiles;

        const html = "";

        for (ct = 0; ct < this.capasTiles.length; ct++) {
            for (t = 0; t < this.capasTiles[ct].tiles.length; t++){
                if(this.capasTiles[ct].tiles[t] === null) {
                    continue;// en este doble ciclo for es para rellenar la pantalla de los tiles pero en la condicion if es por si en una capa no hay tile seguimos con el siguiente tile
                }
                const tileActual= this.capasTiles[ct].tiles[t];
                html += tileActual.html;
            }
        }
        document.getElementById("mapa").innerHTML = html;

        for (ct = 0; ct < this.capasTiles.length; ct++) {
            for (t = 0; t < this.capasTiles[ct].tiles.length; t++){
                if(this.capasTiles[ct].tiles[t] === null) {
                    continue;// en este doble ciclo for es para rellenar la pantalla de los tiles pero en la condicion if es por si en una capa no hay tile seguimos con el siguiente tile
                }
                const tileActual= this.capasTiles[ct].tiles[t];
                tileActual.aplicarEstilos();

            }
        }
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    Mapa.prototype.actualizar = function() {

    };

    Mapa.prototype.dibujar = function () {

    };
/*
    function Mapa(objetoJSON) {
        this.posicion = new Punto(0, 0);
        this.posicionActualizada = new Punto(0, 0);
    
        this.anchoMedidoEnTiles = parseInt(objetoJSON.width);
        this.altoMedidoEnTiles = parseInt(objetoJSON.height); // Corregido el nombre del atributo
        this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth);
        this.altoDeLosTiles = parseInt(objetoJSON.tileheight);
    
        this.paletasSprites = [];
        this.iniciarPaletasSprites(objetoJSON.tilesets);
    
        this.capasTiles = [];
        this.iniciarCapas(objetoJSON.layers);
    }
    
    Mapa.prototype.iniciarPaletasSprites = function (datosCapas) {
        for (let i = 0; i < datosCapas.length; i++) {
            this.paletasSprites.push(new PaletasSprites(datosCapas[i])); // Corregido el nombre de la clase
        }
    }
    
    Mapa.prototype.iniciarCapas = function (datosCapas) {
        for (let i = 0; i < datosCapas.length; i++) {
            switch (datosCapas[i].type) {
                case "tilelayer":
                    this.capasTiles.push(new CapaMapaTiles(datosCapas[i], i, this.anchoDeLosTiles, this.altoDeLosTiles, this.paletasSprites));
                    break;
                case "objectgroup":
                    break;
            }
        }
    }
    
    Mapa.prototype.iniciarRejilla = function () {
        const anchoMapaEnPixeles = this.anchoMedidoEnTiles * this.anchoDeLosTiles;
        const altoMapaEnPixeles = this.altoMedidoEnTiles * this.altoDeLosTiles;
    
        let html = "";
    
        for (let ct = 0; ct < this.capasTiles.length; ct++) {
            for (let t = 0; t < this.capasTiles[ct].tiles.length; t++) {
                if (this.capasTiles[ct].tiles[t] === null) {
                    continue;
                }
                const tileActual = this.capasTiles[ct].tiles[t];
                html += tileActual.html;
            }
        }
        document.getElementById("mapa").innerHTML = html;
    
        for (let ct = 0; ct < this.capasTiles.length; ct++) {
            for (let t = 0; t < this.capasTiles[ct].tiles.length; t++) {
                if (this.capasTiles[ct].tiles[t] === null) {
                    continue;
                }
                const tileActual = this.capasTiles[ct].tiles[t];
                tileActual.aplicarEstilos();
            }
        }
        document.body.style.overflow = "hidden"; // Cambiado de getElementsByTagName a body.style.overflow
    }
    
    Mapa.prototype.actualizar = function () {
        // Implementar lógica de actualización si es necesario
    }
    
    Mapa.prototype.dibujar = function () {
        // Implementar lógica de dibujo si es necesario
    }
    */