//1 MODULES ANGULAR

//Los modulos son las entidades logicas que se dividen en la app. 

//La APp puede contener diversos modulos segun la logica (like Transaction, Report, etc.). 

//Cada modulo representa una entidad logica dentro de la app.


var myApp = angular.module('myApp',[]);
 
                 //nombre     //array - dependencia y function  
myApp.controller('ContactController', ['$scope', function($scope) {
	$scope.contacts = ["hi@email.com", "hello@email.com"];

	$scope.add = function() {
		$scope.contacts.push($scope.contact);
		$scope.contact = "";
	}
}]);