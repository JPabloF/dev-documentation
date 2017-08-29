/* INSTALACION	*/

/*Angular 4 es una actualización de Angular 2

	- Nos ofrece una estructura más limpia y fácil de mantener
	- Existe codigo re utilizable
	- Facilidad de testear */


//Libreria CLI

	CLI = COMMAND-LINE INTERFACE
	WEBPACK = Compilador automático a través de bundles que se inyectan automaticamente al html


// INSTALACIÓN ===============================================================



	//Instalación de CLI (sudo requerido ocasionalmente)
	npm install -g @angular/cli


	//Comprobación de CLI
	ng -v

	// Creo una carpeta, para crear un nuevo proyecto utilizando "new"
	ng new <directorio>

	//Acceso a la carpeta
	cd <directorio>

	//Arrancar el servidor y mirar localhost
	ng serve

	/* NUEVO COMPONENTE*/
	ng generate component <name>  // ng g c "name"




// ESTRUCTURA ===============================================================


	e2e 		 --> (Test automaticos que simulan un usuario real)
	node_modules --> Las librerias third party. Principalmente para desarrollo
	src 		 --> El codigo source de la app
		
		App  	 --> Almacenan al menos un component y un module	 			 
		Assets 		--> Archivos estaticos de la aplicación
		Enviroments --> Archivos de configuración para los distintos ambientes
		main.ts 	--> El punto de inicio de la aplicación. Bootstrapea el modulo principal de la app, desde donde todo comienza
		pollyfills 	--> Completa la diferencia de versiones entre el js soportado por el navegador y el utilizado por angular
		styless.css --> Para estilos globales de la app
		test.ts 	--> Para setear los ambientes de pruebas

	editor.config 	--> Donde se almacena la configuración
	git.ignore 		--> Para excluir archivos de git que no se necesitan
	karma.config.js --> Configuración de testeo karma
	package.json 		--> Referencias a las librerias que utiliza 
	protractor.config.js --> Para test end2end
	tsconfig.json 	--> Compilador de typescript
	tslint.js 		--> Chequea el typescript 	


//APP ======================================================================

app.component.html = Sirve para almacenar los elementos html


