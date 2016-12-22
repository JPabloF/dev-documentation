/* ECMA 6

**************
Variables.

**************

Si declaro una variable utilizando "var", es tratada como si estuviese inicializada al tope de la funcion o en el scope global

Si esa variable es accedida desde otro bloque, y no ha sido inicializada, simplemente queda undefined o null, si es que se ha intentado inicializar*/



function getValue(condition) {
	
	// var value; //<-- Si value se define dentro del bloque if, se hiza hasta el tope de la funcion, de forma independiente
	
	if (condition) {
		value = "blue"; //Equivalente a decir var = "blue". La inicialización se mantiene pero la declaración se alza

		return value;
	} else {
		return null;
	}
}


/*-----------------------------
 Block levels declarations
------------------------------

LET y CONS son declaraciones de bloque, eso significa que no son accesibles cuando el flujo sale del bloque, y tampoco se hizan.

Declaran variables que son innaccesibles desde afuera de un scope. Los scopes de bloques o léxicos se forman en:

	
- Dentro de una funcion 
- Dentro de un bloque  {...acá....}

Esto significa que ciertas variables solo pueden ser accedidas desde ciertos sectores.




*********************

LET Y CONST

*********************


- Let y const introducen el concepto de scope lexico a JS
- No son hizadas y solo existen en el bloque donde han sido declaradas. 
- Sirve para declarar variables unicamente donde necesitan ser usadas.
- No se puede acceder a ellas antes de ser declaradas.
- Dentro de un  for-in y for-of loops, crean un nuevo binding en cada iteración.

- Una buena practica para block binding es usar siempre const, y solo usar "let" cuando un valor necesita cambiar.
	... Esto ayuda a controlar ciertos errores de cambios no deseados.



------------------
LET DECLARATION
------------------

Es una declaracion de variable limitada al scope. No se hiza al tope. De manera que no se inicializa afuera del bloque.

** No debe estar en el mismo bloque junto a otra con el mismo nombre */


function getValue(condition) {
	if (condition) {
		let color = "blue";

		return value;

	} else {
		// "color" doesn't exist here
		return null;
	}
}


/*----------------
CONST DECLARATION
------------------

Las variables CONST deben ser declaradas e inicializadas al instante, y SOLO se puede cambiar su valor, no su "binding"

El valor de una CONST puede ser modificada en un objeto, pero no su clave

EJ:*/


const color = "red"; 
const color = "blue"; //<-- Si cambio su valor, arroja un error.



const person = {
	name: "Nicholas"
};


person.name = "Greg";    // Funciona, porque estoy vinculando un nuevo valor a una propiedad existente

person.age = 30;	     // Funciona, porque estoy agregando una propiedad, sin modificar una existente

person = {name: "Greg"}; // Error, porque estoy intentando redefinir  en la clave la variable "name"



/*-----------
LOOPS
-------------*/

//Ej 1
for (let i = 0; i < 10; i++) {

	process(items[i]);
}

console.log(i); // "i" <---  ya no es accesible, como lo sería con " for (var i = 0;..... ) etc"




//Ej 2
var numeros = [];

for (let i = 0; i < 10; i++) {
	numeros.push(function() {
		console.log(i);
	});
}

numeros.forEach(function(func) {
		func();
// outputs 0, then 1, then 2, up to 9. Imprime un valor en cada iteracion
}



//EJ 3 - Para for-in

var arrayLetras = [],

	objecto = {
		a: true,
		b: true,
		c: true
	};

	//Si usaramos "var", todas serian "c"
for (let key in objecto) {
		funcs.push(function() {
		console.log(key);
	});
}

arrayLetras.forEach(function(func) {
	func();
	// outputs "a", then "b", then "c"
	// SI usaramos "var", todas serian "c"
});






/* CONST en loops
--------------------

- En el caso del ciclo for, arroja un error, porque trata de modificar una constante 
- En el ciclo "for-in", o en "for-of" operan similar a LET y no arroja error
	... Esto ocurre porque crea un nuevo binding en cada iteracion, en lugar de modificar el valor de un binding.





/********************

Global Block Bindings

*********************


Tanto Let como cons respecto a var difieren en el global scope.

Cuando var es usado en el global scope, crea una nueva variable global, que es una propiedad en el global object (window.)

Eso significa que accidentalmente se puede suscribir una variable global

EJ:*/

var foo = "Hi!";  		  //<-- 	Una vez definida como var global, inmediatamente se convierte en una propiedad de window
console.log(window.foo); // "Hi!"	Aqui vemos que está vinculada a window.



//VARIABLES EN OBJETO GLOBAL

/*Si usamos LET o CONST en el global scope, se crea un nuevo binding, pero no se añaden propiedades al objeto global (window.)
Esto significa que no se puede sobreescribir una variable global usando LET o CONST

- Esto es más util y seguro cuando no queremos crear propiedades en el objeto global.

EJ:*/


let RegExp = "Hello!";

console.log(window.RegExp);				// Undefined
console.log(RegExp);   					// "Hello!"
console.log(window.RegExp === RegExp);  // false. Porque no es propiedad del objeto global


const ncz = "Hi!";

console.log(ncz);  // "Hi!"
console.log("ncz" in window); // false - Porque no existe en "window."



/**************
STRINGS AND REGULAR EXPRESSIONS.

**************

Methods for Identifying Substrings*/


let msg = "Hello world!";


console.log(msg.startsWith("Hello")); //true
console.log(msg.endsWith("!"));		  //true
console.log(msg.includes("o")); 	  // true


/*-------------
Metodo repeat
---------------

Sirve para repetir un string determinado numero de veces.*/

console.log("x".repeat(3));		// "xxx"
console.log("hello".repeat(2)); // "hellohello"
console.log("abc".repeat(4));   // "abcabcabcabc"



let indent = " ".repeat(4), //indent almacena 4 espacios en blanco
indentLevel = 0;			//sigue el registro de niveles de indentado

// whenever you increase the indent
let newIndent = indent.repeat(++indentLevel);

//REGULAR EXPRESIONS