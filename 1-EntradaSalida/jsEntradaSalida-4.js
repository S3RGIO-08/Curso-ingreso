
/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombres;

	nombre = prompt("Ingrese su nombre por favor");

    document.getElementById("elNombre").value = nombre;

}

