function mostrar() {
    var numero;
    var letra;
    var seguir;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var contadorPositivos = 0;
    var promedio;
    var acumuladorNeg = 0;
    var acumuladorPos = 0;
    var numeroBajo;
    var numeroAlto;
    var letraBaja;
    var letraAlta;

    do {
     
        numero = parseInt(prompt("Ingrese un numero del -100 al 100"));
        while (isNaN(numero) || numero > 100 || numero < -100) {
            numero = parseInt(prompt("Eso no es un numero. Ingrese un numero del -100 al 100"));
        }
        letra = prompt("Ingrese una letra");
        while (!isNaN(letra)) {
            letra = prompt("Letra invalida. Ingrese una letra");
        }
        //----------Pare e Impar----------------
        if (numero % 2 == 0) {
            contadorPares++;
        }
        else {
            contadorImpares++;
        }
        //-----------Signo----------------------
        if (numero == 0) {
            contadorCeros++;
        }
        else if (numero > 0) {
            contadorPositivos++;
            acumuladorPos = acumuladorPos + numero;
        }
        else {
            acumuladorNeg = acumuladorNeg + numero;
        }
        //---------Mayor y Menor-----------------
        if (flag == 0 || numero > numeroAlto) {
            numeroAlto = numero;
            letraAlta = letra;
        }
        if (flag == 0 || numero < numeroBajo) {
            numeroBajo = numero;
            letraBaja = letra;
            flag = 1;
        }

        seguir = prompt ("Si quiere continuar ingrese: si");

    } while (seguir == "s" );

    if (contadorPos != 0) {
        promedio = acumuladorPos / contadorPositivos;
    }

    document.write("Cantidad de numeros Pares : " + contadorPares + "</br>Cantidad de numeros Impares : " + contadorImpares
        + "</br>Cantidad de Ceros : " + contadorCeros + "</br>Promedio de los Positivos : " + promedio
        + "</br>Suma de los negativos : " + acumuladorNeg + "</br>Numero mas alto : " + numeroAlto + " Y la letra : "
        + letraAlta + "</br>Numero mas bajo : " + numeroBajo + " Y la letra : " + letraBaja);

}
//Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
//hasta que el usuario quiera e informar al terminar el ingreso por document.write:
//a) La cantidad de números pares.
//b) La cantidad de números impares.
//c) La cantidad de ceros.
//d) El promedio de todos los números positivos ingresados.
//e) La suma de todos los números negativos.
//f) El número y la letra del máximo y el mínimo.