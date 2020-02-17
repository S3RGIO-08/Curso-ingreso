function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLocaleLowerCase();

//Tambien puede ser while (!(sexo == f || sexo m))
while ( sexo != "f" && sexo != "m"){

sexo = prompt("Sexo no valido. O sos Hombre o Mujer bro.").toLowerCase();

}

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN