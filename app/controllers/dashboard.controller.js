;(function () {

    "use strict";

    angular.module ("app")
        .controller ('DashboardCtrl',DashboardCtrl);

    DashboardCtrl.$inject =['apiGet','$stateParams'];

    function DashboardCtrl(apiGet,$stateParams) {

        let vm = this;

        vm.model = {

            apiResponse: []
        };

        apiGet.apiId.get().$promise.then(function(response) {
            vm.model.apiResponse = response;
            vm.model.apiResponse.response.groups[0].items.forEach(function(venue) {
                venue.itsPhotos = apiGet.apiPhoto.get({id: venue.venue.id})
            })
        })

    };

})();

