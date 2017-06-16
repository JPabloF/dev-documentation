/*EVENTOS

- Comunican acciones en el navegador

  ACCION ------> EVENTO ------->  EVENT HANDLER

- Podemos escuchar estos eventos y engancharle una función (event handler) que se ejecutará cuando ocurra este evento.

-   En el navegador, global scope es equivalente a "window.object"



Propagación del evento:
-------------------------

Al clickar un link, tambien hacemos click en su contenedor( li , ul ), en el body y en ultima instancia en el document. 

• Capturing:  El click ocurre en el document y va pasando por todos los elementos hasta llegar al link "(a)"

• Bubbling:   El click ocurre en el link "(a)" y va emergiendo hasta el document.


**********************
Capturando eventos:

***********************


Modelo Tradicional
-------------------


Este modelo consiste en asignar una (sólo una) función a la propiedad onclick , onchange ,... del elementodel DOM*/

//EJ:

"<button onclick="myFunction()">Click me</button>"



/* Modelo Tradicional
---------------------

Con este metodo podemos asignar varias funciones a un mismo evento

addEventListener y removeEventListener

Le pasamos 3 parametros:

1. Tipo de Evento :    click , change ,...
2. Funcion a ejecutar    (handler, callback) : Recibe un objeto e con info sobre el evento
             En e.target tenemos el elemento que lanzó el evento
3. ¿Utilizo Capturing? : Poniendolo a false utilizariamos sólo Bubbling*/

//El document completo "escucha" el evento "click" incluido en "demo", luego despliega el mensaje en el elemento
document.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World!";
});


//EJ 2:

<button>Act-once button</button>

<script>
  var button = document.querySelector("button"); //<-- Targeteamos el boton

  function once() {
  console.log("Done.");

  button.removeEventListener("click", once); //<-- Podemos remover el evento para reutilizarlo una vez terminado
  }

  button.addEventListener("click", once);  //<-- Asignamos al evento "click" la funcion "once()"
</script>


