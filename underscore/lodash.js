/* Documentación LODASH
Libreria de funciones


console.table (Despliega una tabla)


*/ 



//BUSCAR ELEMENTOS EN UN ARRAY
-------------------------------
//IndexOf
// ... first, last, rest, etc


var beatles = ["John", "Paul", "Ringo", "George"];


_.indexOf(beatles, "George"); // -> 3






//MANIPULAR ELEMENTOS EN UN ARRAY
-----------------------------------

//unique
var beatles = ["John", "Paul", "Ringo", "George", "Paul"];

_.unique(beatles); //- > ["John", "Paul", "Ringo", "George"]. Junta a paul que estaba 2 veces. 


// zip
// union and intersection (Junta las listas excluyendo los repetidos e interseccion los que figuran en ambas listas)

var beatles = ["John", "Paul", "Ringo", "George"];

var instruments = ["guitar", "bass", "drums", "guitar"];

_.zip(beatles,instruments); // -> [Array[2], Array[2], Array[2], Array[2]] 	
							/* [["John", "guitar"],
								["Paul", "bass"],
								["Ringo", "drums"],
								["George", "guitar"]]	*/



// Creando y usando objetos
----------------------------

var beatle = {
	name: "John",
	instrument: "Guitar",
	age: 40,
	sings: function(){console.log("love me do");}

};



var Beatle = function(){
	this.name ="Nombre genérico";}

_.create(Beatle.prototype, {name:"George"}); //-> Beatle {name: "George"}



_.keys(beatle) // ->	["name", "instrument", "age", "sings"]

_.values(beatle) //->	["John", "Guitar", 40, function]



_.pairs(beatle); //->		[Array[2], Array[2], Array[2], Array[2]] Crea array bidimensional

							/* [["name", "John"],
								["instrument", "Guitar"],
								["age", "40"],
								["sings", [function]]]	*/



//Pasa a mayusculas todos los values. Esto es un ejemplo de manipular objetos, en este caso values.

_.mapValues(beatle, function(value){
	if(_.isString(value)){
		return value.toUpperCase();
	}
	return value;
}); // -> Object {name: "JOHN", instrument: "GUITAR", age: 40}




//Detectando types
--------------------
//isString, isNumber, isArray, isRegExp, etc



//Copiar y clonar objetos
--------------------------

var beatle = {
	name: "John",
	instrument: "Guitar",
	age: 40,
	sings: function(){console.log("love me do");}

};


var beatle2={} //-> Object {}	Creo un nuevo objeto

		//toma un destino, y una fuente
.assing(beatle2,beatle)


beatle2//->	Object {name: "John", instrument: "Guitar", age: 40}


		 //Omite una propiedad, en este caso la funcion, pero puede omitir cualquiera
beatle3 = _.omit(beatle, 'instrument') // -> {name: "John", age: 40} 


		 // Paso un array con la lista de propiedades a copiar.
beatle4 = _.pick(beatle, ['name','instrument']); // -> Object {name: "John", instrument: "Guitar"}



//Para clonar objetos con distintos metodos, es util mirar las propiedades de comparación
.clone(beatle); //-> Object {name: "John", instrument: "Guitar", age: 40}

_.cloneDeep(beatle);//-> Object {name: "John", instrument: "Guitar", age: 40}



// Reutilizando código con Mixins
---------------------------------


var beatle = { name : "John"}

var singsFunc = { sings: function(){console.log("love me do");}}

_.mixin(beatle, singsFunc);

beatle.sings(); //-> love me do



var coverBand = {}

_.mixin(coverBand, singsFunc);

coverBand.sings(); //-> love me do





//Buscando data en collections
-------------------------------


var beatles = [
		{name: "John", instrument: "Guitar", age: 42},
		{name: "Paul", instrument: "Bass", age: 41},
		{name: "George", instrument: "Guitar", age: 39},
		{name: "Ringo", instrument: "Drums", age: 43},						
	]

//Busca segun su numero de index
_.at(beatles, [0,2,3]); //->	[Object, Object, Object]



//Busca un elemento según una propiedad
_.find(beatles, function(beatle){ return beatle.name == 'George'});
Object {name: "George", instrument: "Guitar", age: 39}


//Map actua como pluck. Arranca los valores  de una propiedad y los devuelve como un nuevo arreglo

_.map(beatles, "name"); //->	["John", "Paul", "George", "Ringo"]


//TIP Ecma 6 contiene un metodo clip

beatles.map(beatles => beatles.name)
["John", "Paul", "George", "Ringo"]




//Filtering collection
----------------------

// Toma los que cumplen la condicion
_.filter(beatles, function(beatle){ return beatle.instrument == "guitar"}); //-> [Object, Object]  (John y george)
_.filter(beatles, {'instrument': "Guitar"});

//Toma los que no cumplen la condicion
_.reject(beatles, function(beatle){ return beatle.instrument == "guitar"}); //-> [Object, Object]  (John y george)
_.reject(beatles, {'instrument': "Guitar"});



_.some(beatles, {'instrument': "Guitar"});
true
_.every(beatles, {'instrument': "Guitar"});
false




//Categorizando elementos
---------------------------

_.countBy(beatles, function(beatle){return beatle.instrument;} //-> Object {Guitar: 2, Bass: 1, Drums: 1}
_.countBy(beatles, 'instrument');

_.groupBy(beatles, 'instrument');//-> Object {Guitar: Array[2], Bass: Array[1], Drums: Array[1]}




var guitarrists = _.groupBy(beatles, 'instrument').Guitar;
guitarrists //-> [Object, Object] John y George


_.map(guitarrists, 'age'); //->	[42, 39] Obtengo un arrreglo con las edades especificas, o sea, valores de propiedad.



_.sortBy(beatles, ['name', 'instrument']); //-> Array de 4 objetos. George... John... Paul... Ringo





//Funciones estaticas y random
-------------------------------



_.random(1, 10); //-> 6.... 8, lo que sea


_.at(beatles, _.random(0, _.size(beatles)-1)); //-> [Object] ... George, o el que salga


_.sample(beatles) //-> Object {name: "George", instrument: "Guitar", age: 39}


_.shuffle(beatles);// ->[Object, Object, Object, Object]



//MAP y reduce collections
-------------------------------


//Toma una coleccion, y retorna un array editado.

_.map(beatles, function (beatle){ return beatle.age + " years old"}); //-> ["42 years old", "41 years old", "39 years old", "43 years old"]




_.reduce(_.map(beatles, "age"), function(sum, nextNum){ return sum + nextNum}); //-> 165




// Timmers
//ver throttling, debounce and delay ejecuciones de funciones





//Chaining
------------


_.chain(beatles).
	filter({ instrument: "Guitar", age: 42}).
	map(function(el){return el.name + " is older"}).
	first().
	value() //value retorna el valor del chain
"John is older"



_(beatles).
	filter({ instrument: "Guitar", age: 42}).
	map(function(el){return el.name + " is older"}).
	first()
"John is older"


*****Investigar mas Chaining



//Binding
--------------------

var john = {name: "John", instrument: "Guitar", age: 42};

var sings = function(){ console.log(this.name)}; //Almacenamos una funcion con this
sings(); // Arroja undefined, porque el this no apunta nada

var singsFunc = _.bind(sings, john); //Almaceno en una variable la vinculacion de sings con john


singsFunc(); // -> John. Porque Ahora la variable almacena el objeto vinculado a la funcion.



/*****************
 TEMPLATES
******************


<%  %> - Para ejecutar codigo

<%= %> - Para imprimir valores en el HTML

<%- %> - to print some values HTML escaped 

*/


var tpl = _.template("<h1>Some text: <%= foo %></h1>");



console.log( tpl( {foo: "Template1 in console"} ) ); //Impresion a la consola


$('#tmpl1').append( tpl( {foo: "Template1 in DOM"} ) ); //Impresion al DOM




(function(){
var dataPeople = [
	{name: "Tom",  age: 21, active: true},
	{name: "Jack", age: 25, active: true},
	{name: "Mike", age: 21, active: true},
	{name: "Mig",  age: 21, active: true},
	{name: "Jack", age: 25, active: true},
	{name: "Kate", age: 21, active: false},	
	{name: "John", age: 28, active: true}
];



filteredData = _.where(dataPeople, {active: true}), //<-- Devuelve todos los objetos que sean "active:true"

tmplList = _.template( $('#tmpl2').html() ); //<-- Usando "html() extraigo la estructura del elemento #tmpl2 y la almaceno"


//Apendeo la info con variables
	$('.containerPeople').append( tmplList({ list: _.where(filteredData) }) );


//Misma estructura decompilada:
	//$('.containerPeople').append( tmplList({ list: _.where(dataPeople, {active: true}) }) ); 




}());