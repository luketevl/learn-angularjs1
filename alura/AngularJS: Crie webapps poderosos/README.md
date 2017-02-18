* CONTEUDO
  = AngularJS é uma framework MVC

* COMANDOS
  = npm install | Instala a dependencia do seu projeto
  = npm start   | Sobe sua aplicação

* PASSOS
  = criar arquivo da aplicacao
    = main.js

* METODOS
  = angular. | CORE DO ANGULAR
    = .module(nome, [dependencias]);  | CRIA MODULO
    = .module(nome);                  | BUSCA MODULO
  = angular.module(nomeAPP)
    = .controller(NomeController, function($scope){});      | CRIANDO UM CONTROLLER
    = .service(NomeService, function($scope){this.funcao}); | CRIANDO UM SERVICE de forma Construtora
    = .factory(NomeService, function($scope){return});            | CRIANDO UM SERVICE de forma FABRICA
    = .config(function(){}); | CRIA configuracoes
    = .directive(nomeDiretiva, function(){return});
      = restrict: - restringir modo de utilizacao => A -> Atributo, E -> Elemento, C-> CLASSE, M -> Comentário | Pode combinar atributos
      = template 'inserir html'
			= templateUrl 'inserir arquivo html'
			= replace 'remove o elemento da directive'
			= restrict 'restringir modo de utilizacao' A -> Atributo, E -> Elemento, C-> CLASSE, M -> Comentário | Pode combinar atributos
			= scope {} 'cria um scopo isolado para a directive'
				= Passar parametros
					= @ 'PREFIXAR direto, STRING'
          = & 'PASSA UMA EXPRESSAO que vai ser AVALIADA'
					= = 'PREFIXAR com data binding'
			= transclude 'Encapsular conteudo', ERDA TODAS AS PROPRIEDADES mesmo sendo outro escopo
				= inserir ng-transclude 'Definir onde vai aparecer'
			= require: "ngModel" - 'Acessa API'
				= ^uiAccordions , 'Prefixando, pegando elemento pai'
			= link: function(scope, element, attrs, require, controller){} 'Executada DEPOIS do template compilado, USADA para interarir com a DOM'
			= controller: = 'Definir uma API, compartilhar com outroas directives'
				= é uma função construtora, acessando pelo this
    = $routeProvider.when(url,{  - 'Para ONDE VOU'
  			templateUrl: 'view/contatos.html',
  			controller: 'nomeController',
  			resolve:{ - 'Resolver DEPENDENCIAS, CONDICAO DE ENTRADAS, só entra se promessas forem TRUE'
    				}
          = $routeProvider.when(url:fotoID,{  - ': é CURINGA passa PARAMETROS'
		= $routeProvider.otherwise({redirectTo: '/rotaPadrao'});  - 'DEFINE COMPORTAMENTO QUANDO NAO ACHA A ROTA'
    = $locationProvider.html5Mode(true); || ATIVA MODULO HTML 5 NAS ROTAS
      = <base href="/"> | Tem que colocar a base

* DIRECTIVES
  = ng-app          | Vincula a aplicação e carrega o MODULO
  = ng-controller   | Seta um CONTROLLER para uma parte do DOM
  = ng-repeat       | Usado para LOOP
    = ng-repeat="item in itens"
    = ng-repeat="item in itens | filter: campo"
    = ng-repeat="item in itens | filter: campo: true" | SO retorna se for EXATAMENTE IGUAL
      = ng-leave-active | Cria essa classe, quando esta deixando
  = ng-model        | Manda da VIEW para o CONTROLLER
  = ng-model-options | Seta algumas opções para o NG-model
    = ng-model-options="{debounce: 6000}" | Só vai para o ng-model depois de um TEMPO
  = ng-bind | LE o valor da model
  = ng-view | Inserir uma pagina dentro, Template da ROTA acessada
  = ng-include | Incluir arquivo. IMPORTANTE colocar com aspas simples
    = ng-include = "'arquivo'"
  = ng-submit | "Evento de submit"
  = ng-click  | "Evento de clique"
  = ng-show     | Exibição CONDICIONAL
  = ng-disabled     | HABILITA DESABILITA formulario
  = ng-maxlength     | Valida TAMANHO MAXIMO do campo
  = ng-options        | Renderizar SELECTs
    = <select ng-options="objetos.id as objetos.nome for objeto in objetos">


* MODULOS
  = [ngAnimate]   | MODULO DE ANIMACAO
  = [ngRoute]     | MODULO DE ROTAS
  = [ngResource]  | MODULO DE INTERAÇÃO COM O RESTFULL

* SERVIÇOS
  = $http           | REQUISICOES HTTP
    = .get(url).then(callbacksucesso, callbackerror);
    = .post(url, dados).then(callbacksucesso, callbackerror);
    = .put(url + param, dados).then(callbacksucesso, callbackerror);
    = .delete(url + param).then(callbacksucesso, callbackerror);
  = $routeParams           | OBTEM parametros da ROTA
  = $resource        | Interacao com RESTFULL
    = $resource(url:param, ); | DEFINE A URL e OS PARAMETROS
      = $resource(url:param, QUERYSTRING, {nome:{method: "PUT"}} ); | DEFINE A URL e OS PARAMETROS PUT
    = $resource.query(callbacksucesso, callbackerror); | FAZ UMA CONSULTA
    = $resource.delete({param}, callbacksucesso, callbackerror); | Faz uma consulta tipo DELETE para o RESTFULL
  = $q | Cria uma promessas
    = return $q(function(callbacksucesso, callbackerror));
  = $watch(propriedade, funcao); | ESCUTANDO A PROPRIEDADE NO DOM
  = $broadcast(funcao) | Disparar um EVENTO
    = $scope.$broadcast
  = $on | Quando evento for disparado
    = $on(evento, funcao);
  = $scope | Escopo local
  = $rootScope | Escopo GLOBAL

* FILTROS
  = filter: filtro | Filtra de acordo com uma string
  = filter: filtro: TRUE | Filtra de acordo com uma string e se for completa
  = uppercase | COLOCA LETRA MAIUSCULAS
    = (var | uppercase)
* ANGULAR EXPRESSION
  = INTERPOLAÇÃO | PEGAR VALORES DO ANGULAR
    = {{nome}}
  = ng-bind="campo" | LE O VALOR

* CICLO DE VIDA
  = TWO WAY DATA BINDING
		= Quando compilado, fica ESCUTANDO os ng-model e avisa as DIRETIVAS

* OBSERVAÇÕES
  = Sempre que criar um .JS importar esse arquivo
  = Nomeclaturas
    = controller é PrimeiroMaiusculo
  = IMPORTANTE
    = Passar o $scope
    = no http funcao do results tem propriedade .data que tem o retorno que queremos
  = VALIDAR FORMULARIOS deve desligar a validacao do HTML 5
    = <form novalidate></form>
      = nomedoForm.$submitted | Valida se formulario foi submetido
      = nomedoForm.$valid | Verifica se FORMULARIO esta VALIDO
      = nomedoForm.$invalid | Verifica se FORMULARIO esta INVALIDO
      = Angular usa o nomedoForm.nomedoCampo
        = nomedoForm.nomedoCampo.$error | Busca os erros do FORM
          = nomedoForm.nomedoCampo.$error.REQUIRED | Verifica a obrigatoriedade
  = ROTAS
    = :NomeVar | Passa variavel na ROTA, acessa a variavel pelo nome dado na rota
  = Controller ele tem hierarquia
  = JQLITE | USADO PARA INTERAGIR COM O DOM
    = CARREGAR JQUERY antes do ANGULAR ele troca JQLITE por JQUERY
