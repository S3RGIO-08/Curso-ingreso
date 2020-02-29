function mostrar()
{
var seguir;
var marca;
var peso;
var temperatura;
var temperaturasPares= 0;
var MarcaProductoPesado;
var productosCeroGrados = 0;
var promedioPeso;
var contadorPeso = 0;
var acumuladorPeso = 0;
var pesoMax;
var pesoMin;
var flag = 0;

do{
marca = prompt ("Ingrese la marca");
while (!isNaN(marca)){
    marca = prompt ("Marca invalida. Ingrese la marca");
}
peso = parseInt(prompt ("Ingrese el peso (1 - 100)"));
while(isNaN(peso) || peso < 1 || peso > 100){
    peso = parseInt(prompt ("Peso invalido. Ingrese el peso (1 a 100)"));
}
temperatura = parseInt(prompt("Ingrese la temperatura (-30 a 30)"));
while(isNaN(temperatura) || temperatura <-30 || temperatura > 30){
    temperatura = parseInt(prompt("Temperatura invalida. Ingrese la temperatura (-30 a 30)"));
}
//---------------------------------

if (temperatura % 2 == 0){
    temperaturasPares++;
}
if (temperatura < 0){
productosCeroGrados++;
}
//-----------------------

if (flag == 0 || peso > pesoMax){
    pesoMax = peso;
    MarcaProductoPesado = marca;
}
if (flag == 0 || peso < pesoMin){
    pesoMin = peso
}

if (peso > 0){
    contadorPeso++;
    acumuladorPeso = acumuladorPeso + peso;
}

seguir = prompt("Si quiere ingresar otro ponga: si");
} while(seguir == "s" );

promedioPeso = acumuladorPeso / contadorPeso;

document.write("Cantidad de temperaturas pares : " + temperaturasPares + "</br>Marca del producto mas pesado : "
 + MarcaProductoPesado + "</br>Cantidad de productos bajo 0 : "+ productosCeroGrados + "</br>Promedio del peso : " 
 + promedioPeso +"</br>Peso Maximo : " + pesoMax + "</br>Peso Minimo : " + pesoMin)





}
//Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
//la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
//a) La cantidad de temperaturas pares.
//b) La marca del producto más pesado
//c) La cantidad de productos que se conservan a menos de 0 grados.
//d) El promedio del peso de todos los productos.
//f) El peso máximo y el mínimo