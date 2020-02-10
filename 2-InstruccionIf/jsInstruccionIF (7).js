function mostrar()
{
//tomo la edad  

    var edad;
    var estado
    edad = parseInt(document.getElementById("edad").value);
    
    estado = document.getElementById("estadoCivil").value ;

    if (edad < 17 && estado == "Casado" || estado == "Divorsiado"){
    alert("Es muy pequeño para NO ser soltero");

    }


    




}//FIN DE LA FUNCIÓN