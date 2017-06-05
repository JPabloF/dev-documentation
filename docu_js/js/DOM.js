/* DOM

- El dom transforma el HTML en un arbol de nodos jerarquicos:



---------------------
DOCUMENT STRUCTURE
---------------------


Podemos imaginar el documento html como  un anidado de cajas o tags, con tags conteniendo otros tags.

Por cada "caja" hay un objeto con el que podemos interactuar, como que tag representa y que contiene dentro.

La variable global "document" nos da acceso a estos documentos.

documentElement refiere o representa a <html>, y tb provee las propiedades de "head" y "body"



----------
TREE
-----------

- El concepto de arbol o tree se utiliza para identificar jerarquicamente, de mejor manera que las lineas.

- Podemos pensar en un arbol para establecer una estructura de nodos, donde document.documementElement sirve de raiz

- Cada nodo puede referir a otros nodos (childrens) que a su vez pueden tener otros nodos

- El DOM transforma el HTML en un arbol de nodos jerarquicos:





************************

  LOS NODOS DEL TREE

************************


- Representan a los elementos regulares (TAGS HTML), que determinan la ESTRUCTURA de un documento y pueden tener hijos

- Cada nodo contiene una propiedad "nodeType", que contiene una numerica para identificar el tipo.

    (document.ELEMENT_NODE) ---> Los elementos regulares (TAGS) tienen el 1 

    (document.TEXT:NODE)    ---> Los NODOS de texto (las secciones de texto en un documento), tienen el 3 

    (document.COMMENT_NODE) ---> Los comentarios, tienen el 8 

    *** Hay 12 tipos de nodos representados por números (1=element, 2=attribute, 3=text, ...)

• nodeName : Para tags HTML es el nombre del tag (EJ: "div") y para nodos texto siempre devolverá "#text"

• nodeValue : Para nodos de texto el valor será el texto



------------------------------
  NODOS MÁS IMPORTANTES
------------------------------


Document:  - Representa el nodo raiz, todo el documento

           - window.document es un objeto del BOM con info sobre el documento actual

           - Todos los métodos y propiedades dentro de window.document son objetos de DOM

           - DOM representa al document como un "arbol de nodos"


Element (1):     Representa el contenido definido por un par de etiquetas de apertura y cierre (un tag)
             Puede tener más hijos y atributos


Attr (2):       Representa el atributo de un elemento.     


Text (3):       Almacena el contenido dentro de un tag






--------------------------------------
  Propiedades de los nodos
--------------------------------------



<a href="http://www.amazon.com">Shop</a>

  En este ejemplo: Shop es un hijo de <a>
  
  href="" es un nodo del dom, pero es un atributo.   =""  es sinonimo de atributo.

  href es el attribute name

  http://amazon es atribute value



• attributes     EJ: href es un atributo, pero podemos usar otros propios como "data-..."

                  Nos devuelve un objeto con todos los atributos que posee un nodo

                  hasAttributes() :   Devuelve true si el elemento tiene atributos
                  getAttribute()  :   Devuelve el contenido de un atributo
                  setAttribute("class, "special"); Señala el tipo y nombre de casa a asignar
                  .attributes; y .length pueden crear una coleccion de atributos 


• className       Permite setear o devolver el nombre de una clase

• id              Misma funcion de className, con id

• innerHTML        Devuelve o inserta codigo HTML (incluyendo tags y texto) dentro de un nodo

• nodeName         Devuelve el nombre del nodo, si es un div, devolvera "div"

                  <p> tag <P>   <----->  P (Node name)

• nodeValue        Devuelve el valor del nodo. Si es tipo element devolverá "null", si es texto devolvera el valor

• style            Permite insertar css para editar el estilo

• tagName          Devuelve el nombre de la etiqueta

• title            Devuelve o modifica el valor del title de un nodo



• childNodes       Devuelve un array con todos los nodos hijos del nodo llamado
                   hasChildNodes() :   Este método devolverá true si el nodo tiene nodos-hijo
                   childNodes.length Nos permite saber el numero de hijos


• firstChild       Devuelve el hijo primero/ultimo
  lastChild

• previousSibling  Devuelve el hermano indicado 
  nextSibling

• ownerDocument    Devuelve el nodo raiz donde se encuentra el nodo desde el que se llama

• parentNode       Nos da el nodo-padre de un nodo-hijo */



//EJ: creacion de un elemento con sus propiedades.


var newEl = document.createElement('div')

newEl.id = 'myDiv'
newEl.className = 'bloque'
newEl.style = "background:grey"

var body = document.querySelector(body)
body.appendChild(newEl)


//Resultado
<body>
  <div id="myDiv" class="bloque" style="background:grey;"></div>
</body>  




/*************************

  ACCESO AL DOM

**************************


- Cada nodo tiene un parentNode (Un nodo contenedor)

- Cada element node (type1) tiene una propiedad childNodes, representado como un array de sus hijos [0][1][2]...etc

- Podemos ademas navegar entre primer y ultimo hijo, o nodos hermanos, etc.



Métodos de acceso directo:
---------------------------

• getElementsByTagName() :    Devuelve un array con todos los elementos del tag que se le pasa por parámetro

• getElementsByName() :       Devuelve un array con todos los elementos del name que se le pasa por parámetro

• getElementById() :          Devuelve el elemento con el id que se le pasa por parámetro

• getElementByClassName() :   Devuelve todos los elementos que tienen el string que se ha pasado en su atributo


Acceso a nodos hermanos e hijos
--------------------------------

•  nextSibling :    Nos devuelve el siguiente hermano

•  previousSibling: Nos devuelve el anterior hermano

•  firstChild :     Nos devuelve el primer hijo

•  lastChild :      Nos devuelve el último hijo



Otros accesos:
---------------

•  option y select   Dado un elemento select podemos acceder al array de sus options



querySelector y querySelectorAll
--------------------------------

Devuelve elementos del DOM a partir de una selección CSS


• querySelector()       devuelve el primer elemento encontrado EJ: document.querySelector("a"); devolvera el primer boton del web (posiblemente el logo)

• querySelectorAll()    devuelve un array de elementos




Otras formas de targetear elementos
-----------------------------------

var targetNode = parentNode.childNodes[0];
  ...is the same as...
var targetNode = parentNode.firstChild;



And if there are, for example, 3 child nodes...

var targetNode = parentNode.childNodes[2];
  ...is the same as...
var targetNode = parentNode.lastChild;





***************************

  MANIPULACION DEL DOM

***************************


•  innerHTML                        Para cambiar el contenido de una etiqueta


•  createElement(name)              Crea un elemento con el nombre pasado en el parametro


•  createTextNode(text):            Crea un nodo de texto que puede ser añadido a un elemento


•  createTextAttribute(attribute):  Crea un atributo que puede ser añadido posteriormente a un elemento


•  appendChild(node):               Nos permite appendear un elemento a otro como hijo


•  cloneNode():                     Tambien podemos copiar elementos existentes


•  insertBefore(new, target)        Permite insertar un elemento o nodo new antes del indicado


•  removeAttribute(attribute)       Elimina el atributo de nombre "attribute" del nodo desde el que se le llama


•  removeChild(child)
   replaceChild(new, old)           Elimina/ Reemplaza el nodo que se indica.


• textContent :                     Esta propiedad nos da el texto plano dentro de una etiqueta
                                    En IE no existe esta propiedad (hay que usar innerText)


------------------------------------
SELECCION AVANZADA DE ELEMENTOS HTML
------------------------------------

En el DOM tenemos disponibles una serie de selectores directos y de colecciones exclusivos de HTML (no XML):

•  document.body :     document.getElementsByTagName(‘body’)[0]
•  document.images :   document.getElementsByTagName(‘img’)
•  document.applets :  document.getElementsByTagName(‘applet’)
•  document.links :    Nos devuelve un array con todos los links con atributo href
•  document.anchors :  Nos devuelve un array con todos los links con atributo name
•  document.forms :    document.getElementsByTagName(‘form’)
                       Podemos acceder a los elementos del form (inputs, buttons) con elements

•  rows y Cells      Dado un elemento table podemos acceder a sus filas y dado un row podemos acceder a sus celdas













****************

OBJETO WINDOW

****************


- window.navigator    --> Es un objeto que contiene información sobre el navegador
                          window.navigator.userAgent

- window.location     -->  Es un objeto que contiene info (y metodos) sobre la URL actual


- window.screen   --> Ofrece info sobre la pantalla (general, fuera del browser)


Metodos de window
------------------

window.setTimeout() , window.setInterval()    -->Nos permiten ejecutar código después de un intervalo de tiempo (y en su caso, repetirlo)


