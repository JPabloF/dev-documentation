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

LET y CONST son declaraciones de bloque, eso significa que no son accesibles cuando el flujo sale del bloque, y tampoco se hizan.

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

- Es una declaracion de variable limitada al scope. No se hiza al tope. De manera que no se inicializa afuera del bloque.

-  No debe estar en el mismo bloque junto a otra con el mismo nombre */



var message ="Hi";
{
	var message ="Bye"
}

console.log(message); //-> Bye, porque la variable se sobreescribe, se reasigna



var message ="Hi";

function greet(){
	var message ="Bye"
}

console.log(message); //-> Hi, porque la variable interna ahora tiene block scope



let message ="Hi";
{
	let message ="Bye"
}
console.log(message); //-> Hi, porque let encierra el impacto de bloque de las variables





//Caso de uso en for loop.

var someArr = [];

for (let i=0; i<10; i++){
	someArr.push(function(){
		console.log(i);
	})
}

//Aqui recorro el array al que le pushié la función de log
someArr.forEach(function(f){
	f();
}) //-> Ejecuta la lista numeral de 0 a 9. En cambio utilizando "var" repite el 10 pues la variable se sobreescribe.
//	Utilizando "let", creamos una nueva "i" en cada vuelta del loop




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

- Es una "read only var". No puede ser reasignada y no se puede cambiar la referencia

- Las variables CONST deben ser declaradas e inicializadas al instante, y SOLO se puede cambiar su valor, no su "binding"

- El valor de una CONST puede ser modificada en un objeto, pero no su clave

EJ:*/


const color = "red"; 
const color = "blue"; // Error -> Si cambio su valor como variable, arroja un error.


//EJ comportamiento en objeto
const person = {
	name: "Nicholas"
};


person.name = "Greg";    // Funciona, porque estoy vinculando un nuevo valor a una propiedad existente. "Name" ya existe

person.age = 30;	     // Funciona, porque estoy agregando una propiedad, sin modificar una existente

person = {name: "Greg"}; // Error, porque estoy intentando cambiar la referencia. No estoy trabajando sobre el objeto inicial, estoy cambiandolo por otro.



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





-------------------
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

- Nos ayuda a separar arrays de sus corchetes, 

- Con los 3 puntos se suman al nuevo arreglo de manera "suelta" */


console.log([1,2,3]); //-> [1,2,3]

console.log(...[1,2,3]); //-> 1 2 3


let first = [1,2,3];
let second = [3,4,5];

first.push(second);

console.log(first); //-> [1,2,3, [4,5,6]]


let first = [1,2,3];
let second = [3,4,5];

first.push(...second);

console.log(first); //-> [1,2,3,4,5,6] //-> separa el array con 3 puntos.



function addThreeThings(a,b,c){
	let result = a+b+c;
	console.log(result);
}

addThreeThings(...first); //-> 5. Porque 1+2+3






var cats =["Cuchito", "Samuel", "Gary"];
var dogs = ["Ricky", "Guardian"]
var animals = ["Perros", ...dogs, "Gatos", ...cats, "Tortugas"];

console.log (animals);



----------------------------
/* OBJECT LITERAL ENHACEMENT
-----------------------------

- Podemos suprimir la palabra "function" y los 2 puntos para crear metodos en los objetos
- Podemos utilizar el metodo "repeat" para generar repeticiones */

var soccer = {

	//Para declarar esta funcion dentro de un objeto, ya no necesito escribir function ni usar ":"
	goal(times){
		console.log("goal ".repeat(times));
	}
}

soccer.goal(4);



var color = "red";
var speed = 100;
var drive = "go";
function gone(){ console.log("runnn");}


var car = { 
	color, 
	speed, 
	gone, //-> Aqui llamo a la funcion expresada arriba
	[drive]: function(){console.log("vrummm");} //-> Es una computed property, como escribir ["go"] pero referenciado arriba en "drive"

}  //-> El metodo antiguo requeria definir las variables dentro del objeto

console.log(car.color); //-> red
console.log(car.speed); //-> 100

car.gone(); //-> runnn
car.go(); //-> vrummm








----------------------
// Arrow function
---------------------



//Estilo original

var styleFunc = function(foo){
	return console.log(foo);
}

//Se remueve "function" y los parentesis
var styleFunc = (foo) => console.log(foo);

// Si tiene un valor, se puede remover el mismo parentesis
var styleFunc = foo => console.log(foo); 


styleFunc("Hello!");




//Estilo original sin "var"

function styleFunc(foo){
	return console.log(foo);
}

styleFunc("Hello");



styleFunc = foo => console.log(foo) ;

styleFunc("Bye");





-----------------------------
//Arrow functions and "This"
------------------------------


var person = {
	first: "John",

	actions: ["bike", "hike", "surf"],

	printActions(){ //->Se quita la palabra function, y se declara la funcion directamente.
		
		this.actions.forEach(action=>{ //-> Se quita "function" y se mantienen los parentesis por la multilinea
		
			var str = this.first + " Likes to " + action; //-> Es solo "action" por ser el singular (each) de actions. This apunta a John directamente
			
			console.log(str);
		});
	}

};

person.printActions();



------------------
//Desestructurando
------------------

//En array

var [first] = ["John", "Paul", "George", "Ringo"];

console.log(first) //-> John.  Aun cuando la variable fuese "Last", siempre muestra John. Solo significa el primer elemento.


var [first,,] = ["John", "Paul", "George", "Ringo"];


var [first,,thirth] = ["John", "Paul", "George", "Ringo"];

console.log(thirth) //-> George, porque las comas representan los elementos incognitos intercalados.




//En object
-------------

var {title, price} = {
	title: "Ecmascript 6",
	price: 20 + " USD"
}

console.log (title); //-> Ecmascript 6. Es equivalente a llamar   nombreObjeto.title
console.log (price); //-> 20 USD. Es equivalente a llamar   nombreObjeto.price

console.log({title, price}); //-> Object {"price": "20 USD","title": "Ecmascript 6"}



//Objeto con variable tradicional y function
--------------------------------------------

var product = {
	title: "Ecmascript 6",
	price: 20 + " USD"
};

					  //Aquí paso los parametros de llave, utilizando una function
function productSale ({title, price}){
	return  `The price of the title ${title} is ${price} `
}

console.log(productSale(product)); //-> "The price of the title Ecmascript 6 is 20 USD ".
								   //    Si llamo a la funcion y le paso el objeto, obtengo el mismo resultado


/* Destructuring "inverso"
--------------------------

- Si destructuring nos permite sacar propiedades facilmente de un objeto, esto nos permite ponerlas

- Nos permite pushear propiedades fácilmente con la sintaxis.

EJ:*/


let firstName ="John";
let lastName = "Who";

let actor = {firstName, lastName} //-> Aquí estoy creando un objeto con propiedades

console.log (actor); //-> {firstName: 'John', lastName: 'Who'}    Creo un objeto fácilmante usando las propiedades de la variable


let actress ="Keyra";

let couple = {actor, actress} //-> Aquí mezclo un objeto creado con una propiedad

console.log(couple); //-> Object {"actor": Object {"firstName": "John","lastName": "Who"},"actress": "Keyra"}
					 //   Se ha creado un objeto que contiene otro objeto (actor ) y una propiedad (actress).









/******************
Function Generators
---------------------

- Sirven para la comunicación asíncrona.
- Se declaran utilizando asterisco.
- Nos permiten pasar por cada "yield" mediante el uso de un método "next()"
- Nos permite detectar el fin de un ciclo utilizando "done"

*/



function* director(){
  yield "Threee";
  yield "Two";
  yield "One";
  yield "Action!";
};

var action = director();

console.log(action.next()); 		//-> Object {value: "Threee", done: false}
console.log(action.next()); 		//-> Object {value: "Threee", done: false}
console.log(action.next().value);	//-> "One". Porque puse value para obtener el valor
console.log(action.next().value); 	//-> "Action!"






function* eachItem(arr){
  for (var i=0; i<arr.length; i++){
      yield arr[i];
  }
};

 var letters = eachItem(["a", "b", "c"]);
 
 var abcs = setInterval (function(){
   var letter = letters.next();
   if(letter.done){
     clearInterval(abcs);
     console.log("Im done");
   }else{
     console.log(letter.value);
   }

 }, 500);  //->  "a"....."b".... "c"....Im done

 /*	Explicación:

-	"abcs" almacena una funcion con intervalo, que se ejecuta cada 500 milisegundos.
-	"letter"  almacena  un método next(); que se mueve a través de cada yield de letters
-   "letters" almacena una función generator con un array
-	Aquella function generator itera por cada elemento del array
- 	Al terminar cada iteracion "next" por cada yield, se cumple el condicional letter.done,
- 	De otro modo sigue logueando el valor de cada yield hasta terminar




/************************
CLASES
*************************

Class sintax*/



class Player{
  constructor(position, age){
    this.position = position;
    this.age = age;
  }
  
  describeYourself(){
    console.log(`I play as ${this.position}, and my age is ${this.age}` );
  }
}

var ibra = new Player ("Striker", 35); //-> Con esto creo cuantos players necesite.

ibra.describeYourself(); //-> I play as Striker, and my age is 35


/*Explicacion
---------------

-	Tengo una clase con un constructor, que maneja 2 parametros.
-	La clase posee además un método o function (dentro de la clase, y junto al constructor)
-	Luego puedo crear cuantos objetos quiera utilizando la function constructora "new Player"
-	ibra object puede llamar al método incluido en el constructor

-   typeof ibra   	-> object
-   typeof Player   -> function


Para extender la clase*/
-----------------------


class Cadets extends Player{
  constructor(){
    super("defender", 17) //-> super refiere a la clase player, por tanto a sus propiedades.
  }
}

var hunter = new Cadets(); //-> instancio a un nuevo cadete. Una suerte de subclase de player.

hunter.describeYourself(); //-> "I play as defender, and my age is 17"

