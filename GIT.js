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


			//	(-  --> Stage --> working ) 

				$ git reset HEAD <filename.ext>	// > Quito el archivo de stage sin borrar el working 	




		****** < HEAD >  ( Versionado de paquetes commiteados)


			//	(+ --> REMOTE)

				$ git push // > Manda el commit al repo remoto
				$ git push origin <rama>// > Manda el commit al repo remoto y rama específica



			// ( - --> stagge)
				$ git reset --soft HEAD~1	 //> Borra el último "commit" y lo devuelve a stage	



			// (+ --> Working)
				$ git reset HEAD~1	//> (mixed) Borra el último "commit + el stage" pero mantiene los cambios de working	



			// ( - --> WORKING)
				$ git reset --hard HEAD~1  //> Borra todo este commit incluso los cambios del working



********************** REMOTE ******************************
+***********************************************************


			ORIGIN / RAMA



**********************************************************


//Agregar y commitear

$ git commit -a -m "MY MESSAGE HERE" //> -a significa all, y agrega archivos unstageados también



ORIGIN --> ES el repositorio remoto
MASTER --> Es el nombre de la rama



//Guardar en stash
$ git stash //> Me guarda los archivos y limpia el working 
git stash pop //> Me devuelve las cosas a working



$ git log origin/master..HEAD  //Me muestra mi ultimo commit local

$ git diff origin/master..HEAD //ver diferencia



//IGNORAR ARCHIVOS LOCAL
touch .gitignore


$ git clean -n //> Me muestra que va a borrar
$ git clean -f //> Quita los archivos no trackeados locales


$ git show <commit number>


$ git log --follow filename 



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
