;(function () {
    
    "use strict";
    
    angular
        .module ('app')
        .config (function ($stateProvider , $locationProvider) {

            $stateProvider
                .state ('dashboard' , {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard_template.html'
                });

        });
    
})();