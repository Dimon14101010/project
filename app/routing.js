;(function () {
    
    "use strict";
    
    angular
        .module ('app')
        .config (function ($stateProvider , $locationProvider) {

            $stateProvider
                .state ('dashboard' , {
                    url: '/',
                    templateUrl: 'app/controllers/dashboard_template.html'
                });

        });
    
})();