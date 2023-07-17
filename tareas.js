/* Variables y tipo de datos
Lee las instrucciones de cada comentario y escribí el código para realizar la tarea */


//Crea una variable numero y asígnale un valor de tipo number.
var a = 1;

//Crea una variable texto y asígnale un valor de tipo string.
let miVariable = "Programando Paraguay"

//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
let variable = true
//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.

//Crea una variable nulo y asígnale un valor de tipo null.
let vacío= null
//Crea una variable indefinido y asígnale un valor de tipo undefined.
let indefinido= undefined
//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.
const miArreglo = [1, "Hola", true, {nombre: "Juan", edad: 25}];
//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
console.log(a,typeof a)
//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
console.log(miVariable,typeof miVariable)
//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.


//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
console.log(vacío, typeof vacío)
//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log(indefinido,typeof indefinido)
//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.




/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
let numero = parseInt (prompt("Ingrese un numero"))
if(numero > 10) {
console.log("Es mayor")
} else if(numero < 10) {
 console.log("Es menor")
} else if (numero === 10)
console.log("Es igual a 10")

//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
let num = 8
if (num % 2 == 0) {
    console.log("Es par")
} else{
    console.log("Es impar")
}
//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
let caracter = "a"
caracter=caracter.toLowerCase()
if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter ==="u"){
    console.log("Es una vocal")
} else {
    console.log("Es una consonante")
}
//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.

//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
let numero2 = parseInt (prompt("Ingrese un numero"))
if(numero >= 18) {
console.log("Es mayor de edad")
} else if(numero < 18) {
 console.log("Es menor de edad")
} else if (numero === 10)
console.log(numero,typeof numero)

//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
let DIAS =[
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",

]
let input = 2 
console.log(DIAS[input-1])



//Funciones

//Escribe una función que tome dos números como argumentos y devuelva su suma.
let number = parseInt(prompt("Ingrese un numero"))
function sumar (numero1, numero2){
    return numero1 + numero2
}
console.log("La suma es" + sumar ( 5 , 8 ))
//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function isPar(numero){
    if (numero % 2==0){
        return true
    } else{
        return false
    }
}
console.log(isPar(9))
console.log(isPar(8))
//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function sumaElementos(arrayNumeros) {
    let suma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
      suma += arrayNumeros[i];
    }
    return suma;
  }
  
  const arrayNumeros = [2, 4, 6, 8, 10];
  const suma = sumaElementos(arrayNumeros);
  console.log(suma);
  
//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.
let miArray = [
    "hola",
    "chau",
    "buenos dias",

]
let tamaño = miArray.length;
for (let i = 0; i<tamaño; i++){
    console.log(miArray[i],miArray[i].length)
}

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.
function valoresPropiedades(objeto) {
    const arrayValores = [];
    for (let propiedad in objeto) {
      arrayValores.push(objeto[propiedad]);
    }
    return arrayValores;
  }
  
  const objeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Asunción"
  };
  const arrayValores = valoresPropiedades(objeto);
console.log(arrayValores);




//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.
function encontrarNumeroMasGrande(numeros) {
    let numeroMasGrande = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
      }
    }
    return numeroMasGrande;
  }
  
//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.
function ordenarNumeros(numeros) {
    return numeros.sort((a, b) => a - b);
  } const numerosDesordenados = [3,1,4,1,5,9,2,6,5,3,5];
  const numerosOrdenados = ordenarNumeros(numerosDesordenados);
  console.log(numerosOrdenados);

//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.
function elementosComunes(array1, array2) {
  return array1.filter(element => array2.includes(element));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const elementosEnComun = elementosComunes(array1, array2);
console.log(elementosEnComun);

//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.
function convertirAMayusculas(strings) {
    return strings.map(string => string.toUpperCase());
  }
  
  const strings = ['hola', 'mundo', 'esto', 'es', 'una', 'prueba'];
  const stringsEnMayusculas = convertirAMayusculas(strings);
  console.log(stringsEnMayusculas);  

//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.
function sumarAcumulativo(array) {
  const arrayAcumulado = [];
  let sumaAcumulada = 0;
  for (let i = 0; i < array.length; i++) {
    sumaAcumulada += array[i];
    arrayAcumulado.push(sumaAcumulada);
  }
  return arrayAcumulado;
}

const array = [1, 2, 3, 4, 5];
const arrayAcumulado = sumarAcumulativo(array);
console.log(arrayAcumulado);



//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.
for(let i = 1; i <= 10; i++){
    console.log(i)
}
//Escribe un bucle while que imprima en la consola los números del 1 al 5.
let i = 1;
while (i < 6) {
    console.log(i)
    i++;
}
//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.
var  numeros = [1,2,3,4,5];
numeros.forEach(function(numero){
    console.log(numero);

});
//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.
function sumaHastaN(n){
    var suma = 0;
    for (var i = 1; i<=n;i++){
        suma+=i;
    }
    return suma;
}
console.log(sumaHastaN(10));
//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.

function sumaVector(vector){
    var suma = 0;
    var i= 0;
    while(i <vector.length){
        suma += vector[i]
        i++;
    }
    return suma;
}
console.log(sumaVector([1,2,3,4,5]));




//DOM y eventos

//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.


//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.