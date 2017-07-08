;(function () {

    "use strict";

    angular.module ("app")
        .controller ('DashboardCtrl',DashboardCtrl);

    DashboardCtrl.$inject =['apiGet'];

    function DashboardCtrl(apiGet) {

        let vm = this;

        vm.model = {
            apiResponse: apiGet.apiId.get()
        };

    };

})();