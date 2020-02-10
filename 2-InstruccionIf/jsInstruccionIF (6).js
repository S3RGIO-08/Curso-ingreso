function mostrar()
{
//tomo la edad  


    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if (edad <= 12 ){
    
        alert("Usted es Menor de Edad");
        }
        else if (edad > 12 && edad < 18){
    
        alert("Usted es Adolescente")
        }
        else {
        alert ("Usted es Mayor de Edad");}


}//FIN DE LA FUNCIÓN