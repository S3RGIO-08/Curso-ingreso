/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);
    var resultado = precio1 + precio2 + precio3;

    alert("La suma es : " + resultado);

}
function Promedio() {
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);
    var resultado = (precio1 + precio2 + precio3) / 3;

    alert("El promedio es : " + resultado);

}
function PrecioFinal() {
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);
    var preciofinal = precio1 + precio2 + precio3;
    var IVA = .21;
    var resultado = preciofinal * IVA;

    var preciofinalConIva = preciofinal + resultado;

    alert("Su precio final es : $" + preciofinalConIva + " con IVA incluido.");
}