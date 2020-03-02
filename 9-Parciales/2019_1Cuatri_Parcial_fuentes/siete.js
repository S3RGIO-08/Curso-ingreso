function mostrar()
{
    var sexo;
    var altura;
    var seguir;
    var promedioAltura;
    var acumuladorAltura = 0;
    var contadorAltura = 0;
    var alturaMin;
    var sexoMin;
    var contadorMujeresAltas = 0;
    var flag = 0;

for (var i = 0; i < 5; i++) {

        altura = parseInt(prompt("Ingrese su altura (0 a 250 centimetros): "));
        while (altura < 0 || altura > 250 || isNaN(altura)) {
            altura = parseInt(prompt("altura invalida. Ingrese altura (0 a 250 centimetros): "));
        }
        sexo = prompt("Ingrese sexo (f-m): ");
        while (sexo != 'm' && sexo != 'f') {
            sexo = prompt("Sexo invalido. Ingrese sexo (f-m): ");
        }

        if (flag == 0 || altura < alturaMin){
            alturaMin = altura;
            sexoMin = sexo;
            flag = 1;
        }
        if (sexo == "m" && altura > 190){
            contadorMujeresAltas++;
        }
        acumuladorAltura = acumuladorAltura + altura;
        contadorAltura++;
    }// fin del for
    
    promedioAltura = acumuladorAltura / contadorAltura;

    alert("Promedio alturas : " + promedioAltura + "\nAltura mas baja : " + alturaMin + "\nY su sexo : " + sexoMin 
    + "\nCantidad de mujeres con altura mayor a 190cmm : " + contadorMujeresAltas );


}
    //Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250),
    // el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
    //a) El promedio de las alturas totales.
    //b) La altura más baja y el sexo de esa persona.
    //c) La cantidad de muheres que su altura supere los 190 centimetros.