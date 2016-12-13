////////// 1 MODULOS

/* Es un contenedor de las diferentes piezas de la app, como controllers, services, filters, directives, etc.


Son las entidades logicas que se dividen en la app. 
La App puede contener diversos modulos segun la logica (like Transaction, Report, etc.). 
Cada modulo representa una entidad logica dentro de la app.

*/


var myApp = angular.module('myApp',[])


////////// 02 CONTROLADORES
 
                 //nombre     //array - dependencia y function()  
myApp.controller('ContactController', ['$scope', function($scope) {
	
	$scope.contacts = ["hi@email.com", "hello@email.com"];
	$scope.add = function() {
		$scope.contacts.push($scope.contact);
		$scope.contact = "";
	}
}]);


// DEPENDENCIAS
//Escritura de array contra minificado

  //Array con function anonima
 .controller('miCtrl', ['$scope', function ($scope) {
 $scope.mensaje = 'AngularJS Paso a Paso';
 }]);


