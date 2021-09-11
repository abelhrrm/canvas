var boton = document.getElementById("botoncito");
var texto = document.getElementById("linecitas")
var color_linea = document.getElementById("colorcito_linecita");
var d = document.getElementById("cuadrito");
var lienzo = d.getContext("2d");

console.log(color_linea.value);
boton.addEventListener("click",dibujarPorClick);
dibujarLinea("black", 0,0, 0,300);
dibujarLinea("black", 300,300, 300,0);
dibujarLinea("black", 300,0, 0,0);
dibujarLinea("black", 0,300, 300,300);

function	dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle= color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarPorClick()
{
	var linea = parseInt(texto.value);
	var l = 0;
	var ancho = d.width;
	var espacio_pixel = ancho/linea;
	var empieza_cero, diagonal_palante, diagonal_patras;
	for (l=0; l < linea; l++)
	{
		empieza_cero_palante = espacio_pixel*l;
		diagonal_palante =	espacio_pixel*(l+1);
		diagonal_patras = ancho - espacio_pixel*(l+1);
		empieza_maximo_patras =ancho - espacio_pixel*l;
		dibujarLinea("blue", 0, empieza_cero_palante , diagonal_palante, ancho);
		dibujarLinea("red", empieza_cero_palante , 0, ancho, diagonal_palante);
		dibujarLinea("green", empieza_cero_palante , ancho, ancho, diagonal_patras);
		dibujarLinea("black", empieza_maximo_patras , 0 , 0, diagonal_palante);


	}
}
