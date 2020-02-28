function mostrar() {
    var numero;
    var contPares = 0;

    numero = parseInt(prompt("Ingrese un numero."));

    while (isNaN(numero)) {
        numero = parseInt(prompt("Eso no es un numero. Ingrese un numero."));
    }

    for (var i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            console.log(i);
            contPares++;
        }
        
    }
    console.log("Pares encontrados : " + contPares);

}//FIN DE LA FUNCIÓN