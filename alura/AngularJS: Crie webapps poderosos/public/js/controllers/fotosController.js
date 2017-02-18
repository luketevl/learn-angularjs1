angular.module('app').controller('FotosController', function($scope, FotosAPI){

  $scope.fotos  = [];
  $scope.foto   = [];
  $scope.filtro = '';
  console.log($scope.filtro);
  FotosAPI.getFotos().then(function(results){
    $scope.fotos = results.data;
  }, function(erro){
    console.log(erro);
  });

  $scope.new = function(){
    FotosAPI.saveFoto($scope.foto).then(function(results){
      console.log(results.data);
    }, function(erros){
      console.log(erro);
    });
    console.log($scope.foto);
  };
});
