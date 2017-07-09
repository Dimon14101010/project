;(function () {

    "use strict";

    angular.module ("app")
        .controller ('DashboardCtrl',DashboardCtrl);

    DashboardCtrl.$inject =['apiGet','$stateParams'];

    function DashboardCtrl(apiGet,$stateParams) {

        let vm = this;

        vm.model = {

            apiResponse: apiGet.apiId.get(),
            apiGetIdPhoto : apiGet.apiId.get.response.venues(),
            apiResponsePhoto : apiGet.apiPhoto.get({id : apiGetIdPhoto.id})
        };

    };

})();

