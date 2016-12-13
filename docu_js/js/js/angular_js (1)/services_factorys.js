//********* SERVICES OBJECTS

//Thus service is a stateless object that contains some useful functions. 
//These functions can be called from anywhere; Controllers, Directive, Filters etc.


//These services can be used within any Controller by just declaring them as dependencies. For example:
 module.controller('FooController', function($http){
 //actions
 });


//
//module.service( 'serviceName', function );
  app.service("MyService", function() {

  //we create service methods using "this.methodname"
    this.method1 = function() {
        //..
      }
    this.getData = function(callback){
      $http.get('data/datos.json').then(callback)
    }

  });




//********** FACTORY OBJET
//In .factory() we created a factory object and assigned the methods to it.

module.factory('MyService', function() {
  
  //factory objet - Objects are variables too. But objects can contain many values.
  var factory = {}; 

  factory.method1 = function() {
      //..
    }

  factory.method2 = function() {
      //..
    }

  return factory;
});