;(function(){

    "use strict";

    angular
        .module("app")
        .directive("dashboard", function () {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: "app/directives/dashboard.html",
                controller: 'DashboardCtrl',
                controllerAs: 'vm'
            }
        })

})();