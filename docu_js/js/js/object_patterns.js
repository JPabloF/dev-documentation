/*PATERNS


Private and Privileged Members
-------------------------------


- Todas las propiedades de objeto son publicas, pero hay formas de hacerlas privadas

- Podemos crear data o funciones que son accesibles solo desde dentro del objeto

- Para objetos singleton, podemos usar el module pattern para ocultar data al exterior

- Podemos usar IIFE (Immediately-invoked function expression) para definir funciones y variables solo accesibles por el nuevo objeto a crear.

- Los metodos privilegiados son metodos en el objeto que tienen acceso a esta data privada



--------------------
1.- Module Pattern:
--------------------


- Sirve para crear objetos singleton (restringidos) con data (variables y funciones) privadas, accesible desde los objetos creados.

- Creando funciones privilegiadas, a traves de un closure, tendra acceso a la data privada, y la retornara o almacenara en un lugar accesible

- El propósito es usar una "inmediatly-invoked function expression" (IIFE).

- Puede eliminar el uso de variables globales

- Las IIFE son definidas y usadas inmediatamente para provocar un resultado.

*/


                 //extra parentesis al inicio, para el IIFE
var yourObject = (function() {
  // private data variables
  return {
  // Metodos y propiedades públicas.
  };
}());

/*

- Este pattern ejecuta una función anonima inmediatamente
- Significa que la funcion existe por un momento, se ejecuta y es destruida */





//EJ: Este ejemplo crea el objeto "person" con module pattern



var person = (function() {

  var age = 25; //< -- Esta variable actua como una propiedad privada del objeto, no se puede acceder desde fuera
                //..   pero si puede ser usada por los métodos del objeto

  return {
    name: "Nicholas",       //<-- Hay 2 metodos privilegiados, que pueden leer la variable "age", porque estan en su alcance de entorno
     getAge: function() {   
     return age;
    }
  };
}());


person.age; // undefined <-- NO se puede acceder directamente desde afuera, pero se puede con los metodos

person.name;// "Nicholas" <-- Porque está dentro del return, que lo vuelve publico

person.getAge(); // 25 <-- Accedo al valor mediante el metodo privilegiado, ejecuta el metodo dentro del "return"




//EJ 2:  Es el mismo caso que el anterior, manteniendo las variables y funciones juntas

var person = (function() {

  var age = 25;

  function getAge() {
    return age;
  }

  function growOlder() {
    age++;
  }

  return {
    name: "Nicholas",
    getAge: getAge,
    growOlder: growOlder
  };

}());


/*----------------------------------------
2.- Private members for constructors
----------------------------------------

Podemos usar un pattern similar al de modulo dentro del  constructor para crear data privada de instancia-especifica. */


function Person(name) {
  // define a variable only accessible inside of the Person constructor
  var age = 25;  //<-- El constructor tiene una variable local "age", usada en los metodos sgtes
  this.name = name;


  this.getAge = function() {
    return age;

  };this.growOlder = function() {
    age++;
  };

}

//Si creo una instancia de person, recibe sus propia variable y metodos. Lo cual no es tan eficiente como hacerlo en el prototipo, pero es viable cuando se busca data privada de instancia especifica.
var person = new Person("Nicholas");

person.name;// "Nicholas"
person.getAge(); // 25

person.age = 100;

person.getAge(); // 25
person.growOlder();
person.getAge(); // 26


//EJ 2: Para compartir data privada entre todas las instancias, usamos un acercamiento hibrido con constructor

var Person = (function() {

  // la variable está fuera del constructor, pero es usada por los 2 metodos del prototipo
  var age = 25;

   //El constructor Innerperson está definido dentro del "iife"
  function InnerPerson(name) {
    this.name = name;
  }

  InnerPerson.prototype.getAge = function() {
    return age;
  };
  InnerPerson.prototype.growOlder = function() {
    age++;
  };
  return InnerPerson; //<-- Es devuelto y convertido el constructor Person en el scope global
                      //    ... todas las instancias de "Person" terminan compartiendo la misma variable age.
}());



var person1 = new Person("Nicholas");

var person2 = new Person("Greg");

person1.name; // "Nicholas"
person1.getAge();// 25

person2.name; // "Greg"
person2.getAge();// 25

//Cambiando el valor con una instancia automaticamente afecta la otra.
person1.growOlder();

person1.getAge();// 26
person2.getAge();// 26 <-- Pasa a tener la misma edad, porque son instancias de Person y comparten la variable




/*3.- MIXINS
----------------------------------------

- Es cuando un objeto adquiere las propiedades de otro sin modificar el prototype-chain


Eĺ primer objeto (receiver) recibe las propiedades del segundo objeto (supplier) copiandolas directamente */



//Acepta 2 argumentos, el proposito es copiar todas las propiedades enumerables de uno a otro.
function mixin(receiver, supplier) {
  for (var property in supplier) {
      if (supplier.hasOwnProperty(property)) {
          receiver[property] = supplier[property]
      }
  }
  return receiver;
}




