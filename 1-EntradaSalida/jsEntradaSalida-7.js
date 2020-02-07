/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var Uno;

    var Dos; 

    var resultado;

    Uno = parseInt(document.getElementById("numeroUno").value);

    Dos = parseInt(document.getElementById("numeroDos").value);

    resultado = (Uno + Dos)

   alert("La Suma es " + resultado);

}

function restar()
{
    var Uno;

    var Dos; 

    var resultado;

    Uno = parseInt(document.getElementById("numeroUno").value);

    Dos = parseInt(document.getElementById("numeroDos").value);

    resultado = (Uno - Dos)

   alert("La Resta es " + resultado);
}

function multiplicar()
{ 
    var Uno;

    var Dos; 

    var resultado;

    Uno = parseInt(document.getElementById("numeroUno").value);

    Dos = parseInt(document.getElementById("numeroDos").value);

    resultado = (Uno * Dos)

   alert("La Multiplicacíon es " + resultado);
}

function dividir()
{
    var Uno;

    var Dos; 

    var resultado;

    Uno = parseInt(document.getElementById("numeroUno").value);

    Dos = parseInt(document.getElementById("numeroDos").value);

    resultado = (Uno / Dos)

   alert("La Divisíon es " + resultado);
}
