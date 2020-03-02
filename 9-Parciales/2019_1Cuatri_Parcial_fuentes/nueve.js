function mostrar() {

    var pais;
    var habitantes;
    var temperatura;
    var seguir;
    var temperaturasPares = 0;
    var paisMenosHabitantes;
    var cantidadPaisesMasGrados = 0;
    var promedioDeHabitantes;
    var acumuladorDeHabitantes = 0;
    var contadorDeHabitantes = 0;
    var temperaturaMinima;
    var paisMinimo;
    var flag = 0;


    do {
        //---------- Pido y valido-----------
        var pais = prompt("Ingrese el nombre de su país : ").toLowerCase();
        while (!(pais >= "a" && pais <= "z")) {
            pais = prompt("País invalido. Ingrese el nombre de su país : ").toLowerCase();
        }
        var habitantes = parseInt(prompt("Ingrese la cantidad de habitantes de 1 a 7000 (en Millones) : "));
        while (isNaN(habitantes) || habitantes < 1 || habitantes > 7000) {
            habitantes = parseInt(prompt("Cantidad de habitantes invalida. Ingrese la cantidad de habitantes de 1 a 7000 (en Millones) : "));
        }
        var temperatura = parseInt(prompt("Ingrese la temperatura del país (-50 a 50) : "));
        while (isNaN(temperatura) || temperatura < -50 || temperatura > 50) {
            temperatura = parseInt(prompt("Temperatura invalida. Ingrese la temperatura del país (-50 a 50) : "));
        }
        //------Analiso datos---------

        //------Temperaturas pares-------

        if (temperatura % 2 == 0) {
            temperaturasPares++;
        }
        //------PaisMenosHabitado y TemperaturaMinima--------
        if (flag == 0 || habitantes < paisMenosHabitantes) {
            paisMenosHabitantes = pais;
        }
        if (flag == 0 || temperatura < temperaturaMinima) {
            temperaturaMinima = temperatura;
            paisMinimo = pais;
            flag = 1;
        }
        //--------PaisesConMasDe40------
        if (temperatura > 40) {
            cantidadPaisesMasGrados++;
        }
        //-----CuentoYSumoParaElPromedio-----
        contadorDeHabitantes++;
        acumuladorDeHabitantes = acumuladorDeHabitantes + habitantes;

        seguir = prompt("Desea continuar?");
    } while (seguir == "s" || seguir == "si");
    //--------SacoPromedio--------
    if (promedioDeHabitantes != 0) {
        promedioDeHabitantes = acumuladorDeHabitantes / contadorDeHabitantes;
    }

    document.write("Cantidad de temperaturas pares : " + temperaturasPares + "</br>Pais con menos habitantes : " + paisMenosHabitantes
        + "</br>Paises con mas de 40 grados : " + cantidadPaisesMasGrados + "</br>Promedio de habitantes : " + promedioDeHabitantes
        + "</br>Temperatura minima : " + temperaturaMinima + "</br>Y su pais : " + paisMinimo);

}
//Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
//la temperatura mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
//a) La cantidad de temperaturas pares.
//b) El nombre del pais con menos habitantes
//c) la cantidad de paises que superan los 40 grados.
//d) el promedio de habitantes entre los paises ingresados
//f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.