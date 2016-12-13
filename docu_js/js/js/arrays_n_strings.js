/*ARRAYS
*******************************


- Los arrays se navegan con index de numeros, no con nombres como los objetos

- Disponen de la propiedad length


-----------------------
 DEFINIR ARRAY
----------------------*/

var miArray = [];
var miArray new Array(); //<--- podemos pasar parametros, o un numero (para el tamaño del array relleno con undefineds)


var miArray = [2,3,3,4]; //Array de numeros
var miArray = ["hola", "que", "Tal"]; //Array de strings
var miArray = [{proiedad: "valor1"}, {propiedad: "valor2"}]; //Array de objetos
var miArray = [[2,4]],[3,6]]; //Array de arrays (Matriz);
var miArray = [1, true, [3,2], "hola", {clave:"valor"}]; //Array mixto




/*---------------------
	Filter de array  
-----------------------*/

//	nombreArreglo.filter(function(el){return  ...prueba... ; });

//EJ 1:

var miArray = [1,2,3,4,5,6];

var resultado = miArray.filter(function(el){

	return el % 3 === 0; //<-- devuelve los elementos que divididos por 3, dan .
}); //Resultado [3,6]




//EJ 2:  ----> Quitamos los valores inferiores a 10 

//Tomo un objeto
var cifras = [12, 5, 8, 130, 44]

//Creo una funcion filtradora, pasando un argumento X
function sobreDiez(el) {
  return el >= 10;
}

//Filtro el array con un metodo, pasando el argumento discriminador a filtrar.
var filtrados = cifras.filter(sobreDiez); // <-- [12, 130, 44]




/*--------------------------
   Identificar type Array:
--------------------------*/

var items = [];
console.log(Array.isArray(items)); // true


/*-----------------
Métodos de array
-------------------

Array.from()
Array.isArray()
Array.observe()
Array.of()
Array.prototype.concat()
Array.prototype.copyWithin()
Array.prototype.entries()
Array.prototype.every()
Array.prototype.fill()
Array.prototype.filter()
Array.prototype.find()
Array.prototype.findIndex()
Array.prototype.forEach()
Array.prototype.includes()
Array.prototype.indexOf()
Array.prototype.join()
Array.prototype.keys()
Array.prototype.lastIndexOf()
Array.prototype.map()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString() [Traducir]
Array.prototype.toSource() [Traducir]
Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()
Array.prototype[@@iterator]() [Traducir]
Array.unobserve()
get Array[@@species] [Traducir]
*/


//forEach:

var miArray = ["A","B","C","D","E"];

						  //elemento, posicion 				
miArray.forEach(function (el, index){
   console.log ("La posicion del elemento " + el + " es " + index);
});
//La posicion del elemento A es 0
//La posicion del elemento B es 1
//La posicion del elemento C es 2
//La posicion del elemento D es 3
//La posicion del elemento E es 4



array.concat(item...) // Concateno 2 arrays

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true); //* Aqui puedo agregar otra propiedad.
// c is ['a', 'b', 'c', 'x', 'y', 'z', true]



array.join(separator) // Junto los elementos, si no paso parametro, los pego. Si paso algo, separo c eso.

var a = ['a', 'b', 'c'];
var c = a.join('');
// c is 'abc';



array.pop( )  // Remueve el ultimo elemento del array y lo retorna.

var a = ['a', 'b', 'c'];
var c = a.pop( );
// a <--- ['a', 'b'] 

//c  <---  'c' (Queda afuera del array)  

//Forma alternativa:
Array.method('pop', function ( ) {
  return this.splice(this.length - 1, 1)[0];
});


array.push(item...) //Empuja elementos al final del array. Si pones un array lo mete dentro del otro array

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true);
// a is ['a', 'b', 'c', ['x', 'y', 'z'], true]
// c is 5; //El metodo devuelve el nuevo length del array.



array.reverse( ) // Invierte los datos

var a = ['a', 'b', 'c'];
var b = a.reverse( );
// both a and b are ['c', 'b', 'a']



array.shift( ) // Remueve el ultimo elemento del array y lo retorna

var a = ['a', 'b', 'c'];
var c = a.shift( );
// a is ['b', 'c'] & c is 'a'



array.slice(start, end) // Cuenta el inicio del index para coṕiar, y el ultimo antes del end

var a = ['a', 'b', 'c'];
var b = a.slice(0, 1); //  resulta ['a'], porque copia hasta antes del "end"
var c = a.slice(1); // resulta ['b', 'c'], porque comenzo a copiar desde el index 1 sin fin
var d = a.slice(1, 2); // resulta ['b'], porque copia hasta antes del "end"
//a   queda igual.



array.sort(comparefn)  //Ver mas en goodparts

var n = [4, 8, 15, 16, 23, 42];
n.sort( ); // [15, 16, 23, 4, 42, 8]



array.splice(start, deleteCount, item...) //Remueve y reemplaza con nuevos
                                          //El primer parametro es la posicion en el array
                                          // El segundo es el numero de elementos desde ESA posicion  
var a = ['a', 'b', 'c'];                  //  El tercero, insertara elementos a ESA posicion (y devuelve el elemento borrado)
var r = a.splice(1, 1, 'ache', 'bug');

// a is ['a', 'ache', 'bug', 'c']
// r is ['b']



array.unshift(item...)            //Engancha elementos al frente del array

var a = ['a', 'b', 'c'];
var r = a.unshift('?', '@');

// a is ['?', '@', 'a', 'b', 'c']
// r is 5, porque devuelve el nuevo length







/**************************************************************
 
  STRINGS

***************************************************************/

"javascript".indexOf("script"); // devuelve 4

//Metodo split(" ");
//Sirve para convertir un string en array
var str = "How are you doing today";
var res = str.split(" ");

[How,are,you,doing,today]//<--- responde arrai con valores







/*Metodos de string
---------------------


toUpperCase() 	Devuelve el string convertido a mayúsculas

toLowerCase() 	Devuelve el string convertido a minusculas

charAt() 		Devuelve el carácter encontrado en la posición indicada

indexOf() 		Busca una cadena de texto en el string y devuelve la posición donde la encuentra
				– Si no encuentra nada devuelve -1


lastIndexOf()   Empieza la búsqueda desde el final de la cadena 
				– Si no encuentra nada devuelve -1


slice() 		Devuelve un trozo de la cadena de texto

split() 		Transforma el string en un array utilizando un string como separador

concat() 		Une strings




*****************
Math
*****************

Es un objeto con propiedades y métodos para usos matemáticos, No es constructor de otros
objetos


Algunos métodos interesantes de Math son:

• random() 	genera números aleatorios entre 0 y 1

• round(), floor() y ceil() para redondear numeros

• min() y max() devuelven el minimo y el máximo de una serie de números pasados como parametros

• pow() y sqrt() devuelve la potencia y la raíz cuadrada respectivamente


****************
Date
*****************


Date() es una función constructora que crea objetos Date

Podemos crear objetos Date nuevo pasándole:
-------------------------------------------

• Nada (tomará por defecto la fecha actual)

• Una fecha en formato texto

• Valores separados que representan: Año, Mes (0-11), Dia (1-31), Hora (0-23), Minutes (0-59), Segundos(0-59) y Milisegundos (0-999)

• Un valor timestamp



Algunos métodos para trabajar con objetos Date son:
----------------------------------------------------

• setMonth() y getMonth() 	escriben y leen el mes en un objeto date respectivamente (lo
mismo hay para year, day, hours, minutes, etc...)

• parse() 					dado un string, devuelve su timestamp

• UTC() produce un timestamp dados un año, mes, dia, etc..

• toDateString() 			devuelve el contenido de un objeto date en formato americano
