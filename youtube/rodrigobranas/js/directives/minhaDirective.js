angular.module("listaTelefonica").directive('uiAlert', function(){
  return {
    templateUrl: "views/alert.html",
    replace: TRUE,
    restrict: "",
    scope: {
      error: "=error"
    },
    transclude: TRUE
  };
});
