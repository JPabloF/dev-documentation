/* AJAX

- Asincronico javascript and XML (JSON)

- Asincrono porque no necesita esperar respuesta, puede continuar las tareas y ser notificado cuando esté disponible 

- Para usarlo hay que utilizar el objeto XMLHttpRequest de JS y un servidor.

- Las denominadas aplicaciones AJAX no hacen necesario refrescar la pagina para nuevo contenido



*/


//LLAMADA


//Creamos el objeto XMLHttpRequest

var xhr = new XMLHttpRequest();


//Funcion de la respuesta

function reqHandler(){
      //comprobamos el estado 4 de completo
  if (this.readyState === 4 && this.status ===200){

    console.log(this.responseText);  
  }
}

//Asociamos la funcion manejadora
xhr.onLoad = reqHandler;

//Abrimos la conexion hacia la URL indicando el metodo HTTP en este caso GET

xhr.open ('GET', 'http:((jsonexample.com/photos', true);

//Enviamos la peticion
xhr.send();


//Rpta de la consola
[
  {
    "albumID": 1,
    "id", 1,
    "title": "ejemplo de titulo, loren ipsum "
  }
]


//VER MAS DE FETCH ECMA 6 y PROMISES, then