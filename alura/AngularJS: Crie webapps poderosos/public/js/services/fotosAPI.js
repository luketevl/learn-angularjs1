angular.module('app').factory('FotosAPI', function($http){
  var _getFotos =  function (){
    return $http.get('/v1/fotos');
  };

  var _saveFoto = function(dados){
    return $http.post('/v1/fotos', dados);
  };
  return {
    getFotos: _getFotos,
    saveFoto: _saveFoto,
  };
});
