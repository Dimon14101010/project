;(function () {

    "use strict";

    angular.module ("app")
        .factory ('apiGet',apiGet);

    apiGet.$inject =['$resource'];

    function apiGet($resource) {

        let api = {
            apiId : $resource('https://api.foursquare.com/v2/venues/search?v=20161016&ll=41.878114%2C%20-87.629798&query=coffee&intent=checkin&client_id=AKQNZODERYZOMZKGMRGKOQLYGDXQCQPKTY3LS5QCPDEEJ3VK&client_secret=RO1TAM5TEW2GKM54LLC2VSYQEM5JOJOILVKQXMFNZ2A1V4YT',{id: '@id'})
        }

    return api;

    };

})();


