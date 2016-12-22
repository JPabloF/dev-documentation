/*************************************
	REGULAR EXPRESIONS
**************************************


Describen patters de información, como por ejemplo guiones, corchetes, grupos de letras
- en JS tenemos el regExp objet


2 formas de crear una expresion regular*/

var rgx1 = new RegExp("hello"); //<-- Constructor

var rgx2 = /hello/;				//<-- Literal


/*PATTERN FLAGS

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
// Este metodo retorna información especifica del match, como el index del inicio del pattern


var rgx = /world/;      // undefined
rgx.exec("world !!");   // [ 'world' ] Devuelve un array, con el index del inicio, en este caso [0]
rgx.exec("hello world");// [ 'world' ] Devuelve un array, el index ahora es 6, porque ahí comienza el pattern
rgx.exec("hello");		// null        Devuelve null porque no lo encuentra.



//METODO the String.replace 

//Este método, recibe 2 parametros, y reemplaza el parametro buscado con el parametro entregado.


str = "foo foo"
str.replace("foo", "qux") //<-- "qux foo". Porque solo reemplaza el primer valor encontrado.


//Si quisieramos reemplazarlos todos, podemos utilizar un objeto RegExp con un flag global.

str = "foo foo"

str.replace(/foo/g, "qux") //<--  "qux qux". En este caso, entregamos el pattern con un abandera global para afectar todos los elementos