angular.module("listaTelefonica").provider("configValue", function(){
  this.$get = function(){
    return {
      generate: function(){
        return "uihfiwhfuiehfwuihfuwi";
      }
    }
  };
});
