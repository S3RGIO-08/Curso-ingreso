/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un porcDesc del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un porcDesc del 40 % y si es de otra marca el porcDesc es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un porcDesc del 25 % y si es de otra marca el porcDesc es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el porcDesc es del 15%, si es  “FelipeLamparas” se hace un porcDesc del 10 % y si es de otra marca un 5%.
E.	Si el importe final con porcDesc suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var precio = 35;

    var cantidad = parseInt(document.getElementById("Cantidad").value);
    var porcDesc;
    var descuento;
    var marca = document.getElementById("Marca").value;
    var precioConDescuento;
    var importefinal;
    var IIBB;

    switch (cantidad) {

        case 1:
        case 2:
            porcDesc = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                porcDesc = 15;

            }
            else if (marca == "FelipeLamparas") {
                porcDesc = 10;
            }
            else {
                porcDesc = 05;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                porcDesc = 25;
            else {
                porcDesc = 20;
            }
            break;

        case 5:
            if (marca == "ArgentinaLuz") {
                porcDesc = 40;
            }
            else {
                porcDesc = 30;
            }
            break;

        default:
            porcDesc = 50;
    }
    // saco el descuento
    descuento = precio * porcDesc / 100;
    // saco el precio con desc.
    precioConDescuento = precio - descuento;
    // muestro el precio con desc.
    document.getElementById("precioDescuento").value = precioConDescuento;

    importefinal = cantidad * precioConDescuento;

    if (importefinal > 120) {

        IIBB = importefinal * 10 / 100;

        importefinal = importefinal + IIBB;

        alert("El importe final es $ " + importefinal + " \n Usted pago $ " + IIBB + " de IIBB");

    }

    else {

        alert("El importe final es $ " + importefinal);

    }

















}
