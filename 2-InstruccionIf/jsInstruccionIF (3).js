function mostrar()
{
//Creo la var edad  

var edad;

// Pongo el valor del Id en edad + lo combierto en un num entero

edad = parseInt(document.getElementById("edad").value);

// Pongo las condiciones para los alert

if (edad >= 18) {
    alert ("Usted es mayor de edad");
}

else {
    alert ("Usted es menor de edad");
}



}//FIN DE LA FUNCIÓN