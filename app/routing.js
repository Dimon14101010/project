;(function () {
    
    "use strict";
    
    angular
        .module ('app')
        .config (function ($stateProvider , $locationProvider) {

            $locationProvider.html5Mode(true);
            $stateProvider
                .state ('dashboard' , {
                    url: '/',
                    templateUrl: 'app/directives/dashboard.html',
                    controller: 'DashboardCtrl',
                    controllerAs: 'vm'
                });

        });
    
})();