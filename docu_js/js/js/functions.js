/*FUNCIONES


- Las funciones son objetos, y los objetos pueden tener metodos

- Las funciones son objetos, y pueden tener propiedades.

- Como objetos pueden ser accesados, copiados, sobreescritos, etc. 

- La caracteristica especifica con otros objetos es la propiedad interna [[Call]], indica que puede ser ejecutado.

- Si no devuelve explícitamente un valor, implícitamente devuelve el valor "undefined"

- Una función solo puede devolver un valor.

- Si se necesita devolver mas de un valor, se puede devolver un array o un objeto con esos valores





/* ESTRUCTURA DE LA FUNCION
***************************************/

functionName(parametro, parametro2){
  //codigo a ejecutar en el function body
}

/*** Puede no requerir parametros, pero si los requiere y no se les pasa, se asignará el valor "undefined"






/* arguments OBJECT
***************************************
Cuando se llama una funcion, una variable especial "arguments" es adherida al ambiente del body

Refiere a un objeto que mantiene todos los argumentos/parametros pasados a la funcion




/* TIPOS DE FUNCIONES
***************************************


FUNCION DECLARADA
--------------------------------------

- No lleva punto y coma al final
- comienza con "function" 
- Saltan al tope del scope*/

function nombreFuncion(){
  //... code
}




/* FUNCION EXPRESADA
----------------------------------------
- Puede ser anonima
- No lleva un nombre propio
- Tipicamente referenciadas en una variable
- Se usan donde otros valores también pueden ser usados, como argumentos, parametros, valores, etc*/

var foo = function(){
  //... code
}


/* Funciones como value:
------------------------------------------

- Podemos usar funciones en cualquier lugar donde usariamos un reference value:
- Pueden ser pasadas como cualquier objeto.*/

function sayHello() {
  console.log("Hi!");
}

sayHello();// outputs "Hi!"

var sayHi2 = sayHello;

sayHi2(); // "Hi!" (Se va pasando como objeto) <-- Puedo llamar una funcion con parentesis en la variable();



/* Parametros
------------------------------------------

- Los parametros de funcion son almacenados con una estructura tipo array llamada "arguments", pero no es instancia array
- "arguments" puede crecer y contener cualquier numero de values, via indice numerico [0]...[1] etc
- el objeto "arguments" esta disponible en toda funcion
- El numero de argumentos se almacena en la propiedad "length"*/


//EJ: Usando parametro

function reflect(value) {
  return value;
}

reflect("Hi!");// "Hi!" <--- Le paso un parametro, y me lo devuelve con return
reflect("Hi!", 25);// "Hi!" <-- Le paso 2 parametros, pero solo hace match el [0] y el otro sobra
reflect.length;// 1 <-- Es uno, porque tiene un length de 1 parametro.


//EJ: Usando el objeto arguments en el body

reflect = function() {
  return arguments[0]; //<-- Pide devolver el argumento que pase al index[0]
};

reflect("Hi!");// "Hi!" <-- funciona porque paso un argumento, y me pide devolver el que se pase a [0]
reflect("Hi!", 25);// "Hi!" <-- devuelve el [0] y no el [1]
reflect.length;// 0 <-- Porque si no paso nada, no tiene nada que contar



/*Funciones anidadas
***************************************/


var a = "hola";

function global(){
  var b = "que";

  function local(){
    var c = "tal";
    return a + b + c;
  }
  return local;
}

global()(); // "holaquetal"

var foo = global();
foo(); // "holaquetal"





/*FUNCIONES PRE DEFINIDAS
***********************************/

parseInt()    // <-- redondea a entero, se recomienda utilizar 10   EJ: parseInt(15.99, 10);   >>  15

parseFloat() //<-- Intenta transformarlo en decimal   EJ: parseFloat('1.23')  >>  1.23

isNaN()      // <-- Comprueba si el valor pasado no es un numero  EJ: isNaN(NaN)  >>  true

isFinite()  // <-- comprueba si el valor que se le pasa no es ni Infinity ni NaN  isFinite(12)  >> true

encodeURI()  // Nos permite ‘codificar’ una URL reemplazando algunos caracteres por su correspondiente secuencia de escape UTF-8

decodeURI()  // Nos permite ‘decodificar’ un string codificado por encodeURI()

encodeURIComponent()

decodeURIComponent()

eval()  // eval() toma una cadena de texto y la ejecuta como código Javascript





/**********************************
  FUNCIONES CLOSURES
***********************************

Un closure se crea cuando una funcion mantiene un enlace con el ámbito (scope) de la función
padre incluso después de que la función padre haya terminado.

Las variables internas no se pueden leer si no es con metodos privilegiados (funciones internas)

Combina una función y el acceso a las variables privadas regeneradas en cada invocación

La función definida en el closure "recuerda" el entorno en el que se ha creado.

Manejan variables independientes regeneradas cada vez q se llaman. 

scope chain (encadenamiento de ámbitos) es cuando la funcion interna tiene acceso a su scope como al de su padre */




//EJ 1:

function inicia() {

  var nombre = "Mozilla"; // 'nombre' es una variable local creada por la función 'inicia', no es accesible desde afuera
  
  function muestraNombre() { // 'muestraNombre' es una función interna (un closure), definida dentro de "inicia()"
    console.log(nombre); // dentro de esta función usamos una variable declarada en la función padre ( en este caso "nombre")
  }
  muestraNombre(); // muestraNombre() no tiene ninguna variable propia, lo que hace es reutilizar la variable nombre declarada en la función externa.
}


inicia(); // <--- Mozilla
inicia.nombre; //<-- Undefined
inicia.muestraNombre(); //<-- not a funcion






//EJ 2: 

function creaFunc() {

  var nombre = "Mozilla";
  
  function muestraNombre() {
    console.log(nombre);
  }
  return muestraNombre; //<-- Devuelve esta funcion interna antes de ejecutarla
}


creaFunc(); //<-- Nos pasa la funcion escrita
var miFunc = creaFunc();  //<-- toma la funcion interna "creaFunc()" y la almacena.
miFunc();  //<-- MiFunc se convierte en closure, y se puede ejecutar.

// *** El entorno de este closure son las variables locales que estaban dentro del alcance en el momento que se creó el closure.



//EJ 3: 

function multiplier(factor) {

  //var foo; <-- No utilizamos una variable privada, porque el parametro ("AKA. factor") actua como tal
  return function(number) {
    return number * factor;
  };
}

var porDos = multiplier(2); //<-- toma el equivalente a  factpr = 5     ...function(number){return number * 2;}
var porTres = multiplier(3); //<-- factor = 3

porDos(5);  // 10 <-- Invoco la funcion pasando el argumento faltante interno "5". Entonces, 2*5 = 10
porTres(3); // 9  <-- Ambas son closures, comparten la misma definicion pero actuan como entornos de valores distintos


//*** multiplier() toma un argumento unico (factor) y devuelve otra funcion de argumento unico (number) con una multiplicacion




//EJ 4:

//No estamos asignando una funcion a myObject, sino el RESULTADO de invocar esa funcion
var myObject = function ( ) {

  var value = 0; //<-- variable privada

  return {

    increment: function (inc) {
      value += typeof inc === 'number' ? inc : 1;
    },

    getValue: function ( ) {
      return value;
    }
  };
}( ); // <-- Aqui estamos pidiendo el resultado de la ejecucion: Devuelve un objeto con 2 metodos, de acceso privilegiado.



myObject.increment("foo"); //<-- Invoco el metodo en el objeto.
myObject.getValue(); //1 <-- no pasé un parametro "number", entonces sumo 1


/*-------------------
  SCOPE LEXICO 
--------------------

Las funciones crean su entorno (scope, a qué variables tienen acceso) cuando son definidas, NO cuando son ejecutadas*/


var a = 123;

function foo() {
  console.log("primer log " + a);
}

foo(); //  primer log 123





var a = 123;

function foo() {
  console.log("primer log " + a);
  var a = 1; //<-- al definir esta variable dentro del bloque, sobreescribe el scope, pero queda undefined por hacerlo dp
  console.log("segundo log " + a);
}


foo();//  primer log undefined
    //  segundo log 1



/* CALLBACKS (Asincrono)---> Maneja eventos discontinuos
**********************************************************

- Usamos un callback para una respuesta, junto con una funcion que se retorna de inmediato sin esperar.

-  el callback se invoca dentro de la funcion

- Se crea pasando una funcion como parametro de otra*/


//EJ 1

// define our function with the callback argument
function some_function(arg1, arg2, callback) {
  // this generates a random number between
  // arg1 and arg2
  var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
  // then we're done, so we'll call the callback and
  // pass our result
  callback(my_number);
}
// call the function
some_function(5, 15, function(num) {
  // this anonymous function will run when the
  // callback is called
  console.log("callback called! " + num);
});








//EJ:

//Hacemos un request asincrono, pasando un callback function que sera invocado cuando la respuesta es recibida
// Una funcion asincrona es devuelta de inmediato, y el cliente no queda esperando

request = prepare_the_request();

                    //Llama ahora,   //Se llamara al estar "response disponible"
  send_request_async(request, function (response) {
  display(response);
});

/*se pasa un parametro de funcion a "send_request_async", que sera llamado cuando "response" este disponible*/



//EJ: Reportar ordenes con minions

                    //equivale a "orders", en este caso el objeto
function reportOrders (minionOrders) {
    if ( typeof minionOrders === "string"){
        console.log(minionOrders);
    }
    else if ( typeof minionOrders === "object"){
        for (var item in minionOrders) {
            console.log(item + ": " + minionOrders[item]);
        }
    }
}
                  //el objeto, //reportOrders func, "callback" es sólo un parametro de reemplazo para la funcion 
​function speakOrders (orders, callback) { 
    callback(orders); //<-- equivalente a "reportOrders(orders)", que apunta hacia la funcion "de arriba"
}


// Cuando llamamos "speakOrders", Pasamos reportOrders como parametro.​
              //estado a reportar                          // callback, Sera la funcion llamada de vuelta dentro de speakOrders function​
speakOrders({name:"Minion1031", speciality:"escribano"}, reportOrders);









/* THIS
***************************************

- En scope global "this" representa el objeto global (la window)

- Si una funcion vinculada a un OBJETO es llamada, el "this" es igual a ese objeto.

- "this" es establecido cuando la funcion es llamada*/



// EJ: Uso de "this" en contexto

function sayAllNames(){
  console.log(this.name);
}

var person1 = {
 name: "Nick",
 sayName: sayAllNames //Aquí llama a la funcion de arriba, "this.name", refiere a Nick, porque ahora "name" apunta  adentro del objeto
};

var name = "Mike"; // Aquí la variable es global, entonces fuera del scope de funciones, "this" refiere a Mike.


//Aqui llamo a las funciones dentro del objeto

person1.sayName();// responde Nick
sayAllNames(); // responde Mike





/* METODOS DE MANIPULACION DE "this"  */


/* Call();
*********************
- Ejecuta la funcion determinando un valor para "this" particular mediante parametros.
- El primer parametro del call(); es el valor para "this" cuando la funcion se ejecuta.*/

                  // 
function sayAllNames(label){
  console.log(label + ":" + this.name);
}

var person1 = {
 name: "Nick"
 // Ya no se necesita adherir la funcion directamente, gracias al metodo call.
};

var name = "Mike";


//Ahora accedo al objeto como método

sayAllNames.call(this); // "Mike", porque estoy llamando al "this" global
sayAllNames.call(person1); // "Nick", porque estoy llamando al "this" person1*/

sayAllNames.call(this, "global"); // "global:Mike", el segundo parametro se pasa al label, el otro es el nombre
sayAllNames.call(person1, "person1"); // "person1:Nick", el segundo parametro se pasa al label, el otro es el nombre




/* apply();
*********************

- Sólo acepta 2 parámetros. El valor for this y un array
- Si se trabaja con un array se usa apply, si se trabaja con variables individuales, se usa call()*/

function sayAllNames(label){
  console.log(label + ":" + this.name);
}

var person1 = {
 name: "Nick"
};

var name = "Mike";

sayAllNames.apply(this, ["global"]); // "global:Mike", el segundo parametro se pasa al label
sayAllNames.appky(person1, ["person1"]); // "person1:Nick", el segundo parametro se pasa al label*/


/* bind ();
******************/

function sayAllNames(label){
  console.log(label + ":" + this.name);
}

var person1 = {
 name: "Nick"
};

var person2 = {
 name: "Joe"
};



                                //enlazo la funcion a person1
var sayNamePerson1 = sayAllNames.bind(person1);
 sayNamePerson1("person1"); // "person1:Nick", paso el parametro al llamar la funcion


                                 //enlazo la funcion a person2, y paso el label como segundo parametro     
var sayNamePerson2 = sayAllNames.bind(person2, "person2"); 
sayNamePerson2(); // "person:joe" 




//Funciones como objetos

var foo = fooObj(){}
var foo.fooProp = "Something";

foo.fooProp // "Something"







/* Funciones prototype:
****************************************/

           //autos  
function Inventario (nombreInventario){

              //autos 
  this.nombreInventario = nombreInventario;
  this.articulos = [];
};


//autos...
Inventario.prototype = {
  add: function (nombreArticulo, cantidad){
    this.articulos[nombreArticulo] = cantidad;
  },

  borrar: function (nombreArticulo){
    delete this.articulos[nombreArticulo];
  },

  cantidad: function (nombreArticulo){
    return this.articulos[nombreArticulo];
  },

  getNombre: function (){
    return this.nombreInventario;
  },    

};


///    Le sigue esto
      var autos = new Inventario("autos");
      autos.add("chevy", 5); //o ... autos.add("nova", 4);

      autos.borrar("nova");
      autos.cantidad("chevy");//5
      autos.cantidad("nova");//0

      autos.getNombre(); //autos



/*




*/




//EJEMPLO CALLBACK BASICO

function hagoAlgo(callback) {
    callback('Hola!');
}

hagoAlgo(function(valor){
    console.log(valor);
})




//EXPLICACION


//Defino una funcion
function hagoAlgo(callback) {


      /*Esto pasa a ser callback("Hola!");
      ------------------------------------- 
        function foo(valor){
          console.log(valor);  <--- Tras las cortinas, se autoejecuta c un valor "hola"
         }("Hola"); */

    callback('Hola!'); //<-- Aqui llamo la funcion de arriba c este parametro
}

//La llamo
hagoAlgo(function(valor){
    console.log(valor);
})









