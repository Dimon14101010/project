;(function () {
    
    "use strict";
    
    angular
        .module ('app')
        .config (function ($stateProvider , $locationProvider) {

            $stateProvider
                .state ('dashboard' , {
                    url: '/',
                    templateUrl: 'app/directives/dashboard.html'
                });

        });
    
})();