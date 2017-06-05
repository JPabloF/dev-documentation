/* CONSTRUCTORS
**************************************


- Un "constructor" es una "funcion" llamada con "new" para crear un OBJETO, CREA OBJETOS!!!


- JS incorpora constructores built-in como  "Object", "Array", "Function", etc. 

- Para definir un constructor propio que crea un objeto, lo hacemos con una letra Capital. (EJ:  function Person)

- La ventaja de los constructores es que los objetos creados contendran las mismas propiedades y métodos.

- ENTONCES uno crea funciones constructoras para crear objetos con las mismas props y metodos



- El operador "new" crea automaticamente un objeto del tipo señalado y lo retorna.

- Cada objeto creado con "new" es conocido como una instancia de ese tipo de objeto.

- **? El constructor es definido en el prototype, porque es compartido para todos los objetos instanciados
*/




/* PASOS
-------------------*/


// 1.- Primero se crea el constructor. Es una funcion simple, con letra capital

function Person() {
  //... puede tanto estar vacia...    como...
}

//... otra opción:

function Person(name){ //<-- Puedo usarse un parametro
  this.name = name; // <-- "this" no puede ser usado en una key, pero si en un valor de variable
  
  this.sayName = function(){
    console.log(this.name);
    //return <-- No hay necesidad de un return, porque el operador "new" lo produce, pero se puede usar
  };
}

//2.- Luego se pueden iniciar instancias diferentes del mismo objeto:

var person1 = new Person; //<--- Si no se tienen parametros para pasar, se puede incluso omitir.
var person2 = new Person("Greg"); //<--- El operador "new" crea un objeto del tipo indicado y lo almacena en una var
var person3 = {};



// Llamo a la funcion
person2.sayName(); //Greg <--- Porque lo pasé como parametro



//Tanto person1 como person2 son considerados instancias de "Person".
// He creado 3 objectos person con la misma "formula", compartiendo un metodo, y gestionando distintos valores

person1 instanceof Person // true
person2 instanceof Person // true
person3 instanceof Person // false
person3 instanceof Object // true




//Otro ejemplo de constructor con 2 parametros

function Contact(name, email){
  this.name = name; //<--- "this" es como decir contact.name o cualquier foo.name
  this.email = email;
}


//            Generamos nuevas instancias de objeto a partir de un constructor, en este caso "Contact"
var contact = new Contact("Andrew", "andrew@email.com"); //<-- Contiene más contact information

typeof Contact //"function" <--- Es una funcion con mayuscula
typeof contact// "object" <--- Es un objeto, que contiene info
contact.name // "Andrew" <--- Tiene info que puede ser accesada, es como decir "this.name"









/**************************************
 PROTOTYPES
***************************************

- Es como una receta para un objeto

- Todas las funciones tienen una propiedad "prototype" que define las propiedades compartidas por los objetos creados por un constructor particular

- "prototype" es compartida entre todos los objetos instanciados. Y todos ellos pueden acceder a propiedades del prototype

- Los metodos y propiedades de valor primitivo (EJ:juan) son usualmente definida en prototipos

  ... Mientras que el resto de las propiedades (EJ: variables), son definidas dentro del CONSTRUCTOR

- Pueden cambiar continuamente sus propiedades, y las instancias reflejaran sus cambios de inmediato.

EJ:
El método hasOwnProperty() es definido en el Object prototype genérico, pero puede ser accedido por cualquier objeto como propio.*/

var book = {
  title: "The Principles of JavaScript"
};

console.log("title" in book); //true <-- Porque esta definida en book
console.log(book.hasOwnProperty("title")); //true <-- Porque está definida en book
console.log("hasOwnProperty" in book); //true <-- Porque "in" devuelve true para las "prototype properties" y las "own properties"
console.log(book.hasOwnProperty("hasOwnProperty")); //false <-- Porque no está definida explicitamente como "own property"
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); //true <-- Porque el Object es el padre de todos los objetos



/* La propiedad [[Prototype]]
--------------------------------

- Almacena las propiedades 

- Una instancia realiza un seguimiento de su prototype a través de una propiedad interna llamada [[Prototype]]

-  La propiedad [[Prototype]] apunta devuelta al prototipo que usa la instancia

- Si creo un objeto usando "new", la propiedad prototype del constructor, se asigna a la propiedad [[Prototype]] de ese nuevo objeto.



/* Diagrama explicativo
---------------------------*/


//Creo un constructor "Person"
function Person(name){
  this.name = name;
  this.sayName = function(){
    console.log(this.name);
  };
}


// Instancio los objetos person1 y person 2 desde Person
var person1 = new Person("Nick"); 
var person2 = new Person("Greg");


/*


person1                                          Constructor "Person"
---------------------------                          
[[protoype]]  |   --------|-------------->        Person.prototype
---------------------------                     ------------------
    name      |  "Nick"   |                      sayName | function    
---------------------------                     ------------------ 

person2
---------------------------
[[protoype    |   --------|-------------->
---------------------------
    name      |  "Greg"   |
---------------------------

*/


// Puedo leer el valor de [[Prototype]] usando Object.getPrototypeOf()


Object.getPrototypeOf(person1) // Object {} <-- Leo el prototype

var foo = Object.getPrototypeOf(person1) //<-- Puedo almacenar el prototype

foo.isPrototypeOf(person1) // true //<-- Compruebo si es prototype de otro objeto





//EJ: Objeto creado sin propiedades propias(own properties)
var object = {};

//Invoco la propiedad
object.toString(); // "[object Object]"

//Agrego una propiedad (que tiene el mismo nombre que una default)
object.toString = function() {
return "[object Custom]";
};

//Invoco la propiedad
object.toString();// "[object Custom]"

// Borro la propiedad agregada antes
delete object.toString;

//Invoco el metodo y vuelvo al mismo valor default
object.toString();// "[object Object]"




/*Object.prototype.constructor
-------------------------------

- "constructor" es una propiedad

- Retorna una referencia a la función del Object que creó el prototipo de la instancia.


Ej: Comprobacion: Todos los objetos heredan una propiedad "constructor" la cual proviene de su prototipo:*/

var o = {};
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true



/*Ej: Mostrando el "constructor" de un objeto.
----------------------------------------------*/


//Creo un prototipo, "Tree":  
function Tree (name) {
   this.name = name;
}


//y un objeto de este tipo, "theTree":
var theTree = new Tree( "Redwood" );


//Mostramos entonces la propiedad "constructor" para el objeto theTree.
console.log( "theTree.constructor es " + theTree.constructor );


//Este ejemplo mostrará el sgte log:

// "theTree.constructor es " function Tree (name) {
//     this.name = name;
// }




/*----------------------------------
 PROTOTYPES con CONSTRUCTORS
-----------------------------------

- Es ideal para definir metodos una vez para todos los objetos de un mismo tipo.

- Debido a que los metodos tienden a hacer lo mismo para todas las instancias, resulta util en lugar de tener c/u propias.

- Es más eficiente poner el metodo en el prototype y usar "this" para acceder a la actual instancia.*/





//Constructor: 
function Person(name){
  this.name = name;
}


//Prototipo: 

//La function ahora está definida en el prototype en lugar del constructor, porque sera compartida
Person.prototype.sayName = function(){ //<-- Aqui pongo el metodo en Person.prototype, además del metodo
    console.log(this.name);
};  

//Instancias: 
var person1 = new Person("Nick"); //<--- es un objeto instanciado desde el constructor
var person2 = new Person("Greg");


person1.sayName(); // Nick
person2.sayName(); // Greg

//Agrego un nuevo metodo y modifico el prototipo.
Person.prototype.sayHi = function(){
  console.log("Hi");
};

person1.sayHi(); // Hi <--- Llamo al objeto instanciado, que antes solo tenia un metodo, y ahora dos.




/*** Una instancia y su constructor, estan linkeados via prototype


/* Declaracion de constructor y prototype como objeto literal*/


//Constructor: 
function Person(name){
  this.name = name;
}


Person.prototype = {

  sayName: function(){ // <--- metodo object literal
    console.log(this.name);
  },

  toString: function(){ // <--- metodo object literal
    return "[Person " + this.name + "]";

  }

};

var person3 = new Person ("Dave"); //<-- Instancio un objeto Person


person3.sayName();// Dave

person3.toString();// "[Person Dave]"




/* Cambiando prototypes

- Podemos cambiar el prototipo y heredar esos metodos a los objetos, incluso aunque esten congelados

La propiedad [[Prototype]] es considerado una "own property" de la instancia, y mientras la propiedad en si misma
está congelada, el valor (un objeto) no lo está */


//Constructor
function Person(name) {
  this.name = name;
}

//Instancias
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

//Congelo un objeto
Object.freeze(person1);

//Cambio el prototype
Person.prototype.sayHi = function() {
  console.log("Hi");
};

//El nuevo metodo aparece en el ouput
person1.sayHi();// outputs "Hi"
person2.sayHi();// outputs "Hi"



/* Built-in Object Prototypes

Los built-in tienen constructores, portanto, prototypes que se pueden cambiar.*/

Array.prototype.sum = function() {
return this.reduce(function(previous, current) {
return previous + current;
});
};
var numbers = [ 1, 2, 3, 4, 5, 6 ];
var result = numbers.sum();
console.log(result);
// 21