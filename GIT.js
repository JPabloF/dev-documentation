// GIT

ORIGIN --> Es el repositorio remoto
MASTER --> Es el nombre de la rama

origin/master // EJ: "Origin" es una rama remota, "Master" el nombre de esa rama


Como listar todas las ramas locales
---------------------------------------

git branch // Lista solo las locales, marca con un * la actual

git branch -r // Lista las ramas remotas



////////////////////////////////////////////////////////////////////


						Working tree 


********************************************************************

							LOCAL

+*******************************************************************


		
		-----------------------------------------------------------
		1  < WORKING DIRECTORY > ( Zona de de trabajo )
		-----------------------------------------------------------

			
				
			//	( SUBIR CAMBIOS A STAGE )	

				$ git add <filename.ext> // > Subir cambios en archivo a la zona de empaquetado para preparar un commit.



			//	( BORRAR CAMBIOS &/o VOLVER A VERSION STAGEADA )

				$ git checkout -- <filename.ext> // > Borro los cambios hechos en working, para VOLVER a  una versión stageada / commiteada



		-----------------------------------------------------------		
		2  < INDEX / Stage >  ( Zona de preparación y empaquetado )
		-----------------------------------------------------------	


			//	( COMMITEAR CAMBIOS )

				$ git commit -m "message" // > Preparo un grupo de cambios para subir a HEAD

				$ git commit --amend	  // > Incluye cambios dentro del mismo commit


			//	( ELIMINAR DE STAGE Y VOLVER AL ESTADO WORKING ) 

				$ git reset // > Quito archivos de stage



		-----------------------------------------------------------
		3  < HEAD >  ( COMMITS VERSIONADOS )
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



************************************************************

 						REMOTE 

+***********************************************************


					ORIGIN / RAMA


///////////////////////////////////////////////////////////





-------------------
GESTIÓN DE ACCIONES
-------------------


//COMMIT DIRECTO
----------------

$ git commit -a -m "MY MESSAGE HERE" //> -a significa all, y agrega archivos unstageados también



// 	STASH & POP
----------------
$ git stash //> Me guarda los archivos y limpia el working 
$ git stash pop //> Me devuelve las cosas a working ...  * Requiere mergear
$ git stash show //> Lista de archivos cambiados y stasheados
$ git stash clear //> Limpiar lo stasheado



// MERGE DE STASH POP CON WORKING COPY


// VER COMMITS 
---------------

$ git log -1 // Muestra el ultimo o (n) ultimos commits

$ git log --since=2.weeks // Ultimos commits

$ git diff origin/master..HEAD //ver diferencia

$ git show <commit-id> // Detalle del ultimo commit

$ git log --follow <filename> // Ver historia del archivo



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


// REHACER UN COMMIT 
---------------------
$ git rebase --interactive 'bbc643cd^'
//In the default editor, modify pick to edit in the line whose commit you want to modify. Make your changes and then commit them with the same message you had before:

$ git commit --all --amend --no-edit
//to modify the commit, and after that

$ git rebase --continue


// CHERRY PICK
-----------------
//Make sure you are on the branch you want apply the commit to.

$ git checkout master

//Execute the following:

$ git cherry-pick <commit-hash>



Trackear o Stagear
---------------------

/*

Para crear un nuevo commit, debe llenarse "Index" con el contenido que quisieramos ver en un nuevo commit.
Se debe explicitar a GIT que cambios considerar utilizando "git add"

No hay diferencia entre actualizar un archivo "stagear" o agregar un nuevo archivo lleno de contenido "trackear". GIT verificará si hay nuevos elementos en index.*/



Flujo de archivo no trackeado
------------------------------

/* 4 ESTADOS de archivo en repo local:


UNTRACKED: El archivo es nuevo, git no lo tiene considerado, "git add" lo convierte en: "STAGED".


STAGED: GIT ya considera el archivo (TRACKED), y es parte del INDEX (STAGED), al commitear se convierte en: UNCHANGED


UNCHANGED: El archivo no ha cambiado desde el último commit, si se modifica o edita, ahora se convierte en: "UNSTAGED"

UNSTAGED: El archivo ha sido modificado pero no es parte del próximo commit aún. Se puede stagear nuevamente con "git add"



En conclusión: "git add" trackeara archivos nuevos, y stageara cualquier archivo. */

