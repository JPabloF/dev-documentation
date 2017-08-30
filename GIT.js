/* Como listar todas las ramas locales*/

git branch -r



//*********** LOCAL *****************************************/
//+*************************************************************


		//////////	WORKING DIRECTORY ( Zona de de trabajo )

			
				
			//	(+ --> Stage)	

				git add <filename.ext> // > Pasar un archivo "preparado" a stage


			//	(CTRL+Z -->  Working  <-- Stage)
<<<<<<< HEAD
				git checkout -- <filename.ext> // > Borro los cambios hechos en working, para recuperar la version stageada / commiteada
=======
				git checkout -- <filename.ext> // > Borro los cambios hechos en working, para recuperar la version stageada
>>>>>>> a1a2f278deac4fc515efdcb805137202c4a0ba7b



		//////////	STAGE  ( Zona de preparación y empaquetado)
			

			//	(+  --> History)

				git commit -m "message" // > Mando los cambios al versionado



			//	(-  --> Stage) 

				git reset HEAD <filename.ext>	// > Quito el archivo de stage		




		//////////	HISTORY	 (Versionado de paquetes commiteados)


			//	(+ --> REMOTE)

				git push // > 



			// ( - --> stagge)
				git reset --soft HEAD~1	 //> Borra el commit y lo devuelve a stage	



			// (+ --> Working)
				git reset HEAD~1	//> Borra el commit pero mantiene los cambios de working	



			// ( - --> WORKING)
				git reset --hard HEAD~1  //> Borra todo este commit incluso los cambios del working



//*********** REMOTE *****************************************/
//+*************************************************************






//***	AGREGAR ARCHIVOS



//Staggear un archivo y marcarlo
git add <filename.ext>

//Como quitar un archivo de stagge y desmarcarlo
git reset <filename.ext>

//Quitar un archivo staggeado
git reset HEAD <filename.ext>


//Quitar los cambios locales de un archivo NO staggeado
git checkout -- <filename.ext>





// DESHACER

git reset [<mode>] [<commit>]




//COMMIT


$ git commit -m 'initial commit'
$ git add forgotten_file
$ git commit --amend
