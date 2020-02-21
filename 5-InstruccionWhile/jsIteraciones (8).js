function mostrar() {
	var flag = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta;
	do {

		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Por favor ingrese un numero"))
		}
		if (numero >= 0) {

			positivo = numero + positivo;
		}
		else {

			negativo = numero * negativo;

			flag = 1;
		}

		respuesta = prompt("Si quiere seguir ingresando numeros ponga : si ").toLowerCase();

	} while (respuesta == "si" || respuesta == "s")

	if (flag == 0) {

		negativo = 0;

	}



	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN