angular.module('listaTelefonica').factory('contatosAPI', function($http){
  var _getContatos = function(){
      return $http.get('contatos.json');
  };
  return {
    getContatos: _getContatos
  }
});
