/*    M V *Whatever

Model view whatever...

- Model es la data, Ej:  var name ="Tony"
- View es lo que la gente ve, ej: <h1>Tony</h1>
- *Whatever (o star) son Controladores, modelos, etc. Lo que conecta el modelo con la vista.



EN HTML5 podemos usar "data-something" para modificar los atributos. Esto no afecta la vista, pero si contiene la info

  EJ: <h1 data-foo="A string"> Hello </h1>



/(/Angular tiene atributos built-in llamados "ng-something"

      <h1 ng-foo="A string"> Hello </h1>




Global NameSpace es como un espacio donde convive el codigo */

//ENCASULAPTION:
//Esto hace que las variables y metodos queden en un contexto propio, y no se crucen ni sobreescriban c otros elemntos

var myObject = {}; //<-- Lo unico que estoy haciendo con esto, es crear un objeto

myObject.person = 'Steve'; //<-- Aquí meto una propiedad al objeto usando punto o dot notation


myObject.logPerson = function(){ //<--- "Steve":    Aqui estoy poniendo un metodo en el objeto, de la misma manera.
    console.log(myObject.person);  
}









//DEPENDENCY INJECTION


//Defino un objeto usando una function. Todo en js es una function. Y los constructores son functions c/mayuscula
//Cuando cree un objeto Person tendrá un firstname y lastname, este constructor es el molde de metodos que crea un objeto
var Person = function(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
} //El constructor almacena metodos... Por tener mayuscula, no se puede navegar como un elemento propio. Pq es un molde, por eso no usa ":" para asignar propiedades, pq es un constructor de propiedades, es una function!!!...  No se le puede navegar con dot notation
//...mientras tenga mayuscula. Eso la distingue de una function comun. Eso la distingue de un objeto instanciado, ella solo tiene metodos de molde.

    // *!
    Object.prototype.toString.call(Person) // "[object Function]"



//1.- SIN dependency
function logPerson(){
    var user = new Person ('John', 'Doe'); //<-- Creo un object function de Person y lo almaceno en user. Lo que me queda ahora es un objeto almacenado en una variable, con su nombne propio, Ahora "user" es el objeto con las propiedades first and last name
    console.log(user);
}    

logPerson(); // Person {firstname: "John", lastname: "Doe"}



//2.- CON dependency. Recibe el objeto como argumento
function logPerson(person){
    console.log(person);
}    

    
var user = new Person ('John', 'Doe'); //<-- Ahora el objeto está afuera. Person está almacenado como variable porque es un constructor propio, y crea el objeto usando sus metodos 

logPerson(user); // Person {firstname: "John", lastname: "Doe"} <--- Paso el objeto "user" como argumento hacia "logPerson"



//LO estudiado

var User = function (x){ this.name = x }

var user1 = new User ("peter");

User //<-- function (x){ this.userName = x } 

user1 = //<-- User {userName: "peter"}

user1.name //<-- "peter" (name es una propiedad del objeto que fue creado con el constructor)



//Angular Object
                  //[dependency]
  .module('myApp',[])

             //nombre        
  .controller('MyController', MyController)


  .controller("addProduct", addProduct)

                                    //dependency Inline Array Annotation. Pasamos un arreglo con: El nombre de la dependencia y la function
  .controller('anotherController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
  }])

  //Metodo del servicio con nombre y function
  .service('MyService', MyService)


  .directive('helloSimpleDirective', MyDirective)


//Funcion del controlador con 2 injections
function MyController ($scope, MyService) {  

                   //aqui ejecuto mi almacenamiento de datos
  MyService.getData(function(response) {

    $scope.productos = response.data
  });
}

function addProduct($scope){
      
      //Puedo meter funciones en las variables del scope
      $scope.adding=function(){

        $scope.added = $scope.newData
      }

}


//Funcion del servicio
function MyService($http){
  this.getData = function(callback){
    $http.get('data/datos.json').then(callback)
  }
};


function MyDirective(){
  return {
  scope: true, // inherits child scope from parent.
  restrict: 'E', // An Element Directive.
  replace: true,
  template: '<h3>Hello Simple Directive</h3>'
  };

};