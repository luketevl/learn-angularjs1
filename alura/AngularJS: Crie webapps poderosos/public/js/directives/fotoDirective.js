angular.module('app').directive('minhaFoto', function(){
    return {
      restrict: "AE",
      scope: {
              titulo: "@",
              url: "@",
      },
      templateUrl: 'views/minhaFoto.html',
      replace: true,
    };
});
