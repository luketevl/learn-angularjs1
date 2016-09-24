angular.module("listaTelefonica").service("operadorAPI", function($http){

  this.getOperadoras = function(){
      return $http.get('operadoras.json');
  };
});
