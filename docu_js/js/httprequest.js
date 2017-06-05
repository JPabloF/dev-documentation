//Creamos objeto xmlhttprequest



//Aqui almacena en var   = el "new" lo crea
var xhr = new xmlhttprequest();


//Este servicio devuelve una promesa y con el metodo then() manejamos las respuestas.

success()
error()



//usuarios json
[
  {"nombre": "John",
    "apellido": "Doe",
  },

  {"nombre": "Maria",
    "apellido": "Doe",
  },
]

//METODOS DE ACCESO

.controller("UsersCtrl"), ["$scope", "$http", function ($scope, $http){

  //En esta var almaceno los usuarios desde el metodo $http
  var usuarios = $http({
   method: "GET", //Peticion de tipo GET al archivo json
   url: "usuarios.json" //Indicamos donde hacer la peticion

  }).success(function(data,status)){
    $scope.usuarios = data;
  }).error(function(data,status){
    console.log(data,status);
  });
}]

//METODOS DE ACCESO RAPIDO
// Sirven para ejecutar acciones con los metodos http, es como un resumen del anterior

$http.get("usuarios.json")
  .success(function(data,status)){
    $scope.usuarios = data;
  }).error(function(data,status){
    console.log(data,status);
  });

  /*Assim como existe o get, existem os outros também, conforme a lista a seguir:

  $http.get
  $http.head
  $http.post
  $http.put
  $http.delete
  $http.jsonp


  //PROVIDER del servicio $http
Puede ser configurado en el proceso de creación del modulo para que la app siempre las tenga disponibles

- El servicio $http automaticamente transforma las peticiones y respuestas:
   
   .- Si la petición tiene una propiedad data y es objeto, el servicio la entrega como json
   .- Si la respuesta es detectada como json, es deserializado a un objeto o arreglo js.



   NG-RESOURCE y RESTful


   1.- Primera peticion a un recurso rest

   //Se hace un factory que devuelva el servicio REST*/
   .factory ("Mensajes", ["$resource", function($resource){
  
     return $resource ("api/mensajes/:id");
   }]);


app.controller("MensajesCtrl", ["$scope", "Mensajes",
    function($scope, Mensajes){
              //query hace una peticion de tipo get que espera como respuesta un arreglo de objetos
      Mensajes.query(function(datos){
        $scope.mensajes = datos;

      }, function(err){
        console.error ("Error" + err.status + ":" + err.data.mensaje);
      

      });

    }])