/*

JS tradicional solo tiene un tipo de collection, el array.

La necesidad hizo implementar el uso de set y maps con "nonarray objects"



SETS
- Set es una lista de valores que no pueden contener duplicados.
- Tipicamente no se accede a valores individuales de un set como un array. Más comun es chequear un valor presente.


MAP
- Un map es una coleccion de keys que corresponden a valores específicos
- Cada item en el mapa almacena 2 pedazos de de data, y los valores son entregados especificando la key de cada uno.
- Son usualmente usados como caches para almacenar data que es  devuelta después.







------------

SETS in ES6.

-------------

- Es una lista ordenada de valores sin duplicados.
- Permiten rapido acceso a la data que contienen .





ADHERIR ELEMENTOS
------------------

//Son creados usando "new Set()". y los items son adheridos llamando al metodo add().
- Podemos ver cuantos items han sido ingresados consultando el size.*/


let set = new Set();

set.add(5);
set.add("5");


set.size; //2
set // {5, "5"}
typeof set // object


//Los valores duplicados son ignorados. Si iniciamos un set con un array, el constructor de set se encarga de verificarlo
let set = new Set([1, 2, 3, 4, 5, 5, 5, 5]);

console.log(set.size);// 5



//Podemos verificar si un set contiene un valor utilizando el método has().

let set = new Set();

set.add(5);
set.add("5");

console.log(set.has(5));// true
console.log(set.has(6));// false




//QUITAR ELEMENTOS
------------------

let set = new Set();

set.add(5);
set.add("5");

set.delete(5);
console.log(set.has(5));// false
console.log(set.size);// 1


set.clear();
console.log(set.has("5"));// false
console.log(set.size); // 0



//forEach() en Sets
--------------------

/*Sirve para adherir items a un set y luego ejecutar una operacion


Acepta 3 argumentos:

	
The value from the next position in the set
The same value as the first argument
The set from which the value is read*/


//Convertir set en array
----------------------

let set = new Set([1, 2, 3, 3, 3, 4, 5]),
array = [...set];

console.log(array);// [1,2,3,4,5]



****************
	
	MAPS en ES6

****************
/*
-	Es una lista ordenada de pares key-value. Y pueden ser de cualquier tipo
- 	Los objetos y los maps son similares
-	Sin la existencia de los maps, se usaban los objetos para mantener registro de los key values

-	Por defecto hay keys en el map, independiente si el usuario las adirio o no
-   Los keys pueden ser cualquier elemento, no solo strings como en los objetos.
-	Además nos permiten obtener otras respuestas como el size y otros usos de metodos especiales.

*/



adherir
------
/*
- Podemos adherir items al map con el metodo set() y pasar una key y una value para asociar la key.
- Luego podemos recuperar el valor con el metodo get()*/


let map = new Map();

map.set("title", "Understanding ECMAScript 6"); //el key almacena un string
map.set("year", 2016);							//el key almacena una variable

console.log(map.get("title"));//Understanding ECMAScript 6
console.log(map.get("year")); //2016




let map = new Map(),

key1 = {},
key2 = {};

map.set(key1, 5); //podemos ocupar objetos como keys
map.set(key2, 42);

console.log(map.get(key1));	//5
console.log(map.get(key2));	//42



MAPS METODOS
---------------



API
-----	
set()
get()
size
clear()
has()




has(key)   	  //Determines if the given key exists in the map

delete(key)  // Removes the key and its associated value from the map

clear()   	 // Removes all keys and values from the map

			 // Maps also have a size property that indicates how ma



Iterators
-------------

keys()
values()
entries()			 



var myMap = new Map();

myMap.set('Hello', 'Hola');
myMap.set('World', 'Mundo');


for (var key of myMap.keys()){
	console.log(key); 
}
// "Hello"   
//"World"



for (var value of myMap.values()){
	console.log(value);
}
// Hola
// Mundo


for (var [key,value] of myMap.entries()){
	console.log(key + '=' + value);
}
// Hola
// Mundo




