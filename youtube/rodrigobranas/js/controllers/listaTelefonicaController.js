// Localiza um MODULO
angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope, $filter, $http){
	$scope.app = "Lista Telefonica";
	$scope.classe = "selecionado";
	/*$scope.contatos = [
						{nome: $filter('uppercase')("Lucas"), telefone: "123", cor: "red", data: new Date(), valor: 53232},
						{nome: "Henrique", telefone: "324123", cor: "blue",  data: new Date(), valor: 2121},
						{nome: "Souza", telefone: "65464564", cor: "yellow", data: new Date(), valor: 4343}
						];*/
	$scope.contatos = [];

	// buscando dados ajax EXPLICITO

	var carregarContatos = function(){
		$http.get('contatos.json').success(function(data){
			$scope.contatos = data;
		});
	};

	$scope.operadoras = [
						{nome: "Oi", cod: 31, categoria: "FIXO"},
						{nome: "TIM", cod: 45, categoria: "Cel"},
						{nome: "VIDO", cod: 14, categoria: "Cel"}
						];
	$scope.addContato = function(contato){
		contato.data = new Date();
		contato.cor= 'black';
		contato.valor= '456';
		console.log(contato);
		$http.post('contatos.json', contato).success(function(){
			carregarContatos();
			$scope.contatos.push(angular.copy(contato));
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
		});
	};
	$scope.delContato = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			if(!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function(contatos){
		return isContatoSelecionado = contatos.some(function(contato){
			return contato.selecionado;
		});
	};
	$scope.ordernarPor = function(campo){
		$scope.criterioOrdenacao = campo;
	};

	carregarContatos();
});