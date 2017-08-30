/* Como listar todas las ramas locales*/

git branch -r



//*********** LOCAL *****************************************/
//+*************************************************************


		//////////	WORKING DIRECTORY ( Zona de de trabajo )

			
				
			//	(+ --> Stage)	

				$ git add <filename.ext> // > Pasar un archivo "preparado" a stage


			//	(CTRL+Z -->  Working  <-- Stage  <-- History)

				$ git checkout -- <filename.ext> // > Borro los cambios hechos en working, para recuperar la version stageada / commiteada




		//////////	STAGE  ( Zona de preparación y empaquetado)
			


			//	(+  --> History)

				$ git commit -m "message" // > Mando los cambios al versionado
				$ git commit --amend	  // > Incluye mejoras bajo el mismo commit desde stage


			//	(-  --> Stage) 

				$ git reset HEAD <filename.ext>	// > Quito el archivo de stage sin borrar el working 	




		//////////	HISTORY	 (Versionado de paquetes commiteados)


			//	(+ --> REMOTE)

				$ git push // > Manda el commit a remoto



			// ( - --> stagge)
				$ git reset --soft HEAD~1	 //> Borra el commit y lo devuelve a stage	



			// (+ --> Working)
				$ git reset HEAD~1	//> (mixed) Borra el commit pero mantiene los cambios de working	



			// ( - --> WORKING)
				$ git reset --hard HEAD~1  //> Borra todo este commit incluso los cambios del working



//*********** REMOTE *****************************************/
//+*************************************************************



//***************************************************************





ORIGIN --> ES el repositorio remoto
MASTER --> Es el nombre de la rama
