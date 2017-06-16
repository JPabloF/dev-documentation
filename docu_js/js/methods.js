/* METHODS

Javascrip incluye un set de metodos disponibles en los tipos standar

ver PDF GoodParts
*/

-------------------
//METODOS DE ARRAY
-------------------

array.concat(item...) // Concateno 2 arrays

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true); //* Aqui puedo agregar otra propiedad.
// c is ['a', 'b', 'c', 'x', 'y', 'z', true]



array.join(separator) // Junto los elementos, si no paso parametro, los pego. Si paso algo, separo c eso.

var a = ['a', 'b', 'c'];
var c = a.join('');
// c is 'abc';



array.pop( )  // Remueve el ultimo elemento del array y lo retorna.

var a = ['a', 'b', 'c'];
var c = a.pop( );
// a <--- ['a', 'b'] 

//c  <---  'c' (Queda afuera del array)  

//Forma alternativa:
Array.method('pop', function ( ) {
  return this.splice(this.length - 1, 1)[0];
});


array.push(item...) //Empuja elementos al final del array. Si pones un array lo mete dentro del otro array

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true);
// a is ['a', 'b', 'c', ['x', 'y', 'z'], true]
// c is 5; //El metodo devuelve el nuevo length del array.



array.reverse( ) // Invierte los datos

var a = ['a', 'b', 'c'];
var b = a.reverse( );
// both a and b are ['c', 'b', 'a']



array.shift( ) // Remueve el ultimo elemento del array y lo retorna

var a = ['a', 'b', 'c'];
var c = a.shift( );
// a is ['b', 'c'] & c is 'a'



array.slice(start, end) // Cuenta el inicio del index para coṕiar, y el ultimo antes del end

var a = ['a', 'b', 'c'];
var b = a.slice(0, 1); //  resulta ['a'], porque copia hasta antes del "end"
var c = a.slice(1); // resulta ['b', 'c'], porque comenzo a copiar desde el index 1 sin fin
var d = a.slice(1, 2); // resulta ['b'], porque copia hasta antes del "end"
//a   queda igual.



array.sort(comparefn)  //Ver mas en goodparts

var n = [4, 8, 15, 16, 23, 42];
n.sort( ); // [15, 16, 23, 4, 42, 8]



array.splice(start, deleteCount, item...) //Remueve y reemplaza con nuevos
                                          //El primer parametro es la posicion en el array
                                          // El segundo es el numero de elementos desde ESA posicion  
var a = ['a', 'b', 'c'];                  //  El tercero, insertara elementos a ESA posicion (y devuelve el elemento borrado)
var r = a.splice(1, 1, 'ache', 'bug');

// a is ['a', 'ache', 'bug', 'c']
// r is ['b']



array.unshift(item...)            //Engancha elementos al frente del array

var a = ['a', 'b', 'c'];
var r = a.unshift('?', '@');

// a is ['?', '@', 'a', 'b', 'c']
// r is 5, porque devuelve el nuevo length




--------------------
//Function
--------------------

function.apply(thisArg, argArray)

/*

El método apply invoca una funcion, pasando el objeto que sera ligado a esto y un arreglo de argumentos
opcional. El metodo apply es usado en el pattern de invocacion
(Chapter 4):*/




Function.method('bind', function (that) {

// Return a function that will call this function as though it is a method of that object.
var method = this,
  slice = Array.prototype.slice,
  args = slice.apply(arguments, [1]);
return function ( ) {
  return method.apply(that,
    args.concat(slice.apply(arguments, [0])));
};
});

var x = function ( ) {
  return this.value;
}.bind({value: 666});
alert(x( )); // 666


//Object

object.hasOwnProperty(name)

/*The hasOwnProperty method returns true if the object contains a property having the name .
The prototype chain is not examined. This method is useless if the name is hasOwnProperty :*/7

var a = {member: true};
var b = Object.create(a); // from Chapter 3
var t = a.hasOwnProperty('member'); // t is true
var u = b.hasOwnProperty('member'); // u is false
var v = b.member; // v is true
 


//STRING

string.charAt(pos)

var name = 'Curly';
var initial = name.charAt(0); // initial is 'C'




string.charCodeAt(pos)

var name = 'Curly';
var initial = name.charCodeAt(0); // initial is 67


string.concat(string...)
var s = 'C'.concat('a', 't');// s is 'Cat'




string.indexOf(searchString, position)

var text = 'Mississippi';
var p = text.indexOf('ss'); // p is 2
p = text.indexOf('ss', 3);  // p is 5
p = text.indexOf('ss', 6);  // p is -1



string.lastIndexOf(searchString, position)

var text = 'Mississippi';
var p = text.lastIndexOf('ss'); // p is 5
p = text.lastIndexOf('ss', 3); // p is 2
p = text.lastIndexOf('ss', 6); // p is 5



string.replace(searchValue, replaceValue)

string.slice(start, end)

string.split(separator, limit)

string.substring(start, end)



string.toLocaleLowerCase( )

string.toLocaleUpperCase( )

string.toLowerCase( )

string.toUpperCase( )

String.fromCharCode(char...)