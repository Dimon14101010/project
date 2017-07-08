;(function () {

    "use strict";

    angular.module ("app")
        .factory ('apiGet',apiGet);

    apiGet.$inject =['$resource'];

    function apiGet($resource) {

        let api = {
            apiId : $resource('https://api.foursquare.com/v2/venues/4bf58dd8d48988d16a941735',{name: '@name'})
        }
    return api;
    };

})();