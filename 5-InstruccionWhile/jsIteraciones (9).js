function mostrar() {

	var flag = 0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta;
	do {

		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Por favor ingrese un numero"))
		}

		if (flag == 0 || numero > maximo) {
			maximo = numero;
		}
		if ( flag == 0 || numero < minimo){
			minimo = numero

			flag = 1;
			
		}
		respuesta = prompt("Si quiere seguir ingresando numeros ponga : si ").toLowerCase();

	} while (respuesta == "si" || respuesta == "s")

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN