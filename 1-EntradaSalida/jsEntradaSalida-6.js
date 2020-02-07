/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var Uno;

var Dos;

var resultado;

Uno = document.getElementById("numeroUno").value ;
Uno = parseInt(Uno)

Dos = document.getElementById("numeroDos").value ;
Dos = parseInt(Dos)

resultado = (Uno + Dos);

alert("La suma es " + resultado);


}

