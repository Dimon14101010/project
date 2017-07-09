;(function () {

    "use strict";

    angular.module ("app")
        .controller ('DashboardCtrl',DashboardCtrl);

    DashboardCtrl.$inject =['apiGet','$stateParams'];

    function DashboardCtrl(apiGet,$stateParams) {

        let vm = this;

        vm.model = {

            apiResponse: apiGet.apiId.get(),

            apiResponsePhoto : apiGet.apiPhoto.get()
        };

    };

})();

