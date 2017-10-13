// GIT

ORIGIN --> Es el repositorio remoto
MASTER --> Es el nombre de la rama

origin/master // EJ: Nombre defecto de una rama remota master.


Como listar todas las ramas locales
---------------------------------------

git branch // Lista solo las locales, marca con * la actual

git branch -r // Lista remotas



/////////////////////////////////////////////////////////////////////

					Working tree 


********************** LOCAL ***************************************

+*******************************************************************


		
		-----------------------------------------------------------
		1 ****** < WORKING DIRECTORY > ( Zona de de trabajo )
		-----------------------------------------------------------

			
				
			//	( SUBIR A STAGE )	

				$ git add <filename.ext> // > Subir cambios en archivo a la zona de empaquetado para preparar un commit.



			//	( BORRAR CAMBIOS &/o VOLVER A VERSION STAGEADA )

				$ git checkout -- <filename.ext> // > Borro los cambios hechos en working, para VOLVER la version stageada / commiteada



		-----------------------------------------------------------		
		2 ****** < STAGE/INDEX >  ( Zona de preparación y empaquetado )
		-----------------------------------------------------------	


			//	( COMMITEAR CAMBIOS )

				$ git commit -m "message" // > Commiteo los cambios al head
				$ git commit --amend	  // > Incluye mejoras bajo el mismo commit desde stage


			//	( ELIMINAR DE STAGE Y VOLVER AL ESTADO WORKING ) 

				$ git reset // > Quito el archivo de stage y me quedo con el working



		-----------------------------------------------------------
		3 ****** < HEAD >  ( COMMITS VERSIONADOS )
		-----------------------------------------------------------

			//	( SUBIR COMMIT A REMOTO )

				$ git push // > Manda el commit al repo remoto
				$ git push origin <rama>// > Manda el commit al repo remoto y rama específica



			// ( ELIMINAR COMMIT  &  DEVOLVERLO A STAGE)

				$ git reset --soft HEAD~1	 //> Borra el último "COMMIT" y lo devuelve a STAGGE, es como bajarlo de nivel	



			// ( ELIMINAR COMMIT  &  DEVOLVER A STAGE  &  MANTENER EL WORKING INTACTO )

				$ git reset HEAD~1	//> (mixed) Borra el último "COMMIT + STAGGE" pero mantiene los cambios del working directory	



			// ( ELIMINAR COMMIT  &  BORRAR EL WORKING DIRECTORY )

				$ git reset --hard HEAD~1  //> Borra TODO este commit incluso los cambios del working



********************** REMOTE ******************************

+***********************************************************


			ORIGIN / RAMA


+*******************************************************************

////////////////////////////////////////////////////////////////////





-------------------
GESTION DE ACCIONES
-------------------

//COMMIT DIRECTO
----------------

$ git commit -a -m "MY MESSAGE HERE" //> -a significa all, y agrega archivos unstageados también



// 	STASH & POP
----------------
$ git stash //> Me guarda los archivos y limpia el working 
$ git stash pop //> Me devuelve las cosas a working ...  * Requiere mergear



// VER COMMITS 
---------------
$ git log origin/master..HEAD  //Me muestra mi ultimo commit local

$ git diff origin/master..HEAD //ver diferencia

$ git show <commit-id> // Detalle del ultimo commit

$ git log --follow filename // Ver historia del archivo



//IGNORAR ARCHIVOS LOCAL
------------------------
touch .gitignore


//ELIMINAR ARCHIVOS
-------------------

$ git clean -n //> Me muestra que va a borrar
$ git clean -f //> Quita los archivos no trackeados locales



//AMMEND
$ git commit --amend  //> Modifica el mensaje si no hay nada stageado
$ git commit --amend -m "an updated commit message" //> Modificar el mensaje del update de commit
$ git commit --amend --no-edit //> Me permite complementar un commit incompleto sin cambiar el mensaje


// Rehacer un commit
$ git rebase --interactive 'bbc643cd^'
//In the default editor, modify pick to edit in the line whose commit you want to modify. Make your changes and then commit them with the same message you had before:

$ git commit --all --amend --no-edit
//to modify the commit, and after that

$ git rebase --continue
