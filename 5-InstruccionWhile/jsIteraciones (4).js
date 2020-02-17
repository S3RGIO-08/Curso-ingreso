function mostrar()
{

	var numero = parseInt(prompt("Ingrese un número entre 0 y 9."));

while( numero < 0 || numero > 9 || isNaN(numero)){

	numero = parseInt(prompt("Numero invalido. Por favor vuelva a intentar."));
}

document.getElementById("Numero").value = numero;













}//FIN DE LA FUNCIÓN