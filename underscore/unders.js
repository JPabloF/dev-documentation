//Each en arreglo
(function(){

	var beatles = ["John", "Paul", "Ringo", "George"];
								//name o value, indexo key	
		_.each(beatles, function(name, index){
			console.log("mi name es: " + name);
			console.log("mi index es: " + index);
		});
}());

//Each en objeto literal
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
