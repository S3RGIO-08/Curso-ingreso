function mostrar() {

	var positivo = 0;
	var negativo = 0;
	var ceros = 0;
	var cantPosit = 0;
	var cantNegat = 0;
	var cantCeros;
	var respuesta;
	var cantPares;
	var promedioPositivo;
	var promedioNegativos;

	do {

		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Por favor ingrese un numero"))
		}

		if (numero > 0) {
			positivo = positivo + numero;
			cantPosit++;
		}
		else if (numero < 0) {
			negativo = negativo + numero;
			cantNegat++;
		}
		else {
			cantCeros++;
		}
		respuesta = prompt("Si quiere seguir ingresando numeros ponga : si ").toLowerCase();

	} while (respuesta == "si" || respuesta == "s")




}//FIN DE LA FUNCIÓN