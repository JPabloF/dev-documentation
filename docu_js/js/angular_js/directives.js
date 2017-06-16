//DIRECTIVES

//Directives make up an important part in AngularJS applications with AngularJS. They
//manipulate the Document Object Model (DOM), route events to event handler functions,
//and much more. Through the use of custom directives, we can build applications with
//a rich user interface.

//Conviven dentro del controller y tienen acceso
//Si se manipula el DOM, deberia hacerse con una directive

.directive("directiveName",function () {
  return {
  restrict: 'E',
  template:'<figure><img width="500px" ng-src="{{photoSrc}}"/><figcaption>{{caption}}</figcaption>',
  //templateUrl:'photo.html'
  replace:true, //remplaza el elemento original o lo deja dentro

  scope: {
    caption: '@', //toma data si acaso cambia el elemento. One way binding
    photoSrc: '@'
  }

  }
});


/*  Permitem programar el DOM
    Es una nueva forma de escribir html
  Lo que está en camelcase se transforma a guiones*/

// Hay 4 tipos de directivas y pueden ser:

//1. Un elemento HTML ( <directive-type></directive-type> ), letra E

//2. Un atributo de un elemento ( <div directive-type/> ), letra A

//3. Una clase ( <div class="directive-type"/> ), letra C

//4. Un comentario ( <!--directive:directive-type--> ), letra M



