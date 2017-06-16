/* Promises $q 

- En el contexto asincrono, tienen alta implicancia

- Cuando una tarea se completa, vamos ejecutar una accion

- Es similar a try catch

- $timeout es equivalente a settimeout en js pero en angular

- El objeto defer para hacer promise.  

- defer.promise nos permite establecer el then(), que indica lo que ocurrirá cuando una tarea termina

- $http request es un ejemplo perfecto de tarea en un tipo promise. Cuando se cumple la respuesta del servidor queremos hacer algo.

- then se puede encadenar para hacer promesas secuenciales

*/


app.controller('MainController', function($scope,$q,$timeout){

  $scope.data = "Old data"

  var defer = $q.defer(); //<-- Aqui estoy almacenando un metodo para encadenar con puntos dp...

  defer.promise
    .then(function(val){
      $scope.data = val
    })

  $timeout(function(){
    defer.resolve("New data!!!");
  }, 3000);    

});



//EJ 2:

app.controller('promiseController2', function($scope,$q){

var defer = $q.defer();

  defer.promise
    .then(function(arma){
      alert("Toma mi" + arma)
      return "lanza"
    })

    .then(function(arma){
      alert("y mi" + arma)
      return "hacha"
    })

    defer.resolve("espada");
  
})



/* RESOLVE

