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
const color = "blue"; //<-- Si cambio su valor como variable, arroja un error.


//EJ en objeto
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


Tanto LET como CONST difieren de VAR en el global scope.

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



//TIP Ecma 6 contiene un metodo clip

beatles.map(beatles => beatles.name)
["John", "Paul", "George", "Ringo"]


/***********************
FUNCTIONS
-------------------------



Default parameters in FUNCTIONS DE ECMA 6

- Podemos asignar parametros por defecto en caso de no pasar parametros.

*/

//EJ:


function getValues (x=5, y=7){
	return x+y;
}

getValues(); //> 12, porque se asignan valores por defecto.
getValues(3,3) //> 6, porque pasé valores



function makeRequest(url, timeout=2000,  callback = function(){//...callback
	}){

	//el resto de la funcion
}

/*	Esta funcion solo espera un parametro pasado. Las otras 2 almacenan un valor default para actuar.

Cuando la función es llamada, con 3 parametros, los valores default no se usan.*/



//EJ 2


makeRequest("/foo");	//-> Utiliza el valor default de timeout y callback



makeRequest("/foo", 500); //-> Utiliza el valor callback por default, porque solo completa pasando los 2 primeros



makeRequest("/foo", 500, function(body){doSomething(body);}); //-> No usa ningun valor default. (Porque los 3 valores fueron explicitamente pasados).



//EJ: Es posible

//En este caso, el valor default de timeout (200), solo se usara si es que no hay segundo argumento pasado o si el segundo argumento es explicitamente "undefined"

function makeRequiest(url, timeout=200, default){
	//...				
}


// Esta usa default timeout (200), porque pasar "undefined" equivale a no pasar segundo argumento, es como decir "no estoy pasando, usa el default (200)"

makeRequest("/foo", undefined, function(body){doSomething(body);});


//Aqui usara el timeout default (200). Porque no pasé segundo argumento
makeRequest("/foo");



//Aqui NO usara el timeout default (200). Porque pase un segundo argumento explicitamente nulo. Lo cual es distinto a pasar undefined. Null es considerado valido.
makeRequest("/foo", null, function(body){doSomething(body);});



//Default parameter y  Argument Object 
-------------------------------------

//(Argument es un componente de todos los objetos, que almacena los parametros pasados.. el los gestiona, asi se le puede medir y preguntar)




function mixArgs(first, second = "b") {
console.log(arguments.length);			1 //-> Es 1, porque me está mostrando la cantidad de argumentos que pasé al objeto "Arguments". Y este objeto arguments, recibío 1 solo argumento, que se posiciona en el array de arguments de memoria como "index0"
console.log(first === arguments[0]);	true //-> First aquí es "a", y eso es igual al argumento de posicion index 0 (en este caso "a".... entonces es true
console.log(second === arguments[1]);	false//-> El segundo argumento es undefined. Entonces no es 1. El segundo argumento es el index 1 seguno 0based index
first = "c";
second = "d"
console.log(first === arguments[0]);	false //-> Una vez actualizada la variable first a "c" dentro de la variable, no es igual al argumento pasado del indexof 0, entonces es false. ¿Es igual? no.. es false..
console.log(second === arguments[1]);	false //-> En el caso final. second ahora es igual a "d" porque se actualizó en la cascada., y el arguments del index1 es "b", porque dice que si no hay segundo argumento, use el default, en este caso "b"
}

//Llamo a la funcion con 1 argumento, posicionada como arguments[0] ( O sea, el primero en "index based0")
 mixArgs("a");




//Este ejemplo explica que el default value no necesita ser un primitivo, puede ser una funcion con variables
function getValue() {
	return 5;
}
function add(first, second = getValue()	) {
	return first + second;
}
console.log(add(1, 1)); //-> 2  En la primera instancia. first vale 1, y second, también pasado vale uno, pues no se dispara "getValue" valorizado como una funcion. second vale lo que vale nomas, lo que está dentro, en este caso 2, el valor pasado.
console.log(add(1));	//-> 6  Aqui, first vale 1., pero second ahora vale "getValue", que a su vez vale 5, y ahora "second" pasa a valer esos 5, por ser el valor default asignado... Entonces 1+5 es igual a 6



/*******************
TEMPLATE STRINGS
********************	

- Elimina el concepto de + concatenador
- Usa comillas de acento y $

*/

function createEmail (firstName, price){
	var shipping = 5.95;
	console.log( 
		`Hello ${firstName}, thanks for buying!
			Total: $${price}
			Shipping: $${shipping}
			Grand total: $${price + shipping};
		`
		);
}

createEmail("John", 55);


/*Spread operators
-------------------

- Nos ayuda a concatenar arrays, de manera que los 3 puntos se suman al nuevo arreglo de manera "suelta"
*/

var cats =["Cuchito", "Samuel", "Gary"];
var dogs = ["Ricky", "Guardian"]
var animals = ["Perros", ...dogs, "Gatos", ...cats, "Tortugas"];

console.log (animals);




/* OBJECT LITERAL ENHACEMENT
-----------------------------

- Podemos suprimir la palabra "function" y los 2 puntos para crear metodos en los objetos
- Podemos utilizar el metodo "repeat" para generar repeticiones */

var soccer = {

	goal(times){
		console.log("goal ".repeat(times));
	}
}

soccer.goal(4);


// Arrow function
---------------------



//Estilo original
var styleFunc = function(foo){
	console.log(foo);
}

//Se remueve "function" y los parentesis
var styleFunc = (foo) => console.log(foo);

// Si tiene un valor, se puede remover el mismo parentesis
var styleFunc = foo => console.log(foo);



styleFunc(["one", "two", "three"]);