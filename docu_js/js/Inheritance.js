/* HERENCIAS  
***************************************************************

- JS soporta herencias a través de prototype chaining.

- Todos los objetos genericos automaticamente heredan de Object.prototype

- Si quiero crear un objeto que herede de algo distinto, uso Object.create() para especificar el valor de [[prototype]]

- Mecanismos de herencia en JS (son 4)

- To inherit own properties correctly, you can use constructor stealing,
which is simply calling a constructor function using call() or apply()



***************************************************
1.- PROTOTYPE CHAINING y "Object.prototype"
***************************************************


- Los objetos instanciados heredan propiedades desde el prototipo (porque el prototipo es también un objeto).

- Ese objeto tiene su propio prototype y hereda propiedades desde él. Creando una cadena de herencia de propiedades desde el prototipo.

- Todos los objetos heredan las propiedades de Object.prototype (que tiene propiedades default)

- Cualquier objeto definido literalmente ( ...{}...) tiene su [[Prototype]] ligado a Object.prototype


*/


//Ejemplo de objeto literal
var book = {
  title: "Las herencias de prototipo"
};

//Tomo el prototipo del objeto literal book
var prototype = Object.getPrototypeOf(book);

console.log(prototype===Object.prototype); // true <---book hereda prototype (y automaticamente recibe métodos) de "Object.prototype"




/*  Metodos heredados desde Object.prototype
----------------------------------------------

Muchos métodos están definidos desde Object.prototype y heredan a todos los objetos. Estos son:


hasOwnProperty()    Determina cuando una propiedad "own" con el valor pasado existe
propertyIsEnumerable()  Determina si una propiedad "own" es numerable
isPrototypeOf()     Determina cuando un objeto es prototipo de otro

valueOf()         Devuelve la representacion value de un objeto

toString()        Devuelve la representacion string de un objeto



***************************************************
2.- OBJECT INHERITANCE (Herencia de objetos)
***************************************************

- La herencia mas simple es entre objetos*/

//EJ:

//Este objeto hereda de Object.prototype
var person1 = { 
  name: "Nicholas",
  sayName: function() {
    console.log(this.name);
  }
};

//Este hereda los métodos de person1, pero define su propio "own name property", que tapa a la heredada por prototype
var person2 = Object.create(person1, {
  name: {
    configurable: true,
    enumerable: true,
    value: "Greg", //<-- propio valor para "name" (Greg), que tapa al heredado (Nicholas)
    writable: true
  }
});
person1.sayName();// outputs "Nicholas"
person2.sayName();// outputs "Greg" <-- Porque su propiedad propia tapa la heredada, aunque mantiene su metodo, tapa su valor "name".


/*** Al acceder a la propiedad de un objeto, leyendo las propiedades propias, y luego las heredadas.





***************************************************
3.- CONSTRUCTOR INHERITANCE (Herencia de constructor)
***************************************************

- Herencia de objetos es la base para herencia de constructores.

- La propiedad "prototype" tiene una propiedad individual (own...) llamada "constructor" que puedo cambiar*/


//EJ

// Creo un constructor
function YourConstructor() {
  // ...
}

// JavaScript engine hace esto por debajo

YourConstructor.prototype = Object.create(Object.prototype, {
                              constructor: { //<-- propiedad individual
                                configurable: true,
                                enumerable: true,
                                value: YourConstructor
                                writable: true
                              }
                            });

