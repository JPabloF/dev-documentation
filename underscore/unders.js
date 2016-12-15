// Documentación Underscore

//Each en arreglo
(function(){

	var beatles = ["John", "Paul", "Ringo", "George"];
								//name o value, indexo key	
		_.each(beatles, function(name, index){
			console.log("mi name es: " + name);
			console.log("mi index es: " + index);
		});
}());

//Each en objeto
(function(){
	var paul = {name: "Paul", age:70, instrument:"bass"};
								//name o value, indexo key	
		_.each(paul, function(value, key){
			console.log( key + ":" + value);
		});
}());

//MAP en array
(function(){
	var numeros = [1, 2, 3];						  //valor individual, index, Referencia del arreglo original
	var numerosMultiplicados = _.map(numeros, function(value, index, items){

		console.log(items[index]); //<-- [<1>, 2, 3] [0] ----> 1 	* 2 = 	2
								   //	 [1, <2>, 3] [1] ----> 2 	* 2 = 	4
								   //	 [1, 2, <3>] [2] ----> 3 	* 2 = 	6

		items[index] = items[index]*2 //<--- 2, 4, 6



		return value *  3  ;    //<-- Devolverá el valor multiplicado por 3 [3,6,9]

		console.log( value);  //<-- 1...   2.... 3...
		console.log( index);  //<-- 0, 1, 2
		console.log( items); //<-- [1, 2, 3]
	});

	console.log("multiplicado por 2 : " + numeros);
	console.log("valor numerosMultiplicados :" + numerosMultiplicados)

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
		{name: "Mike", age: 27},
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
