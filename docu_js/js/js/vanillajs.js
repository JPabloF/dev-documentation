/*CONCEPTOS





************************************************

DATA TYPES

************************************************



Primitives types (los 5 tipos): 
----------------------

- primitive type EJ: "String"   // Primitive value EJ: "Juan"

- Los 5 tipos primitivos son: Boolean, Number, String;  Null, Undefined)

- Los 5 ejemplos para lo anterior son: True, 5, "hello"; null, undefined.

- Los valores primitivos NO son objetos. Pueden tener metodos pero no son objetos

- Primitivas (los 5 tipos)

- No primitivas (Objetos)

- Cuando asigno un valor primitivo a una variable, ese valor es copiado en la variable

- Strings, numbers, y booleanos tienen metodos

- null and undefined no tienen metodos.

- "undefined" es devuelto cuando no existe una variable o no está inicializada

- "null" es un objeto, para determinar un valor "null", usamos value === null  //<-- true or false

- "null" podemos asignarlo para inicializar a vacio




References types (Objetos): 
--------------------------

- References types representan a los objetos y son lo mas parecido a una clase en JS

- References values son instancias de references types.

- References types no almacenan el objeto instanciado directamente en la variable asignada.

- Crea una referencia desde la variable asignada hacia la memoria donde existe el objeto

- Las funciones son references values en JS, entonces hay poca diferencia entre una propiedad que contiene un array y una funcion


-----------------------------
Variables y  references types
-----------------------------


VARIABLES C/DATA:
------------------

var car = "red";

  - Una variable que contiene un primitive value, contiene directamente el valor, que es COPIADO a la variable.



VARIABLES CON VARIABLES:
------------------------

var usuario = nombre || "Juan"; // Si no está definida toma el nombre Juan



VARIABLES C/OBJETOS
-------------------

var train = {name: "nebraska", service: "passengers"}

- Una variable con un reference type, guarda un puntero (referencia) hacia el objeto en la memoria

- Cuando asignas un objeto a una variable, estas asignando un puntero



*** NaN es un valor que obtenemos cuando una operación que asume numeros falla:



***********************************************
/*BUILT-IN TYPES Objects   (Tipos incorporados)
***********************************************

- Son references types proveidos por JS

Todos pueden ser instanciados usando new() y mayuscula.*/

new Array();
new Date();
new Error("Something failed");
new Function("console.log('Hi');");
new Object();
new RegExp();


/* Identificadores:
---------------------*/

var Arr = ([1,2,3]);
typeof(Arr) // object


Object.prototype.toString.call(Arr);// "[object Array]"



/* Formas literales
--------------------------------

- Muchos built-in references types tienen formas literales, para definir valores sin crear explicitamente objetos.



//EJ: Objeto sintaxis literal */

var book = {
 name: "The Principles of JavaScript",
 year: 2014,
 "published by": "Amazon" //<-- Los keys con comillas sirven para nombres compuestos.
};

//EJ: Equivalente a:

var book = new Object();
book.name = "The Principles of JavaScript";
book.year = 2014;
book["published by"] = "Amazon";


/*************************************************/

//EJ: Array literal
var colors = [ "red", "blue", "green" ];
console.log(colors[0]); // "red"


//EJ: Array equivalente a:
var colors = new Array("red", "blue", "green")
console.log(colors[0]);
// "red"


/*----------------------------
 Primitive wrappers types
-------------------------------

- Existen 3 tipos (String, Number, Boolean)
- Existen para trabajar con valores primitivos tan facil como trabajar con objetos.
- Son references types creados automaticamente cuando un string, number o boolean es leido.
- Lo que hace es crear un objeto temporal, para aplicar un metodo();
- Generalmente usarlo en lugar de primitivos, lleva a error. Es conveniente evitarlos.





/* ---------------
 Clases core de JS:
-------------------

Object, Number, Array, String (todas heredan de Object) */



/* Assignment Expressions
JavaScript uses the = operator to ASSING A VALUE to a variable or property. For example:*/

i = 0 // Set the variable i to 0.


/***********************************************
  OPERADORES (Aritmeticos, lógicos, comparación)
************************************************


1.- Aritmeticos 
----------------------------------------

- suma        5+3 >> 8
- resta             5-3 >> 2
- multiplicacion  5*3 >> 15
- division      5/3 >> 1.666
- modulo      5%3 >> 2 (el resto de la división)



Post Incremento ++    var a = 2; var b = a++;     b >>2   a >> 3
++ Pre Incremento     var a = 2; var b = ++a;     b >>3   a >> 3

Post decremento --    var a = 2; var b = a--;     b >>2   a >> 1
-- Pre decremento   var a = 2; var b = --a;     b >>1   a >> 1

Compuestos              var a = 5;  a+=3    >>  8




2.- Logicos 
----------------------------------------


!  <--- NOT
&& <--- AND
|| <--- OR



! Operator
--------------------------

Devuelve el valor opuesto


  var b = !true;

  b <-- false


La doble negación devuelve el original


  var b = !!true;

  b <-- true



&& Operator
--------------------------

Regla:

- Si la izquierda es FALSE, siempre devuelve la izquierda
- Si ambos son TRUE, devuelve la derecha
- Si la izq es true, siempre devuelve la derecha

*/


//F   o    T
false && "true" // Devuelve "false"

//T    o   T
"uno" && "dos" // Devuelve "dos"

// F   o  F
false && NaN // Devuelve false

// T   o   F
"true" && false // Devuelve "false"





/*  || Operator
--------------------------

Convierten el valor de la izquierda para booleano.

Regla:

- Si la izquierda es TRUE, siempre devuelve la izquierda
- Si ambos son FALSE, devuelve el de la derecha

*/


//F   o    T
false || "true" // Devuelve "true"


//  T  o    T
"uno" || "dos" // Devuelve "uno"

// F   o  F
false || NaN // Devuelve NaN

// T   o   F
"true" || false // Devuelve "true"




/* 3.- Comparación 
----------------------------------------


== Igualdad

  1 == 1    <-- true
  1 == '1'  <-- true



=== Igualdad y tipo

  1 === '1' <-- false
  1 ===  1  <-- true


!= No Igualdad  (No son iguales)

  1 != 1;    <-- false
  1 !=2 ;    <-- true

!== No igualdad sin conversion de tipo (No son iguales o son de tipos diferentes)

  1 !== 1;  <-- false
  1 !== '1';  <-- true


> Mayor que

>= Mayor o igual que

< Menor que

<= Menor o igual que



/* OPERADOR TERNARIO - Asignación condicional
-----------------------------------------------*/

         //if t:f
var x = ("a">"b") ? 2:5; //Si es true devuelve 2, sino 5



/* CONVERSIONES
-----------------------------------------------

Un string de numero en una operacion es convertido en numero

var foo = '100'
foo = foo * 5; <-- 500

  typeof foo <-- Number


1*undefined <-- NaN
1*null <-- 0

"true" <--string
"false"<-- string


La doble negación convierte el valor en el booleano correspondiente

!!0 <-- false
!!1 <-- true

 * Cualquier valor convertido a booleano es true excepto: " ", null, undefined, 0, NaN, false


********************************
  BUCLES  (4 tipos)
********************************

- while

  var i = 0;
  while (i < 10) {i++;}


- do-while

  var i = 0;
  do{
    i++;
  } while (i < 10) 

- for

    var foo ='';
    for (var i=0; i < 5; i++){
      foo += "Message in loop, "
    }
    // <-- "Message in loop, Message in loop, Message in loop, Message in loop, Message in loop, "




- for-in



//Parametros por defecto

var usuario = nombre || "Juan"; // Si no está definida toma el nombre Juan
