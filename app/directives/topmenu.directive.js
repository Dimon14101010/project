;(function(){

    "use strict";

    angular
        .module("app")
        .directive("topMenu", function () {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: "app/directives/topmenu.template.html",
                controller: 'TopMenuCtrl',
                controllerAs: 'topVm'
            }
        })

})();