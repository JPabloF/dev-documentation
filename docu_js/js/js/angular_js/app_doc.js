/*    M V *

Model view whatever...

- Model es la data, Ej:  var name ="Tony"
- View es lo que la gente ve, ej: <h1>Tony</h1>
- * Star... Controladores, modelos, etc. Lo que conecta.



EN HTML5 podemos usar "data-something" para modificar los atributos.

Angular tiene atributos built-in llamados "ng-something"
*/




//Angular object
angular  
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















//================================

//function desarrollada 
function haceAlgo(callback){
    callback();
}

//Llamada a la function vacia
// haceAlgo();

//Llamada a la function con callback dentro
haceAlgo(function(){
   console.log('termine de hacer algo');
});



