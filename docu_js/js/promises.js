/* PROMISES 

***************

- El objeto promise es usado para comunicacion asincrona y diferida. 

- La asincronia ocurre de forma desconocida o impredecible

- La comunicacion asincrona no garantiza ocurrir en una linea de tiempo ininterrumpida.



- Las promesas programan tareas para ser añadidas a la cola de trabajo del motor JS.

- Tienen 3 estados: pendientes, cumplidas, y rechazadas (Pending, Fulfilled, Rejected).

- Una promesa comienza en estado pendiente, y se convierte "cumplida" en una ejecucion o rechazada en una falla.

- Cuando una promise esté pendiente, puede pasar a fulfilled or reject.

- En cualquiera de los 3 casos, se pueden agregar controladores para indicar cuando se instaló una promesa.

- then() ---> Permite asignar un controlador para el cumplimiento o rechazo

- catch() ---> Permite asignar solo un manejador de rechazo.

- Se pueden encadenar promesas de variedad de formas y pasar informacion entre ellas.



- El objeto promise es usado para comunicación diferida y asincrona.

- Sirve para reservar el resultado de una función futura.

- No se sabe cuando los datos van a llegar, no son lineales en el tiempo, entonces una forma de manejar la inexistencia de esos datos, es con promesas

- El resultado llega de peticiones http o lecturas de ficheros, que son procesos no instantáneos.

- JS puede ejecutar una pieza de código a la vez, entonces necesita tener un registro del código destinado a funcionar.

- El código destinado a funcionar es mantenido en la espera. Cada vez que un código esta listo a ejecutarse, es almacenado a la espera.

- Cuando el motor JS termina de ejecutar el codigo, pasa al siguiente código en lista de espera.

- El evento loop es un proceso dentro de JS que monitorea el codigo en ejecución y administra el código en espera.

- Hay que recordar que la ejecución de código corre desde el primero al último que está en la lista de espera.*/






/*4 PASOS
--------------------

Es como un try catch que termina en un tiempo impredecible

Promise es un constructor que se puede almacenar en una variable o usar sin almacenar*/



//Wrapping
//Resolve and reject son dos callbacks, que especifican cuando algo funciona (fulfilled) o es rechazado (reject)

new Promise ( function (resolve, reject)){
  resolve('hi');
  reject('bye');
}





Thening

Caching

Chaining


















//Ejemplo asincrono común
  async(input, function (output) {
  // use output + do something else
  });


//Ejemplo "promesa" común
  promise(input).then(function (output) {
  // use output + return some value
  });




/* EJ 1 - Funcion asincrona con callbacks
--------------------------------------------

Lo que hace el callback es imprimir "estilos cargados" cuando finalice la carga */

function loadCSS(url, callback){
  var elem = window.document.createElement('link');
  elem.rel = "stylesheet";
  elem.href = url;
  window.document.head.appendChild(elem);
  callback(); //<-- Aqui llama el log pasado
}

loadCSS('styles.css', function(){
  console.log("Estilos cargados");
});




/* EJ 2 - Misma funcion asincrona con promesas:
------------------------------------------------

Asumamos que loadCSS devuelve una promesa */

var promise = loadCSS('styles.css'); //<-- Esto podria ser una funcion a resolverse, entonces la almacenamos

//Esta funcion se ejecuta cuando la promesa ha sido resuelta
promise.then( function(){
  console.log("estilos cargados");
});

//Si existe un error se resuelve esta con el error
promise.catch( function(err){
  console.log("Ocurrio un error: " + err);
});





/* EJ 3 - Misma funcion como chaining:
-------------------------------------------------*/

loadCSS('styles.css')
  .then(function(){
    console.log("Estilos Cargados");
  })
  .catch(function(err){
    console.log("Ocurrió un error: " + err);
  });





/* PROMESAS NATIVAS ECMA6
-------------------------------------------

- ECMA6 trae de forma nativa un nuevo API para promesas. */


// Para la funcion loadCSS
function loadCSS(url){

  var promise = new Promise(

    function resolve (resolve, reject){
      var elem = window.document.createElement('link');
      elem.rel = "stylesheet"
      elem.href=url;
      window.document.head.appendChild(elem);
        resolve();
      }
    );

  return promise;
}





/* CALLBACKS
-------------------------------------------

- Son la tecnica default para el trabajo asincrono en JS

- Es dificil manejar los errores



- Es la primera y la forma más común de controlar la asincronía en JavaScript.

- En el siguiente ejemplo tenemos una función que recibe como parámetros un dato de entrada: data, un array con datos array y una función de callback.

- Al array se le añade el data que viene por parámetro y cuando termine, llama a la función de callback que recibe por parámetro, en ese caso la llama con el array modificado.*/



//Function recibiendo 3 parametros.
function addToArray (data, array, callback) {  

  //Comprueba si el array existe
  if(!array){
    callback(new Error('No existe el array'), null) //<--  Pasa un error al callback
  } 

  else {
    array.push(data) //<-- Se pushea el data "4")
    callback(null, array);
  }

}


//En el siguiente código vemos como llamará a esta función y tratar el callback:
var array = [1,2,3];


//Ejecuto la function "addToArray"

//       data, [1,2,3] , callback 
addToArray(4, array, function(err){  
  if(err) return console.log(err.message);
  console.log(array);
});



//  [1, 2, 3, 4]  <-- Respuesta de la function





//Promises 

var d = new Promise ( function(resolve, reject) {
  if (true){
    resolve('hello world');
  } else {
    reject ('no bueno');
  }
});

d.then(function(data){
  console.log('success: ', data);
});

d.catch(function(error){
  console.error('error: ', error);
}); 






var p = new Promise(function(resolve, reject) {
  
  // Do an async task async task and then...

  if(/* good condition */) {
    resolve('Success!');
  }
  else {
    reject('Failure!');
  }
});

p.then(function() { 
  /* do something with the result */
}).catch(function() {
  /* error :( */
})