/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo;

    var descuento;
    
    var RESULTADO;
    
    var sueldofinal;

    sueldo = parseInt(document.getElementById("importe").value);
    
    descuento = 0.25;
    
    RESULTADO = sueldo * descuento;
    
    sueldofinal = sueldo - RESULTADO;

    document.getElementById("resultado").value = sueldofinal;
        
}
