function mostrar() {
	var contador = 0;
	var suma = 0;
	var respuesta;
	var promedio;
	var numero;
	do {

		numero = parseInt(prompt("Ingrese un numero"));
		while ( isNaN (numero)){
			numero = parseInt(prompt("Eso no es un numero. Por favor ingrese un numero"))
		}
		contador++;

		suma = numero + suma;

		respuesta = prompt("Si quiere seguir ingresando numeros ponga : si ").toLowerCase();

	} while (respuesta == "si");

	promedio = suma / contador;


	document.getElementById('suma').value = suma;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN