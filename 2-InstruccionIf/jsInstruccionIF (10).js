function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero ;
	var maximo = 10;
	var minimo = 1;

	numero = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo );
if (numero > 8){
	alert("EXELENTE. " + "Nota: "+ numero);
}
else if (numero > 3 ) {
	alert("APROBÓ. " + "Nota: "+ numero);

}
else {
alert("Vamos, la proxima se puede. " + "Nota: "+ numero );
}


}//FIN DE LA FUNCIÓN