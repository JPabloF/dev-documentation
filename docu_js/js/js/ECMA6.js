/* ECMA 6


Variables.
------------

Si declaro una variable utilizando "var", es tratada como si estuviese inicializada al tope de la funcion o en el scope global

Si esa variable es accedida desde otro bloque, y no ha sido inicializada, simplemente queda undefined si no ha sido
inicializada,  o null, si es que se ha intentado inicializar*/



function getValue(condition) {
	
	// var value; //<-- Si value se define dentro del bloque if, se hiza hasta el tope de la funcion, de forma independiente
	
	if (condition) {
		value = "blue"; //Equivalente a decir var = "blue". La inicialización se mantiene pero la declaración se alza

		return value;
	} else {
		return null;
	}
}

/*Block levels declarations
------------------------------

Declaran variables que son innaccesibles desde afuera de un scope. Los scopes de bloques o léxicos se forman en:

	
- Dentro de una funcion 
- Dentro de un bloque  {...acá....}

Esto significa que ciertas variables solo pueden ser accedidas desde ciertos sectores.