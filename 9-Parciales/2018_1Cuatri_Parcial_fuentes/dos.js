function mostrar() {
    var nombre;
    var cantPersonas;
    var cantDias;
    var formaPago;
    var respuesta;
    var contadorDias = 0;
    var huéspedAlto;
    var flag = 0;
    var personasHuesp;
    var pagoPopular;
    var promedio;
    var contadorReserv = 0;
    var DiasAlto;
    var personasDias;




    do {
        nombre = prompt("Ingrese nombre del huésped : ").toLowerCase();

        cantPersonas = parseInt(prompt("Ingrese la cantidad de Personas : "));
        while (isNaN(cantPersonas)) {
            cantPersonas = parseInt(prompt("Eso no es un numero. Ingrese la cantidad de Personas : "));
        }
        cantDias = parseInt(prompt("Ingrese la cantidad de Dias : "));
        while (isNaN(cantDias)) {
            cantDias = parseInt(prompt("Eso no es un numero. Ingrese la cantidad de Dias : "));
        }
        formaPago = prompt("Ingrese su foma de pago: " + "\nPara efectivo ponga: e" + "\nPara tarjeta ponga: t"
            + "\nY para QR ponga: qr").toLowerCase();
        while (formaPago != "e" && formaPago != "t" && formaPago != "qr") {
            formaPago = prompt("Forma de pago invalida. Ingrese su foma de pago: " + "\nPara efectivo ponga: e"
                + "\nPara tarjeta ponga: t" + "\nY para QR ponga: qr").toLowerCase();
        }
//---------------------------------------------------------------
        if ( flag == 0 || cantPersonas > personasHuesped) {
            personasHuesped = cantPersonas;
            huéspedAlto = nombre;
        }
        if (flag == 0 || cantDias > DiasAlto) {
            DiasAlto = cantDias
            personasDias = cantPersonas
        }
//---------------------------------------------------------------
        if (tarjeta == formaPago ) {
            conatdorT++;
        }












    } while (respuesta == "s" || respuesta == "si")

}


//b)Para la gestión de un hotel,
//ingresar los siguientes datos validados de una reserva
//nombre del huésped
//cantidad de personas 
//cantidad de dia de estadia 
//forma de pago(efectivo , tarjeta o QR)

//informar el huésped que trajo más personas en una sola reserva.
//la cantidad de personas que se quedaron más días
//la forma de pago más utilizada.
//el promedio de cantidad de días por reserva