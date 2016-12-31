/* Documentación Underscore
Libreria de funciones


_.each:  	Lista cada index y value de un array
_.each:  	Lista cada key y value en un objeto

_.map :  	Cuando queremos transformar el array. ( Tambiém itera por valor, index e items en conjunto).





_.filter: 	Busca todas las coincidencias de elementos
_.where: 	Devuelve todos los objetos con el parametro indicado


_.find : 	Busca la primera coincidencia de elemento

_.reject: 	Saca del arreglo los elementos encontrados
_.every: 	Itera todos los elementos devolviendo true o false 
_.some: 	Itera para saber si algun elemento cumple
_.contains: Itera para buscar un elemento contenido
_.invoke: 	Itera los elementos en funcion de algo
_.pluck: 	Busca una propiedad y devuelve sus elementos en un array

_.reduce: 	Reduce el arreglo a un valor, sumando o restando
_.max: 		Ordena de mayor a menor
_.min: 		Ordena de menor a mayor


_.sortBy: 	Ordena los elementos en orden ascendente
_.groupBy:  Agrupa los elementos del objeto bajo el nombre del parametro indicado
_.indexBy:  Agrupa los elementos del array bajo el nombre del parametro indicado

_.countBy:  Agrupa los elementos por tipo en diferentes criterios asignados

_.shuffle: 	Randomiza valores
_.sample:  	Retorna un ejemplo de la lista
_.toArray:  Recorta a un arreglo los argumentos

_.size:     Cuenta los elementos del array
_.partition:     Divide el array segun un criterio

_.first: 	Busca el primer elemento
_.initial: 	Retorna cada valor excepto el ultimo
_.last: 	Muestra el valor final
_.rest: 	El resto de valores desde cierto punto

_.compact: 	Remueve los valores falsos
_.flatten: 	Pone toda la anidación de un array al mismo nivel

_.whitout: 	Quita el valor indicado
_.union: 	Junta 2 arrays
_.intersection: 	Separa los valores repetidos

_.difference: Separa los valores que son diferentes del primer c el segundo array
_.uniq:       Separa el valor unico conservando el primer unico encontrado



*/

//Each en arreglo
(function(){

	var beatles = ["John", "Paul", "Ringo", "George"];
								//value, index
		_.each(beatles, function(name, index){
			console.log("mi value es: " + name);
			console.log("mi index es: " + index);
		});
}());

//Each en objeto literal
(function(){
	var paul = {name: "Paul", age:70, instrument:"bass"};
								//name o value, index o key	
		_.each(paul, function(value, key){
			console.log( key + ":" + value); //<-- Lista los keys y valores de un objeto
		});
}());



//MAP en array. Devuelve nuevos arreglos con return
(function(){
	var numeros = [1, 2, 3];						  //value, index, array
	var numerosMultiplicados = _.map(numeros, function(value, index, items){

		console.log(items[index]); //<-- [<1>, 2, 3] [0] ----> 1 	* 2 = 	2
								   //	 [1, <2>, 3] [1] ----> 2 	* 2 = 	4
								   //	 [1, 2, <3>] [2] ----> 3 	* 2 = 	6

		items[index] = items[index]*2 //        * 2 = 	2
									  //		* 2 = 	4
									  //        * 2 = 	6

		return value *  3  ;    //<-- RETURN. Así devolverá el valor multiplicado por 3 [3,6,9]

		// console.log( value );  //<-- 1...   2.... 3...
		// console.log( index );  //<-- 0, 1, 2
		// console.log( items ); //<-- [1, 2, 3]
	});

	console.log("multiplicado por 2 : " + numeros);
	console.log("valor numerosMultiplicados :" + numerosMultiplicados)


	//Ex  de uso 2
	//----------------------------------

	//1.- Llamada a json como "data"...

	//2.- Funcion refresh del json como "data"

	function gotSomeDataJSON(data){
		console.log(data);

								//dato e index
		function outputFunction(dato, i){
			$('.divDestino').append('<div>' + dato.somePropToPrint + '</div>');
		}
	}


	function transformData(dato){
		//Podria retornar un objeto con ciertas modificaciones
		return{
			date : new Date (dato*1000), //Puedo modificar algun valor
			duration : dato.duration //Puedo almacenar el dato pedido tal como es
		}
	}

					 //La info recibida, el json data. El response podria ser el callback?
									 //esto puede ser una funcion
	var nuevosDatos = _.map(data.response, transformData);

		  //utilizo el nuevo arreglo mapeado y la funcion de appendeo al DOM
	_.each(nuevosDatos, outputFunction);

}());


//Reduce
(function(){
	var numeros = [1, 2, 3];

									//valor funcionamiento, items, index, array original
	var sum = _.reduce(numeros, function(total, item, index, numeros){
		return total + item
	});
	console.log(sum); //<-- 6   ...1 + 2 + 3						

	var resta = _.reduce(numeros, function(total, item, index, numeros){
		return total - item
	});
	console.log(resta);	//<-- -4    ...1 - 2 - 3

}());



//FIND & FILTER
(function(){
	var numeros = [1, 2, 3, 4 , 5 , 6];

	//find encuentra solo la primera coincidencia y para
	var found = _.find(numeros, function(num){

		return num % 3 == 0;
	})

	console.log("el primero encontrado es: " + found);

	//filter busca todas las coincidencias
	var found = _.filter(numeros, function(num){

		return num % 3 == 0;
	})

	window.result = found; //<-- Así la puedo rescatar desde afuera
	console.log("todos los que encontre son : " + found);

}());



//WHERE & FIND WHERE
(function(){
	var people = [
		{name: "Tom",  age: 21},
		{name: "Jack", age: 25},
		{name: "Mike", age: 21},
		{name: "John", age: 28}
	];

	//var found = _.findWhere(people, {age:21}); //<-- findWhere: Solo devuelve el primero
	var found = _.where(people, {age:21});	     //<-- where:	Devuelve todos los objetos
	console.log(found);

}());



//REJECT
(function(){
	var numeros = [1, 2, 3, 4 , 5 , 6];

	//Saca del arreglo los elementos encontrados.
	var inpares = _.reject(numeros, function(number){

		return number % 2 == 0;
	})

	console.log("inpares: " + inpares);

}());


//EVERY
(function(){
	var numeros = [1, 2, 3, 4 , 5 , 6];

	//Itera para saber si todos los elementos cumplen la condicion
	var truth = _.every(numeros, function(number){

		return number > 0 ; //<-- True: Porque todos son mayores que 0
		return number > 1 ; //<-- False: 1 no es mayor que 1

	})

	console.log("Son mayores que 1: " + truth);

}());


//SOME
(function(){
	var numeros = [1, 2, 3, 4 , 5 , 6];

	//Itera para saber si alguno coincide
	var truth = _.some(numeros, function(number){

		return number > 5 ; //<-- True: Porque  6 es mayor
		return number > 8 ; //<-- False: ninguno es mayor

	})

	console.log("Alguno es mayor que 5: " + truth);

}());

//CONTAINS
(function(){
	var numeros = [1, 2, 3, 4 , 5 , 6];

	//Itera para saber si contiene el elemento
	var truth = _.contains(numeros, 3)

	console.log("Contiene 3: " + truth); //<-- True

}());


//INVOKE
(function(){
	var numeros = [1, 2, 3];

	function multiply(optional){
		return this*2 * optional;
	}

	var result = _.invoke(numeros, multiply, 5); //<-- Primero por 2 = 2, luego por 5 = 10, 20, 30
	console.log(result);

}());


//PLUCK
(function(){

	var people = [
		{name: "Tom",  age: 21},
		{name: "Jack", age: 25},
		{name: "Mike", age: 27},
		{name: "John", age: 28}
	];

	var names = _.pluck(people, 'name');//<-- Indicamos que propiedas extraer
	console.log(names); //<-- Nos pasa un ARRAY nuevo con los nombres

}());


//MAX
(function(){

	var numeros = [1, 2, 3];

	var max = _.max(numeros);
	console.log("el mayor es " + max);


	var people = [
		{name: "Tom",  age: 21},
		{name: "Jack", age: 25},
		{name: "John", age: 28}
	];

	var older = _.max(people, function(person){
		return person.age;
	});
	console.log(older);

}());


//MIN
(function(){

	var numeros = [1, 2, 3];

	var minus = _.min(numeros);
	console.log("el menor es " + minus);


	var people = [
		{name: "Tom",  age: 21},
		{name: "Jack", age: 25},
		{name: "John", age: 28}
	];

	var younger = _.min(people, function(person){
		return person.age;
	});
	console.log(younger);

}());


//sortBY
(function(){


	var cars = ["toyota", "subaru", "ford"];

	//Devuelve un array con orden ascendente
	var sorted = _.sortBy(cars);//<-- Si paso una funcion como parametro, puedo obtener el length
	console.log(sorted);


	//Devuelve un array de objetos con orden ascendente
	var carStats = [
		{name: "Toyota",  speed: 150},
		{name: "Subaru", speed: 180},
		{name: "Ford", speed: 140}
	];

	var speedSorted = _.sortBy(carStats, 'speed');
	console.log(speedSorted);

}());


//groupBy
(function(){

	//En ARRAY
	var cars = ["toyota", "subaru", "Mitsubichi"];

	//Devuelve 2 objetos con arrays, usando la propiedad de grupo
	var grouped = _.groupBy(cars, "length");//<-- Si paso una funcion como parametro, puedo obtener el length
	console.log(grouped);//<--  Object {6: Array[2], 10: Array[1]}
						 //<-- 	grouped[6] ["toyota", "subaru"], grouped[10] ["Mitsubishi"], 

    //En OBJECT
	//Devuelve 2 objetos con arrays, usando la propiedad de grupo
	var carStats = [
		{name: "Toyota",  speed: 140},
		{name: "Subaru", speed: 180},
		{name: "Ford", speed: 140}
	];

	var speedSorted = _.groupBy(carStats, 'speed');
	console.log(speedSorted); //<-- Devuelve Object {140: Array[2], 180: Array[1]}

}());


//indexBy
(function(){

	var cars = ["toyota", "subaru", "Mitsubichi"];

	//Devuelve 2 objetos con arrays, usando la propiedad de grupo
	var grouped = _.groupBy(cars, "length");//<-- Si paso una funcion como parametro, puedo obtener el length
	console.log(grouped);//<--  Object {6: Array[2], 10: Array[1]}
						 //<-- 	grouped[6] ["toyota", "subaru"], grouped[10] ["Mitsubishi"], 


	//Devuelve 2 objetos con arrays, usando la propiedad de grupo
	var carStats = [
		{name: "Toyota",  speed: 140},
		{name: "Subaru", speed: 180},
		{name: "Ford", speed: 140}
	];

	var speedSorted = _.groupBy(carStats, 'speed');
	console.log(speedSorted); //<-- Devuelve Object {140: Array[2], 180: Array[1]}


}());



//countBy
(function(){

	var numbers = [1,2,3,4,5];

	var counted = _.countBy(numbers, function(number){
		return number % 2 == 0 ? "even" : "odd";
	})

	console.log (counted);


}());


//shuffle
(function(){

	var numbers = [1,2,3,4,5];

	var shuffled = _.shuffle(numbers);

	console.log (shuffled);

}());


//Sample
(function(){

	var numbers = [1,2,3,4,5];

	var sampled = _.sample(numbers);
	//var sampled = _.sample(numbers, 3);  Se puede pedir la cantidad de ejemplos

	console.log (sampled);

}());


//toArray
(function(){

	var arr = _.toArray(arguments).slice(1);

	console.log(arr);

}("Tom", "Nick", "Jack"));



//SIZE
(function(){

	var count = _.size([1,2,3,4]);

	console.log(count);

}());



//Partition
(function(){

	var people = ["Tom", "Nick", "Alexander"];

	var grouped = _.partition(people, function(person){

		return person.length > 3;
	})

	console.log(grouped);

}());


//First
(function(){

	var numbers = [1,2,3,4,5];

	console.log(_.first(numbers));

}());



//First
(function(){

	var numbers = [1,2,3,4,5];

	console.log(_.initial(numbers));
	//console.log(_.initial(numbers, 2));	Puedo especificar cuantos antes del final

}());



//LAST
(function(){

	var numbers = [1,2,3,4,5];

	console.log(_.last(numbers));
	//console.log(_.last(numbers, 2));	Puedo especificar cuantos al final

}());



//REST
(function(){

	var numbers = [1,2,3,4,5];

	console.log(_.rest(numbers));
	//console.log(_.rest(numbers, 2));	Puedo especificar cuantos despues

}());



//COMPACT
(function(){

	var things = [1, 0, '', true, "tom"];

	console.log(_.compact(things));

}());


//FLATTEN
(function(){

	var numbers = [1,2,[3],[[4]],5];

	console.log(_.flatten(numbers));
	console.log(_.flatten(numbers,true)); // Aqui solo flatea hasta el primero y el resto no

}());


//WHITOUT
(function(){

	var numbers = [1,2,3,4,5];

	console.log(_.without(numbers, 3));
	console.log(_.without(numbers, 3,4,5));

}());


//UNION
(function(){

	var arrayOne = [1,2,3,4,5];
	var arrayTwo = [6,7,8,9,10];

	console.log(_.union(arrayOne, arrayTwo));

}());


//INTERSECTION
(function(){

	var arrayOne = [1,2,3];
	var arrayTwo = [3,4,5];

	console.log(_.intersection(arrayOne, arrayTwo));

}());

//DIFFERENCE
(function(){

	var arrayOne = [1,2,3];
	var arrayTwo = [3,4,5];

	console.log(_.difference(arrayOne, arrayTwo)); //1 y 2 no están presentes en el segundo, eso imprime

}());


//UNIQ
(function(){

	var arrayOne = [1,2,3,3,4,5];

	console.log(_.uniq(arrayOne));


	var people = [
		{name: "Tom",  age: 21},
		{name: "Jack", age: 25},
		{name: "Harry", age: 21}
	];

	console.log(_.uniq(people, false, function(person){
		return person.age; //Devolvera solo el que tiene diferente edad


	}));

}());


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