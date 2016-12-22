/*************************************
	REGULAR EXPRESIONS
**************************************


Describen patters de información, como por ejemplo guiones, corchetes, grupos de letras
- en JS tenemos el regExp objet


2 formas de crear una expresion regular*/

var rgx1 = new RegExp("hello"); //<-- Constructor

var rgx2 = /hello/;				//<-- Literal


/*
--------------------
PATTERN FLAGS
--------------------

Existen 3 metodos.

ignore - i
multiline - multiline
global - g

*/


//METODO TEST     rgx.test 
// Retorna true o false dependiendo del match del texto

var rgx = /hello/; 	// Creo una expresión regular

rgx.test("hello"); 		   //true. Porque contiene "hello"
rgx.test("world");  	   //false. Porque no contiene "world"
rgx.test("hello world");   //true. Porque contiene hello 



//METODO EXEC    .rgx.exec
//--------------------------
// Este metodo retorna información especifica del match, como el index del inicio del pattern


var rgx = /world/;      // undefined
rgx.exec("world !!");   // [ 'world' ] Devuelve un array, con el index del inicio, en este caso [0]
rgx.exec("hello world");// [ 'world' ] Devuelve un array, el index ahora es 6, porque ahí comienza el pattern
rgx.exec("hello");		// null        Devuelve null porque no lo encuentra.



//METODO the String.replace 
//---------------------------
//Este método, recibe 2 parametros, y reemplaza el parametro buscado con el parametro entregado.


str = "foo foo"
str.replace("foo", "qux") //<-- "qux foo". Porque solo reemplaza el primer valor encontrado.


//Si quisieramos reemplazarlos todos, podemos utilizar un objeto RegExp con un flag global.

str = "foo foo"

str.replace(/foo/g, "qux") //<--  "qux qux". En este caso, entregamos el pattern con un abandera global para afectar todos los elementos


//METODO the String.search
//-------------------------
// Busca el index0 que primero hace match con el string

str = "hello world"; //"hello world"
str.search(/world/); //6 - Porque existen 6 carácteres hasta que comienza el pattern.



//METODO the String.match
//-------------------------
//Retorna un array de todos los march cuando utiliza la flag "g"

var str ="abcabc"

console.dir(str.match(/b/)); //<-- 1 array, de index 1, porque captura la primera "b" de la serie

console.dir(str.match(/b/g)); //<--2 arrays. Porque hay 2 "b" y por tanto 2 matches. Uno con "b" index 0 y otro con index 1.






//Matching a wild card character

.  punto //will match any character except a new line, so it can include letters, numbers, symbols, and so on

var str ="Hello world"
str.match(/o.l/); // ["orl"]  Porque el punto hace de "comodin" entre la "o" y la "l"


\d digit

var str ="123andfour"
str.match(/1\d3/g) // ["123"] Porque \d matchea cualquier digito entre el "1" y el "3"


\w digit

var str ="sk8ter"
str.match(/k\wt/g);// ["k8t"] Cualquier underscore, letra, numero, upper o lowercase


//Negaciones


\D digit
var str ="123andfour"
str.match(/o\Dr/g) //["our"] Cualquier elemento que NO sea numero, en este caso "u".


\W digit
var str ="sk*ter"
str.match(/k\Wt/g);//["k*t"] Cualquier cosa que no sea ni letra ni numero, en este caso, *


//Defining ranges in Regex

var str ="bicycle"

str.match(/[abc]/g); // ["b", "c", "c"] El rango de elementos, cualquiera sea "a" "b" o "c"


//Rango
var str ="Tim sam Bob maC Guy"
str.match(/[A-Z][a-z][a-z]/g); // ["Tim", "Bob", "Guy"] Primera letra capital, seguida por 2 letras bajas.


// guion

var str ="Hello world"
str.match(/Hello[- ]world/); // ["Hello world"] Porque busco un rango de elementos, tanto guion como espacio

str.match(/Hello[\- ]world/); // ["Hello world"]


//Negated ranges

var str ="sk8ter"

str.match(/[^a-z]/gi); //["8"] Cualquier elemento que NO sea del alfabeto


/*************
  Multipliers