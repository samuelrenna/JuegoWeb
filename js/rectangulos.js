//generador de rectangulos
//funcion constructora para rectangulos


function Rectangulo(x, y, ancho, alto){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.id = "r" + x + y; //crear los id de nuestros rectangulos ejemplo (r x=11 y=23) para quedar (r1123)
    this.insertarDOM()
}
//introducir datos en html
Rectangulo.prototype.insertarDOM = function(){
    let div = '<div id="'  + this.id +  '"></div>' ;
    let html = document.getElementById("juego").innerHTML ;
    let color ='#' + Math.floor(Math.random() *16777215 ).toString(16); //obtener numeros de hexadecimal aleatorios para colores en css
    document.getElementById("juego").innerHTML = html + div ;
    document.getElementById(this.id).style.position = "absolute";
    document.getElementById(this.id).style.left = this.x + "px";
    document.getElementById(this.id).style.top = this.y + "px";
    document.getElementById(this.id).style.width = this.ancho + "px";
    document.getElementById(this.id).style.height = this.alto + "px";
    document.getElementById(this.id).style.background = color;
}