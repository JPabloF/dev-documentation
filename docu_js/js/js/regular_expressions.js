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

i : ignore			Ignora el case sensitive	

m : multiline		Recoge los matchs tratados como lineas independientes

g : global			Recoge todos los matchs posibles

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


\w character

var str ="sk8ter"
str.match(/k\wt/g);// ["k8t"] Cualquier underscore, letra, numero, upper o lowercase


//Negaciones


\D digit
var str ="123andfour"
str.match(/o\Dr/g) //["our"] Cualquier elemento que NO sea numero, en este caso "u".


\W character
var str ="sk*ter"
str.match(/k\Wt/g);//["k*t"] Cualquier cosa que no sea ni letra ni numero, en este caso, *




//Defining rangos in Regex

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

var str ="sK8ter"

str.match(/[^a-z]/gi); //["8"] Cualquier elemento que NO sea del alfabeto. La letra "i" sirve para ignorar el case sensitive. D

str.match(/[^a-z]/g);//  ["K", "8"]  Si removemos la "i", la K mayuscula se escapa del patron, y tb es removida.


/*************
  Multipliers


Existen 3 multipliers in Regex:

+ : This matches one or more occurrences
? : This matches zero or one occurrence
* : This matches zero or more occurrences*/



// + signo. 
//Identifica que el pattern puede aparecer una o más veces

var str ="Timothy sam Robert"

str.match(/[A-Z][a-z]+/g);		//	["Timothy", "Robert"]. Acá estoy pidiendo una alta y al menos una baja, o más.

str.match(/[A-Z][a-z][a-z]/g);	//	["Tim", "Rob"].  Acá estoy pidiendo Una alta y 2 bajas, nada más que eso



//? Signo.  
//El caracter predecesor del signo puede aparecer una o ninguna vez (en este caso la "S")

var str="apple Apples Applse"

str.match(/apples?/gi);	//["apple", "Apples"]



//* signo Matching zero o más 
// El pattern puede repetirse, y puede contener el "!" como no contenerlo

var str="update update! updatess!! update!!!!"

str.match(/update!*/g);	//["update", "update!", "update", "update!!!!"]



/*-------------------
Custon quantifiers
----------------------

//	{3}... Definir un numero determinado de repeticiones*/


var str = "760-277-11"

str.match(/\d{3}-\d{3}-\d{2}/);// ["760-277-11"] Porque pido 3 digitos, guion, 3 digitos, guion y 2 digitos



//	{3,}	... Definir determinadas repeticiones o más


var str="passwordSecret"

str.match(/.{6,}/);//["passwordSecret"]. 	Porque tiene 6 o más carácteres.


// {3,10}   ... Capturar entre un minimo y un máximo.


var str="103510351035" //length de 12

str.match(/.{10,15}/);//	["103510351035"] Porque tiene más del minimo y menos del máximo

str.match(/.{15,20}/);//null   Porque no tiene el mínimo.


// yes | no   ...Captura opciones alternas

var str= "yes no dont nop"

str.match(/yes|no/g); // ["yes", "no", "no"]



//Creating a Regex for a telephone number


var str = var str= "123-123-1234 (123)-123-1234 1231231234"

str.match(/\(?\d{3}\)?-?\d{3}-?\d{4}/g); // ["123-123-1234", "(123)-123-1234", "1231231234"]



/*Desgloce:

/\(?\d{3}\)?-?\d{3}-?\d{4}/g


		
/	

\(?			<-- Opcional contener un parentesis.


\d{3}   	<-- Necesita matchear 3 digitos  

\)?-?   	<-- Opcional contener parentesis de cierre o guion  


\d{3}-? 	<-- Necesita 3 digitos, opcional guion 

 \d{4}   	<-- Necesita 4 digitos

 / g        <-- Global





 **************
 SPECIAL CHARACTERS

