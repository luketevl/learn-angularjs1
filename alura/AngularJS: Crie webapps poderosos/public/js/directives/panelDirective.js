angular.module('app').directive('myPanel', function(){
    return {
      restrict: "AE",
      scope: {
              titulo: "@",
      },
      templateUrl: 'views/myPanel.html',
      transclude: true,
      replace: true,
    };
});
