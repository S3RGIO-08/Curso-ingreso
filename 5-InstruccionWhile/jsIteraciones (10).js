function mostrar() {
	var numero;
	var positivo = 0;
	var negativo = 0;
	var cantPosit = 0;
	var cantNegat = 0;
	var cantCeros = 0;
	var respuesta;
	var cantPares = 0;
	var promedioPositivo = 0;
	var promedioNegativos = 0;
	var diferenciaNegPos;

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

		if (numero / 2 == 0){
			cantPares ++;

		}


	} while (respuesta == "si" || respuesta == "s")

	if (cantNegat != 0){
	promedioNegativos = negativo / cantNegat;
	}
	
	if (cantPosit != 0) {
	promedioPositivo = positivo / cantPosit;
	}
	
	diferenciaNegPos = cantPosit - cantNegat;

	document.write("Cantidad positivos : " + cantPosit + "<br/> Suma de positivos : " + positivo + " <br/> Promedio de los positivos : " + promedioPositivo + " <br/> Cantidad de negativos : " + cantNegat + " <br/> Suma de negativos : " + negativo + " <br/> Promedio de los negativos : " + promedioNegativos + " <br/> Cantidad de ceros : " + cantCeros + " <br/> Cantidad de numeros pares : " + cantPares + " <br/> Diferencia de Positivos y Negativos : " +diferenciaNegPos);

}//FIN DE LA FUNCIÓN