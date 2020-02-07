/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;

var aumento;

var RESULTADO;

var sueldofinal;

sueldo = parseInt(document.getElementById("sueldo").value);

aumento = 0.10;

RESULTADO = aumento * sueldo;

sueldofinal = sueldo + RESULTADO;

document.getElementById("resultado").value = sueldofinal;


}
