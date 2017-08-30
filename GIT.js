/* Como listar todas las ramas locales*/

git branch -r




******************************************************
					Working tree 
******************************************************






********************** LOCAL ******************************
+**********************************************************




		****** < WORKING DIRECTORY > ( Zona de de trabajo )

			
				
			//	(+ --> Stage)	

				$ git add <filename.ext> // > Pasar un archivo "preparado" a stage


			//	(CTRL+Z -->  Working  <-- Stage  <-- History)

				$ git checkout -- <filename.ext> // > Borro los cambios hechos en working, para recuperar la version stageada / commiteada




		****** < STAGE/INDEX >  ( Zona de preparación y empaquetado)
			


			//	(+  --> Head)

				$ git commit -m "message" // > Commiteo los cambios al head
				$ git commit --amend	  // > Incluye mejoras bajo el mismo commit desde stage


			//	(-  --> Stage) 

				$ git reset HEAD <filename.ext>	// > Quito el archivo de stage sin borrar el working 	




		****** < HEAD >  ( Versionado de paquetes commiteados)


			//	(+ --> REMOTE)

				$ git push // > Manda el commit al repo remoto
				$ git push origin <rama>// > Manda el commit al repo remoto y rama específica



			// ( - --> stagge)
				$ git reset --soft HEAD~1	 //> Borra el commit último y lo devuelve a stage	



			// (+ --> Working)
				$ git reset HEAD~1	//> (mixed) Borra el commit y el stage pero mantiene los cambios de working	



			// ( - --> WORKING)
				$ git reset --hard HEAD~1  //> Borra todo este commit incluso los cambios del working



********************** REMOTE ******************************
+***********************************************************


			ORIGIN / RAMA



//**********************************************************


//Agregar y commitear

git commit -a -m "MY MESSAGE HERE" //> -a significa all, y agrega archivos unstageados también



ORIGIN --> ES el repositorio remoto
MASTER --> Es el nombre de la rama
