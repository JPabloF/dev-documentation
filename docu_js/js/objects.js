/* OBJECTS (o references types)
****************************************** 

Es una lista de propiedades consistentes en un string y un valor/metodo.

Las variables definidas dentro de un objeto se denominan: "PROPIEDADES" y las funciones: "METODOS"

Las PROPIEDADES: pueden ser string, numero o booleano

Los METODOS: proveen funcionalidades, que pueden o no retornar valores (tb pueden ejecutar acciones)

Los OBJETOS son dinámicos, pueden cambiar en cualquier punto de la ejecución.

Las propiedades pueden ser accedidas o asignadas (getting o setting)

El nombre de una propiedad es "Key", y el contenido es un "value" (key:value)

Cuando una propiedad es adherida a un objeto, el metodo interno [[Put]]  crea el lugar para almacenar la propiedad.

El [[Put]] crea una "own property", indicando que la instancia especifica del objeto, posee esa propiedad.

La Own-property es diferente a la Prototype property ( Ver más en "constructors").

Cuando un nuevo valor se asigna a una propiedad existente, se ejecuta un [[Set]]

- "this" no puede ser usado para definir una key

- "new" Operador crea un objeto

- "Object" es el padre de todos los objetos Javascript, es decir, cualquier objeto hereda de él

*/


//Asignar el objeto a una variable

//EJ:
var object = new Object

/* - No guardan directamente el objeto en la variable asignada
   - Guardan una referencia o apunta a la memoria donde el objeto existe.
   - Cuando se asigna un objeto a la variable, se asigna un "puntero"
   - SI se asigna una variable a otra, cada una toma una copia del puntero, y apuntan al mismo objeto en la memoria.





/* ESTRUCTURA DE UN OBJETO LITERAL
***************************************/

var nombreObjeto = {
  nombre: "Juan", // <--- propiedad (clave:valor ...)
  edad: 15,
  logged: true,
  calc: function(){ //<--- metodo ( nombreMetodo : function(){}...)
    //code for exec.
  }
};



/*  EXISTEN 2 TIPOS DE PROPIEDADES: (Data y Accesor)
*******************************************************   


//  A.- DATA PROPERTIES:

        - Almacenan un valor, y se pueden leer y escribir
        - Cuando almacena una función, se considera un metodo del objeto*/


   var person1 = {name: "Joe"}

   var person1 = {}

  Object.defineProperty(person1, "name", { // <-- metodo para definir propiedades
            value: "Nicholas", //<-- Se puede definir el valor incluso si la propiedad aun no existe (name)
            enumerable: true,
            configurable: true,   // <-- Si no se especifican los demas valores, son false por default.
            writable: true
        });



/*  B.- ACCESOR PROPERTIES: (Getters and Setters)
        
       - No almacenan valores en si mismas.
       - Definen una funcion a llamar cuando la propiedad es leida (un getter)
       - Definen una funcion a llamar cuando la propiedad es escrita (un setter)
       - Los Getters retornan un valor
       - Los Setters reciben un valor asignado a la propiedad como un argumento.
       - Este metodo se usa principalmente para disparar acciones asociadas especificas. */


var person1 = {
  _name: "Nicholas", // Underscore por convencion
  get name() { 
    console.log("Reading name");
    return this._name;
  },

  set name(value){ //<-- el argumento "value" recibe el valor asignado.
    console.log("Setting name to %s", value);
    this._name = value;
  }
};

console.log(person1.name); // "Reading name" then "Nicholas"

person1.name = "Greg";    //  "Setting name to Greg" then "Greg"
console.log(person1.name);


var person1 = {
    _name: "Nicholas"
};

//Metodo para definir propiedades
Object.defineProperty(person1, "name", {

    get: function() {
        console.log("Reading name");
        return this._name;
    },
    set: function(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    },
    enumerable: true,
    configurable: true
});

  /* Para definir multiples propiedades, se usa Object.defineProperties() */

var person1 = {};
Object.defineProperties(person1, {
   // data property to store data _name: {
           value: "Nicholas",
           enumerable: true,
           configurable: true,
           writable: true
},
   // accessor property name: {
           get: function() {
               console.log("Reading name");
               return this._name;
           },
           set: function(value) {
               console.log("Setting name to %s", value);
               this._name = value;
           },
           enumerable: true,
           configurable: true
       }
});


    /* ATRIBUTOS DE PROPIEDADES:
    *******************************************

      - Se pueden cambiar los atributos utilizando Object.­defineProperty(), o bien Object.defineProperties()
      - Las propiedades tienen atributos, que definen como las propiedades trabajan.


/*    ATRIBUTOS COMPARTIDOS (entre DATA y ACCESOR)


      [[ENUMERABLE]]  --> Las propiedades que pueden ser iteradas.  
                      --> PropertyIsEnumerable();
                      --> Por defecto, todas las propiedades adheridas a un objeto son enumerables (true).
                      --> Se pueden iterar usando el ciclo for-in
                      --> Enumerables tienen un atributo interno [[Enumerable]] true


      [[CONFIGURABLE]] -->  Cuando una propiedad puede ser cambiada 
                       -->  Por defecto, todas son configurables (true)
                       -->  Pueden ser borradas con "delete"


   /*  ATRIBUTOS DE DATA:

       [[value]]    --> Almacena el valor de la propiedad. Todo se almacena en value (hasta las funciones).

       [[writable]] --> Booleano que determina si una propiedad es escribible, por default es true. */



  /*  ATRIBUTOS DE ACCESOR:

       [[Get]] --> Contiene la funcion get
       [[Set]] --> Contiene la funcion set

 






/* PREVENIR MODIFICACION DE OBJETOS
****************************************************

  - EL atributo de objeto [[Extensible]] es un booleano que indica si el objeto puede ser modificado.
  - Todos son "extensibles" o modificables por defecto. Se pueden adherir nuevas propiedades

  
   Hay 3 formas de bloquear las modificaciones de un objeto:

  1.-  Preventing Extensions:  Object.preventExtensions()  / Object.isExtensible() 
      -----------------------

       -  Acepta un argumento, que es el objeto
       -  sirve para chequearlo*/

      var person1 = {
        name: "Nicholas"
      };

      Object.preventExtensions(person1);
      person1.age = 23
      person1 // Object {name: "Nicholas"} <--- no se adhiere la propiedad.


/*2.-  Sealing Objects:  Object.seal() / Object.isSealed()
      -----------------

       - Un objeto sealed is nonextensible y sus propiedades no configurables
       - No se pueden no adherir, ni remover, ni cambiar de tipo (data a accesor, etc.)
       - SI se pueden cambiar los valores de las propiedades
       - Todo se setea a false automaticamente.*/

      Object.seal(person1);


/*3.-  Freezing objects:  Object.freeze() / Object.isFrozen()
      -------------------

      - SUs propiedades son "read-only"
      - Son considerados sealed
      - NO se puede cambiar ni adherir nada
      - No pueden descongelarse
      - No se pueden cambiar los valores de las propiedades.
      - Son como snapshots o capturas en un momento particular.
*/




/* CREACIÓN DE UN OBJETO (instanciar un objeto)
***************************************/


//Objecto literal
var car = { type:  "Fiat" , model:"600", color:"white", stock:true}; //Objeto con datos

// CREACION LITERAL
var car1 = {
  type: "Fiat" // <--- Ejecuta implicitamente [[Put]]type
};


// CREACION c/ CONSTRUCTOR
var car2 = new Object();
car2.type = "Fiat"; // <--- Puedo crear un objeto y adherirle una propiedad con metodo dot aunque no exista antes


// Adherir propiedades
car1.model = "600"; // <--- Modificación del objeto agregando propiedades [[Put]]model
car2.model = "600"; // <--- Modificación del objeto agregando propiedades [[Put]]model


car1.type = "Mazda"; // <--- [[Set]]type, sobreescribe la existente "Fiat"



/* PROPIEDADES Y METODOS DE LOS OBJETOS:
***************************************


- Existen propiedades propias, y propiedades heredadas de todos los objetos.*/

Object {title: "Las herencias de prototipo"}

// title:
// "Las herencias de prototipo"
// __proto__: Object
//   constructor: function Object()
//   hasOwnProperty: function asOwnProperty()
//   isPrototypeOf: function isPrototypeOf()
//   propertyIsEnumerable: function propertyIsEnumerable()
//   toLocaleString: function toLocaleString()
//   toString: function toString()
//   valueOf: function valueOf()
//   get __proto__: function __proto__()
//   set __proto__: function __proto__()



//Se pueden comprobar con operador IN para las propias

"type" in car1 // true
"price" in car1 // false

//Conn hasOwnProperty, las heredadas
"toString" in car1 // true, porque todos los objetos tienen esta prototype property.
car1.hasOwnProperty("toString");//false, porque no es una propiedad propia.


// REMOVER PROPIEDADES
delete car1.type; // true, sin ouput
car1.type // undefined

//





/* ACCEDER AL OBJETO
**********************************************

//Se puede acceder con notación PUNTO */

  car.type; // "Fiat"


//Notacion ARRAY

car['type']; // "Fiat"

/*Obs: Las keys son strings, pero se autointerpretan sin comillas.
     Se usa para acceder a las keys que tienen nombres de key invalidas (espacios por ej.)*/



//Usando variable en el ARRAY
var marca = "Fiat";
car[marca]; // "Fiat"



//Acceder a metodos:
var libro = {
  paginas: 100,
  leer : function(){ // <--Una funcion dentro de un objeto se llama METODO. Puede ser anonima.

    console.log("Soy un libro y tengo " +this.paginas+ " páginas")// <-- "this" en un objeto representa al objecto que posee el metodo llamado. En este caso "libro".
    return "Soy un libro y tengo " +this.paginas+ " páginas" // Si yo accedo a este metodo me retorna un valor.
    alert("Esto no se va a ejecutar porque hay return antes")
  }
};


/*** Cuando estamos dentro de un método, con "this" hacemos referencia al objeto al que pertenece (“this object” )  */

libro.leer(); 



// Eliminar propiedades:

delete car.marca



//ANIDACION de propiedades

//Un objeto puede tener propiedades y dentro más propiedades. Se accede Así
libro.propiedad.propiedad; //notacion punto
libro["propiedad"]["propiedad"]; //Array
libro["propiedad"].propiedad; //Mixto



var car = { type:  "Fiat" , model:"600", color:"white"};





/*FOR-IN LOOP: Asignan la clave y el valor
********************************************

 USO: Tipicamente se usa cuando no se necesita array*/


var car = { type:  "Fiat" , model:"600", color:"white"};


var prop;

for (prop in car){         
  console.log(prop + " : " + car[prop]);
}
/* type  : Fiat             La variable da las keys, el objeto[var] da los valores
   model : 500        <--   clave: valor
   color : white*/


/* Object.keys(). 
********************************************
USO: Obtengo un array de los nombres de las propiedades*/


var prop = Object.keys(car); //<-- Me da un array de propiedades: ["type", "model", "color"]

var i, len;// para imitar el for-in loop

                    //3 propiedades
    //(0,  ,cantidad de propiedades;  veces a iterar, suma 1)
for (i=0, len=prop.length; i<len; i++){
  console.log("nombre: " + prop[i]);
  console.log("valor: " + car[prop[i]]);
}

/*
nombre: type
valor: Fiat
nombre: model
valor: 600
nombre: color
valor: white*/






/*  Ejemplo de objeto y metodos.
************************************************************/
var calculadora = {

  sum: 0, //<--- valor inicial
  add: function(value){ //<-- este value se pasa desde la llamada
    this.sum+=value;    //<-- Aqui "this" representa al objeto que posee el metodo, es decir "calculadora"
  },

  clear: function(){
    this.sum = 0;// <--- Aqui lo devuelve a 0
  },

  equals: function(){
    return this.sum; // <--- Aqui me da el valor actual de "sum", que se accede porque es "calculadora.sum"
  }
}

calculadora.add(5);
calculadora.add(7);
calculadora.equals(); //12...  igual que calculadora.sum
calculadora.clear();
calculadora.equals() //0...



//Igualdad entre objetos 
// R: Deben compartir la referencia, aunque tengan el mismo contenido no seran iguales,