/*
 SYMBOLS


- Los simbolos en los primitives JS no tienen una forma literal (como el true booleano o un numero=5).

- Las propiedades de simbolo son categorizadas aparte de las propiedades del objeto.

- Sirve para crear objetos c propiedades privadas.

*/


let firstName = Symbol();

let person = {};

person[firstName] = "Nicholas";

console.log(person[firstName]);     // "Nicholas"

/* Explicacion
---------------

- firstName es creado para asignar una nueva propiedad al objeto "person"
- debo usar ese simbolo cada vez que quiera acceder a una propiedad*/





let firstName = Symbol("first name");// Acepta una descripcion para mejor entendimiento, pero no deja acceder.

let person = {};

person[firstName] = "Nicholas";

console.log("first name" in person); //false
console.log(person[firstName]);		 // "Nicholas"
console.log(firstName);				 //"Symbol(first name)"


Usando simbolos
----------------
