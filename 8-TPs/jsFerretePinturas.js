/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {

    var fahre = parseInt(document.getElementById("Temperatura").value);
    var grados = (fahre - 32) * 5 / 9;

    alert(fahre + " Fahrenheit son " + grados + " centigrados");

}

function CentigradosFahrenheit() {

    var grados = parseInt(document.getElementById("Temperatura").value);
    var fahre = (grados * 9 / 5) + 32;

    alert(grados + " centigrados son " + fahre + " Fahrenheit");

}
