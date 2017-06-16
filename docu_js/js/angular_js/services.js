/* SERVICES
---------------



- Son los encargados de llevar toda la logica que no es interés del controlador.

- Son singleton: Existen en un solo lugar. Son instanciados una vez y siempre se obtendra el mismo resultado, el objeto se modifica.

- Evitamos que la data se duplique, es una fuente unica y consultable de manera multiple

- Nos permiten intercambiar info entre diferentes partes de la app (controladores)
  ... Ya que al ser creados y modificados todos al acceder tendran el mismo resultado.

- Se puede pensar en ellos como modulos inyectables de data o funcionalidad 

- Son un objeto inyectable

- La inyeccion es recomendable hacerla como array para prevenir la minificacion 

- Pueden proveer api rest

*/


//Sintaxis
app.controller("MainController", function($scope,nameService){

  console.log(nameService);
  nameService.someMethod();
  $scope.information = nameService.someMethod();

})


//Ejemplo
app.service('dataService', function(){

    //Cuando "atacheo" o vinculo helloConsole, estara disponible como un metodo del servicio.
    this.helloConsole = function(){
        console.log("this is a test");
    }
})



//este controler es un objeto, como decir function mainCtrl(); y dentro tiene variables que son devueltas al ser invocado (las variables se devuelven c return cuando no son objetos)
app.controller('mainCtrl', function($scope, dataService){


    //scope.foo = "foo data";  <-- Normalmente recuperaria esta variable desde afuera con ...   return foo = "foo data";   Estoy usando $scope para intentar representar a 'MainCtrl' que esta ahora almacenando una variable llamada "foos"

// ...  foo es una variable, equivalente a decir:  var foo = "foo data"; Porque una variable puede ser creada sin escribir explicitamente la palabra 'var'



    //Creamos un metodo de scope, y sera igual al metodo del servicio
    $scope.helloConsole = dataService.helloConsole;



     //El controlador dispara el metodo del getMyDataMusical() primero que todo, como se ve en la linea de abajo (58), pero su respuesta es retornada despues de haber sido efectivamente creada la variable data
     //Aqui estoy tratando de ejecutar el metodo del service DESDE el controllador, en este caso el verdecito getMyData
    // la variable de abajo "dataMusical" queda undefined, porque la respuesta esta siendo devuelta despues que haya creado la variable "dataMusical". La respuesta es recibida dp de ser creada (la variable), en el momento es nada, tiene un metodo q significa nada, si estuviese sin net seria nada.
    $scope.dataMusical = dataService.getMyDataMusical(); //<-- Ejecuto el metodo del service y quiero almacenarlo en la variable "dataMusical"
    //La variable que creo queda vacia, porque almacena un metodo que aun no tiene respuesta
    //dataMusical es una variable del controlador, porque tiene $scope, es como decir 'mainCrl.dataMusical'



    //Ejecuto el metodo del servicio, y paso una funcion anonima como callback en el parametro
    dataService.getMyData(function(response){

        //Si tratamos de usar este metodo del service en el controlador
        $scope.data = response.data;

    });

})




//Request data (a una api rest)

//1 ejemplo uno fallido 
app.service('dataService', function($http){

    this.getMyDataMusical = $http.get('mock/foo.json') //<-- 1.- primero llamo al servicio. Y me traera algo al response
    .then( function(response){ //<-- 2.- Ejecuto codigo despues que la respuesta se recibio desde el servidor. el primer parametro en THEN es el callback ejecutado cuando la respuesta ha sido recibida 
 
        return response.data; //<-- el response obtenido de la ruta

    })
})

//2 Metodo correcto para el fallo 1
app.service('dataService', function($http){

    this.getMyDataMusical = function(callback){
        $http.get('mock/foo.json') //<-- 1.- primero llamo al servicio.
        .then(callback)}
})




/*---------------------
 Services types
-----------------------

  ----------------
  1.- Constants
  -----------------

  Son simples constantes del tipo "key:value"
  Pueden usarse en una url de API

  NO pueden ser modificados por decorators*/

  //EJs:

  app.constant("key", "value");
  app.constant("foo", {value1: 'key1', value2: 'key2'});
  app.constant('twitterAPI', {url: "api.twitter.com/v2/etc..."})



  /*---------------
   2.- Values
  ------------------

    Pueden ser modificados por decorators
    Preferentemente se usa más que constants.
  Para enviar strings, objets, functions... que se usen en toda la app.

  */

    //EJs:

    app.value("key", "value");
    app.value('valService', function(){ return "Esto ha sido retornado desde un val"})




/*-------------------
3.- Factory
---------------------

* Comunmente para agrupar un monton de funcionalidad!


Siempre debe devolver algo mediante un return : Primitiva, objeto, function... etc

Sirve para crear objetos privados y solo devolver un objeto con los metodos visibles.

-Inyecta una function en vez de un objeto


Bloques de funciones inyectables

Almacenan variables privadas en sus funciones

Sirve para almacenar funcionalidades en un bloque reusable*/


app.factory('myFactory', function(){

    return "Mi factory";

    return{
      myData: "Esto es data string",
      getData: function(){
        return this.mydata
      }
    }
})
//*** Esto expone todo el objeto a la factory, limita la encapsulacion.


app.factory('myFactory', function(){

    var mydata = "Esto es data string"

    return{
        getData: function(){
            return mydata
    }
  }
})
//*** Esto funciona como una funcion privada



app.factory('nameObject', function() {

var factory = {}; 

    factory.method1 = function() {
      //..
    }
    factory.method2 = function() {
      //..
    }
    return factory;
});





app.factory('nameObject', function() {

    var factory = {}; 

    return {
      keyName : function(){},
      keyName2 : function(){}
    }
});



app.factory('Playlist', [ function() {

    var playlist = [
        'Love song',
        'Sweet song'
    ] ;
    var listar = function(){ 
      return playlist;
    };

    return {
      listar: listar,
    };
}

])


// Uso en el controlador
app.controller('PlaylistMetodosCtrl', [ '$scope', 'Playlist', function ($scope, Playlist ) {
    $scope.playlist = Playlist.listar();
} ] );




///////////////// funcion

function fooFactory() {

    var playlist = [
    'Love song',
    'Sweet song'
    ] ;
    var listar = function(){ 
    return playlist;
    };

    var borrar = function(id){
    playlist.splice(id,1);
    };

    return {
    listar: listar,
    borrar: borrar
    };
}();


// fooFactory(); <-- Object{} Que contiene los metodos.
// fooFactory.playlist <-- Undefined

/***! Si tratamos de acceder fuera del servicio el resultado será undefined, pq solo devuelve un objeto con los métodos públicos.



  /*----------------
   4.-Services
  -------------------

  (Se usa preferentemente en coffescript)
  
  Declara una nueva instancia donde es utilizado ... Equivalente a: ( return new myService)
  
  Puede tener dependency injection en la function

  Los métodos son expuestos con "this"

  */


app.service('myService'), function(){


}



app.service('PlaylistService', [ function () {
    var playlist = [
    'Love song',
    'Sweet song'
    ] ;

    this.listar = function(){ 
      return playlist;
    };   
  }
])


// Uso en el controlador
app.controller('PlaylistServiceCtrl', [ '$scope', 'PlaylistService',
  function ($scope, PlaylistService) {
    $scope.playlist = PlaylistService.listar(); //<-- Expondria el playlist como un metodo this
    console.log(PlaylistService.playlist); // <-- Esto no muestra el array, solo es posible a traves de los metodos
  } ] );




/////////// como funcion

function fooService () {
  var playlist = [
  'Love song',
  'Sweet song'
  ] ;

  this.listar = function(){ 
    return playlist;
  };

  this.borrar = function(id){
    playlist.splice(id,1);
  };
}

// fooService(); <---  Undefined
// fooService.listar <--- Undefined
// fooService.playlist <--- Undefined



  /* 5.- Providers
  -------------------

  Siempre devuelve (return) con $get:*/




  
  /* 6.- Decorators
  -------------------


  $delegate*/


/* USO

1. Se inyecta en el controlador function($scope, theService){}


2. Minification solucionada con array notation
  .controller('anotherController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
  }])


*/