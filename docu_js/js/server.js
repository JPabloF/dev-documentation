//Server conect

/*
Capítulo 3 - Conectando AngularJS ao servidor

A melhor forma de obter e enviar dados para o servidor é através de Ajax
O formato de dados para se usar nesta comunicação é JSON.

Estaremos utilizando um conceito chamado RESTful, que é uma comunicação HTTP que segue um padrão bastante simples, 
Utilizando cabeçalhos HTTP como POST, GET, PUT, DELETE.


Na forma mais simples de comunicação de dados, onde temos um objeto e as ações de criar, editar, listar e deletar objetos, 
resumimos o padrão RESTful às seguintes ações:

Método			http://site.com/produtos
----------------------------------------
GET				Listar todos os produtos
POST			Editar uma lista de produtos
PUT				Criar um novo produto na lista de produtos
DELETE			Excluir uma lista de produtos


Método			http://site.com/produto/1
-----------------------------------------
GET				Obter o produto cujo id é 1
POST			Em teoria nao possui funcionalidade
PUT				Edita ou cria um novo produto
DELETE			Exclui um produto cujo o id é 1


Os métodos GET não alterem dados, pois um método GET pode ser facilmente acessado através do navegador.

O AgularJS fornece duas formas distintas de trabalhar com estas conexões. 

1.- A mais simples, é através do serviço "$http", que pode ser injetado em um controller. 
2.- A segunda forma é através do serviço "$resource" que é uma abstração RESTful, funcionando como um data source.

***** 
Uso do $http

Sirve para hacer llamadas Ajaxs.

O uso do $http não deve ser ignorado, mesmo que o $resource seja mais poderoso. 
Em aplicações simples, ou quando deseja obter dados de uma forma rápida, deve-se utilizar $http.
$http é uma implementação ajax através do XMLHttpRequest utilizando JSONP. 
Iremos sempre usar JSON para troca de dados entre cliente e servidor.*/


//$http na sua forma mais simples
$http({method:'GET', url:'/someUrl'}).success(function(data){
	//haz algo
});

//O método get pode ser generalizado para:

$http.get
$http.get('/someUrl').success(function(data){
	//haz algo
});

/*Assim como existe o get, existem os outros também, conforme a lista a seguir:

$http.get
$http.head
$http.post
$http.put
$http.delete
$http.jsonp

Para todos estes métodos, o AngularJS configura automaticamente o cabeçalho da requisição HTTP. 

Além dos cabeçalhos, o AngularJS também serializa o objeto JSON que é repassado entre as requisições. 
Se um objeto é enviado para o servidor, ele é convertido para JSON. 
Se uma string JSON retorna do servidor, ela é convertida em objeto utilizando um parser JSON.

***** Exemplo com $http
Vamos criar um exemplo utilizando o serviço $http, para obter uma lista de dados e preencher uma tabela. 
Inicialmente, criamos um arquivo simples no servidor que, em teoria, retornaria com informações de uma lista de objetos em JSON. 
Como ainda não estamos trabalhando com banco de dados, esta lista será criada diretamente no arquivo, em formato json.*/

{ "fruits":
	[
		{
		"id": 1,
		"name": "Apple",
		"color": "Red"
		},
		{
		"id": 2,
		"name": "Banana",
		"color": "Yellow"
		},
		{
		"id": 3,
		"name": "watermelon",
		"color": "Green"
		},
		{
		"id": 4,
		"name": "Orange",
		"color": "Orange"
		}
	]
}

//Neste exemplo, estamos inserindo o arquivo listFruits.html na pasta c:\wamp\www\http-example\ 
//O próximo passo é criar o arquivo index.html, que contém a camada view do exemplo.

	
	//index.html
    // <div ng-controller="appController">
    //   <button ng-click="getData()">Get Data</button>
    //   <h2 ng-show="fruits.length>0">Fruits</h2>
    //   <ul>
    //       <li ng-repeat="fruit in fruits" >
    //          {{fruit.id}} - {{fruit.name}} ({{fruit.color}})
    //       </li>
    //   </ul>
    // </div>


//No arquivo index.html não temos nenhuma novidade, pois a regra de negócio está no seu controller, onde realizamos o Ajax

var app = angular.module('app',[]);

app.controller('appController',function ($scope,$http){
	$scope.fruits = Array();

	$scope.getData = function(){
		$http.get("listFruits.html").success(function(data){
							//el .fruits obedece al nombre del objeto del array de objetos
			$scope.fruits = data.fruits;
			console.log($scope.fruits);
		}).error(function(data){
			alert("Error...");
			console.log(data);
		});
	}
});

/*
No controller da aplicação, criamos o método getData, que é executado quando clicamos no botão “GetData” da view (index.html). 

Neste método, usamos a variável $http para as requisições Ajax. Repare que ela é repassada pelo parâmetro do controller, após o $scope. Neste caso, o AngularJS encarrega-se de injetar o serviço http nesta variável.

Temos o método $http.get onde estamos realizando uma requisição Ajax acessando o arquivo listFruits.html, que contém a resposta Json. 
Neste método, podemos concatenar outro método chamado success, que é executado se a requisição HTTP GET for realizada com sucesso. 
Neste caso, a reposta do servidor estará armazenada na variável data, e poderemos acessar a variável data.fruits que contém o array de objetos que serão usados no loop da view.





Com este simples exemplo conseguimos mostrar como é fácil realizar uma requisição Ajax para obter dados do servidor. 
Pode-se usar o serviço $http para toda a sua aplicação, mas quando estamos utilizando RESTfull, existe outro serviço que torna o acesso ao servidor mais abstrato, chamado de resource, no qual veremos a seguir.





**** Uso do $resource
Aprendemos a realizar chamadas Ajax através do $http e caso haja necessidade, podemos abstrair ainda mais a forma como o AngularJS acessa o servidor.

Neste contexto entra o $resource que estabelece um padrão de comunicação RESTfull entre a aplicação e o servidor.

Para que possamos usar esta biblioteca é preciso adicionar o arquivo angular-resource.js no documento HTML. Ou seja, além da biblioteca padrão também incluímos a biblioteca resource, conforme o exemplo a seguir.

*/

script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-resource.js"

/*
Exemplo simples com $resource

Com a biblioteca devidamente instalada, devemos carregá-la, através de um parâmetro na criação do módulo da aplicação. 
Para acompanhar este processo, vamos criar um exemplo simples, utilizando operações CRUD com o $resource.

	<body ng-controller="phoneController">

		<input type="text" ng-model="idPhone" value="1"/>

		<button ng-click="getPhoneById()">GetPhone By Id</button>

		<button ng-click="getPhones()">GetPhones</button>

		<button ng-click="savePhone()">Save Phone</button>

		<button ng-click="deletePhone()">Delete Phone</button>
		*/

var $app = angular.module('app',['ngResource']);
													//parametro inyectado
$app.controller("phoneController",function ($scope,$resource){

	//Usamos $resource para definir a criação da variável Phone.
	//Esta variável é criada e configurada como um resource, sendo o primeiro parâmetro a url de acesso ao servidor. 
	var Phone = $resource("/phones/:phoneId");

	$scope.getPhoneById = function(){
		Phone.get({phoneId:$scope.idPhone},function(data){
			$scope.phone=data;
		});
	}

	$scope.getPhones = function(){
		Phone.query(function (data){
			$scope.phones = data;
		});
	}


	$scope.savePhone = function(){
		p = new Phone();
		p.number="1111-2222"
		p.save();
	}

	$scope.deletePhone = function(){
		Phone.delete({phoneId:10});
	}

});


/*
Logo temos o método getPhoneById que é chamado pela view e usa Phone.get para realizar uma chamada Ajax ao servidor, 
conforme a figura a seguir.

https://leanpub.com/site_images/livro-angularJS/chapter3----GetPhoneById.png

O mesmo acontece com os outros métodos, e como podemos ver na figura a seguir, 
quando realizamos um save é realizado um POST no servidor, segundo as especificações do RESTfull.

https://leanpub.com/site_images/livro-angularJS/chapter3----SavePhone.png

Nesta figura, temos em detalhe o POST e a variável number sendo enviada como json (e não na URL do POST).

Este exemplo está em sua forma mais simples e possivelmente o resource não sera criado em um controller da aplicação.*/


