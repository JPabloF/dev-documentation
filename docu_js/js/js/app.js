var app = angular.module('myApp',[]);

app.controller('MyController', MyController)

app.controller("addProduct", addProduct)

app.controller('anotherController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}])



/* Promise con $q  */

app.controller('promiseController', function($scope,$q,$timeout){

  $scope.data = "Old data";

  var defer = $q.defer();

  defer.promise
    .then(function(val){
      $scope.data = val
    })

  $timeout(function(){
    defer.resolve("New data!!!");
  }, 3000);    

})

//Otro ejemplo de promise $q con cascada de eventos
app.controller('promiseControllerX', function($scope,$q){

var defer = $q.defer();

  defer.promise
    .then(function(arma){
      alert("Toma mi " + arma)
      return "lanza"
    })

    .then(function(arma){
      alert("y mi " + arma)
      return "hacha"
    })

    .then(function(arma){
      alert("o mi " + arma)
    })

    defer.resolve("espada");
  
})



app.service('MyService', MyService)

app.directive('helloSimpleDirective', MyDirective)

function MyDirective(){
  return {
  scope: true, // inherits child scope from parent.
  restrict: 'E', // An Element Directive.
  replace: true,
  template: '<h3>Hello Simple Directive</h3>'
  };

};




function MyController ($scope, MyService) {  

  MyService.getData(function(response) {

		$scope.productos = response.data
  });
}


function addProduct($scope){
  
      $scope.adding=function(){

        $scope.added = $scope.newData
      }
}


function MyService($http){
  this.getData = function(callback){
    $http.get('data/datos.json').then(callback)
  }
};








