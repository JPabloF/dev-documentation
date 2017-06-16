
/******** 
  JSON
*********

- Es una sintaxis para serializar:  objetos, arrays, strings, números, booleanos y null

- Las fechas no se reconocen como tipo de dato

- Los nombres de propiedades solo pueden ser data simple (No funciones, ni variables, etc).

- Las cadenas JSON deben ser convertidas a objetos Javascript para poder utilizarlas (y viceversa).

- Existen JSON Objects y JSON arrays 

- La mejor tecnica para obtener data desde el servidor es a traves de XMLHttpRequest





JSON Object   ---->  { json String   :  Json Value}   
------------


- un JSON Object es un contenedor de nombre/valor.

- Los valores pueden ser arrays y objetos.
 
- Pueden estar anidados a cualquier profundidad



JSON ARRAY    ---->   [json value]
------------

- Es una secuencia de valores, incluso arrays y objectos.




MANIPULACION JSON:
---------------------

* eval() :      No se recomienda utilizarlo directamente

• JSON.parse :    Convierte un string JSON en un objeto JS

• JSON.stringify :  Convierte un objeto JS en un string JSON

• jQuery.parseJSON : Con jQuery también podemos hacer el parseo del JSON */




// JSON OBJECT (Notar que no está entre comillas)
var user = {"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"};


// ACCESO al JSON OBJECT
user.name // John Johnson




//Transformar string JSON en objeto
//-----------------------------

var myjson = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}';
var obj = JSON.parse(myjson);


obj {name: "John Johnson", street: "Oslo West 16", phone: "555 1234567"} // ***El objeto no tiene comillas en su clave (key)



//Transformar en objecto literal en JSON
var toJson = JSON.stringify(obj);
toJson '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}';



// Convierto y consulto propiedades

var string = JSON.stringify({name: "X", born: 1980}); //<-- tengo un objeto

console.log(string); // {"name":"X","born":1980}  //<-- Lo convierto a JSON

JSON.parse(string).born; //  1980 <-- Leo una propiedad desde el parseo a objeto, pues no se podria como string json




/*----------------
FILTRAR ARRAY   
------------------

//  nombreArreglo.filter(function(el){return  ...prueba... ; });


Quitamos los valores inferiores a 10 */

//Tomo un objeto
var cifras = [12, 5, 8, 130, 44]

//Creo una funcion filtradora, pasando un argumento X
function sobreDiez(el) {
  return el >= 10;
}

//Filtro el array con un metodo, pasando el argumento discriminador a filtrar.
var filtrados = cifras.filter(sobreDiez); // <-- [12, 130, 44]






//EJ 2 PARSEAR UN JSON STRING:
//------------------------------


// Json como string
var ANCESTRY_FILE = "[\n  " + [
 '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
].join(",\n  ") + "\n]";


//Parceo el string json
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length); //2




//Funcion filter
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}



//Invoco el metodo de filtro. El primer parametro es la variable c la data, el segundo pasa la funcion de filtrado
filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}) // [{name: "Philibert Haverbeke", ...}, ...]








***********
JSON PARSER
***********

Ver ultimo capitulo de good parts